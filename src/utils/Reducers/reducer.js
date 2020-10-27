import { state } from '../State/state'
import { actionaryRotate, R1_LEFT, R1_RIGHT, R2_LEFT, R2_RIGHT, R3_LEFT, R3_RIGHT, C1_UP, C1_DOWN, C2_UP, C3_UP, C3_DOWN, C2_DOWN, ROTATE_LEFT, ROTATE_RIGHT, ROTATE_UP, ROTATE_DOWN } from '../Actions/actionary'



export const reducer = (prevState = state, action) => {
    switch (action.type)  {
        // case (action.type === R1_LEFT): {
        //     break;
        // }
        // case (action.type === R1_RIGHT): {
        //     break;
        // }
        // case (action.type === R2_LEFT): {
        //     break;
        // }
        // case (action.type === R2_RIGHT): {
        //     break;
        // }
        // case (action.type === R3_LEFT): {
        //     break
        // }
        // case (action.type === R3_RIGHT): {
        //     break
        // }
        // case (stateaction.type === C1_UP): {
        //     break
        // }
        // case (action.type === C1_DOWN): {
        //     break
        // }
        // case (action.type === C2_UP): {
        //     break
        // }
        // case (action.type === C2_DOWN): {
        //     break
        // }
        // case (action.type === C3_UP): {
        //     break
        // }
        // case (action.type === C3_DOWN): {
        //     break
        // }
        case ROTATE_LEFT: {
            console.log('case triggered')
            const newState = {...prevState};
            const finalState = actionaryRotate(newState);
            return finalState;
        }
        // case (action.type === ROTATE_RIGHT): { break }
        // case (action.type === ROTATE_UP): { break }
        // case (action.type === ROTATE_DOWN): { break }
        default: return prevState
    }
}