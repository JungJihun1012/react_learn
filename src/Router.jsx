import { createBrowserRouter } from "react-router-dom";
import SubPage from "./components/subpage";
import App from "./App";

const Router = createBrowserRouter([
    {
        path: "/sub",
        element: <SubPage />
    },
    {
        path: "/",
        element: <App />
    }
]);

export default Router;