import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx'
import Shimmer from './components/Shimmer.jsx';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'
import About from './about.js';
import Contact from './contact.js';
import RestoMenu from './components/RestoMenu.jsx';
const RestoCard=({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  costForTwo,
  avgRating
})=>{
  
  return (
    <div className="resCard">
     <img className='resCardImg' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="img manchurian" />
 
      <h3>{name}</h3>
      <h4>{cuisines.join(' ,')} </h4>
      <h4> {costForTwo} </h4>
      <h4>{avgRating}stars</h4>
     
     </div>
  )
  
}    
const Body=()=>{
  const[listResto,setListResto]=useState([]);
  useEffect(()=>{
    fetchData();
  },[])

  

  const fetchData=async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4392432&lng=73.8580788&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   const json=await data.json();
   console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setListResto(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
  } ;


  if(listResto.length === 0) {
  return <Shimmer/>;
}
  return (
    <div className="body">
   
      <div className="filter">
        <button className='filter-btn' style={{cursor:'pointer'}} 
       onClick={
        ()=>{
         
         const filteredResto=listResto.filter((res)=>res.info.avgRating>4);
          // console.log(listResto);
           setListResto( filteredResto); // to update data on screen 
          } }>
      top rated
        </button>
        </div>
        <button 
        onClick={
          ()=>{
          const filter2Resto=listResto.filter((res)=>res.info.costForTwo <=150 )
          setListResto(filter2Resto)
          }
        }
        >
        
          price low
        </button>
      <div className="resContainer">
      { // to loop and show all resto from listresto array on screen 
        listResto.map((rest)=>(
       <Link className='text-link' key={rest.info.id} to={"/resto/"+rest.info.id}>
         <RestoCard  {...rest.info}/>
         </Link>
        ))
        
      }
      </div>
    </div>
  )
}
const Appcomp=function App() {
   return (
    <div className="App">
      {Header()}
      <Outlet/>
    </div>
  );
};
export const appRouter= createBrowserRouter([
{
  path:"/",
  element:<Appcomp/>,
  children:[
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }, 
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/resto/:resId",
      element:<RestoMenu/>
    }
]
}
])

export default Appcomp;
