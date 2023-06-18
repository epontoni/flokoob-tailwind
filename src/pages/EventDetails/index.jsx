import React, { useEffect, useState } from 'react'
import './EventDetails.css'
import axios from 'axios'
import Papa from 'papaparse'
import { Link, useParams } from 'react-router-dom'
import PageNotFound from '../PageNotFound'

export default function EventDetails(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams()
  const [evento, setEvento] = useState({})
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7Crx3ZNjuPcaWPq_5vG2H4_UsasDoss4qM1sjKnjnurbq_qly7ovPeeU1ymB3pqQf8eAvy8OPniga/pub?output=csv";
  
  function createMarkup(str) {
    return {__html: str}
  }

  useEffect(() => {
    const getEventos = async () => {
      try {
        const response = await axios
          .get(url, { responseType: "blob" })
          .then((response) => {
            return new Promise((resolve, rejec) => {
              Papa.parse(response.data, {
                header: true,
                complete: (results) => resolve(results.data.find( evento => evento.id === params.id) ),
                error: (error) => rejec(error.message),
              });
            });
          });
        setData(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al solicitar los eventos:", error);
      }
    };

    getEventos();

  }, []);

  return (
    <main>
      { isLoading ?
        <div className="text-center my-5">Loading...</div> :
        data ?
        (<div className='max-w-[80rem] mx-auto px-5'>
          <h2 className='tracking-tight font-bold text-3xl leading-9 m-0 md:text-left text-center mb-5'>{data.EventName}</h2>
          <h3><i className="ri-calendar-2-line"></i>{data.Date} - {data.Time}</h3>
          <h3><i className="ri-map-pin-line"></i><Link to={data.Circuit}>{data.Location}</Link></h3>
          <img src={data.Poster} alt={`Evento ${data.EventName}`} />
          <div className='py-2' dangerouslySetInnerHTML={createMarkup(data.Description)}/>
          <h3>Circuito</h3>
          <iframe src={data.Circuit} width={300} height={300} title={`Circuito ${data.EventName}`} />
          <Link to={data.Registration? data.Registration : 'https://wa.me/5493584328924?text=*Hola%20Flokoob*%0ATengo%20una%20consulta%20que%20realizarles.'} className='mt-5 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm leading-5 font-semibold text-white shadow-sm hover:opacity-75'>Inscripciones</Link>
        </div>) :
        <PageNotFound />
      }
    </main>
  )
}
