const miPromesa = new Promise((resolve,reject) =>{

    if (false){
        resolve()
    } else {
        reject()
    }


})

miPromesa
    .then( () => console.log("Ejecutada correctamente la promesa"))
    .catch( ()=> console.log("ERROR"))
    .finally( () => console.log("Esto siempre"))