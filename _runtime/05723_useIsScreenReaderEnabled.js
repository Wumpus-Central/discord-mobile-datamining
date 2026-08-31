// === Module 5723: useIsScreenReaderEnabled ===

// Module 5723 (useIsScreenReaderEnabled)
import closure_0 from "asyncGeneratorStep" /* 5 */;
import closure_1 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { AccessibilityInfo } from "get ActivityIndicator" /* 17 */;

({ useEffect: obj1, useState: c3 } = noop);

export const useIsScreenReaderEnabled = function useIsScreenReaderEnabled() {
  const tmp = callback(callback3(false), 2);
  closure_0 = tmp[1];
  callback2(() => {
    callback = callback(function*() {
      closure_1 = tmp3;
      c3 = 1;
      yield closure_2_4.isScreenReaderEnabled();
      if (1 === tmp7) {
        c3 = 0;
        const _console = console;
        console.warn("Could not read accessibility info: defaulting to false");
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_0 = arg1;
        closure_1_0(closure_0);
        c3 = 0;
      }
      c3 = 0;
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
    callback = closure_1_4.addEventListener("screenReaderChanged", (arg0) => {
      lib(arg0);
    });
    return () => {
      lib.remove();
    };
  }, []);
  return tmp[0];
};