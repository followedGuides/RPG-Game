import React from 'react'

function MapTile(props) {
        return <div>0</div>
}

function MapRow(props) {
    return(
    <div className='row'>
    {
        props.tiles.map(tile => <MapTile value={tile} />)
    }

   </div>)
}

function Map(props) {
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '700px',
                heigth: '350px',
                border: '0px solid white',
                margin: '350px',

            }}


        >
            {
                props.tiles.map(row => <MapRow tiles={row} /> )
            }
           
        </div>
        
        )
}

export default Map