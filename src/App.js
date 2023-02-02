import "./App.css";
import Card from "./components/Card";
import UserInput from "./components/UserInput";
import Entry from "./components/Entry";
import { useState } from "react";
import Modal from "./components/Modal";
import Blur from "./components/Blur";

const entries = [
  { user: "Ganesh Gaitonde", userage: "21" },
  { user: "Babu Bhaiya", userage: "31" },
];

function App() {
  const onbuttonclick = (e) => {
    setmod("");
  };

  const addEntry = function (formdata) {
    // entries.push(formdata);

    if (formdata.user == "" || formdata.userage == "") {
      setmod(["true", "empty"]);
      return;
    }
    if (Number(formdata.userage) < 0) {
      setmod(["true", "negative"]);
      return;
    }
    setEntries((prev) => {
      return [formdata, ...prev];
    });
  };

  const [entriesVar, setEntries] = useState(entries);

  const [showmodvar, setmod] = useState(["", ""]);

  return (
    <div className="App">
      <Blur hidden={showmodvar}></Blur>
      <Modal hidden={showmodvar} onbutton={onbuttonclick}></Modal>

      <Card>
        <UserInput onformsubmit={addEntry}></UserInput>
      </Card>

      <Card>
        {entriesVar.map((e, ind) => (
          <Entry key={ind} user={e.user} agee={e.userage}></Entry>
        ))}
      </Card>
    </div>
  );
}
export default App;
