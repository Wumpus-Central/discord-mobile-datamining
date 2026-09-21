// _runtime/metro/13054__.js
import _mod13048 from "13048__.js";
import _mod13051 from "13051__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13051.GLOBAL_OBJ.onunhandledrejection;
  _mod13051.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod13048.triggerHandlers("unhandledrejection", arg0);
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
  _mod13051.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod13048.addHandler("unhandledrejection", errorCallback);
    _mod13048.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
