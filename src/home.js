import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Home(props) {
  console.log(props);
  const { balance, sender } = props;
  return (
    <Container>
      <Row>
        <Col>
          <h2>Friday pizza! {sender}</h2>
          <h4>Time to enjoy our delicious pizza.</h4>
        </Col>
        <Col>
          <img src="" alt="pizza" />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
