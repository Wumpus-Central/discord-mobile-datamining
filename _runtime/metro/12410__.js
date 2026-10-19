// === Module 12410: ? ===

// Module 12410
import _mod12404 from "module_12404" /* 12404 */;
import _mod12407 from "module_12407" /* 12407 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12407.GLOBAL_OBJ.onunhandledrejection;
  _mod12407.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12404.triggerHandlers("unhandledrejection", arg0);
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
  _mod12407.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12404.addHandler("unhandledrejection", errorCallback);
  _mod12404.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};