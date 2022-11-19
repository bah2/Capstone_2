"use strict";

// nationalParkPage incomeplete code

//  let typeSearch = document.getElementById("searchByType");
//  typeSearch.onchange = searhByTypeOnchange;
//  let searchByLoc = document.getElementById("searchByLocation");
//  let ResultOfParks = document.getElementById("finalSelect")

// Most variable declearation
const searchParkByTypeRadioBtn = document.getElementById("searchParkByTypeRadioBtn");
const searchParkByLocationRadioBtn = document.getElementById("searchParkByLocationRadioBtn");
const searchByType = document.getElementById("searchByType");
const searchByLocation = document.getElementById("searchByLocation");
const searchBtn = document.getElementById("searchBtn");
// const nationalParksArray = document.getElementById("nationalParksArray");
const outputFromParks = document.getElementById("outputFromParks");

// creating element for select 
let createdOption1 = document.createElement("option");
createdOption1.value = "";
createdOption1.textContent = "Select park by type";
searchByType.appendChild(createdOption1);

let createdOption2 = document.createElement("option");
createdOption2.value = "";
createdOption2.textContent = "Select park by location";
searchByLocation.appendChild(createdOption2);

// let createdOption9 = document.createElement("option");
// createdOption9.value = "";
// createdOption9.textContent = "Select park by type";
// searchByType.appendChild(createdOption9);

// Radio button to show and hide based on user select
searchParkByTypeRadioBtn.onclick = () => {
  document.getElementById("searchByType").style.display = "block";
  document.getElementById("searchByLocation").style.display = "none";
  document.getElementById("searchBtn").style.display = "block";
}

searchParkByLocationRadioBtn.onclick = () => {
  document.getElementById("searchByType").style.display = "none";
  document.getElementById("searchByLocation").style.display = "block";
  document.getElementById("searchBtn").style.display = "block";

}

  let parkTypeLength = parkTypesArray.length;

  for (let i = 0; i < parkTypeLength; i++){
    
    let createdOption3 = document.createElement("option");
    createdOption3.text = parkTypesArray[i];
    searchByType.appendChild(createdOption3);
  }


 
let parkLocationLength =  locationsArray.length;

for(let j = 0; j < parkLocationLength; j++){
let createdOption4 = document.createElement("option");
createdOption4.text = locationsArray[j];
searchByLocation.appendChild(createdOption4);

}

function filterParksByParkType(inputParks, partkType){
let results = [];
for(let i = 0; i < inputParks.length; i++){
  let valueR = partkType(inputParks[i]);
  results.push(valueR);
}
return results;
}

function filterParksByLocationType(inputParks, location){
let results = [];
for(let i = 0; i < inputParks.length; i++){
  let valueR = location(inputParks[i]);
  results.push(valueR);
}
return results;

}









