import {Routes , Route} from "react-router-dom"
import Login from "../pages/Login"
const AppRouter = () => {
  return (
    <div>

        <Routes>
            <Route path="/" element={<Login/>} />

        </Routes>


    </div>

  )
}

export default AppRouter