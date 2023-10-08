const main$$ = document.querySelector("main");
// console.log(main$$);
// fetch("https://digimon-api.vercel.app/api/digimon")
// .then((response)=>response.json())
// .then((res)=>console.log(res))

const getCharacter = async () => {
  const response = await fetch("https://amiiboapi.com/api/amiibo/");
  // console.log(response);

  // const res = await response.json();
  // console.log(res.amiibo);

  // con el destructuring nos cargamos la propiedad que teniamos antes res.amiibo, para sustituirla solo por amiibo

  const { amiibo } = await response.json();

  // console.log(amiibo);
  return amiibo;
};
const mapCharacters = (charactersWithMappe) => {
  // console.log(charactersWithMappe);
  return charactersWithMappe.map((character) => ({
    nombre: character.name,
    foto: character.image,
    tipo: character.type,
  }));
  // console.log(mappedCharacters);
};
const drawCharacters = (mappedCharacters) => {
  main$$.innerHTML = "";
  // console.log(mappedCharacters);
  for (const character of mappedCharacters) {
    // console.log(character);
    // let characterDiv$$ = document.createElement("figure")
    // characterDiv$$.className = "main__figure"
    // main$$.appendChild(characterDiv$$)

    // let characterName$$= document.createElement("figcaption");
    // characterName$$.textContent = character.nombre
    // characterDiv$$.appendChild(characterName$$)

    // let characterImg$$ = document.createElement("img")
    // characterImg$$.setAttribute("src",character.foto)
    // characterImg$$.setAttribute("alt",character.nombre)
    // characterDiv$$.appendChild(characterImg$$)

    // let characterP$$ = document.createElement("p")
    // characterP$$.textContent= character.tipo
    // characterDiv$$.appendChild(characterP$$)

    const characterDiv$$ = document.createElement("div");
    characterDiv$$.innerHTML = `
        <h2>${character.nombre}</h2>
        <img src="${character.foto}" alt="${character.nombre}">
        <p>${character.tipo}</p>
    `;
    main$$.appendChild(characterDiv$$);
  }
};
const drawInput = (mappedCharacters) => {
  // console.log(mappedCharacters);
  const input$$ = document.querySelector("input");
  // console.log(input$$);
  input$$.addEventListener("input", () =>
    searchCharacters(input$$.value, mappedCharacters)
  );
};
const searchCharacters = (filtro, characters) => {
  // console.log(filtro);
  // console.log(characters);
  let filteredCharacters = characters.filter((character) =>
    character.nombre.toLowerCase().includes(filtro.toLowerCase())
  );
  //  console.log(filteredCharacters);
  drawCharacters(filteredCharacters);
};
const init = async () => {
  // oye esperate a que mi función tenga todos mis caracteres por que sino me devuelve una promesa sin cumplir, porque son muchos datos 1º paso

  const characters = await getCharacter();
  // console.log(characters);
  //2º paso que es crearme esta función y pasarle mis character sin mapear por parametro a mi función

  const mappedCharacters = mapCharacters(characters);
  // console.log(mappedCharacters);

  //3º paso es crearme una función que pintara y le volvere a pasar los characters esta vez mapeados porque me los he puesto en una variable y se los paso por parametro

  drawCharacters(mappedCharacters);

  //4º paso  es crearnos nuestra función para coger el input y para que ese input disponga de la información para luego filtrar o para hacer lo que sea , necesita los characteres que tenemos aquí. Asi que se los mandaremos por parametros

  drawInput(mappedCharacters);
};
init();


