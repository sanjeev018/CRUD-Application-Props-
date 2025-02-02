import React, { useState } from 'react'
import ATMTextField from './atoms/ATMTextField';

interface Student {
    name: string;
    email: string;
    mobile: string;
    batch: string;
  }
  


const StudentForm = ({handleSubmit}) => {
     const [name , setName] = useState<string>("")
      const [email , setEmail] = useState<string>("")
      const [mobile , setMobile] = useState<string>("")
      const [batch , setBatch] = useState<string>("")
    
  return (
    <div>
         <div className='p-1 bg-gray-200 w-xs' > 
            {/* {Name} */}
            <ATMTextField
            label="Name" 
            placeholder='Enter your Name'
            value={name}
            onChange={(e)=> setName(e.target.value)}
            /> 

            {/* {Gender} */}

            <div>
                <input name='Gender' type="radio" />
            </div>

            {/* {Email} */}
            <ATMTextField 
            label="Email" 
            placeholder='Enter your Email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            /> 
            
            {/* {Mobile} */}
            <ATMTextField 
            label="Mobile"
            placeholder='Enter your Number'
            value={mobile}
            onChange={(e)=> setMobile(e.target.value)}
             /> 

            {/* {Batch} */}
            <ATMTextField 
            label="Batch" 
            placeholder='Enter your Batch'
            value={batch}
            onChange={(e)=> setBatch(e.target.value)}
            />   
            <button type='submit' onClick={handleSubmit} className='bg-green-400 py-1 rounded-md w-full mt-2 cursor-pointer'>Submit</button>
        </div>
    </div>
  )
}

export default StudentForm
