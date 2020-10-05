import React, { useState } from "react";
import { Container, Button, Table, Col, Row } from "react-bootstrap";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <h2>Home page placeholders</h2>
  <Button className="btn-success" onClick={() => setCount(count + 1)}>click {count}</Button>

    <Table>
      <Col>
        <Row>
          prvi
        </Row>
        <Row>
          vtori
        </Row>
      </Col>
    </Table>

    </Container>
  );

}

export default Home;