import "./HomePage.css";

import { Header } from "../components/Header/Header";
import { Search } from "../components/Search/Search";
import { List } from "../components/Lists/Lists";
import { Favourites } from "../components/Favourites/Favourites";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export function HomePage(){
    return (
        <div>
           <header>
               <Header/>
            </header> 
            <main >
                <Search/>
                <List/>
            </main>
            <aside className="favourite">
                <Favourites/>
                <div className="icondiv">
                          <FontAwesomeIcon
                            icon={faBars}
                            className="icon2"
                          />
                        </div>
            </aside>
        </div>
    )
}