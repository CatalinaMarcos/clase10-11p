let characterList = document.querySelector(".characterList")

fetch("https://rickandmortyapi.com/api/character")
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data.results);
        let characters = ``;
        for (let i = 0; i < data.results.length; i++) {
            let character = data.results[i];
            characters += `
            <article>
                <img src="${characters.image}" alt="${characters.name}">
                <p>Name: ${characters.name}</p>
                <p>Status: ${characters.status}</p>
            </article>`
        }
        characterList.innerHTML = characters;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    })
