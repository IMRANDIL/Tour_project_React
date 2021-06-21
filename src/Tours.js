import React from 'react';
import Tour from './Tour';
const Tours = ({tour,removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>

      </div>

      <div>
        {tour.map((tor)=>{
          return <Tour key={tor.id} {...tor} removeTour={removeTour}/>
        })}
      </div>
    </section>
  )
};

export default Tours;
