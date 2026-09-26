// === Module 12317: ? ===

// Module 12317
import _mod12311 from "module_12311" /* 12311 */;
import _mod12314 from "module_12314" /* 12314 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12314.GLOBAL_OBJ.onunhandledrejection;
  _mod12314.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12311.triggerHandlers("unhandledrejection", arg0);
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
  _mod12314.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12311.addHandler("unhandledrejection", errorCallback);
  _mod12311.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};