import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import PrivateRouter from "./PrivateRouter"

const AppRouter = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<PrivateRouter />} >
          <Route index  element={<Dashboard />} />

        </Route>



      </Routes>


    </div>

  )
}

export default AppRouter