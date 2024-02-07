import React from 'react';
import './Homescreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../Request';


function Homescreen() {
  return (
    <div className='homeScreen'>
        <Nav/>

         <Banner/>
         <Row
         title="NETFLIX ORIGINALS"
         fetchUrl={requests.fetchNetflixOriginals}
         isLargeRow ={true}       
          
         />
         <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
         <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
         <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasy}/>
         <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
         <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies}/>
         <Row title="Science-Fiction Movies" fetchUrl={requests.fetchScifiMovies }/>
         <Row title="Thriller Movies" fetchUrl={requests.fetchThriller}/>
         <Row title="War Movies " fetchUrl={requests.fetchWar}/>
        


      
    </div>
  )
}

export default Homescreen
