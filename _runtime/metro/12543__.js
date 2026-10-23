// _runtime/metro/12543__.js
import _mod12537 from "12537__.js";
import _mod12540 from "12540__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12540.GLOBAL_OBJ.onunhandledrejection;
  _mod12540.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12537.triggerHandlers("unhandledrejection", arg0);
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
  _mod12540.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12537.addHandler("unhandledrejection", errorCallback);
    _mod12537.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
