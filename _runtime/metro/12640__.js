// === Module 12640: ? ===

// Module 12640
import _mod12634 from "module_12634" /* 12634 */;
import _mod12637 from "module_12637" /* 12637 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12637.GLOBAL_OBJ.onunhandledrejection;
  _mod12637.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12634.triggerHandlers("unhandledrejection", arg0);
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
  _mod12637.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12634.addHandler("unhandledrejection", errorCallback);
  _mod12634.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};