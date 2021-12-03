
console.log("ahoj");
//$("#window_signin").hide();
var loginInputMail = document.getElementById("login_input_mail");

$("#login_input_mail").click(function(){

  $("#login_input_mail").css("padding-bottom","5px");


});

$("#login_to_register_btn").click(function(){

  $("#window_login").animate({right: '33%',opacity: '0'});
  $("#window_signin").animate({right: '33%',opacity: '1'});
});

$("#register_to_login_btn").click(function(){

  $("#window_login").animate({right: '0%',opacity: '1'});
  $("#window_signin").animate({right: '0%',opacity: '0'});
});


/*

//check the validity of First name
function FNameCheck() {

  var pattern = /^[A-Z][a-z]*$/;
  var fname = $("#fname").val();
  if (fname === '') {
    $("#error_message_fname").html("Please enter your first name!");
    $("#error_message_fname").show();
    $(".inside_box#fname_box").css("border-color","red");
    $("#tick_fname").hide();
    error_fname = true;
  } else if (!pattern.test(fname)) {

    $("#error_message_fname").html("First name cannot contain numbers!");
    $("#error_message_fname").show();
    $(".inside_box#fname_box").css("border-color","red");
    $("#tick_fname").hide();
    error_fname = true;
  } else {
    $("#error_message_fname").hide();
    $(".inside_box#fname_box").css("border-color","white");
    $("#tick_fname").show();
    error_fname = false;
  }
}

//check the validity of Last name
function LNameCheck() {

  var pattern = /^[A-Z][a-z]*$/;
  var lname = $("#lname").val();
  if (lname === '') {
    $("#error_message_lname").html("Please enter your last name!");
    $("#error_message_lname").show();
    $(".inside_box#lname_box").css("border-color","red");
    $("#tick_lname").hide();
    error_lname = true;
  } else if (!pattern.test(lname)) {

    $("#error_message_lname").html("Last name cannot contain numbers!");
    $("#error_message_lname").show();
    $(".inside_box#lname_box").css("border-color","red");
    $("#tick_lname").hide();
    error_lname = true;
  } else {
    $("#error_message_lname").hide();
    $(".inside_box#lname_box").css("border-color","white");
    $("#tick_lname").show();
    error_lname = false;
  }
}

//check the validity of gender choice
function GenderCheck() {

  var male = document.getElementById("gender_male").checked;
  var female = document.getElementById("gender_female").checked;
  if (male==false && female==false) {
    $("#error_message_gender").html("Please enter your gender!");
    $("#error_message_gender").show();
    $("#tick_gender").hide();
    error_gender = true;
    } else {
    $("#error_message_gender").hide();
    $("#tick_gender").show();
    error_gender = false;
  }
}
//check the validity of Email address
function MailCheck() {

  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var mail = $("#mail").val();
  if (mail === '') {
    $("#error_message_mail").html("Please enter your email!");
    $("#error_message_mail").show();
    $(".inside_box#mail_box").css("border-color","red");
    $("#tick_mail").hide();
    error_mail = true;
  } else if (!pattern.test(mail)) {

    $("#error_message_mail").html("Yours email address is invalid!");
    $("#error_message_mail").show();
    $(".inside_box#mail_box").css("border-color","red");
    $("#tick_mail").hide();
    error_mail = true;
  } else {
    $("#error_message_mail").hide();
    $(".inside_box#mail_box").css("border-color","white");
    $("#tick_mail").show();
    error_mail = false;
  }
}
//check the validity of password
function PasswordCheck() {

  var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  var password = $("#password").val();
  if (password === '') {
    $("#error_message_password").html("Please enter your password!");
    $("#error_message_password").css("height","20px");
    $("#error_message_password").css("text-align","left");

    $("#error_message_password").show();
    $(".inside_box#password_box").css("border-color","red");
    $("#tick_password").hide();
    error_password = true;
  } else if (!pattern.test(password)) {

    $("#error_message_password").html("Requirement: at least 6 characters, one capital letter,<br> one lowercase letter, at least one digit and one special<br> chararcter!");
    $("#error_message_password").css("height","40px");
    $("#error_message_password").css("text-align","center");

    $("#error_message_password").show();
    $(".inside_box#password_box").css("border-color","red");
    $("#tick_password").hide();
    error_password = true;
  } else {
    $("#error_message_password").hide();
    $(".inside_box#password_box").css("border-color","white");
    $("#tick_password").show();
    error_password = false;
    password_ref = password;
  }
}
//check the validity of password confirmation
function PasswordConfirmCheck() {

  var password = $("#password").val();
  var password_confirm = $("#password_confirm").val();


  if (password_confirm === "") {
    $("#error_message_password_confirm").html("Please re-enter your password!");
    $("#error_message_password_confirm").show();
    $(".inside_box#password_confirm_box").css("border-color","red");
    $("#tick_password_confirm").hide();
    error_password_confirm = true;

  } else if (password_ref === password_confirm) {
     $("#error_message_password_confirm").hide();
     $(".inside_box#password_confirm_box").css("border-color","white");
     $("#tick_password_confirm").show();
     error_password_confirm = false;
  } else {
     $("#error_message_password_confirm").html("Password does not match!");
     $("#error_message_password_confirm").show();
     $(".inside_box#password_confirm_box").css("border-color","red");
     $("#tick_password_confirm").hide();
     error_password_confirm = true;
  }
}

//check the validity of email address used to log in
function MailLogCheck() {

  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var mail = $("#mail_log").val();
  if (mail === '') {
    $("#error_message_mail_log").html("Please enter your email!");
    $("#error_message_mail_log").show();
    $(".inside_box#mail_box_log").css("border-color","red");
    $("#tick_mail_log").hide();
    error_mail_log = true;
  } else if (!pattern.test(mail)) {

    $("#error_message_mail_log").html("Yours email address is invalid!");
    $("#error_message_mail_log").show();
    $(".inside_box#mail_box_log").css("border-color","red");
    $("#tick_mail_log").hide();
    error_mail_log = true;
  } else {
    $("#error_message_mail_log").hide();
    $(".inside_box#mail_box_log").css("border-color","white");
    $("#tick_mail_log").show();
    error_mail_log = false;
  }
}
//check the validity of the password used to log in
function PasswordLogCheck() {

  var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  var password = $("#password_log").val();
  if (password === '') {
    $("#error_message_password_log").html("Please enter your password!");
    $("#error_message_password_log").css("height","20px");
    $("#error_message_password_log").css("text-align","left");

    $("#error_message_password_log").show();
    $(".inside_box#password_box_log").css("border-color","red");
    $("#tick_password_log").hide();
    error_password_log = true;
  } else {
    $("#error_message_password_log").hide();
    $(".inside_box#password_box_log").css("border-color","white");
    $("#tick_password_log").show();
    error_password_log = false;
  }
}
*/
