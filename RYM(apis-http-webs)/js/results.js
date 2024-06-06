let personajeBuscado = document.querySelector(".search-results")

let personajeBuscadoObj = new URLSearchParams(window.location.search) 

let finalSearch = personajeBuscadoObj.get("q")


fetch(`https://rickandmortyapi.com/api/character/?name=${finalSearch}`)
    .then(function(res){
        return res.json()
    })

    .then(function(data) {
        let resultsHTML = "";
        if (data.results && data.results.length > 0) {
            for (let i = 0; i < data.results.length; i++) {
                let character = data.results[i];
                resultsHTML = resultsHTML + 
                    `<article>
                        <img src="${character.image}" alt="${character.name}">
                        <p>Nombre: ${character.name}</p>
                        <p>Estado: ${character.status}</p>
                    </article>`;}
        } else {
            resultsHTML = `<p>No se encontraron personajes.</p>`;
        }
        personajeBuscado.innerHTML = resultsHTML;
    })

    .catch(function(err){
        console.log(err);
    })

