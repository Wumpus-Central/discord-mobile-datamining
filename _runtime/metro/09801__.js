// === Module 9801: ? ===

// Module 9801
import _mod9795 from "module_9795" /* 9795 */;
import _mod9798 from "module_9798" /* 9798 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod9798.GLOBAL_OBJ.onunhandledrejection;
  _mod9798.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod9795.triggerHandlers("unhandledrejection", arg0);
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
  _mod9798.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod9795.addHandler("unhandledrejection", errorCallback);
  _mod9795.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}