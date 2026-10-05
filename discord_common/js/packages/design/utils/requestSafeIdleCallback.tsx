// === Module 6981: requestSafeIdleCallback ===

// Module 6981 (requestSafeIdleCallback)
import GlobalUtils from "utils/GlobalUtils" /* 1361 */;
import size from "module_2" /* 2 */;

let closure_0;

const globalObject = GlobalUtils.getGlobalObject();
const result = size.fileFinishedImporting("../discord_common/js/packages/design/utils/requestSafeIdleCallback.tsx");

export function setOriginWindow(arg0) {
  closure_0 = arg0;
}
export const requestSafeIdleCallback = function requestSafeIdleCallback(arg0, timeout) {
  closure_0 = arg0;
  let closure_1 = closure_0;
  if (undefined !== closure_0) {
    let tmp = null;
    if (null != closure_0.requestIdleCallback) {
      if (null != closure_0.cancelIdleCallback) {
        let c2 = false;
        let c3 = null;
        let closure_4 = obj.requestIdleCallback(function runOnce() {
          const tmp = c2;
          if (!tmp) {
            c2 = true;
            if (null != c3) {
              closure_1.clearTimeout(c3);
              c3 = null;
            }
            closure_0();
          }
        }, timeout);
        let num;
        const _setTimeout = obj.setTimeout;
        if (timeout != null) {
          num = timeout.timeout;
        }
        if (num == null) {
          num = 1000;
        }
        c3 = _setTimeout(() => {
          const tmp = c2;
          if (!tmp) {
            closure_1.cancelIdleCallback(closure_4);
          }
          const tmp5 = c2;
          if (!tmp5) {
            c2 = true;
            if (null != c3) {
              closure_1.clearTimeout(c3);
              c3 = null;
            }
            closure_0();
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
  timeout = obj.setTimeout(arg0, 0);
  return () => {
    closure_1.clearTimeout(closure_5);
  };
};