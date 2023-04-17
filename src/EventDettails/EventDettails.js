import React, { useContext, useState } from "react";
import "./EventDettails.css";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";
import { toast } from "react-hot-toast";
import Donation from "../Donation/Donation";
 
const EventDettails = () => {
  const { user } = useContext(UserContext);
  const navigate=useNavigate()
 
  const donationEvent = useLoaderData();
  console.log(donationEvent)

  const handleSumitDontate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const amount = form.amount.value;
    const cardNumber = form.cardnumber.value;
     

    const donateData = {
      name: name,
      email: email,
      amount: amount,
      cardNumber: cardNumber,
      eventTitle:donationEvent?.eventTitle,
      eventPhotoURL:donationEvent?.eventPhotoURL,
    };
    console.log(donateData)
     
    fetch(`http://localhost:5000/posting/donate`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(donateData)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data){
            toast.success(`Your Donation has Succesfully done . Thanks for donation ${user?.displayName}`)
            form.reset();
            navigate('/donation')
             
        }
    })
     
     
  };

  return (
    <div className="donate-form-container">
      <h1>Make a Donation</h1>
       
      <form onSubmit={handleSumitDontate}>
        <label htmlFor="name">Donation Title</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          defaultValue={donationEvent?.eventTitle}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          defaultValue={user?.email}
          required
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter Aamount"
          required
        />
        <label htmlFor="cardnumber">Credit Card Number</label>
        <input
          type="number"
          id="cardnumber"
          name="cardnumber"
          placeholder="Credit Card Number"
           
        />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default EventDettails;
