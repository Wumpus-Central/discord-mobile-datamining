// _runtime/05355_useIsScreenReaderEnabled.js
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { AccessibilityInfo } from "get ActivityIndicator";

let c3;
let obj1;
({ useEffect: obj1, useState: c3 } = noop);

export const useIsScreenReaderEnabled = function useIsScreenReaderEnabled() {
  const tmp = callback(callback3(false), 2);
  let asyncGeneratorStep = tmp[1];
  callback2(() => {
    callback = callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _slicedToArray = tmp3;
              let asyncGeneratorStep = tmp7;
              asyncGeneratorStep = undefined;
              let c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer2_4.isScreenReaderEnabled();
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              const _console = console;
              console.warn("Could not read accessibility info: defaulting to false");
              c5 = 3;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              asyncGeneratorStep = arg1;
              outer1_0(asyncGeneratorStep);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp16) {
          let closure_2 = tmp16;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp16;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    (function checkStatus() {
      const self = this;
      const apply = asyncGeneratorStep.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    callback = outer1_4.addEventListener("screenReaderChanged", (arg0) => {
      lib(arg0);
    });
    return () => {
      lib.remove();
    };
  }, []);
  return tmp[0];
};