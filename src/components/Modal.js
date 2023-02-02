import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./Modal.css";

const Modal = function (props) {
  let classes = "modalwindow";

  const onbutton = function () {
    props.onbutton();
  };

  React.useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className.trim() == "blur") {
        // console.log(e.target.className);
        props.onbutton();
      }
    });
  });

  const message =
    props.hidden[1] == "empty" ? "Please give input" : "Negative input";
  if (props.hidden[0] !== "true") classes = classes + " hatao";
  return (
    <div className={classes}>
      <h4>Invalid input</h4>
      <p>{message}</p>
      <button onClick={onbutton}>Okay</button>
    </div>
  );
};

export default Modal;
