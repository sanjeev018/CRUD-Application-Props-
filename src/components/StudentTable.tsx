import React from 'react'

interface Student {
  id:string;
  name: string;
  gender: string;
  email: string;
  mobile: string;
  batch: string;
}

interface StudentTableProps {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
  setSelectedStudent: React.Dispatch<React.SetStateAction<Student | null>>; 
   // Define students as an array of Student objects
}

const StudentTable: React.FC<StudentTableProps> = ({students, setStudents , setSelectedStudent}) => {

  const handleDelete = (studentId:string) => { 
  const filtedStudents = students.filter((student)=> { 
    return student?.id !== studentId
  })
  setStudents(filtedStudents)
  }

  const handleEdit = (student:Student) => { 
setSelectedStudent(student)
  }
  return (
    <div>
         <div className=''>
<table width="100%" style={{borderCollapse: "collapse"}}>
  <thead className='border-2'>
    <tr>
    <th align='left'> Name </th>
    <th align='left'> Gender </th>
    <th align='left'> Email </th>
    <th align='left'> Mobile </th>
    <th align='left'> Batch </th>
    <th align='left'> Actions </th>
    </tr>
  </thead>
  <tbody className='border-2'>
    {students?.map((student: any)=> { 
      return ( 
        <tr key={student?.id}>
           <td>{student?.name}</td>
           <td>{student?.gender}</td>
           <td>{student?.email}</td>
           <td>{student?.mobile}</td>
           <td>{student?.batch}</td>
           <td> 
           <div className='flex gap-1'>
             <button
            onClick={()=> {handleEdit(student)}}
            className='bg-blue-500 px-3 text-white rounded-md border border-black cursor-pointer'   
             >
               Edit
             </button>

           <button 
            type='button' 
            onClick={()=> handleDelete(student?.id)}
            className='bg-red-500 text-white rounded-md border border-black cursor-pointer'
            >
               Delete 
            </button>
             </div> 
            </td>
         </tr> 
      )
    })} 
  </tbody>
</table>
        </div>
    </div>
  )
}

export default StudentTable
