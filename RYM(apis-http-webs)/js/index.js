fetch("https://rickandmortyapi.com/api/character")
    
    .then(function(response) {
        return response.json()
    })

    .then(function(data) {
        console.log(data.results);
        let characterList = document.querySelector(".characterList")
        let characterArray = ``
        for (let i = 0; i < data.results.length; i++) {
            characterArray = characterArray + `<article>
                                        <a href="./detalle.html?id=${data.results[i].id}">
                                        <img src=${data.results[i].image}>
                                        </a>
                                        <h2>${data.results[i].name}</h2>
                                    </article>`
        }
        characterList.innerHTML = characterArray
    })

    .catch(function(error) {
        console.log("Error: " + error);
    })
