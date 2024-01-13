<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Implement your login logic here
    $sql = "SELECT * FROM users WHERE username = ?";
    
    // Use prepared statement to prevent SQL injection
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Verify password using password_hash
        if (password_verify($password, $user['password'])) {
            // User authentication successful
            echo json_encode(['success' => true, 'message' => 'Login successful']);
        } else {
            // User authentication failed
            echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
        }
    } else {
        // User not found
        echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
    }

    $stmt->close();
}
?>
