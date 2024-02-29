import React from 'react';
import { useState } from 'react';

function Form() {
    const [form,setForm] =useState({
        name: "",
        type: "",
        cost: "",
        isFavorite: false})
        
        function handleTextInput(event){
            
        }


    return (
       
            <form className='form'>
{/* {*title} */}
<label htmlFor='name'>
    <input
    id= "name"
    type="text"
    value={form.name}
    required
    onChange={(e)=>(handleTextInput)}/>
</label>
            </form> 
    
    );
}

export default Form;