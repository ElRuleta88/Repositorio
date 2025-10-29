const input = document.getElementById('imagen');
const preview = document.getElementById('preview');

input.addEventListener('change', function() {
  const archivo = this.files[0];
  if (archivo) {
    const lector = new FileReader();
    lector.onload = function(e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="imagen cargada">`;
    };
    lector.readAsDataURL(archivo);
  } else {
    preview.innerHTML = "Sin imagen seleccionada";
  }
});
