<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <meta charset="utf-8">
    <title>Thank you</title>
  </head>
  <body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

      echo "<p class='response'>Thank you for registering, $email<p>";

    } else {
      http_response_code(403);
      echo "<p class='response'>Whoops, something went wrong! Please try again</p>";
    }
    ?>
  </body>
</html>
