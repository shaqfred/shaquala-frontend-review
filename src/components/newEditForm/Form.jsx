import React from 'react';
import { useState, } from 'react';
import "./Form.css"
import { useNavigate, useParams } from 'react-router-dom';


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
    event.prevent.Default()

axios.post(`${API}/candy`,{...form, name: text(form.name)})
.then((res) => navigate(`/candy/${res.data.id}`)
.catch((err)=>console.log(err))
)}

function submitNewEditForm (event){
    event.preventDefault()

    axios.put(`${API}/candy/${id}`,{
        ...form,
        name:text (form.name)
})
    .then(res => navigate(`/candy/${id}`))
    .catch(err => console.log(err))
}


        function handleTextInput(event){
           
        const id = event.target.id
        const value = event.target.value  
        // setForm({...form,[id]:value})
        setForm((currentState)=>{
            return{
                ...currentState,
                [id]:value
            }

               
            
        })
          
            
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
    required
    onChange={(e)=>{handleTextInput(e)}}/>
</label>
<label htmlFor='type'>
    <input
    id= "type"
    type="text"
    value={form.type}
    required
    onChange={(e)=>{handleTextInput(e)}}/>
    </label>
<label htmlFor='cost'>
    <input
    id= "cost"
    type="number"
    value={form.cost}
    required
    onChange={(e)=>{handleTextInput(e)}}/>
    </label>
    <label htmlFor='isFavorite'>
    <input
    id= "text"
    type="boolean"
    value={form.isFavorite}
    required
    onChange={(e)=>{handleTextInput(e)}}/>
    </label>
    <input className='formSubmitButton'
    type='submit'
    value="Add A Candy"/>
            </form> 
    
    </>
    )}
        
export default Form;