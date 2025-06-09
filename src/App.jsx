import { useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <div>MainPage</div>
      <Link to="/sub">
        <button>버튼</button>
      </Link>
    </>
  )
}

export default App;