<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }
    
    $to = "yagzlez@hotmail.com";
    $subject = "New Contact Form Submission from " . $name;
    $body = "Name: $name\nEmail: $email\nMessage: \n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent.";
    }
} else {
    echo "Invalid request method.";
}
