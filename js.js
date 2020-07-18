// $(document).ready(function(){
// var workers = JSON.parse(window.localStorage.getItem('workers'))

var company = [
   		{
   			name:"Arab Tunisian Bank ",
           field : "Accounting" ,
           Email : "atb@gmail.com" ,
           State : "Tunis", 
           Phone : "0021671546456" 
       	}, 
    	{		
    	   name:"TBS",
           field : "Marketing" ,
           Email : "tbs@gmail.com" ,
           State : "Sousse", 
           Phone : "0021626262626" 
        },
   		{
   		   name:"next Step",
           field : "Web development" ,
           Email : "nextstep@gmail.com" ,
           State : "Bizert", 
           Phone : "0021622555666"
        }, 
        {
   		   name:"Tunisian Company of Telecommunications",
           field : "Communication" ,
           Email : "TCT@gmail.com" ,
           State : "Tunis", 
           Phone : "0021652445445"
        },
        {
   		   name:"Tunisian Company of Telecommunications",
           field : "Comunication" ,
           Email : "TCT@gmail.com" ,
           State : "Kairawen", 
           Phone : "0021652445445"
        } 
           
    ];
   		$("#com").hide() ;

function func(){
	  $("#job").hide(1000) ;
	  if($("#state").val()+$("#field").val() === "TunisAccounting"){
	  	 $("#ha").text('Name: '+company[0].name) ; 
	  	 $("#ha2").text('Field: '+company[0].field) ;
	  	 $("#ha3").text('Email: '+company[0].Email) ;
	  	 $("#ha4").text('State: '+company[0].State) ;
	  	 $("#ha5").text('Phone: '+company[0].Phone) ;

	  }
	  	 else  if($("#state").val()+$("#field").val() === "SousseMarketing"){
	  	 $("#ha").text('Name: '+company[1].name) ; 
	  	 $("#ha2").text('Field: '+company[1].field) ;
	  	 $("#ha3").text('Email: '+company[1].Email) ;
	  	 $("#ha4").text('State: '+company[1].State) ;
	  	 $("#ha5").text('Phone: '+company[1].Phone) ;

	  }
	  	  	 else  if($("#state").val()+$("#field").val() === "BizerteWeb development"){
	  	 $("#ha").text('Name: '+company[2].name) ; 
	  	 $("#ha2").text('Field: '+company[2].field) ;
	  	 $("#ha3").text('Email: '+company[2].Email) ;
	  	 $("#ha4").text('State: '+company[2].State) ;
	  	 $("#ha5").text('Phone: '+company[2].Phone) ;

	  }
	  	  	  else if($("#state").val()+$("#field").val() === "TunisCommunication"){
	  	 $("#ha").text('Name: '+company[3].name) ; 
	  	 $("#ha2").text('Field: '+company[3].field) ;
	  	 $("#ha3").text('Email: '+company[3].Email) ;
	  	 $("#ha4").text('State: '+company[3].State) ;
	  	 $("#ha5").text('Phone: '+company[3].Phone) ;

	  }
	  	  	  else if($("#state").val()+$("#field").val() === "KairawenCommunication"){
	  	 $("#ha").text('Name: '+company[4].name) ; 
	  	 $("#ha2").text('Field: '+company[4].field) ;
	  	 $("#ha3").text('Email: '+company[4].Email) ;
	  	 $("#ha4").text('State: '+company[4].State) ;
	  	 $("#ha5").text('Phone: '+company[4].Phone) ;

	  }
	  else {
	  	$("#ha").text("No company found right now !") ; 
	  }
	    
	  	
	  

}
function ret(){
	 $("#job").show(1000) ;
	 	  	 $("#ha").text("") ; 
	  	 $("#ha2").text("") ;
	  	 $("#ha3").text("") ;
	  	 $("#ha4").text("") ;
	  	 $("#ha5").text("") ;
}


