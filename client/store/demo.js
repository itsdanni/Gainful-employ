/**
 * example reducer, modify
 */
// Action Types
const DEMO = 'DEMO';

//Initial State
const state = '';

// Action Creators
export const newdemo = (demo) => ({type: DEMO, demo});


// Reducer
export default function(state = demo, action){
  switch (action.type) {
    case DEMO:
      return action.demo;
    default: return state;
  }
}
