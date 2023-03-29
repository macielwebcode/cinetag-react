
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import PageBase from "pages/PageBase";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
       
            <Routes>
                <Route path="/" element={<PageBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
          
        </BrowserRouter>
    )
}

export default AppRoutes;