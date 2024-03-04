import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react"
import axios from 'axios';
import './CandyShow.css'


const API = import.meta.env.VITE_APP_API_URL


export default function CandyShow(){
  
    const[candyDetails, setCandyDetails] = useState({})

    const {id} = useParams()
    const navigate=useNavigate
    
    function handleDelete (){
        axios.delete(`${API}/candy/${id}`)
        .then(res => navigate("/candy"))
        .catch(err => console.log(err))
    }

    useEffect(()=>{

        axios.get(`${API}/candy/${id}`)
        .then(res => setCandyDetails(res.data))
        .catch(err => console.log(err))
        
    },[id])

   
    return (
       <>
            <h2>{candyDetails.name}</h2>
            <span>{candyDetails.type}</span>
            <span>{candyDetails.cost}</span>
            <span>{candyDetails.isFavorite ? "yes" : "no"}</span>
      
        <aside className='candyShow_buttons'>
            <Link to={`/candy/${id}/edit`}>Edit</Link>
            <button
            onClick={() => handleDelete}>
                Delete</button>
        </aside>
        </>
    );
}

