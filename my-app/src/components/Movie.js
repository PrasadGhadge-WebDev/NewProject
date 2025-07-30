import React from 'react'

export default function Movie() {
  return (
    <div>
      <h3>Movie Booking </h3>
      <space>  </space>

    <div class="container my-5 d-flex justify-content-center" >
    <div className="row" > 
      <div className="card my-3" style={{ width: '18rem',margin:'16px'}} >
        <img src="first.jpeg" ></img>
        <div className="card-body">
          <h5 className="card-title">Creater</h5>
          <p className="card-text">$500</p>
          <a href="#" className="btn btn-primary">BOOK NOW</a>
        </div>
      </div>

      <div className="card my-3" style={{ width: ' 18rem',margin:'16px' }}>
        <img src="second.jpeg" ></img>
        <div className="card-body">
          <h5 className="card-title">OBLIVION</h5>
          <p className="card-text">$200</p>
          <a href="#" className="btn btn-primary">BOOK NOW</a>
        </div>
      </div>

      <div className="card my-3" style={{ width: ' 18rem',margin:'16px' }}>
        <img src="3rd2.jpeg" ></img>
        <div className="card-body">
          <h5 className="card-title">Padmavat</h5>
          <p className="card-text">$800</p>
          <a href="#" className="btn btn-primary">BOOK NOW</a>
        </div>
      </div>
      </div>
      </div>
     
      
     <div class="container  my-5 d-flex justify-content-center">
    <div className="row">
      <div className="card my-3" style={{ width: ' 18rem',margin:'16px' }}>
        <img src="4th.jpeg" ></img>
        <div className="card-body">
          <h5 className="card-title">TALASH</h5>
          <p className="card-text">$600</p>
          <a href="#" className="btn btn-primary">BOOK NOW</a>
        </div>
      </div>

      <div className="card my-3" style={{ width: ' 18rem',margin:'16px' }}>
        <img src="5th.jpeg" ></img>
        <div className="card-body">
          <h5 className="card-title">Little Mermaid</h5>
          <p className="card-text">$300</p>
          <a href="#" className="btn btn-primary">BOOK NOW</a>
        </div>
      </div>

      <div className="card my-3" style={{ width: ' 18rem',margin:'16px' }}>
        <img src="6th.jpeg" ></img>
        <div className="card-body">
          <h5 className="card-title">SMILE</h5>
          <p className="card-text">$700</p>
          <a href="#" className="btn btn-primary">BOOK NOW</a>
        </div>
      </div>
    </div>
    </div> 


    </div>
  )
}

