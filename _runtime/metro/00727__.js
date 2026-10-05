// === Module 727: ? ===

// Module 727
import _mod697 from "module_697" /* 697 */;
import _mod726 from "module_726" /* 726 */;

function instrumentUnhandledRejection() {
  onunhandledrejection = _mod697.GLOBAL_OBJ.onunhandledrejection;
  _mod697.GLOBAL_OBJ.onunhandledrejection = function(arg0) {
    const obj = _mod726;
    obj.triggerHandlers("unhandledrejection", arg0);
    let applyResult = !onunhandledrejection;
    if (onunhandledrejection) {
      applyResult = onunhandledrejection(...arguments);
    }
    return applyResult;
  };
  _mod697.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let onunhandledrejection = null;

export const addGlobalUnhandledRejectionInstrumentationHandler = function addGlobalUnhandledRejectionInstrumentationHandler(errorCallback) {
  const obj = _mod726;
  obj.addHandler("unhandledrejection", errorCallback);
  const obj2 = _mod726;
  obj2.maybeInstrument("unhandledrejection", instrumentUnhandledRejection);
};