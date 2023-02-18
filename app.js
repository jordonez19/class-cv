function validarFormulario() {
    const name = document.getElementById("name")
    const emailAddress = document.getElementById("emailAddress")
    const message = document.getElementById("message")
  
    if (name.value.length === 0 || emailAddress.value.length === 0 || message.value.length === 0) {
      alert("Debe completar todos los campos.")
      return false; 
    } else if (!emailAddress.value.includes('@')) {
      alert("El correo electrónico no contiene una @.")
      return false; 
    } else {
      alert("Su mensaje ha sido enviado.")
      
      return true; 
    }
  }
  