<?php
$password = $_POST['password'];

// 定义密码和对应的跳转链接
$passwords = array(
    '123456' => 'https://www.baidu.com/',
    'abcdef' => 'https://www.google.com/',
    'qwerty' => 'https://www.yahoo.com/'
);

// 检查密码是否存在于数组中
if (array_key_exists($password, $passwords)) {
    $redirectUrl = $passwords[$password];
    header("Location: $redirectUrl");
    exit;
} else {
    echo "密码错误，请重试。";
}
?>
