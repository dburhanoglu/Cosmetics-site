import React, { Component,useState } from 'react'


function Ad() {
    const[nameValue,setNameValue] = useState('');
    const[isVisible,setIsVisible] = useState('');
    const handleNameChange=(e)=>{
        setNameValue(e.target.value);
    }
    const handleButtonClick = () => {
      setIsVisible(!isVisible);
      };

    return (
      <div>
        <input
        type='text'
        value={nameValue}
        onChange={handleNameChange}
        />
        <button onClick={handleButtonClick}>
        {isVisible ? 'Gizle' : 'Göster'}
      </button>

        {isVisible && <p>Hoşgeldin {nameValue}</p>}
      </div>
    );
 
}
export default Ad;
