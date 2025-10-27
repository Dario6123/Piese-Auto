<?php
// Debug rapid
echo "<h2>Form Data Received:</h2>";
echo "<pre>";
print_r($_POST);
echo "</pre>";

// Conectare la baza de date
$host = "localhost";
$user = "root"; 
$pass = "";     
$db = "piese-auto-db";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Conexiunea a eșuat: " . $conn->connect_error);
}

// Preluare date din formular
$nume = $_POST['nume'] ?? '';
$email = $_POST['email'] ?? '';
$telefon = $_POST['telefon'] ?? '';
$mesaj = $_POST['mesaj'] ?? '';
$cartData = $_POST['cartData'] ?? '';

// Afisare valori preluate
echo "<h2>Valori PHP:</h2>";
echo "Nume: $nume <br>";
echo "Email: $email <br>";
echo "Telefon: $telefon <br>";
echo "Mesaj: $mesaj <br>";
echo "CartData: $cartData <br>";
?>
