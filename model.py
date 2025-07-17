from keras.models import load_model 
from keras.utils import img_to_array
import numpy as np 
from PIL import Image 

model = load_model('model.pkl')

def preprocess_img(img_file):
    op_img = Image.open(img_file)
    img_resize = op_img.resize((224,224))
    img2arr = img_to_array(img_resize) / 255.0
    img_reshape = img2arr.reshape(1,224,224,3)
    return img_reshape 

def predict_result(predict):
    pred = model.predict(predict)
    return np.argmax(pred[0],axis=-1)

from flask import Flask,render_template,request 


app = Flask(__name__)

@app.route('/')
def main():
    return render_template("dropbox.html")

@app.route('/prediction',methods=['POST'])
def predict_image_file():
    try:
        if request.method == 'POST':
            image_file = request.files['file']
            img = preprocess_img(image_file)
            pred = predict_result(img)
            return render_template("result.html", predictions=str(pred))
        
    except:
        error = "File cannot be processed"
        return render_template("result.html",err=error)
    
    if __name__ == "_main_":
        app.run(port=9001,debug=True)