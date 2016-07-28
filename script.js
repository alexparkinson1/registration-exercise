$(document).ready(function () {
  $(function() {
    var form = $('#register');

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
        data: formData
      })
    });
  });
});
