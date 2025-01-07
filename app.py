from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/navigation")
def navigation():
    return render_template('navigation.html')

@app.route("/demonstration-video")
def demonstration():
    return render_template('demonstration.html')


@app.route('/hello/')
@app.route('/hello/<name>')
def hello(name = "windill"):
    return render_template('hello.html', person=name)