import { createBrowserRouter } from "react-router-dom";
import SubPage from "../components/pages/sub";
import Main from "../components/pages/main";
import SecondSub from "../components/pages/secondsub";


const Router = createBrowserRouter([
    {
        path: "/sub",
        element: <SubPage />
    },
    {
        path: "/",
        element: <Main />
    },
    {
        path: '/secondsub',
        element: <SecondSub/>
    }
]);

export default Router;