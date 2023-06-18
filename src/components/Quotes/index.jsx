import React, { useEffect, useState } from "react";
import {quotes} from '../../assets/quotes'
import './Quotes.css'

function Quotes() {
    const [quote, setQuote] = useState(null);
    
    const quoteList = quotes.map(
        quote => (
        <blockquote key={quote.id} className="quote">
            {quote.quote}
            <span className="quote--author">{quote.author}</span>
        </blockquote>
        ));
    
    const getRandomQuote = () => {
        const randomNumber = Math.floor(Math.random() * quoteList.length)
        setQuote(quoteList[randomNumber])
    }

    useEffect( () => {
        getRandomQuote()
        
        const quoteInterval = setInterval(getRandomQuote, 5000);
        
        return () => clearInterval(quoteInterval);
    }, []);

  return (
    <div>
        {
            quote
        }
    </div>
  )
}

export default Quotes