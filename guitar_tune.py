from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Επιτρέπει αιτήματα από το frontend

tunings = {
    "Standard": ["E", "A", "D", "G", "B", "E"],
    "Drop D": ["D", "A", "D", "G", "B", "E"],
    "Open G": ["D", "G", "D", "G", "B", "D"]
}

@app.route('/')
def home():
    return jsonify({"message": "Hello from Flask on Railway!"})

@app.route('/tunings')
def get_tunings():
    return jsonify(tunings)

if __name__ == '__main__':
    app.run(debug=True)

