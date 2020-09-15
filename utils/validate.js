
function validateForm(data)
{

if(!validateEmail(data.email) || !validateName(data.name))
return false;
return true;


}

function validateName(name){
    // Regex for the name
    var regex = /^[a-zA-Z" "]{2,30}$/;
    console.log(regex.test(name));
    if (!regex.test(name)) {
       return false;


    }
  
    return true;

}

function validateEmail(email)
{
    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");
    if ((at < 1) || (dot < 1) || ((dot - at) < 2)) {
       return false;
    }
    return true;

}


module.exports=validateForm;