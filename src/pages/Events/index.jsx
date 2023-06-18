import React, { useEffect, useState } from 'react'
import './Events.css'
import Event from '../../components/Event'
import axios from 'axios'
import Papa from 'papaparse'

export default function Events() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7Crx3ZNjuPcaWPq_5vG2H4_UsasDoss4qM1sjKnjnurbq_qly7ovPeeU1ymB3pqQf8eAvy8OPniga/pub?output=csv";

  useEffect(() => {
    const getEventos = async () => {
      try {
        const response = await axios
          .get(url, { responseType: "blob" })
          .then((response) => {
            return new Promise((resolve, rejec) => {
              Papa.parse(response.data, {
                header: true,
                complete: (results) => resolve(results.data),
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
    <main className='flex flex-col max-w-[80rem] mx-auto px-5'>
      <h2 className='tracking-tight font-bold text-3xl leading-9 m-0 md:text-left text-center mb-5'>Próximos eventos</h2>
      <div className='flex flex-col'>
        {isLoading ? <div className='text-center py-10'>Loading...</div> : data.map( evento => <Event key={evento.EventName} e={evento} />)}
      </div>
    </main>
  )
}
