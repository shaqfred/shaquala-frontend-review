import React from 'react';
import {useEffect, useState} from "react"
import axios from 'axios';
import './CandyIndex.css'
 import { Link } from 'react-router-dom';




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
  //  console.log(allCandy)
    return (
        <div className='CandyIndex gridCenter'>
          <h2>Browse Candy</h2>
          {
            allCandy.map((candyObj)=>{
              return (
                <Link to={`/Candy/${candyObj.id}`}>
                  <div className='card' >
                    <h3>{candyObj.name}</h3>
                    <div>
                      <span>{candyObj.type}</span>
                      <span>{candyObj.cost}</span>
                      <span>{candyObj.isFavorite ? "yes": "no"} </span>
                    </div>
                  </div>
                </Link>
              )   
            })  
          }
        </div>
    )
}
