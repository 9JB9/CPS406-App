# CPS406-App

## Initial setup
- Install Python on your machine ---> https://www.python.org/downloads/
- clone the project from github onto your desired project folder ---> git clone https://github.com/9JB9/CPS406-App.git
- set up the virtual environment in your project folder ---> python -m venv venv

## Back-end tools setup
- Flask (Python library, web framework) ---> pip install flask
- SQL Alchemy (Python SQL Toolkit) ---> pip install flask_sqlalchemy
- Flask Login (Flask library that manages session, but different from sessions library, this one comes with special user authentication handling) ---> pip install flask-login
- Flask-wtf (handles login and signup forms and validation) ---> pip install flask-wtf
- wtforms (handles login and signup forms and validation) ---> pip install wtforms
- Flask BCRYPT (hashes passwords) ---> pip install flask-bcrypt
- Flask CORS (allows react frontend to talk to Flask backend) ---> pip install flask-cors

YOU CAN INSTALL ALL OF THEM AT THE SAME TIME JUST RUN:

pip install flask flask-sqlalchemy flask-login flask-wtf wtforms flask-bcrypt flask-cors email-validator

## Front-end (no setup needed)
- HTML ---> no setup, web based, runs natively
- CSS ---> no setup, web based, runs natively
- JavaScript ---> no setup, web based, runs natively

## Note
- your virtual environment is local. When you do push/commit things to git, your virtual environment is ignored. That is normal. Which means on github, there will be no 'venv' foler.
- This means cloning does not bring any virtual environment things along with you
- pip is a python command

## Python command issues
- if, for example, you try to set up your virtual environment with 'python -m venv venv' and it does not work, there is likely something going on with the python pathing on your machine. One thing you can try for immediate results is to use python3 instead of python in your command.

## How do we run this application without proper hosting?
- Localhost!
- How does it work?
    * Localhost can be activated in 2 ways: by running 'flask run' on your terminal or by running 'application.py'
    * Which to choose? Simple, if you want to debug something, running the program with 'app.py' is better, as it will provide you with flask's debugging tools. Whereas, if you do 'flask run' errors will be harder to catch, and no error messages will be displayed (in my short experience)
    * Note, you do have the option to turn off debugging on the app itself, so then it would behave equally between both testing methods
    * I am sure there is another difference I am not aware.



