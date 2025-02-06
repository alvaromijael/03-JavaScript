const arr = ["images/hat.png", "images/boat.jpeg", "images/shirt.jpeg"];
const arrWord = ["hat", "boat", "shirt"];
let counter = 0;
let i = selectRandomImage();
let score = 0;
let highScore = 0;
document.body.classList.add('backGroundBody');
let btnPlayAgain = document.querySelector('.playAgain');

function selectRandomImage() {
    console.log("counter select",counter)
    document.querySelector(".countQuestion").textContent = "Question number " + (counter+1);
    let index = Math.floor(Math.random() * 3);
   
    document.getElementById("imgToGuess").src = arr[index];
    return index;
}

console.log("aguera count",counter,score);

const reset=()=>{
    console.log('Antes:', counter, score);
    counter=0;
    score=0;
    console.log('Después:', counter, score);
    document.querySelector(".playAgain").classList.add("hidden");
    document.querySelector(".play").classList.remove("hidden");
    document.getElementById("input").disabled=false;
    document.querySelector(".countQuestion").textContent = "Question number " + (counter+1);
    document.querySelector(".score").textContent = "score : " + score;
    return "";
  //window.location.reload();

}

function play() {
  
    console.log("counter",counter);
    console.log("i",i);
    
    if (counter <= 3) {
        const word = arrWord[i];
        const messageElement = document.querySelector(".message");
        const letter = document.getElementById("input").value;
        if (!letter) {
            messageElement.textContent = "No Letter 🥵";
            score -= 2;
            highScore -= 2;
            counter++;
        }
        else if (letter === word[0]) {
            messageElement.textContent = "correct Answer 🤙";
            score += 5;
            highScore +=5;
            counter++;

        }
        else if (letter != word[0]) {
            messageElement.textContent = "wrong Answer 👎";
            score -= 2;
            highScore -= 2;
            counter++;

        }
        document.getElementById("input").value = "";
        document.querySelector(".score").textContent = "score : " + score;
        document.querySelector(".highscore").textContent = "🍭 high score : " + highScore;
        console.log("score",score);
        if (counter <= 2) {
            i = selectRandomImage();
        }
        if (counter==3){
            document.querySelector(".playAgain").classList.remove("hidden");
            document.querySelector(".play").classList.add("hidden");
            document.getElementById("input").disabled=true;
        }
    }
}
document.querySelector(".play").addEventListener('click', play);
document.querySelector(".playAgain").addEventListener('click', reset);



