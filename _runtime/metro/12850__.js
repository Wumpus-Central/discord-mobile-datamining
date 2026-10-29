// _runtime/metro/12850__.js
import _mod12851 from "12851__.js";
import _mod12854 from "12854__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod12854.GLOBAL_OBJ.onerror;
  _mod12854.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod12851.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod12854.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod12851.addHandler("error", errorCallback);
  _mod12851.maybeInstrument("error", instrumentError);
}
