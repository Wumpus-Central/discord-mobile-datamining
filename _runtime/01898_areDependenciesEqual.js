// _runtime/01898_areDependenciesEqual.js
const require = arg1;
const dependencyMap = arg6;
if (typeof Object.is === "function") {
  let _Object = Object;
  let fn = Object.is;
} else {
  fn = (arg0, arg1) => {
    let tmp = arg0 === arg1;
    if (tmp) {
      let tmp2 = 0 !== arg0;
      if (!tmp2) {
        tmp2 = 1 / arg0 === 1 / arg1;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      const _Number = Number;
      let isNaNResult = Number.isNaN(arg0);
      if (isNaNResult) {
        const _Number2 = Number;
        isNaNResult = Number.isNaN(arg1);
      }
      tmp = isNaNResult;
    }
    return tmp;
  };
}
function areDependenciesEqual(arr, arg1) {
  closure_0 = arg1;
  let tmp = !arr;
  if (arr) {
    tmp = !arg1;
  }
  if (!tmp) {
    tmp = arr.length !== arg1.length;
  }
  let everyResult = !tmp;
  if (!tmp) {
    everyResult = arr.every((item, index) => fn(item, __closure1[index]));
  }
  return everyResult;
}

export function ensureWorkletHandlers(arg0) {
  const entries = Object.entries(arg0);
  const reduced = entries.reduce((arr, item) => {
    [tmp, tmp2] = item;
    if (!obj.isWorkletFunction(tmp2)) {
      arr = arr.push(tmp);
    }
    return arr;
  }, []);
  if (reduced.length > 0) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error(
      '[Reanimated] Passed handlers that are not worklets. Only worklet functions are allowed. Handlers "' +
        reduced.join(", ") +
        '" are not worklets.',
    );
    throw error;
  }
}
export function areWorkletHandlersEqual(ChannelListLegendListTsx1, prevHandlers) {
  if (ChannelListLegendListTsx1) {
    if (prevHandlers) {
      const _Object = Object;
      const keys = Object.keys(ChannelListLegendListTsx1);
      const _Object2 = Object;
      return (
        keys.length === Object.keys(prevHandlers).length &&
        keys.every((item) => {
          let tmp3 = !tmp;
          if (ChannelListLegendListTsx1[item]) {
            tmp3 = !tmp2;
          }
          let tmp4 = !tmp3;
          if (!tmp3) {
            let tmp6 = fn(tmp, tmp2);
            if (!tmp6) {
              let tmp7 = tmp.__workletHash === tmp2.__workletHash;
              if (tmp7) {
                let tmp8 = undefined === tmp.__closure && undefined === tmp2.__closure;
                if (!tmp8) {
                  const __closure = tmp.__closure;
                  const __closure1 = tmp2.__closure;
                  if (typeof areDependenciesEqual === "function") {
                    let tmp10 = !__closure;
                    if (__closure) {
                      tmp10 = !__closure1;
                    }
                    if (!tmp10) {
                      tmp10 = __closure.length !== __closure1.length;
                    }
                    let everyResult = !tmp10;
                    if (!tmp10) {
                      everyResult = __closure.every((item, index) => fn(item, __closure1[index]));
                    }
                    tmp8 = everyResult;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                tmp7 = tmp8;
              }
              tmp6 = tmp7;
            }
            tmp4 = tmp6;
          }
          return tmp4;
        })
      );
    }
  }
  return false;
}
export { areDependenciesEqual };
