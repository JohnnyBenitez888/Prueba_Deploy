function btnClick()  {
    const input = document.getElementById("input");
    const select = document.getElementById("select");
    const selectedText = select.options[select.selectedIndex].text;/* obtengo lo que el usuario seleccionó de las opciones */

    const p = document.createElement("p");
    p.innerHTML = "Hola "+input.value+" tienes "+selectedText+" años";
    document.body.appendChild(p);
};

