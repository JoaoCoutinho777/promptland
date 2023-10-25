import React from 'react'

const Button = ({label, secondary, fullWidth, large, onClick, disabled, outline}) => {
  return (
    <button disabled={disabled}
    onClick={onClick}
    className={`disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition border-2
        ${fullWidth ? 'w-full' : 'w-fit'}
        ${secondary ? 'bg-white' : 'bg-red-500'}
        ${secondary ? 'text-back' : 'text-white'}
        ${secondary ? 'border-black' : 'border-red-500'}
        ${large ? 'text-xl' : 'text-md'}
        ${large ? 'px-5' : 'px-4'}
        ${large ? 'py-3' : 'py-2'}
        ${outline ? 'bg-transparent' : ''}
        ${ outline ? 'boder-white' : ''}
        ${ outline ? 'text-white' : ''}
        `}>
        {label}
    </button>
  )
}

export default Button