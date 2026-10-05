// === Module 1118: valueEqual ===

// Module 1118 (valueEqual)
function valueEqual(state, state2) {
  valueEqual = state;
  if (state === state2) {
    return true;
  } else {
    if (null != state) {
      if (null != state2) {
        const _Array2 = Array;
        if (Array.isArray(state)) {
          const _Array = Array;
          const tmp5 = Array.isArray(state2) && state.length === state2.length && state.every((item, index) => valueEqual(item, state2[index]));
          return tmp5;
        } else {
          let callResult;
          let valueOfResult2;
          if (typeof state !== "object") {
            if (typeof state2 !== "object") {
              return false;
            }
          }
          if (state.valueOf) {
            callResult = state.valueOf();
          } else {
            const _Object = Object;
            callResult = valueOf.call(state);
          }
          if (state2.valueOf) {
            valueOfResult2 = state2.valueOf();
          } else {
            const _Object2 = Object;
            const valueOf2 = Object.prototype.valueOf;
            valueOfResult2 = valueOf2.call(state2);
          }
          if (callResult === state) {
            let everyResult;
            if (valueOfResult2 === state2) {
              const _Object3 = Object;
              const _Object4 = Object;
              const keys = Object.keys(Object.assign({}, state, state2));
              everyResult = keys.every((item) => valueEqual(state[item], state2[item]));
            }
            return everyResult;
          }
          everyResult = valueEqual(callResult, valueOfResult2);
        }
      }
    }
    return false;
  }
}

export default valueEqual;