import MainPage from "./components/MainPage"
import Data from '../data.json'
function App() {
  return (
    <>
<MainPage {...Data} />
    </>
  )
}

export default App
