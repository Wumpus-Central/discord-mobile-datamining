// === Module 9387: useIsEmptyRTCConnection ===

// Module 9387 (useIsEmptyRTCConnection)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4929 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StreamRTCConnectionStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      if (null == closure_0) {
        return true;
      } else {
        const userIds = StreamRTCConnectionStore.getUserIds(tmp);
        let tmp3 = null == userIds;
        if (!tmp3) {
          let tmp6 = 0 === userIds.size;
          if (!tmp6) {
            tmp6 = 1 === userIds.size && userIds.has(tmp5);
            const tmp7 = 1 === userIds.size && userIds.has(tmp5);
          }
          tmp3 = tmp6;
        }
        return tmp3;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [StreamRTCConnectionStore, AuthenticationStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      return true;
    } else {
      const userIds = StreamRTCConnectionStore.getUserIds(tmp);
      let tmp3 = null == userIds;
      if (!tmp3) {
        let tmp6 = 0 === userIds.size;
        if (!tmp6) {
          tmp6 = 1 === userIds.size && userIds.has(tmp5);
          const tmp7 = 1 === userIds.size && userIds.has(tmp5);
        }
        tmp3 = tmp6;
      }
      return tmp3;
    }
  });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsEmptyRTCConnection.tsx");

export const useIsStreamRTCConnectionEmpty = tmp2;
export const useIsCallRTCConnectionEmpty = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore, AuthenticationStore];
    const fn = function o() {
      userIds = userIds.getUserIds();
      let tmp = null == userIds;
      if (!tmp) {
        let tmp4 = 0 === userIds.size;
        if (!tmp4) {
          tmp4 = 1 === userIds.size && userIds.has(tmp3);
          const tmp5 = 1 === userIds.size && userIds.has(tmp3);
        }
        tmp = tmp4;
      }
      return tmp;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [RTCConnectionStore, AuthenticationStore];
  return initialize.useStateFromStores(items, () => {
    userIds = userIds.getUserIds();
    let tmp = null == userIds;
    if (!tmp) {
      let tmp4 = 0 === userIds.size;
      if (!tmp4) {
        tmp4 = 1 === userIds.size && userIds.has(tmp3);
        const tmp5 = 1 === userIds.size && userIds.has(tmp3);
      }
      tmp = tmp4;
    }
    return tmp;
  });
});