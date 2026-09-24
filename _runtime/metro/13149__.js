// === Module 13149: ? ===

// Module 13149
import _mod13143 from "module_13143" /* 13143 */;
import _mod13146 from "module_13146" /* 13146 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13146.GLOBAL_OBJ.onunhandledrejection;
  _mod13146.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13143.triggerHandlers("unhandledrejection", arg0);
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
  _mod13146.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13143.addHandler("unhandledrejection", errorCallback);
  _mod13143.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};