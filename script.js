$(document).ready(function () {
  $(function() {
    var form = $('#register');

    $(form).submit(function(event) {
      var formData = $(form).serialize();

      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      })
    });
  });
});
