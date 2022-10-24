let cards = [
    {
        name: 'Yusuke',
        speed: 7,
        attack: 8,
        defense: 5,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Kuwabara',
        speed: 5,
        attack: 7,
        defense: 8,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Kurama',
        speed: 8,
        attack: 7,
        defense: 8,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Hiei',
        speed: 10,
        attack: 8,
        defense: 5,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Toguro',
        speed: 5,
        attack: 8,
        defense: 10,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Genkai',
        speed: 8,
        attack: 8,
        defense: 6,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Shinobu',
        speed: 6,
        attack: 7,
        defense: 8,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Chu',
        speed: 7,
        attack: 8,
        defense: 10,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Raizen',
        speed: 9,
        attack: 9,
        defense: 6,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Yomi',
        speed: 8,
        attack: 9,
        defense: 10,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Mukuro',
        speed: 8,
        attack: 6,
        defense: 6,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Karasu',
        speed: 7,
        attack: 6,
        defense: 6,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Jin',
        speed: 6,
        attack: 10,
        defense: 6,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Tsukihito',
        speed: 4,
        attack: 9,
        defense: 10,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Yoko',
        speed: 9,
        attack: 9,
        defense: 8,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    },
    {
        name: 'Bui',
        speed: 6,
        attack: 6,
        defense: 10,
        background: 'url(assets/img/characters/cards/togurocard.jpg)'
    }
]

const deckContainerEnemy = document.getElementById('table__area--hud-cardsEnemy');
const deckContainerPlayer = document.getElementById('table__area--hud-cardsPlayer');

let enemyPosition = -1;
let playerPosition = -1;
let enemyDeck = [];
let playerDeck = [];
let initialNumberOfCards = 8

function dealCards() {
    // revolvemos las cartas
    cards = cards.sort(function() {return Math.random() - 0.5});

    // tanto el enemigo como el jugador recibe 8 cartas
    enemyDeck.push(cards.splice(0, 8));
    playerDeck.push(cards.splice(0, 8));

    for(let i = 0; i < initialNumberOfCards; i++) {
        deckContainerEnemy.innerHTML += "<div class='table__area--hud-cards-card'><div class='logo'><div></div>";
        deckContainerPlayer.innerHTML += "<div class='table__area--hud-cards-card'><div class='logo'><div></div>";
    }
} dealCards()

const cardPlayerBack = document.getElementById('player-card-back');
const cardPlayerFront = document.getElementById('player-card-front');

const cardEnemyBack = document.getElementById('enemy-card-back');
const cardEnemyFront = document.getElementById('enemy-card-front');

const playerCardStat = document.getElementsByClassName('player-card-stat');
const enemyCardStat = document.getElementsByClassName('enemy-card-stat');

const playerCardName = document.getElementById('player-card-name');
const enemyCardName = document.getElementById('enemy-card-name');

function flipCard(card, firstDeg, seconDeg) {
    if (card == 'player') {

        cardPlayerFront.style.transform = `perspective(min(1000px, 200vw)) rotateY(${firstDeg}deg)`;
        cardPlayerBack.style.transform = `perspective(min(1000px, 200vw)) rotateY(${seconDeg}deg)`;

    } else if (card == 'enemy') {

        cardEnemyFront.style.transform = `perspective(min(1000px, 200vw)) rotateY(${firstDeg}deg)`;
        cardEnemyBack.style.transform = `perspective(min(1000px, 200vw)) rotateY(${seconDeg}deg)`;

    } else if (card == 'both') {

        cardPlayerFront.style.transform = `perspective(min(1000px, 200vw)) rotateY(${firstDeg}deg)`;
        cardPlayerBack.style.transform = `perspective(min(1000px, 200vw)) rotateY(${seconDeg}deg)`;

        cardEnemyFront.style.transform = `perspective(min(1000px, 200vw)) rotateY(${firstDeg}deg)`;
        cardEnemyBack.style.transform = `perspective(min(1000px, 200vw)) rotateY(${seconDeg}deg)`;

    }
} 

cardPlayerBack.addEventListener('click', function() {
    flipCard('player', 360, 180);
}, false)


function useCard() {
    console.log(enemyDeck[0]);
    console.log(playerDeck[0]);

    playerCardStat[0].lastElementChild.innerHTML = playerDeck[0][0].speed;
    playerCardStat[1].lastElementChild.innerHTML = playerDeck[0][0].defense;
    playerCardStat[2].lastElementChild.innerHTML = playerDeck[0][0].attack;
    cardPlayerFront.style.backgroundImage = playerDeck[0][0].background;
    playerCardName.innerHTML = playerDeck[0][0].name;
    
    enemyCardStat[0].lastElementChild.innerHTML = enemyDeck[0][0].speed;
    enemyCardStat[1].lastElementChild.innerHTML = enemyDeck[0][0].defense;
    enemyCardStat[2].lastElementChild.innerHTML = enemyDeck[0][0].attack;
    cardEnemyFront.style.backgroundImage = enemyDeck[0][0].background;
    enemyCardName.innerHTML = enemyDeck[0][0].name;
} useCard();

function compareValues(PlayerValue, enemyValue) {
    setTimeout(()=>{

        if (PlayerValue > enemyValue) { 

            console.log('ganas');

            setTimeout(()=>{
                flipCard('both', 180, 360);
                
                playerDeck[0].push(enemyDeck[0][0], playerDeck[0][0]);
                playerDeck[0].shift();
                enemyDeck[0].shift();

                deckContainerEnemy.removeChild(deckContainerEnemy.firstElementChild);
                deckContainerPlayer.innerHTML += "<div class='table__area--hud-cards-card'><div class='logo'><div></div>";
                useCard();
            }, 2000)
            
        } else if (PlayerValue < enemyValue) {
            
            console.log('pierdes');
            
            setTimeout(()=>{
                flipCard('both', 180, 360);
                enemyDeck[0].push(playerDeck[0][0], enemyDeck[0][0]);
                playerDeck[0].shift();
                enemyDeck[0].shift();
                useCard();

                deckContainerPlayer.removeChild(deckContainerPlayer.firstElementChild);
                deckContainerEnemy.innerHTML += "<div class='table__area--hud-cards-card'><div class='logo'><div></div>";
            }, 2000)

        } else if (PlayerValue == enemyValue) {

            console.log('empate');

            setTimeout(()=>{
                flipCard('both', 180, 360);
                enemyDeck[0].push(enemyDeck[0][0]);
                playerDeck[0].push(playerDeck[0][0]);
                playerDeck[0].shift();
                enemyDeck[0].shift();
                useCard()
            }, 2000)

        }

    }, 2000)
}

for(let i = 0; i < playerCardStat.length; i++) {
    playerCardStat[i].addEventListener('click', function(){

        let playerSelectedValue = parseInt(playerCardStat[i].lastElementChild.textContent);
        let enemySelectedValue = parseInt(document.getElementById(`enemy-${playerCardStat[i].lastElementChild.id}`).textContent);
        flipCard('enemy', 360, 180);
        compareValues(playerSelectedValue, enemySelectedValue);

    }, 2000)
}