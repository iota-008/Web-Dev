from flask import Flask
from flask_restful import Resource,Api,reqparse


app = Flask(__name__)
api = Api(app)
COUNTRIES={
    '1':{'Name':'Austria','Capital':'Vienna'},
    '2':{'Name':'Bulgaria','Capital':'Sofia'},
    '3':{'Name':'Canada','Capital':'Ottawa'},
    '4':{'Name':'Denmark','Capital':'Copenhagen'},
    '5':{'Name':'Egypt','Capital':'Cairo'},
}

parser = reqparse.RequestParser()

class CountryLists(Resource):
    def get(self):
        return COUNTRIES
    def post(self):

        parser.add_argument('Name')
        parser.add_argument('Capital')
        arg = parser.parse_args()
        country_id = int(max(COUNTRIES.keys()))+1
        country_id = '%i' % country_id
        COUNTRIES[country_id] = {
            "Name" : arg["Name"],
            "Capital":arg["Capital"],
        }
        return COUNTRIES[country_id],201

class Country(Resource):
    
    def get(self,country_id):
        if country_id not in COUNTRIES:
            return "not found",404
        else:
            return COUNTRIES[country_id]
        
    def put(self,country_id):
        parser.add_argument("Name")
        parser.add_argument("Capital")
        args = parser.parse_args()
        if country_id not in COUNTRIES:
            return "Not found",404
        else:
            country = COUNTRIES[country_id]
            country["Name"] = args["Name"] if args["Name"] is not None else country["Name"]
            country["Capital"] = args["Capital"] if args["Capital"] is not None else country["Capital"]
        return country,200
        
    def delete(self,country_id):
        if country_id not in COUNTRIES:
            return "Not found",404
        else:
            del COUNTRIES[country_id]
            return 'deleted',204
        
        
api.add_resource(CountryLists,'/countries')
api.add_resource(Country,'/countries/<country_id>')


