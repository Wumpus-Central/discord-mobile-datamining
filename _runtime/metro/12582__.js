// _runtime/metro/12582__.js
import _mod12576 from "12576__.js";
import _mod12579 from "12579__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12579.GLOBAL_OBJ.onunhandledrejection;
  _mod12579.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12576.triggerHandlers("unhandledrejection", arg0);
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
  _mod12579.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod12576.addHandler("unhandledrejection", errorCallback);
    _mod12576.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
