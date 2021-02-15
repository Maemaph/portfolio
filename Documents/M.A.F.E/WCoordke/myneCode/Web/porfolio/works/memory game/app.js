// 1. Overall Event Listener

document.addEventListener('DOMContentLoaded', () => {

    // 2. Arrange your cards
    // card options

    const cardArray = [
        {
            name : 'dribble',
            img : 'img/dribble.png'
        },
        {
            name : 'dribble',
            img : 'img/dribble.png'
        },
        {
            name : 'facebook',
            img : 'img/facebook.png'
        },
        {
            name : 'facebook',
            img : 'img/facebook.png'
        },
        {
            name : 'instagram',
            img : 'img/instagram.png'
        },
        {
            name : 'instagram',
            img : 'img/instagram.png'
        },
        {
            name : 'iris',
            img : 'img/iris.jpg'
        },
        {
            name : 'iris',
            img : 'img/iris.jpg'
        },
        {
            name : 'kites',
            img : 'img/kites.jpg'
        },
        {
            name : 'kites',
            img : 'img/kites.jpg'
        },
        {
            name : 'twitter',
            img : 'img/twitter.png'
        },
        {
            name : 'twitter',
            img : 'img/twitter.png'
        }
    ]

    // 3. Arrange the cards RANDOMLY
    // randomize game

    cardArray.sort(() => 0.5 - Math.random())

    // 4. Pick the items needed

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // 5. Create the Board
    // create my board

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++ ){
            var card = document.createElement('img')
            card.setAttribute('src', 'img/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    
    // 6. How to check for match
    // check for match
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if ( cardsChosen[0] === cardsChosen[1] ){
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'img/white.jpg')
            cards[optionTwoId].setAttribute('src', 'img/white.jpg')
            cardsWon.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src', 'img/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'img/blank.jpg')
            alert('Oops! try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length == cardArray.length / 2 ){
            resultDisplay.textContent = 'Congratulations! You matched all'
        }
    }


    // 7. Let's flip it
    // flip your card
    
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 100)
        }
    }


    createBoard();
    
    // 8. The Countdown

    var startBtn = document.querySelector('button')
    startBtn.addEventListener('click', () => {
        resultDisplay.textContent = 0
        var count=61;
        var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer(){
            count=count-1;
            if (count <= -1){
             clearInterval(counter);
             alert("GAME OVER!");

             return;
          }
        
            document.getElementById('timer').innerHTML=count + " secs"; // watch for spelling
        }
    })
    
})

