// === Module 12373: ? ===

// Module 12373
import _mod12367 from "module_12367" /* 12367 */;
import _mod12370 from "module_12370" /* 12370 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12370.GLOBAL_OBJ.onunhandledrejection;
  _mod12370.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12367.triggerHandlers("unhandledrejection", arg0);
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
  _mod12370.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12367.addHandler("unhandledrejection", errorCallback);
  _mod12367.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};