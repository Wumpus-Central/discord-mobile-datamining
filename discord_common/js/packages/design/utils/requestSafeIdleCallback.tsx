// discord_common/js/packages/design/utils/requestSafeIdleCallback.tsx
import getGlobalObject from "getGlobalObject";

getGlobalObject = getGlobalObject.getGlobalObject();
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/utils/requestSafeIdleCallback.tsx");

export function setOriginWindow(arg0) {
  let closure_0 = arg0;
}
export const requestSafeIdleCallback = function requestSafeIdleCallback(arg0, timeout) {
  let closure_0 = arg0;
  let closure_1 = closure_0;
  if (undefined !== closure_0) {
    if (null != obj.requestIdleCallback) {
      if (null != obj.cancelIdleCallback) {
        let c2 = false;
        timeout = null;
        let closure_4 = obj.requestIdleCallback(function runOnce(arg0) {
          if (!c2) {
            c2 = true;
            if (null != c3) {
              closure_1.clearTimeout(c3);
              c3 = null;
            }
            callback();
          }
        }, timeout);
        let num;
        if (timeout != null) {
          num = timeout.timeout;
        }
        if (num == null) {
          num = 1000;
        }
        timeout = obj.setTimeout(() => {
          if (!c2) {
            closure_1.cancelIdleCallback(closure_4);
          }
          if (!c2) {
            c2 = true;
            if (null != c3) {
              closure_1.clearTimeout(c3);
              c3 = null;
            }
            callback();
          }
        }, num);
        return () => {
          closure_1.cancelIdleCallback(closure_4);
          if (null != c3) {
            closure_1.clearTimeout(c3);
            c3 = null;
          }
        };
      }
    }
  }
  const timeout2 = obj.setTimeout(arg0, 0);
  return () => {
    closure_1.clearTimeout(closure_5);
  };
};