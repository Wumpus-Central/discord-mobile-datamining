// === Module 11171: ? ===

// Module 11171
import _mod11165 from "module_11165" /* 11165 */;
import _mod11168 from "module_11168" /* 11168 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod11168.GLOBAL_OBJ.onunhandledrejection;
  _mod11168.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod11165.triggerHandlers("unhandledrejection", arg0);
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
  _mod11168.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod11165.addHandler("unhandledrejection", errorCallback);
  _mod11165.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};