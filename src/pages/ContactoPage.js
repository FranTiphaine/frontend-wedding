import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

import '../styles/pages/ContactoPage.css'

const FORM_ENDPOINT = "";

const ContactoPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="messageForm">
                    <h2>Gracias por tu mensaje!</h2>
                    <div>Nos vemos pronto!</div>
                </div>
            </>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <main className="ContenedorContacto">
                <section>
                    <section className="textoContacto">
                        <h2>Dejanos un mensaje!</h2>
                        <h5> ¿No estás segura de tu vestido? ¿Alguna aclaración? Si tenés cualquier pregunta para
                            nosotros o nos querés comentar algo, ponelo acá y nos llegará directamente a nuestro mail.
                            ¡Gracias por tu mensaje!
                        </h5>
                    </section>
                    <section className="formularioContacto">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                            <input className="form-control" type="text" placeholder="Escriba su nombre" name="firstName"
                                   required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Apellido</label>
                            <input className="form-control" type="text" placeholder="Escriba su apellido"
                                   name="lastName"
                                   required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Correo electronico</label>
                            <input className="form-control" type="email" placeholder="Tu correo electronico"
                                   name="email"
                                   required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Dejanos un
                                mensaje!</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="botonEnvio">
                            <button type="submit" class="btn btn-dark "> Enviar mensaje!</button>
                        </div>
                    </section>
                    <section className="fotoContacto">
                        <CardGroup>
                            <Card>
                                <Card.Img className="homeImage" src="images/pexels-cleyder-duque-6400831.jpg"/>
                            </Card>
                        </CardGroup>
                    </section>
                </section>
            </main>
        </form>
    );
}

export default ContactoPage;