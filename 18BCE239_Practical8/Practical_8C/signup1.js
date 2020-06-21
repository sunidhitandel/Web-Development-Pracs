function formValidation()
{
var uid = document.registration.name;
var passid = document.registration.password;
var uname = document.registration.username;
var uadd = document.registration.address;
var sem = document.registration.semester;
var event = document.registration.event;
var uemail = document.registration.email;
var under = document.registration.under_18;
var above = document.registration.over_18; 
if(userid_validation(uid,5,12))
{
    if(passid_validation(passid,7,12))
        {
            if(alphanumeric(uadd))
            { 
            if(semselect(sem))
            {
                if(allnumeric(uzip))
                {
                    if(ValidateEmail(uemail))
                    {
                        if(validage(umsex,ufsex))
                            {
                            }
                    } 
                }
            } 
    }
    }
}
return false;
}
function userid_validation(uid,mx,my)
{
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx)
    {
        alert("Name should not be empty / length be between "+mx+" to "+my);
        uid.focus();
        return false;
    }
    return true;
}
function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passid.focus();
        return false;
    }
    return true;
}

function alphanumeric(uadd)
{ 
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}
function semselect(sem)
{
    if(sem.value == "Default")
    {
        alert('Select your company from the list');
        sem.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function allnumeric(event)
{ 
    var numbers = /^[0-9]+$/;
    if(event.value.match(numbers))
    {
        return true;
    }
    else
    {
        alert('Event attendedmust have numeric characters only');
        event.focus();
        return false;
    }
}
function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
} 
function validage(under,above)
{
    x=0;

    if(under.checked) 
    {
        x++;
    } 
    if(above.checked)
    {
        x++; 
    }
    if(x==0)
    {
        alert('Select Male/Female');
        under.focus();
        return false;
    }
    else
    {
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}