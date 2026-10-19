// _runtime/metro/12410__.js
import _mod12404 from "12404__.js";
import _mod12407 from "12407__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12407.GLOBAL_OBJ.onunhandledrejection;
  _mod12407.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12404.triggerHandlers("unhandledrejection", arg0);
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
  _mod12407.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12404.addHandler("unhandledrejection", errorCallback);
    _mod12404.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
