document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Pronto te responderemos.");
    window.location.href = "https://wa.me/584142539702";
    e.target.reset();
        });

