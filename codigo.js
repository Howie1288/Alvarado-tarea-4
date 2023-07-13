// Definición de la función addInput()
function addInput() {
    // Obtiene el elemento con el id 'input-container' y lo asigna a la variable inputContainer
    var inputContainer = document.getElementById('input-container');

     // Establece el tipo de entrada del nuevo elemento como 'text'
  newInput.type = 'text';

   // Agrega el nuevo elemento de entrada como hijo del contenedor de entrada
   inputContainer.appendChild(newInput);
}
