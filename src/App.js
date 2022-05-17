import logo from './logo.svg';
import './App.css';


const hexCodePieces = [ 
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"
]


const randomColor = () => {
  let colorString = "#"
  for (let i = 0; i < 6; i++) {
    let randColor = hexCodePieces[Math.floor(Math.random() * hexCodePieces.length)]
    colorString += randColor
  }
  return colorString
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={makePal}>Generate Color</button>
          <p className="colorName" id="colorName1"> Color is:</p>
          <div className="generatedColor" id="generatedColor1">
          </div>
          <p className="colorName" id="colorName2"> Color is:</p>
          <div className="generatedColor" id="generatedColor2">
          </div>
          <p className="colorName" id="colorName3"> Color is:</p>
          <div className="generatedColor" id="generatedColor3">
          </div>
          <p className="colorName" id="colorName4"> Color is:</p>
          <div className="generatedColor" id="generatedColor4">
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
      colorName.innerHTML = `Color is: ${btnColor}`
}

const makePal = () => {
      makeColor(1)
      makeColor(2)
      makeColor(3)
      makeColor(4)
}