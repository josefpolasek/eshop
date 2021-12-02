
console.log("ahoj");
$("#window_signin").hide();
var loginInputMail = document.getElementById("login_input_mail");

$("#login_input_mail").click(function(){

  $("#login_input_mail").css("padding-bottom","5px");


});

$("#register_btn").click(function(){
console.log("ahoj");
  $("#window_login").hide();
  $("#window_signin").show();
});
