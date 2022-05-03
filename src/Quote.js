import React,{useState, useEffect} from "react";
import axios from "axios";
const swansonQuotesUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"

const Quote = () => {
const [quote ,setQuote] = useState({}) // store the quote from api request
const [errorMessage , setErrorMessage ] = useState("") // the error message strored in the errorMessage state
const [loadingQuote, setLoadingQuote] = useState(false) // loading quote state to toggle between loader view and data view
const [quoteCopied, setQuoteCopied] = useState(false) // after copying quote should show success 
  

useEffect(() => {
    axios.get(swansonQuotesUrl).then((response) => {
      setPost(response.data);
      console.log(response.data);
    }).catch(error => {return console.log(error)});
  }, []);

 const newQuote = {

 }
  return (
    <div>
  <div style={{marginTop: 60}}>{post}</div>
  <div>
    <button style={{marginTop: 20 , backgroundColor:"blue", color:"white", borderRadius:'22px'}}>New Quote</button> 
    </div>
  </div>
  )
};

export default Quote;


// need to have a empty object for the quote 
  // need to have state 