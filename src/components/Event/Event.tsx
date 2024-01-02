import React from "react";
import { Event as EventType } from "../../App";
import { Content, Header, Wrapper } from "./Event.styles";
import moment from "moment/min/moment-with-locales";

interface Props {
  event: EventType;
}

const Event: React.FC<Props> = ({ event }) => {
  const { title, date } = event;
  const localMoment = moment(date);
  localMoment.locale("pl");

  return (
    <Wrapper>
      <Header>{title}</Header>
      <Content>
        <p>{localMoment.format("LL")}</p>
      </Content>
    </Wrapper>
  );
};

export default Event;
