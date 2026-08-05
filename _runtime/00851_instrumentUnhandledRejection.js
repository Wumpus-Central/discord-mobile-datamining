// _runtime/00851_instrumentUnhandledRejection.js
import { addHandler } from "00850_addHandler.js";
import { 00821__ } from "metro/00821__.js";
const require = arg1;
const dependencyMap = arg6;
function instrumentUnhandledRejection() {
  const onunhandledrejection = 00821__.GLOBAL_OBJ.onunhandledrejection;
  00821__.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
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
  00821__.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = null;
arg5.addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(arg0) {
  addHandler /* addHandler */.addHandler("unhandledrejection", arg0);
  const obj = addHandler /* addHandler */;
  addHandler /* addHandler */.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};