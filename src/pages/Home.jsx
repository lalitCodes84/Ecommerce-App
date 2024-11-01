import React, { useEffect, useState } from 'react'

function Home() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    async function fetchData(){
     
      try{
        let res = await fetch("");
        let products = await res.json();
        setData(products);
      }catch(error){
        console.log({message:`Error Occured ${error}`})
      }
    }
    fetchData()
  },[])

  console.log(data);

  return (
    <div>Home</div>
  )
}

export default Home