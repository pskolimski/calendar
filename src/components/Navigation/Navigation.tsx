import React, { useState } from "react";
import { Button, Form, Input, Logo, Wrapper } from "./Navigation.styles";

interface Props {
  createEvent: (title: string) => unknown;
}

const Navigation: React.FC<Props> = ({ createEvent }) => {
  const [title, setTitle] = useState("");

  return (
    <Wrapper>
      <Logo href="/">orgazize.</Logo>
      <Form>
        <Input
          type="text"
          placeholder="Nazwa wydarzenia"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button onClick={() => createEvent(title)}>Dodaj wydarzenie</Button>
      </Form>
    </Wrapper>
  );
};

export default Navigation;
