const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail() {
	const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

		Email.send({
			SecureToken : "41263989-4fe4-4389-9cf0-f65d6df1c5f5",
			To : 'meahadihasancse49bubt@gmail.com',
			From : "meahadihasancse49bubt@gmail.com",
			Subject : subject.value,
			Body : bodyMessage
		}).then(
		  message => {
			if(message == "OK"){
				Swal.fire({
					title: "Success!",
					text: "Message sent successfully!",
					icon: "success"
				  });
			}
		  }
		);
}

form.addEventListener("submit",(e) => {
	e.preventDefault();

	sendEmail();

	form.reset();
	return false;
});


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
