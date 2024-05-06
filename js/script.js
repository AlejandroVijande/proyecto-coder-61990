const datosPaciente = []
const cuestionario = [
    { item: 1, afirmacion: "El niño reacciona intensamente a sonidos fuertes o inesperados (p., ej., sirena, ladridos de perro, secador de pelo). " },
    { item: 2, afirmacion: "El niño se tapa los oidos con las manos para protegerlos de los sonidos. " },
    { item: 3, afirmacion: "Al niño le cuesta terminar las tareas cuendo esta puesta la musica o la television. " },
    // FALTAN MUCHAS MAS PREGUNTAS, PERO PARA PROBAR EL FUNCIONAMIENTO POR AHORA ES MAS RAPIDO TENER POCAS
]
const respuestasPerfilSensorial = []
let continuar = true
function agregarDatosPaciente(nombre, apellido, fechaDeNacimiento, dni) {
    const paciente = {
        nombre: nombre,
        apellido: apellido,
        fechaDeNacimiento: fechaDeNacimiento,
        dni: dni,
    }
    datosPaciente.push(paciente)
    alert('Paciente agregado')
}

function ingresoDatosPaciente() {
    const nombreIngresado = prompt('Ingrese el nombre del paciente')
    const apellidoIngresado = prompt('Ingrese el apellido del paciente')
    const fechaDeNacimientoIngresado = prompt('Ingrese la fecha de nacimiento del paciente')
    const dniIngresado = prompt('Ingrese el dni del paciente')
    agregarDatosPaciente(nombreIngresado, apellidoIngresado, fechaDeNacimientoIngresado, dniIngresado)
    /*faltan agregar: 
    sexo (varon o mujer)
    fecha de aplicacion
    nombre del examinador
    profesion del examinador
    nombre de la persona que cumplimenta el cuestionario
    relacion con el niño, nombre de la escuela o centro
    curso escolar
    que posicion ocupa el niño respecto de sus hermanos (p. ej fue el primero, el tercero, etc)? opciones hijo unico - primero - segundo - tercero - cuarto - quinto - otro:_____
    durante los ultimos 12 meses han vivido en casa mas de tres niños (de 0 meses a 18 años de edad)? si / no
        */
}

function verDatosPacientes() {
    let mensaje = "Datos de los pacientes:\n"
    for (let i = 0; i < datosPaciente.length; i++) {
        mensaje += "Paciente " + (i + 1) + ":\n"
        mensaje += "Nombre: " + datosPaciente[i].nombre + "\n"
        mensaje += "Apellido: " + datosPaciente[i].apellido + "\n"
        mensaje += "Fecha de Nacimiento: " + datosPaciente[i].fechaDeNacimiento + "\n"
        mensaje += "DNI: " + datosPaciente[i].dni + "\n\n"
    }
    alert(mensaje)
}

function iniciarCuestionario() {

    for (let i = 0; i < cuestionario.length; i++) {
        let respuesta = obtenerRespuesta(cuestionario[i])
        console.log('Respuesta a la afirmacion ' + [i + 1] + ': ' + respuesta)
    }
}

function obtenerRespuesta({ item, afirmacion }) {
    let respuestaUsuario
    respuestaUsuario = prompt(afirmacion + ' Ingrese su respuesta utilizando una letra: a) Casi siempre o siempre - b) Frecuentemente  - c) La mitad de las veces - d) Ocasionalmente - e) Casi nunca o nunca')
    while (respuestaUsuario !== 'a' && respuestaUsuario !== 'b' && respuestaUsuario !== 'c' && respuestaUsuario !== 'd' && respuestaUsuario !== 'e') {
        alert('Respuesta inválida')
        respuestaUsuario = prompt(afirmacion + ' Ingrese su respuesta utilizando una letra: a) Casi siempre o siempre - b) Frecuentemente  - c) La mitad de las veces - d) Ocasionalmente - e) Casi nunca o nunca')
    }
    respuestasPerfilSensorial.push({ item, respuesta: respuestaUsuario })
    return respuestaUsuario

}

function verRespuestas() {
    let mensaje = "Repuestas:\n"
    for (let i = 0; i < respuestasPerfilSensorial.length; i++) {
        mensaje += "item " + (i + 1) + ":\n"
        mensaje += "respuesta: " + respuestasPerfilSensorial[i].respuesta + "\n"
    }
    alert(mensaje)
}

