const formulario=document.getElementById('formulario__container');
const inputs=document.querySelectorAll('#formulario__container input');
const textarea=document.querySelector('#formulario__container textarea');
const expresiones={
    nombre: /^\S[a-zA-ZÀ-ÿ\s]{2,30}$/,
    apellido: /^\S[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

    consulta: /^.{14,350}$/,
}
const campos1 = {
    nombre:false,
    apellido:false,
    correo:false,
    consulta:false
}
const validarFormulario=(e) =>{
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "consulta":
            validarCampo(expresiones.consulta, e.target, 'consulta');
        break;    
    }
    
}

 const validarCampo=(expresion, input, campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        // document.querySelector(`#grupo__${campo} .formulario__input-error`);
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos1[campo]=true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos1[campo]=false;
    }
    if(campos1.nombre && campos1.apellido && campos1.correo && campos1.consulta){
        document.getElementById('boton').style.backgroundColor = "#149b02";
        document.getElementById('grupo__motivo').classList.add('formulario__grupo-correcto');
    }
 }   

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
textarea.addEventListener('keyup', validarFormulario);
textarea.addEventListener('blur', validarFormulario);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

    if(campos1.nombre && campos1.apellido && campos1.correo && campos1.consulta){
        formulario.reset();
        alert("Su consulta ha sido enviada y será respondida a la brevedad.");
        document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
        document.getElementById('grupo__apellido').classList.remove('formulario__grupo-correcto');
        document.getElementById('grupo__correo').classList.remove('formulario__grupo-correcto');
        document.getElementById('grupo__consulta').classList.remove('formulario__grupo-correcto');
        document.getElementById('grupo__motivo').classList.remove('formulario__grupo-correcto');
        document.getElementById('boton').style.backgroundColor = "#f8b531";
        
    }
});

