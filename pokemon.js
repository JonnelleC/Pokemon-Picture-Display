// fetch ("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {

//     if(!response.ok){
//         throw new Error("Error Fetching data");
//     }
//     return response.json();
// })

// .then(data => console.log(data.id))
// .catch(error => console.error(error));
const form = document.getElementById('pokemonForm');


  form.addEventListener('submit', async (event) => {
    event.preventDefault();
  try {
    const input = document.querySelector(`input`)
    const pokemonName = input.value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Could not fet resource");
    }
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    const pokemonAbilities =[];
    for (let i =0; i < data.abilities; i++){
      pokemonAbilities.push(data.abilities[i].abilities.pokemonName);
    }
   
    const pokemonLi = document.createElement('li'); 
  
    pokemonLi.innerHTML = `
    <h3>${data.name} </h3>
    <p>${data.name} weighs ${data.weight} lbs.</p>
    `
  
    const orderedList = document.querySelector(`ol`);
  
    orderedList.append(pokemonLi);
  } catch (error) {
    console.error(error);
  }

  
})




