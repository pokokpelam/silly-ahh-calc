const display = document.getElementById('display');

const sounds = [
    'sounds/vineboom.mp3',
    'sounds/omgbruh.mp3',
    'sounds/pianoriff.mp3',
    'sounds/scary.mp3',
    'sounds/augh.mp3'
];

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function playRandomSound(){
    const index = Math.floor(Math.random() * sounds.length);
    const sound = new Audio(sounds[index]);
    console.log("Playing sound:", sounds[index]); // Optional: shows which sound played
    sound.play();
}

function calculate(){
    try{
        display.value = eval(display.value);
        playRandomSound();
        showExplosion();
    }
    catch(error){
        display.value = "Error";
    }

}

function showExplosion() {
    const overlay = document.getElementById('explosion-overlay');
    overlay.style.display = 'flex';

    setTimeout(() => {
        overlay.style.display = 'none';
    }, 3000);
}