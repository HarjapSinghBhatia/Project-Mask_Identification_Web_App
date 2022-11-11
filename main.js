function sutup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    classfier=ml5.imageClassfier("https://teachablemachine.withgoogle.com/models/95PTyYZBo/model.json",modelLoaded)

}
function modelLoaded(){
    console.log("Model Loaded!")
}
function draw(){
    image(video, 0, 0, 300, 300)
    classfier.classify(video, gotResult)
}
function gotResult(error, results){
    if (errot){
        console.error(error)
    } else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML=results[0].label
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}