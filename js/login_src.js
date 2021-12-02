
//Inspiration: https://www.youtube.com/watch?v=W4-5WM60gWg


$(document).ready(function(){

//Initialization of variables
var password_ref;

var fnameVar = "";
var lnameVar = "";
var genderVar = "";
var mailVar = "";
var passwordVar = "";

//Saving default values to localStorage
localStorage.setItem('fname', fnameVar);
localStorage.setItem('lname', lnameVar);
localStorage.setItem('gender', genderVar);
localStorage.setItem('mail', mailVar);
localStorage.setItem('password', passwordVar);

//hiding error messages at the beginning
$("#error_message_fname").hide();
$("#error_message_lname").hide();
$("#error_message_gender").hide();
$("#error_message_mail").hide();
$("#error_message_password").hide();
$("#error_message_password_confirm").hide();

$("#error_message_mail_log").hide();
$("#error_message_password_log").hide();

//hiding the green tick sign
$(".tick").hide();

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
$("#fname").keyup(function(){
  FNameCheck();
});
$("#lname").keyup(function(){
  LNameCheck();
});
$(".gender_radio").click(function(){
  GenderCheck();
});
$("#mail").keyup(function(){
  MailCheck();
});
$("#password").keyup(function(){
  PasswordCheck();
});
$("#password_confirm").keyup(function(){
  PasswordConfirmCheck();
});

$("#mail_log").keyup(function(){
  MailLogCheck();
});
$("#password_log").keyup(function(){
  PasswordLogCheck();
});

//hiding divs that are not to be visible at the beginning
$("#sign_up_box").hide();
$("#logged_box").hide();
$("#signed_box").hide();


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


//Log in and Sign up buttons
$("#btn_login").click(function(){
  $("#btn_signup").css({color:'grey',background:'#D5D5D5',border:'#D5D5D5'});
  $("#btn_login").css({color:'black',background:'white'});
  $("#btn_login").css("border-top",'5px solid #274A8B');
  $("#logged_box").hide();
  $("#signed_box").hide();
  signToLog(); //launch animated transition
});


$("#btn_signup").click(function(){
  $("#btn_login").css({color:'grey',background:'#D5D5D5',border:'#D5D5D5'});
  $("#btn_signup").css({color:'black',background:'white'});
  $("#btn_signup").css("border-top",'5px solid #274A8B');
  $("#logged_box").hide();
  $("#signed_box").hide();
  logToSign(); //launch animated transition
});


// Two animating functions
// Inspiration: https://stackoverflow.com/questions/21359232/how-to-make-a-div-fade-out-instead-disappearing-using-code-like-this-javascrip
function signToLog()
{
    var box1 = document.getElementById("sign_up_box");
    var box2 = document.getElementById("login_box");

    //arrays of oppacities
    var oppArray = ["0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"];
    var oppArrayTwo = ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1"];
    var x = 0;
    var y = 0;
    box2.style.opacity = "0";
    next(); //fade out
    setTimeout(()=>{

        $("#sign_up_box").hide(); //change divs
        $("#login_box").show();
        box2.style.opacity = "0";
    },200);
    setTimeout(()=>{
        nexttwo(); //show new div
    },200);
    function next() {
        box1.style.opacity = oppArray[x];
        if(++x < oppArray.length) {
            setTimeout(next, 20); //wait 20 ms
        }
    };
    function nexttwo() {
        console.log("y:",y);
        box2.style.opacity = oppArrayTwo[y];
        console.log(oppArrayTwo[y]);
        if(++y < oppArrayTwo.length) {
            setTimeout(nexttwo, 20); //wait 20 ms
        }
    };
}

function logToSign()
{
    var box1 = document.getElementById("sign_up_box");
    var box2 = document.getElementById("login_box");

    //arrays of oppacities
    var oppArray = ["0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"];
    var oppArrayTwo = ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1"];
    var x = 0;
    var y = 0;
    box1.style.opacity = "0";
    next(); //fade out
    setTimeout(()=>{

        $("#sign_up_box").show(); //change divs
        $("#login_box").hide();
        box1.style.opacity = "0";
    },200);
    setTimeout(()=>{
        nexttwo(); //show new div
    },200);

    function next() {
        box2.style.opacity = oppArray[x];
        if(++x < oppArray.length) {
            setTimeout(next, 20); //wait 20 ms
        }
    };
    function nexttwo() {
        box1.style.opacity = oppArrayTwo[y];
        if(++y < oppArrayTwo.length) {
            setTimeout(nexttwo, 20); //wait 20 ms
        }
    };
}


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

})
