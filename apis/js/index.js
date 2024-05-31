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
                                        <img src=${data.results[i].image}>
                                        <h2>${data.results[i].name}</h2>
                                    </article>`
        }
        characterList.innerHTML = characterArray
    })

    .catch(function(error) {
        console.log("Error: " + error);
    })
