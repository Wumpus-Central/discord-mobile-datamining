// === Module 13259: ? ===

// Module 13259
import _mod13253 from "module_13253" /* 13253 */;
import _mod13256 from "module_13256" /* 13256 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13256.GLOBAL_OBJ.onunhandledrejection;
  _mod13256.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13253.triggerHandlers("unhandledrejection", arg0);
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
  _mod13256.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13253.addHandler("unhandledrejection", errorCallback);
  _mod13253.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}