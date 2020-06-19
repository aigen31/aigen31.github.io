<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;


	function clean($value = "") {
		$value = trim($value);
		
		return $value;
	}


	if($_SERVER['REQUEST_METHOD'] == 'POST') {
		$name = $_POST['name'];
		$telephone = $_POST['telephone'];
		
		$name = clean($name);
		$telephone = clean($telephone);

		$error = '';
		
		if(trim($name) == '')
			$error = 'Введите имя пользователя';
		else if(strlen($name) < 3)
			$error = 'Имя пользователя менее 3 символов';
		else if(strlen($name) > 20)
			$error = 'Имя пользователя более 20 символов';
		else if(trim($telephone) == '')
			$error = 'Введите ваш номер телефона';
	
		if($error != '') {
			echo $error;
		exit;
		}

		// Import PHPMailer classes into the global namespace
		// These must be at the top of your script, not inside a function

		// Load Composer's autoloader
		require 'PHPMailer/PHPMailer.php';
		require 'PHPMailer/Exception.php';

		// Instantiation and passing `true` enables exceptions
		$mail = new PHPMailer(true);

		try {
			//Recipients
			$mail = new PHPMailer();
			$mail->setFrom('test@domain.ru', $name); // от кого (email и имя)
			$mail->addAddress('pash.nesterovich@gmail.com', 'Motor Service');  // кому (email и имя)
			$mail->Subject = 'Заявка от пользователя';                         // тема письма
			// html текст письма
			$mail->msgHTML("<html><body>
							<h1>Новая заявка от пользователя!<br></h1>
							<p>Имя клиента: $name</p>
							<p>Номер телефона: $telephone</p>
							</html></body>");

			$mail->send();
			header("Location: /index");
			} catch (Exception $e) {
				echo 'Ошибка: ' . $mail->ErrorInfo;
			}
		}
?>