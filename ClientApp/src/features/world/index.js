import React from 'react'
import Player from '../player'
import Map from '../map'
import { tiles } from '../../data/maps/1'

function World(props) {
    return (
        <div
            style={{
                position: 'relative',
                height: '700 px',
                width: '350 px',
                backgroundColor: 'green',
                border: '4px solid white',
                margin: '20px auto'
            }}
        >
            <Map tiles={tiles}/>
            <Player />
        </div>
        )
}


export default World