# views.py

from flask import render_template

from app import app

# use the @app.route decorator to specify the path we'd like the view to be dispayed on
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/signup')
def signup():
    return render_template("signup.html")

@app.route('/signin')
def signin():
    return render_template("signin.html")

