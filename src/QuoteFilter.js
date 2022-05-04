import React, {useState, useEffect} from 'react'
import axios from 'axios'

const QuoteFilter = () => {
    const [post,setPost] = useState(null)
useEffect(()=> {
axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes").then((response)=> {
    setPost(response.data)
    console.log(response.data)
})
},[])

if(!post)return null

    return( 
    <div>

    </div>
    )
}

export default QuoteFilter



// api call of quotes. 
    // pull api quotes with axios 
        // use map function to iterate through all quotes
            // search bar
                // filter through items in array of data
                    // javascript .icludes() method 
                        // comparing the text in search bar with array/object data 
                            // convert data and search to both .lowerCase()
                                // if searchText.toLowerCase().includes() data 
                                    // return filtered data 
                                        // else 
                                            // return null