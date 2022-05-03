import React, { useState, useEffect } from "react";
import axios from "axios";
const swansonQuotesUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

const Quote = () => {
  const [post, setPost] = useState(false);
  const [quote, setQuote] = useState({}); // store the quote from api request
  const [errorMessage, setErrorMessage] = useState(""); // the error message strored in the errorMessage state
  const [loadingQuote, setLoadingQuote] = useState(false); // loading quote state to toggle between loader view and data view
  const [quoteCopied, setQuoteCopied] = useState(false); // after copying quote should show success

  async function fetchRandomQuote() {
    try {
      setLoadingQuote(true);
      setErrorMessage("");
      setQuoteCopied(false);
      const quoteObject = await axios.get(
        "https://api.quotable.io/random"
      );
      setQuote(quoteObject.data);
      setLoadingQuote(false);
    } catch (error) {
      setErrorMessage(error.errorMessage);
      setLoadingQuote(false);
    }
  }

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  function copyQuote(){
    navigator.clipboard.writeText(quote.content + "-" + quote.author)
    quoteCopied(true)
  }

  return (
    <div>
      <div style={{ marginTop: 60 }}>{quote.content}</div>
      <div>
        <button
        onClick= {fetchRandomQuote}
          style={{
            marginTop: 20,
            backgroundColor: "blue",
            color: "white",
            borderRadius: "22px",
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;

// need to have a empty object for the quote
// need to have state
