// _runtime/metro/09814__.js
import _mod9808 from "09808__.js";
import _mod9811 from "09811__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod9811.GLOBAL_OBJ.onunhandledrejection;
  _mod9811.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod9808.triggerHandlers("unhandledrejection", arg0);
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
  _mod9811.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod9808.addHandler("unhandledrejection", errorCallback);
  _mod9808.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
