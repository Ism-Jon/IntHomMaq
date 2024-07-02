/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const formulario = document.getElementById('formularioLogin');
const correoElectronico = document.getElementById('correoElectronico');
const contrasena = document.getElementById('contrasena');
const correoElectronicoFeedback = document.getElementById('correoElectronicoFeedback');
const contrasenaFeedback = document.getElementById('contrasenaFeedback');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío automático del formulario

  // Validación de correo electrónico
  if (correoElectronico.value === '') {
    correoElectronicoFeedback.textContent = 'Ingrese su correo electrónico';
    correoElectronico.classList.add('is-invalid');
  } else {
    correoElectronicoFeedback.textContent = '';
    correoElectronico.classList.remove('is-invalid');
  }

  // Validación de contraseña
  if (contrasena.value === '') {
    contrasenaFeedback.textContent = 'Ingrese su contraseña';
    contrasena.classList.add('is-invalid');
  } else {
    contrasenaFeedback.textContent = '';
    contrasena.classList.remove('is-invalid');
  }

  // Si la validación es correcta, aquí se puede realizar la lógica de inicio de sesión
  // (por ejemplo, enviar los datos a un servidor para verificar la autenticación)
 // if (// Validación correcta) {
    // Iniciar sesión
   // alert('¡Inicio de sesión exitoso!');
  //}
});
