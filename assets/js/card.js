let card = [
    {
        name: 'Yusuke',
        speed: 7,
        attack: 8,
        defense: 5,
        background: 'url'
    },
    {
        name: 'Kuwabara',
        speed: 5,
        attack: 7,
        defense: 8,
        background: 'url'
    },
    {
        name: 'Kurama',
        speed: 8,
        attack: 7,
        defense: 8,
        background: 'url'
    },
    {
        name: 'Hiei',
        speed: 10,
        attack: 8,
        defense: 5,
        background: 'url'
    },
    {
        name: 'Toguro',
        speed: 5,
        attack: 8,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Genkai',
        speed: 8,
        attack: 8,
        defense: 6,
        background: 'url'
    },
    {
        name: 'Shinobu',
        speed: 6,
        attack: 7,
        defense: 8,
        background: 'url'
    },
    {
        name: 'Chu',
        speed: 7,
        attack: 8,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Raizen',
        speed: 9,
        attack: 9,
        defense: 6,
        background: 'url'
    },
    {
        name: 'Yomi',
        speed: 8,
        attack: 9,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Mukuro',
        speed: 8,
        attack: 6,
        defense: 6,
        background: 'url'
    },
    {
        name: 'Karasu',
        speed: 7,
        attack: 6,
        defense: 6,
        background: 'url'
    },
    {
        name: 'Jin',
        speed: 6,
        attack: 10,
        defense: 6,
        background: 'url'
    },
    {
        name: 'Tsukihito',
        speed: 4,
        attack: 9,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Yoko',
        speed: 9,
        attack: 9,
        defense: 8,
        background: 'url'
    },
    {
        name: 'Bui',
        speed: 6,
        attack: 6,
        defense: 10,
        background: 'url'
    }
]

pos = 0;
enemyDeck = [];
playerDeck = [];
startingCards = 8;

const enemyCardsOnDeck = document.getElementById('table__area--hud-cardsEnemy');
const playerCardsOnDeck = document.getElementById('table__area--hud-cardsPlayer');

function dealCards() {
    // revolvemos las cartas
    card = card.sort(function() {return Math.random() - 0.5});

    // repartimos las cartas
    for(let i = 0; i < 16; i++) {
        if (enemyDeck.length < startingCards) {
            // el enemigo recibe 8 cartas
            enemyDeck.push(card[i]);
            enemyCardsOnDeck.innerHTML += '<div class="table__area--hud-cards-card"><div class="logo"></div></div>';
        } else {
            // el jugador recibe 8 cartas
            playerDeck.push(card[i]);
            playerCardsOnDeck.innerHTML += '<div class="table__area--hud-cards-card"><div class="logo"></div></div>';
        }
    }
} dealCards();

const cardValues = document.getElementsByClassName('player-card-stat');
const enemyCardValues = document.getElementsByClassName('enemy-card-stat');
const enemyTurnCard = document.getElementById('enemy-turn');
const playerTurnCard = document.getElementById('player-turn');

const enemyCardName = document.getElementById('enemyCard-name');
const playerCardName = document.getElementById('playerCard-name');

const nameCard = document.getElementById('playerCard-name');
const speedCard = document.getElementById('speed');
const attackCard = document.getElementById('attack');
const defenseCard = document.getElementById('defense');

const enemyNameCard = document.getElementById('enemyCard-name');
const enemySpeedCard = document.getElementById('enemy-speed');
const enemyAttackCard = document.getElementById('enemy-attack');
const enemyDefenseCard = document.getElementById('enemy-defense');

function usePlayerCard() {
    nameCard.innerHTML = playerDeck[pos].name;
    speedCard.innerHTML = playerDeck[pos].speed;
    attackCard.innerHTML = playerDeck[pos].attack;
    defenseCard.innerHTML = playerDeck[pos].defense;
} usePlayerCard();

function useEnemyCard() {
    enemyNameCard.innerHTML = enemyDeck[pos].name;
    enemySpeedCard.innerHTML = enemyDeck[pos].speed;
    enemyAttackCard.innerHTML = enemyDeck[pos].attack;
    enemyDefenseCard.innerHTML = enemyDeck[pos].defense;
} useEnemyCard();

