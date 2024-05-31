# practica-clase-10


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