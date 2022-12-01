let checkBoxWithLabelContainer = document.getElementById("checkBoxWithLabelContainer");

let checkboxElement = document.createElement("input");
checkboxElement.type = "checkbox";
checkboxElement.id = "checkbox";
checkBoxWithLabelContainer.appendChild(checkboxElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkbox");
labelElement.id = "checkboxLabel";
labelElement.textContent = "I am a label";
checkBoxWithLabelContainer.appendChild(labelElement);

checkboxElement.onclick = function() {
    labelElement.classList.toggle("strike-through");
}
