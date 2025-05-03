import React from "react";
import "./Description.css"



function Description({show, item,onClose}) {
    if(!show){
        return null;
    }
    let thumbnail= item.volumeInfo.imageLinks.smallThumbnail;
    let Author= item.volumeInfo.authors;
    let Book_title=item.volumeInfo.title;
    return ( <>

           <div className="Descriptions">

                <div className="showDescription">
                <button className="close" onClick={onClose}>  🡸 Go Back </button>
                <div className="inner-box">

              
                    <img src={thumbnail} alt="" id="desc-bookCover" />

                    <div className="info">
                        <h3 > {Book_title}</h3>
                        <h4 >Author: <span id="desc-author">{Author}</span></h4>

                        <h4 >publish date: <span id="publishdate">{item.volumeInfo.publishedDate}</span></h4>

                       
                    </div>
                 
                </div>
                <p className="description-detals">{item.volumeInfo.description}</p>
           </div>
           </div>
    </> );
}

export default Description;