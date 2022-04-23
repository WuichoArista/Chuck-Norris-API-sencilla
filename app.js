 const sumar = ( a , b ) => {
    return a + b;
};



const valores = ( callback , x , y ) => {
    if(isNaN(x) || isNaN(y)){
        console.log('no es numero');
    }else{
        console.log(callback(x,y));
    };
};


valores( sumar, 10, 37.51 ); 

//EJERCICIO GUIADO ---------------------------------------------------------------------------------------------

console.log('EJERCICIO GUIADO 1------------------------------------------------------');

 const imprimirPalabra = ( palabra ) => {
    console.log( palabra );
};

const saludar = ( callback , str ) => {
    const palabra = str.toUpperCase();
    setTimeout( () => {
        return callback(palabra);
    }, 2000);
};

console.log('final');



saludar( imprimirPalabra , 'Hola men');  



 console.log('PROMESAS EJERCICIO GUIADO 2------------------------------------------------------');


const saludar2 = new Promise( ( resolve , reject ) => {
    setTimeout( () => {
        resolve('hola mundo, Soy llamado desde promesa')
        reject( 'Ha fallado la promesa')
    }, 2000)
} )

saludar2.then( ( res ) => {
    console.log(res)
}).catch( ( err ) => {
    console.log( err )
}).finally( ( final ) => {
    console.log('todo bien')
})  

 console.log('PROMESAS EJERCICIO GUIADO 3------------------------------------------------------');

const status = new Promise( ( resolve , reject ) => {
    const valor = 5
    if ( valor > 5 ){
        resolve('Es mayor a 5')
    } else {
        reject('Es menor a 5')
    }
} ); 

// llamada de la promesa

/* status.then( ( res) => {
    console.log( res )
}).catch ( ( err ) => {
    console.log(err)
}).finally( () => {
    console.log('final del codigo')
}) */


// llamada de la promesa refactorizada

status
    .then( ( res) => console.log( res ))
    .catch ( ( err ) => console.log(err))
    .finally( () => console.log('final del codigo')) 


/*status
    .then(console.log)
    .catch ( console.log)
    .finally(console.log )*/

    /* console.log('PROMESAS EJERCICIO GUIADO 4------------------------------------------------------');

    
    function sleep ( ms ) {
        return new Promise( ( resolve ) => setTimeout( resolve, ms))
    }

    async function uppercaseString(s) {
        await sleep( 2000 )
        return s.toUpperCase()
    }

    uppercaseString('edward').then(console.log) */


    

       