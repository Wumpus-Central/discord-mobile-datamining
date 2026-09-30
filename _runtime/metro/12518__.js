// === Module 12518: ? ===

// Module 12518
import _mod12512 from "module_12512" /* 12512 */;
import _mod12515 from "module_12515" /* 12515 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12515.GLOBAL_OBJ.onunhandledrejection;
  _mod12515.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12512.triggerHandlers("unhandledrejection", arg0);
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
  _mod12515.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12512.addHandler("unhandledrejection", errorCallback);
  _mod12512.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};