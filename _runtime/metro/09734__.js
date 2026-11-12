// _runtime/metro/09734__.js
import _mod9728 from "09728__.js";
import _mod9731 from "09731__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod9731.GLOBAL_OBJ.onunhandledrejection;
  _mod9731.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod9728.triggerHandlers("unhandledrejection", arg0);
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
  _mod9731.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod9728.addHandler("unhandledrejection", errorCallback);
  _mod9728.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
