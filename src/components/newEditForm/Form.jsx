import React from 'react';
import { useState, } from 'react';
import "./Form.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"


const API = import.meta.env.VITE_APP_API_URL;

function Form() {
    const [form,setForm] = useState({
        name: "",
        type: "",
        cost: "",
        isFavorite: false})
        
        const navigate = useNavigate()
        const {id} = useParams()

function submitNewCandy(event){
    event.preventDefault()

axios.post(`${API}/candy`,form)
.then((res) => navigate(`/candy/${res.data.id}`)
.catch((err)=>console.log(err))
)}

function submitNewEditForm (event){
    event.preventDefault()

    axios.put(`${API}/candy/${id}`,{
        form,
        name: (form.name)
})
    .then(res => navigate(`/candy/${id}`))
    .catch(err => console.log(err))
}


        function handleTextInput(event){
           
        const id = event.target.id
        const value = event.target.value  
        
        setForm((currentState)=>{
            return{
                ...currentState,
                [id]:value
            }

               
            
        })
          
            
        }
       function handleCheckbox(event){
        const id = event.target.id
        const checked = event.target.checked

        setForm({...form,[id]:checked})
       } 

    return (
       <>
            <form className='form' 
            onSubmit={(e)=>{
                id ? submitNewEditForm(e):
                submitNewCandy(e)
            }}
           > 
                
{/* {*title} */}
<label htmlFor='name'>
    
    <input
    id= "name"
    type="text"
    value={form.name}
    placeholder='Name'
    required
    onChange={(e)=>{handleTextInput(e)}}/>
    </label>

<label htmlFor='type'>
   
    <input
    id= "type"
    type="text"
    value={form.type}
    placeholder='Type'
    required
    onChange={(e)=>{handleTextInput(e)}}/>
    </label>
<label htmlFor='cost'>
    
    <input
    id= "cost"
    type="number"
    value={form.cost}
    placeholder='Cost'
    required
    onChange={(e)=>{handleTextInput(e)}}/>
    </label>
    
<label htmlFor='isFavorite'>
    
    <input
    id= "isFavorite"
    type="checkbox"
    value={form.isFavorite}
   
    checked={form.isFavorite}
    onChange={(e)=>{handleCheckbox(e)}}/>
    </label>
 
   <input className='formSubmitButton'

    type='submit'
    value={id? "Edit A Candy": "Add A Candy"}/>
            </form> 
    
    </>
    )}
        
export default Form;