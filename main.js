function setup() {
  canvas = createCanvas(270, 270);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  canvas.position(530,300);

  classifier=ml5.imageClassifier("MobileNet", model_loaded)
}

function model_loaded(){
 console.log("MODEL LOADED!") 
}

function draw(){
 image(video, 0, 0, 270,270);
 classifier.classify(video, got_result);
 
}

function got_result( error, results){
if(error){
  console.error(error);
}
else{
 console.log(results) ;
 document.getElementById("OBJECT_SPAN").innerHTML=results[0].label;
 document.getElementById("ACCURACY_SPAN").innerHTML=results[0].confidence.toFixed(3);
}
}


