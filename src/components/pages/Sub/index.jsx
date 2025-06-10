import { useState } from "react";
import { Link } from "react-router-dom"

const SubPage = () => {
    const [count, setCount] = useState(0);
    return(
        <>
            <div>SubPAge!!</div>
                <div>{count}</div>
                <button onClick={() => setCount(count + 1)}>증가</button>
                <button onClick={() => setCount(count - 1)}>감소</button>
            <Link to='/secondsub'>SecondPage</Link>
        </>
    )
}

export default SubPage;