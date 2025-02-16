import React, { useEffect, useState } from 'react'
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
  handleSubmit:(
    student:Student,
    resetForm:()=> void) => void,
    selectedStudent?: Student;
}

const StudentForm : React.FC<StudentFormProps> = ({handleSubmit , selectedStudent}) => {


      const initialValues = { 
        name:"",
        email:"", 
        mobile:"",
        batch:"",
        gender:"",
      }; 
      console.log(selectedStudent,"from initialValues")

      const [values, setValues] = useState(initialValues); 
      useEffect(()=> { 
        setValues(selectedStudent || initialValues)
      },[selectedStudent])
      // const {name , email  , mobile, batch, gender } = values

      const setFieldValue = (fieldName:keyof Student, value:string) => { 
        const newValues = { 
          ...values, 
          [fieldName]: value,
        };
        setValues(newValues);
      };
      
    const resetForm = () => { 
   setValues(initialValues)
  }

  const genderOptions = ["Male" , "Female", "Other"]
  const batches = ["Mern","Mean", "Mevn"]
  const indianMobileRegex = /^(?:\+91)?[6-9]\d{9}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const isValid = 
  indianMobileRegex.test(values?.mobile) 
  && emailRegex.test(values?.email)

  return (
    <div>
         <div className='p-1 bg-gray-200 w-xs' > 
            {/* {Name} */}
            <ATMTextField              
            label="Name" 
            placeholder='Enter your Name'
            value={values?.name}
            onChange={(e)=> setFieldValue("name" , e.target.value)}
            /> 

            {/* {Gender} */}
            <label htmlFor=""> Gender</label>              
            <div className='flex gap-x-1'>             
              {genderOptions.map((el)=> { 
                const isSelected = el === values?.gender   
                return( 
                  <button 
                  onClick={()=> setFieldValue("gender" , el)} 
                  className={isSelected ? "bg-blue-500 p-2 duration-300 ease-in text-amber-50 border-1":"p-2 border-1"}
                  key={el}
                  >
                    {el}
                  </button>
                )
              })}
            </div>

            {/* {Email} */}
            <ATMTextField 
            label="Email" 
            placeholder='Enter your Email'
            value={values?.email}
            onChange={(e)=> setFieldValue("email" , e.target.value)}
            /> 
            {/* {Mobile} */}
            <ATMTextField 
            label="Mobile"
            placeholder='Enter your Number'
            value={values?.mobile}
            onChange={(e)=> setFieldValue("mobile",e.target.value)}
             /> 
            {/* {Batch} */}
            <ATMSelect 
            value={values?.batch}
            onChange={(e)=> setFieldValue("batch" ,  e.target.value)}
            options={batches}
            placeholder={"Select batch"}
            label='Batch'
            /> 
            <button 
            disabled={!isValid} 
            type='submit' 
            onClick={()=>
              handleSubmit(
              {
              name:values?.name,
              email:values?.email,
              mobile:values?.mobile,
              batch:values?.batch,
              gender:values?.gender,
            },
            resetForm
            )} 
            className='bg-green-400 py-1 rounded-md w-full mt-2 cursor-pointer
             disabled:bg-amber-100 disabled:text-black'>
              Submit
              </button>
        </div>
    </div>
  )
}
export default StudentForm
