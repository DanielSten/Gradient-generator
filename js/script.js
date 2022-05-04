button.onclick = function () {
    let collorOne = (Math.floor(Math.random() * (255 - 0 + 1)) + 0) + ', ' + (Math.floor(Math.random() * (255 - 0 + 1)) + 0) + ', ' + (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
    let collorTwo = (Math.floor(Math.random() * (255 - 0 + 1)) + 0) + ', ' + (Math.floor(Math.random() * (255 - 0 + 1)) + 0) + ', ' + (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
    document.body.style.background = 'linear-gradient(' + searchClassActive() + ',' + 'rgb(' + collorOne + ') 0%, rgb(' + collorTwo + ') 100%)';
    document.getElementById("collorStart").innerText = collorOne;
    document.getElementById("collorEnd").innerText = collorTwo;
}

function addClassActive() {
    directionButton.forEach((elem) => {
        elem.classList.remove('active');
    });
    this.classList.toggle('active');
    
}

let directionButton = document.querySelectorAll('.direction_button');
directionButton.forEach((elem) => {
    elem.addEventListener('click', addClassActive);
});

function searchClassActive() {
    let choiceВirectionsDeg = 0
    if (document.getElementById("horizontal").classList.contains("active") == true){
        choiceВirectionsDeg = '90deg'
    }
    if (document.getElementById("vertikal").classList.contains("active") == true){
        choiceВirectionsDeg = '180deg'
    }
    if (document.getElementById("giagonalStartLeft").classList.contains("active") == true){
        choiceВirectionsDeg = '135deg'
    }
    if (document.getElementById("giagonalStartRight").classList.contains("active") == true){
        choiceВirectionsDeg = '225deg'
    }
    return choiceВirectionsDeg
}