function flipPlayerCard(firstDeg, seconDeg) {
    playerTurnCard.firstElementChild.style.transform = `perspective(min(1000px, 200vw)) rotateY(${firstDeg}deg)`;
    playerTurnCard.lastElementChild.style.transform = `perspective(min(1000px, 200vw)) rotateY(${seconDeg}deg)`;

    usePlayerCard();
}

function flipEnemyCard(firstDeg, seconDeg) {
    enemyTurnCard.lastElementChild.style.transform = `perspective(min(1000px, 200vw)) rotateY(${firstDeg}deg)`;
    enemyTurnCard.firstElementChild.style.transform = `perspective(min(1000px, 200vw)) rotateY(${seconDeg}deg)`;

    useEnemyCard();
}

playerTurnCard.addEventListener('click', function(){
    flipPlayerCard(180, 360);
}, false)

function enemyTurn(){

    setTimeout(()=>{
        flipEnemyCard(360, 180);
        
        let selectValue = Math.floor(Math.random() * 3);
        let playerCardValue = parseInt(cardValues[selectValue].lastElementChild.textContent);
        let enemyCardValue = parseInt(enemyCardValues[selectValue].lastElementChild.textContent);
        
        setTimeout(()=>{

            flipPlayerCard(180, 360);

            setTimeout(()=>{
                if (enemyCardValue > playerCardValue) {

                    enemyCardsOnDeck.innerHTML += '<div class="table__area--hud-cards-card"><div class="logo"></div></div>';
                    playerCardsOnDeck.removeChild(playerCardsOnDeck.firstElementChild);
        
                    flipEnemyCard(180, 0);
                    flipPlayerCard(360, 180);
                    pos = pos+1
                    
                } else if (enemyCardValue < playerCardValue) {
        
                    playerCardsOnDeck.innerHTML += '<div class="table__area--hud-cards-card"><div class="logo"></div></div>';
                    enemyCardsOnDeck.removeChild(enemyCardsOnDeck.firstElementChild);
        
                    flipEnemyCard(180, 0);
                    flipPlayerCard(360, 180);
                    pos = pos+1

                } else if (enemyCardValue == playerCardValue) {
        
                    flipEnemyCard(180, 0);
                    flipPlayerCard(360, 180);
                    pos = pos+1
        
                }
            }, 5000)

        }, 1000)   
    }, 2000)
}

function playerTurn() {
    for(let i = 0; i < cardValues.length; i++) {
        cardValues[i].addEventListener('click', function(e) {

            let playerCardStat = parseInt(cardValues[i].lastElementChild.textContent);
            let enemyCardStat = parseInt(document.getElementById(`enemy-${cardValues[i].lastElementChild.id}`).textContent);
            console.log(playerCardStat)
            console.log(enemyCardStat)
            setTimeout(()=>{

                flipEnemyCard(360, 180);

                if (playerCardStat > enemyCardStat) {
                    setTimeout(()=>{

                        playerCardsOnDeck.innerHTML += '<div class="table__area--hud-cards-card"><div class="logo"></div></div>';
                        enemyCardsOnDeck.removeChild(enemyCardsOnDeck.firstElementChild);

                        flipEnemyCard(180, 0);
                        flipPlayerCard(360, 180);
                        enemyTurn();
                        pos = pos+1
                        
                    }, 4000)
                } else if (playerCardStat < enemyCardStat) {
                    setTimeout(()=>{
                        
                        enemyCardsOnDeck.innerHTML += '<div class="table__area--hud-cards-card"><div class="logo"></div></div>';
                        playerCardsOnDeck.removeChild(playerCardsOnDeck.firstElementChild);
                        
                        flipEnemyCard(180, 0);
                        flipPlayerCard(360, 180);
                        enemyTurn();
                        pos = pos+1
                        
                    }, 4000)    
                } else if (playerCardStat == enemyCardStat) {
                    setTimeout(()=>{
                        
                        flipEnemyCard(180, 0);
                        flipPlayerCard(360, 180);
                        enemyTurn();
                        pos = pos+1

                    }, 4000) 
                };
            }, 1000)
        }, false)
    }
} playerTurn();