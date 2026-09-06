// _runtime/metro/06758__.js
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";
import _slicedToArray from "00032__.js";

const noop = fn(19);
({ useEffect: c2, useState: c3 } = noop);
const AccessibilityInfo = fn(17).AccessibilityInfo;

export const useIsScreenReaderEnabled = function useIsScreenReaderEnabled() {
  const tmp = _slicedToArray(closure_3(false), 2);
  closure_0 = tmp[1];
  closure_2(() => {
    closure_129_0 = closure_0(function* () {
      closure_1 = tmp3;
      yield screenReaderEnabled.isScreenReaderEnabled();
      if (1 === tmp7) {
        c3 = 0;
        const _console = console;
        console.warn("Could not read accessibility info: defaulting to false");
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_128_0 = arg1;
        closure_0(closure_128_0);
        c3 = 0;
      }
      return arg1;
    });
    (function checkStatus() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
    closure_0 = AccessibilityInfo.addEventListener("screenReaderChanged", (event) => {
      closure_0(event);
    });
    return () => {
      closure_0.remove();
    };
  }, []);
  return tmp[0];
};
