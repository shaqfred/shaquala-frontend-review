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
        <div className='CandyIndex gridCenter'>
          <h2>Browse Candy</h2>
          {
            allCandy.map((candyObj)=>{
              
              return <div className='CandyIndex_candyCard gridCenter'>
                
                <h3>{candyObj.name}</h3>
              <div>
                <span>{candyObj.type}</span>
                <span>{candyObj.cost}</span>
                <span>{candyObj.isFavorite ? "yes": "no"} </span>
              </div>
            
     
        </div>
            })
          }
          </div>
    

            )}
          
