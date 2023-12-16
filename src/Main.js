import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';



 function Main() {
  const navigate = useNavigate();
  

    const handlelick = () => {
        navigate('./Urun');
    };
    return (
      <div>
        <p>Main Component</p>
        <button onClick={handlelick}>URUNE GİT</button>

      </div>
    )
}
export default  Main;