// _runtime/metro/13043__.js
import _mod13037 from "13037__.js";
import _mod13040 from "13040__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13040.GLOBAL_OBJ.onunhandledrejection;
  _mod13040.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod13037.triggerHandlers("unhandledrejection", arg0);
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
  _mod13040.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod13037.addHandler("unhandledrejection", errorCallback);
    _mod13037.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
