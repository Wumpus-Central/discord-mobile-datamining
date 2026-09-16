// _runtime/metro/12944__.js
import _mod12938 from "12938__.js";
import _mod12941 from "12941__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12941.GLOBAL_OBJ.onunhandledrejection;
  _mod12941.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12938.triggerHandlers("unhandledrejection", arg0);
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
  _mod12941.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12938.addHandler("unhandledrejection", errorCallback);
    _mod12938.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
