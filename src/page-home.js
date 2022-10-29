function makeHome() {
    const content = document.querySelector('#content');
    const centerDiv = document.querySelector(".center");

    content.removeChild(centerDiv);
    
    const center = document.createElement("div");
    center.classList.add("center");
    console.log(center);
    const info = document.createElement("div");
    info.classList.add("info");   
    
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = "Best food in town, come try it!";
    const lower = document.createElement("div");
    lower.classList.add("lower");
    lower.textContent = "Affordable too!";
    const order = document.createElement("div");
    order.setAttribute("id","order");
    order.textContent = "Order Now";
    order.style.color="black";

    info.appendChild(description);
    info.appendChild(lower);
    info.appendChild(order);
    center.appendChild(info);

    content.appendChild(center);
}

module.exports = {makeHome} 