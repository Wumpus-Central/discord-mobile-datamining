// === Module 9734: ? ===

// Module 9734
import _mod9728 from "module_9728" /* 9728 */;
import _mod9731 from "module_9731" /* 9731 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod9731.GLOBAL_OBJ.onunhandledrejection;
  _mod9731.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod9728.triggerHandlers("unhandledrejection", arg0);
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
  _mod9731.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod9728.addHandler("unhandledrejection", errorCallback);
  _mod9728.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}