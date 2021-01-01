import React from 'react'
import { useParams } from 'react-router-dom';


function ProductView() {
    const { id } = useParams();
    return (
        <div>Workinmg on it.... {id}</div>    
    );
}

export default ProductView;