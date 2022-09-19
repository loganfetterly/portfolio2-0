import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'
import { url } from 'inspector'

type Props = {
    experience: Experience
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            opacity: 1, y:0
        }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center bg-white'
        src={urlFor(experience?.companyImage).url()}
        alt=""
        ></motion.img>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Software Developer</h4>
            <p className='font-bold text-2xl mt-1'>CGI Inc.</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech used */}
                {experience.technologies.map(technology => (
                    <img
                    key={technology._id}
                    className='h-10 w-10 rounded-full'
                    src={urlFor(technology.image).url()}
                    />
                ))}
            </div>
            <p className='my-3'>
                {new Date(experience.dateStarted).toDateString()} -{" "}
                {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-2 ml-5 text-lg h-[160px] overflow-y-scroll scrollbar-thin scrollbar-track-black-400/20 scrollbar-thumb-[#F7AB0A]/80 pr-5'>
                {experience.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>   
        </div>
    </article>
  )
}

export default ExperienceCard