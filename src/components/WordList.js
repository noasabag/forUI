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
     <div>

    
    <div className="wordlist-cont">

      <div className="wordlist-contain"> 
           <h4 style={{textAlign:'center'}}> Dictonary Management</h4>

         <div className="">
          <div className="word-title ">
          <h5> Word</h5>
          <div  className="flex">
            <p>
            more details 
            </p> 
            <div className='drop-symbol' 
            >
            &#8964;
            </div>
          </div>
          </div>
          
          <p> word translation</p>
          
         </div>

         <div className="box-align">
         <h5> Word</h5>
         <p className="box-align"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  </p>
         </div>

         <div className="box-align">
         <h5>Synonims</h5>
         <p className="box-align"> lorem, ipsum, dolor, sit, ameto  </p>
         </div>

         <div className="box-align">
         <h5> Examples</h5>
         <p className="box-align"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  </p>
         </div>

         <div className="box-align">
         <h5> Source</h5>
         <p className="box-align"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing sem enim velit dui feugiat ac molestie nore comm sed. Pretium in ut sit quis vulputate cursus sed natoque. Risus sit quam tortor viverra. Vitae hendreriad arcu et eu nisi, sit felis consectetur. Iaculis quisque scelerisque cras mauris, orci integer nisl lectus morbi  </p>
         </div>
         


      </div>
      
    
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
    <div >
        <p style={{textAlign:'center'}}> Learn new words</p>
        <div className="flex">
          <button className=" display-text">
            Display text
          </button>
        </div>
      </div>
    </div>
  );
};
export default WordList;
