var array = ["coffeeGuy", "yor", "loid", "anya"]
var count = 0;

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
  x.style.display = "block";
  y.style.display = "none";
}