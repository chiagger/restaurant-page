/** <div class="header">
            <div id="logo">ThisRestaurant</div>
            <div class="options">
                <ul id="opt">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
        <div class="center">
            <div class="info">
                <div class="description">Best food in town, come try it!</div>
                <div class="lower">Affordable too!</div>
                <button id="order">Order Now</button>
            </div>
        </div>**/



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

    header.appendChild(logo);
    header.appendChild(opt);

    content.appendChild(header);

    const center = document.createElement("div");
    center.classList.add("center");
    content.appendChild(center);
}

module.exports = { createHTML };