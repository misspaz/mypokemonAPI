const main$$ = document.querySelector("main");

const getPokemons = async () => {
  let myPokemonArray = [];
  for (let i = 1; i <= 151; i++) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + [i]);
    const res = await response.json();
    // console.log(res);

    myPokemonArray.push(res);
  }
  return myPokemonArray;
};

const mapPokemons = (pokemonsSinMap) => {
  return pokemonsSinMap.map((pokemon) => ({
    name: pokemon.name,
    imagen: pokemon.sprites.other.dream_world.front_default,
    tipo: pokemon.types[0].type.name,
  }));
};

const drawPokemons = (mapPokemons) => {
  main$$.innerHTML = "";
  for (const pokemon of mapPokemons) {
    const divflipcard$$ = document.createElement("div");
    divflipcard$$.classList.add("flip-card");

    const divinnercard$$ = document.createElement("div");
    divinnercard$$.classList.add("flip-card-inner");
    divinnercard$$.classList.add("flip-card-front");
    const divfrontcard$$ = document.createElement("div");
    divfrontcard$$.classList.add("flip-card-front");
    const pokemonimg$$ = document.createElement("img");
    pokemonimg$$.setAttribute("src", pokemon.imagen);
    pokemonimg$$.classList.add("pokemon-img");
    const pokemonname$$ = document.createElement("h2");
    pokemonname$$.classList.add("pokemon-name-style");

    pokemonname$$.classList.add("pokemon-font");
    pokemonname$$.textContent = pokemon.name;

    const ptype$$ = document.createElement("p");
    ptype$$.textContent = pokemon.tipo;
    ptype$$.classList.add("pokemon-font");
    ptype$$.classList.add("type-text-position");

    const divback$$ = document.createElement("div");
    divback$$.classList.add("flip-card-back");

    divfrontcard$$.appendChild(pokemonimg$$);
    divfrontcard$$.appendChild(pokemonname$$);
    divfrontcard$$.appendChild(ptype$$);
    divinnercard$$.appendChild(divfrontcard$$);
    divinnercard$$.appendChild(divback$$);
    divflipcard$$.appendChild(divinnercard$$);
    main$$.appendChild(divflipcard$$);

    if (pokemon.tipo === "grass") {
      divfrontcard$$.classList.add("bg-card-grass");
    } else if (pokemon.tipo === "fire") {
      divfrontcard$$.classList.add("bg-card-fire");
    } else if (pokemon.tipo === "water") {
      divfrontcard$$.classList.add("bg-card-water");
    } else if (pokemon.tipo === "bug") {
      divfrontcard$$.classList.add("bg-card-bug");
    } else if (pokemon.tipo === "normal") {
      divfrontcard$$.classList.add("bg-card-normal");
    } else if (pokemon.tipo === "poison") {
      divfrontcard$$.classList.add("bg-card-poison");
    } else if (pokemon.tipo === "electric") {
      divfrontcard$$.classList.add("bg-card-electric");
    } else if (pokemon.tipo === "ground") {
      divfrontcard$$.classList.add("bg-card-ground");
    } else if (pokemon.tipo === "fairy") {
      divfrontcard$$.classList.add("bg-card-fairy");
    } else if (pokemon.tipo === "psychic") {
      divfrontcard$$.classList.add("bg-card-psychic");
    } else if (pokemon.tipo === "fighting") {
      divfrontcard$$.classList.add("bg-card-fighting");
    } else if (pokemon.tipo === "rock") {
      divfrontcard$$.classList.add("bg-card-rock");
    } else if (pokemon.tipo === "ghost") {
      divfrontcard$$.classList.add("bg-card-ghost");
    } else if (pokemon.tipo === "ice") {
      divfrontcard$$.classList.add("bg-card-ice");
    } else if (pokemon.tipo === "dragon") {
      divfrontcard$$.classList.add("bg-card-dragon");
    }
  }
};

const drawInput$$ = (mappedPokemons) => {
  const input$$ = document.querySelector("input");

  input$$.addEventListener("input", () =>
    searchPokemons(input$$.value, mappedPokemons)
  );
};

