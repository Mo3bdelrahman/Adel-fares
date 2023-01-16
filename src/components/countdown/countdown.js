import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./countdown.module.css";
import Logo from "../logo/logo";

const Countdown = (props) => {
  const [statevar, setStatefun] = useState({ dist: 0 });
  useEffect(() => {
    const countDownDate = new Date("Feb 15, 2023 23:59:59").getTime();
    setInterval(() => {
      let nowDate = new Date().getTime();
      setStatefun({ dist: countDownDate - nowDate });
    }, 1000);
  }, []);
  let days = Math.floor(statevar.dist / (1000 * 60 * 60 * 24));
  let hrs = Math.floor(
    (statevar.dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let mns = Math.floor((statevar.dist % (1000 * 60 * 60)) / (1000 * 60));
  let scns = Math.floor((statevar.dist % (1000 * 60)) / 1000);

  return (
    <Container fluid className={styles.main}>
      <Row className={styles.rows + " align-items-center"}>
        <Col md={6} sm={8}>
          <Logo />
        </Col>
        <Col md={6} sm={8}>
          <h1>COMING SOON</h1>
          <p>
            {days}D {hrs}H {mns}M {scns}S
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Countdown;
