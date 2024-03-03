import React from 'react';
import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react"
import axios from 'axios';


const API = import.meta.env.VITE_APP_API_URL


export default function CandyShow(){
  
    const[candyDetails setAllCandyDetails] = useState({})

    const {id} = useParams()

    useEffect(()=>{
        axios.get(`${API}/candy/${id}`)
        .then(response => setAllCandyDetails(response.data))
        .catch(err => console.log(err) )
    })

   
    return (
        <div className='CandyShow'>Show Page
            
        </div>
    );
}

