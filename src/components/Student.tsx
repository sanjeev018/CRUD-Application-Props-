import react , { useState } from 'react'
import StudentForm from './StudentForm';

interface Student {
  name: string;
  email: string;
  mobile: string;
  batch: string;
}

const Student = () => {
 
  const [students, setStudents] = useState<Student[]>([])

  // const resetForm = () => { 
  //   setName('')
  //   setEmail('')
  //   setMobile('')
  //   setBatch('') 
  // }

const handleSubmit = (values:any) => { 
  console.log( "values",values)
// const data = { 
//   name,
//   email,
//   mobile,
//   batch,
//   gender:"MALE",
//   id: `${name}-${mobile}`
// };
// setStudents([...students])
// resetForm()

// console.log(data)
}

  return (
    <div className='flex'>
      {/* Student Data */}
     <StudentForm handleSubmit={handleSubmit} /> 
        {/* Student Table */}
        <div className='grow'>
<table width="100%" style={{borderCollapse: "collapse"}}>
  <thead className='border-2'>
    <tr>
    <th align='left'> Name </th>
    <th align='left'> Gender </th>
    <th align='left'> Email </th>
    <th align='left'> Mobile </th>
    <th align='left'> Batch </th>
    </tr>
  </thead>
  <tbody className='border-2'>
    {students?.map((student: any, index:any)=> { 
      return ( 
        <tr key={index}>
           <td>{student?.name}</td>
           <td>{student?.gender}</td>
           <td>{student?.email}</td>
           <td>{student?.mobile}</td>
           <td>{student?.batch}</td>
         </tr> 
      )
    })} 
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Student
