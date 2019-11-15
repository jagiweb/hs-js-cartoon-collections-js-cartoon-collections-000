function dwarfRollCall(dwarves) {
  var i = 0;
  var message = []
  while(dwarves.length > i){
    message.push(`${i+1}. ${dwarves[i]} `)
    i++

  }
  /*var message = []
  for(var i = 0; i < dwarves.length; i++){
    if (dwarves.length > i){
      message.push(`${i+1}. ${dwarves[i]}`)
    }
  } */return message.join("")
}
  // return `1. ${dwarves[0]} 2. ${dwarves[1]} 3. ${dwarves[2]} `


function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";

  }
  return planeteerCalls
}

function longPlaneteerCalls(calls) {
  for(var i = 0; i < calls.length; i++){
    if(calls.length > 4){
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
