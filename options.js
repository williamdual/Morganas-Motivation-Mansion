
function save_theme() {
    let theme = document.querySelector('input[name="theme"]:checked').value;
    console.log(theme);
    chrome.storage.sync.set({
        Theme: theme
    })
}

function restore_theme() {
    //sets default in case its first time then pulls data if availible
    chrome.storage.sync.get({
        Theme: "P5"
    }, function (items) {
        document.getElementById(items.Theme).checked = true; //this works cuz the value and the id are the same (this is bad practice but it works for me)
    });
}

document.addEventListener('DOMContentLoaded', restore_theme);
document.getElementById('save').addEventListener('click', save_theme);