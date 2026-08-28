// _runtime/05720_useIsScreenReaderEnabled.js
import closure_0 from "00005_asyncGeneratorStep.js";
import closure_1 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import { AccessibilityInfo } from "00017_get_ActivityIndicator.js";

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