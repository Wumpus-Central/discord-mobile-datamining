// === Module 12930: ? ===

// Module 12930
import _mod12924 from "module_12924" /* 12924 */;
import _mod12927 from "module_12927" /* 12927 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12927.GLOBAL_OBJ.onunhandledrejection;
  _mod12927.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12924.triggerHandlers("unhandledrejection", arg0);
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
  _mod12927.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12924.addHandler("unhandledrejection", errorCallback);
  _mod12924.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};