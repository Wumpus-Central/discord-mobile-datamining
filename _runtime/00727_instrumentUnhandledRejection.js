// === Module 727: instrumentUnhandledRejection ===

// Module 727 (instrumentUnhandledRejection)
import _mod697 from "module_697" /* 697 */;
import _mod726 from "module_726" /* 726 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod697.GLOBAL_OBJ.onunhandledrejection;
  _mod697.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod726.triggerHandlers("unhandledrejection", arg0);
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
  _mod697.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod726.addHandler("unhandledrejection", errorCallback);
  _mod726.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};