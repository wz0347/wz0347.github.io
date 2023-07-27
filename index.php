<!DOCTYPE html>
<html>
<head>
    <title>Password Redirect</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 400px;
            margin: 100px auto;
            background-color: #fff;
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
            color: #333;
        }

        form {
            text-align: center;
        }

        label {
            display: block;
            margin-bottom: 10px;
            color: #333;
        }

        input[type="password"] {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        input[type="submit"] {
            background-color: #4CAF50;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Password Redirect</h1>
        <form method="post" action="">
            <label for="password">请输入密码：</label>
            <input type="password" name="password" id="password" required>
            <br><br>
            <input type="submit" value="提交">
        </form>
    </div>
</body>
</html>

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
}
?>
