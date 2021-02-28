const rollDice = document.getElementById("shuffle");

rollDice.addEventListener('click', () => {

    var diceOneRandomNum = Math.floor(Math.random() *  6 + 1);
    var diceTwoRandomNum = Math.floor(Math.random() *  6 + 1);

    document.getElementById("dice1").setAttribute("src", "images/dice" + diceOneRandomNum + ".png");
    document.getElementById("dice2").setAttribute("src", "images/dice" + diceTwoRandomNum + ".png");

    if(diceOneRandomNum === diceTwoRandomNum) {
        document.getElementById("roll-dice").innerHTML = "Draw!";
    } else if (diceOneRandomNum > diceTwoRandomNum) {
        document.getElementById("roll-dice").innerHTML = "Player One wins!";
    } else {
        document.getElementById("roll-dice").innerHTML = "Player Two wins!";
    }
});