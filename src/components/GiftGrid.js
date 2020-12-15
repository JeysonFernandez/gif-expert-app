import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({ category }) => {

    /*const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs( category )
            .then( imgs => setImages( imgs ))
    }, [category])*/


    const { data:images , loading } = useFetchGifs( category );


    return (
        <>
            
            <h3>{ category }</h3>
            <div className="card-grid">
                
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img } // envia las propiedaades
                            />
                        ))
                    }
                
            </div>
        </>
    )
}
