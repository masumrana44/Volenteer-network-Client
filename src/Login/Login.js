import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import "./Login.css";
import { useContext } from "react";
import { UserContext } from "../AuthContext/AuthContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
   

  const { LoginWithGoogle } = useContext(UserContext);
  const handleGoogleLogin = () => {
    LoginWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success(`Login Successful. Wellcome Dear ${user?.displayName}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="login-container-content">
        <h2 className="login-title">Login With</h2>
        <button onClick={handleGoogleLogin} className="login-btn">
          <FaGoogle /> Continue with Google
        </button>
        <p className="">
          Don't have an account? <Link to="/">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
