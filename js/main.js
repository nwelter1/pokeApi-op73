// Getting some data

const getData = async() =>{
    let name = document.querySelector('.form-control').value
    console.log(name)
    document.querySelector('.form-control').value = ''
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let pokemon = res.data;
    console.log(pokemon)
    return pokemon
};

const loadData = async() =>{
    let pokemonData = await getData();

    //finding name
    let name = pokemonData.name;
    // title case this name
    let name_list = name.split('')
    name_list.splice(0,1, name[0].toUpperCase())
    console.log(name_list)
    name = name_list.join('')

    //finding photo
    let photo = pokemonData.sprites.back_default;

    
    //getting bootstrap card elements
    let photo_area = document.getElementsByTagName('img')[0];
    photo_area.src = photo;

    let title_area = document.querySelector('.card-title');
    title_area.innerHTML = name;


    // going to get games list
    let games = document.getElementById('games');
    let moves = document.getElementById('moves');

    //loop to find games
    for(let i = 0; i < pokemonData.game_indices.length; i++){
        let game_name = pokemonData.game_indices[i].version.name;
        let game_element = `<p>${game_name}</p>`;
        games.insertAdjacentHTML('beforeend', game_element)
    }

    for(let i = 0; i < pokemonData.moves.length; i++){
        let move_name = pokemonData.moves[i].move.name;
        let move_element = `<p>${move_name}</p>`;
        moves.insertAdjacentHTML('beforeend', move_element)
    }



}



