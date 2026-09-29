// === Module 12488: ? ===

// Module 12488
import _mod12482 from "module_12482" /* 12482 */;
import _mod12485 from "module_12485" /* 12485 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12485.GLOBAL_OBJ.onunhandledrejection;
  _mod12485.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12482.triggerHandlers("unhandledrejection", arg0);
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
  _mod12485.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12482.addHandler("unhandledrejection", errorCallback);
  _mod12482.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};