import { addHandler } from "00850_addHandler.js";
import { 00821__ } from "metro/00821__.js";
// _runtime/00849_instrumentError.js
const require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  const onerror = 00821__.GLOBAL_OBJ.onerror;
  00821__.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
    callback(table[0]).triggerHandlers("error", { column, error, line, msg, url });
    if (!onerror) {
      return tmp2;
    } else {
      const self = this;
      const apply = onerror.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      const tmp3 = onerror;
    }
  };
  00821__.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = null;
arg5.addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(arg0) {
  addHandler /* addHandler */.addHandler("error", arg0);
  const obj = addHandler /* addHandler */;
  addHandler /* addHandler */.maybeInstrument("error", instrumentError);
};