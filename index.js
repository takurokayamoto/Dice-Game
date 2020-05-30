var start1 = document.querySelector(".play1");
var start2 = document.querySelector(".play2");
var resultBtn = document.querySelector(".button_cont");
var dice = document.querySelectorAll(".dice");
var win1 = document.querySelector(".win1");
var win2 = document.querySelector(".win2");
var rd = document.querySelector(".rd")


var dice1 = "img/dice-1.png";
var dice2 = "img/dice-2.png";
var dice3 = "img/dice-3.png";
var dice4 = "img/dice-4.png";
var dice5 = "img/dice-5.png";
var dice6 = "img/dice-6.png";


resultBtn.addEventListener('click',function(){
    [].forEach.call(dice, function(i){
        i.style.visibility = "visible";
    })
    global();
})

function global() {
    function resultFunc() {
        let random1 = Math.floor(Math.random() * 6) + 1;
        let random2 = Math.floor(Math.random() * 6) + 1;
        return {random1, random2}
    }
    let {random1, random2} = resultFunc()

    function diceChange() {
      var dicePlayer1 = document.querySelector(".dicePlayer1");
      var dicePlayer2 = document.querySelector(".dicePlayer2");

      if (random1 === 1) {
        dicePlayer1.setAttribute("src", dice1);
      } else if (random1 === 2) {
        dicePlayer1.setAttribute("src", dice2);
      } else if (random1 === 3) {
        dicePlayer1.setAttribute("src", dice3);
      } else if (random1 === 4) {
        dicePlayer1.setAttribute("src", dice4);
      } else if (random1 === 5) {
        dicePlayer1.setAttribute("src", dice5);
      } else {
        dicePlayer1.setAttribute("src", dice6);
      }

      if (random2 === 1) {
        dicePlayer2.setAttribute("src", dice1);
      } else if (random2 === 2) {
        dicePlayer2.setAttribute("src", dice2);
      } else if (random2 === 3) {
        dicePlayer2.setAttribute("src", dice3);
      } else if (random2 === 4) {
        dicePlayer2.setAttribute("src", dice4);
      } else if (random2 === 5) {
        dicePlayer2.setAttribute("src", dice5);
      } else {
        dicePlayer2.setAttribute("src", dice6);
      }
      }
      diceChange();

    function winner(){
        if (random1 > random2) {
            // winner is 1
            win1.style.visibility = "visible"
          } else if (random1 < random2) {
            // winner is 2
            win2.style.visibility = "visible"
          } else {
            // draw
            console.log("this game is draw");
          }
    }

    winner()


    resultBtn.style.visibility = "hidden";
    rd.style.visibility = "visible";

    }


rd.addEventListener("click", function(){
    location.reload();
})