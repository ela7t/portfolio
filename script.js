document.getElementById("contact-form").addEventListener("submit", function(e){

e.preventDefault();

alert("Message Sent Successfully!");

this.reset();

});
function openPopup(src){
document.getElementById("imagePopup").style.display="flex";
document.getElementById("popupImg").src=src;
}

function closePopup(){
document.getElementById("imagePopup").style.display="none";
}