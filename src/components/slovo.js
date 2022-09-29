import React from 'react'

function Slovo({item}) {
  return (
    <div className="slovo">
        <div>
            <h2>{item["cz"]}</h2>
            <h2 className='de'>{item["de"]}</h2>
        </div>
        <div>
            <h3>
                {item["mn. c"]}
            </h3>
        </div>
    </div>
  )
}

export default Slovo