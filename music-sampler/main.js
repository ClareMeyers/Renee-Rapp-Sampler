
let albumCovers = document.querySelectorAll('.album');
let audioFiles = document.querySelectorAll('.song');

let tattoos = document.querySelector('#tattoos');
let kitchen = document.querySelector('#kitchen');
let bruises = document.querySelector('#bruises');
let boston = document.querySelector('#boston');

audioFiles.forEach(function(el) {
    el.style.display = 'none';
});

albumCovers.forEach(function(el) {
    el.onclick = (e) => {
        let players = document.querySelectorAll('.song');

players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
        switch (e.target.getAttribute('id')) {

            case 'tattoos_cover':
                tattoos.style.display = 'block';
                kitchen.style.display = 'none';
                bruises.style.display = 'none';
                boston.style.display = 'none';
            break;

            case 'kitchen_cover':
                tattoos.style.display = 'none';
                kitchen.style.display = 'block';
                bruises.style.display = 'none';
                boston.style.display = 'none';
            break;

            case 'bruises_cover':
                tattoos.style.display = 'none';
                kitchen.style.display = 'none';
                bruises.style.display = 'block';
                boston.style.display = 'none';
            break;

            case 'boston_cover':
                tattoos.style.display = 'none';
                kitchen.style.display = 'none';
                bruises.style.display = 'none';
                boston.style.display = 'block';
            break;
        }
    }
});
