(()=>{
    
    const sumar = (a: number, b: number): number => a +b;
    
    const nombre = ():string => 'Hola Jeremy';

    const obtenerSalario = ():Promise<string> => {

        return new Promise( (resolve, reject) =>{
            resolve('Fernando');
        });
    }
    obtenerSalario().then(b => console.log(b.toLowerCase() ))
    
})();



