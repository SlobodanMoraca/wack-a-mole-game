const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const startBtn = document.querySelector('#startGameBtn')
const bestScore = document.querySelector('#bestScore')

const score = document.querySelector('#score')


let bestResult = 0


const StartAGame = startBtn.addEventListener('click', () => {
    let curentTime = 6
    let result = 0;
    score.textContent = result
     

    const countDown = () => {
        curentTime--
        timeLeft.textContent = curentTime
    
        if(curentTime === 0){
            clearInterval(timerId)
            alert('GAME IS OVER! Your final score is: ' + result)


            if(result > bestResult){
                bestResult = result
                bestScore.innerText = bestResult
            }
        }
    }

    square.forEach(id =>{
        id.addEventListener('mouseup', () =>{
            if(id.id === hitPosition){
                result++
                score.textContent = result
            }
        })
    })

    countDown()
    let timerId = setInterval(countDown, 1000)


    
})

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')


    //id of rand position to hit 
    hitPosition = randomPosition.id
}



function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 1000);
}

moveMole();