from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_manager, LoginManager, login_user, login_required, current_user, logout_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError, Email
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from datetime import datetime
import uuid
import json
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'thisisasecretkey'
app.config["JSON_SORT_KEYS"] = False
app.json.sort_keys = False
app.jinja_env.policies["json.dumps_kwargs"] = {"sort_keys": False}
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))
class User(db.Model, UserMixin):
    #need to create a row for each user. #rows don't need to be explicitly declared, sinc each user as of now will just be one row
        #each row will have a column for email
        #each row will have a column for password
        #update routines can be implemented to udpate tables later to store user information such as the tables and what not
            #or would those be saved as cookies using session instead of this?, but they need to be saved to be used across different sessions
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(254), nullable=False, unique=True) #email must be unique
    username = db.Column(db.String(20), nullable=False, unique=True)
    password = db.Column(db.String(80), nullable=False)
    tier_lists = db.Column(db.Text, nullable=True)
    sec_questions = db.Column(db.Text, nullable = True)
    #probably don't need to worry too much about bcrypt hash size, since this will just truncate, which is still plenty safe.
class LoginForm(FlaskForm):
    email = StringField(validators=[InputRequired(), Email(), Length(min=6, max=254)], render_kw={"Placeholder": "Email"})
    password = StringField(validators=[InputRequired(), Length(min=8, max=20)], render_kw={"Placeholder": "Password", "type" : "password"})
    submit = SubmitField("Login") # this will be used to represent the button in the html form

    def validate_email(self, email):
        existing_user_email = User.query.filter_by(email=email.data).first()
        if not existing_user_email:
            raise ValidationError("An account with this email does not exist! Try signing up.")
    
    def validate_password(self, password): #checking that the password matches
        existing_user_password = User.query.filter_by(password=password.data).first() #returns an user I am pretty sure
        if existing_user_password and not bcrypt.check_password_hash(existing_user_password.password, password.data):
            raise ValidationError("Wrong Password and/or username!")
class RegisterForm(FlaskForm):
    email = StringField(validators=[InputRequired(), Email(), Length(min=6, max=254)], render_kw={"Placeholder": "Email"})
    username = StringField(validators=[InputRequired(), Length(min=8, max=20)], render_kw={"Placeholder": "Username"})
    password = StringField(validators=[InputRequired(), Length(min=8, max=20)], render_kw={"Placeholder": "Password", "type" : "password"})
    submit = SubmitField("Sign up")

    #we need to check that this user isnt a duplicate
    #any method you write with the pattern "validate_" will get detected by one of these libraries (I forget which)
    #so that when a post request is encountered, it runs this method to validate the user entries
    
    #**NOTICE**#
    #IM GOING TO CHANGE THIS IN A MOMENT TO RETURN AN ERROR WITHIN THE LOGIN/REGISTER FILES AND ROUTES
    #BECAUSE RIGHT NOW IT RETURNS A BLANK PAGE WITH THE ERROR WHICH IS PRETTY LAME
    #THIS MIGHT RESULT IN ME MOVING THIS TO THE ROUTE METHODS UNTIL WE FIGURE OUT HOW THAT WORKS
    #THIS IS FUNCTIONAL BUT NOT PLEASANT LOOKING FOR NOW
    def validate_username(self, username):
        existing_user_username = User.query.filter_by(username=username.data).first()
        if existing_user_username:
            raise ValidationError("An account with this username already exists!")
    def validate_email(self, email):
        existing_user_email = User.query.filter_by(email=email.data).first()
        if existing_user_email:
            raise ValidationError("An account with this email already exists!")
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST', 'GET'])
def login():
    form = LoginForm() #we will pass this over to our html to be rendered later
    if form.validate_on_submit(): #this checks if it is POST request. but since it is handled by a function, do I still need the methods list up above??
        user= User.query.filter_by(email=form.email.data).first()
        if user: #if none, that means that the user tried to login with a username that doesn't exist
            login_user(user)
            return redirect('profile-page') #apparantly the profile-page should be the real redirector? Let me know if this is wrong
        else: #I'm adding this in the event that we may want to handle failed logins here later
            pass
    return render_template('login.html', form=form)

