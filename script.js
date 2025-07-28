document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Pronto te responderemos.");
    window.location.href = "https://wa.me/584142539702";
    e.target.reset();
        });



const response = await fetch("localhost:8000", {
    method: "POST",
    body: JSON.stringify({"name": "Carlos", "edad": 12})
})

result = await response.json()

print(result)