"use strict";

window.onload = () => {
  const selectMountain = document.getElementById("selectMountain");
  const outputFromMountains = document.getElementById("outputFromMountains");
// programmatically populating select mountain (select)
  let createdOption6 = document.createElement("option");
  createdOption6.value = "";
  createdOption6.textContent = "Select a mountain";
  selectMountain.appendChild(createdOption6);

  let mountainsArrayLength = mountainsArray.length;

  for (let n of mountainsArray) {
    let createdOption7 = document.createElement("option");
    createdOption7.text = n.name;
    selectMountain.appendChild(createdOption7);
  }

  selectMountain.onchange = () => {
    outputFromMountains.innerHTML = "";
    for (let n of mountainsArray) {
      if (selectMountain.value == "select") {
        outputFromMountains.innerHTML = "";
      } else if (n.name == selectMountain.value) {
       
        outputFromMountains.innerHTML += `<hr> <br> ${n.desc}<br> <hr> <img src=images/${n.img} ${n.effort} width="30%"></img>`;
      }
    }
    document.getElementById("outputFromMountains").style.columnRuleWidth="thick";
  };
};
