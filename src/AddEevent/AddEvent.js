import React, { useContext } from "react";
import "./AddEvent.css";
import { UserContext } from "../AuthContext/AuthContext";

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
      eventTitle: eventTitle,
      eventDate: eventDate,
      eventLocation: eventLocation,
      eventPhotoURL: eventPhotoURL,
      evetDescription: evetDescription,
    };

    console.log(eventData)
    // console.log(
    //   eventDate,
    //   eventTitle,
    //   evetDescription,
    //   eventLocation,
    //   eventPhotoURL
    // );
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
