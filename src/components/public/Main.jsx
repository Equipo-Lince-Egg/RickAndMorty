import React from 'react' 
import Cards from './Cards.jsx'

 
export default function Main() {

    return (

        <main>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Rick and Morty</h1>
                        <p className="lead text-body-secondary">Quieres ver los primeros 20 personajes ?</p>
                        <p>
                            <a href="#" className="btn btn-dark my-2">Mostrar los personajes</a>
                           
                        </p>
                    </div>
                </div>
            </section>

            <Cards /> 

                    
        </main>

    )
}
