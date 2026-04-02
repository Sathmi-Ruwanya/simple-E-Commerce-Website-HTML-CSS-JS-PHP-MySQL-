<?php
include 'db.php';

$product_id = $_GET['id'];

$conn->query("INSERT INTO cart (user_id, product_id, quantity) VALUES (1, $product_id, 1)");
?>