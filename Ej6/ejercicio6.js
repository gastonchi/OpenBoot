

let lista = ["Pan","Tomates","Leche","Café","Harina","Fideos"];

lista.push("Aceite de Girasol")
console.log(lista)

lista.pop()
console.log(lista)

const pelis = [
    { titulo : "En la boca de la locura", director : "John Carpenter", fecha : new Date(1995,01,05) },
    { titulo : "Nueve reinas", director : "Pablo Bossi", fecha : new Date(2000,31,08)  },
    { titulo : "Volver al futuro", director : "Robert Zemeckis", fecha : new Date(1985,05,06) },
    { titulo : "Avengers: Endgame", director : "Anthony Russo", fecha : new Date(2019,04,26) }
    
]

const pelisNuevas = pelis.filter( value => value.fecha > new Date(2010,01,01))

console.log(pelisNuevas)

const directores = pelis.map(value => value.director)

console.log(directores)
    
const titulos = pelis.map(value => value.titulo)

console.log(titulos)

const directorTitulo = directores.concat(titulos)

console.log(directorTitulo)

const directorTitulo2 = [...directores,...titulos]

console.log(directorTitulo2)

const student = {
    name: 'Cristo',
    courseJoined: ['Node.js', 'React'],
    showCourses: function() {
        this.courseJoined.forEach( (course) => {
            console.log(this.name + ' Joined' + course);
        })
    }
}

console.log(student.showCourses)

console.log(student.cursos)

