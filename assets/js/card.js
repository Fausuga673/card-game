let cards = [
    {
        name: 'Yusuke',
        speed: 7,
        attack: 8,
        defense: 5,
        background: 'url(assets/img/characters/cards/yusukecard.jpg)'
    },
    {
        name: 'Kuwabara',
        speed: 5,
        attack: 7,
        defense: 8,
        background: 'url(assets/img/characters/cards/kuwabaracard.jpg)'
    },
    {
        name: 'Kurama',
        speed: 8,
        attack: 7,
        defense: 8,
        background: 'url(assets/img/characters/cards/kuramacard.jpg)'
    },
    {
        name: 'Hiei',
        speed: 10,
        attack: 8,
        defense: 5,
        background: 'url(assets/img/characters/cards/hieicard.jpg)'
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
        background: 'url(assets/img/characters/cards/genkaicard.jpg)'
    },
    {
        name: 'Shinobu',
        speed: 6,
        attack: 7,
        defense: 8,
        background: 'url(assets/img/characters/cards/shinobucard.jpg)'
    },
    {
        name: 'Chu',
        speed: 7,
        attack: 8,
        defense: 10,
        background: 'url(assets/img/characters/cards/chucard.jpg)'
    },
    {
        name: 'Raizen',
        speed: 9,
        attack: 9,
        defense: 6,
        background: 'url(assets/img/characters/cards/raizencard.jpg)'
    },
    {
        name: 'Yomi',
        speed: 8,
        attack: 9,
        defense: 10,
        background: 'url(assets/img/characters/cards/yomicard.jpg)'
    },
    {
        name: 'Mukuro',
        speed: 8,
        attack: 6,
        defense: 6,
        background: 'url(assets/img/characters/cards/mukurocard.jpg)'
    },
    {
        name: 'Karasu',
        speed: 7,
        attack: 6,
        defense: 6,
        background: 'url(assets/img/characters/cards/karasucard.jpg)'
    },
    {
        name: 'Jin',
        speed: 6,
        attack: 10,
        defense: 6,
        background: 'url(assets/img/characters/cards/jincard.jpg)'
    },
    {
        name: 'Sukazu',
        speed: 6,
        attack: 9,
        defense: 10,
        background: 'url(assets/img/characters/cards/sukazucard.jpg)'
    },
    {
        name: 'Yoko',
        speed: 9,
        attack: 9,
        defense: 8,
        background: 'url(assets/img/characters/cards/yokocard.jpg)'
    },
    {
        name: 'Bui',
        speed: 6,
        attack: 6,
        defense: 10,
        background: 'url(assets/img/characters/cards/buicard.jpg)'
    }
]

const deckContainerEnemy = document.getElementById('table__area--hud-cardsEnemy');
const deckContainerPlayer = document.getElementById('table__area--hud-cardsPlayer');

let enemyPosition = -1;
let playerPosition = -1;
let enemyDeck = [];
let playerDeck = [];
let initialNumberOfCards = 8;

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

const messege = document.getElementById('message');
const messegeResult = document.getElementById('message__result');

const messageResultButtons = document.getElementById('message__result--btn');

const stateEnemyTurn = document.getElementById('state-enemy-turn');
const statePlayerTurn = document.getElementById('state-player-turn');
const turnInstruction = document.getElementById('turn-instruction');

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

function disabledButtons(state) {
    for(let i = 0; i < playerCardStat.length; i++) {
        playerCardStat[i].disabled = state;
    }
}

cardPlayerBack.addEventListener('click', function() {
    turnInstruction.innerHTML = 'Selecciona una estadística';
    flipCard('player', 360, 180);
    disabledButtons(false);
}, false)

function useCard() {

    if (playerDeck[0].length > 0) {

        playerCardStat[0].lastElementChild.innerHTML = playerDeck[0][0].speed;
        playerCardStat[1].lastElementChild.innerHTML = playerDeck[0][0].defense;
        playerCardStat[2].lastElementChild.innerHTML = playerDeck[0][0].attack;
        cardPlayerFront.style.backgroundImage = playerDeck[0][0].background;
        playerCardName.innerHTML = playerDeck[0][0].name;

    } else {

        console.log('pierdes, te quedaste sin cartas');
        messege.classList.add('defeat');
        messege.style.display = 'flex';
        messege.style.animation = 'message 1s forwards';
        messegeResult.firstElementChild.innerHTML = "Derrota";
        messegeResult.classList.add('message__result-defeat');
        messegeResult.style.animation = 'animationRotate 1s forwards';
        
        messageResultButtons.style.display = "flex";
    }
    
    if (enemyDeck[0].length > 0) {
        enemyCardStat[0].lastElementChild.innerHTML = enemyDeck[0][0].speed;
        enemyCardStat[1].lastElementChild.innerHTML = enemyDeck[0][0].defense;
        enemyCardStat[2].lastElementChild.innerHTML = enemyDeck[0][0].attack;
        cardEnemyFront.style.backgroundImage = enemyDeck[0][0].background;
        enemyCardName.innerHTML = enemyDeck[0][0].name;
        
    } else {
        
        console.log('ganas, el enemigo no tiene cartas');
        messege.classList.add('victory');
        messege.style.display = 'flex';
        messege.style.animation = 'message 1s forwards';
        messegeResult.firstElementChild.innerHTML = "Victoria";
        messegeResult.classList.add('message__result-victory');
        messegeResult.style.animation = 'animationRotate 1s forwards';
        
        messageResultButtons.style.display = "flex";
    }
    
} useCard();

