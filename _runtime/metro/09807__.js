// _runtime/metro/09807__.js
import _mod9808 from "09808__.js";
import _mod9811 from "09811__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod9811.GLOBAL_OBJ.onerror;
  _mod9811.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod9808.triggerHandlers("error", { column, error, line, msg, url });
    if (!onerror) {
      return onerror;
    } else {
      const self = this;
      const apply = onerror.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
    }
    const obj = { column, error, line, msg, url };
  };
  _mod9811.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod9808.addHandler("error", errorCallback);
  _mod9808.maybeInstrument("error", instrumentError);
}
