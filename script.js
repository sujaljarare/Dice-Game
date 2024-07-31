let player1Name = "";
let player2Name = "";
let player1Score = 0;
let player2Score = 0;

function startGame() {
    player1Name = document.getElementById('player1').value || "Player 1";
    player2Name = document.getElementById('player2').value || "Player 2";

    document.getElementById('name1').innerText = player1Name;
    document.getElementById('name2').innerText = player2Name;

    document.querySelector('.container1').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
}

function rollDice(player) {
    const dice = Math.floor(Math.random() * 6) + 1;
    const diceImage = document.getElementById(`dice${player}`);
    diceImage.src = `dice/${dice}.png`;

    if (player === 1) {
        player1Score += dice;
        document.getElementById('score1').innerText = player1Score;
    } else {
        player2Score += dice;
        document.getElementById('score2').innerText = player2Score;
    }
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    document.getElementById('score1').innerText = player1Score;
    document.getElementById('score2').innerText = player2Score;
    document.getElementById('dice1').src = 'dice/1.png';
    document.getElementById('dice2').src = 'dice/1.png';
}

function goHome() {
    resetGame();
    document.querySelector('.container1').style.display = 'flex';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
}