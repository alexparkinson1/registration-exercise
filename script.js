$(document).ready(function () {
  $(function() {
    var form = $('#register');
    var formMessages = $('#form-messages');
    var password = document.getElementById("password");
    var cpassword = document.getElementById("confirmPassword");

    function validatePassword() {
      if(password.value != cpassword.value) {
        cpassword.setCustomValidity('Passwords do not match');
      } else {
        cpassword.setCustomValidity('');
      }
    }

    password.onchange = validatePassword;
    cpassword.onkeyup = validatePassword;

    $('#birthday').datepicker({
      maxDate: new Date,
      changeMonth: true,
      changeYear: true,
      yearRange: "-100Y:-0Y"
    });

    $(form).submit(function(event) {
      event.preventDefault();

      $('#register-button').prop('disabled', true);
      $('#register-button').addClass('disabled');

      var formData = $(form).serialize();

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

      .done(function(response) {
        $(formMessages).text(response);

        $('#email').val('');
        $('#birthday').val('');
        $('#password').val('');
        $('#confirmPassword').val('');
      })

      .fail(function(data) {
        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Whoops, please try again');
          $('#register-button').prop('disabled', false);
          $('#register-button').removeClass('disabled');
        }
      });
    });
  });
});
