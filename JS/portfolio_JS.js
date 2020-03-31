
//Function to control fade-in effect
$(document).ready( function() {
    document.body.className += ' fade-out';
    $(function() {
      $('body').removeClass('fade-out');
    });
});

//Functions to open and close contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function checkForm() {
    let openState = document.getElementById("myForm").style.display;
    if (openState == "block") { closeForm(); }
    else { openForm(); }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}