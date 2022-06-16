import React from "react";
import './Card.css';
import data from '../object'
export default function Card({ input }) {
    //let [item,setItem] = useState(data);
    let filterItem = data.filter((ele) => ele.type.includes(input.input.toLowerCase()));
    //console.log(filterItem);
    //console.log(input.input);
    return (
        <>
            <div className="parent-card">
                {
                    filterItem.length === 0 ?
                        data.map((ele) => {
                            return (
                                <div className="card-container">
                                    <div className="card-img-container">
                                        <img src={`${ele.image}`} alt="null" />
                                    </div>
                                    <div className="details">{ele.title} <br />RS.{ele.price}<br /> In Stock :-  {ele.totalQuantity} <br />
                                        <button onClick={()=>input.addToCart(ele)}>Add to Cart</button></div>

                                </div>
                            )
                        }) : filterItem.map((ele) => {
                            return (
                                <div className="card-container">
                                    <div className="card-img-container">
                                        <img src={`${ele.image}`} alt="null" />
                                    </div>
                                    <div className="details">{ele.title} <br />RS.{ele.price}<br /> In Stock :-  {ele.totalQuantity} <br />
                                    <button onClick={()=>input.addToCart(ele)}>Add to Cart</button>
                                    </div>

                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}