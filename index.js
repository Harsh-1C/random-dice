let randomNumber1 = Math.floor(Math.random()*6)+1;
let randomNumber2 = Math.floor(Math.random()*6)+1;

let h1 = document.querySelector(".container h1");
if(randomNumber1>randomNumber2){
    h1.textContent = "🚩 Player 1 wins";
}
else if(randomNumber1<randomNumber2){
    h1.textContent = "Player 2 wins 🚩";
}
else{
    h1.textContent="Draw";
}

let img1 = document.querySelector(".dice .img1");
img1.setAttribute("src", "images/dice"+randomNumber1+".png");

let img2 = document.querySelector(".dice .img2");
img2.setAttribute("src", "images/dice"+randomNumber2+".png");

