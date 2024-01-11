function cambiarPagina(idPagina) {
 
  var paginas = document.querySelectorAll('.pagina');
  paginas.forEach(function(pagina) {
    pagina.classList.remove('visible');
  });


  var paginaSeleccionada = document.getElementById(idPagina);
  if (paginaSeleccionada) {
    paginaSeleccionada.classList.add('visible');
  }

  
  actualizarBreadcrumbs(idPagina);
}

function actualizarBreadcrumbs(idPagina) {
  var breadcrumbs = document.getElementById('breadcrumbs');
  breadcrumbs.innerHTML = ''; 
  var partes = idPagina.split(/(?=[A-Z])/);
  var ruta = '';

  partes.forEach(function(part, index) {
    ruta += part.toLowerCase();
    var enlace = document.createElement('a');
    enlace.href = '#' + ruta;
    enlace.innerText = ' > ' + part;
    breadcrumbs.appendChild(enlace);

    if (index < partes.length - 1) {
      breadcrumbs.appendChild(document.createTextNode('')); 
    }
  });
}