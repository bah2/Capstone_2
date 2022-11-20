
"use strict";


window.onload = ()=>{

  const selectParkByType = document.getElementById("selectParkByType");
  const selectParkByLocation = document.getElementById("selectParkByLocation");
  const parksOfCategory = document.getElementById("parksOfCategory");
  const searchParkByTypeRadioBtn = document.getElementById("searchParkByTypeRadioBtn");
  const searchParkByLocationRadioBtn = document.getElementById("searchParkByLocationRadioBtn");
  const parkLinks = document.getElementById("parkLinks");
  const searchBtn = document.getElementById("searchBtn");
  
 




  function displayShow(){
  document.getElementById("selectParkByType").style.display ="block"
  document.getElementById("selectParkByLocation").style.display ="block"
  document.getElementById("parksOfCategory").style.display ="block"
  }

  // remember to hide all select so we can use the radio button and see result
  function displayHidden(){
    document.getElementById("selectParkByType").style.display ="none";
  document.getElementById("selectParkByLocation").style.display ="none";
  document.getElementById("parksOfCategory").style.display ="none";
  document.getElementById("parksOfCategory").style.display = "none";
  }
  // displayHidden();
  // un- comment this function later
};
  

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



selectParkByType.onchange = () => {

  let selectParkByType  = document.getElementById("selectParkByType").value;

  let parksOfCategory = document.getElementById("parksOfCategory");

  parksOfCategory.length = 0;

  let option5 = document.createElement("option");
  option5.value = " ";
  option5.text = "Select a park";
  parksOfCategory.appendChild(option5);

  for( let p of nationalParksArray){
    if(p.LocationName.indexOf(selectParkByType) != -1){
      let option5 = document.createElement("option");
      option5.value = p.LocationName;
      option5.text = p.LocationName;
      parksOfCategory.appendChild(option5);
      parksOfCategory.style.display = "block";
    }
  }

}


selectParkByLocation.onchange = () =>{
  
let searchBtn = document.getElementById("searchBtn");
 let selectParkByLocation = document.getElementById("selectParkByLocation").value;

 let parksOfCategory = document.getElementById("parksOfCategory");
  
 parksOfCategory.length = 0;
 let option4 = document.createElement("option");

 option4.value = "";
 option4.text = "Select a park";
 parksOfCategory.appendChild(option4);

 for(let p of nationalParksArray){

  if(selectParkByLocation == p.State){

    let option5 = document.createElement("option");
    option5.value = p.LocationName;
    option5.text = p.LocationName;
    parksOfCategory.appendChild(option5);

    parksOfCategory.style.display = "block"
  }else if(selectParkByLocation == ""){
    parksOfCategory.style.display = "none";

  }


 }

}

searchBtn.onclick = () => {

  let parksOfCategory = document.getElementById("parksOfCategory");
  let outputFromParks = document.getElementById("outputFromParks");
  for(let n of nationalParksArray){
     if(parksOfCategory.value == n.LocationName){
      if(n.Visit == undefined){
        outputFromParks.style.display = "block";

      outputFromParks.innerHTML =
      
      `<strong>Location Name:</strong> 
      ${n.LocationName} <br> <strong>LocationID:</strong> ${n.LocationID} <br> <strong>Address:</strong> ${n.Address} <br> <strong>City:</strong> ${n.City} <br> <strong>State:</strong>  ${n.State} <br> <strong>ZipCode:</strong> ${n.ZipCode}<br> <strong>Phone:</strong>${n.Phone}<br> <strong>Fax:</strong> ${n.Fax}`


      } else if(n.Visit != undefined){
      
        outputFromParks.innerHTML = 
        `<strong>Location Name:</strong> 
        ${n.LocationName} <br> <strong>LocationID:</strong> ${n.LocationID} <br> <strong>Address:</strong> ${n.Address} <br> <strong>City:</strong> ${n.City} <br> <strong>State:</strong>  ${n.State} <br> <strong>ZipCode:</strong> ${n.ZipCode}<br> <strong>Phone:</strong>${n.Phone}<br> <strong>Fax:</strong> ${n.Fax} <br> <strong>Visit:</strong> ${n.Visit}`

        // link vist to a button so when user clicks on the button, they can access the parks website 

        parkLinks.style.display = "block";
        parkLinks.href = n.Visit;
      }
      
     } else if(parksOfCategory.value == " "){
      outputFromParks.style.display = "none";

     }
  }

 
}




