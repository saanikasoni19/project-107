//https://teachablemachine.withgoogle.com/models/lStXL6J3S/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('//https://teachablemachine.withgoogle.com/models/x5RjP0o-O/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}