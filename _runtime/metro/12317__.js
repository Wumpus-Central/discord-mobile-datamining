// _runtime/metro/12317__.js
import _mod12311 from "12311__.js";
import _mod12314 from "12314__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12314.GLOBAL_OBJ.onunhandledrejection;
  _mod12314.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12311.triggerHandlers("unhandledrejection", arg0);
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
  _mod12314.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12311.addHandler("unhandledrejection", errorCallback);
    _mod12311.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
