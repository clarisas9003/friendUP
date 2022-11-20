var array = ["coffeeGuy", "yor", "loid", "anya"]
var count = 0;
let description = "";
let username = "";
let FN = "";
let LN = "";
let major = "";

//document.getElementById("myHeader").textContent = username
//var msgTitle = "<h1 class=\"myHeading\">Search Msg:" + username + "</h1>"



function pageOnLoad(data){
  
  description = data["Description"];
  username = data["Username"];
  FN = data["FN"];
  LN = data["LN"];
  major = data["Major"];

  //document.getElementById("userDisplayName").innerHTML = username;
  //document.getElementById("about").innerHTML = description;
  
}

//Remove this when connected to log in page
function fillSessionStorage(){
  sessionStorage.setItem('un','IanTestUser')
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
  else if (openProfile.chatOpen)
  {
    //fill with chat id    \/
    document.getElementById().style.display = 'none'
    openProfile.chatOpen = !openProfile.chatOpen
    myFunction('Demo1')
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
  else if (openSettings.chatOpen)
  {
    //fill with chat id    \/
    document.getElementById().style.display = 'none'
    openSettings.chatOpen = !openSettings.chatOpen
    myFunction('Demo1')
  }
  else{ /* do nothing */}
}

function yesFunction(){
  console.log("Hello World")
}

function noFunction(){
  //load next element
  if (array[count] == "coffeeGuy"){
    count = count + 1;
    hideShow("yor","coffeeGuy");
    //readUserData("1");
    //document.getElementById(profile).style.display = "block";;
  }
  else if (array[count] == "yor"){
    count = count + 1;
    hideShow("loid","yor");
    //readUserData("2");
  }
  else if (array[count] == "loid"){
    count = count + 1;
    hideShow("anya","loid");
    //readUserData("3");
  }
  else if (array[count] == "anya") {
    count = 0;
    hideShow("coffeeGuy","anya");
    //readUserData("0");
  } 
}

function hideShow(profile,noprofile){
  var x = document.getElementById(profile);
  var y = document.getElementById(noprofile);
  x.style.display = "block"; //show
  y.style.display = "none"; //hide
}

