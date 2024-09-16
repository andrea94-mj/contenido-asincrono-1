import { createBrowserRouter } from "react-router-dom";

import Pokemon from "../components/pokemon";
import Layout from "../Layout";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,

    children: [
        {
            path: "pokemons",
            element: <Pokemon/>,
        }
    ]
}])

export default router;