import React, { useContext } from "react";
import "./AddEvent.css";
import { UserContext } from "../AuthContext/AuthContext";
import { toast } from "react-hot-toast";

const AddEvent = () => {
  const { user } = useContext(UserContext);
  const handleEventAdd = (event) => {
    event.preventDefault();
    const form = event.target.form;
    const eventTitle = form.eventTitle.value;
    const eventDate = form.eventDate.value;
    const evetDescription = form.eventDescription.value;
    const eventLocation = form.eventLocation.value;
    const eventPhotoURL = form.eventPhotoURL.value;

    const eventData = {
      userEmail: user?.email,
      eventTitle: eventTitle,
      eventDate: eventDate,
      eventLocation: eventLocation,
      eventPhotoURL: eventPhotoURL,
      evetDescription: evetDescription,
    };

    console.log(eventData);

    fetch(`http://localhost:5000/add/event`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data)
        if (data) {
          form.reset();
          toast.success("Your event has succesfully submited");
          
        }
      });
  };
  return (
    <form class="event-form">
      <h2>Add Event</h2>
      <div className="first-row">
        <div>
          <label for="event-title">Event Title</label>
          <input
            type="text"
            id="event-title"
            name="eventTitle"
            placeholder="Enter Event Title"
          />
        </div>
        <div>
          <label for="event-date">Event Date</label>
          <input type="date" id="event-date" name="eventDate" />
        </div>
      </div>

      <div className="second-row">
        <div>
          <label for="event-location">Event Location:</label>
          <input
            type="text"
            id="event-location"
            name="eventLocation"
            placeholder="Enter Event Location"
          />
        </div>
        <div>
          <label for="event-location">Event Photo URL</label>
          <input
            type="text"
            id="event-location"
            name="eventPhotoURL"
            placeholder="Enter Event photo URL"
          />
        </div>
      </div>
      <div>
        <label for="event-description">Event Description:</label>
        <textarea
          className="event-form-textarea"
          id="event-description"
          name="eventDescription"
          placeholder="Enter Event Description"
        ></textarea>
      </div>
      <button onClick={handleEventAdd} type="submit">
        Add Event
      </button>
    </form>
  );
};

export default AddEvent;
