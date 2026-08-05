// _runtime/04047_useRive.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { c } from "04036_c.js";

let c3;
let c4;
let useCallback;
let require = arg1;
({ useRef: c3, useCallback, useState: c4 } = noop);

export const useRive = function useRive() {
  let dependencyMap;
  let tmp4;
  let obj = c /* c */;
  const cResult = obj.c(4);
  const tmp2 = callback2(null);
  require = tmp2;
  [tmp4, dependencyMap] = callback(callback3(null), 2);
  callback = callback2(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(current) {
      if (current.current !== current) {
        tmp2.current = current;
        if (ref.current) {
          let _clearTimeout = clearTimeout;
          clearTimeout(tmp11.current);
        }
        const promise = new Promise((arg0, arg1) => {
          let closure_0 = arg1;
          _slicedToArray.current = setTimeout(() => {
            const error = new Error("Rive view ready timeout");
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
            outer1_1(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            outer1_1(null);
          }
        });
        Promise.race(items).then((arg0) => {
          if (true === arg0) {
            outer1_1(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            outer1_1(null);
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
            outer1_1(closure_0);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            outer1_1(null);
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