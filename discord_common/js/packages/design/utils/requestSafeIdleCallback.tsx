// discord_common/js/packages/design/utils/requestSafeIdleCallback.tsx
import GlobalUtils from "../../../shared/utils/GlobalUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let global = GlobalUtils.getGlobalObject();
const result = size.fileFinishedImporting("../discord_common/js/packages/design/utils/requestSafeIdleCallback.tsx");

export function setOriginWindow(arg0) {
  global = arg0;
}
export const requestSafeIdleCallback = function requestSafeIdleCallback(arg0, timeout) {
  closure_0 = arg0;
  closure_1 = global;
  if (undefined !== global) {
    if (null != obj.requestIdleCallback) {
      if (null != obj.cancelIdleCallback) {
        c2 = false;
        timeout = null;
        closure_4 = obj.requestIdleCallback(function runOnce() {
          if (!c2) {
            c2 = true;
            if (null != c3) {
              closure_1.clearTimeout(c3);
              c3 = null;
            }
            closure_0();
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
  const timeout2 = obj.setTimeout(arg0, 0);
  return () => {
    closure_1.clearTimeout(closure_5);
  };
};
