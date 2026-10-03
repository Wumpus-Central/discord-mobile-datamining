// _runtime/metro/12569__.js
import _mod12563 from "12563__.js";
import _mod12566 from "12566__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12566.GLOBAL_OBJ.onunhandledrejection;
  _mod12566.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12563.triggerHandlers("unhandledrejection", arg0);
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
  _mod12566.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12563.addHandler("unhandledrejection", errorCallback);
    _mod12563.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
