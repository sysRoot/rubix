import React, { useEffect, useRef } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {ROTATE_LEFT} from '../utils/Actions/actionary'

const Side = () => {
    const sides = useSelector(state => state.sides)
    console.log(sides, 'sideToShow implemented')
    const side = useRef(sides.side1)
    const rotate = useDispatch()
    useEffect(() => {
        const sideToShow = () => {
            console.log(sides, 'look at me')
            switch (sides.currentSide) {
                case sides.currentSide === 'side-1': {
                    return side.current = sides.side1
                }
                case sides.currentSide === 'side-2': {
                    return side.current = sides.side2
                }
                case sides.currentSide === 'side-3': {
                    return side.current = sides.side3
                }
                case sides.currentSide === 'side-4': {
                    return side.current = sides.side4
                }
                case sides.currentSide === 'side-5': {
                    return side.current = sides.side5
                }
                case sides.currentSide === 'side-6': {
                    return side.current = sides.side6
                }
                default: return side
            }
        }
        sideToShow();
    })
    return (
        <div>
            <p>Rotate Cube Up</p>
            <div id="side-to-show">
                <p onClick={() => rotate({type: ROTATE_LEFT})}>Rotate Cube Left</p>
                {side.current.map((position, idx) => {
                    return (
                        <div key={idx}>
                            {position[0]},{position[1]},{position[2]}
                        </div>)
                })
                }
            </div><p>Rotate Cube Right</p>
            <p>Rotate Cube Down</p>
        </div>
    )
}

export default Side
