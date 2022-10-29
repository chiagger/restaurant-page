function makeMenu() {
    const content = document.getElementById("content");
    const center = document.querySelector(".center");

    content.removeChild(center);
}

module.exports = {makeMenu}