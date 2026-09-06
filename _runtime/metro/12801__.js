// _runtime/metro/12801__.js
import _mod12795 from "12795__.js";
import _mod12798 from "12798__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12798.GLOBAL_OBJ.onunhandledrejection;
  _mod12798.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod12795.triggerHandlers("unhandledrejection", arg0);
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
  _mod12798.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler =
  function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
    _mod12795.addHandler("unhandledrejection", arg0);
    _mod12795.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
  };
