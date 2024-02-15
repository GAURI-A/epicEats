import Shimmer from './Shimmer'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const RestoMenu=()=>{
const[resInfo,setResInfo]=useState(null)
const {resId}=useParams();
console.log(resId);

useEffect(()=>{
fetchMenu();
},[]);

const fetchMenu=async()=>{
    const data=await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4392432&lng=73.8580788&restaurantId="+resId    )

    const json=await data.json();
    console.log(json)
    setResInfo(json.data)
    
}; 
if (resInfo===null ) return < Shimmer/> ;
const {name,costForTwoMessage,cuisines}= resInfo?.cards[0]?.card?.card?.info;

 const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
return (
   <div className='restoMenu'>
  <h1>MENU</h1>
  <h2>{name}</h2>
  <p> {costForTwoMessage} <br />
    { cuisines.join(", ")}</p>
    <ul>
        <li>{itemCards[0].card.info.name}</li>
       {  itemCards.map((item)=> <li key={item.id}>
        {item.card.info.name} - Rs. 
        {item.card.info.price /100}
        </li> )
         }
    </ul>
  </div>
)
}
export default RestoMenu