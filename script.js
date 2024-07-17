let count = 0;
let countEl = document.getElementById("count-el")
let savedCount = "";
let saveStr = "Last Saved: "
let saveEl = document.getElementById("save-el")

function increment() {
    count++;
    countEl.textContent = count;
}

function decrement() {
    count--;
    countEl.textContent = count;
}

function save() {
    saveEl.textContent = saveStr + count;
}

function reset() {
    count = 0;
    countEl.textContent = count;
    saveEl.textContent = saveStr;
}