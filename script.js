const copyText = '5JiXuhb3B8N5MMKMqN4NfZeCjyAH8c64J6Y7Zrq6YW69'; //paste here Token CA
const copyAddressElement = document.getElementById('copyAddress');

copyAddressElement.addEventListener('click', () => {
    const tempInput = document.createElement('input');
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert("$PEP Contract Address copied!"); 
});

function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
}

function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    const menuPlaceholder = document.querySelector(".menu-placeholder");

    menu.classList.toggle("show");

    // Cambia il testo del pulsante
    if (menu.classList.contains("show")) {
        menuPlaceholder.textContent = "Close";
    } else {
        menuPlaceholder.textContent = "Menu";
    }
}
