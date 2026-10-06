// _runtime/metro/04647__.js
import react2 from "../00576_react.js";
import _slicedToArray from "00032__slicedToArray.js";
import react from "../00019_react.js";

let ref;

let c3;
let closure_4;
let useCallback;
({ useRef: c3, useCallback, useState: closure_4 } = react);

export const useRive = function useRive() {
  let closure_129_1;
  let first;
  let tmp4;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp2 = _false(null);
  let closure_0 = tmp2;
  [tmp4, closure_129_1] = _slicedToArray(React3(null), 2);
  const tmp3 = _slicedToArray(React3(null), 2);
  let closure_2 = _false(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(current) {
      ref = current;
      if (ref.current !== current) {
        ref.current = current;
        if (ref2.current) {
          let _clearTimeout = clearTimeout;
          clearTimeout(tmp9.current);
        }
        const self = this;
        const self2 = this;
        let awaitViewReadyResult;
        const promise = new Promise((arg0, arg1) => {
          let closure_0 = arg1;
          ref.current = setTimeout(() => {
            const error = new Error("Rive view ready timeout");
            closure_0(error);
          }, 5000);
        });
        if (current != null) {
          awaitViewReadyResult = current.awaitViewReady();
        }
        const items = [awaitViewReadyResult, promise];
        const raceResult = race(items);
        const nextPromise = raceResult.then((result) => {
          if (true === result) {
            closure_2_1(current);
          } else {
            const _console = console;
            console.warn("Rive view ready check returned false");
            closure_2_1(null);
          }
        });
        const catchPromise = nextPromise.catch((error) => {
          console.warn("Failed to initialize Rive view:", error);
          closure_1_1(null);
        });
        catchPromise.finally(() => {
          if (ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
            ref.current = null;
          }
        });
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { f: first };
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj3 = { riveRef: tmp2, riveViewRef: tmp4, setHybridRef: tmp6 };
    cResult[2] = tmp4;
    cResult[3] = obj3;
    tmp7 = obj3;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
};
