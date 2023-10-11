function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid ; // +'1' => 1   || dataset.['player-id'] nese e kem te ndare player  - id
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElemment.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElemment.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const fromData = new FormData(event.target);
    const enteredPlayername = fromData.get('playername').trim(); // '    max    ' =>  'max'
    
    if (!enteredPlayername) {    // eneteredPlayer === ''
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enterd a valid name!';
        
        return;
    }

    const updatePlayerDataElment = document.getElementById('player-' + editedPlayer + '-data');
    updatePlayerDataElment.children[1].textContent = enteredPlayername;

   players[editedPlayer - 1].name = enteredPlayername;

   closePlayerConfig();
}