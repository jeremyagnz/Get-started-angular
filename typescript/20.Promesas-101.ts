(()=>{
    console.log('Inicio');


    const prom1 = new Promise (( resolve, reject)=>{
        
        setInterval (()=>{
            reject('Se termino el timeout')
        }, 1000);
    });


    prom1
        .then(mens => console.log(mens))
        .catch(err => console.warn(err));

    console.log('Fin');
})();



