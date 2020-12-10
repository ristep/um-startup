import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  const [count, setCount] = useState(0);

  function surf(uri) { 
    window.location.href = uri; 
  }

  return (
    <Container>
      <h2>Home page placeholders</h2>
      <Button className="btn-success" onClick={() => setCount(count + 1)}>click {count}</Button>

      <Button className="btn-primary" onClick={() => surf("#/about")}>About (rpimary)</Button>
      <Button className="btn-secondary" onClick={() => surf("#/foods")}>Foods (secondary)</Button>
      <Button className="btn-success">Success</Button>
      <Button className="btn-info">Info</Button>
      <br />
      <Button className="btn-warning">Warning</Button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-link">Link</button>

    </Container>
  );

}

export default Home;