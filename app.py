from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_manager, LoginManager, login_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'thisisasecretkey'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

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
    email = StringField(validators=[InputRequired(), Length(min=8, max=20)], render_kw={"Placeholder": "Email"})
    password = StringField(validators=[InputRequired(), Length(min=8, max=20)], render_kw={"Placeholder": "Password"})
    submit = SubmitField("Login") # this will be used to represent the button in the html form

class RegisterForm(FlaskForm):
    email = StringField(validators=[InputRequired(), Length(min=6, max=254)], render_kw={"Placeholder": "Email"})
    username = StringField(validators=[InputRequired(), Length(min=8, max=20)], render_kw={"Placeholder": "Username"})
    password = StringField(validators=[InputRequired(), Length(min=8, max=20)], render_kw={"Placeholder": "Passowrd"})
    submit = SubmitField("Sign up")


@app.route('/') #when the user first accesses our link/runs the app, redirect them here. Literally a landing page/homepage
def home(): #The function to run for this route
    return render_template('index.html')

@app.route('/login', methods=['POST', 'GET'])
def login():
    form = LoginForm() #we will pass this over to our html to be rendered later
    if form.validate_on_submit(): #this checks if it is POST request. but since it is handled by a function, do I still need the methods list up above??
        #need to validate user information, refer the input with the database
        user= User.query.filter_by(username=form.username.data).first()
        login_user(user)
        return redirect('home')
    
    return render_template('login.html')

@app.route('/register', methods=['POST', 'GET'])
def register():
    #to register a user we need to check that they don't already have
    pass




