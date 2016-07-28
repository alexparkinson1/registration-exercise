<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

      echo "Thank you for registering, $email";
    }
?>
