const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let computerChoice
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
   e.target.classList.add('button-click')
   setTimeout(() => {e.target.classList.remove('button-click')}, 100)

   userChoice = e.target.id
   
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   whoWin()
}))


function generateComputerChoice(){
   const randomNumber =  Math.floor(Math.random() * possibleChoices.length + 1)
   
   if (randomNumber === 1){
      computerChoice = 'rock'
      
   }
   if (randomNumber === 2){
      computerChoice = 'paper'
      
   }
   if (randomNumber === 3){
     computerChoice = 'scissors'
     
   } 

   computerChoiceDisplay.innerHTML = computerChoice
}


function whoWin(){
   if(userChoice === 'paper' && computerChoice === 'rock') {
      resultDisplay.innerHTML = 'Ты выиграл(а)'

   }
   if(userChoice === 'paper' && computerChoice === 'scissors') {
      resultDisplay.innerHTML = 'Ты проиграл(а)'

   }
   if(userChoice === 'paper' && computerChoice === 'paper') {
      resultDisplay.innerHTML = 'Ничья'

   }



   if(userChoice === 'rock' && computerChoice === 'rock') {
      resultDisplay.innerHTML = 'Ничья'

   }
   if(userChoice === 'rock' && computerChoice === 'scissors') {
      resultDisplay.innerHTML = 'Ты выиграл(а)'

   }
   if(userChoice === 'rock' && computerChoice === 'paper') {
      resultDisplay.innerHTML = 'Ты проиграл(а)'

   }


   if(userChoice === 'scissors' && computerChoice === 'rock') {
      resultDisplay.innerHTML = 'Ты проиграл(а)'

   }
   if(userChoice === 'scissors' && computerChoice === 'scissors') {
      resultDisplay.innerHTML = 'Ничья'

   }
   if(userChoice === 'scissors' && computerChoice === 'paper') {
      resultDisplay.innerHTML = 'Ты выиграл(а)'

   }


}