// _runtime/metro/12831__.js
import _mod12825 from "12825__.js";
import _mod12828 from "12828__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12828.GLOBAL_OBJ.onunhandledrejection;
  _mod12828.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12825.triggerHandlers("unhandledrejection", arg0);
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
  _mod12828.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12825.addHandler("unhandledrejection", errorCallback);
    _mod12825.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
