<html>
<body>


First name:<?php echo $_GET["fname"]; ?><br>
Last name: <?php echo $_GET["lname"] ?> <br>
Email: <?php echo $_GET["email"] ?> <br>
URL= <?php echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']; ?>
</body>
</html>

<?php
    extract($_REQUEST);
    $file=fopen("contacts-list.txt","a");
    fwrite($file,"First Name:");
    fwrite($file, $_GET["fname"]."\n");
    fwrite($file,"Last Name:");
    fwrite($file, $_GET["lname"]."\n");
    fwrite($file,"Email:");
    fwrite($file, $_GET["email"]."\n");  
    fwrite($file, "--------------------------"."\n");  
    fclose($file); ?>  