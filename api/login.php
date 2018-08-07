<?php
include "dbh.php";
$data = json_decode(file_get_contents('php://input'));
$email = $data->email;
$password = $data->password;

$sql = "SELECT * FROM user WHERE email = '$email' && password = '$password'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $output[] = [
            'id'=>$row['id'],
            'email'=>$row['email'],
            'name'=>$row['name'],
            'status'=> true
        ];
    }
} else {
    $output[] = [
        'error'=> "pleasecheck the details you have entered"
    ];
}

echo json_encode($output);
$conn->close();