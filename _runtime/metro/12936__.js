// === Module 12936: ? ===

// Module 12936
import _mod12930 from "module_12930" /* 12930 */;
import _mod12933 from "module_12933" /* 12933 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12933.GLOBAL_OBJ.onunhandledrejection;
  _mod12933.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12930.triggerHandlers("unhandledrejection", arg0);
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
  _mod12933.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12930.addHandler("unhandledrejection", errorCallback);
  _mod12930.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};