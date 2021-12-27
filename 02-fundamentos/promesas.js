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

//forma de traer el Empleado
const id = 3;
getEmpleado(id)
.then (empleado =>  console.log(empleado))
.catch(err => console.log (err));
//Forma para traer el salaro
const id2 = 2;
getSalario(id2)
.then (salario =>  console.log(salario))
.catch(err => console.log (err));

//Forma de trabajar las promesas en cadena
const id3 = 1;
let nombre;
getEmpleado(id3) 
    .then (empleado =>{
        nombre = empleado;
        return getSalario(id3)
    })
    .then( salario => console.log('El empleado', nombre, 'tiene un salario de: ',salario))
    .catch(err => console.log(err));
    