// _runtime/metro/12577__.js
import _mod12578 from "12578__.js";
import _mod12581 from "12581__.js";

function instrumentError() {
  onerror = _mod12581.GLOBAL_OBJ.onerror;
  _mod12581.GLOBAL_OBJ.onerror = function (msg, url, line, column, error) {
    const obj = { column, error, line, msg, url };
    const obj2 = _mod12578;
    obj2.triggerHandlers("error", obj);
    const applyResult = onerror && onerror(...arguments);
    return applyResult;
  };
  _mod12581.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = true;
}
let onerror = null;

export const addGlobalErrorInstrumentationHandler = function addGlobalErrorInstrumentationHandler(errorCallback) {
  const obj = _mod12578;
  obj.addHandler("error", errorCallback);
  const obj2 = _mod12578;
  obj2.maybeInstrument("error", instrumentError);
};
