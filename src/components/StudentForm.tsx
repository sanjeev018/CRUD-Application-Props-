import React, { useState } from 'react'
import ATMTextField from './atoms/ATMTextField';
import ATMSelect from './atoms/ATMSelect';

interface Student {
    name: string;
    email: string;
    mobile: string;
    batch: string;
    gender:string;
  }

interface StudentFormProps { 
  handleSubmit:(student:Student, resetForm:()=> void) => void; 
}

const StudentForm : React.FC<StudentFormProps> = ({handleSubmit}) => {
     const [name , setName] = useState<string>("")
      const [email , setEmail] = useState<string>("")
      const [mobile , setMobile] = useState<string>("")
      const [batch , setBatch] = useState<string>("")
      const [gender , setGender] = useState<string>("")

      console.log(batch, "batch")

    const resetForm = () => { 
    setName('')
    setEmail('')
    setMobile('')
    setBatch('') 
    setGender('')
  }

  const genderOptions = ["Male" , "Female", "Other"]
  const batches = ["Mern","Mean", "Mevn"]
  const isValid = mobile.length === 10
    
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
            <label htmlFor=""> Gender</label>
            
            <div className='flex gap-x-1'>
              {genderOptions.map((el)=> { 
                const isSelected = el === gender
                return( 
                  <button 
                  onClick={()=> setGender(el)} 
                  className={isSelected ? "bg-blue-500 p-2 duration-300 ease-in text-amber-50 border-1":"p-2 border-1"}
                  key={el}
                  >
                    {el}
                  </button>

                )
              })}
             
            </div>

            {/* <label htmlFor="">Gender</label>
           <div>
                <input 
                name='gender' 
                value="MALE" 
                onChange={()=> {setGender("MALE")}} 
                type="radio"
                id='MALE'
                checked={gender == "MALE"}
                />
                <label htmlFor="MALE">Male</label>
                <input 
                name='gender' 
                value="FEMALE" 
                onChange={()=> {setGender("FEMALE")}} 
                type="radio"
                id='FEMALE'
                checked={gender == "FEMALE"}
                />
                <label htmlFor="FEMALE">Female</label>

                <input 
                name='gender' 
                value="OTHER" 
                onChange={()=> {setGender("OTHER")}} 
                type="radio"
                id='OTHER'
                checked={gender == "OTHER"}
                />
                <label htmlFor="OTHER">Other</label>
            </div> */}

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
            <ATMSelect 
            value={batch}
            onChange={(e)=> setBatch(e.target.value)}
            options={batches}
            placeholder={"Select batch"}
            label='Batch'
            /> 
            <button disabled={!isValid} type='submit' onClick={()=> handleSubmit(
              {
              name,
              email,
              mobile,
              batch,
              gender,
            },
            resetForm
            )} className='bg-green-400 py-1 rounded-md w-full mt-2 cursor-pointer'>Submit</button>
        </div>
    </div>
  )
}

export default StudentForm
