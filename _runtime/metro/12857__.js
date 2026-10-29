// _runtime/metro/12857__.js
import _mod12851 from "12851__.js";
import _mod12854 from "12854__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12854.GLOBAL_OBJ.onunhandledrejection;
  _mod12854.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12851.triggerHandlers("unhandledrejection", arg0);
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
  _mod12854.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod12851.addHandler("unhandledrejection", errorCallback);
  _mod12851.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
