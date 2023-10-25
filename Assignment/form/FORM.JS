
    function submitForm() {
            // Validation
            var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if (
    firstName === "" ||
    lastName === "" ||
    dob === "" ||
    country === "Select" ||
    profession === "" ||
    email === "" ||
    mobile === ""
    ) {
        alert("All fields are required!");
    return;
            }

    // Display a popup with selected values
    var gender = document.querySelectorAll('input[name="gender"]:checked');
    var selectedGender = [];
    for (var i = 0; i < gender.length; i++) {
        selectedGender.push(gender[i].value);
            }

    var popupMessage =
    "First Name: " +
    firstName +
    "\n" +
    "Last Name: " +
    lastName +
    "\n" +
    "Date of Birth: " +
    dob +
    "\n" +
    "Country: " +
    country +
    "\n" +
    "Gender: " +
    selectedGender.join(", ") +
    "\n" +
    "Profession: " +
    profession +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Mobile Number: " +
    mobile;

    var popupContainer = document.getElementById("popup-container");
    var popupText = document.getElementById("popup-text");
    popupText.textContent = popupMessage;
    popupContainer.style.display = "block";

    // Reset the form
    document.getElementById("survey-form").reset();

    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
        }
    function closePopup() {
            var popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "none";

    // Reset any validation messages
    document.getElementById("first-name").setCustomValidity("");

    // Hide the overlay
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
        }