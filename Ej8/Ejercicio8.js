//////////// FUNC SIN PARAMS

const verdad = () => true

const a = verdad()

console.log(a)

///////////// ASYNC PROMISE

const promesa = new Promise((resolve,reject)=>{

    if(true){
        resolve()
    }else{
        reject()
    }
        

})

promesa
    .then(setTimeout(()=> console.log("Hola soy una promesa"), 500))
    .catch( ()=> console.log("Ha habido un ERROR!!"))
    .finally( () => console.log("Aguarda unos segundos"))


///////////// FUNCION GENERADORA

function* parId(){

    let id=0;
    while(true){
        id+=2;
        if(id===10){
            return id
        }
        yield id
    }

}

const generoIdPar= parId();

console.log(generoIdPar.next().value)
console.log(generoIdPar.next().value)
console.log(generoIdPar.next().value)
console.log(generoIdPar.next().value)
console.log(generoIdPar.next().value)


