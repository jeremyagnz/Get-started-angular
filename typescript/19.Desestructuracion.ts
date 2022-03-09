
(()=>{
    
    const avenger = {
        nombre:'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    }
       

    const extraer = ({nombre, clave, poder}:any) =>{
            // const {nombre, poder } = avengers;

            console.log(nombre);
            console.log(poder);
    }

    //extraer( avenger );

        const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];
        const[ , , arana] = avengers;

        const extraerArr = ( [thor, ironman, spiderman] :string[] ) =>{
            console.log(thor);
            console.log(ironman);
            console.log(spiderman);
        }

        extraerArr(avengers);
    


})();



