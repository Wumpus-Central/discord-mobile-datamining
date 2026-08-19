// _runtime/01228_valueEqual.js
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
          return Array.isArray(state2) && state.length === state2.length && state.every((item, index) => state(item, state2[index]));
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
              let everyResult = keys.every((item, index) => state(state[item], state2[item]));
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