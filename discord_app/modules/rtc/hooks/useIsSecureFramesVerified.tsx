// === Module 9345: useIsSecureFramesVerified ===

// Module 9345 (useIsSecureFramesVerified)
import StreamKeyUtils from "StreamKeyUtils" /* 4942 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import SecureFramesVerifiedStore from "SecureFramesVerifiedStore" /* 9346 */;
import TransientKeyStore from "TransientKeyStore" /* 9347 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9348 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let streamKey, userId;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let channelId;
  let tmp4;
  let tmp6;
  let userKey;
  const obj = userId(userKey[6]);
  const cResult = obj.c(8);
  userId = userId.userId;
  ({ channelId, userKey } = userId);
  if (cResult[0] !== channelId) {
    const obj2 = { channelId };
    cResult[0] = channelId;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = userId(userKey[7]);
  const isSecureFramesUIEnabled = tmpResult.useIsSecureFramesUIEnabled(tmp4);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesVerifiedStore, , , , ];
    items[1] = isSecureFramesUIEnabled;
    items[2] = RTCConnectionStore;
    items[3] = VerifiedKeyStore;
    items[4] = TransientKeyStore;
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === isSecureFramesUIEnabled) {
    if (cResult[4] === userId) {
      let tmp12;
      let tmp13;
      if (cResult[5] === userKey) {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const tmpResult2 = userId(userKey[8]);
      return tmpResult2.useStateFromStores(tmp6, tmp12, tmp13);
    }
  }
  const fn = function h() {
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
              const self = this;
              const self2 = this;
              const uint8Array = new Uint8Array(userKey);
              const isKeyVerifiedResult = VerifiedKeyStore.isKeyVerified(userId, uint8Array) || TransientKeyStore.isKeyVerified(userId, uint8Array);
              return isKeyVerifiedResult;
            }
          }
        }
      }
    }
    return false;
  };
  const items1 = [isSecureFramesUIEnabled, userId, userKey];
  cResult[3] = isSecureFramesUIEnabled;
  cResult[4] = userId;
  cResult[5] = userKey;
  cResult[6] = fn;
  cResult[7] = items1;
  tmp13 = items1;
  tmp12 = fn;
}) : ((userId) => {
  userId = userId.userId;
  const userKey = userId.userKey;
  const channelId = userId.channelId;
  const obj = userId(userKey[7]);
  const isSecureFramesUIEnabled = obj.useIsSecureFramesUIEnabled({ channelId });
  const items = [SecureFramesVerifiedStore, isSecureFramesUIEnabled, RTCConnectionStore, VerifiedKeyStore, TransientKeyStore];
  const items1 = [isSecureFramesUIEnabled, userId, userKey];
  const obj2 = userId(userKey[8]);
  return obj2.useStateFromStores(items, function() {
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
              const self = this;
              const self2 = this;
              const uint8Array = new Uint8Array(userKey);
              const isKeyVerifiedResult = VerifiedKeyStore.isKeyVerified(userId, uint8Array) || TransientKeyStore.isKeyVerified(userId, uint8Array);
              return isKeyVerifiedResult;
            }
          }
        }
      }
    }
    return false;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((streamKey) => {
  let isSecureFramesUIEnabled;
  let tmp4;
  let tmp7;
  let obj = streamKey(isSecureFramesUIEnabled[6]);
  const cResult = obj.c(8);
  streamKey = streamKey.streamKey;
  const channelId = streamKey.channelId;
  if (cResult[0] !== channelId) {
    const obj2 = { channelId };
    cResult[0] = channelId;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = streamKey(isSecureFramesUIEnabled[7]);
  isSecureFramesUIEnabled = tmpResult.useIsSecureFramesUIEnabled(tmp4);
  const tmpResult3 = streamKey(isSecureFramesUIEnabled[9]);
  const isStreamRTCConnectionEmpty = tmpResult3.useIsStreamRTCConnectionEmpty(streamKey);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesVerifiedStore, isStreamRTCConnectionEmpty];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === isStreamRTCConnectionEmpty) {
    if (cResult[4] === isSecureFramesUIEnabled) {
      let tmp10;
      let tmp11;
      if (cResult[5] === streamKey) {
        tmp10 = cResult[6];
        tmp11 = cResult[7];
      }
      const tmpResult4 = streamKey(isSecureFramesUIEnabled[8]);
      return tmpResult4.useStateFromStores(tmp7, tmp10, tmp11);
    }
  }
  const fn = function f() {
    if (isSecureFramesUIEnabled) {
      if (!isStreamRTCConnectionEmpty) {
        if (null == streamKey) {
          return false;
        } else {
          const id = AuthenticationStore.getId();
          const obj = StreamKeyUtils;
          const isStreamVerifiedResult = obj.decodeStreamKey(streamKey).ownerId !== id && SecureFramesVerifiedStore.isStreamVerified(streamKey);
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
}) : ((streamKey) => {
  streamKey = streamKey.streamKey;
  let isSecureFramesUIEnabled;
  const channelId = streamKey.channelId;
  let obj = streamKey(isSecureFramesUIEnabled[7]);
  isSecureFramesUIEnabled = obj.useIsSecureFramesUIEnabled({ channelId });
  const obj2 = streamKey(isSecureFramesUIEnabled[9]);
  const isStreamRTCConnectionEmpty = obj2.useIsStreamRTCConnectionEmpty(streamKey);
  const items = [SecureFramesVerifiedStore, isStreamRTCConnectionEmpty];
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  const obj3 = streamKey(isSecureFramesUIEnabled[8]);
  return obj3.useStateFromStores(items, () => {
    if (isSecureFramesUIEnabled) {
      if (!isStreamRTCConnectionEmpty) {
        if (null == streamKey) {
          return false;
        } else {
          const id = AuthenticationStore.getId();
          const obj = StreamKeyUtils;
          const isStreamVerifiedResult = obj.decodeStreamKey(streamKey).ownerId !== id && SecureFramesVerifiedStore.isStreamVerified(streamKey);
          return isStreamVerifiedResult;
        }
      }
    }
    return false;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let isCallRTCConnectionEmpty;
  let isSecureFramesUIEnabled;
  let tmp4;
  let tmp7;
  let tmp = isSecureFramesUIEnabled;
  const obj = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[6]);
  const cResult = obj.c(7);
  channelId = channelId.channelId;
  if (cResult[0] !== channelId) {
    const obj2 = { channelId };
    cResult[0] = channelId;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = tmp(isCallRTCConnectionEmpty[7]);
  isSecureFramesUIEnabled = tmpResult.useIsSecureFramesUIEnabled(tmp4);
  const tmpResult3 = tmp(isCallRTCConnectionEmpty[9]);
  isCallRTCConnectionEmpty = tmpResult3.useIsCallRTCConnectionEmpty();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SecureFramesVerifiedStore];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === isCallRTCConnectionEmpty) {
    let tmp9;
    let tmp10;
    if (cResult[4] === isSecureFramesUIEnabled) {
      tmp9 = cResult[5];
      tmp10 = cResult[6];
    }
    const tmpResult4 = tmp(isCallRTCConnectionEmpty[8]);
    return tmpResult4.useStateFromStores(tmp7, tmp9, tmp10);
  }
  const fn = function o() {
    let tmp = !isSecureFramesUIEnabled;
    if (isSecureFramesUIEnabled) {
      tmp = isCallRTCConnectionEmpty;
    }
    const isCallVerifiedResult = !tmp && SecureFramesVerifiedStore.isCallVerified();
    return isCallVerifiedResult;
  };
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  cResult[3] = isCallRTCConnectionEmpty;
  cResult[4] = isSecureFramesUIEnabled;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : ((channelId) => {
  let isSecureFramesUIEnabled;
  let isCallRTCConnectionEmpty;
  channelId = channelId.channelId;
  const obj = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[7]);
  isSecureFramesUIEnabled = obj.useIsSecureFramesUIEnabled({ channelId });
  const obj2 = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[9]);
  isCallRTCConnectionEmpty = obj2.useIsCallRTCConnectionEmpty();
  const items = [SecureFramesVerifiedStore];
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  const obj3 = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[8]);
  return obj3.useStateFromStores(items, () => {
    let tmp = !isSecureFramesUIEnabled;
    if (isSecureFramesUIEnabled) {
      tmp = isCallRTCConnectionEmpty;
    }
    const isCallVerifiedResult = !tmp && SecureFramesVerifiedStore.isCallVerified();
    return isCallVerifiedResult;
  }, items1);
});
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesVerified.tsx");

export const useIsUserSecureFramesVerified = tmp2;
export const useIsStreamSecureFramesVerified = tmp3;
export const useIsCallSecureFramesVerified = tmp4;