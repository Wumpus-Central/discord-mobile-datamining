// _runtime/00715_instrumentUnhandledRejection.js
import _mod685 from "metro/00685__.js";
import _mod714 from "metro/00714__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  onunhandledrejection = _mod685.GLOBAL_OBJ.onunhandledrejection;
  _mod685.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    _mod714.triggerHandlers("unhandledrejection", arg0);
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
  _mod685.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let onunhandledrejection = null;

export function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  _mod714.addHandler("unhandledrejection", errorCallback);
  _mod714.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
}
