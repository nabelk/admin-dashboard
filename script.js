// Manipulate profile icon, name & username 

let firstName = prompt("First Name?");
let lastName = prompt("Last Name?");
let userName = prompt("User Name?");

if(!(firstName || lastName || userName)){
    firstName = "John";
    lastName = "Doe";
    userName = "johndoe";
}

const fullName = `${firstName.charAt(0).toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName.charAt(0).toUpperCase()}${lastName.slice(1).toLowerCase()}`;

const iconText = document.querySelectorAll(".icon");
const user = document.querySelector(".full-name");
const welcomeUser = document.querySelector(".welcome-user");

iconText.forEach(text => text.textContent = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`);
user.textContent = `${fullName}`;
welcomeUser.textContent = `${fullName} (@${userName})`; 

// Responsive sidebar

const enableSidebar = document.querySelector(".enable-sidebar");

enableSidebar.addEventListener("click", () => {
    const sidebar = document.querySelector("#sidebar");
    if(sidebar.classList.contains("disable")){
        sidebar.className = "enter";
    } else {
        sidebar.className = "disable";
    }
})