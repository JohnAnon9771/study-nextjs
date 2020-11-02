import { useState } from 'react';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(state => state + 1)}>+</button>
      <p>{count}</p>
      <button onClick={() => setCount(state => state - 1)}>-</button>
    </div>
  );
};

export default Home;
