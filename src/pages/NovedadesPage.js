import {useState, useEffect} from "react";
import axios from "axios";
import NovedadItem from "../components/Novedades/NovedadItem";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/NovedadesPage.css'


const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            //const response = await axios.get('${process.env.REACT_API_API_URL}/api/novedades');
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className="novedadesPage">
            <h2>Novedades</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                                                       title={item.titulo} subtitle={item.subtitulo} body={item.cuerpo}
                                                       imagen={item.imagen}/>)
                )
            }
        </section>
    )
};

export default NovedadesPage;