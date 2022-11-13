let yesArray = [];
var email = "";
var email2 = ""; 
var uniqname = "";
  
var count = 0;
let description = "";
let username= "";
let FN= "";
let LN= "";
let major= "";
let dataList = [];
let i = 0;

//document.getElementById("myHeader").textContent = username
//var msgTitle = "<h1 class=\"myHeading\">Search Msg:" + username + "</h1>"

function assignData(dataArray){
  while(dataArray.length > i){
    dataList[i] = dataArray[i]
    i = i + 1;
   }
   

}
console.log(dataList)
//rework function to be called by noFunction for the dataAssignment
function pageOnLoad(data){
 if (count == 0){
  assignData(data)
  
 }
 
 
//if current user != to users[0]
  description = data[count]["Description"];
  //console.log(description)
  username = data[count]["Username"];
  FN = data[count]["FN"];
  LN = data[count]["LN"];
  major = data[count]["Major"];
  uniqname = data[count]["uniqname"]
  email = data[count]["email"]
//else
 //description = data["1"]["Description"]

  document.getElementById("userDisplayName").innerHTML = username;
  document.getElementById("about").innerHTML = description;

  //assignPicture(email);
  if((count+1) <= (data.length-1)){
    count = count + 1;
  }
  else { count = 0; }
  
 
  return email;
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

//update picture is last issue for now
function noFunction(){
  
  email2 = pageOnLoad(dataList);
  
  //assignPicture(email2)
  return email2
}

function hideShow(profile,noprofile){
  var x = document.getElementById(profile);
  var y = document.getElementById(noprofile);
  x.style.display = "block"; //show
  y.style.display = "none"; //hide
}

/*

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

*/