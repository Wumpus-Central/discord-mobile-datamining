// === Module 12569: ? ===

// Module 12569
import _mod12563 from "module_12563" /* 12563 */;
import _mod12566 from "module_12566" /* 12566 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod12566.GLOBAL_OBJ.onunhandledrejection;
  _mod12566.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod12563;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod12566.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  const obj = _mod12563;
  obj.addHandler("unhandledrejection", errorCallback);
  const obj2 = _mod12563;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};