function sendOTP() {
    const email = document.getElementsById('email');
    const otpverify = document.getElementsByIdClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random() * 9000) + 1000;

    let emailbody = `<h2>Your OTP is </h2>${otp_val}`; 
    Email.send({
        SecureToken : "776ad21-95ad-4dc9-9773-aa943e3946bc",
        To : email.value,
        From : "mubarakamoo11@gmail.com",
        Subject : "Email OTp using Javascript",
        Body : emailbody,
    }).then(
      
        message => {
            if (message === "ok") {
                alert("OTP sent to your email " + email.value);

                otpverify.style.display ="flex";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp_btn');

                otp_btn.addEventListener('click', () => {
                    if (otp_inp.value == otp_val) {
                        alert("Email address verified....");
                    }
                    else {
                        alert("Invalid OTP");
                    }
                })
            }
        }
    );
}