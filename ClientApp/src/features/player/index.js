﻿import React from 'react'
import walkSprite from './characters.png'
import { connect } from 'react-redux'
import handleMovement from './movement'

function Player(props) {
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`, 
                backgroundPosition: '0 0',
                width: '30px',
                height: '33px',
            }}
        />
        
        )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player))