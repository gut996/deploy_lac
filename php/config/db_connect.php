<?php 

// connect to database
// mysqli to connect to database
$conn = mysqli_connect('localhost:3306', 'yokoyama', 'lucky0811', 'contactus');
// localhost:port number, id, pw, database name

// check connection
if (!$conn) {
    echo 'connection error' . mysqli_connect_error();
}
?>