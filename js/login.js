
console.log("ahoj");

$(".error").hide();
var loginInputMail = document.getElementById("login_input_mail");

$("#login_input_mail").click(function(){

  //$("#login_input_mail").css("padding-bottom","5px");

});

$("#login_to_register_btn").click(function(){

  $("#window_login").animate({right: '33%',opacity: '0'});
  $("#window_signin").animate({right: '33%',opacity: '1'});
});

$("#register_to_login_btn").click(function(){

  $("#window_login").animate({right: '0%',opacity: '1'});
  $("#window_signin").animate({right: '0%',opacity: '0'});
});

// on default, there are no errors
var error_lname = false;
var error_fname = false;
var error_gender = false;
var error_mail = false;
var error_password = false;
var error_password_confirm = false;

var error_mail_log = false;
var error_password_log = false;

//adding reactions to interactions with input fields
$("#signup_input_fname").keyup(function(){
  console.log("ahoj");
  FNameCheck();
});
$("#signup_input_lname").keyup(function(){
  LNameCheck();
});
$("#signup_input_mail").keyup(function(){
  MailCheck();
});
$("#signup_input_pass").keyup(function(){
  PasswordCheck();
});
$("#signup_input_confpass").keyup(function(){
  PasswordConfirmCheck();
});
$("#login_input_mail").keyup(function(){
  console.log("ahoj");
  MailLogCheck();
});
$("#login_input_pass").keyup(function(){
  PasswordLogCheck();
});

//click Submit button
$("#btn_submit").click(function(){
  FNameCheck();
  LNameCheck();
  MailCheck();
  GenderCheck();
  PasswordCheck();
  PasswordConfirmCheck();
  //is every value correct?
  if (error_fname===true || error_lname===true || error_mail===true || error_gender===true || error_password===true || error_message_password_confirm===true) {

    console.log("Problem!");
  } else {

    var fnameVar = $("#fname").val();
    var lnameVar = $("#lname").val();
    var genderVar = $("#gender").val();
    var mailVar = $("#mail").val();
    var passwordVar = $("#password").val();

    //saving the credentials to local storage
    localStorage.setItem('fname', fnameVar);
    localStorage.setItem('lname', lnameVar);
    localStorage.setItem('gender', genderVar);
    localStorage.setItem('mail', mailVar);
    localStorage.setItem('password', passwordVar);

    console.log("OK");

    //change the shown divs
    $("#sign_up_box").hide();
    $("#signed_box").show();


  }

});

$("#btn_submit_log").click(function(){

  MailLogCheck();
  PasswordLogCheck();

  //is every value correct?
  if (error_mail_log===true || error_password_log===true) {

    console.log("problem");
  } else {

    if (localStorage.getItem('mail')===$("#mail_log").val() && localStorage.getItem('password')===$("#password_log").val()) {
      console.log("Credentials OK");
      $("#login_box").hide();
      $(".top").hide();
      $("#logged_box").show();


    } else {

      $("#info").html("Credentials do not match!");
      $("#info").css("color", "red");
    }
  }

});


//check the validity of First name
function FNameCheck() {

  var pattern = /^[A-Z][a-z]*$/;
  var fname = $("#signup_input_fname").val();
  if (fname === '') {
    $("#error_message_fname").html("Please enter your first name!");
    $("#error_message_fname").show();

    $("#signup_input_fname").css("border-color","red");
    $("#signup_input_fname").css("padding-bottom","0px");
    console.log("succes");
    error_fname = true;
  } else if (!pattern.test(fname)) {

    $("#error_message_fname").html("First name cannot contain numbers!");
    $("#error_message_fname").show();
    $("#signup_input_fname").css("border-color","red");
    error_fname = true;
  } else {
    $("#error_message_fname").hide();
    $("#signup_input_fname").css("border-color","green");
    error_fname = false;
  }
}

