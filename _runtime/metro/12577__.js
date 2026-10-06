// === Module 12577: ? ===

// Module 12577
import _mod12578 from "module_12578" /* 12578 */;
import _mod12581 from "module_12581" /* 12581 */;

function instrumentError() {
  onerror = _mod12581.GLOBAL_OBJ.onerror;
  _mod12581.GLOBAL_OBJ.onerror = function(msg, url, line, column, error) {
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