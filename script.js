let counter = 0;
let defaultSize = 10;
let resCounter = document.querySelector("#res-counter");

function getSize(length) {
    return defaultSize - (length / 2);
}

function buttonHandler(action) {
    switch (action) {
        case 'inc':
            counter++;
            break;
        case 'dec':
            if (counter)
                counter--;
            break;
        case 'res':
            counter = 0;
            break;
        default:
    }
}


document.querySelectorAll("button").forEach(element => {
    element.onclick = function () {
        buttonHandler(element.dataset.action);
        resCounter.innerHTML = counter;
        resCounter.style.fontSize = getSize(("" + counter).length) + "rem";
    }
});


