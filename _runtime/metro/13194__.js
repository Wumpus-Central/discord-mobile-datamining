// _runtime/metro/13194__.js
import _mod13188 from "13188__.js";
import _mod13191 from "13191__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod13191.GLOBAL_OBJ.onunhandledrejection;
  _mod13191.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod13188.triggerHandlers("unhandledrejection", arg0);
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
  _mod13191.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod13188.addHandler("unhandledrejection", errorCallback);
  _mod13188.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
