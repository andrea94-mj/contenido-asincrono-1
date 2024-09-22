import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";

import Home from "../pages/Home";
import PokeApi from "../pages/PokeApi";
import Pokemon from "../pages/Pokemon";




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
        },
        {
            path: "pokeApi/:id",
            element: <Pokemon/>,
        }

    ]
}])

export default router;