// Definición de la función addInput()
function addInput() {
    // Obtiene el elemento con el id 'input-container' y lo asigna a la variable inputContainer
    var inputContainer = document.getElementById('input-container');

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