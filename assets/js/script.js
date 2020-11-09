let identifiant;
let email;
let movies;


confirm("This website uses cookies We use cookies to personalise content and ads, to provide social media features and to analyse our traffic.We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services");

function register() {//form register
    identifiant = document.getElementById('registerIdentifiant').value;
    email = document.getElementById('registerEmail').value;
    alert("Your account has been created. \nYour identifiant : " + identifiant + "\nYour email : " + email);
}
function login() {//form login
    identifiant = document.getElementById('loginIdentifiant').value;
    alert('Hello ' + identifiant + ". You are connected.");
}