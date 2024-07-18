const char_container = document.getElementById('char-container');
const char_count = 126;
const colors = {
    fire: '#FDDFDF'
};

const fecthCharacter = async () => {
    for(let i=1; i<char_count; i++){
        await getCharacter(i);
    }
}

const getCharacter = async (id) =>{
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createCharacterCard(data);
}

const createCharacterCard = (character) => {
    const characterElement = document.createElement('div');
    characterElement.classList.add('character');
    const id = character.id.toString().padStart(3, '0');
   
    const charactersWithoutImages = [6,20,30,44,40, 41, 52, 56, 61, 80, 82, 83, 84, 85, 54, 53, 7, 9, 8, 19, 66,95,104,108,109,113, 102, 91, 120];
    if (charactersWithoutImages.includes(character.id)) {
        return; // Exit function if ID is in charactersWithoutImages
    }

    const characterInnerHTML = `
    <div class="img-container">
        <img src="https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg" alt="">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${character.name}</h3>
        <small class="series">Series: <span>Rick and Morty</span></small>
    </div>
    `;

    characterElement.innerHTML = characterInnerHTML;
    char_container.appendChild(characterElement); 
}

fecthCharacter()