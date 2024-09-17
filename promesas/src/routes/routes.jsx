import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PokeApi from "../pages/PokeApi";
import Layout from "../Layout";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,

    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "pokeApi",
            element: <PokeApi/>,
        }
    ]
}])

export default router;