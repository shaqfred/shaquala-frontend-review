import React from 'react';
import {useEffect, useState} from "react"
import axios from 'axios';


const API = import.meta.env.VITE_APP_API_URL

export default function CandyIndex() {

  const [allCandy, setAllCandy] = useState([])

  function getAllCandy(){
    axios.get(`${API}/candy`)
    .then(res => setAllCandy(res.data))
   .catch(error=> console.log(error))
  }
  useEffect(()=>{
getAllCandy()
  },[])
    return (
        <div>
          {
            allCandy.map((candyObj)=>{
              return <div>
                <span>{candyObj.name}</span>
                <span>{candyObj.type}</span>
              </div>
            })
          }
        </div>
    );
}

