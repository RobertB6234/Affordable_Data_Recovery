function validate()
      {
         if(document.myForm.fName.value == "" )
         {
            alert( "Please provide your first name!" );
            document.myForm.fName.focus() ;
            return false;
         }
		 
		 if( document.myForm.lName.value == "" )
		 {
            alert( "Please provide your last name!" );
            document.myForm.lName.focus() ;
            return false;
         }
		 
		 if( document.myForm.phone.value == "" )
		 {
            alert( "Please provide your phone number!" );
            document.myForm.phone.focus() ;
            return false;
         }
         
         if( document.myForm.email.value === "" )
         {
            alert( "Please provide your Email!" );
            document.myForm.email.focus() ;
            return false;
         }
         
         return( true );
	  }
	  
function validateEmail()
      {
         var emailID = document.myForm.email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         {
            alert("Please enter correct email address!")
            document.myForm.email.focus() ;
            return false;
         }
         return( true );
      }