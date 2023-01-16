import React from "react";
import Adellogo from "../../assets/imgs/logo.png";
import styles from "./logo.module.css";

const Logo = (props) => {
  return (
    <div>
      <img src={Adellogo} alt="ADEL FARES LOGO" className={styles.logo} />
    </div>
  );
};
export default Logo;
