// === Module 12529: ? ===

// Module 12529
import _mod12523 from "module_12523" /* 12523 */;
import _mod12526 from "module_12526" /* 12526 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12526.GLOBAL_OBJ.onunhandledrejection;
  _mod12526.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12523.triggerHandlers("unhandledrejection", arg0);
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
  _mod12526.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12523.addHandler("unhandledrejection", errorCallback);
  _mod12523.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};