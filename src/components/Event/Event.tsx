import React from "react";
import { Event as EventType } from "../../App";

interface Props {
  event: EventType;
}

const Event: React.FC<Props> = ({ event }) => {
  const { title, date } = event;

  return (
    <div>
      <div>{title}</div>
      <div>{date.toLocaleDateString()}</div>
    </div>
  );
};

export default Event;
