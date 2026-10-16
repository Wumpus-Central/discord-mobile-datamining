// _runtime/metro/12308__.js
import _mod12302 from "12302__.js";
import _mod12305 from "12305__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12305.GLOBAL_OBJ.onunhandledrejection;
  _mod12305.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12302.triggerHandlers("unhandledrejection", arg0);
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
  _mod12305.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12302.addHandler("unhandledrejection", errorCallback);
    _mod12302.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
