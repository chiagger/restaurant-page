



function createHTML() {
    const content = document.querySelector('#content');
    const header = document.createElement("div");
    header.classList.add("header");

    const logo = document.createElement("div");
    logo.textContent = "ThisRestaurant";
    logo.setAttribute("id", "logo");

    const options = document.createElement("div");
    const opt = document.createElement("ul");
    opt.setAttribute("id", "opt");
    const li1 = document.createElement("li");
    li1.textContent="Home";
    const li2 = document.createElement("li");
    li2.textContent="Menu";
    const li3 = document.createElement("li");
    li3.textContent="Contact Us";
    opt.appendChild(li1);
    opt.appendChild(li2);
    opt.appendChild(li3);
    options.appendChild(opt);

    header.appendChild(logo);
    header.appendChild(options);

    const center = document.createElement("div");
    center.classList.add("center");
    
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

    content.appendChild(header);
    content.appendChild(center);
}

module.exports = { createHTML };