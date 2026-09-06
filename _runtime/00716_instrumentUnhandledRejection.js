// === Module 716: instrumentUnhandledRejection ===

// Module 716 (instrumentUnhandledRejection)
import _mod686 from "module_686" /* 686 */;
import _mod715 from "module_715" /* 715 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod686.GLOBAL_OBJ.onunhandledrejection;
  _mod686.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod715.triggerHandlers("unhandledrejection", arg0);
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
  _mod686.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod715.addHandler("unhandledrejection", errorCallback);
  _mod715.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};