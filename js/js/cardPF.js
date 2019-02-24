var $cardPF = $("<div class='card text-center'> <div class='card-header'> Desarrollador </div> <div class='card-body'> <h5 class='card-title'>Maquetador web, data base mysql, java spring</h5> <p class='card-text'>Desarrollo de diseños web en photoshop y maqueteado con html,css, jquery y javascript. Tabien programa el backend con conexion a base de datos.</p> <a href='#' class='btn btn-primary btnEliminarCard'>Eliminar</a> </div> <div class='card-footer text-muted'> 2 days ago </div> </div>");
// var nombre = $('#nombre-agregar').val();

$('.btn2').on('click', function() {
  $("#cardperfilprofesional").append($cardPF);
  $('.bd-perfil_profesional-modal-lg').modal('hide');
  $('#alertPF').remove();
  // $(".nuevoid").attr('id',"cardperfilprofesional2");
});
