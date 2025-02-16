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

interface StudentFormProps {
  selectedStudent?: Student | null; 
}

// const StudentTable: React.FC<StudentTableProps> = ({students, setStudents , setSelectedStudent}) => {

const Student: React.FC<StudentFormProps> = () => {
 
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

// console.log(data, "data")
setStudents([...students , data],)
resetForm?.();
}

  return (
    <div className='w-full'>
      {/* Student Data */}
      <div className='flex'>
      <div>
     <StudentForm handleSubmit={handleSubmit} selectedStudent={selectedStudent || }/> 
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
