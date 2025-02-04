import react , { useState } from 'react'
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

interface Student {
  name: string;
  email: string;
  mobile: string;
  batch: string;
  gender: string;
  id: string; 
}

const Student = () => {
 
  const [students, setStudents] = useState<Student[]>([])

const handleSubmit = (values:any, resetForm) => { 
  const {name, email, mobile, batch} = values

  console.log( "values",values)

const data = { 
  name,
  email,
  mobile,
  batch,
  gender:"MALE",
  id: `${name}-${mobile}`
};

console.log(data, "data")
setStudents([...students , data],)
resetForm()
}

  return (
    <div className='w-full'>
      {/* Student Data */}
      <div className='flex'>
      <div>
     <StudentForm handleSubmit={handleSubmit} /> 
     </div>
     <div className='grow'>
        {/* Student Table */}
     <StudentTable students={students}/> 
     </div>
     </div>
    </div>
  )
}

export default Student
