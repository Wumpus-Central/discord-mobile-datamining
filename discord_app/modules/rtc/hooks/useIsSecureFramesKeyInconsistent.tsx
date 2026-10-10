// === Module 8839: useIsSecureFramesKeyInconsistent ===

// Module 8839 (useIsSecureFramesKeyInconsistent)
import SecureFramesUtils from "SecureFramesUtils" /* 8828 */;
import noop from "module_19" /* 19 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5110 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 7428 */;

require = fn;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsSecureFramesKeyInconsistent(userId) {
  const cResult = userId(576).c(3);
  userId = userId.userId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RTCConnectionStore, StreamRTCConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function c() {
      const items = [RTCConnectionStore, StreamRTCConnectionStore];
      return SecureFramesUtils.getIsSecureFramesKeyInconsistent(userId, items);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = userId(576);
  return userId(504).useStateFromStores(first, tmp7);
}) : (function useIsSecureFramesKeyInconsistent(userId) {
  userId = userId.userId;
  let items = [RTCConnectionStore, StreamRTCConnectionStore];
  return userId(504).useStateFromStores(items, () => {
    const items = [RTCConnectionStore, StreamRTCConnectionStore];
    return SecureFramesUtils.getIsSecureFramesKeyInconsistent(userId, items);
  });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx");

export const useIsSecureFramesKeyInconsistent = tmp2;
export const useAlertIfSecureFramesKeyInconsistent = ReactCompilerGating.isReactCompilerEnabled() ? (function useAlertIfSecureFramesKeyInconsistent(channelId) {
  const cResult = channelId(userId[4]).c(9);
  channelId = channelId.channelId;
  userId = channelId.userId;
  const nickname = channelId.nickname;
  const onAlertOpen = channelId.onAlertOpen;
  if (cResult[0] !== userId) {
    const obj2 = { userId };
    cResult[0] = userId;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  let tmp3 = ref(tmp2);
  closure_4 = tmp3;
  const obj = channelId(userId[4]);
  const obj3 = nickname;
  if (cResult[2] === channelId) {
    if (cResult[3] === tmp3) {
      if (cResult[4] === nickname) {
        if (cResult[5] === onAlertOpen) {
          if (cResult[6] === userId) {
            let tmp4 = cResult[7];
            let tmp5 = cResult[8];
          }
          const effect = obj3.useEffect(tmp4, tmp5);
        }
      }
    }
  }
  class S {
    constructor() {
      if (closure_4) {
        tmp = closure_5;
        tmp2 = null;
        if (null == closure_5.current) {
          tmp5 = globalThis;
          _setTimeout = setTimeout;
          num = 1000;
          tmp.current = setTimeout(() => { ... }, 1000);
          tmp3 = tmp;
        }
        current = tmp3.current;
        return () => { ... };
      }
      tmp3 = closure_5;
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
}) : (function useAlertIfSecureFramesKeyInconsistent(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const nickname = channelId.nickname;
  const onAlertOpen = channelId.onAlertOpen;
  ref = undefined;
  const tmp = ref({ userId });
  closure_4 = tmp;
  ref = nickname.useRef(null);
  const items = [channelId, tmp, nickname, onAlertOpen, userId];
  const effect = nickname.useEffect(() => {
    if (closure_4) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          onAlertOpen();
          const result = channelId(userId[5]).showSecureFramesKeyInconsistentAlert({ userId, channelId: current, nickname });
        }, 1000);
        let tmp3 = ref;
      }
      const current = tmp3.current;
      return () => {
        clearTimeout(current);
      };
    }
    tmp3 = ref;
    clearTimeout(ref.current);
    ref.current = null;
  }, items);
});