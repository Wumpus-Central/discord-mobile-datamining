// === Module 4146: useRive ===

// Module 4146 (useRive)
import closure_2 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = arg1;
({ useRef: c3, useCallback, useState: c4 } = noop);

export const useRive = function useRive() {
  let obj = _require(4135);
  const cResult = obj.c(4);
  const tmp2 = callback2(null);
  _require = tmp2;
  [tmp4, dependencyMap] = callback(callback3(null), 2);
  callback = callback2(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(current) {
      if (current.current !== current) {
        ref.current = current;
        if (ref2.current) {
          let _clearTimeout = clearTimeout;
          clearTimeout(tmp11.current);
        }
        const promise = new Promise((arg0, arg1) => {
          closure_0 = arg1;
          closure_2.current = setTimeout(() => {
            error = new Error("Rive view ready timeout");
            callback(error);
          }, 5000);
        });
        let awaitViewReadyResult;
        if (current != null) {
          awaitViewReadyResult = current.awaitViewReady();
        }
        const items = [awaitViewReadyResult, promise];
        const racePromise = Promise.race(items);
        const nextPromise = Promise.race(items).then((arg0) => {
          if (true === arg0) {
            closure_1_1(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            closure_1_1(null);
          }
        });
        Promise.race(items).then((arg0) => {
          if (true === arg0) {
            closure_1_1(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            closure_1_1(null);
          }
        }).catch((arg0) => {
          console.warn("Failed to initialize Rive view:", arg0);
          callback(null);
        }).finally(() => {
          if (ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(tmp.current);
            tmp.current = null;
          }
        });
        const catchPromise = Promise.race(items).then((arg0) => {
          if (true === arg0) {
            closure_1_1(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            closure_1_1(null);
          }
        }).catch((arg0) => {
          console.warn("Failed to initialize Rive view:", arg0);
          callback(null);
        });
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    obj = { f: null };
    obj[0] = first;
    cResult[1] = obj;
    let tmp6 = obj;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    obj = { riveRef: null, riveViewRef: null, setHybridRef: null };
    obj[0] = tmp2;
    obj[1] = tmp4;
    obj[2] = tmp6;
    cResult[2] = tmp4;
    cResult[3] = obj;
    let tmp7 = obj;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
};