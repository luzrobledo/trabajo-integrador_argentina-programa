$(document).ready(function(){
 
  $("body").hide().fadeIn(1500);

/*Log in*/
//btn
$("#login-nav").click(function(){
  $("#login").slideToggle(300);
})

//form
 $('#submit').click(function() {
  var email = $('#email').val();
  var password = $('#password').val();
  $.ajax({
    url: 'https://reqres.in/api/login',
    type: 'POST',
    data: {
      email: email,
      password: password
    },
    success: function(response) {
      $('#response').html('<p>Inicio de sesión exitoso!</p>').css("color", "green");
    },
    error: function(xhr, status, error) {
      $('#response').html('<p>Error al iniciar sesión, usuario y/o contraseña incorrecta.</p>').css("color", "red");
    }
  });
});



/*Form validation*/
  (() => {
      'use strict'
      

      const forms = document.querySelectorAll('.needs-validation')
      
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
     
           form.classList.add('was-validated')
         }, false)
       })
     })()


/*Personal introduction*/

$("#btn-personal-introduction").click(function(){
  if($("#personal-introduction").is(":visible")){
    $("#personal-introduction").fadeOut(200);
  } else{
      $("#personal-introduction").css("display", "block").hide().fadeIn(200);
  };  
  
  $("#close-btn").click(function(){
    $("#personal-introduction").fadeOut(200);
  });


})




});