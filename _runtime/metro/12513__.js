// _runtime/metro/12513__.js
import _mod12507 from "12507__.js";
import _mod12510 from "12510__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12510.GLOBAL_OBJ.onunhandledrejection;
  _mod12510.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12507.triggerHandlers("unhandledrejection", arg0);
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
  _mod12510.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12507.addHandler("unhandledrejection", errorCallback);
    _mod12507.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