//check the validity of Last name
function LNameCheck() {

  var pattern = /^[A-Z][a-z]*$/;
  var lname = $("#signup_input_lname").val();
  if (lname === '') {
    $("#error_message_lname").html("Please enter your last name!");
    $("#error_message_lname").show();
    $("#signup_input_lname").css("border-color","red");
    $("#signup_input_lname").css("padding-bottom","0px");
    error_lname = true;
  } else if (!pattern.test(lname)) {

    $("#error_message_lname").html("Last name cannot contain numbers!");
    $("#error_message_lname").show();
    $("#signup_input_lname").css("border-color","red");
    $("#signup_input_lname").css("padding-bottom","0px");
    error_lname = true;
  } else {
    $("#error_message_lname").hide();
    $("#signup_input_lname").css("border-color","green");
    error_lname = false;
  }
}

//check the validity of Email address
function MailCheck() {

  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var mail = $("#signup_input_mail").val();
  if (mail === '') {
    $("#error_message_mail").html("Please enter your email!");
    $("#error_message_mail").show();
    $("#signup_input_mail").css("border-color","red");
    $("#signup_input_mail").css("padding-bottom","0px");
    error_mail = true;
  } else if (!pattern.test(mail)) {

    $("#error_message_mail").html("Yours email address is invalid!");
    $("#error_message_mail").show();
    $("#signup_input_mail").css("border-color","red");
    $("#signup_input_mail").css("padding-bottom","0px");
    error_mail = true;
  } else {
    $("#error_message_mail").hide();
    $("#signup_input_mail").css("border-color","green");
    error_mail = false;
  }
}
//check the validity of password
function PasswordCheck() {

  var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  var password = $("#signup_input_pass").val();
  if (password === '') {
    $("#error_message_pass").html("Please enter your password!");
    $("#error_message_pass").show();

    $("#signup_input_pass").css("border-color","red");
    $("#signup_input_pass").css("padding-bottom","0px");
    error_password = true;
  } else if (!pattern.test(password)) {

    $("#error_message_pass").html("Requirement: at least 6 characters, one capital letter,<br> one lowercase letter, at least one digit and one special<br> chararcter!");
    $("#error_message_pass").show();

    $("#signup_input_pass").css("border-color","red");
    $("#signup_input_pass").css("padding-bottom","0px");
    error_password = true;
  } else {
    $("#error_message_pass").hide();
    $("#signup_input_pass").css("border-color","green");
    error_password = false;
    password_ref = password;
  }
}
//check the validity of password confirmation
function PasswordConfirmCheck() {

  var password = $("#signup_input_pass").val();
  var password_confirm = $("#signup_input_confpass").val();


  if (password_confirm === "") {
    $("#error_message_passconf").html("Please re-enter your password!");
    $("#error_message_passconf").show();

    $("#signup_input_confpass").css("border-color","red");
    $("#signup_input_confpass").css("padding-bottom","0px");
    error_password_confirm = true;

  } else if (password_ref === password_confirm) {
     $("#error_message_passconf").hide();
     $("#signup_input_confpass").css("border-color","green");

     error_password_confirm = false;
  } else {
     $("#error_message_passconf").html("Password does not match!");
     $("#error_message_passconf").show();
     $("#signup_input_confpass").css("border-color","red");
     $("#signup_input_confpass").css("padding-bottom","0px");
     error_password_confirm = true;
  }
}

//check the validity of email address used to log in
function MailLogCheck() {

  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var mail = $("#login_input_mail").val();
  if (mail === '') {
    $("#error_message_mail_log").html("Please enter your email!");
    $("#error_message_mail_log").show();
    $("#login_input_mail").css("border-color","red");
    //$("#login_input_mail").css("padding-bottom","0px");
    error_mail_log = true;
  } else if (!pattern.test(mail)) {

    $("#error_message_mail_log").html("Yours email address is invalid!");
    $("#error_message_mail_log").show();
    $("#login_input_mail").css("border-color","red");
    //$("#login_input_mail").css("padding-bottom","0px");

    error_mail_log = true;
  } else {
    $("#error_message_mail_log").hide();
    $("#login_input_mail").css("border-color","green");
    error_mail_log = false;
  }
}
//check the validity of the password used to log in
function PasswordLogCheck() {

  var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  var password = $("#login_input_pass").val();
  if (password === '') {
    $("#error_message_pass_log").html("Please enter your password!");
    $("#error_message_pass_log").show();
    $("#login_input_pass").css("border-color","red");

    error_password_log = true;
  } else {
    $("#error_message_pass_log").hide();
    $("#login_input_pass").css("border-color","green");
    error_password_log = false;
  }
}
