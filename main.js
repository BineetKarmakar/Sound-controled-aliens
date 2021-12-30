//https://teachablemachine.withgoogle.com/models/-18MK-dbU/
function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-18MK-dbU/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults)
};
function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("sound_name").innerHTML='I can hear -'+
        results[0].label
        document.getElementById("sound_accuracy").innerHTML='Accuracy -'+
        (results[0].confidence*100).toFixed(2)+'%';
        document.getElementById("sound_name").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("sound_accuracy").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")"

        img = document.getElementById('alien_1');
        img1 = document.getElementById('alien_2');
        img2 = document.getElementById('alien_3');
        img3 = document.getElementById('alien_4');

        if(results[0].label=="Clap"){
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }else if(results[0].label=="Table banging"){
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }else if(results[0].label=="Whistle"){
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
        }else{
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }
    }
}