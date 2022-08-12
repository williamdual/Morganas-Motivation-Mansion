//alert("hehehehehehe");

//var inits
//let note_sounds = ["assets/sounds/1note.wav", "assets/sounds/2notes.wav", "assets/sounds/3notes.wav"]
let note_sounds = ["assets/sounds/NotesFullSoundTW.wav"]
let note_img = "assets/imgs/yellowNote.png"
let note_gif = document.getElementById("notes")
let noteSound = new Audio();

let vol_bar = document.getElementById("volume-slider");

//its lazzy but adding the same property twice increases its chances of being selected
let morgana_sounds = ["assets/sounds/hmmmmMeow.wav", "assets/sounds/niceGoing.wav", "assets/sounds/niceGoing.wav",
    "assets/sounds/woahWeCan.wav", "assets/sounds/woahWeCan.wav", "assets/sounds/woahWeCan.wav",
    "assets/sounds/woahWeCan.wav"]
let morgona_face = "assets/imgs/monaNutral.png"
let morgana_imgs = ["assets/imgs/monaGrining.png", "assets/imgs/monaSmileing.png", "assets/imgs/monaStared.png"]
let monaSound = new Audio(); //1 is default, ie 100%

sounds = [monaSound, noteSound]

document.addEventListener("DOMContentLoaded", function () { //webpage listening
    vol_bar.value = 70;
    updateVol();

    generateBackground();

    let morgana = document.getElementById("morgana")
    morgana.addEventListener("click", ohWe)
    morgana.style.backgroundImage = "url(" + morgona_face + ")";

    let note = document.getElementById("music-note")
    note.addEventListener("click", notes)
    note.style.backgroundImage = "url(" + note_img + ")";

    vol_bar.addEventListener("change", updateVol)

    function ohWe() {
        monaSound.src = random(morgana_sounds);
        morgana.style.backgroundImage = "url(" + random(morgana_imgs) + ")";
        monaSound.play();
    }

    monaSound.onended = function () { //awaits end of audio playback
        morgana.style.backgroundImage = "url(" + morgona_face + ")";
    }

    function notes() {
        noteSound.src = random(note_sounds);
        noteSound.play();
        note_gif.style.display = "inline"
        setTimeout(function () { note_gif.style.display = "none"; note_gif.src = "assets/imgs/notesNoBackground.gif"; }, 3290); //waits till end of playback then resets
    }

    function random(array) {
        return array[Math.floor(Math.random(0, 3) * array.length)]
    }

    function updateVol() {
        for (let i = 0; i < sounds.length; i++) {
            if (i == 0) {
                sounds[i].volume = (vol_bar.value / 100) / 3
            }
            else {
                sounds[i].volume = vol_bar.value / 100
            }

        }

    }

    function generateBackground() {
        let theme = "none"
        let bg = document.getElementsByClassName("background_container")
        let bgIcons = document.getElementsByClassName("background_logo")
        let path = "none"
        let text = document.getElementById("title");
        chrome.storage.sync.get({
            Theme: "P5"
        }, function (items) {
            theme = items.Theme;

            if (theme == "P3") {
                bg[0].style.backgroundColor = "#009ACD";
                path = 'url("assets/imgs/SEES_Gun.svg")';
                //text.style.color = "#FA9125";
            }
            else if (theme == "P4") {
                bg[0].style.backgroundColor = '#ffe52c';
                path = 'url("assets/imgs/TV_Portal.svg")';
                //text.style.color = "#4B25FA";
            }
            else {
                bg[0].style.backgroundColor = "#D92323";
                path = 'url("assets/imgs/Arsene_Hat.svg")';
                //text.style.color = "#25FA62";
            }
            for (let i = 0; i < bgIcons.length; i++) {
                bgIcons[i].style.backgroundImage = path;
            }
        });


    }
})

