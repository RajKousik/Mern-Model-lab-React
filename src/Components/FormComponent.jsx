import React, { useState } from 'react'

const FormComponent = () => {

    
    const [data, setData] = useState({
        firstName : "",
        lastName : "",
        age : "",
        gender : "",
        aadharNumber : ""
    })

    const handleClick = (e) =>{
        setData((prev)=>(
            {
                ...prev, 
                [e.target.name] : e.target.value
            }
        ));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(data);
    }

  return (
    <div className='wrapper'>
        <div className='container'>
        <form onSubmit = {handleSubmit}>
            <h3>Bank Account Form</h3>
            
            <div className = 'mb-3'>
                <label>FirstName</label>
                <input 
                    type = 'text'
                    className = 'form-control input-field'
                    value = {data.firstName}
                    onChange = {handleClick}
                    name = 'firstName'
                    placeholder='Enter Your First Name'
                    required
                />
            </div>

            <div className = 'mb-3'>
                <label>Last Name</label>
                <input 
                    type = 'text'
                    className = 'form-control input-field'
                    value = {data.lastName}
                    onChange = {handleClick}
                    name = 'lastName'
                    placeholder='Enter Your Last Name'
                    required
                />
            </div>

            <div className = 'mb-3'>
                <label>Age</label>
                <input 
                    type = 'text'
                    className = 'form-control input-field'
                    value = {data.age}
                    onChange = {handleClick}
                    name = 'age'
                    placeholder='Enter Your Age'
                    required
                />
            </div>

            <div className = 'mb-3'>
                <label>Gender(M/F)</label>
                <input 
                    type = 'text'
                    className = 'input-field'
                    value = {data.gender}
                    onChange = {handleClick}
                    name = 'gender'
                    placeholder='Enter Your Gender'
                    required
                />
            </div>

            
            <div className = 'mb-3'>
                <label>Aadhar No</label>
                <input 
                    type = 'text'
                    className = 'form-control input-field'
                    value = {data.aadharNumber}
                    onChange = {handleClick}
                    name = 'aadharNumber'
                    placeholder='Enter Your Aadhar Number'
                    required
                />
            </div>

            <div className='d-grid'>
                <button 
                    type='submit' 
                    className='btn input-field '
                >
                    Create Account
                    </button>
            </div>


        </form>
        </div>
    </div>

  )
}

export default FormComponent