import { useState } from "react";
import styles from "../styles/SignUp.module.css";
import Button from "../components/Button";
import axios from "axios";
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  function handleClick(e) {
    e.preventDefault();
    setErrorMsg(null);
    const body = {
      username,
      firstName,
      lastName,
      email,
      countryCode,
      phoneNumber,
      password,
    };
    axios
      .post("http://localhost:3000/api/hello", body)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => setErrorMsg(err));
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.input_container}>
          <h1>Sign-Up</h1>

          <h3>Your Username</h3>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input_username}
            placeholder="username"
          />

          <h3>Your First Name and Last Name</h3>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            className={styles.input_name}
            placeholder="firstname"
          />

          <input
            onChange={(e) => setLastName(e.target.value)}
            className={styles.input_name}
            placeholder="lastname"
          />
          <h3>Your Email</h3>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input_email}
            placeholder="johndoe@mail.com"
          />

          <h3>Your Phone Number</h3>
          <select
            onChange={(e) => setCountryCode(e.target.value)}
            className={styles.input_country_code}
          >
            <option>---</option>
            <option value={"+49"}>Germany(+49)</option>
          </select>

          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={styles.input_phone_number}
            placeholder="example 010102020303"
          />

          <h3>Please Input Password</h3>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input_password}
            placeholder="password"
          />

          <h3>Please Confirm Your Password</h3>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input_password}
            placeholder="confirm password"
          />
          <h4>Button Component</h4>
          <button onClick={(e) => handleClick(e)}>SUBMIT</button>
          {/* <Button onClick={() => console.log("clicked")} /> */}
          {errorMsg && <h3>{errorMsg.response.data.error}</h3>}
        </div>
      </div>
    </>
  );
}
