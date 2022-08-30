import json
from flask import Flask , render_template , request

app = Flask(__name__)

@app.route("/" , methods = ["GET" , "POST"])
def home():
    if request.method == "POST":
        # pincode = request.form.get("pincode");
        pincode = request.form["pin"];
        
        if not pincode:
            print("Nahi chall rha.... Try again")
            pincode = "110001"

        print(pincode)
        data =  json.dumps({
            "PinCode" : (pincode)
        })

        return data;
    
    data = "Blabalabala";
    return render_template("main.html")


if __name__ == "__main__":
    app.run(debug=True);