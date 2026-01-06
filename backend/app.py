from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)


@app.route("/")
def home():
    return "Welcome to the Flask Home Page!"

@app.route("/about")
def about():
    return "This is the Flask About Page."

@app.route("/contact")
def contact():
    return "Contact page from Flask."

if __name__ == "__main__":
    app.run(port=5000, debug=True)
