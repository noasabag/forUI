import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import DisplayText from "./DisplayText";

const GetText = () => {
  const [dbText, setDbText] = useState("");
  const [textTitle, setTextTitle] = useState("");
  console.log("text" + "  " + textTitle);
  useEffect(() => {
    if (textTitle !== "") {
      axios(`http://localhost:3001/text/getText/${textTitle}`)
        .then((text) => {
          setDbText(text.data.text);
          // setTextTitle(text.data.title);
        })
        .catch((e) => {
          console.log("error");
          return e;
        });
    }
  }, [textTitle]);

  return (
    <div className="test3">
    <div className="getText-cont"> 
    <div>
      <select
        name="text"
        style={{margin:'0 auto'}}
        onChange={(e) => {
          setTextTitle(e.target.value);
        }}
        //value={textTitle}
      >
        <option disabled selected value>
          select text
        </option>

        <optgroup label="level 1">
          <option value="Absolute Success is Luck. Relative Success is Hard Work.">
            Absolute Success is Luck. Relative Success is Hard Work.
          </option>
        </optgroup>
        <optgroup label="level 2">
          <option value="noa is the best">noa is the best</option>
        </optgroup>
      </select>
      {textTitle ? (
        <DisplayText title={textTitle} text={dbText} />
      ) : (
        <h2>cant decide which one?</h2>
      )}
    </div>
    </div>
    </div>
  );
};

export default GetText;
