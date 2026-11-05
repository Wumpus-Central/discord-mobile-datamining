// === Module 13285: ? ===

// Module 13285
import _mod13279 from "module_13279" /* 13279 */;
import _mod13282 from "module_13282" /* 13282 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13282.GLOBAL_OBJ.onunhandledrejection;
  _mod13282.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13279.triggerHandlers("unhandledrejection", arg0);
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
  _mod13282.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13279.addHandler("unhandledrejection", errorCallback);
  _mod13279.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}