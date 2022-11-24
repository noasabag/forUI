import axios from "axios";
import React, { useEffect, useState } from "react";

const WordList = () => {
  const [a, seta] = useState([]);
  const option = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const wordList = () => {
    axios("http://localhost:3001/word/wordslist", option).then((res) => {
      seta(res.data);
    });
  };
  useEffect(wordList, []);

  return (
    <div className="wordlist-cont">

    
    <ul>
      {a.map((ob) => {
        return (
          <li>
            {ob.word}
            {"-"}
            {ob.translate}
          </li>
        );
      })}
    </ul>
    </div>
  );
};
export default WordList;
