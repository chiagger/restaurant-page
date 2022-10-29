function makeContact() {
    const content = document.getElementById("content");
    const center = document.querySelector(".center");

    content.removeChild(center);
    
    const centerDiv = document.createElement("div");
    centerDiv.classList.add("center");
    console.log(centerDiv);
    const info = document.createElement("div");
    info.classList.add("info");   
    
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = "Our Contacts";

    const email = document.createElement("div");
    email.classList.add("contact");
    email.textContent = "this.email@gmail.com";
    const phone = document.createElement("div");
    phone.classList.add("contact");
    phone.textContent = "+44 9384933749";

    info.appendChild(description);
    info.appendChild(email);    
    info.appendChild(phone);

    centerDiv.appendChild(info);
    content.appendChild(centerDiv);
}

module.exports = {makeContact}