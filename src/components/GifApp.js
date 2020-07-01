import React, {useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setcategories] = useState(['One Punch']);
/* 
    const handleAdd = () => {
        //setcategories([...categories, 'Naruto']);
        setcategories(cats => [...cats, 'Naruto']);
    } */

    return (
        <>
            <h2>Desde Gif</h2>
            <AddCategory setcategories={setcategories} />
            <hr />
            
            
            
            <ol>
                {categories.map(category => (
                    <GifGrid key={category}
                        category={category}
                    />
                ))}
            </ol>
       </>
    );
}
 
export default GifApp;