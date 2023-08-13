var saveData=[];

if(localStorage.getItem("saveData")!=null){
    saveData=JSON.parse(localStorage.getItem("saveData"));
}

//buttom sign
function signUp(){
 var name=document.getElementById("name").value;
 var email=document.getElementById("email").value; 
 var password=document.getElementById("password").value;

    if( name==''|| email=='' || password=='' ){
     document.getElementById("error-message").classList.remove('d-none');
    }
   else{
    document.getElementById("correct_message").classList.remove('d-none');
    window.location.href=`file:///E:/javascrirt/assi4/index.html#page-one`;

   }
    var allInfo={
        name:name,
        email:email,
        password:password
    }

    saveData.push(allInfo);

   localStorage.setItem('saveData',JSON.stringify(saveData));

}

//logout button
function logout(){
    window.location.href=`file:///E:/javascrirt/assi4/index.html#page-one`;
}

//login button

function login()
{
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

   
    if( email==='' || password==='' ){
        document.getElementById("empty").classList.remove('d-none')
    }
    else if( email!=='' || password!=='' ) {
        document.getElementById("message").classList.remove('d-none');
    } 
    else{
   for(var i=0; i<saveData.length;i++)
   {
    if(saveData[i].email==email && saveData[i].password==password)
    {
        window.location.href=`file:///E:/javascrirt/assi4/welcome.html`
        localStorage.setItem("name",saveData[i].name)
    }
    
   }
    }
  
    
}