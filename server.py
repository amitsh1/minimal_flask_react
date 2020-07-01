#!/usr/bin/env python

import os
from flask import Flask, render_template,jsonify
app = Flask(__name__)

# read a dataframe
# build a table
PRODUCTS = [{"id":"ggggg","avatar":"ad","firstName":5,"lastName":"5"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"ggg","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},                                
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},                                
];

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/products', methods=['GET'])
def blabla():
    return jsonify(PRODUCTS)

@app.route('/products1', methods=['GET'])
def blabla2():
    return jsonify([
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},                                
{"id":"avatsar","avatar":"sad","firstName":"5","lastName":"5s"},  

    ])
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug='true')
