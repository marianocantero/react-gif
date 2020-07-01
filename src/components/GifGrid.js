import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGirdItem from './GifGirdItem';
//import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {

    const { data: images, loading} = useFetchGifs(category);
    console.log(loading)
   
   

      
           
        return ( 
        <>

            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            { loading ? 'Cargando...' : 'Data cargada'}
             <div className="card-grid">
                
                {
                    images.map( img =>(
                        <GifGirdItem 
                            key={img.id}
                            {...img}
                        />
                    ) 

                    )
                }
            </div>  
        </>
            );
    
}
 
export default GifGrid;