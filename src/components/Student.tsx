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

const Student= () => {
 
  const [students, setStudents] = useState<Student[]>([])
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null) 

const handleSubmit = (values:any, resetForm:any) => { 
  const {name, email, mobile, batch, gender} = values

const data = { 
  name,
  email,
  mobile,
  batch,
  gender,
  id: `${name}-${mobile}`
};
setStudents([...students , data],)
resetForm?.();
}

const handleUpdate = (values:Student, resetForm?:()=>void) => { 
  const result = students?.map((student)=> { 
    if(student?.id == selectedStudent?.id){ 
      student = { 
        ...values,
        id: selectedStudent?.id,
      };
    }
    return student;
  })
  setStudents(result)
  resetForm?.(); 
  setSelectedStudent(null)
}

  return (
    <div className='w-full'>
      {/* Student Data */}
      <div className='flex'>
      <div>
     <StudentForm 
     handleSubmit={handleSubmit} 
     handleUpdate={handleUpdate}
     selectedStudent={selectedStudent} 
     /> 
     </div>
     <div className='grow'>
        {/* Student Table */}
     <StudentTable students={students} setStudents={setStudents} setSelectedStudent={setSelectedStudent}/> 
     </div>
     </div>
    </div>
  )
}

export default Student
