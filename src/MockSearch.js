import React, { useState } from "react";
import Data from "./mock-data.json";

const MockSearch = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div style={{ marginTop: 60 }}>
        <input
          placeholder="find the correct user"
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>
      {/* {Data.filter(post => {
                if( searchText === ""){ 
               return post
                }else if(post.first_name.toLowerCase().includes(searchText.toLowerCase())){
                    return post
                
                }
            }) */}

      {Data.filter((post) => {
        if (searchText === "") {
          return post;
        } else if (
          post.first_name.toLowerCase().includes(searchText.toLowerCase())
        ) {
          return post;
        }
      }).map((post, index) => {
        console.log(post);
        return (
          <div key={index}>
            <p>{post.first_name}</p>
        </div>
        );
      })}
    </div>
  );
};
export default MockSearch;

// the keys identify off id number of the object in the array of mock json data
// need the onchange inside the search input to trigger event.target.value so it saves the users typed text into state and or a copy
// Then we will take the setSearchText compare prob use.includes.()

// Data.filter(post => {
//     if (searchText === "") {

//       return post;
//     } else if (post.title.toLowerCase().includes(searchText.toLowerCase())) {

//       return post;
//     }
//   })
