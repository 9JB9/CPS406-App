from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
import json

app = Flask(__name__)

#don't worry about the DB for now, we'll get to it later
#(I have to fresh heavy on this) - Joao
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SECRET_KEY'] = 'secret_key' #---> change this to something proper later
db = SQLAlchemy(app)

@app.route('/') #when the user first accesses our link/runs the app, redirect them here. Literally a landing page/homepage
def home(): #The function to run for this route
    return render_template('index.html')

@app.route('/login', methods = ['GET', 'POST']) #login page
def log():
    return "Login page" #replace this with proper routine later

@app.route('/register', methods = ['GET', 'POST']) #sign up page
def reg():
    return "Sign up page" # replace this with proper routine later

if __name__ == '__main__':
    app.run(debug=True) #I believe having debug will actually produce (jinja2?) error messages to help you debug
                        #There is a separate attribuet you can set to either true or false to stop the page from auto
                        #reloading every time you make a change to the source code. Note this is only important when
                        #you are wokring with atexit style functionality, where you want things to get backed up when
                        #you shut down the entire application (we will likely not have to worry about this, pre or post launch)