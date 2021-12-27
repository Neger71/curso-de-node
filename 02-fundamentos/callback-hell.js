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

const getEmpleado=(id, callback)=>{
 const empleado = empleados.find(e => e.id===id)
 if(empleado){
    callback(null,empleado);
 }else{
    callback(`El empleado con ID ${id} no existe`);
 }
}

const getSalario = (id, callback)=>{
    const salario = salarios.find(e => e.id===id)
    if(salario){
       callback(null,salario);
    }else{
       callback(`El salario del ID ${id} no existe`);
    }
   }



getEmpleado(1,(err,empleado)=>{
    if (err){
        console.log('Error');
        return console.log(err);
    }
    console.log('Empleado existe!');
    console.log(empleado);
  })

  getSalario(10,(err,salario)=>{
    if (err){
        console.log('Error');
        return console.log(err);
    }
    console.log('Salario existe!');
    console.log(salario);
  })
