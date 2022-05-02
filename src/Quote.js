import React from "react";
import axios from "axios";
const swansonQuotesUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"

const Quote = () => {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(swansonQuotesUrl).then((response) => {
      setPost(response.data);
      console.log(response.data);
    }
    ).catch(error => {
      return console.log(error)
    })
    ;
  }, []);
  if (!post) return null;

  return <div>{post}</div>;
};

export default Quote;


