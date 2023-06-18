import React from 'react'
import { Link } from 'react-router-dom'

export default function Event(props) {
  const {e: evento} = props

  function createMarkup(str) {
    return {__html: str}
  }

  return (
    <div className='flex md:flex-row flex-col gap-5 mb-5'>
        <img src={evento.Poster} alt={evento.EventName} width={300} className='max-w-[300px] md:self-center m-auto' />
        <div className='flex flex-col justify-between'>
            <div>
              <h2 className='font-semibold text-2xl'>{evento.EventName}</h2>
              <h3 className='font-normal text-indigo-600 text-base'>{evento.Date} - {evento.Time}</h3>
              <div className='py-4' dangerouslySetInnerHTML={createMarkup(evento.Description)}/>
            </div>
            <Link to={`/events/${evento.id}`} className='mt-5 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm leading-5 font-semibold text-white shadow-sm hover:opacity-75'>Ver detalles</Link>
        </div>
    </div>
  )
}

/*self-end justify-self-end place-self-end my-auto  */