const searchPokemons = (filtro, pokemons) => {
  let pokemonsFiltrados = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filtro.toLowerCase())
  );

  drawPokemons(pokemonsFiltrados);
};

// const numRandom = (max) => {
//   return Math.floor(Math.random() * max)
// }

const init = async () => {
  const pokemons = await getPokemons();
  // console.log(pokemons);
  const mappedPokemons = mapPokemons(pokemons);
  // console.log(mappedPokemons);

  let allPokemons = document.querySelector(".deleteFilter");
  allPokemons.addEventListener("click", function () {
    let todosPokemons = mappedPokemons;
    drawPokemons(todosPokemons);
  });
  drawPokemons(mappedPokemons);
  drawInput$$(mappedPokemons);

  let randomPokemon =
    mappedPokemons[Math.floor(Math.random() * mappedPokemons.length)];
  let imgrandompok$$ = randomPokemon.imagen;
  let namerandompok$$ = randomPokemon.name;

  const nameResult$$ = document.createElement("p");
  nameResult$$.textContent = namerandompok$$;
  nameResult$$.classList.add("pokemon-font");
  nameResult$$.classList.add("pokemon-result-name");

  const imgResult$$ = document.createElement("img");
  imgResult$$.setAttribute("src", imgrandompok$$);
  imgResult$$.classList.add("pokemon-result-imagen");
  const result$$ = document.querySelector("#result");
  result$$.appendChild(imgResult$$);
  result$$.appendChild(nameResult$$);

  const grass$$ = document.querySelector(".grass");
  grass$$.addEventListener("click", function () {
    let pokemongrass = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "grass"
    );
    drawPokemons(pokemongrass);
  });

  const fire$$ = document.querySelector(".fire");
  fire$$.addEventListener("click", function () {
    let pokemonfire = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "fire"
    );
    drawPokemons(pokemonfire);
  });

  const fairy$$ = document.querySelector(".fairy");
  fairy$$.addEventListener("click", function () {
    let pokemonfairy = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "fairy"
    );
    drawPokemons(pokemonfairy);
  });

  const bug$$ = document.querySelector(".bug");
  bug$$.addEventListener("click", function () {
    let pokemonbug = mappedPokemons.filter((pokemon) => pokemon.tipo === "bug");
    drawPokemons(pokemonbug);
  });

  const dragon$$ = document.querySelector(".dragon");
  dragon$$.addEventListener("click", function () {
    let pokemondragon = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "dragon"
    );
    drawPokemons(pokemondragon);
  });

  const electric$$ = document.querySelector(".electric");
  electric$$.addEventListener("click", function () {
    let pokemonelectric = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "electric"
    );
    drawPokemons(pokemonelectric);
  });

  const fighting$$ = document.querySelector(".fighting");
  fighting$$.addEventListener("click", function () {
    let pokemonfighting = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "fighting"
    );
    drawPokemons(pokemonfighting);
  });
  const flying$$ = document.querySelector(".flying");
  flying$$.addEventListener("click", function () {
    let pokemonflying = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "flying"
    );
    drawPokemons(pokemonflying);
  });

  const ghost$$ = document.querySelector(".ghost");
  ghost$$.addEventListener("click", function () {
    let pokemonghost = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "ghost"
    );
    drawPokemons(pokemonghost);
  });

  const ground$$ = document.querySelector(".ground");
  ground$$.addEventListener("click", function () {
    let pokemonground = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "ground"
    );
    drawPokemons(pokemonground);
  });

  const ice$$ = document.querySelector(".ice");
  ice$$.addEventListener("click", function () {
    let pokemonice = mappedPokemons.filter((pokemon) => pokemon.tipo === "ice");
    drawPokemons(pokemonice);
  });

  const normal$$ = document.querySelector(".normal");
  normal$$.addEventListener("click", function () {
    let pokemonnormal = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "normal"
    );
    drawPokemons(pokemonnormal);
  });

  const poison$$ = document.querySelector(".poison");
  poison$$.addEventListener("click", function () {
    let pokemonpoison = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "poison"
    );
    drawPokemons(pokemonpoison);
  });

  const rock$$ = document.querySelector(".rock");
  rock$$.addEventListener("click", function () {
    let pokemonrock = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "rock"
    );
    drawPokemons(pokemonrock);
  });

  const psychic$$ = document.querySelector(".psychic");
  psychic$$.addEventListener("click", function () {
    let pokemonpsychic = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "psychic"
    );
    drawPokemons(pokemonpsychic);
  });

  const steel$$ = document.querySelector(".steel");
  steel$$.addEventListener("click", function () {
    let pokemonsteel = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "steel"
    );
    drawPokemons(pokemonsteel);
  });

  const water$$ = document.querySelector(".water");
  water$$.addEventListener("click", function () {
    let pokemonwater = mappedPokemons.filter(
      (pokemon) => pokemon.tipo === "water"
    );
    drawPokemons(pokemonwater);
  });
};

