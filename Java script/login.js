//Login validation//
function validateForm() {
    
    let email = document.forms["loginForm"]["email"].value;
    let password = document.forms["loginForm"]["password"].value;

    //user must enter a value //
    if (email.length <= 0 ) {
      alert("Email cannot be empty.");
      return false;
    } else if
       (password.length <= 0) {
        alert("Password cannot be empty .");
        return false;
    }
    //login alert//
    else{
      alert("Login Successful");
      return false;
    }
  }