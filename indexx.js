// function sendOTP() {
//     const email = document.getElementById('email');
//     const otpverify = document.getElementsByClassName('otpverify')[0];

//     let otp_val = Math.floor(Math.random() * 9000) + 1000;

//     let emailbody = `<h2>Your OTP is </h2>${otp_val}`; 

//     Email.send({
//         SecureToken : "776ad21-95ad-4dc9-9773-aa943e3946bc",
//         To : email.value,
//         From : "mubarakamoo11@gmail.com",
//         Subject : "Email OTP using Javascript",
//         Body : emailbody,
//     }).then(
//         message => {
//             if (message === "OK") {
//                 alert("OTP sent to your email " + email.value);
//                 otpverify.style.display = "flex";
//             } else {
//                 alert("dey play my fans you can't enter.");
//             }
//         }
//     );
// }

// function verifyOTP() {
//     const otp_inp = document.getElementById('otp_inp');
//     const otp_btn = document.getElementById('otp_btn');
//     const otp_val = parseInt(document.getElementById('otp_val').innerText);

//     if (otp_inp.value == otp_val) {
//         alert("Email address verified....");
//     } else {
//         alert("Invalid OTP");
//     }
// }

// // Attach the event listener to the OTP verification button
// otp_btn.addEventListener('click', verifyOTP);
// Define the otp_val variable outside the sendOTP function
let otp_val;

function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    otp_val = Math.floor(Math.random() * 9000) + 1000;

    let emailbody = `<h2>Your OTP is </h2>${otp_val}`;

    // Make sure the necessary library is imported or included before this code

    Email.send({
        SecureToken : " 2aa16d08-4082-4eea-874f-938bb884fa0f",
        To : email.value,
        From : "mubarakamoo22@gmail.com",
        Subject : "Email OTP using Javascript",
        Body : emailbody,
    }).then(
        message => {
            if (message === "OK") {
                alert("OTP sent to your email " + email.value);
                otpverify.style.display = "flex";
            } else {
                alert("dey play my fans you can't enter.");
            }
        }
    );
}

function verifyOTP(otp_inp, otp_val) {
    const otp_btn = document.getElementById('otp_btn');

    if (otp_inp.value == otp_val) {
        alert("Email address verified....");
    } else {
        alert("Invalid OTP");
    }
}

// Attach the event listener to the OTP verification button
otp_btn.addEventListener('click', () => {
    const otp_inp = document.getElementById('otp_inp');
    verifyOTP(otp_inp, otp_val);
});
