// === Module 9131: useIsSecureFramesVerified ===

// Module 9131 (useIsSecureFramesVerified)
import StreamKeyUtils from "StreamKeyUtils" /* 4612 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import SecureFramesVerifiedStore from "SecureFramesVerifiedStore" /* 9132 */;
import TransientKeyStore from "TransientKeyStore" /* 9133 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9134 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesVerified.tsx");

export const useIsUserSecureFramesVerified = function useIsUserSecureFramesVerified(channelId) {
  const userId = channelId.userId;
  const userKey = channelId.userKey;
  const isSecureFramesUIEnabled = userId(userKey[5]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = userId(userKey[5]);
  const items = [SecureFramesVerifiedStore, isSecureFramesUIEnabled, RTCConnectionStore, VerifiedKeyStore, TransientKeyStore];
  const items1 = [isSecureFramesUIEnabled, userId, userKey];
  return userId(userKey[6]).useStateFromStores(items, () => {
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
};
export const useIsStreamSecureFramesVerified = function useIsStreamSecureFramesVerified(channelId) {
  const streamKey = channelId.streamKey;
  let isSecureFramesUIEnabled;
  isSecureFramesUIEnabled = streamKey(isSecureFramesUIEnabled[5]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = streamKey(isSecureFramesUIEnabled[5]);
  const isStreamRTCConnectionEmpty = streamKey(isSecureFramesUIEnabled[7]).useIsStreamRTCConnectionEmpty(streamKey);
  const obj2 = streamKey(isSecureFramesUIEnabled[7]);
  const items = [SecureFramesVerifiedStore, isStreamRTCConnectionEmpty];
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  return streamKey(isSecureFramesUIEnabled[6]).useStateFromStores(items, () => {
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
};
export const useIsCallSecureFramesVerified = function useIsCallSecureFramesVerified(channelId) {
  let isSecureFramesUIEnabled;
  let isCallRTCConnectionEmpty;
  isSecureFramesUIEnabled = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[5]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[5]);
  isCallRTCConnectionEmpty = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[7]).useIsCallRTCConnectionEmpty();
  const obj2 = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[7]);
  const items = [SecureFramesVerifiedStore];
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  return isSecureFramesUIEnabled(isCallRTCConnectionEmpty[6]).useStateFromStores(items, () => {
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
};