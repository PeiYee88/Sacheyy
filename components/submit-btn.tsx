import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
const { pending } = useFormStatus();

  return (
    <button type="submit"
            className= "group gap-2 flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 rounded-full outline-none transition-all text-white disabled:scale-100">
                {
                    pending ? <div className= "h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div> : (
                        <>
                        Submit 
                        <FaPaperPlane className='text-xs opacity-70 transition-all
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        '/> {" "}
                        </>
                    )
                }
               </button>
  )
};
