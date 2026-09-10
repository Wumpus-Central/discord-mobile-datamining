// === Module 12871: ? ===

// Module 12871
import _mod12865 from "module_12865" /* 12865 */;
import _mod12868 from "module_12868" /* 12868 */;

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12868.GLOBAL_OBJ.onunhandledrejection;
  _mod12868.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    _mod12865.triggerHandlers("unhandledrejection", arg0);
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
  _mod12868.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12865.addHandler("unhandledrejection", errorCallback);
  _mod12865.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};