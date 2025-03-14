// Hamburger
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


// EmailJS initialize
emailjs.init({
    publicKey: "bCYVtcD3NxeH_f7wm", 
});

// Form Submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;


    const fullName = form.querySelector('#name');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');
    const subject = form.querySelector('#subject');
    const messageField = form.querySelector('#message');

    if (!fullName.value || !email.value || !phone.value || !subject.value || !messageField.value) {
        Swal.fire({
            title: "Warning!",
            text: "Please fill all the required fields!",
            icon: "warning"
        });
        return;
    }

    Swal.fire({
        title: 'Sending message...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });


    emailjs.sendForm('service_beaduhn', 'template_v3w1vie', form)
        .then((response) => {
            Swal.close();
            if (response.status === 200) {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success",
                    confirmButtonText: 'OK'
                });
                form.reset();
            }
        })
        .catch((error) => {
            Swal.fire({
                title: "Error!",
                text: `Failed to send message: ${error.text}`,
                icon: "error"
            });
        });
});


