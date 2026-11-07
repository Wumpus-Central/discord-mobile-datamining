// === Module 13282: ? ===

// Module 13282
import _mod13276 from "module_13276" /* 13276 */;
import _mod13279 from "module_13279" /* 13279 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13279.GLOBAL_OBJ.onunhandledrejection;
  _mod13279.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13276.triggerHandlers("unhandledrejection", arg0);
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
  _mod13279.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13276.addHandler("unhandledrejection", errorCallback);
  _mod13276.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}