<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['signup'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Implement your signup logic here
    $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    
    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Use prepared statement to prevent SQL injection
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $hashedPassword);
    
    if ($stmt->execute()) {
        // Signup successful
        echo json_encode(['success' => true, 'message' => 'Signup successful']);
    } else {
        // Signup failed
        echo json_encode(['success' => false, 'error' => 'Internal server error']);
    }

    $stmt->close();
}
?>
