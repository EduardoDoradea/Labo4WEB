/*Tengo algunos problemas por resolver en ciertos días específicos de la semana
depende del día de la semana mi problema a resolver cambia:

o Los Lunes debo atender un cliente especifico.
o Los Martes visito una agencia fuera de la ciudad.
o Los Miércoles debo llevar a mi hija al ballet (balé).
o En Jueves debo priorizar entregas de desarrollo.
o En Viernes debo atender problemas de manera remota.
o En Sábado debo hacer lo que mi esposa quiera.

Escribir una función que reciba el día de la semana como cadena de texto y un mensaje de recordatorio personalizado
y me recuerde si hoy tengo una actividad y que actividad tengo por hacer, esto debe reflejarse en una pantalla de una
página Web usando HTML/CSS - JS.*/

function semana() {

    //obtenemos el valor del input en una variable y la ocupamos en el switch
    let diaUsuario = document.getElementById('inputDia').value;
    const element = document.querySelector("#respuestaUsuario");

    // el lowercase lo que hace es que toma la cadena del input y transforma toda la cadena en minusculas

    switch (diaUsuario.toLowerCase()) {
        case 'lunes':
            //alert("Debo de atender a un cliente en especifico. ");
            element.textContent = "Debo de atender a un cliente en especifico.";
            break;
        case 'martes':
            //alert("Debo visitar la agencia afuera de la ciudad. ");
            element.textContent = "Debo visitar la agencia afuera de la ciudad. ";
            break;
        case 'miercoles':
            //alert("Debo llevar a mi hija a balé. ");
            element.textContent = "Debo llevar a mi hija a balé. ";
            break;
        case 'jueves':
            //alert("Debo priorizar las entregas de desarrollo. ");
            element.textContent = "Debo priorizar las entregas de desarrollo. ";
            break;
        case 'viernes':
            //alert("Debo de atender problemas de forma remota. ");
            element.textContent = "Debo de atender problemas de forma remota. ";
            break;
        case 'sabado':
            //alert("Debo hacer lo que quiera mi esposa. ");
            element.textContent = "Debo hacer lo que quiera mi esposa. ";
            break;
        case 'domingo':
            //alert("Dia del señor. ");
            element.textContent = "Dia del señor. ";
            break;
        default:
            //alert("Ingrese un dia correcto.");
            element.textContent = "Ingrese un dia correcto.";
            break;
    }
    //cuando finaliza el switch, limpia el input
    document.getElementById('inputDia').value = '';
}

