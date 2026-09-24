// _runtime/metro/13149__.js
import _mod13143 from "13143__.js";
import _mod13146 from "13146__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13146.GLOBAL_OBJ.onunhandledrejection;
  _mod13146.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod13143.triggerHandlers("unhandledrejection", arg0);
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
  _mod13146.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
    _mod13143.addHandler("unhandledrejection", errorCallback);
    _mod13143.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
