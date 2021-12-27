//funcion que se va a ejecutar posteriormente ya sea por otra funcion
setTimeout(function(){
    console.log('hola mundo');
}  ,1000);


const getUsuarioById = (id, callback)=> {
 //esta puede ser una clase de una tabla de la base de datos
    const usuario ={
        id,
        nombre: 'Fredy'
    }
  /*  setTimeout(() => {
        callback(usuario)
    }, 1500);*/

    callback(usuario);
}
getUsuarioById(1971,(usuario)=>{
    console.log( usuario.id) ;
    console.log( usuario.nombre.toUpperCase() )
    console.log('-----------------');
    console.log(usuario);
});