from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')
    
@app.route("/greet", methods=["POST"])
def greet():
  name = request.form["name"]
  return f"Hello, {name}!"

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)