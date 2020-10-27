export const R1_LEFT = 'row one left', R1_RIGHT = 'row one right', R2_LEFT = 'row two left', R2_RIGHT = 'row two right', R3_LEFT = 'row three left', R3_RIGHT = 'row three right', C1_UP = 'column one up', C1_DOWN = 'column one down', C2_UP = 'column two up', C2_DOWN = 'column two down', C3_UP = 'column three up', C3_DOWN = 'column three down', ROTATE_RIGHT = 'rotate right', ROTATE_LEFT = 'rotate left', ROTATE_UP = 'rotate up', ROTATE_DOWN = 'rotate down';

// export const actionaryShift = (text) => {
//     switch (text) {
//         case text === R1_LEFT: {
//             break;
//         }
//         case text === R1_RIGHT: {
//             break
//         }
//         case text === R2_LEFT: {
//             break
//         }
//         case text === R2_RIGHT: {
//             break
//         }
//         case text === R3_LEFT: {
//             break
//         }
//         case text === R3_RIGHT: {
//             break
//         }
//         case text === C1_UP: {
//             break
//         }
//         case text === C1_DOWN: {
//             break
//         }
//         case text === C2_UP: {
//             break
//         }
//         case text === C2_DOWN: {
//             break
//         }
//         case text === C3_UP: {
//             break
//         }
//         case text === C3_DOWN: {
//             break
//         }
//         default: return null;

//     }
// }

export const actionaryRotate = (state) => {
    if (state.currentSide === 'side-1' && state.leftSide === 'side-4' && state.rightSide === 'side-2' && state.backSide === 'side-3' && state.topSide === 'side-5' && state.bottomSide === 'side-6') {
        state.currentSide = 'side-2'
        state.leftSide = 'side-1'
        state.rightSide = 'side-3'
        state.backSide = 'side-4'
        state.topSide = 'side-5'
        state.bottomSide = 'side-6'
        console.log('fire check')
    } else if (state.currentSide === 'side-2' && state.leftSide === 'side-1' && state.rightSide === 'side-3' && state.backSide === 'side-4' && state.topSide === 'side-5' && state.bottomSide === 'side-6') {
        state.currentSide = 'side-3'
        state.leftSide = 'side-2'
        state.rightSide = 'side-4'
        state.backSide = 'side-1'
        state.topSide = 'side-5'
        state.bottomSide = 'side-6'
    } else if (state.currentSide === 'side-3' && state.leftSide === 'side-2' && state.rightSide === 'side-4' && state.backSide === 'side-1' && state.topSide === 'side-5' && state.bottomSide === 'side-6') {
        state.currentSide = 'side-4'
        state.leftSide = 'side-3'
        state.rightSide = 'side-1'
        state.backSide = 'side-2'
        state.topSide = 'side-5'
        state.bottomSide = 'side-6'
    } else if (state.currentSide === 'side-4' && state.leftSide === 'side-3' && state.rightSide === 'side-1' && state.backSide === 'side-2' && state.topSide === 'side-5' && state.bottomSide === 'side-6') {
        state.currentSide = 'side-1'
        state.leftSide = 'side-4'
        state.rightSide = 'side-2'
        state.backSide = 'side-3'
        state.topSide = 'side-5'
        state.bottomSide = 'side-6'
    } else if (state.currentSide === 'side-1' && state.leftSide === 'side-2' && state.rightSide === 'side-4' && state.backSide === 'side-3' && state.topSide === 'side-6' && state.bottomSide === 'side-5') {
        state.currentSide = 'side-4'
        state.leftSide = 'side-3'
        state.rightSide = 'side-1'
        state.backSide = 'side-2'
        state.topSide = 'side-6'
        state.bottomSide = 'side-5'
    } else if (state.currentSide === 'side-4' && state.leftSide === 'side-3' && state.rightSide === 'side-1' && state.backSide === 'side-2' && state.topSide === 'side-6' && state.bottomSide === 'side-5') {
        state.currentSide = 'side-3'
        state.leftSide = 'side-4'
        state.rightSide = 'side-2'
        state.backSide = 'side-1'
        state.topSide = 'side-6'
        state.bottomSide = 'side-5'
    }  else if (state.currentSide === 'side-3' && state.leftSide === 'side-2' && state.rightSide === 'side-4' && state.backSide === 'side-1' && state.topSide === 'side-6' && state.ROTATE_LEFT === 'side-5') {
        state.currentSide = 'side-2'
        state.leftSide = 'side-3'
        state.rightSide = 'side-1'
        state.backSide = 'side-4'
        state.topSide = 'side-6'
        state.bottomSide = 'side-5'
    }  
    return state
}