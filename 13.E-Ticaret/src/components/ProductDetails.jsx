import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import '../css/ProductDetails.css';
import { useState } from 'react';
import { addToBasket, calculateBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)

    const { price, image, title, description } = selectedProduct;

    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const addBasket = () => {

        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }

        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }

    useEffect(() => {
        getProductById();
    }, [])


    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));

            }
        })
    }

    return (

        <div className='detail'>

            <div className='detail-image '>
                <img src={image} width={300} height={500} />
            </div>

            <div className='detail-text' >

                <h1 className='detail-titel '>{title}</h1>
                <p className='detail-desc'>{description}</p>
                <h1 className='detail-price'>{price}$</h1>

                <div className='detail-icon'>
                    <FaPlus onClick={increment} className='detail-plus-icon' /> <span className='detail-span'>{count}</span>
                    <FaMinus onClick={decrement} className='detail-min-icon' />
                </div>
                <div>
                    <button className='detail-sepet-button' onClick={addBasket}  >Sepete Ekle</button>
                </div>

            </div>


        </div >
    )
}

export default ProductDetails