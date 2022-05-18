import './App.css';


const hexCodePieces = [ 
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"
]

const randomColor = () => {
  let colorString = "#"
  for (let i = 0; i < 2; i++) {
    let rValue = hexCodePieces[Math.floor(Math.random() * hexCodePieces.length)]
    colorString += rValue
  }
  for (let i = 0; i < 2; i++) {
    let gValue = hexCodePieces[Math.floor(Math.random() * hexCodePieces.length)]
    colorString += gValue
  }
  for (let i = 0; i < 2; i++) {
    let bValue = hexCodePieces[Math.floor(Math.random() * hexCodePieces.length)]
    colorString += bValue
  }
  return colorString
}

const randTuple = () => {
  let tupleString = ""
  for (let i = 0; i < 2; i++) {
    let randValue = hexCodePieces[Math.floor(Math.random() * hexCodePieces.length)]
    tupleString += randValue
  }
  return tupleString
}

function App() {
  return (
    <div className="App" id="app">
      <header className="App-header">
        <div className="container" id="container">
          <h2>generate harmonious, balanced color palettes</h2>
          <button onClick={makePal}>click me</button>
          <div className="generatedColor" id="generatedColor1">
          <p className="colorName" id="colorName1"> Color is:</p>
          </div>
          <div className="generatedColor" id="generatedColor2">
          <p className="colorName" id="colorName2"> Color is:</p>
          </div>
          <div className="generatedColor" id="generatedColor3">
          <p className="colorName" id="colorName3"> Color is:</p>
          </div>
          <div className="generatedColor" id="generatedColor4">
          <p className="colorName" id="colorName4"> Color is:</p>
          </div>
          <div className="generatedColor" id="generatedColor5">
          <p className="colorName" id="colorName5"> Color is:</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

const makeColor = (id) => {
      let btnColor = randomColor()
      const newColor = document.getElementById("generatedColor"+id)
      newColor.style.backgroundColor = btnColor
      const colorName = document.getElementById("colorName"+id)
      colorName.innerHTML =`${btnColor}`
}

const modifyColor = (hexcode) => {
      let truncatedHex = hexcode.slice(0, 5)
      let newTuple = randTuple()
      let newHex = truncatedHex + newTuple
      return newHex 
}

const veryModifyColor = (hexcode) => {
  let truncatedHex = hexcode.slice(0, 3)
  let newTuple = randTuple()
  let otherNewTuple = randTuple()
  let newHex = truncatedHex + newTuple + otherNewTuple
  return newHex 
}

const makePal = () => {
      makeColor(1)

      let color1 = document.getElementById("colorName1").innerHTML
      let color2 =  modifyColor(color1)
      let newColor = document.getElementById("generatedColor2")
      newColor.style.backgroundColor = color2
      let colorName = document.getElementById("colorName2")
      colorName.innerHTML =`${color2}`

      let color3 = veryModifyColor(color1)
      let thirdColor = document.getElementById("generatedColor3")
      thirdColor.style.backgroundColor = color3
      let thirdColorName = document.getElementById("colorName3")
      thirdColorName.innerHTML = `${color3}`

      makeColor(4)

      let color4 = document.getElementById("colorName4").innerHTML
      let color5 = modifyColor(color4)
      let lastColor = document.getElementById("generatedColor5")
      lastColor.style.backgroundColor = color5
      let lastColorName = document.getElementById("colorName5")
      lastColorName.innerHTML =  `${color5}`

//make the bg cute vvv

      let container = document.getElementById("app")
      container.style.backgroundImage = `linear-gradient(to top right, ${color1}, ${color2}, ${color3}, ${color4}, ${color5})`
}