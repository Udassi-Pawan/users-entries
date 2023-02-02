import "./Blur.css";

const Blur = function (props) {
  const classes = `blur ${props.hidden[0] !== "true" ? "hatao" : ""}`;
  return <div className={classes}></div>;
};

export default Blur;
