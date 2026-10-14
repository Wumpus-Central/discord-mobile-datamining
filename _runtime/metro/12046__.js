// === Module 12046: ? ===

// Module 12046
import _mod12040 from "module_12040" /* 12040 */;
import _mod12043 from "module_12043" /* 12043 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12043.GLOBAL_OBJ.onunhandledrejection;
  _mod12043.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12040.triggerHandlers("unhandledrejection", arg0);
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
  _mod12043.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12040.addHandler("unhandledrejection", errorCallback);
  _mod12040.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};