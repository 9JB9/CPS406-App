from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_manager, LoginManager, login_user, login_required, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError, Email
from flask_bcrypt import Bcrypt
from flask_cors import CORS
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
    #probably don't need to worry too much about bcrypt hash size, since this will just truncate, which is still plenty safe.
class LoginForm(FlaskForm):
    email = StringField(validators=[InputRequired(), Length(min=6, max=254)], render_kw={"Placeholder": "Email"})
    password = StringField(validators=[InputRequired(), Length(min=8, max=20)], render_kw={"Placeholder": "Password", "type" : "password"})
    submit = SubmitField("Login") # this will be used to represent the button in the html form

    def validate_email(self, email):
        existing_user_email = User.query.filter_by(email=email.data).first()
        if not existing_user_email:
            display_type = "flex"
            raise ValidationError("Invalid login")
class RegisterForm(FlaskForm):
    email = StringField(validators=[InputRequired(), Length(min=6, max=254)], render_kw={"Placeholder": "Email"})
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
            raise ValidationError("This username is already taken!")
    def validate_email(self, email):
        existing_user_email = User.query.filter_by(email=email.data).first()
        if existing_user_email:
            raise ValidationError("This email is already taken!")
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
def dashboard ():
    return render_template('dashboard.html')

@app.route('/profile-page')
@login_required # Ensures only logged-in users can access this
def profilePage():
    # current_user is provided by flask_login and contains the data from the User class
    return render_template('profile-page.html', user=current_user)

if __name__ == "__main__":
    app.run(debug=True)
