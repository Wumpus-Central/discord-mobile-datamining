// === Module 12584: ? ===

// Module 12584
import _mod12578 from "module_12578" /* 12578 */;
import _mod12581 from "module_12581" /* 12581 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12581.GLOBAL_OBJ.onunhandledrejection;
  _mod12581.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12578.triggerHandlers("unhandledrejection", arg0);
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
  _mod12581.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12578.addHandler("unhandledrejection", errorCallback);
  _mod12578.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};