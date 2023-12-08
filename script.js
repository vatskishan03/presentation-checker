const balloonContainer = document.getElementById("balloon-container");
const resultMessage = document.getElementById("resultMessage");


const presentingStudents = ["4NI22CS067", "4NI22CS072", "4NI22CS136", "4NI22CS137","4NI22CS092","4NI22CS113"];


const allStudents = [
    "4NI22CS062", "4NI22CS063", "4NI22CS064", "4NI22CS065", "4NI22CS068", "4NI22CS069", "4NI22CS070", 
    "4NI22CS071", "4NI22CS073", "4NI22CS074",  "4NI22CS076", "4NI22CS077", "4NI22CS078", "4NI22CS079", 
    "4NI22CS080", "4NI22CS081", "4NI22CS082", "4NI22CS083", "4NI22CS084", "4NI22CS085", "4NI22CS086", "4NI22CS087", 
    "4NI22CS088", "4NI22CS089", "4NI22CS090", "4NI22CS091", "4NI22CS093", "4NI22CS094", "4NI22CS095", 
    "4NI22CS096", "4NI22CS097", "4NI22CS098", "4NI22CS099", "4NI22CS100", "4NI22CS101", "4NI22CS102", "4NI22CS103", 
    "4NI22CS104", "4NI22CS105", "4NI22CS106", "4NI22CS107", "4NI22CS108", "4NI22CS109", "4NI22CS111", 
    "4NI22CS112", "4NI22CS114", "4NI22CS115", "4NI22CS116", "4NI22CS117", "4NI22CS118", "4NI22CS119", 
    "4NI22CS120", "4NI22CS121", "4NI22CS123", "4NI22CS124", "4NI22CS125", "4NI22CS139"
];

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;
    return `
        background-color: rgba(${r},${g},${b},0.7);
        color: rgba(${r},${g},${b},0.7); 
        box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
        margin: ${mt}px 0 0 ${ml}px;
        animation: float ${dur}s ease-in infinite
    `;
}

function createBalloons(num) {
    for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();
        balloonContainer.append(balloon);
    }
}

function removeBalloons() {
    balloonContainer.style.opacity = 0;
    balloonContainer.innerHTML = '';
    balloonContainer.style.opacity = 1;
    showResult();
}

function showResult() {
    const enteredUSN = document.getElementById("usnInput").value.toUpperCase();
    const resultMessage = document.getElementById("resultMessage");
    const memeContainer = document.getElementById("memeContainer");

    
    memeContainer.innerHTML = '';
    resultMessage.innerHTML = '';

    if (presentingStudents.includes(enteredUSN)) {

        resultMessage.innerHTML = "Congrats, you are going to face fire today!";
        createBalloons(30);
    } else if (allStudents.includes(enteredUSN)) {
        
        showMeme(memeContainer);
        resultMessage.innerHTML = "Chill,You are safe.";
    } else if (enteredUSN === "") {
        resultMessage.innerHTML = "Enter Correct USN";
    } else {
        resultMessage.innerHTML = "Enter Correct USN";
    }
}

function showMeme(container) {
   
    const memeImage = document.createElement("img");
    memeImage.src = "./meme.jpg"; 
    memeImage.alt = "Relieved Meme"; 

    
    memeImage.width = 200;
    memeImage.height = 200;

    
    container.innerHTML = ''; 
    container.appendChild(memeImage);
}


function checkPresentation() {
    removeBalloons();
}
