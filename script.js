$(document).ready(function () {
  $(function() {
    var form = $('#register');
    var password = document.getElementById("password");
    var cpassword = document.getElementById("confirmPassword");

    function validatePassword() {
      if(password.value != cpassword.value) {
        cpassword.setCustomValidity('Passwords do not match');
      } else {
        cpassword.setCustomValidity('');
      }
    }

    cpassword.onkeyup = validatePassword;

    $('#birthday').datepicker({
      maxDate: new Date,
      changeMonth: true,
      changeYear: true,
      yearRange: "-100Y:-0Y"
    });

    $(form).submit(function(event) {
      var formData = $(form).serialize();

      $('#register-button').prop('disabled', true);
      $('#register-button').addClass('disabled');

      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData,
        beforeSend: function() {
          $('#loading-spinner').addClass('show');
        },
        complete: function() {
          $('#loading-spinner').removeClass('show');
        },
      })
    });
  });
});
