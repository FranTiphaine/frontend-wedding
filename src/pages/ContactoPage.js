import React, {useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import '../styles/pages/ContactoPage.css';


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //form dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (

        <main className="ContenedorContacto">
            <section>
                <section className="textoContacto">
                    <h2>Dejanos un mensaje!</h2>
                    <h5> ¿No estás segura de tu vestido? ¿Alguna aclaración? Si tenés cualquier pregunta para
                        nosotros o nos querés comentar algo, ponelo acá y nos llegará directamente a nuestro mail.
                        ¡Gracias por tu mensaje!
                    </h5>
                </section>
                <section>
                    <form action="/contacto" method="post" className="formularioContacto" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                            <input className="form-control" type="text" name="nombre" placeholder="Escriba su nombre"
                                   value={formData.nombre} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Correo electronico</label>
                            <input className="form-control" type="text" name="email" placeholder="Tu correo electronico"
                                   value={formData.email} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Telefono</label>
                            <input className="form-control" type="text" name="telefono" placeholder="Tu telefono"
                                   value={formData.telefono} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Dejanos un
                                mensaje!</label>
                            <textarea className="form-control" name="mensaje" id="exampleFormControlTextarea1" rows="3"
                                      value={formData.mensaje} onChange={handleChange}></textarea>
                        </div>
                        <div className="botonEnvio">
                            <button type="submit" class="btn btn-dark "> Enviar mensaje!</button>
                        </div>
                    </form>
                    {sending ? <p> Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
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
    );
}

export default ContactoPage;