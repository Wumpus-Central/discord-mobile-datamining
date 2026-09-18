// === Module 13043: ? ===

// Module 13043
import _mod13037 from "module_13037" /* 13037 */;
import _mod13040 from "module_13040" /* 13040 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13040.GLOBAL_OBJ.onunhandledrejection;
  _mod13040.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13037.triggerHandlers("unhandledrejection", arg0);
    if (!onunhandledrejection) {
      return !onunhandledrejection;
    } else {
      const self = this;
      const apply = onunhandledrejection.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
    }
  };
  _mod13040.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13037.addHandler("unhandledrejection", errorCallback);
  _mod13037.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};