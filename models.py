from app import db

class Member(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	symbol = db.Column(db.String(50), unique=True)
	name = db.Column(db.String(50))

	def __init__(self, symbol, name):
		self.symbol = symbol
		self.name = name

class History(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	date = db.Column(db.Date)
	open_price = db.Column(db.Float)
	high_price = db.Column(db.Float)
	low_price = db.Column(db.Float)
	close_price = db.Column(db.Float)
	volum = db.Column(db.Integer)

