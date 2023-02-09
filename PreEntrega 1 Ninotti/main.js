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

while (fechaingresada != "10/02/2023");
{
    alert ("Fecha no disponible. Ingrese otra");
    fecha = prompt ("ingrese fecha (dd/mm/aaaa");
}

alert ("hay disponibilidad en esa fecha")
// while (fechaingresada != "11/02/2023"); {
//     alert ("Fecha no disponible. Ingrese otra");
// }
// while (fechaingresada != "17/02/2023"); {
//     alert ("Fecha no disponible. Ingrese otra");
// }


let habitacion = prompt ("que habitacion estas buscando?");
let habitacionSimple = 5000  
let cantidad = prompt ("cuantas habitaciones queres reservar?");

let resultado1 = habitacionSimple * cantidad;

alert ("debes abonar" + "$" + resultado1)



