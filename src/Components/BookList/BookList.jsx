import React, { useState } from "react";
import "./BookLits.css"

import Description from "../Description/Description";

function BookList({book}) {
    

    const [showDescription,setShowDescription]=useState(false);
    const [BookItem, setBookItems]=useState();
  
    
    return ( <>

{  book.map((items)=> {
    let thumbnail= items.volumeInfo.imageLinks.smallThumbnail;
    let Author= items.volumeInfo.authors;
    let Book_title=items.volumeInfo.title;

    if( thumbnail != undefined){
        return(
            <>
         <div className="card" onClick={()=>{setShowDescription(true); setBookItems(items)}} >

    <img id="book-cover" src={thumbnail}></img> 

    <div className="book-deatails-container">

        <h2 id="book-title">{Book_title}</h2>
        
        <p id="author">{Author}</p>

    </div>
    </div>


        <Description show={showDescription} item={BookItem} onClose={()=>{setShowDescription(false)}} />
    

            
            </>)}

           

}) }

       


    </> );
}

export default BookList;