let card = [
    {
        name: 'Yusuke',
        speed: 9,
        attack: 8,
        defense: 7,
        background: 'url'
    },
    {
        name: 'Kuwabara',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Kurama',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Hiei',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Toguro',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Genkai',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Shinobu',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Chu',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Raizen',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Yomi',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Mukuro',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Karasu',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Jin',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Tsukihito',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Yoko',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    },
    {
        name: 'Bui',
        speed: 10,
        attack: 10,
        defense: 10,
        background: 'url'
    }
]

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

function flipPlayerCard(firstDeg, seconDeg) {
    playerTurnCard.firstElementChild.style.transform = `perspective(min(1000px, 200vw)) rotateY(${firstDeg}deg)`;
    playerTurnCard.lastElementChild.style.transform = `perspective(min(1000px, 200vw)) rotateY(${seconDeg}deg)`;

    nameCard.innerHTML = playerDeck[0].name
    speedCard.innerHTML = playerDeck[0].speed
    attackCard.innerHTML = playerDeck[0].attack
    defenseCard.innerHTML = playerDeck[0].defense
    
}

function flipEnemyCard(firstDeg, seconDeg) {
    enemyTurnCard.lastElementChild.style.transform = `perspective(min(1000px, 200vw)) rotateY(${firstDeg}deg)`;
    enemyTurnCard.firstElementChild.style.transform = `perspective(min(1000px, 200vw)) rotateY(${seconDeg}deg)`;
    
    enemyNameCard.innerHTML = enemyDeck[0].name
    enemySpeedCard.innerHTML = enemyDeck[0].speed
    enemyAttackCard.innerHTML = enemyDeck[0].attack
    enemyDefenseCard.innerHTML = enemyDeck[0].defense
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
                    
                } else if (enemyCardValue < playerCardValue) {
        
                    playerCardsOnDeck.innerHTML += '<div class="table__area--hud-cards-card"><div class="logo"></div></div>';
                    enemyCardsOnDeck.removeChild(enemyCardsOnDeck.firstElementChild);
                    
                    flipEnemyCard(180, 0);
                    flipPlayerCard(360, 180);                  
                    
                } else if (enemyCardValue == playerCardValue) {
                    
                    flipEnemyCard(180, 0);
                    flipPlayerCard(360, 180);
                    
                }
            }, 1000)
            
        }, 1000)   
    }, 2000)
}

function playerTurn() {
    for(let i = 0; i < cardValues.length; i++) {
        cardValues[i].addEventListener('click', function(e) {
            
            let playerCardStat = parseInt(cardValues[i].lastElementChild.textContent);
            let enemyCardStat = parseInt(document.getElementById(`enemy-${cardValues[i].lastElementChild.id}`).textContent);
            
            setTimeout(()=>{
                
                flipEnemyCard(360, 180);
                
                if (playerCardStat > enemyCardStat) {
                    setTimeout(()=>{
                        
                        playerCardsOnDeck.innerHTML += '<div class="table__area--hud-cards-card"><div class="logo"></div></div>';
                        enemyCardsOnDeck.removeChild(enemyCardsOnDeck.firstElementChild);
                        
                        flipEnemyCard(180, 0);
                        flipPlayerCard(360, 180);
                        enemyTurn();
                        playerDeck.push(enemyDeck.shift());
                        console.log(playerDeck);
                        
                    }, 2000)
                } else if (playerCardStat < enemyCardStat) {
                    setTimeout(()=>{
                        
                        enemyCardsOnDeck.innerHTML += '<div class="table__area--hud-cards-card"><div class="logo"></div></div>';
                        playerCardsOnDeck.removeChild(playerCardsOnDeck.firstElementChild);
                        
                        flipEnemyCard(180, 0);
                        flipPlayerCard(360, 180);
                        enemyTurn();   
                        
                    }, 2000)    
                } else if (playerCardStat == enemyCardStat) {
                    setTimeout(()=>{
                        
                        flipEnemyCard(180, 0);
                        flipPlayerCard(360, 180);
                        enemyTurn();   

                    }, 2000) 
                };
            }, 1000)
        }, false)
    }
} playerTurn();

console.log(enemyDeck);
console.log(playerDeck);