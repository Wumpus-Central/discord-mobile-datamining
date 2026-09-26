// _runtime/metro/12310__.js
import _mod12311 from "12311__.js";
import _mod12314 from "12314__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12314.GLOBAL_OBJ.onerror;
  _mod12314.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod12311.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12314.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12311.addHandler("error", errorCallback);
  _mod12311.maybeInstrument("error", instrumentError);
};
