import React from 'react'
import Player from '../player'
import Map from '../map'

function World(props) {
    return (
        <div
            style={{
                position: 'relative',
                height: '800 px',
                width: '800 px',
                backgroundColor: 'green',
                border: '4px solid white',
                margin: '20px auto'
            }}
        >
            <Map />
            <Player />
        </div>
        )
}


export default World