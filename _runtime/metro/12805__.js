// === Module 12805: ? ===

// Module 12805
import _mod12799 from "module_12799" /* 12799 */;
import _mod12802 from "module_12802" /* 12802 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12802.GLOBAL_OBJ.onunhandledrejection;
  _mod12802.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12799.triggerHandlers("unhandledrejection", arg0);
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
  _mod12802.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12799.addHandler("unhandledrejection", errorCallback);
  _mod12799.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};