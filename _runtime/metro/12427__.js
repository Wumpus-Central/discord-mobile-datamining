// _runtime/metro/12427__.js
import _mod12421 from "12421__.js";
import _mod12424 from "12424__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12424.GLOBAL_OBJ.onunhandledrejection;
  _mod12424.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12421.triggerHandlers("unhandledrejection", arg0);
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
  _mod12424.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12421.addHandler("unhandledrejection", errorCallback);
    _mod12421.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
