from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_manager, LoginManager, login_user, login_required, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError, Email
from flask_bcrypt import Bcrypt
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'thisisasecretkey'
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
        return redirect(url_for('login')) #replace this with the dashboard or the link to the linked lists main page, for now I am just kicking user to log in
    return render_template('signup.html', form=form)

@app.route('/dashboard')
@login_required
def dashboard ():
    return render_template('dashboard.html')

@app.route('/profile-page')
@login_required # Ensures only logged-in users can access this
def profilePage():
    if current_user.tier_lists: #tierlists is currently just a json string of text, even if it looks like an arrya of dictionaries, python is not interpreting it as such until we run the proper trasnlating methods
        saved_lists = json.loads(current_user.tier_lists)
    else:
        saved_lists = []
    # current_user is provided by flask_login and contains the data from the User class
    return render_template('profile-page.html', user=current_user, tier_lists = saved_lists)

@app.route('/save-list', methods = ['POST'])
@login_required
def save_list():
    #this route ties to the new react build, should tie to the database and save the lists here.
    lst = request.get_json()

    if not lst:
        return {'error' : 'no data was received'}, 400 #i love doing errors like this now

    if current_user.tier_lists: #checks if the column for that user's tier lists is empty in the database
        saved_lists = json.loads(current_user.tier_lists) #if not empty we load them into this variable
    else:
        #if they are empty, we declare it as an empty list
        saved_lists = []
    
    saved_lists.append(lst)
    current_user.tier_lists = json.dumps(saved_lists)

    #then finally we commit to the database to save everything properly
    db.session.commit()
    #we can have a proper return message to send out over here I guess
    return {'message': 'saved gone right!'}, 200 #search these codes on your own if you are curious

@app.route('/get-lists', methods = ['POST', 'GET'])
@login_required
def get_lists():
    if current_user.tier_lists:
        return json.loads(current_user.tier_lists)
    
    return [] #basically returns nothing, if the user has no tier lists available

@app.route('/delete-list')
def delete_list(index): #this function will be used to delete lists from the database
    pass
if __name__ == "__main__":
    app.run(debug=True)
