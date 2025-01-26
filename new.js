// function sendMail(){
//     var params ={
//          name: document.getElementById('email').value ,
//          message: document.getElementById('message').value ,
//     };
// const serviceID ="service_qcsykvs";
// const templateID ="template_eru9jbe"

// emailjs.send(serviceID,templateID,params)
// .then(
//     res =>{
//         document.getElementById("email").value="";
//         document.getElementById("message").value="";
//         console.log(res)
//         alert('your messege send successfully');

//     })
//     .catch(err=> console.log(err));
//     }

function sendMail(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    var params = {
        email: document.getElementById('email').value, // Use 'email' instead of 'name'
        message: document.getElementById('message').value,
    };

    const serviceID = "service_qcsykvs";
    const templateID = "template_eru9jbe";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Clear form inputs after successful submission
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully.");
        })
        .catch(err => {
            console.error("Failed to send email:", err);
        });
}
