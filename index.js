function dwarfRollCall(dwarves) {
  var i = 0;
  var message = ""
  while(dwarves.length > i){
    message = message + `${i+1}. ${dwarves[i]} `
    i++
  }
   return message
}

function summonCaptainPlanet(planeteerCalls){
  var planeteerNewCalls = []
  for (var i = 0; i < planeteerCalls.length; i++){
    planeteerNewCalls[i] = planeteerCalls[i].toUpperCase() + "!";

  }
  return planeteerNewCalls
}

function longPlaneteerCalls(calls) {
  for(var i = 0; i < calls.length; i++){
    if(calls[i].length > 4){
      return true
    }
  } return false
}

function findTheCheese (foods) {
  for (var i=0; i < foods.length; i++){
    if (foods[i] === "cheddar"){
      return foods[i]
    }else if (foods[i] === "gouda"){
      return foods[i]
    }else if (foods[i] === "camembert"){
      return foods[i]
    }
  }
  return "no cheese!"
}
