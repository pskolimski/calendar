import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import MainTemplate from "./templates/MainTemplate/MainTemplate";
import { GlobalStyle } from "./styles/GlobalStyle";
import Navigation from "./components/Navigation/Navigation";
import Events from "./components/Events/Events";

export type Event = {
  title: string;
  date: Date;
};

const App: React.FC = () => {
  const [events, setEvents] = useState([] as Event[]);

  const createEvent = (title: string, date: Date) => {
    const newEvent: Event = {
      title: title,
      date: date,
    };

    setEvents([...events, newEvent]);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <Navigation createEvent={createEvent} />
        <Events events={events} />
      </MainTemplate>
    </ThemeProvider>
  );
};

export default App;
