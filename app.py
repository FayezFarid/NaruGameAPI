from flask import Flask
from flask import request
from flask_pymongo import PyMongo
from flask import jsonify
from bson.json_util import dumps
from bson.objectid import ObjectId
import routes
app = Flask(__name__)
app.secret_key = "secretKey" 
app.config["MONGO_URI"]="mongodb+srv://frigider:FRIGIDER100@narugame.wn1pv.mongodb.net/testDB"
mongo=PyMongo(app)

@app.route('/test',methods=['GET'])
def sign_up():
    #requestData = request.json
    #username = requestData['username']
    #result = mongo.db.users.insert_one({'name':username})
    #return jsonify(result.inserted_id)
    return "3asba"

if __name__=="__main__":
    app.run(host='0.0.0.0')
    print("Server run")
