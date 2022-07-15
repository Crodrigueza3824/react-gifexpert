import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";



export const GifGrid = ({ category }) => {
    

    const [images, setImages] = useState([]);

    useEffect( ( ) => {
        getGifs(category)
        .then(newImages => setImages(newImages))
    }, [])

    
    

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">{ 
                    images.map( ( img )=> (
                        <GifItem 
                            key={ img.id }
                            url={ img.url} 
                            title={ img.title} 
                        />
                    ))
                }
            </div>

            
        </>
    )



}