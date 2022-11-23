

let btn = document.getElementById("btn");
let input = document.getElementById("input");

let select = document.getElementById("select");

btn.addEventListener("click", () => {
    let option = document.createElement("option");
    option.value = input.value;
    option.text = input.value;

    let index = select.options[select.selectedIndex];
    select.add(option, index);
    input.value = "";

})