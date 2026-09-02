// === Module 1225: valueEqual ===

// Module 1225 (valueEqual)
function valueEqual(state, state2) {
  valueEqual = state;
  closure_1 = state2;
  if (state === state2) {
    return true;
  } else {
    if (null != state) {
      if (null != state2) {
        const _Array2 = Array;
        if (Array.isArray(state)) {
          const _Array = Array;
          return Array.isArray(state2) && state.length === state2.length && state.every((arg0, arg1) => state(arg0, state2[arg1]));
        } else {
          if (typeof state !== "object") {
            if (typeof state2 !== "object") {
              return false;
            }
          }
          if (state.valueOf) {
            let valueOfResult = state.valueOf();
          } else {
            const _Object = Object;
            const call = valueOf.call;
            valueOfResult = typeof call === "unknown" ? valueOf() : call(state);
          }
          if (state2.valueOf) {
            valueOfResult = state2.valueOf();
          } else {
            const _Object2 = Object;
            valueOf = Object.prototype.valueOf;
            const call2 = valueOf.call;
            valueOfResult = typeof call2 === "unknown" ? valueOf() : call2(state2);
          }
          if (valueOfResult === state) {
            if (valueOfResult === state2) {
              const _Object3 = Object;
              const _Object4 = Object;
              const keys = Object.keys(Object.assign({}, state, state2));
              let everyResult = keys.every((arg0) => state(state[arg0], state2[arg0]));
            }
            return everyResult;
          }
          everyResult = valueEqual(valueOfResult, valueOfResult);
        }
      }
    }
    return false;
  }
}

export default valueEqual;