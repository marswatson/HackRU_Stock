from app import app
from flask import render_template, request, jsonify
from models import Member

@app.route('/create_token/<token_name>/<password>')
def add_token(token_name,password):
	if password != "hackru":
		return render_template('index.html')
	firstmember = Member.query.first()
	return '<h1>The first member is: '+ firstmember + '\n'
#     # download data from finance api and save as draw.csv
#     # fill data to the database of new token
#     return render_template('priceChart.html')

@app.route('/')
def users():
    return render_template('index.html', symbol='AAPL')

@app.route('/<string:symbol>',methods=['GET', 'POST'])
def get_symbol(symbol=None):
	if request.method == 'POST':
		symbol = request.form['symbol']
	if symbol == None:
		symbol = 'AAPL'

	return render_template('index.html', symbol=symbol)



