import React from 'react'



export default function Card({ personaje }) {

    return (
        
       
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img
          width="100%"
          src={personaje.image}
          alt="Img personajes"
        />
            <div className="card-body">
              <p className="card-text">{personaje.name}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary"/>
                  
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
           
          
    
    )
}
