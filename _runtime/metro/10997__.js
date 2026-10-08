// _runtime/metro/10997__.js
import _mod10991 from "10991__.js";
import _mod10994 from "10994__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod10994.GLOBAL_OBJ.onunhandledrejection;
  _mod10994.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod10991.triggerHandlers("unhandledrejection", arg0);
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
  _mod10994.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod10991.addHandler("unhandledrejection", errorCallback);
    _mod10991.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
