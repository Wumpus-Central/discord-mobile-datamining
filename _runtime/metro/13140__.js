// === Module 13140: ? ===

// Module 13140
import _mod13134 from "module_13134" /* 13134 */;
import _mod13137 from "module_13137" /* 13137 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13137.GLOBAL_OBJ.onunhandledrejection;
  _mod13137.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13134.triggerHandlers("unhandledrejection", arg0);
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
  _mod13137.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13134.addHandler("unhandledrejection", errorCallback);
  _mod13134.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};