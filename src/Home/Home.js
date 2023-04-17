import React, { useContext } from "react";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import { UserContext } from "../AuthContext/AuthContext";

const Home = () => {
  const { isLoading, setLoading } = useContext(UserContext);
  const events = useLoaderData();
  if (events) {
    setLoading(false);
  }
  console.log(events);
  return (
    <div>
      {isLoading ? (
        <div class="loader"></div>
      ) : (
        <div>
          <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
          <div className="search-box">
            <input type="text" />
            <button>Search</button>
          </div>

          <div className="events-container">
            {events?.map((event) => (
              <Link key={event?._key} to={`/event/dettails/${event?._id}`}>
                {" "}
                <div className="event-card">
                  <img src={event?.eventPhotoURL} alt="" />
                  <h3>{event?.eventTitle}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
