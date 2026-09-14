// === Module 12931: ? ===

// Module 12931
import _mod12925 from "module_12925" /* 12925 */;
import _mod12928 from "module_12928" /* 12928 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12928.GLOBAL_OBJ.onunhandledrejection;
  _mod12928.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12925.triggerHandlers("unhandledrejection", arg0);
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
  _mod12928.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12925.addHandler("unhandledrejection", errorCallback);
  _mod12925.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};