import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";

import Home from "../pages/Home";
import PokeApi from "../pages/PokeApi";
import Pokemon from "../pages/Pokemon";
import StoreApi from "../pages/StoreApi";
import Producto from "../components/ProductoCard";
import RandomUser from "../pages/RandomUser";
import User from "../pages/User";




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
        },
        {
            path: "/storeApi",
            element: <StoreApi/>,
        },
        {
            path: "/storeApi/:id",
            element: <Producto/>,
        },
        {
            path: "/randomUser",
            element: <RandomUser/>,
        },
        {
            path: "/randomUser/:id",
            element: <User/>,
        }


    ]
}])

export default router;