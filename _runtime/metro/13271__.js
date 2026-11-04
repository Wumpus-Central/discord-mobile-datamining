// _runtime/metro/13271__.js
import _mod13272 from "13272__.js";
import _mod13275 from "13275__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13275.GLOBAL_OBJ.onerror;
  _mod13275.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod13272.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13275.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod13272.addHandler("error", errorCallback);
  _mod13272.maybeInstrument("error", instrumentError);
}
