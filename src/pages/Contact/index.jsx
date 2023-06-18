import React, {useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import './Contact.css'

const YOUR_SERVICE_ID = 'service_ya1ojfe'
const YOUR_TEMPLATE_ID = 'template_l88531d'
const YOUR_PUBLIC_KEY = 'C-ujvaLzBGRjUPyQ2'

export default function Contact() {
  const [success, setSuccess] = useState(false)
  const formRef = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formRef.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          if (result.text === "OK"){
            setSuccess(true)
            const timeoutID = setTimeout(() => {
              setSuccess(false)
              clearTimeout(timeoutID)
              navigate('/');
            }, 4000)
          }
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <main className='max-w-[40rem] mx-auto px-5'>
      <h2 className='tracking-tight font-bold text-3xl leading-9 m-0 text-center'>¡Hablemos!</h2>
      <p className='my-2 text-lg leading-8 text-gray-600 text-center'>Si está interesado en trabajar con nosotros en su próximo evento, no dude en ponerse en contacto. En Flokoob estamos encantados de poder ayudarle.</p>
      {success ? <p className="py-5 text-green-600 text-center font-semibold">¡Hemos recibido tu mensaje!</p> : ''}
      <form className='my-16' ref={formRef} onSubmit={sendEmail}>
        <div className='flex flex-col'>
          <label htmlFor="name" className='leading-6 font-semibold text-sm'>Nombre completo</label>
          <input type='text' name='name' className='mb-4 ring-inset text-sm leading-6 ring-1 ring-gray-300 ring-offset-0 rounded-md py-2 px-3.5 ring-offset-indigo-600' />

          <label htmlFor="email" className='leading-6 font-semibold text-sm'>Correo electrónico</label>
          <input type="email" name='email' className='mb-4 ring-inset text-sm leading-6 ring-1 ring-gray-300 ring-offset-0 rounded-md py-2 px-3.5 ring-offset-indigo-600'/>

          <label htmlFor="message" className='leading-6 font-semibold text-sm'>Mensaje</label>
          <textarea name="message" id="" cols="30" rows="10" className='mb-4 ring-inset text-sm leading-6 ring-1 ring-gray-300 ring-offset-0 rounded-md py-2 px-3.5 ring-offset-indigo-600'></textarea>

          <button className='mt-5 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm leading-5 font-semibold text-white shadow-sm hover:opacity-75'>Enviar mensaje</button>
        </div>
      </form>
    </main>
  )
}
