// _runtime/05446_useIsScreenReaderEnabled.js
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
      let _slicedToArray = tmp3;
      let c3 = 1;
      yield outer2_4.isScreenReaderEnabled();
      if (1 === tmp7) {
        c3 = 0;
        const _console = console;
        console.warn("Could not read accessibility info: defaulting to false");
        let c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        let asyncGeneratorStep = arg1;
        outer1_0(asyncGeneratorStep);
        c3 = 0;
      }
      c3 = 0;
      return arg1;
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