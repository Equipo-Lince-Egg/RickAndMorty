import React, { useEffect, useState } from 'react'
import Card from './Card'
import {  getAllCharacters } from '../../services/RickAndMorty.service'

export default function Cards() {
    const [personajes, setpersonajes] = useState([])

    useEffect(() => { //se encarga de una escucha activa de lo que pasa o cambia en mi componente para hacer lo que tenga q hacer
       getAllCharacters()
            .then((data) => setpersonajes(data.results))
            .catch((error) => console.log(error))

    }, []) //esta es la variable a escuchar constantemente para ver si cambia

    const cardList = personajes.map((p) => <Card personaje={p} key={p.id} />)
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                   { cardList }

                </div>
            </div>
        </div>
    )
}
