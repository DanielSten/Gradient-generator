button.onclick = function () {
    let collorOne = (Math.floor(Math.random() * (255 - 0 + 1)) + 0) + ', ' + (Math.floor(Math.random() * (255 - 0 + 1)) + 0) + ', ' + (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
    let collorTwo = (Math.floor(Math.random() * (255 - 0 + 1)) + 0) + ', ' + (Math.floor(Math.random() * (255 - 0 + 1)) + 0) + ', ' + (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
    document.body.style.background = 'linear-gradient(to right, rgb(' + collorOne + ') 0%, rgb(' + collorTwo + ') 100%)';
    document.getElementById("test").value = collorOne;
}
