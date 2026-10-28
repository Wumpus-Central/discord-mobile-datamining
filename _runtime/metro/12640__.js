// _runtime/metro/12640__.js
import _mod12634 from "12634__.js";
import _mod12637 from "12637__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12637.GLOBAL_OBJ.onunhandledrejection;
  _mod12637.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12634.triggerHandlers("unhandledrejection", arg0);
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
  _mod12637.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12634.addHandler("unhandledrejection", errorCallback);
    _mod12634.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
