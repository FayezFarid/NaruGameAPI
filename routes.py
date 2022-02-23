from flask import Flask
from app import app

@app.route("/user/signup",methods=["POST"])
def signup():
    return "routes.signup"