function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifer = ml5.soundClassifier('http://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json' , modelReady);
}

function modelReady(){
    classifer.classify(gotResults);
}