// === Module 12593: ? ===

// Module 12593
import _mod12587 from "module_12587" /* 12587 */;
import _mod12590 from "module_12590" /* 12590 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12590.GLOBAL_OBJ.onunhandledrejection;
  _mod12590.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12587.triggerHandlers("unhandledrejection", arg0);
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
  _mod12590.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12587.addHandler("unhandledrejection", errorCallback);
  _mod12587.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};