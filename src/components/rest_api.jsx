import axios from "axios";
import { useEffect } from "react";

const RestApi = () => {
    const getData = async () =>  {
        const back = await axios.get("/localhost:4744/user")
        console.log(back);
    }
    useEffect(() => {
            getData();
        }, []); 
    return (
        <></>
    )
}

export default RestApi;