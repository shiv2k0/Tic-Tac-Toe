console.log('Welcome to TicTacToe');
let audioTurn = new Audio('src/ting.mp3');
let music = new Audio('src/music.mp3');
let gameOver = new Audio('src/gameover.mp3');
let turn = 'X';
let isGameOver = false;

const changeTurn = () => {

    return turn === 'X' ? '0' : 'X'
}

// Functuiom to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && boxText[e[0]].innerText != "") {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won";
            isGameOver = true;
            gameOver.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
        }
    })

}

// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// reset button

reset.addEventListener('click', () => {
    let boxCont = document.querySelectorAll('.boxText');
    Array.from(boxCont).forEach(element => {
        element.innerText = "";
    });
    turn = 'X';
    gameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0';


})