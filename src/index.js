import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count +1)}>Click Me</button>
    </div>
  );
}

ReactDOM.render (
  <Example />,
  document.getElementById('root')
);
