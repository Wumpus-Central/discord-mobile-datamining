// _runtime/metro/09735__.js
import _mod9729 from "09729__.js";
import _mod9732 from "09732__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod9732.GLOBAL_OBJ.onunhandledrejection;
  _mod9732.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod9729.triggerHandlers("unhandledrejection", arg0);
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
  _mod9732.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod9729.addHandler("unhandledrejection", errorCallback);
  _mod9729.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
