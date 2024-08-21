var usuarios = [
    //Si esta dentro de un corchete 
    //indica que es un array o son varios
    //rol 1 = admin, rol 2  = cliente
    {
        "mail":"Gamliel@gmail.com",
        "contraseña":"ghami123",
        "rol":1
    },{
        "mail":"Natanael@gmail.com",
        "contraseña":"nata123",
        "rol":2
    }
]

function CrearElemento(){
    var mail = document.getElementById("mail").value;
    var contraseña = document.getElementById("contraseña").value;
    var elemento = {
        "mail":mail,
        "contraseña":contraseña,
        "rol":2
    };
    usuarios.push(elemento);
    alert("Agregado correctamente");
}
function CargarUsuarios(){
    var lista = document.getElementById("lista");
    lista.textContent="";
    for (let index = 0; index < usuarios.length; index++) {
        var elemento = document.createElement("li");
        elemento.textContent = usuarios[index].mail;
        lista.appendChild(elemento);
    }
}
function filtrar(){
    var lista = document.getElementById("lista");
    var filtro = document.getElementById("filtro").value;
    lista.textContent="";
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].mail.startsWith(filtro)) {
            var elemento = document.createElement("li");
            elemento.textContent = usuarios[index].mail;
            lista.appendChild(elemento);
        }
    }
}

function InicioSesion(){
    var mail = document.getElementById("mail").value;
    var contraseña = document.getElementById("contraseña").value;
    var formulario = document.getElementById("formulario");
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].mail == mail 
            && usuarios[index].contraseña == contraseña) {
            if (usuarios[index].rol==1) {
                formulario.setAttribute('action','admin.html');
                formulario.submit();
            }
            if (usuarios[index].rol==2) {
                formulario.setAttribute('action','home.html');
                formulario.submit();
            }
            return ;
        }
    }
    alert("No se pudo ingresar")
}
