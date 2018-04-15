// actions/index.js
const INCREMENT = { type: 'INCREMENT' }
const DECREMENT = { type: 'DECREMENT' }

export function increment() {
  return INCREMENT;
}
export function decrement() {
  return DECREMENT;
}