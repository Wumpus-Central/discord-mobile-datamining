// === Module 13008: ? ===

// Module 13008
import _mod13002 from "module_13002" /* 13002 */;
import _mod13005 from "module_13005" /* 13005 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13005.GLOBAL_OBJ.onunhandledrejection;
  _mod13005.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13002.triggerHandlers("unhandledrejection", arg0);
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
  _mod13005.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13002.addHandler("unhandledrejection", errorCallback);
  _mod13002.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}