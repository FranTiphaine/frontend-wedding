import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from "react-bootstrap";

import '../../styles/layout/Navbar.css'

function Navigator() {
    return (
        <Navbar collapseOnSelect className="Navegator" expand="lg" fixed= "top">
            <Container>
                <Navbar.Brand as={Link} to="/" href="/">Casamiento Cami & Fran</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className=" responsive-navbar-nav justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/" href="/">Bienvenidos</Nav.Link>
                        <Nav.Link as={Link} to="asistencia" href="asistencia">Asistencia</Nav.Link>
                        <Nav.Link as={Link} to="ubicacion" href="ubicacion">Ubicación</Nav.Link>
                        <Nav.Link as={Link} to="regalos" href="regalos">Regalos</Nav.Link>
                        <Nav.Link as={Link} to="novedades" href="novedades">Novedades</Nav.Link>
                        <Nav.Link as={Link} to="contacto" href="contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigator;

