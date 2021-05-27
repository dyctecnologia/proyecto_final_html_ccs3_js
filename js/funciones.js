function ValidarInformacion() {
    let datos = new Object();
    var nombre = document.getElementById("minombre").value;
    var email = document.getElementById("miemail").value;
    var telefono = document.getElementById("mitelefono").value;

    //evaluar si el nombre tiene mas de 3 caracteres //
    if (nombre.length < 3) {
        document.getElementById("msgNombre").innerText = "Ingrese un nombre correcto";
    } else {
        document.getElementById("msgNombre").innerText = "";
        datos["Nombre"] = nombre;
    }

    //evaluar si el correo tiene formato valido //
    if (email.length > 0) {
        var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!regex.test(email)) {
            document.getElementById("msgCorreo").innerText = "Ingrese un correo valido";
        } else {
            document.getElementById("msgCorreo").innerText = "";
            datos["Correo"] = email;
        }
    } else {
        document.getElementById("msgCorreo").innerText = "El correo es obligatorio";
    }

    //evaluar si el telefono es valido //
    if (telefono.length > 9) {
        document.getElementById("msgNumero").innerText = "Ingrese un numero valido";
    } else {
        document.getElementById("msgNumero").innerText = "";
        datos["Telefono"] = telefono;
    }

    console.log(datos);
}