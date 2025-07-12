//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // prevent page refresh

      const first = document.getElementById("firstName").value;
      const last = document.getElementById("lastName").value;
      const phone = document.getElementById("phoneNumber").value;
      const email = document.getElementById("emailId").value;

      const message = `First Name: ${first} Last Name: ${last} Phone Number: ${phone} Email ID: ${email}`;
      alert(message);
    });