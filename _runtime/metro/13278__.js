// === Module 13278: ? ===

// Module 13278
import _mod13272 from "module_13272" /* 13272 */;
import _mod13275 from "module_13275" /* 13275 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13275.GLOBAL_OBJ.onunhandledrejection;
  _mod13275.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13272.triggerHandlers("unhandledrejection", arg0);
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
  _mod13275.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13272.addHandler("unhandledrejection", errorCallback);
  _mod13272.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}