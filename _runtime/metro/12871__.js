// _runtime/metro/12871__.js
import _mod12865 from "12865__.js";
import _mod12868 from "12868__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12868.GLOBAL_OBJ.onunhandledrejection;
  _mod12868.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12865.triggerHandlers("unhandledrejection", arg0);
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
  _mod12868.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12865.addHandler("unhandledrejection", errorCallback);
    _mod12865.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
