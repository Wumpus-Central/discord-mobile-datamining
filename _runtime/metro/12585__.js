// === Module 12585: ? ===

// Module 12585
import _mod12579 from "module_12579" /* 12579 */;
import _mod12582 from "module_12582" /* 12582 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12582.GLOBAL_OBJ.onunhandledrejection;
  _mod12582.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12579.triggerHandlers("unhandledrejection", arg0);
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
  _mod12582.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12579.addHandler("unhandledrejection", errorCallback);
  _mod12579.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};