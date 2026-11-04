// _runtime/metro/13270__.js
import _mod13271 from "13271__.js";
import _mod13274 from "13274__.js";

require = arg1;
const dependencyMap = arg6;
function instrumentError() {
  onerror = _mod13274.GLOBAL_OBJ.onerror;
  _mod13274.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    _mod13271.triggerHandlers("error", { column, error, line, msg, url });
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
  _mod13274.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export function addGlobalErrorInstrumentationHandler(errorCallback) {
  _mod13271.addHandler("error", errorCallback);
  _mod13271.maybeInstrument("error", instrumentError);
}
