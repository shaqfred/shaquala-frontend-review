import React from 'react';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react"
import axios from 'axios';
import './CandyShow.css'


const API = import.meta.env.VITE_APP_API_URL


export default function CandyShow(){
  
    const[candyDetails, setAllCandyDetails] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`${API}/candy/${id}`)
        .then(response => setAllCandyDetails(response.data))
        .catch(err => console.log(err))
    },[id])

   
    return (
        <div className='CandyShow'>
            <h2>{candyDetails.name}</h2>

            <span>{candyDetails.type}</span>
            <span>{candyDetails.cost}</span>
            <span>{candyDetails.isFavorite ? "yes" : "no"}</span>
        </div>
    );
}

