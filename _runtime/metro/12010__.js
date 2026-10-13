// === Module 12010: ? ===

// Module 12010
import _mod12004 from "module_12004" /* 12004 */;
import _mod12007 from "module_12007" /* 12007 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12007.GLOBAL_OBJ.onunhandledrejection;
  _mod12007.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12004.triggerHandlers("unhandledrejection", arg0);
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
  _mod12007.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12004.addHandler("unhandledrejection", errorCallback);
  _mod12004.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};