@app.route('/register', methods=['POST', 'GET'])
def register():
        #that means cross check the information passed by the form with the database.
    #start by declaring the form 
    form=RegisterForm()
    if form.validate_on_submit():
        #no need to check whether this is duplicate user, since this check is handled within the form class already (the one we wrote earlier)
        #so why write the check in the class and not here? because the form class we wrote inherits from flask_form (wtforms) which
        #saves the user inputs. So if the user enters invalid input, when the page hits a quick refresh, instead of having to re-enter
        #everything, their inputs are just there and they have to fix it, rather than restart. thats the only reason.
        #you could handle that here also, but doing so would require manual code, where as wtforms handles it automatically for us!
        hashed_password=bcrypt.generate_password_hash(form.password.data)
        new_user=User(email=form.email.data, username=form.username.data, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        login_user(new_user)
        return redirect(url_for('sec_form')) #replace this with the dashboard or the link to the linked lists main page, for now I am just kicking user to log in
    return render_template('signup.html', form=form)

@app.route('/sec_form', methods = ['GET', 'POST'])
@login_required
def sec_form():
    if request.method == 'GET':
        return render_template('sec-questions.html')
    else:

        #the questions
        q1 = request.form.get('q1')
        q2 = request.form.get('q2')
        q3 = request.form.get('q3')

        #the answers
        a1 = request.form.get('a1').strip().lower()
        a2 = request.form.get('a2').strip().lower()
        a3 = request.form.get('a3').strip().lower()

        chosen_questions = set([q1, q2, q3])
        if len(chosen_questions) < 3:
            flash("Please pick 3 different questions")
            return redirect(url_for('sec_form'))
        
        hashed_a1 = bcrypt.generate_password_hash(a1).decode('utf-8')
        hashed_a2 = bcrypt.generate_password_hash(a2).decode('utf-8')
        hashed_a3 = bcrypt.generate_password_hash(a3).decode('utf-8')

        recovery_data = [(q1, hashed_a1), (q2, hashed_a2), (q3, hashed_a3)]
        recovery_str = json.dumps(recovery_data)

        current_user.sec_questions = recovery_str
        db.session.commit()
        return redirect(url_for('profilePage'))

@app.route('/recovery', methods=['GET', 'POST'])
def recovery():
    if request.method == 'GET':
        recovery_user_id = session.get('recovery_user_id')
        if not recovery_user_id:
            return render_template('recovery-page.html')

        recovery_user = db.session.get(User, recovery_user_id)
        if not recovery_user or not recovery_user.sec_questions:
            session.pop('recovery_user_id', None)
            session.pop('recovery_verified', None)
            flash("Couldn't load recovery questions for that account.")
            return redirect(url_for('recovery'))

        recovery_data = json.loads(recovery_user.sec_questions)
        q1 = recovery_data[0][0]
        q2 = recovery_data[1][0]
        q3 = recovery_data[2][0]

        return render_template('recovery-page.html', q1=q1, q2=q2, q3=q3)
    else:
        recovery_user_id = session.get('recovery_user_id')
        if not recovery_user_id:
            email = request.form.get('email').strip().lower()
            recovery_user = User.query.filter_by(email=email).first()

            if not recovery_user or not recovery_user.sec_questions:
                flash("We couldn't find recovery questions for that email.")
                return redirect(url_for('recovery'))

            session['recovery_user_id'] = recovery_user.id
            session.pop('recovery_verified', None)
            return redirect(url_for('recovery'))

        recovery_user = db.session.get(User, recovery_user_id)
        if not recovery_user or not recovery_user.sec_questions:
            session.pop('recovery_user_id', None)
            session.pop('recovery_verified', None)
            flash("Recovery session expired. Please try again.")
            return redirect(url_for('recovery'))

        recovery_data = json.loads(recovery_user.sec_questions)
        a1 = recovery_data[0][1]
        a2 = recovery_data[1][1]
        a3 = recovery_data[2][1]

        #check that the answers match 
        form_a1 = request.form.get('form_a1').strip().lower()
        form_a2 = request.form.get('form_a2').strip().lower()
        form_a3 = request.form.get('form_a3').strip().lower()

        check1 = bcrypt.check_password_hash(a1, form_a1)
        check2 = bcrypt.check_password_hash(a2, form_a2)
        check3 = bcrypt.check_password_hash(a3, form_a3)

        if check1 and check2 and check3:
            session['recovery_verified'] = True
            return redirect(url_for('newpass'))
        else:
            flash("incorrect answer(s)")
            return redirect(url_for('recovery'))

@app.route('/newpassword', methods = ['GET', 'POST'])
def newpass():
    recovery_user_id = session.get('recovery_user_id')
    recovery_verified = session.get('recovery_verified')

    if not recovery_user_id or not recovery_verified:
        flash("Please complete account recovery first.")
        return redirect(url_for('recovery'))

    recovery_user = db.session.get(User, recovery_user_id)
    if not recovery_user:
        session.pop('recovery_user_id', None)
        session.pop('recovery_verified', None)
        flash("Recovery session expired. Please try again.")
        return redirect(url_for('recovery'))

    if request.method == 'GET':
        return render_template('new-password.html')
    else:
        password = request.form.get('newpass')
        passrepeated = request.form.get('newpassrepeated')

        if password == passrepeated:
            newpassword = bcrypt.generate_password_hash(password)
            recovery_user.password = newpassword
            db.session.commit()
            session.pop('recovery_user_id', None)
            session.pop('recovery_verified', None)
            return redirect(url_for('login'))
        else:
            flash("the passwords dont match")
            return redirect(url_for('newpass'))
#Temporary variables for testing comment functionality and like/views functionality (replace this with a database table or other tracking method as needed)
#user_likes = {} # Dictionary to track the state of user likes (Key = username, Value = True/False) to ensure users can only like once.
#likes = 0 # Count likes
#views = 0 # Count page views
#viewers = set() # Track unique viewers to prevent view count from updating on page refreshes by the same user. Improve this later using session tracking or cookies.

@app.route('/dashboard', methods=['GET'])
def dashboard ():
    #global likes
    #global views
    
    # if current_user.username not in viewers:
    #     viewers.add(current_user.username)
    #     views += 1
    #liked_status = user_likes.get(current_user.username, False)

    if not current_user.tier_lists:
        return render_template('dashboard.html')
    
    saved_lists = json.loads(current_user.tier_lists)
    index = request.args.get("index", default = None, type = int)

    if index is None or index < 0 or index >= len(saved_lists): #all possible things that could go wrong
        return render_template('dashboard.html')
    
    
    current_list = saved_lists[index]
    if "comments" not in current_list: #doing this just to be safe
        current_list["comments"] = []
    #return render_template('dashboard.html', comments=comments_list, user=current_user, likes=likes, liked=liked_status, views=views, current_list=current_list)
    return render_template('dashboard.html', user = current_user, current_list=current_list)

@app.route('/post-comment', methods=['POST'])
@login_required
def post_comment():
    content = request.form.get('comment-input')
    title = request.form.get('title')
    payload_raw = request.form.get('payload') 
    index = request.form.get('index', type=int)
    if not content or not content.strip(): #strip to deal with white spaces and stuff like that. so we get only proper real comments
        return redirect(url_for('dashboard'))

    if not current_user.tier_lists:
        return redirect(url_for('dashboard'))

    payload = json.loads(payload_raw)
    savedlists = json.loads(current_user.tier_lists)

    for lst in savedlists:
        if lst["title"] == title and lst["payload"] == payload:
            if "comments" not in lst:
                lst["comments"] = []
            
            lst["comments"].append ({"user" : current_user.username, "content" : content.strip(), "time": datetime.now().strftime("%Y-%m-%d %H:%M")})
            break
    
    current_user.tier_lists = json.dumps(savedlists)
    db.session.commit()
    return redirect(url_for('dashboard', index = index))

@app.route('/profile-page')
@login_required # Ensures only logged-in users can access this
def profilePage():
    if current_user.tier_lists: #tierlists is currently just a json string of text, even if it looks like an arrya of dictionaries, python is not interpreting it as such until we run the proper trasnlating methods
        saved_lists = json.loads(current_user.tier_lists)
    else:
        saved_lists = []

    lstLength = len(saved_lists)
    # current_user is provided by flask_login and contains the data from the User class
    return render_template('profile-page.html', user=current_user, tier_lists = saved_lists, length=lstLength)

@app.route('/save-list', methods = ['POST'])
@login_required
def save_list():
    #this route ties to the new react build, should tie to the database and save the lists here.
    lst = request.get_json()

    if not lst:
        return {'error' : 'no data was received'}, 400 #i love doing errors like this now

    #now we are going to put some checks to both update old list objects, and for safe guarding
    if "id" not in lst:
        lst["id"] = str(uuid.uuid4()) #these are just creating new dictionary entries, since lst is a dictionary value holding all the attributes of the lists we create
    if "comments" not in lst:
        lst["comments"] = []
    if "likes" not in lst:
        lst["likes"] = [] #list to let me track who likes, and not just a counter of how many liked
    if "views" not in lst:
        lst["views"] = 0
    if current_user.tier_lists: #checks if the column for that user's tier lists is empty in the database
        saved_lists = json.loads(current_user.tier_lists) #if not empty we load them into this variable
    else:
        #if they are empty, we declare it as an empty list
        saved_lists = []
    
    #alreadyinlistcheck = False
    exact_match_index = None
    only_title_match = None

    for i in range(len(saved_lists)):
        current_title = saved_lists[i]["title"]
        current_payload = saved_lists[i]["payload"]
        if current_title == lst["title"] and current_payload == lst["payload"]:
            exact_match_index = i
            break

    if exact_match_index == None:
        for i in range (len(saved_lists)):
            if saved_lists[i]["title"] == lst["title"]:
                only_title_match = i
                break
    
    if exact_match_index != None:
        saved_lists[exact_match_index] = lst
        saved_index = exact_match_index
    elif only_title_match != None:
        saved_lists[only_title_match] = lst
        saved_index = only_title_match
    else:
        saved_lists.append(lst)
        saved_index = len(saved_lists) - 1
    current_user.tier_lists = json.dumps(saved_lists)

    #then finally we commit to the database to save everything properly
    db.session.commit()
    #we can have a proper return message to send out over here I guess
    return {'message': 'saved gone right!', "current_list" : lst, "index" : saved_index}, 200 #search these codes on your own if you are curious
    #return redirect(url_for('dashboard', index = saved_index))
@app.route('/get-lists', methods = ['POST', 'GET'])
@login_required
def get_lists():
    if current_user.tier_lists:
        return json.loads(current_user.tier_lists)
    
    return [] #basically returns nothing, if the user has no tier lists available

@app.route('/delete-list', methods = ["GET", "POST"])
@login_required
def delete_list(): #this function will be used to delete lists from the database
    lst_id = request.args.get("id", type = str)

    #now we locate the list with this id and delete it
    lists = json.loads(current_user.tier_lists)
    new_list = []
    for lst in lists:
        current_id = lst["id"]
        if current_id != lst_id:
            new_list.append(lst)

    current_user.tier_lists = json.dumps(new_list)
    db.session.commit()

    return redirect(url_for('profilePage'))

@app.route('/search-page', methods = ['GET','POST'])
@login_required
def search_page():
    #in this page we are going to pull every user, and all their lists
    #we are going to make them visible here.
    #then we are going to figure out a way to make it so that people can't edit the lists
    #they can only check and comment.

    #for now let's just make sure such things even load
    #for the sake of simplicity for now, let's just make the lists load with the image of the S tier item in the list

    all_lists = [] #for this page we dont acc care about the user, we just want all the lists. this list will hold all the lists
    all_users = User.query.filter(User.tier_lists.isnot(None)).all() #brings up all the users who's lists are not empty
    
    if request.method == 'POST': #we get over here when user passes input to the search bar
        user_input = request.form.get("search") #the entire string
        user_input_list = user_input.split()
        
        for user in all_users:
            lists = json.loads(user.tier_lists)

            for lst in lists:
                #check title of the list
                current_title = lst["title"]
                current_description = lst["description"]
                s_tier_items = lst["payload"]["S"]["containedElementIds"]
                thumbnail = None

                check = False

                for wrd in user_input_list:
                    if wrd in current_title or wrd in current_description or current_title == '':
                        check = True
                        break
                
                if check: #if the word is found, then it is valid and we set out to render that list
                    for item in s_tier_items:
                        if item.get("image"):
                            thumbnail = item["image"]
                            break

                    all_lists.append({
                    "owner_id" : user.id,
                    "owner_username" : user.username,
                    "title" : lst["title"],
                    "description" : lst["description"],
                    "payload" : lst["payload"],
                    "comments" : lst.get("comments", []),
                    "thumbnail" : thumbnail,
                    "id" : lst.get("id")
                })
                    
    else:
        for user in all_users:
            lists = json.loads(user.tier_lists)

            for lst in lists:
                thumbnail = None
                s_tier_items = lst["payload"]["S"]["containedElementIds"]

                for item in s_tier_items: #just picking the very first S tier image as the thumbnail
                    if item.get("image"):
                        thumbnail = item["image"]
                        break

                all_lists.append({
                    "owner_id" : user.id,
                    "owner_username" : user.username,
                    "title" : lst["title"],
                    "description" : lst["description"],
                    "payload" : lst["payload"],
                    "comments" : lst.get("comments", []),
                    "thumbnail" : thumbnail,
                    "id" : lst.get("id")
                })

    return render_template('search.html', all_lists = all_lists)

@app.route('/view-other-list', methods=['GET', 'POST'])
@login_required
def view_other_list():
    if request.method == 'POST':
        owner_id = request.form.get("owner_id", type = int)
        list_id = request.form.get("list_id", type = str)
    else:
        owner_id = request.args.get('owner_id', type = int)
        list_id = request.args.get('list_id', type = str)

    owner = User.query.get_or_404(owner_id) #or404 to shoot an error in case that user doesn't exist (this likely won't happen with the current flow we have)
    if not owner.tier_lists:
        return redirect(url_for('search_page')) #send the user back to the list browser page, if the list the owner of the list they clicked on doesn't actually have any lists. I'm putting this here in case of bad flow, or data mismanagement
    
    saved_lists = json.loads(owner.tier_lists)

    target_list = None
    for lst in saved_lists:
        if lst.get("id") == list_id:
            target_list = lst
            break
    
    if not target_list:
        return redirect(url_for('search_page')) #send the user back to browser page, if the target list could not be found (just a simple error check to prevent the page from crashing)

    return render_template ('public-dashboard.html', current_list = target_list, list_owner = owner)

@app.route('/save-other-user-list', methods = ['POST']) # this shouldnt even exist
@login_required
def save_other_user_list():
    return {"error": "forbidden"}, 403
    # data = request.get_json() #pulls up list that is being saved

    # owner_id = data.get("owner_id")
    # list_id = data.get("list_id")
    # updated_list = data.get("list_data")

    # owner = User.query.get_or_404(owner_id)

    # if owner.tier_lists:
    #     saved_lists = json.loads(owner.tier_lists)
    # else:
    #     saved_lists = []
    
    # found_check = False
    # for i, lst in enumerate(saved_lists): #enumerate just iterates over saved_lists, but it pumps out both index and value, very useful here
    #     if lst.get("id") == list_id:
    #         saved_lists[i] = updated_list
    #         found_check = True
    #         break
    
    # if not found_check:
    #     return {"error": "list not found"}, 404

    # owner.tier_lists = json.dumps(saved_lists)
    # db.session.commit()

    # return {"message" : "saved successfully"}, 200


#comments the way are set up will need separate handling to work

@app.route('/post-comment-other-list', methods = ['POST'])
@login_required
def post_comment_other_list():
    owner_id = request.form.get("owner_id", type = int)
    list_id = request.form.get("list_id", type = str)
    content = request.form.get("comment-input", "").strip()

    if not content:
        return redirect(url_for('search_page')) #send user back to the browser page if something goes wrong

    owner = User.query.get_or_404(owner_id)
    if owner.tier_lists:
        saved_lists = json.loads(owner.tier_lists)
    else:
        saved_lists = []

    for lst in saved_lists:
        if lst.get('id') == list_id:
            lst.setdefault('comments', []).append({ 'user': current_user.username, 'content': content, 'time' : datetime.now().strftime('%Y-%m-%d %H:%M')})
            break
    
    owner.tier_lists = json.dumps(saved_lists)
    db.session.commit()

    return redirect(url_for('view_other_list', owner_id = owner_id, list_id = list_id))

@app.route('/logout', methods = ['POST'])
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))
if __name__ == "__main__":
    app.run(debug=True)

