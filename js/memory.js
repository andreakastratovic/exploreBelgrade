const cardsArray = [
    { name: 'hram', img: 'assets/hram.jpg' },
    { name: 'kalemegdan', img: 'assets/kalemegdan.jpg' },
    { name: 'gardos', img: 'assets/gardos.jpg' },
    { name: 'skadarlija', img: 'assets/skadarlija.jpg' },
    { name: 'republic-square', img: 'assets/trg.jpg' },
    { name: 'ada-ciganlija', img: 'assets/ada.jpg' },
    { name: 'savamala', img: 'assets/savamala.jpg' },
    { name: 'avala', img: 'assets/avala.webp' },
];

let gameGrid, firstCard, secondCard, lockBoard;
const memoryGameBoard = document.getElementById('memory-game-board');
const retryButton = document.getElementById('memory-retry');

function startGame() {
    gameGrid = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    memoryGameBoard.innerHTML = '';
    retryButton.style.display = 'none';

    gameGrid.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.name = item.name;

        const front = document.createElement('img');
        front.classList.add('front');
        front.src = item.img;

        const back = document.createElement('img');
        back.classList.add('back');
        back.src = 'assets/back.png'; 

        card.appendChild(front);
        card.appendChild(back);
        memoryGameBoard.appendChild(card);

        card.addEventListener('click', flipCard);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();

    if (document.querySelectorAll('.memory-card:not(.flipped)').length === 0) {
        retryButton.style.display = 'block';
    }
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

retryButton.addEventListener('click', startGame);

// Start the game
startGame();
