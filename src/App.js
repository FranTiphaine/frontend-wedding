import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fontsource/cormorant-garamond';
import {BrowserRouter, Routes, Route} from "react-router-dom";


import Navigator from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import AsistenciaPage from "./pages/AsistenciaPage";
import RegalosPage from "./pages/RegalosPage";
import ContactoPage from "./pages/ContactoPage";
import UbicacionPage from "./pages/UbicacionPage";
import NovedadesPage from "./pages/NovedadesPage";

function App() {
    return (
        <div className="app holder">

            <BrowserRouter>
                <Navigator/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="ubicacion" element={<UbicacionPage/>}/>
                    <Route path="asistencia" element={<AsistenciaPage/>}/>
                    <Route path="regalos" element={<RegalosPage/>}/>
                    <Route path="novedades" element={<NovedadesPage/>}/>
                    <Route path="contacto" element={<ContactoPage/>}/>
                </Routes>
            </BrowserRouter>

            <Footer/>

        </div>
    );
}

export default App;