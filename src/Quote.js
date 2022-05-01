import React from 'react'
import axios from 'axios' 
const officeUrl =  'https://officeapi.dev/api/quotes' 
const Quote = () => {
    const [post, setPost] = React.useState(null)
React.useEffect(()=> {
axios.get(officeUrl).then((response)=>{
    setPost(response.data)
    console.log(response.data)
})
},[])
if(!post) return null 

return (
   <div>

   </div> 
) 
}

export default Quote

// const response = await axios.get(officeUrl)
// console.log(response)
//   {
//     "data": {
//         "_id": "5e9668186a66e65486e244a5",
//         "content": "Bears, Beets, Battlestar Galactica.",
//         "character": {
//           "_id": "5e93b4f03af44260882e33b1",
//           "firstname": "Jim",
//           "lastname": "Halpert",
//           "__v": 0
//         },
//         "__v": 0
//       }
//    }
    
