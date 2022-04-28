import groupArray from "./helpers/groupArray";
import "./App.css";
import { useReducer } from "react";
import { ACTION_TYPES, defaultState, reducer } from "./state/state";
import setClass from "./helpers/setClass";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  console.log(state);

  const setSetShips = () => {
    dispatch({ type: ACTION_TYPES.SET_SET_SHIPS_MODE });
  };

  const setShips = (id) => {
    if (state.player1.isSetShipsMode) {
      dispatch({ type: ACTION_TYPES.SET_SHIPS, square: id });
    }
  };

  const {
    player1: { isSetShipsMode, ships },
  } = state;

  return (
    <div className={setClass(isSetShipsMode, "set-ships-mode")}>
      {groupArray().map((row) => (
        <div className="row">
          {row.map((square) => (
            <div
              onClick={() => setShips(square)}
              className={`${setClass(ships.has(square), "ship")} square`}
            ></div>
          ))}
        </div>
      ))}
      <button onClick={setSetShips}>Set Ships</button>
    </div>
  );
}

export default App;
