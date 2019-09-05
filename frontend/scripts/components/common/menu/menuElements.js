import React, { Component } from 'react';

export const Category = (props) => {
    return (
        <ul className={props.style ? 'category category--hide-arrow' : 'category'}>
            <li className="menu-item">{props.title.toUpperCase()}</li>
            <ul className='brands'>
                { props.brandslist.map((list, id) =>
                    <ul key={id} className='brands-list'>
                        <ProductGroup key={id} brandslist={list}/>
                    </ul>
                )}    
            </ul>
        </ul>
)};


const ProductGroup = (props) => {

    let result = [];

    for (let list in props.brandslist) {

        if (props.brandslist[list].length > 1) {
            result.push(
                <ul key={list}>
                    <Product key={list} products={props.brandslist[list]}/>
                </ul>
            )} else {
                result.push(
                    <ul key={list}>
                        <Product key={list} style={true} products={props.brandslist[list]}/>
                    </ul>
                )
            }
        }
    
    return result;
}; 

const Product = (props) => {
    return props.products.map((item, id) => {
        return id === 0 ? <li key={id} className={props.style ? 'title title--hidden' : 'title'}>{item.product.toUpperCase()}</li> : <li key={id}>{item.product}</li>;
    });
}