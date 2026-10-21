// === Module 12483: ? ===

// Module 12483
import _mod12477 from "module_12477" /* 12477 */;
import _mod12480 from "module_12480" /* 12480 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12480.GLOBAL_OBJ.onunhandledrejection;
  _mod12480.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12477.triggerHandlers("unhandledrejection", arg0);
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
  _mod12480.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12477.addHandler("unhandledrejection", errorCallback);
  _mod12477.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};