init();

// POKETEST

let respuestas1$$ = [
  {
    respuesta: "Charmander",
  },
  {
    respuesta: "Bulbasur",
  },
  {
    respuesta: "Squirtle",
  },
];

for (const valor of respuestas1$$) {
  const buttonclicked = () => {
    if (buttonvalor$$.textContent === "Charmander") {
      buttonvalor$$.classList.add("buttonCharmander");
    } else if (buttonvalor$$.textContent === "Bulbasur") {
      buttonvalor$$.classList.add("buttonBulbasur");
    } else {
      buttonvalor$$.classList.add("buttonSquirtle");
    }
  };

  const buttonvalor$$ = document.createElement("button");
  buttonvalor$$.textContent = valor.respuesta;
  buttonvalor$$.classList.add("botones");
  buttonvalor$$.addEventListener("click", buttonclicked);
  document.querySelector(".divbotones").appendChild(buttonvalor$$);
}

let respuestas2$$ = [
  {
    respuesta: "Snorlax en el camino",
  },
  {
    respuesta: "Pidgeotto está malito",
  },
  {
    respuesta: "Está oscuro y frío",
  },
];

for (const valor of respuestas2$$) {
  const buttonclicked2 = () => {
    if (buttonvalor$$.textContent === "Snorlax en el camino") {
      buttonvalor$$.classList.add("buttonCharmander");
    } else if (buttonvalor$$.textContent === "Pidgeotto está malito") {
      buttonvalor$$.classList.add("buttonBulbasur");
    } else {
      buttonvalor$$.classList.add("buttonSquirtle");
    }
  };

  const buttonvalor$$ = document.createElement("button");
  buttonvalor$$.textContent = valor.respuesta;
  buttonvalor$$.classList.add("botones");
  buttonvalor$$.addEventListener("click", buttonclicked2);
  document.querySelector(".botones2").appendChild(buttonvalor$$);
}

let respuestas3$$ = [
  {
    respuesta: "Pasión",
  },
  {
    respuesta: "Humildad",
  },
  {
    respuesta: "Respeto",
  },
];

for (const valor of respuestas3$$) {
  const buttonclicked3 = () => {
    if (buttonvalor$$.textContent === "Pasión") {
      buttonvalor$$.classList.add("buttonCharmander");
    } else if (buttonvalor$$.textContent === "Humildad") {
      buttonvalor$$.classList.add("buttonBulbasur");
    } else {
      buttonvalor$$.classList.add("buttonSquirtle");
    }
  };

  const buttonvalor$$ = document.createElement("button");
  buttonvalor$$.textContent = valor.respuesta;
  buttonvalor$$.classList.add("botones");
  buttonvalor$$.addEventListener("click", buttonclicked3);
  document.querySelector(".botones3").appendChild(buttonvalor$$);
}

let modal = document.getElementById("ventanaModal");
let boton = document.getElementById("abrirModal");
let span = document.getElementsByClassName("cerrar")[0];

boton.addEventListener("click", function () {
  modal.style.display = "block";
});

span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