function modificarDato() {
    let datoAModificar
    datoAModificar = prompt('Indique que dato quiere modificar:' + '\n' + '1) Nombre' +datosPaciente[0].nombre + '\n' + '2) Apellido' + datosPaciente[0].apellido + '\n' + '3) Fecha de nacimiento' + datosPaciente[0].fechaDeNacimiento + '\n' + '4) DNI' + datosPaciente[0].dni)
    while (datoAModificar !== '1' && datoAModificar !== '2' && datoAModificar !== '3' && datoAModificar !== '4') {
        alert('Respuesta inválida')
        datoAModificar = prompt('Indique que dato quiere modificar:' + '\n' + '1) Nombre' + '\n' + '2) Apellido' + '\n' + '3) Fecha de nacimiento' + '\n' + '4) DNI')
    }
    if (datoAModificar == 1) {
        nuevoDato = prompt('Ingrese el nuevo nombre:')
        datosPaciente[0].nombre = nuevoDato
        alert('Nombre actualizado correctamente.')
    } else if (datoAModificar == 2) {
        nuevoDato = prompt('Ingrese el nuevo apellido:')
        datosPaciente[0].apellido = nuevoDato
        alert('Apellido actualizado correctamente.')
    } else if (datoAModificar == 3) {
        nuevoDato = prompt('Ingrese el nuevo fecha de nacimiento:')
        datosPaciente[0].fechaDeNacimiento = nuevoDato
        alert('Fecha de nacimiento actualizada correctamente.')
    } else if (datoAModificar == 4) {
        nuevoDato = prompt('Ingrese el nuevo DNI:')
        datosPaciente[0].dni = nuevoDato
        alert('DNI actualizado correctamente.')
    } 
}

function modificarRespuesta() {
    let respuestaAModificar
    respuestaAModificar = prompt('Indique la afirmacion que quiere modificar:' + '\n' + '1) '+ cuestionario[0].afirmacion + '\n' + '2) '+ cuestionario[1].afirmacion + '\n' + '3) '+ cuestionario[2].afirmacion)
    while (respuestaAModificar !== '1' && respuestaAModificar !== '2' && respuestaAModificar !== '3') {
        alert('Respuesta inválida')
        respuestaAModificar = prompt('Indique la afirmacion que quiere modificar:' + '\n' + '1) '+ cuestionario[0].afirmacion + '\n' + '2) '+ cuestionario[1].afirmacion + '\n' + '3) '+ cuestionario[2].afirmacion)
    }
    if (respuestaAModificar == 1) {
        nuevaRespuesta = prompt('Ingrese la nueva respuesta utilizando una letra: a) Casi siempre o siempre - b) Frecuentemente  - c) La mitad de las veces - d) Ocasionalmente - e) Casi nunca o nunca')
        respuestasPerfilSensorial[0].respuesta = nuevaRespuesta
        alert('Respuesta actualizada correctamente.')
    } else if (respuestaAModificar == 2) {
        nuevaRespuesta = prompt('Ingrese la nueva respuesta utilizando una letra: a) Casi siempre o siempre - b) Frecuentemente  - c) La mitad de las veces - d) Ocasionalmente - e) Casi nunca o nunca')
        respuestasPerfilSensorial[0].respuesta = nuevaRespuesta
        alert('Respuesta actualizada correctamente.')
    } else if (respuestaAModificar == 3) {
        nuevaRespuesta = prompt('Ingrese la nueva respuesta utilizando una letra: a) Casi siempre o siempre - b) Frecuentemente  - c) La mitad de las veces - d) Ocasionalmente - e) Casi nunca o nunca')
        respuestasPerfilSensorial[0].respuesta = nuevaRespuesta
        alert('Respuesta actualizada correctamente.')
    }
}


function main() {
    let continuar = confirm('¿Quiere realizar una accion?')
    while (continuar) {
        const accion = prompt('Ingresar el numero de accion: 1) Introducir Datos, 2) Ver Datos, 3) Modificar Datos, 4) Iniciar Cuestionario, 5) Ver Respuestas, 6) Modificar Respuestas)')
        if (accion == '1') {
            ingresoDatosPaciente()
            verDatosPacientes()

        } else if (accion == '2') {
            if (datosPaciente.length === 0) {
                alert('Aun no hay datos que mostrar')
            } else {
                verDatosPacientes()
            }
        }
        else if (accion == '3') {
            modificarDato()
        }

        else if (accion == '4') {
            iniciarCuestionario()
            verRespuestas()
        }

        else if (accion == '5') {
            if (respuestasPerfilSensorial.length === 0) {
                alert('Aun no hay respuestas que mostrar')
            } else {
                verRespuestas()
            }
        }

        else if (accion == '6') {
            modificarRespuesta ()
        }

        continuar = confirm('¿Quiere realizar otra accion?')
    }

}


main()







