$(document).foundation();


$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  if(newSize ==='small' && oldSize ==='medium' ) {
    $('#menu-principal').removeClass('expanded');
  }
  if(newSize ==='medium' && oldSize ==='small' ) {
    $('#menu-principal').addClass('expanded');
  }

});

//Toma el tamaño principal al abrir el sitio y agrega clase basado en tamaño
var size = Foundation.MediaQuery.current;
if(size == "small") {
  $('#menu-principal').removeClass('expanded');
}

//agrega clase basado en el scroll que se la haga a la ventana principal

var navegacion = $('#navegacion-principal');
var nav = new Foundation.Magellan(navegacion);

$(window).scroll(function() {
  if(nav.scrollPos >= 300) {
      $(navegacion).addClass('fixed');
  } else {
    $(navegacion).removeClass('fixed');
  }
});
