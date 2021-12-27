const empleados = [
    {
        id:1,
        nombre: "Fredy"
    },
    {
        id:2,
        nombre: "Linda"
    },
    {
        id:3,
        nombre: "Karen"
    },
];

const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    }
];

const getEmpleado=(id)=>{
    return new Promise ((resolve, reject)=>{
        const empleado = empleados.find(e => e.id===id)?.nombre;
        (empleado)
            ?resolve(empleado)
            :reject (`No existe el empleado con el ID ${id}`)
    });
}

//Obtiene Salario
const getSalario=(id2)=>{
    return new Promise ((resolve, reject)=>{
        const salario = salarios.find(e => e.id===id2)?.salario;
        (salario)
            ?resolve(salario)
            :reject (`No existe el salario del empleado con el ID ${id2}`)
    });
}

const getInfoUsuario = async(id)=> {
    try {
   const empleado = await getEmpleado(id);
   const salario = await getSalario(id);
   return `El salario del empleado ${empleado} el de ${salario}`;
} catch (error) {
    return error;
}
}

const id = 3;
getInfoUsuario(id)
.then (msg=> console.log(msg))
.catch(err => console.log(err));

