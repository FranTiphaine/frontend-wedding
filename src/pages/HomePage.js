import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="contenedorPrincipalHome">
            <section className="contenedorHome1">
                <section className="Bienvenidos">
                    <h2>Bienvenidos a Nuestro Casamiento!</h2>
                </section>

                <section className="contenedorImagenes">
                    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/franycami1.jpg" className=" rounded mx-auto w-100"
                                     alt="Fran y Cami 2"></img>
                            </div>
                            <div className="carousel-item">
                                <img src="images/franycami2.jpg" className=" rounded mx-auto w-100"
                                     alt="Fran y Cami 2"></img>
                            </div>
                            <div className="carousel-item">
                                <img src="images/franycami3.jpg" className=" rounded mx-auto w-100"
                                     alt="Fran y Cami 3"></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
                <Card className="tarjeta">
                    <Card.Header>Un poco de nuestra historia...</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Nos conocimos hace casi 5 años y desde ese día elegimos compartir nuestra vida juntos.
                                Conectamos con muchas risas, miradas, anécdotas, salidas y viajes. Siempre decimos que
                                logramos
                                sacar lo mejor del otro y construir lo que nos gusta juntos.

                                <br/>
                                Hace poco decidimos celebrar nuestro amor casándonos. Dentro de todos esos momentos
                                compartidos
                                siempre estuvieron ustedes presente para acompañarnos. Por eso, en esta fecha tan
                                importante,
                                queremos invitarlos a disfrutar con nosotros toda la felicidad que sentimos de
                                encontrarnos en
                                esta vida.

                                <br/>
                                ¡Será una fiesta inolvidable!
                                <br/>
                                ¡Nos vemos pronto! ❤️{' '}
                            </p>
                            <p className="blockquote-footer">
                                P.D.:<cite title="Source Title">¡Confirmen su asistencia lo antes posible!</cite>
                            </p>
                        </blockquote>
                    </Card.Body>
                </Card>
            </section>
        </main>
    )
        ;
}

export default HomePage;