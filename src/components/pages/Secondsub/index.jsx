import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

const SecondSub = () => {
    const [result, setResult] = useState();
    const handleAxios = async () => {
        try {
            const response = await axios.get('http://localhost:4744/user');
            setResult(response.data);
        } catch (error) {
            console.error("에러 발생 :", error);
        }
    }
    useEffect(() => {
        console.log(result);
    }, [result]);
    return (
        <>
            <Container>
                <div>SecondSub</div>
                <Button to='/'>MainPage</Button>
                <button onClick={handleAxios}>백엔드</button>
            </Container>
        </>
    )
}

const Container = styled.div`
    margin: 0;
    padding: 0;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;

const Button = styled(Link)`
    border: none;
    text-decoration: none;
    color: inherit;
    padding: 7px 10px;
    background-color: lightgray;
`;
export default SecondSub;