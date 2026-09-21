// === Module 13054: ? ===

// Module 13054
import _mod13048 from "module_13048" /* 13048 */;
import _mod13051 from "module_13051" /* 13051 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13051.GLOBAL_OBJ.onunhandledrejection;
  _mod13051.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13048.triggerHandlers("unhandledrejection", arg0);
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
  _mod13051.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13048.addHandler("unhandledrejection", errorCallback);
  _mod13048.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};