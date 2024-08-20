import {SecondsCounter} from "./components/SecondsCounter.jsx"

function App (props) {
  return (
  <>
  <SecondsCounter 
  segundos={props.numero} 
  />
  </>
  )
}

 export default App
