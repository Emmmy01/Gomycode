<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $design = $_POST["design"];
    $design_file = $_FILES["design_file"];
    $selected_design = $_POST["selected_design"];

    // Handle form data
    if ($design === "upload") {
        // Handle uploaded design file
    } elseif ($design === "select_from_gallery") {
        // Handle selected design from gallery
    }
}


