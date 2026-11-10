// === Module 13296: ? ===

// Module 13296
import _mod13290 from "module_13290" /* 13290 */;
import _mod13293 from "module_13293" /* 13293 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13293.GLOBAL_OBJ.onunhandledrejection;
  _mod13293.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13290.triggerHandlers("unhandledrejection", arg0);
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
  _mod13293.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13290.addHandler("unhandledrejection", errorCallback);
  _mod13290.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}