// === Module 9376: useIsSecureFramesKeyInconsistent ===

// Module 9376 (useIsSecureFramesKeyInconsistent)
import SecureFramesUtils from "SecureFramesUtils" /* 9364 */;
import react from "react" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4929 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channelId, clearTimeoutResult, num, tmp6;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let first;
  let tmp7;
  let obj = userId(576);
  const cResult = obj.c(3);
  const tmp = userId;
  userId = userId.userId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RTCConnectionStore, StreamRTCConnectionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function c() {
      const items = [RTCConnectionStore, StreamRTCConnectionStore];
      const obj = SecureFramesUtils;
      return obj.getIsSecureFramesKeyInconsistent(userId, items);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((userId) => {
  userId = userId.userId;
  let obj = userId(504);
  let items = [RTCConnectionStore, StreamRTCConnectionStore];
  return obj.useStateFromStores(items, () => {
    const items = [RTCConnectionStore, StreamRTCConnectionStore];
    const obj = SecureFramesUtils;
    return obj.getIsSecureFramesKeyInconsistent(userId, items);
  });
});
let ref = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let tmp2;
  let userId;
  let obj = channelId(userId[4]);
  const cResult = obj.c(9);
  channelId = channelId.channelId;
  userId = channelId.userId;
  const nickname = channelId.nickname;
  const onAlertOpen = channelId.onAlertOpen;
  if (cResult[0] !== userId) {
    let obj2 = { userId };
    cResult[0] = userId;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = ref(tmp2);
  let closure_4 = tmp3;
  ref = nickname.useRef(null);
  const obj3 = nickname;
  if (cResult[2] === channelId) {
    if (cResult[3] === tmp3) {
      if (cResult[4] === nickname) {
        if (cResult[5] === onAlertOpen) {
          let tmp4;
          let tmp5;
          if (cResult[6] === userId) {
            tmp4 = cResult[7];
            tmp5 = cResult[8];
          }
          const effect = obj3.useEffect(tmp4, tmp5);
        }
      }
    }
  }
  class S {
    constructor() {
      tmp = closure_4;
      if (tmp) {
        tmp2 = closure_5;
        tmp3 = null;
        if (null == closure_5.current) {
          tmp6 = globalThis;
          _setTimeout = setTimeout;
          num = 1000;
          tmp2.current = setTimeout(() => { /* body not rendered: F139812 */ }, 1000);
          tmp4 = tmp2;
        }
        current = tmp4.current;
        return () => { /* body not rendered: F139813 */ };
      }
      tmp4 = closure_5;
      clearTimeoutResult = clearTimeout(closure_5.current);
      closure_5.current = null;
      return;
    }
  }
  const items = [channelId, tmp3, nickname, onAlertOpen, userId];
  cResult[2] = channelId;
  cResult[3] = tmp3;
  cResult[4] = nickname;
  cResult[5] = onAlertOpen;
  cResult[6] = userId;
  cResult[7] = S;
  cResult[8] = items;
  tmp5 = items;
  tmp4 = S;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const nickname = channelId.nickname;
  const onAlertOpen = channelId.onAlertOpen;
  ref = undefined;
  const tmp = ref({ userId });
  let closure_4 = tmp;
  ref = nickname.useRef(null);
  const items = [channelId, tmp, nickname, onAlertOpen, userId];
  const effect = nickname.useEffect(() => {
    if (closure_4) {
      let tmp4;
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          onAlertOpen();
          const obj = channelId(userId[5]);
          const obj2 = { userId, channelId: current, nickname };
          const result = obj.showSecureFramesKeyInconsistentAlert(obj2);
        }, 1000);
        tmp4 = ref;
      }
      const current = tmp4.current;
      return () => {
        clearTimeout(current);
      };
    }
    tmp4 = ref;
    clearTimeout(ref.current);
    ref.current = null;
  }, items);
});
let result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx");

export const useIsSecureFramesKeyInconsistent = tmp2;
export const useAlertIfSecureFramesKeyInconsistent = tmp3;