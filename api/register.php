<?php
include "dbh.php";
$data = json_decode(file_get_contents('php://input'));
$name = $data->name;
$email = $data->email;
$password = $data->password;


$sql = "INSERT INTO user (name, email, password)
VALUES ('$name', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    $output[] = [
      'success' => 'new records created succesfully'
    ];
} else {
    
    $output[] = [
      'error' => 'new records created succesfully'
    ];
}

$conn->close();



echo json_encode($output);


?>