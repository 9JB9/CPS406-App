from flask import Flask, render_template, request, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
import json

app = Flask(__name__)

#don't worry about the DB for now, we'll get to it later
#(I have to fresh heavy on this) - Joao
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
#app.config['SECRET_KEY'] = 'secret_key' #---> change this to something proper later
#db = SQLAlchemy(app)

@app.route('/') #when the user first accesses our link/runs the app, redirect them here. Literally a landing page/homepage
def home(): #The function to run for this route
    return render_template('index.html')



