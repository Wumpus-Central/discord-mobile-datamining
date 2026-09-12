// _runtime/metro/12930__.js
import _mod12924 from "12924__.js";
import _mod12927 from "12927__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12927.GLOBAL_OBJ.onunhandledrejection;
  _mod12927.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12924.triggerHandlers("unhandledrejection", arg0);
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
  _mod12927.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12924.addHandler("unhandledrejection", errorCallback);
    _mod12924.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
