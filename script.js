let score = 0;
// let value=20;
let highScore = 0;
let timer = 20;
let timerInterval;
let moveInterval;
let drag = 0;

function startGame() {

    score = 0;
    timer = 20;
    document.getElementById("score").innerText = `Score : ${score}`;
    document.getElementById("timer").innerText = `Timer : ${timer}s`;

    document.getElementById("btn").style.display = "inline-block";
    document.getElementById("startBtn").style.display = "none";

    timerInterval = setInterval(() => {
        if (timer > 0) {
            document.getElementById("timer").innerText = `Timer : ${timer--}s`;
        } else {
            end(); 
        }
    }, 1000);

    let speed = 1;

    moveInterval = setInterval(() => {
        // drag+=500;
        let num = Math.floor(Math.random() * (1000 - 100) + 100);
        const screenWidth = window.innerWidth;
        const maxMargin = screenWidth - 100; // leave space for button width
        const randomLeft = Math.floor(Math.random() * maxMargin);
            // document.getElementById("btn").style.margin = `200px ${num}px ${num}px ${num}px`;
        document.getElementById("btn").style.position = "absolute";
        document.getElementById("btn").style.top = `${Math.floor(Math.random() * 60 + 20)}vh`; // vertical within 20-80vh
        document.getElementById("btn").style.left = `${randomLeft}px`;
        // speed+=100;

    }, 1000-(speed+=250));
}

function clickme(){

    
    score++;
    document.getElementById("score").innerText = `Score : ${score}`;
    changeImg();

    
    // setInterval(()=>{
        
        //     document.getElementById("timer").innerHTML=`Timer : ${value}`
        //     value--;
        // },1000)
        
        // setInterval(() => {     
        //     let num = Math.floor(Math.random() * (1000 - 100) + 100);
            
        //     document.getElementById("btn").style.margin=`200px ${num}px ${num}px ${num}px`;
        // },4000);
        
        
}


function changeImg(){
    let num = Math.floor(Math.random() * (10 - 1) + 1);
    let type = num<9? "jpeg":"jpg";
    
    document.getElementById("img").src=`${num}.${type}`;
}

function end() {

    clearInterval(timerInterval);
    clearInterval(moveInterval);

    document.getElementById("btn").style.display = "none";
    document.getElementById("startBtn").style.display = "flex";
    timer=20;

    if (score > highScore) {
        highScore = score;
        document.getElementById("highscore").innerText = highScore;
    }

    alert(`Time's up! Your score is ${score}. Click OK to restart.`);
}