
function save_options() {
    let theme = document.querySelector('input[name="theme"]:checked').value;
    let vol = document.getElementById("volume-slider").value
    console.log(theme);
    chrome.storage.sync.set({
        Theme: theme,
        Vol: vol
    })
}

function restore_options() {
    //sets default in case its first time then pulls data if availible
    chrome.storage.sync.get({
        Theme: "P5",
        Vol: 70
    }, function (items) {
        document.getElementById(items.Theme).checked = true; //this works cuz the value and the id are the same (this is bad practice but it works for me)
        document.getElementById("volume-slider").value = items.Vol;

    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);