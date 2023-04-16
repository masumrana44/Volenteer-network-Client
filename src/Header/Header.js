import React, { useContext } from "react";
import "./Header.css";
import logo from "../assets/logos/Group 1329.png";
import { Link } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";
import { FaUser } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Header = () => {
  const {user,logOuting}=useContext(UserContext);
   const handleLogOuting=()=>{
    logOuting()
    .then(()=>{
      toast.success('Log out SuccessFully Done')
    })
    .catch(err=>console.log(err))
   }
   
  return (
    <header className="header-container">
      <div className="logo">
        <img src={logo} alt="" className="" />
      </div>
      <nav className="navigationbar">
        <Link to='/'>Home</Link>
        <Link to='/'>Donation</Link>
        <Link to='/addevent'>Add Events</Link>
        <Link to='/'>Blog</Link>

        { 
          user?.email? <div className="user"> 
             <button onClick={handleLogOuting}>LogOut</button> 
            {
              user?.photoURl?<FaUser/>:<img src={user?.photoURL} alt="" className="user-img"/>
            }
            {
              <p className="user-name">{user?.displayName}</p>
            }
          </div>  :<Link to='/login'><button>Login</button></Link>
        }
        

      </nav>
    </header>
  );
};

export default Header;
