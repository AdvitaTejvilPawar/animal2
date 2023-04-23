//https://teachablemachine.withgoogle.com/models/zhNomQjZY/

function startClassifier()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zhNomQjZY/model.json')

}
function modelReady(){
    classifier.classify(gotResults)
}