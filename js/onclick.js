const bobSound = document.getElementById("bobRoss");
const bobImg = document.getElementById("bobRossImg");

function happyTrees() {
    bobSound.currentTime = 42;
    bobSound.play();
    setTimeout(() => bobSound.pause(), 1300);
};

bobImg.addEventListener("click", happyTrees);