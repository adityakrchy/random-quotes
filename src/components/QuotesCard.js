import React, { useEffect, useState } from 'react'

export default function QuotesCard(props) {
    const [quote, setQuote] = useState([]);
    useEffect(() => {
        const url = 'https://api.quotable.io/random';
        fetch(url)
            .then(quote => quote.json())
            .then(quote => setQuote(quote))


    }, [])
    const getQuote = () => {
        const url = 'https://api.quotable.io/random';
        fetch(url)
            .then(quote => quote.json())
            .then(quote => {
                console.log("Quote has been set")
                setQuote(quote)
            })

    }


    return (
        <>
            <div className="container my-3">
                <div className="card text-center">
                    <div className="card-header">
                        Author:  {quote.author}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{quote.tags}</h5>
                        <p className="card-text">{quote.content}</p>

                        <button onClick={getQuote} className="btn btn-primary">Random Quote</button>
                    </div>
                    <div className="card-footer text-muted">
                        {quote.dateModified}
                    </div>
                </div>
            </div>
        </>

    )
}
    // }