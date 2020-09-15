
function validateForm(data)
{
let errors=[];
if(!validateName(data.name))
{
    errors.push({msg:"Invalid name.."});

}
if(!validateEmail(data.email))
{
  errors.push({msg:"invalid email id"});  
}
if(errors!=[])
{
    return errors;
}
return true;


}

function validateName(name){
    // Regex for the name
    var regex = /^[a-zA-Z" "]{2,30}$/;
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