// _runtime/metro/12390__.js
import _mod12384 from "12384__.js";
import _mod12387 from "12387__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12387.GLOBAL_OBJ.onunhandledrejection;
  _mod12387.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12384.triggerHandlers("unhandledrejection", arg0);
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
  _mod12387.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12384.addHandler("unhandledrejection", errorCallback);
    _mod12384.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
