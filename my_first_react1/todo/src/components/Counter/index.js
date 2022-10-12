import React, { useState } from 'react'

function Counter() {
    
    const [ counter, setCounter ] = useState(0);
    const inc = () => {
        setCounter(counter +1)
    }

    const dec = () => {
        setCounter(counter -1)
    }
    return <div>        
    <p>{counter}</p>
    <button onClick={inc}>Увеличить на 1</button>
    <button onClick={dec}>Уменьшить на 1</button>
  </div>
}

export default Counter