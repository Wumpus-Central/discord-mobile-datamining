// === Module 12427: ? ===

// Module 12427
import _mod12421 from "module_12421" /* 12421 */;
import _mod12424 from "module_12424" /* 12424 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12424.GLOBAL_OBJ.onunhandledrejection;
  _mod12424.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12421.triggerHandlers("unhandledrejection", arg0);
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
  _mod12424.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12421.addHandler("unhandledrejection", errorCallback);
  _mod12421.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};