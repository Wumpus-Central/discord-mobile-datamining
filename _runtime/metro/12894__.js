// _runtime/metro/12894__.js
import _mod12888 from "12888__.js";
import _mod12891 from "12891__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12891.GLOBAL_OBJ.onunhandledrejection;
  _mod12891.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12888.triggerHandlers("unhandledrejection", arg0);
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
  _mod12891.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12888.addHandler("unhandledrejection", errorCallback);
    _mod12888.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
