let gameMode = ''
let currentPlayer = 'X'
let gameover = false
let boardState = ['','','','','','','','','']
let playerxwins = 0
let playerowins = 0
let tie = 0
const twoplayerBtn = document.getElementById('twoPlayer');
twoplayerBtn.addEventListener('click',()=> {
    gameMode = 'two'
    if(gameover == true){
        return
    }
    const gamebr = document.querySelector('.game-board')
    gamebr.style.display = "grid"
})
const firstBox = document.querySelectorAll('.box');
firstBox.forEach((box) =>{
    box.addEventListener('click',()=>{
        const index = Array.from(firstBox).indexOf(box)
        boardState[index] = currentPlayer
        if(currentPlayer == 'X'){
            box.innerHTML = '<img src="assets/X logo.jpg">'
            currentPlayer = 'O'
        } else { 
            box.innerHTML = '<img src="assets/O logo.jpg">'
            currentPlayer = 'X'
        }
        checkwinner()
        if(gameover == false && boardState.every((box) => box != '')){
            tie++
            alert('Its a tie!')
            document.getElementById('tie').innerText = tie
            gameover = true
        }
        if(gameMode == 'single' && currentPlayer == 'O' && gameover == false){
            setTimeout(() => {
                compturePlay()
            }, 500)
        }
    })  // ← closes addEventListener
})  // ← closes forEach

function compturePlay(){  // ← outside forEach!
    const emptyIndexes = [0,1,2,3,4,5,6,7,8].filter((i) => boardState[i] == '')
    const index = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)]
    currentPlayer = 'X'
    boardState[index] = 'O'
    firstBox[index].innerHTML = '<img src="assets/O logo.jpg">'
}


const winningRowsColounms =[
           [0,1,2],
           [3,4,5],
           [6,7,8],
           [0,3,6,],
           [1,4,7],
           [2,5,8],
           [0,4,8,],
           [2,4,6]
]
function checkwinner() {
winningRowsColounms.forEach((combination) => {
    const [a,b,c] = combination
if(boardState[a] != '' &&
   boardState[a] == boardState[b] && 
   boardState[b] == boardState[c]){
    alert(`player ${currentPlayer} wins!!`)
    gameover = true
    if( currentPlayer == 'X'){
      playerxwins ++
      document.getElementById('playerxScore').innerText = playerxwins
    }
    else{
        playerowins ++
        document.getElementById('playeroScore').innerText = playerowins
    }
    
}

    

})
}
const restartbtn = document.getElementById('restartBtn')
restartbtn.addEventListener('click',()=>{
   boardState = ['','','','','','','','','']
   currentPlayer = 'X'
   gameover = false
   firstBox.forEach((box)=>{
    box.innerHTML = ''
   })
    
})


 let contestPlayer = 'X' 
const singleBtn = document.getElementById('singlePlayer')
singleBtn.addEventListener('click',()=> {
    gameMode = 'single'
    if(gameMode == 'single'){
    compturePlay()
    
}
const gamebr = document.querySelector('.game-board')
        gamebr.style.display = 'grid'
})




     
