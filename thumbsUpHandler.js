var array = ["coffeeGuy", "yor", "loid", "anya"];
let yesArray = [];
var email = ""; 
  //var password = document.getElementById("password").value
  //var uniqname = "0";
var uniqname = "";
  
var count = 0;
let description = "";
let username= "";
let FN= "";
let LN= "";
let major= "";

//document.getElementById("myHeader").textContent = username
//var msgTitle = "<h1 class=\"myHeading\">Search Msg:" + username + "</h1>"



function pageOnLoad(data){
 
  description = data["Description"];
  username = data["Username"];
  FN = data["FN"];
  LN = data["LN"];
  major = data["Major"];

  document.getElementById("userDisplayName").innerHTML = username;
  document.getElementById("about").innerHTML = description;
  
}


function yesFunction(){
  //yesArray.push(uniqname);
  //grab profile pic
  //grab username
  //add username to @umich.edu
  //let friendEmail = username + "@umich.edu";
  console.log("hello");
  //not showing
  /*document.getElementById("friendPendName").innerHTML = "Yor Forger";
  let friendPending = document.getElementById("friendPendName");
  friendPending.style.display = "block";
  //pop current user into other user's suggestion
*/
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