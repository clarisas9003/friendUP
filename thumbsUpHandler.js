//let userArray = [];
var email = "";
var email2 = ""; 
var uniqname = "";
  
var count = 0;
let flag = false;
let description = "";
let username= "";
let FN= "";
let LN= "";
let major= "";
let dataList = [];
let userList = [];
let i = 0;
let currentUser = "Aforger"
//THE ABOVE IS TEMPORARY UNTIL SESSION KEY CAN BE ACCESSED!!!!!

//transfer database to workable array
function assignData(dataArray, userArray){
  while(dataArray.length > i){
    dataList[i] = dataArray[i]
    i = i + 1;
   }
   i = 0;
   console.log(userArray)
   console.log(userArray.length)
   while((userArray.length) > (i)){
    userList[i] = userArray[i]
    i = i + 1;
   }
}


//loads potential friend profiles
function pageOnLoad(data, userArray){
 if (count == 0 && flag == false){
  assignData(data, userArray)
 }
  
  //if else caused it to break, find out why and you're golden
  if(userList[count] != currentUser){

    description = dataList[count]["Description"];
    //console.log(description)
    username = dataList[count]["Username"];
    FN = dataList[count]["FN"];
    LN = dataList[count]["LN"];
    major = dataList[count]["Major"];
    uniqname = dataList[count]["uniqname"]
    email = dataList[count]["email"]

    
    document.getElementById("userDisplayName").innerHTML = username;
    document.getElementById("about").innerHTML = description;
    document.getElementById("email6").innerHTML = email;
  }

  else {
    if((count+1) < (dataList.length)){
      count = count + 1;
    }
    else { count = 0; flag = true; }

    description = dataList[count]["Description"];
    username = dataList[count]["Username"];
    FN = dataList[count]["FN"];
    LN = dataList[count]["LN"];
    major = dataList[count]["Major"];
    uniqname = dataList[count]["uniqname"]
    email = dataList[count]["email"]
    document.getElementById("userDisplayName").innerHTML = username;
    document.getElementById("about").innerHTML = description;
    document.getElementById("email6").innerHTML = email;
  }
  

  if((count+1) < (dataList.length)){
    count = count + 1;
  }
  else { count = 0; flag = true; }
  console.log(email);
  return email;
}

//most functionality not here
//what happens when you thumb
function yesFunction(){
  //puts the side friend pending div in
  document.getElementById("friendPendName").innerHTML = FN + " " + LN;
  //calls noFunction so next user will be called on event
  //load friend pending into each user's array
  //listener for array update 
  //when that happens, display friend pending
}

function loadFriendPending(){

}

function noFunction(){
pageOnLoad(dataList);
}

function openProfile(openProfile,myProfile,notProfile,settings)
{

  if(openProfile.profileOpen==false)
  {
    hideShow(myProfile,notProfile)
  }
  else
  {
    hideShow(notProfile,myProfile)    
  }
  openProfile.profileOpen = !openProfile.profileOpen;

  if(openProfile.settingsOpen){
    document.getElementById(settings).style.display = 'none'
    openProfile.settingsOpen = !openProfile.settingsOpen
  }
  
  else{/* do nothing */}
}


function openSettings(openSettings,settings,middle,profile)
{
  if(openSettings.settingsOpen==false)
  {
    hideShow(settings,middle)
  }
  else
  {
    hideShow(middle,settings)
  }
  openSettings.settingsOpen = !openSettings.settingsOpen

  if(openSettings.profileOpen){
    document.getElementById(profile).style.display = 'none'
    openSettings.profileOpen = !openSettings.profileOpen
    myFunction('Demo4')
  }
 
  else{ /* do nothing */}
}



function hideShow(profile,noprofile){
  var x = document.getElementById(profile);
  var y = document.getElementById(noprofile);
  x.style.display = "block"; //show
  y.style.display = "none"; //hide
}
