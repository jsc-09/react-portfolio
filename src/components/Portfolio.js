import React from 'react'
import portfolios from '../components/portfolio.json'
import '../styles/foundation.css'


export default function Portfolio() {

  console.log(portfolios.portfolio[0])

  return (
    <div>
           <div >
                <h3>Sample Work</h3>
            </div>

      <div className="grid-container">
        <div class="grid-x grid-margin-x small-up-2 medium-up-4 grid-padding-y">

          {portfolios.portfolio.map((p) => (


            <div className="cell" >
              <div className="card">
                <img src={p.image} alt={p.name}/>
                <div class="card-section">
                  <h4>{p.name}</h4>
                  <p>{p.tech}</p>
                  <p>{p.description}</p>
                  <button className="hollow button">< a href={p.github}>View on Github</a></button>
                  <br></br>
                  <button className="button hollow"><a href={p.website}>View Webpage</a></button>
                </div>
              </div>
            </div>











          ))}


        </div>
      </div>


    </div>
  )
}
