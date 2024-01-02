import React from "react";
import { Event as EventType } from "../../App";
import Event from "../Event/Event";
import { Wrapper } from "./Events.styles";

interface Props {
  events: EventType[];
}

const Events: React.FC<Props> = ({ events }) => {
  return (
    <Wrapper>
      {events.length > 0 ? (
        events.map((event: EventType, index: number) => (
          <Event event={event} key={index} />
        ))
      ) : (
        <p>Brak wydarzeń</p>
      )}
    </Wrapper>
  );
};

export default Events;
