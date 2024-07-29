'speechSynthesis' in window ? console.log("Səs dəstəklənir") : console.log("Səs dəstəklənmir :(");

var synth = window.speechSynthesis;

function british_sound_and_write(word) {
    var utterThis = new SpeechSynthesisUtterance(word);
    utterThis.lang = 'en-GB';
    synth.speak(utterThis);
};


var container = document.getElementsByClassName('container')[0];

var randomProperty = function (object) {
    return object[Math.floor(object.length * Math.random())];
};
async function start(button) {
    var words = document.getElementById('Textarea').value.split('\n');
    console.log(words);
    button.innerText = 'Dəyiş'
    var id = document.getElementById('word');
    id.innerText = randomProperty(words);
}

function sound(word) {
    british_sound_and_write(word.innerText);
}