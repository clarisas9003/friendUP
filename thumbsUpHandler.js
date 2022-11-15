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
  
pageOnLoad(dataList);

  
}

function hideShow(profile,noprofile){
  var x = document.getElementById(profile);
  var y = document.getElementById(noprofile);
  x.style.display = "block"; //show
  y.style.display = "none"; //hide
}

