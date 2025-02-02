import React from 'react'

type ATMTextFieldProps = {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
const ATMTextField :React.FC<ATMTextFieldProps> = ({label, placeholder, value, onChange}) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor="">{label}:</label>
      <input
      className='px-2 py-1 hover:bg-sky-200 border-1 rounded'
       placeholder={placeholder}
       value={value}
       onChange={onChange}
        />
    </div>
  )
}

export default ATMTextField
