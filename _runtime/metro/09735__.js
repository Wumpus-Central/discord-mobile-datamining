// === Module 9735: ? ===

// Module 9735
import _mod9729 from "module_9729" /* 9729 */;
import _mod9732 from "module_9732" /* 9732 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod9732.GLOBAL_OBJ.onunhandledrejection;
  _mod9732.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod9729.triggerHandlers("unhandledrejection", arg0);
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
  _mod9732.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod9729.addHandler("unhandledrejection", errorCallback);
  _mod9729.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}