

const treasure = (id) => {
  if (id===treasureLocation) {
    alert("You clicked on the Treasure!")
  } else if (id===bombLocation) {
    alert("You clicked on the bomb!")
  } else {
    alert("Nice Try!")
  }
}

var treasureLocation= Math.floor(Math.random() * 9)

var bombLocation= Math.floor(Math.random() * 9)
