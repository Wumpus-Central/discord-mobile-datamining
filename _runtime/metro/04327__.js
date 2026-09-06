// === Module 4327: ? ===

// Module 4327
import c from "c" /* 4316 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useRef: c3, useCallback, useState: closure_4 } = noop);

export const useRive = function useRive() {
  let obj = c;
  const cResult = obj.c(4);
  const tmp2 = React3(null);
  [tmp4, dependencyMap] = _slicedToArray(React4(null), 2);
  React3(null);
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
          ref.current = setTimeout(() => {
            const error = new Error("Rive view ready timeout");
            closure_0(error);
          }, 5000);
        });
        let awaitViewReadyResult;
        if (current != null) {
          awaitViewReadyResult = current.awaitViewReady();
        }
        const items = [awaitViewReadyResult, promise];
        const racePromise = Promise.race(items);
        const nextPromise = Promise.race(items).then((result) => {
          if (true === result) {
            dependencyMap(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            dependencyMap(null);
          }
        });
        Promise.race(items).then((result) => {
          if (true === result) {
            dependencyMap(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            dependencyMap(null);
          }
        }).catch((error) => {
          console.warn("Failed to initialize Rive view:", error);
          closure_1_1(null);
        }).finally(() => {
          if (ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(tmp.current);
            tmp.current = null;
          }
        });
        const catchPromise = Promise.race(items).then((result) => {
          if (true === result) {
            dependencyMap(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            dependencyMap(null);
          }
        }).catch((error) => {
          console.warn("Failed to initialize Rive view:", error);
          closure_1_1(null);
        });
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    obj = { f: first };
    cResult[1] = obj;
    let tmp6 = obj;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    obj = { riveRef: tmp2, riveViewRef: tmp4, setHybridRef: tmp6 };
    cResult[2] = tmp4;
    cResult[3] = obj;
    let tmp7 = obj;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
};