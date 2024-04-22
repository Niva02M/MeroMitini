import React from "react";
import "./../../css/events.css";
import newEventsData from "../../data/newEventsData.json";

const HomeUpcomingEvents = () => {
  const featuredEvents = newEventsData.slice(0, 4);

  return (
    <>
      <div className="event-container">
        {featuredEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date">{event.date}</p>
              <p className="event-category">{event.category}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeUpcomingEvents;