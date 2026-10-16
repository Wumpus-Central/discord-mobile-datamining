// === Module 12302: ? ===

// Module 12302
import _mod12296 from "module_12296" /* 12296 */;
import _mod12299 from "module_12299" /* 12299 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12299.GLOBAL_OBJ.onunhandledrejection;
  _mod12299.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12296.triggerHandlers("unhandledrejection", arg0);
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
  _mod12299.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12296.addHandler("unhandledrejection", errorCallback);
  _mod12296.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};