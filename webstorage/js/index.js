// ejercicio 1

let miNombre = "Catalina"
localStorage.setItem("userName", miNombre)
console.log(localStorage);

let recuperoStorage = localStorage.getItem("userName")
console.log(recuperoStorage);

localStorage.clear()


// ejercicio 2

let peliculasFavoritas = ["Pelicula 1", "Pelicula 2", "Pelicula 3"]
localStorage.setItem("peliculaFavorita", peliculasFavoritas[1])
console.log(localStorage);

recuperoStorage = localStorage.getItem("peliculaFavorita")
console.log(recuperoStorage);

localStorage.clear()


// ejercicio 3

let peliculasJson = JSON.stringify(peliculasFavoritas)
localStorage.setItem("favoritos", peliculasJson)
console.log(localStorage);


// ejercicio 4

recuperoStorage = localStorage.getItem("favoritos")

let recuperoStorageArray = JSON.parse(localStorage.getItem("favoritos"))

recuperoStorageArray.push("Pelicula 4")

peliculasJson = JSON.stringify(recuperoStorageArray)
localStorage.setItem("favoritos", peliculasJson)

console.log(localStorage);


// ejercicio 5

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let winterIsComing = []

for (let i = 0; i < got.length; i++) {
    if (got[i].ciudad === "Winterfell") {
        winterIsComing.push(got[i]);
    }
}

let winterIsComingJson = JSON.stringify(winterIsComing)

localStorage.setItem("winterfell", winterIsComingJson)

console.log(localStorage);