// _runtime/00716_instrumentUnhandledRejection.js
import _mod686 from "metro/00686__.js";
import addHandler from "00715_addHandler.js";

require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = _mod686.GLOBAL_OBJ.onunhandledrejection;
  _mod686.GLOBAL_OBJ.onunhandledrejection = function (arg0) {
    callback(table[0]).triggerHandlers("unhandledrejection", arg0);
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
      const tmp2 = onunhandledrejection;
    }
  };
  _mod686.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(
  arg0,
) {
  addHandler.addHandler("unhandledrejection", arg0);
  const obj = addHandler;
  addHandler.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};
