let score = 0;
function clickme(){

    score++;

    changeImg();

    setInterval(() => {     
        let num = Math.floor(Math.random() * (1000 - 100) + 100);
    
        document.getElementById("btn").style.margin=`200px ${num}px ${num}px ${num}px`;
    },4000);


    document.getElementById("score").innerHTML=`score : ${score}`;
}


function changeImg(){
    let num = Math.floor(Math.random() * (10 - 1) + 1);
    let type = num<9? "jpeg":"jpg";
    
    document.getElementById("img").src=`${num}.${type}`;
}