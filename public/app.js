function btnClick()  {
    const input = document.getElementById("input");
    const select = document.getElementById("select");

    const p = document.createElement("p");
    p.innerHTML = "Hola "+input.value+" tienes "+select.value+" años";
    document.body.appendChild(p);
};

