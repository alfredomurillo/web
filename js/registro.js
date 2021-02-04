function validarFormulario(){

    var Nombre = document.getElementById('nombre').value;
    var Edad = document.getElementById('edad').value;
    var Correo = document.getElementById('correo').value;
    var Fecha = document.getElementById('fecha').value;
    var chkEstado = document.getElementById('checkBox');


    // campo obligatorio
    if(Nombre == null || Nombre.length == 0 || /^\s+$/.test(Nombre)){
        alert('ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco');
        return false;
    }

    // edad
    if(Edad == null || Edad.length == 0 || isNaN(Edad)){
        alert('ERROR: Debe ingresar una edad');
        return false;
    }

    // correo
    if(!(/\S+@\S+\.\S+/.test(Correo))){
        alert('ERROR: Debe escribir un correo válido');
        return false;
    }

    // fecha
    if(!isNaN(Fecha)){
        alert('ERROR: Debe elegir una fecha');
        return false;
    }


    // checkBox
    if(!chkEstado.checked){
        alert('ERROR: Debe seleccionar el checkbox');
        return false;
    }

    return true;
}