// === Module 12513: ? ===

// Module 12513
import _mod12507 from "module_12507" /* 12507 */;
import _mod12510 from "module_12510" /* 12510 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12510.GLOBAL_OBJ.onunhandledrejection;
  _mod12510.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12507.triggerHandlers("unhandledrejection", arg0);
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
  _mod12510.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12507.addHandler("unhandledrejection", errorCallback);
  _mod12507.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};