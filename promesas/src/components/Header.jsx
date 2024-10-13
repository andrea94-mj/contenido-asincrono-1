import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <>
        <header className="Header">
        <div className="Header-div"> 
          <h1 className="Header-h1">Promesas</h1>
          <nav className="Header-nav">
            <ul className="Header-ul">
              <li className="Header-li"><NavLink to={"/"}>Inicio</NavLink></li>
              <li className="Header-li"><NavLink to={"pokeApi"}>PokeApi</NavLink></li>
              <li className="Header-li"><NavLink to={"storeApi"}>StoreApi</NavLink></li>
              <li className="Header-li"><NavLink to={"randomUser"}>RandomUser</NavLink></li>
           </ul>
          </nav>
        </div>
        </header>
        </>
    )
}

export default Header