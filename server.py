#!/usr/bin/env python

import os
from flask import Flask, render_template,jsonify
app = Flask(__name__)

# read a dataframe
# build a table
PRODUCTS = [
  {'category': 'Sporting Goods', 'price': '$49.99', 'stocked': True, 'name': 'Football'},
  {'category': 'Sporting Goods', 'price': '$9.99', 'stocked': True, 'name': 'Baseball'},
  {'category': 'Sporting Goods', 'price': '$29.99', 'stocked': False, 'name': 'Basketball'},
  {'category': 'Electronics', 'price': '$99.99', 'stocked': True, 'name': 'iPod Touch'},
  {'category': 'Electronics', 'price': '$399.99', 'stocked': False, 'name': 'iPhone 5'},
  {'category': 'Electronics', 'price': '$199.99', 'stocked': True, 'name': 'Nexus 7'}
]*10

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/products', methods=['GET'])
def blabla():
    return jsonify(PRODUCTS)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug='true')
