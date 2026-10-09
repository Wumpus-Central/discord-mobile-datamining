// _runtime/metro/11164__.js
import _mod11165 from "11165__.js";
import _mod11168 from "11168__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod11168.GLOBAL_OBJ.onerror;
  _mod11168.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod11165.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod11168.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod11165.addHandler("error", errorCallback);
  _mod11165.maybeInstrument("error", instrumentError);
};
