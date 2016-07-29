export const ADD_FURNITURE = 'ADD_FURNITURE';

/*
 * action creators
 */
export function addFurniture(furniture, room) {
  return {
    type: ADD_FURNITURE,
    furniture,
    room
  };
}
