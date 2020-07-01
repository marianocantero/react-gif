import React from 'react';

const GifGirdItem = ({id, title, url}) => {

    
    return ( 
    <div className="card">
        <img  src={url} alt={title}/>
        <p>{title}</p>
    </div>
     );
}
 
export default GifGirdItem;