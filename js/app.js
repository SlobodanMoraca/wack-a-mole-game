const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0;
let curentTime = timeLeft.textContent


function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')


    //id of rand position to hit 
    hitPosition = randomPosition.id
}

square.forEach(id =>{
    id.addEventListener('mouseup', () =>{
        if(id.id === hitPosition){
            result++
            score.textContent = result
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 1000);
}

moveMole();


function countDown(){
    curentTime--
    timeLeft.textContent = curentTime

    if(curentTime === 0){
        clearInterval(timerId)
        alert('GAME IS OVER! Your final score is: ' + result)
        
    }
}



let timerId = setInterval(countDown, 1000)


function startTheGame(){
    timeLeft.textContent = 3
    countDown()

}