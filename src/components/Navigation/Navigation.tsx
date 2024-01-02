import React, { useState } from "react";
import { Button, Form, Input, Logo, Wrapper } from "./Navigation.styles";

interface Props {
  createEvent: (title: string, date: Date) => unknown;
}

const Navigation: React.FC<Props> = ({ createEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (!title || !date) {
      alert("Wypełnij wszystkie pola!");
      return;
    }

    createEvent(title, new Date(date));
  };

  return (
    <Wrapper>
      <Logo href="/">orgazizer.</Logo>
      <Form>
        <Input
          type="text"
          placeholder="Nazwa wydarzenia"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Nazwa wydarzenia"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button onClick={handleSubmit}>Dodaj wydarzenie</Button>
      </Form>
    </Wrapper>
  );
};

export default Navigation;
