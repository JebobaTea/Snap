from flask import Flask, render_template

app = Flask('')

@app.route('/')
def index():
    return render_template('home.html')

app.run(host='0.0.0.0',port=8080)
