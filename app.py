# Import Dependencies
import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route("/methane_emission")
def index():
    return render_template('index.html')

@app.route("/meat_consumption")
def index2():
    return render_template('index2.html')

@app.route("/meat_data")
def test():
    data = ("beef_dashboard_data.csv")
    return jsonify(data)

@app.route("/methane_data")
def test2():
    data2 = ("emissions_dashboard_data_final.csv")
    return jsonify(data2)

if __name__ == "__main__":
    app.run(debug=True)