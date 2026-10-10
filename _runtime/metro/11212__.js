// === Module 11212: ? ===

// Module 11212
import _mod11206 from "module_11206" /* 11206 */;
import _mod11209 from "module_11209" /* 11209 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod11209.GLOBAL_OBJ.onunhandledrejection;
  _mod11209.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod11206.triggerHandlers("unhandledrejection", arg0);
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
  _mod11209.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod11206.addHandler("unhandledrejection", errorCallback);
  _mod11206.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};