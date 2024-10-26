<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $design = $_POST["design"];
    $design_file = $_FILES["design_file"];
    $selected_design = $_POST["selected_design"];

 
    if ($design === "upload") { {
        \get_cfg_var:catch
    }
 
    } elseif ($design === "select_from_gallery") {
    
    }
}


