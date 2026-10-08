// === Module 8781: useIsSecureFramesVerified ===

// Module 8781 (useIsSecureFramesVerified)
import StreamKeyUtils from "StreamKeyUtils" /* 5896 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import SecureFramesVerifiedStore from "SecureFramesVerifiedStore" /* 8782 */;
import TransientKeyStore from "TransientKeyStore" /* 8783 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 8784 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsUserSecureFramesVerified(userId) {
  const cResult = userId(userKey[6]).c(8);
  userId = userId.userId;
  ({ channelId, userKey } = userId);
  if (cResult[0] !== channelId) {
    const obj2 = { channelId };
    cResult[0] = channelId;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const obj = userId(userKey[6]);
  const isSecureFramesUIEnabled = userId(userKey[7]).useIsSecureFramesUIEnabled(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesVerifiedStore, isSecureFramesUIEnabled, RTCConnectionStore, VerifiedKeyStore, TransientKeyStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === isSecureFramesUIEnabled) {
    if (cResult[4] === userId) {
      if (cResult[5] === userKey) {
        let tmp12 = cResult[6];
        let tmp13 = cResult[7];
      }
      return tmp(userKey[8]).useStateFromStores(tmp6, tmp12, tmp13);
    }
  }
  class C {
    constructor() {
      tmp = userId;
      if (null != userId) {
        tmp15 = closure_2;
        if (closure_2) {
          tmp2 = closure_3;
          if (closure_3.isUserConnected(tmp)) {
            tmp3 = closure_2;
            if (closure_2.getId() !== tmp) {
              tmp4 = userKey;
              if (undefined === userKey) {
                tmp14 = closure_4;
                return closure_4.isUserVerified(tmp);
              } else if (null === tmp4) {
                flag = false;
                return false;
              } else {
                tmp5 = globalThis;
                _Uint8Array = Uint8Array;
                tmp6 = new.target;
                tmp7 = new.target;
                tmp8 = tmp4;
                uint8Array = new Uint8Array(tmp4);
                tmp10 = uint8Array;
                tmp11 = closure_6;
                isKeyVerifiedResult = closure_6.isKeyVerified(tmp, uint8Array);
                if (!isKeyVerifiedResult) {
                  tmp13 = closure_5;
                  isKeyVerifiedResult = closure_5.isKeyVerified(tmp, uint8Array);
                }
                return isKeyVerifiedResult;
              }
            }
          }
        }
      }
      return false;
    }
  }
  const items1 = [isSecureFramesUIEnabled, userId, userKey];
  cResult[3] = isSecureFramesUIEnabled;
  cResult[4] = userId;
  cResult[5] = userKey;
  cResult[6] = C;
  cResult[7] = items1;
  tmp13 = items1;
  tmp12 = C;
  const tmpResult = userId(userKey[7]);
}) : (function useIsUserSecureFramesVerified(channelId) {
  const userId = channelId.userId;
  const userKey = channelId.userKey;
  const isSecureFramesUIEnabled = userId(userKey[7]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = userId(userKey[7]);
  const items = [SecureFramesVerifiedStore, isSecureFramesUIEnabled, RTCConnectionStore, VerifiedKeyStore, TransientKeyStore];
  const items1 = [isSecureFramesUIEnabled, userId, userKey];
  return userId(userKey[8]).useStateFromStores(items, () => {
    if (null != userId) {
      if (isSecureFramesUIEnabled) {
        if (RTCConnectionStore.isUserConnected(userId)) {
          if (AuthenticationStore.getId() !== userId) {
            if (undefined === userKey) {
              return SecureFramesVerifiedStore.isUserVerified(userId);
            } else if (null === userKey) {
              return false;
            } else {
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(userKey);
              let isKeyVerifiedResult = VerifiedKeyStore.isKeyVerified(userId, uint8Array);
              if (!isKeyVerifiedResult) {
                isKeyVerifiedResult = TransientKeyStore.isKeyVerified(userId, uint8Array);
              }
              return isKeyVerifiedResult;
            }
          }
        }
      }
    }
    return false;
  }, items1);
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsStreamSecureFramesVerified(streamKey) {
  const cResult = streamKey(isSecureFramesUIEnabled[6]).c(8);
  streamKey = streamKey.streamKey;
  const channelId = streamKey.channelId;
  if (cResult[0] !== channelId) {
    const obj2 = { channelId };
    cResult[0] = channelId;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const obj = streamKey(isSecureFramesUIEnabled[6]);
  isSecureFramesUIEnabled = streamKey(isSecureFramesUIEnabled[7]).useIsSecureFramesUIEnabled(tmp4);
  const tmpResult = streamKey(isSecureFramesUIEnabled[7]);
  const isStreamRTCConnectionEmpty = streamKey(isSecureFramesUIEnabled[9]).useIsStreamRTCConnectionEmpty(streamKey);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesVerifiedStore, isStreamRTCConnectionEmpty];
    cResult[2] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === isStreamRTCConnectionEmpty) {
    if (cResult[4] === isSecureFramesUIEnabled) {
      if (cResult[5] === streamKey) {
        let tmp10 = cResult[6];
        let tmp11 = cResult[7];
      }
      return tmp(tmp2[8]).useStateFromStores(tmp7, tmp10, tmp11);
    }
  }
  const fn = function f() {
    if (isSecureFramesUIEnabled) {
      if (!isStreamRTCConnectionEmpty) {
        if (null == streamKey) {
          return false;
        } else {
          const id = AuthenticationStore.getId();
          let isStreamVerifiedResult = StreamKeyUtils.decodeStreamKey(streamKey).ownerId !== id;
          if (isStreamVerifiedResult) {
            isStreamVerifiedResult = SecureFramesVerifiedStore.isStreamVerified(streamKey);
          }
          return isStreamVerifiedResult;
        }
      }
    }
    return false;
  };
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  cResult[3] = isStreamRTCConnectionEmpty;
  cResult[4] = isSecureFramesUIEnabled;
  cResult[5] = streamKey;
  cResult[6] = fn;
  cResult[7] = items1;
  tmp11 = items1;
  tmp10 = fn;
  const tmpResult3 = streamKey(isSecureFramesUIEnabled[9]);
}) : (function useIsStreamSecureFramesVerified(channelId) {
  const streamKey = channelId.streamKey;
  let isSecureFramesUIEnabled;
  isSecureFramesUIEnabled = streamKey(isSecureFramesUIEnabled[7]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = streamKey(isSecureFramesUIEnabled[7]);
  const isStreamRTCConnectionEmpty = streamKey(isSecureFramesUIEnabled[9]).useIsStreamRTCConnectionEmpty(streamKey);
  const obj2 = streamKey(isSecureFramesUIEnabled[9]);
  const items = [SecureFramesVerifiedStore, isStreamRTCConnectionEmpty];
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  return streamKey(isSecureFramesUIEnabled[8]).useStateFromStores(items, () => {
    if (isSecureFramesUIEnabled) {
      if (!isStreamRTCConnectionEmpty) {
        if (null == streamKey) {
          return false;
        } else {
          const id = AuthenticationStore.getId();
          let isStreamVerifiedResult = StreamKeyUtils.decodeStreamKey(streamKey).ownerId !== id;
          if (isStreamVerifiedResult) {
            isStreamVerifiedResult = SecureFramesVerifiedStore.isStreamVerified(streamKey);
          }
          return isStreamVerifiedResult;
        }
      }
    }
    return false;
  }, items1);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesVerified.tsx");

export const useIsUserSecureFramesVerified = tmp2;
export const useIsStreamSecureFramesVerified = tmp3;
export const useIsCallSecureFramesVerified = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsCallSecureFramesVerified(channelId) {
  const cResult = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[6]).c(7);
  channelId = channelId.channelId;
  if (cResult[0] !== channelId) {
    const obj2 = { channelId };
    cResult[0] = channelId;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const obj = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[6]);
  isSecureFramesUIEnabled = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[7]).useIsSecureFramesUIEnabled(tmp4);
  const tmpResult = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[7]);
  isCallRTCConnectionEmpty = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[9]).useIsCallRTCConnectionEmpty();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesVerifiedStore];
    cResult[2] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === isCallRTCConnectionEmpty) {
    if (cResult[4] === isSecureFramesUIEnabled) {
      let tmp9 = cResult[5];
      let tmp10 = cResult[6];
    }
    return tmp(tmp2[8]).useStateFromStores(tmp7, tmp9, tmp10);
  }
  const fn = function o() {
    let tmp = !isSecureFramesUIEnabled;
    if (isSecureFramesUIEnabled) {
      tmp = isCallRTCConnectionEmpty;
    }
    let isCallVerifiedResult = !tmp;
    if (!tmp) {
      isCallVerifiedResult = SecureFramesVerifiedStore.isCallVerified();
    }
    return isCallVerifiedResult;
  };
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  cResult[3] = isCallRTCConnectionEmpty;
  cResult[4] = isSecureFramesUIEnabled;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp10 = items1;
  tmp9 = fn;
  const tmpResult3 = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[9]);
}) : (function useIsCallSecureFramesVerified(channelId) {
  let isSecureFramesUIEnabled;
  let isCallRTCConnectionEmpty;
  isSecureFramesUIEnabled = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[7]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[7]);
  isCallRTCConnectionEmpty = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[9]).useIsCallRTCConnectionEmpty();
  const obj2 = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[9]);
  const items = [SecureFramesVerifiedStore];
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  return isSecureFramesUIEnabled(isCallRTCConnectionEmpty[8]).useStateFromStores(items, () => {
    let tmp = !isSecureFramesUIEnabled;
    if (isSecureFramesUIEnabled) {
      tmp = isCallRTCConnectionEmpty;
    }
    let isCallVerifiedResult = !tmp;
    if (!tmp) {
      isCallVerifiedResult = SecureFramesVerifiedStore.isCallVerified();
    }
    return isCallVerifiedResult;
  }, items1);
});