const character = [
    {
        name: 'Yusuke',
        card: 'assets/img/characters/avatar/yusuke.jpg'
    },
    {
        name: 'Kuwabara',
        card: 'assets/img/characters/avatar/kuwabara.jpg'
    },
    {
        name: 'Kurama',
        card: 'assets/img/characters/avatar/kurama.jpg'
    },
    {
        name: 'Hiei',
        card: 'assets/img/characters/avatar/hiei.jpg'
    },
    {
        name: 'Toguro',
        card: 'assets/img/characters/avatar/toguro.jpg'
    },
    {
        name: 'Atsuko',
        card: 'assets/img/characters/avatar/atsuko.jpg'
    },
    {
        name: 'Botan',
        card: 'assets/img/characters/avatar/botan.jpg'
    },
    {
        name: 'Bui',
        card: 'assets/img/characters/avatar/bui.jpg'
    },
    {
        name: 'Chu',
        card: 'assets/img/characters/avatar/chu.jpg'
    },
    {
        name: 'Genkai',
        card: 'assets/img/characters/avatar/genkai.jpg'
    },
    {
        name: 'Itsuki',
        card: 'assets/img/characters/avatar/itsuki.jpg'
    },
    {
        name: 'Jin',
        card: 'assets/img/characters/avatar/jin.jpg'
    },
    {
        name: 'Karasu',
        card: 'assets/img/characters/avatar/karasu.jpg'
    },
    {
        name: 'Keiko',
        card: 'assets/img/characters/avatar/keiko.jpg'
    },
    {
        name: 'Koenma',
        card: 'assets/img/characters/avatar/koenmajr.jpg'
    },
    {
        name: 'Pu',
        card: 'assets/img/characters/avatar/pu.jpg'
    },
    {
        name: 'Raizen',
        card: 'assets/img/characters/avatar/raizen.jpg'
    },
    {
        name: 'Shinobu',
        card: 'assets/img/characters/avatar/shinobu.jpg'
    },
    {
        name: 'Shishiwakamaru',
        card: 'assets/img/characters/avatar/shishiwakamaru.jpg'
    },
    {
        name: 'Touya',
        card: 'assets/img/characters/avatar/touya.jpg'
    },
    {
        name: 'Tsukihito',
        card: 'assets/img/characters/avatar/tsukihito.jpg'
    },
    {
        name: 'Yoko',
        card: 'assets/img/characters/avatar/yoko.jpg'
    },
    {
        name: 'Yomi',
        card: 'assets/img/characters/avatar/yomi.jpg'
    },
    {
        name: 'Mukuro',
        card: 'assets/img/characters/avatar/mukuro.jpg'
    },
];

// Colocamos los avatares en el menu de selección
function putAvatar(character) {
    
    const menuSelect = document.getElementById('menu__container--select--container');
    const imgAvatar = document.createElement('div');
    imgAvatar.setAttribute('id', character.name);
    imgAvatar.setAttribute('style', `background-image: url(${character.card})`);
    imgAvatar.setAttribute('class', 'menu__container--select--container-avatar');
    return menuSelect.innerHTML += imgAvatar.outerHTML ;
    
}

// eliminamos los atributos de estilo de cada avatar
function deleteStyle() {
    let avatar = document.getElementsByClassName('menu__container--select--container-avatar');
    for(let i = 0; i < avatar.length; i++) {
        avatar[i].style.animation = null;
        avatar[i].style.border = null;
    }
}

// seleccionamos y aplicamos una animación para hacerle saber al usuario el avatar que seleccionó
function selectAvatar() {
    let avatar = document.getElementsByClassName('menu__container--select--container-avatar');
    for(let i = 0; i < avatar.length; i++) {
        avatar[i].addEventListener('click', ()=>{

            // para evitar que hayan más de un avatar seleccionado hacemos uso de esta función.
            deleteStyle();
            localStorage.setItem("name", avatar[i].id);
            localStorage.setItem("avatar", avatar[i].style.backgroundImage);

            avatar[i].style.border = 'min(3px, .5vw) solid #ff4800';
            avatar[i].style.animation = 'avatar .3s linear infinite alternate';
        }, false);
    }
} 

// una vez en partida, obtenemos el avatar que seleccionamos
function getAvatar() {
    const enemyName = document.getElementById('enemy-name');
    const playerName = document.getElementById('player-name');
    const enemyAvatar = document.getElementById('enemy-avatar');
    const playerAvatar = document.getElementById('player-avatar');

    // el avatar del enemigo es aleatorio
    numberOfAvatars = 24;
    let randomAvatar = Math.floor(Math.random() * numberOfAvatars); 
    
    const name = localStorage.getItem("name");
    const avatarSelected = localStorage.getItem("avatar");
    
    playerName.innerHTML = name;
    playerAvatar.style.backgroundImage = avatarSelected;
    enemyName.innerHTML = character[randomAvatar].name;
    enemyAvatar.style.backgroundImage = `url(${character[randomAvatar].card})`;
}