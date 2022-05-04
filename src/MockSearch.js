import React,{useState} from 'react'
import Data from './mock-data.json'

const MockSearch = () => {
const [searchText,setSearchText] = useState("")

    return(
        <div>
            <div style={{marginTop:60}}>
                <input placeholder='find the correct user'/>
            </div>
            {Data.map((post)=> {
                console.log(post)
                return(
                <div key={post.id}>
                    <p>{post.first_name}</p>
                    <p>{post.gender}</p>

                </div>
                )
            })}
        </div>
    )
}
export default MockSearch


// the keys identify off id number of the object in the array of mock json data