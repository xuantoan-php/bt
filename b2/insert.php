<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "insert";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_errno());
}
if (isset($_POST["email"]) && isset($_POST["sdt"]) && isset($_POST["diachi"]) && isset($_POST["vitri"]) && isset($_POST["soluong"]) && isset($_POST["hoahong"]) && isset($_POST["thuviec"]) && isset($_POST["birthday"]) && isset($_POST["nguoilienhe"]) && isset($_POST["mota"]) && isset($_POST["hoso"] ) && isset($_POST["quyenloi"]) && isset($_POST["yeucau"])) {
    
    $vitri = $_POST["vitri"];
    $soluong = $_POST["soluong"];
    $hoahong = $_POST["hoahong"];
    $thuviec = $_POST["thuviec"];
    $mota = $_POST["mota"];
    $yeucau = $_POST["yeucau"];
    $quyenloi = $_POST["quyenloi"];
    $hoso = $_POST["hoso"];
    $birthday = $_POST["birthday"];
    $nguoilienhe = $_POST["nguoilienhe"];
    $diachi = $_POST["diachi"];
    $sdt = $_POST["sdt"];
    $email = $_POST["email"];

    
    $sql = "INSERT INTO data2 (`vitri`,`yeucau`,`quyenloi`,`hoso`,`mota`,`soluong`,`hoahong`,`thuviec`,`birthday`,`nguoilienhe`,`sdt`,`diachi`,`email`) VALUES('".$vitri."','".$yeucau."','".$quyenloi."','".$hoso."','".$mota."','".$soluong."','".$hoahong."','".$thuviec."','".$birthday."','".$nguoilienhe."','".$diachi."','".$sdt."','".$email."')";
    if (mysqli_query($conn,$sql)) {
        echo "thêm thành công";
    }else{
        echo "thêm thất bại";
    }
}
?>

