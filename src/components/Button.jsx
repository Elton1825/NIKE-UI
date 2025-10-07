import React from 'react'

const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center border px-7 py-4 gap-2 font-montserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:
     "bg-coral-red border-coral-red text-white"} rounded-full  ${fullWidth && 'w-full'}"}`}>
        {label}

        {iconURL && <img 
            src={iconURL}
            alt='rigth arrow button'
            className=' ml-2 rounded-full w-5 h-5'
        /> }
    </button>
  )
}

export default Button