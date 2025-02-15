import React, { useState } from 'react'

interface Student {
  name: string;
  gender: string;
  email: string;
  mobile: string;
  batch: string;
}

interface StudentTableProps {
  students: Student[]; // Define students as an array of Student objects
}

const StudentTable: React.FC<StudentTableProps> = ({students}) => {
  const [selectedStudent, setSelectedStudent] = useState(null)
  console.log(selectedStudent)
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
           <td> <button type='button' onClick={()=> setSelectedStudent(student)}> Edit </button>  </td>
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
