function makeMenu() {
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
    description.textContent = "Menu of the day";

    const dish1 = document.createElement("div");
    dish1.classList.add("dish");
    dish1.textContent = "Tagliatelle";
    const dish2 = document.createElement("div");
    dish2.classList.add("dish");
    dish2.textContent = "Hamburger";

    info.appendChild(description);
    info.appendChild(dish1);    
    info.appendChild(dish2);

    centerDiv.appendChild(info);
    content.appendChild(centerDiv);
}

module.exports = {makeMenu}