export const ACTION_TYPES = {
  SET_SHIPS: "SET_SHIPS",
  SET_SET_SHIPS_MODE: "SET_SET_SHIPS_MODE",
};

export const defaultState = {
  player1: {
    isSetShipsMode: false,
    ships: new Set(),
  },
  player2: {},
  turn: "player1",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_SET_SHIPS_MODE: {
      return {
        ...state,
        player1: {
          ...state.player1,
          isSetShipsMode: !state.player1.isSetShipsMode,
        },
      };
    }
    case ACTION_TYPES.SET_SHIPS: {
      let newShips = new Set([...state.player1.ships]);
      newShips.add(action.square);
      return { ...state, player1: { ...state.player1, ships: newShips } };
    }
    default:
      return state;
  }
};
