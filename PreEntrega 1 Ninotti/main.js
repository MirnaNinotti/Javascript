let fechaingresada = prompt("ingrese fecha (dd/mm/aaaa)");

// if(fechaingresada == "17/02/2023"){
//     alert("fecha no disponible");
//     fecha = prompt("ingrese fecha de reserva (dd/mm/aaaa)");
// }
// if(fechaingresada == "10/02/2023"){
//     alert("fecha no disponible");
//     fecha = prompt("ingrese fecha de reserva (dd/mm/aaaa)");
// }
// if(fechaingresada == "11/02/2023"){
//     alert("fecha no disponible");
//     fecha = prompt("ingrese fecha de reserva (dd/mm/aaaa)");
// }

while (fechaingresada != "10/02/2023");{
    alert ("Fecha no disponible. Ingrese otra");
    fecha = prompt ("ingrese fecha (dd/mm/aaaa)");
}

alert ("Hay disponibilidad en esa fecha")



// let habitacion = prompt ("que habitacion estas buscando?");
// let habitacionSimple = 5000  
// let cantidad = prompt ("cuantas habitaciones queres reservar?");

// let resultado1= habitacionsimple * cantidad

// alert ("debes abonar" + "$" + resultado1)

let habitacion = [
    {personas: "1", habitacion: "Simple", precio: "9000"},
    {personas: "2", habitacion: "Doble", precio: "15000"},
    {personas: "3", habitacion: "Triple", precio: "20000"},

];

let personas = prompt("ingrese la cantidad de personas que desean alojarse");
let filtrado = habitacion.filter( (item) => item.personas === personas );


if (personas<3){
filtrado.forEach( (item) => {
    let mensaje = `
    Personas: ${item.personas}
    habitacion: ${item.habitacion}
    precio: ${item.precio}
    `;
    alert(mensaje);
})
} else {
    alert("no contamos con habitaciones cuadruples, puede reservar dos dobles o una triple y una individual");

}

