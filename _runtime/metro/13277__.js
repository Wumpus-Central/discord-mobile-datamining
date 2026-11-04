// === Module 13277: ? ===

// Module 13277
import _mod13271 from "module_13271" /* 13271 */;
import _mod13274 from "module_13274" /* 13274 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13274.GLOBAL_OBJ.onunhandledrejection;
  _mod13274.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod13271.triggerHandlers("unhandledrejection", arg0);
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
  _mod13274.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13271.addHandler("unhandledrejection", errorCallback);
  _mod13271.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}