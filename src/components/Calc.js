import React, { useState } from 'react';

function Calc() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0);

  const add = () => {
    setSum(a + b);
  };

  const handleInput = (e) => {
    if (e.target.id === 'a') {
      setA(Number(e.target.value));
    } else {
      setB(Number(e.target.value));
    }
  };

  return (
    <div>
      <input id='a' type='text' value={a} onChange={handleInput} />
      <input id='b' type='text' value={b} onChange={handleInput} />
      <button onClick={add}>+</button>
      <p>{sum}</p>
    </div>
  );
}
export default Calc;
