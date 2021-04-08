﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var url = "https://localhost:44325/api/Usuarios";
var url1 = "https://localhost:44325/api/Foro";


/*function get() {
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById("divlista").innerHTML = "";
        for (i = 0; i < data.length; i++) {
            let divElement = document.createElement("div");
            divElement.innerHTML = data[i].nombre;
            document.getElementById("divlista").appendChild(divElement);
        }

    })
}*/

getForo();

function get() {
    /*fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById("divlista").innerHTML = "";
        for (i = 0; i < data.length; i++) {
            let divElement = document.createElement("div");
            divElement.innerHTML = data[i].correo;
            document.getElementById("divlista").appendChild(divElement);
        }

    })*/
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById("divlista").innerHTML = "";
        
        let divElement = document.createElement("div");
        divElement.innerHTML = data[0].tituloPost;
            document.getElementById("divlista").appendChild(divElement);
        

    })
}


function getForo() {
    fetch(url1).then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById("divTitulo").innerHTML = "";
        document.getElementById("divDescripcion").innerHTML = "";

        let divTitulo = document.createElement("div");
        let divDescripcion = document.createElement("div");

        divTitulo.innerHTML = data[1].tituloPost;
        divDescripcion.innerHTML = data[1].descPost;

        document.getElementById("divTitulo").appendChild(divTitulo);
        document.getElementById("divDescripcion").appendChild(divDescripcion);


    })

}

function post() {

    
    fetch(url, {
        method: "post",
        body: JSON.stringify({
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            correo: document.getElementById("correo").value,
            red: document.getElementById("red").value,
            telefono: document.getElementById("telefono").value,
            contraseña: document.getElementById("contraseña").value,    
        }),
        headers:{
            'Accept': "application/json",
            "Content-Type": "application/json"
        }
    }).then(function(response) {
        if(response.ok) {
            return response.text();
        }else {
            alert("Error al ejecutar");
        }
    }).then(function (data) {
        console.log(data);
        get();
    })
}

function mensaje() {
    confirm("El link de activación ha sido enviado a su correo, Confirmelo por favor.");
}