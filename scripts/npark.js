
"use strict";


window.onload = ()=>{

  const selectParkByType = document.getElementById("selectParkByType");
  const selectParkByLocation = document.getElementById("selectParkByLocation");
  const ParkByLocSelection = document.getElementById("ParkByLocSelection");
  const searchParkByTypeRadioBtn = document.getElementById("searchParkByTypeRadioBtn");
  const searchParkByLocationRadioBtn = document.getElementById("searchParkByLocationRadioBtn");




  function displayShow(){
  document.getElementById("selectParkByType").style.display ="block"
  document.getElementById("selectParkByLocation").style.display ="block"
  document.getElementById("ParkByLocSelection").style.display ="block"
  }

  // remember to hide all select so we can use the radio button and see result
  function displayHidden(){
    document.getElementById("selectParkByType").style.display ="none"
  document.getElementById("selectParkByLocation").style.display ="none"
  document.getElementById("ParkByLocSelection").style.display ="none"
  }
  // displayHidden()
  // un- comment this function later

  

  searchParkByTypeRadioBtn.onchange = function (){
    document.getElementById("selectParkByType").style.display ="block"
    document.getElementById("selectParkByLocation").style.display ="none"
   
  }


  searchParkByLocationRadioBtn.onchange = function (){
    document.getElementById("selectParkByLocation").style.display ="block"
    document.getElementById("selectParkByType").style.display ="none"
  }



  

  // pupulateSelectParkByType
  function pupulateSelectParkByType(){
    let onption1 = document.createElement("option");
    onption1.value = "";
    onption1.textContent = "select park by type"
    selectParkByType.appendChild(onption1);

    let parkTypesArrayLength = parkTypesArray.length;

    for(let i = 0; i < parkTypesArrayLength; i++){
      let onption1 = document.createElement("option");
      onption1.text = parkTypesArray[i];
      selectParkByType.appendChild(onption1);
  
  }

  }
 pupulateSelectParkByType();
// populateSelectParkByLocation
function populateSelectParkByLocation(){

let option2 = document.createElement("option");
option2.value = "";
option2.textContent = "select park by location";
selectParkByLocation.appendChild (option2);

 let locationsArraylength = locationsArray.length;

 for(let i = 0; i < locationsArraylength; i++){

  let option2 = document.createElement("option");
  option2.text = locationsArray[i];
  selectParkByLocation.appendChild(option2);
  
 }



}
populateSelectParkByLocation();


function pupulateParkByLocSelection(){
ParkByLocSelection.length = 0;

let option3 = document.createElement("option");
option3.value = "";
option3.textContent = "select a park";
ParkByLocSelection.appendChild(option3);

for(let n of nationalParksArray){
  if(n.LocationName.indexOf(ParkByLocSelection.value)!= -1){
   let option3 = document.createElement("option");
   option3.value = n.LocationName;
   option3.text = n.LocationName;
   pupulateParkByLocSelection.appendChild(option3);

   pupulateParkByLocSelection.style.display = "block";
  }
}




// pupulateParkByLocSelection();




}

};