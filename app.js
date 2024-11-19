let startBtn = document.querySelector(".start-game");
 let mainContainer = document.querySelector(".main-container")
 let score = document.querySelector(".score")
 
  let boxContainer = document.querySelector(".box-container");
 let restart = document.querySelector(".restart")
 let gameOver = document.querySelector(".game-over")
function getGameData() {
  let numberOfBox;
  let boxNumber =  parseInt(document.querySelector(".box-number").value);
 let difficulty = document.querySelector("#difficulty").value;
 let numberOfDangerousBoxes;

if (boxNumber>50 ) {
  numberOfBox = 50;
} else if(boxNumber<5 || isNaN(boxNumber) ) {
  numberOfBox = 5;
}else{
  numberOfBox = boxNumber;
}
  boxContainer.innerHTML = "";
  mainContainer.style.display = "none"
  restart.style.display = "block"
  boxContainer.style.display = "flex"
  
let boxes = [];
for (let i = 0; i < numberOfBox; i++) {
  const box = document.createElement("div");
  box.className = "box";
  boxContainer.appendChild(box);
  boxes.push(box);
}
if (difficulty === "Easy") {
  numberOfDangerousBoxes = Math.floor(numberOfBox *0.2);

} else if (difficulty === "Normal") {
  numberOfDangerousBoxes = Math.floor(numberOfBox *0.3);

}else{
  numberOfDangerousBoxes = Math.floor(numberOfBox *0.5);
}

for (let i = 0; i < numberOfDangerousBoxes; i++) {
  let randomIndex = Math.floor(Math.random() * boxes.length);
  boxes[randomIndex].classList.add("dangerous");
  boxes.splice(randomIndex, 1); 
}

let totalscore = 0;
document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", function () {
    if (box.classList.contains("dangerous")) {
      box.style.backgroundColor = "red"; 
      box.style.borderColor = "red"
      gameOver.style.display = "flex"
      document.querySelectorAll(".box").forEach((b) => b.style.pointerEvents = "none");
    } else {
      box.style.backgroundColor = "green"; 
       box.style.borderColor = "green"
      totalscore += 1;
      score.innerHTML =`SCORE:${totalscore}` ;
      box.style.pointerEvents = "none";
    }
    box.innerHTML = totalscore;
  });
});
}

startBtn.addEventListener("click", getGameData);
restart.addEventListener("click", () => {
window.location.reload(); 
});

