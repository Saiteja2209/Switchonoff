
function turnoffon() {
    let Switch = document.getElementById("switch")
    let image = document.getElementById("myImage")
    if(image.src.match("brokenbulb.png")){
        image.src = "brokenbulb.png"
        image.src='brokenbulb.png';
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = 'rgb(48, 45, 45)';
        
    }
    else if (Switch.src.match("switchon.png")) {
        Switch.src = "switchoff.png"
        document.getElementById("myImage").src = "bulbOFF.png";
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = 'rgb(48, 45, 45)'; 
        var snd = new Audio("click.mp3")
        snd.play()

    }
    else {
        Switch.src = "switchon.png"
        document.getElementById("myImage").src = "bulbON.png";
        document.body.style.backgroundImage = "url('gradient.png')";
        var snd = new Audio("click.mp3")
        snd.play()

    }
    
}
function bulbcrush(){
let image = document.getElementById("myImage")
let Switch = document.getElementById("switch")
if(image.src.match("brokenbulb.png")){
    image.src = "brokenbulb.png"
    document.getElementById('myImage').src='brokenbulb.png';
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'rgb(48, 45, 45)';
    }
else {
    image.src = "brokenbulb.png"
    document.getElementById('myImage').src='brokenbulb.png';
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'rgb(48, 45, 45)';
    Switch.src = "switchoff.png"
    var glass = new Audio("glass-breaking-93803.mp3")
        glass.play()

}
}

