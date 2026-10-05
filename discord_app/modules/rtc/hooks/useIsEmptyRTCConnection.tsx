// === Module 9387: useIsEmptyRTCConnection ===

// Module 9387 (useIsEmptyRTCConnection)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4929 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StreamRTCConnectionStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
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
            1 === userIds.size && userIds.has(tmp5);
          }
          tmp3 = tmp6;
        }
        return tmp3;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [StreamRTCConnectionStore, AuthenticationStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null == closure_0) {
      return true;
    } else {
      const userIds = StreamRTCConnectionStore.getUserIds(tmp);
      let tmp3 = null == userIds;
      if (!tmp3) {
        let tmp6 = 0 === userIds.size;
        if (!tmp6) {
          tmp6 = 1 === userIds.size && userIds.has(tmp5);
          1 === userIds.size && userIds.has(tmp5);
        }
        tmp3 = tmp6;
      }
      return tmp3;
    }
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RTCConnectionStore, AuthenticationStore];
    const fn = function o() {
      userIds = userIds.getUserIds();
      let tmp = null == userIds;
      if (!tmp) {
        let tmp4 = 0 === userIds.size;
        if (!tmp4) {
          tmp4 = 1 === userIds.size && userIds.has(tmp3);
          1 === userIds.size && userIds.has(tmp3);
        }
        tmp = tmp4;
      }
      return tmp;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [RTCConnectionStore, AuthenticationStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    userIds = userIds.getUserIds();
    let tmp = null == userIds;
    if (!tmp) {
      let tmp4 = 0 === userIds.size;
      if (!tmp4) {
        tmp4 = 1 === userIds.size && userIds.has(tmp3);
        1 === userIds.size && userIds.has(tmp3);
      }
      tmp = tmp4;
    }
    return tmp;
  });
});
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsEmptyRTCConnection.tsx");

export const useIsStreamRTCConnectionEmpty = tmp2;
export const useIsCallRTCConnectionEmpty = tmp3;