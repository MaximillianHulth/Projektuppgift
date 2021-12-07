import { useEffect, useState } from "react";
import "./Home.css"
import axios from "axios"; // så man kan fetcha API


function Home() {
  const [currentTime, setCurrentTime] = useState("")
  useEffect(()=>{
    
    async function getData() {
      try {
        const response = await axios.get("http://worldtimeapi.org/api/timezone/Europe/Stockholm")
        setCurrentTime(response.data.datetime.replace("T", " ").substring(0,16))
      } catch (error) {
        console.log(error) 
      }
      
    }
    getData()
    setInterval(getData(), 60000);
  } ,[])
  return (
      <>
      <div className="home-container">
          <img src="https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
          alt="" />
          <div className="home-text">
            <p>{currentTime}</p>
          <h1>Maximillian Hulth</h1>
          <p>Välkommen in till mig</p>
          </div>
      </div>
      
      </>
  );

}

export default Home;