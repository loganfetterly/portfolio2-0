import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

type Props = {}

function ContactMe({}: Props) {

    const { 
        register,
        handleSubmit,
    } = useForm<Inputs>();
    // Contact Submit Button Functionality
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:lfetterly25@gmail.com?subject=${formData.subject}&body=Hello,\n\n${formData.message}\n\nFrom ${formData.name}`
    };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10 pr-5'>
            
            <div className='space-y-5 pl-5'>
                <div className='flex items-center space-x-5 justify-start'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-md font-semibold md:text-2xl md:font-normal'>7809080717</p>
                </div>
                <div className='flex items-center space-x-5 justify-start'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-md font-semibold md:text-2xl md:font-normal'>lfetterly25@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-start'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-md font-semibold md:text-2xl md:font-normal'>Edmonton, Alberta</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-[450px]'>
            
                <input {...register('name')} placeholder='Name' className='contactInput' type='text'></input>
                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text"></input>

                <textarea rows={10} {...register('message')} placeholder='Message' className='contactInput resize-none overflow-y-scroll max-h-[150px] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'/>
                <button
                type='submit'
                className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe