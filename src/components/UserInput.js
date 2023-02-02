import { useState } from "react";
import "./UserInput.css";

const UserInput = function (props) {
  const doOnClick = function (e) {
    e.preventDefault();
    const formdata = {
      user: username,
      userage: age,
    };
    alterusername("");
    alterage("");
    props.onformsubmit(formdata);
  };

  const [username, alterusername] = useState("");
  const [age, alterage] = useState("");

  const userchange = (e) => {
    alterusername(e.target.value);
    // console.log(username);
  };

  const agechange = (e) => {
    alterage(e.target.value);
    // console.log(age);
  };

  return (
    <form>
      <label>Username</label>
      <input type="text" value={username} onChange={userchange}></input>
      <label>Age(Years)</label>
      <input type="number" value={age} onChange={agechange}></input>
      <button onClick={doOnClick}>Add User</button>
    </form>
  );
};

export default UserInput;
