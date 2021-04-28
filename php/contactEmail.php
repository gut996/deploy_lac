<?php 

header('Access-Control-Allow-Origin: *');


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require('./PHPMailer/src/PHPMailer.php');
require('./PHPMailer/src/SMTP.php');
require('./PHPMailer/src/Exception.php');


    if(empty($_POST['name'])){
        $errors['name'] = 'Name is required <br>';
    }else{
        $name = $_POST['name'];
    }

    // check email
    if(empty($_POST['email'])){    
        $errors['email']='An email is required <br>';
    }else{
    $email = $_POST['email'];
    // builtin email validation
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            // echo 'email must be a vaild email address';
            $errors['email']='An email must be a valid address'; 
        }
    }

    // check phone number (optional)
    /*if(empty($_POST['tel'])){
        // echo 'An subject is required <br>';
        $errors['tel']='A phone number is required <br>';
    }else{*/
        $tel = $_POST['tel'];
    //}


    // check subject
    if(empty($_POST['subject'])){
        // echo 'An subject is required <br>';
        $errors['subject']='An subject is required <br>';
    }else{
        $subject = $_POST['subject'];
    }

    // check content
    if(empty($_POST['msg'])){
        // echo 'An content is required <br>';
        $errors['msg']='An content is required <br>';
    }else{
        $message = $_POST['msg'];   
    }


    
   $mail = new PHPMailer();
   $mail->isSMTP();
   $mail->SMTPAuth = true;
   $mail->SMTPSecure = 'tls'; 
   $mail->Host = 'smtp.gmail.com';  //gmail    
   $mail->Port = 587; 
  

//    $mail->SMTPSecure = 'ssl';
//    $mail->Host = 'smtp.gmail.com';
//    $mail->Port = 465;

   $mail->Username = 'teepace01@gmail.com'; 
   $mail->Password = 'xxxxx'; 




   $mail->setFrom('teepace01@gmail.com', 'Contact Form Lacrosse');
   $mail->addAddress('sandy@procaliberlacrosse.net','Sandy Pace');    

   
  
   $mail->Subject = $subject;
   $mail->Body    = 'Customer info:'.'<br>'.
                    'Name: '. $name.'<br>'.
                    'Email: '. $email.'<br>'.
                    'Phone number: '.$tel.'<br>'.
                    'Message: '.$message;
   
   $mail->IsHTML(true);
   if(sizeof($errors) > 0){
        echo '<b style="color: red;">Please fill out this form!</b>'; 
   }else{
   
        if($mail->send()){
            echo '<p>Thank you for your message. It has been sent successfully.
            <br> A representative from Pro Caliber Lacrosse will contact you shortly.</p>';
        }else{        
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        }
   }

?>