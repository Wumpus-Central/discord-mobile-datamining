// _runtime/00815_createStealthXhr.js
import RN_GLOBAL_OBJ2 from "00816_RN_GLOBAL_OBJ.js";

require = arg1;
const dependencyMap = arg6;
arg5.XHR_READYSTATE_DONE = 4;
arg5.createStealthXhr = function createStealthXhr() {
  let RN_GLOBAL_OBJ = arg0;
  if (arg0 === undefined) {
    RN_GLOBAL_OBJ = RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ;
  }
  if (RN_GLOBAL_OBJ.XMLHttpRequest) {
    const xMLHttpRequest = new RN_GLOBAL_OBJ.XMLHttpRequest();
    if (xMLHttpRequest.open.__sentry_original__) {
      xMLHttpRequest.open = xMLHttpRequest.open.__sentry_original__;
    }
    if (xMLHttpRequest.send.__sentry_original__) {
      xMLHttpRequest.send = xMLHttpRequest.send.__sentry_original__;
    }
    return xMLHttpRequest;
  } else {
    return null;
  }
};