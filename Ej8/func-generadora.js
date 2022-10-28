function* generaId(){
    let id=0;
    while(true){
        id++
        if(id===10){
            return id
        }
        yield id

    }
}

let ident = generaId();

console.log(ident.next().value)
console.log(ident.next().value)
console.log(ident.next().value)
console.log(ident.next().value)
console.log(ident.next().value)
console.log(ident.next().value)
console.log(ident.next().value)
console.log(ident.next().value)
console.log(ident.next().value)
console.log(ident.next().value)
console.log(ident.next().value)

