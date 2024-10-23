function contactForm(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    if(name == "" || surname == ""){
        alert("Please fill in all fields");
    }

    let isValid = true;

    //validate phone number
    const cellphoneNo = document.getElementById("cellphoneNo").value;
    const cellphoneNoRegex = /^\d{10}$/; 
    if(cellphoneNo == ""){
        document.getElementById("cellphoneNoError").innerText = "Phone number is required.";
        isValid = false;
    }
    else if(!cellphoneNo.match(cellphoneNoRegex)){
        document.getElementById("cellphoneNoError").innerText = "Invalid phone number";
        isValid = false;
    }

    //validate email
    const Email = document.getElementById("Email").value;
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(Email == ""){
        document.getElementById("EmailError").innerText = "Email address is required.";
        isValid = false;
    }
    else if(!Email.match(EmailRegex)){
        document.getElementById("EmailError").innerText = "Invalid Email address";
        isValid = false;
    }
    if(isValid){
        document.getElementById("theButton").addEventListener("click", function(){
            window.location.href = "/HTML Website/Gallery.html"; //Redirect to welcome page
        })
    }
}