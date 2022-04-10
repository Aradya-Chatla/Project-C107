function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio : true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ulv8pOm4Q/model.jason', modelReady);
   
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, result) {
    
}