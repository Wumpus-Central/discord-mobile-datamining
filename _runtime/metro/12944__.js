// === Module 12944: ? ===

// Module 12944
import _mod12938 from "module_12938" /* 12938 */;
import _mod12941 from "module_12941" /* 12941 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12941.GLOBAL_OBJ.onunhandledrejection;
  _mod12941.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12938.triggerHandlers("unhandledrejection", arg0);
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
  _mod12941.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12938.addHandler("unhandledrejection", errorCallback);
  _mod12938.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};