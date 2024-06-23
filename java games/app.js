//start rock paper scissors

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice=e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if(randomNumber === 1) {
        computerChoice = 'Rock'
    }

    if(randomNumber === 2) {
        computerChoice = 'Scissors'
    }

    if(randomNumber === 3) {
        computerChoice = 'Paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice===userChoice){
        result= 'its a draw!'
    }
    if(computerChoice=== 'Rock' && userChoice ==="Paper"){
        result= 'you win!'
    }
    if(computerChoice=== 'Rock' && userChoice ==="Scissors"){
        result= 'you lose!'
    }
    
    if(computerChoice=== 'Paper' && userChoice ==="Scissors"){
        result= 'you win!'
    }
    if(computerChoice=== 'Paper' && userChoice ==="Rock"){
        result= 'you lose!'
    }

    
    if(computerChoice=== 'Scissors' && userChoice ==="Rock"){
        result= 'you win!'
    }
    if(computerChoice=== 'Scissors' && userChoice ==="Paper"){
        result= 'you Lose!'
    }
    resultDisplay.innerHTML = result
}

//end rock paper scissors

//start memory game
const cardArray = [
    {
        name: 'fries',
        img:'images/MemoryGame/fries.png'
    },   
    {
        name: 'cheeseburger',
        img: 'images/MemoryGame/cheeseburger.png'
    },
      {
        name: 'ice-cream',
        img: 'images/MemoryGame/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/MemoryGame/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/MemoryGame/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/MemoryGame/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/MemoryGame/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/MemoryGame/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/MemoryGame/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/MemoryGame/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/MemoryGame/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/MemoryGame/hotdog.png'
      }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#gridMemGame')
const resultMemGameDisplay = document.querySelector('#resultMemGame')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard (){
    for(let i=0;i<cardArray.length;i++){
        const card = document.createElement('img')
        card.setAttribute('src','./images/MemoryGame/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){

    const cards = document.querySelectorAll('#gridMemGame img')
    const optionOneId =cardsChosenIds[0]
    const optionTwoId =cardsChosenIds[1]

    if(optionTwoId == optionOneId){
        cards[optionOneId].setAttribute('src','./images/MemoryGame/blank.png')
        cards[optionTwoId].setAttribute('src','./images/MemoryGame/blank.png')
        alert('You have clicked the same image!')
    }

    if(cardsChosen[0]==cardsChosen[1]) {
        
        cards[optionOneId].setAttribute('src','./images/MemoryGame/white.png')
        cards[optionTwoId].setAttribute('src','./images/MemoryGame/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','./images/MemoryGame/blank.png')
        cards[optionTwoId].setAttribute('src','./images/MemoryGame/blank.png')
        
    }
    resultMemGameDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        resultMemGameDisplay.textContent = ('Congratulations you found Them all!')
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}
//end memory game