function animation(msg) {
    let result = {
        'tie':'Empate',
        'victory':'Ganas',
        'defeat':'Pierdes'
    }

    messege.classList.add(msg);
    messege.style.display = 'flex';
    messege.style.animation = 'msg 1.5s alternate';
    messegeResult.firstElementChild.innerHTML = result[msg];
    messegeResult.classList.add('message__result-' + msg);
    messegeResult.style.animation = 'animationMsg 1.5s alternate';

    setTimeout(()=>{
        messege.classList.remove(msg);
        messege.style.display = 'none';
        messege.style.animation = null;
        messegeResult.classList.remove('message__result-' + msg);
        messegeResult.style.animation = null;
    }, 1500)
}

function compareValues(PlayerValue, enemyValue) {
    setTimeout(()=>{

        if (PlayerValue > enemyValue) { 

            console.log('ganas');
            flipCard('both', 180, 360);
            
            playerDeck[0].push(enemyDeck[0][0], playerDeck[0][0]);
            playerDeck[0].shift();
            enemyDeck[0].shift();
            
            deckContainerEnemy.removeChild(deckContainerEnemy.firstElementChild);
            disabledButtons(true);
            animation('victory');
            setTimeout(()=> useCard(), 1100);
            deckContainerPlayer.innerHTML += "<div class='table__area--hud-cards-card'><div class='logo'><div></div>";

            turnInstruction.innerHTML = 'Click en tu carta';
            statePlayerTurn.innerHTML = 'Tu turno';
            stateEnemyTurn.innerHTML = '';
            
        } else if (PlayerValue < enemyValue) {
            
            console.log('pierdes');
            flipCard('both', 180, 360);
            
            enemyDeck[0].push(playerDeck[0][0], enemyDeck[0][0]);
            enemyDeck[0].shift();
            playerDeck[0].shift();
            
            deckContainerPlayer.removeChild(deckContainerPlayer.firstElementChild);
            disabledButtons(true);
            animation('defeat');
            setTimeout(()=> useCard(), 1100);
            deckContainerEnemy.innerHTML += "<div class='table__area--hud-cards-card'><div class='logo'><div></div>";
            
            turnInstruction.innerHTML = 'Click en tu carta';
            statePlayerTurn.innerHTML = 'Tu turno';
            stateEnemyTurn.innerHTML = '';
            
        } else if (PlayerValue == enemyValue) {
            
            console.log('empate');
            flipCard('both', 180, 360);
            
            enemyDeck[0].push(enemyDeck[0][0]);
            playerDeck[0].push(playerDeck[0][0]);
            playerDeck[0].shift();
            enemyDeck[0].shift();
            
            disabledButtons(true);
            setTimeout(()=> useCard(), 1100);
            animation('tie');
            
            turnInstruction.innerHTML = 'Click en tu carta';
            statePlayerTurn.innerHTML = 'Tu turno';
            stateEnemyTurn.innerHTML = '';
            
        }
    }, 4000)
}

function enemyTurn() {

    stateEnemyTurn.innerHTML = 'Turno enemigo';
    statePlayerTurn.innerHTML = '';
    turnInstruction.innerHTML = '';

    let randomValue = Math.floor(Math.random() * 3);
 
    let playerSelectedValue = parseInt(playerCardStat[randomValue].lastElementChild.textContent);
    enemySelectedValue = parseInt(enemyCardStat[randomValue].lastElementChild.textContent);
    

    disabledButtons(true);
    if ((enemyDeck[0].length > 0) && (playerDeck[0].length > 0)) {
        setTimeout(()=>{
            
            flipCard('enemy', 360, 180);
            
            setTimeout(()=>{
                flipCard('player', 360, 180);
                compareValues(playerSelectedValue, enemySelectedValue);
                cardPlayerBack.disabled = false;
            }, 2000)

        }, 2000)
    }
}

for(let i = 0; i < playerCardStat.length; i++) {
    playerCardStat[i].addEventListener('click', function(){
        
        cardPlayerBack.disabled = true;
        disabledButtons(true);

        let playerSelectedValue = parseInt(playerCardStat[i].lastElementChild.textContent);
        let enemySelectedValue = parseInt(document.getElementById(`enemy-${playerCardStat[i].lastElementChild.id}`).textContent);
        flipCard('enemy', 360, 180);
        compareValues(playerSelectedValue, enemySelectedValue);

        setTimeout( ()=> {
            enemyTurn();
        }, 4000);

    }, 2000)
}