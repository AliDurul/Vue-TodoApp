import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/login/`, userData)
      dispatch(loginSuccess(data))
      navigate('/dashboard')
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  }





  return { login }
}

export default useAuthCall