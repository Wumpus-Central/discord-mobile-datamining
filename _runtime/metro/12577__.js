// === Module 12577: ? ===

// Module 12577
import _mod12571 from "module_12571" /* 12571 */;
import _mod12574 from "module_12574" /* 12574 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12574.GLOBAL_OBJ.onunhandledrejection;
  _mod12574.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12571.triggerHandlers("unhandledrejection", arg0);
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
  _mod12574.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12571.addHandler("unhandledrejection", errorCallback);
  _mod12571.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};