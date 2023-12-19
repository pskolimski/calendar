import React from "react";
import { Event as EventType } from "../../App";
import Event from "../Event/Event";

interface Props {
  events: EventType[];
}

const Events: React.FC<Props> = ({ events }) => {
  return (
    <div>
      {events.map((event: EventType) => (
        <Event event={event} />
      ))}
    </div>
  );
};

export default Events;
