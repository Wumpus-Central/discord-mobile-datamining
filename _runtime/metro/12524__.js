// === Module 12524: ? ===

// Module 12524
import _mod12518 from "module_12518" /* 12518 */;
import _mod12521 from "module_12521" /* 12521 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12521.GLOBAL_OBJ.onunhandledrejection;
  _mod12521.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12518.triggerHandlers("unhandledrejection", arg0);
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
  _mod12521.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12518.addHandler("unhandledrejection", errorCallback);
  _mod12518.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};