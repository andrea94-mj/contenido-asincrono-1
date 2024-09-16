import {Outlet, Link, NavLink} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/Layout.css'
import router from './routes/routes';
import Pokemon from './components/pokemon';

function Layout() {
  

  return (
    <>
      <h1>¡FIESTA DE API'S!</h1>
      <ul>
        <li><NavLink to={"pokemons"}></NavLink></li>
      </ul>

      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout
