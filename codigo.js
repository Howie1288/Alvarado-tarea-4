// Definición de la función addInput()
function addInput() {
    // Obtiene el elemento con el id 'input-container' y lo asigna a la variable inputContainer
    var inputContainer = document.getElementById('input-container');

     // Crea un nuevo elemento de entrada <input> y lo asigna a la variable newInput
  var newInput = document.createElement('input');

     // Establece el tipo de entrada del nuevo elemento como 'text'
  newInput.type = 'text';

   // Agrega el nuevo elemento de entrada como hijo del contenedor de entrada
   inputContainer.appendChild(newInput);
}

// Definición de la función removeInput()
function removeInput() {
    // Obtiene el elemento con el id 'input-container' y lo asigna a la variable inputContainer
    var inputContainer = document.getElementById('input-container');
  
    // Obtiene todos los elementos de entrada descendientes del contenedor de entrada y los asigna a la variable inputs
    var inputs = inputContainer.getElementsByTagName('input');
  
    // Verifica si hay elementos de entrada presentes
    if (inputs.length > 0) {
      // Elimina el último elemento de entrada del contenedor
      inputContainer.removeChild(inputs[inputs.length - 1]);
    }
}
// Definición de la función validateForm(event)
function validateForm(event) {
  // Obtiene todos los elementos de entrada descendientes del elemento con el id 'dynamic-form' y los asigna a la variable inputs
  var inputs = document.getElementById('dynamic-form').getElementsByTagName('input');

  // Itera sobre cada elemento de entrada
  for (var i = 0; i < inputs.length; i++) {
    // Obtiene el elemento de entrada actual y lo asigna a la variable input
    var input = inputs[i];

    // Verifica si el valor del elemento de entrada está vacío
    if (input.value === '') {
      // Agrega la clase 'error' al elemento si está vacío
      input.classList.add('error');
    } else {
      // Elimina la clase 'error' del elemento si no está vacío
      input.classList.remove('error');
    }
  }
  // Verifica si hay algún elemento de entrada con la clase 'error'
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].classList.contains('error')) {
      // Evita que se envíe el formulario
      event.preventDefault();

      // Muestra una alerta al usuario para completar todos los campos obligatorios
      alert('Por favor, complete todos los campos es obligatorio.');

      // Finaliza la función
      return;
    }
  }

  // Muestra una alerta al usuario de que el formulario se ha enviado con éxito
  alert('¡Formulario enviado con Exito!');
}

// Agrega un evento 'submit' al elemento con el id 'dynamic-form', que llama a la función validateForm() cuando se envía el formulario
document.getElementById('dynamic-form').addEventListener('submit', validateForm);