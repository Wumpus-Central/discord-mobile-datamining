// === Module 13194: ? ===

// Module 13194
import _mod13188 from "module_13188" /* 13188 */;
import _mod13191 from "module_13191" /* 13191 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13191.GLOBAL_OBJ.onunhandledrejection;
  _mod13191.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13188.triggerHandlers("unhandledrejection", arg0);
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
  _mod13191.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13188.addHandler("unhandledrejection", errorCallback);
  _mod13188.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}