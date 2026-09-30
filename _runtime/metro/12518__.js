// _runtime/metro/12518__.js
import _mod12512 from "12512__.js";
import _mod12515 from "12515__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12515.GLOBAL_OBJ.onunhandledrejection;
  _mod12515.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12512.triggerHandlers("unhandledrejection", arg0);
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
  _mod12515.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12512.addHandler("unhandledrejection", errorCallback);
    _mod12512.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
