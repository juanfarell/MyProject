const username = document.forms["registration"]["name"];
const phonenumber = document.forms["registration"]["phonenumber"];
const useremail = document.forms["registration"]["useremail"];
const numberofpersons = document.forms["registration"]["numberofpersons"];
const date = document.forms["registration"]["date"];
const time = document.forms["registration"]["time"];
const couponcode = document.forms["registration"]["couponcode"];
const registration = document.forms["registration"];
const errorMessage = document.getElementById("error-message");

registration.addEventListener("submit", (e) => {
    let message = [];
    if (username.value === "") {
        message.push("Please fill out your name!");
    }

    if (username.value.length < 5 || username.value.length > 15) {
        message.push(
            "Length of the name must be greater than 5 and less than 15 characters!"
        );
    }

    if (phonenumber.value.length === "") {
        message.push("Please fil out your phone number!");
    }
    if (phonenumber.value.length < 10) {
        message.push("Phone number must be more than 10 numbers!");
    }

    // function validation(useremail) {
    //     var emailformat =
    //         /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    //     return emailformat.test(useremail);
    // }

    // function validate() {
    //     const email = $("#email").val();

    //     if (validation(useremail)) {
    //         message.push("nice one");
    //     } else {
    //         message.push("salah bego");
    //     }
    //     return false;
    // }

    // $("#validate").on("click", validate);

    var emailformat =
        /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

    if (useremail.value === "") {
        message.push("Please fill in your email!");
    } else {
        for (let i = 0; i < useremail.value.length; i++) {
            message = [];
            if (useremail.value.match(emailformat)) {
                break;
            } else {
                message.push("This is an invalid email!");
            }
        }
    }

    if (numberofpersons.value < 1) {
        message.push("There must be more than 1 person to book for a meal!");
    }

    if (date.value === "") {
        message.push("Please fill your date of reservation!");
    }

    if (time.value === "") {
        message.push("Please enter your time of meal!");
    }

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    today = yyyy + "-" + mm + "-" + dd;
    document.getElementById("dateMinimum").setAttribute("min", today);

    if (
        (couponcode.value.length < 6 || couponcode.value.length > 6) &&
        couponcode.value.length !== 0
    ) {
        message.push("Coupon code is invalid!");
    }

    if (message.length > 0) {
        e.preventDefault();
        errorMessage.innerText = message[0];
    }

    if (message.length === 0) {
        // var formData = new FormData(registerForm);

        // alert(formData.get("username"));
        confirm("Do you want to submit?");
    }
});
