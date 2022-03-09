(()=>{
    
        const retirarDinero = (montoretirar:number): Promise<number> =>{
            let dineroActual = 1000;

            return new Promise((resolve, reject) => {
                
                if(montoretirar > dineroActual){
                    reject('Fondos insuficientes');
                }else{
                    dineroActual -=montoretirar;
                    resolve(dineroActual);
                }

            })
        }

        retirarDinero(400)
                .then(montoActual => console.log(`Me queda ${montoActual}`))
                .catch(console.warn)

                            
})();



