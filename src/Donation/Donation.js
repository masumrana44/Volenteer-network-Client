import React, { useContext, useEffect, useState } from "react";
import "./Donation.css";
import { UserContext } from "../AuthContext/AuthContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Donation = () => {
  const { user,isLoading,setLoading} = useContext(UserContext);
  const [donates, setDonates] = useState([]);

  
  const handleDelete = (donate) => {
    fetch(`http://localhost:5000/delete/donation/${donate?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const remaingDonate = donates?.filter(
            (don) => don?._id !== donate?._id
          );
          setDonates(remaingDonate);
          toast.success(` Delete Successfully done`);
        }
      });
     
  };

  useEffect(() => {
    fetch(`http://localhost:5000/donation?email=${user?.email}`,{
        headers:{
             authorization:`Bearer ${localStorage.getItem('token')}`
        }
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setDonates(data)
        
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {isLoading ? (
        <div class="loader"></div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Candidate</th>
              <th>Email</th>
              <th>Amount</th>
              <th onClick={handleDelete}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {donates?.map((donate) => (
              <tr className="table-row" key={donate?._id}>
                <td>
                  <img src={donate?.eventPhotoURL} alt="Photo" />
                </td>
                <td>{donate?.name}</td>
                <td>{donate?.email}</td>
                <td className="donate-amount">${donate?.amount}</td>
                <td>
                  <FaRegTrashAlt
                    className="trash-icon"
                    onClick={() => handleDelete(donate)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Donation;
