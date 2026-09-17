// === Module 12952: ? ===

// Module 12952
import _mod12946 from "module_12946" /* 12946 */;
import _mod12949 from "module_12949" /* 12949 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12949.GLOBAL_OBJ.onunhandledrejection;
  _mod12949.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12946.triggerHandlers("unhandledrejection", arg0);
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
  _mod12949.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12946.addHandler("unhandledrejection", errorCallback);
  _mod12946.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};