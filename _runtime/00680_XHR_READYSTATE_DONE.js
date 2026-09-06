// === Module 680: XHR_READYSTATE_DONE ===

// Module 680 (XHR_READYSTATE_DONE)
import RN_GLOBAL_OBJ2 from "RN_GLOBAL_OBJ" /* 681 */;

require = arg1;
const dependencyMap = arg6;

export const XHR_READYSTATE_DONE = 4;
export const createStealthXhr = function createStealthXhr() {
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