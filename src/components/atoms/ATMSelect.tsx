import React from 'react'

interface ATMSelectProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
    label: string;
    placeholder: string;
  }

const ATMSelect: React.FC<ATMSelectProps> = ({ value, onChange, options, label, placeholder}) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
       <select 
            value={value} 
            onChange={onChange}
            className='w-full border-1 py-1'
             >
              <option disabled>{placeholder}</option>
              {options?.map((batchEle)=> { 
                return( 
                  <option value={batchEle}>{batchEle}</option>
                )
              })}

            </select>
    </div>
  )
}

export default ATMSelect
