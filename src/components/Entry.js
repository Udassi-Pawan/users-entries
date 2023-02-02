import "./Entry.css";

const Entry = function (props) {
  return (
    <div>
      <p className="entry">
        {props.user} ({props.agee} years old)
      </p>
    </div>
  );
};

export default Entry;
