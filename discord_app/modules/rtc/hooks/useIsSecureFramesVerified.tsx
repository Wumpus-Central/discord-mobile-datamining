// === Module 9689: useIsUserSecureFramesVerified ===

// Module 9689 (useIsUserSecureFramesVerified)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import computeCallVerification from "computeCallVerification" /* 9690 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesVerified.tsx");

export const useIsUserSecureFramesVerified = function useIsUserSecureFramesVerified(channelId) {
  const userId = channelId.userId;
  let isSecureFramesUIEnabled;
  isSecureFramesUIEnabled = userId(isSecureFramesUIEnabled[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = userId(isSecureFramesUIEnabled[3]);
  const items = [closure_4, closure_2, closure_3];
  const items1 = [isSecureFramesUIEnabled, userId];
  return userId(isSecureFramesUIEnabled[4]).useStateFromStores(items, () => {
    let isUserConnectedResult = null != userId && isSecureFramesUIEnabled;
    if (isUserConnectedResult) {
      isUserConnectedResult = closure_1_3.isUserConnected(userId);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = closure_1_2.getId() !== userId;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = closure_1_4.isUserVerified(userId);
    }
    return isUserConnectedResult;
  }, items1);
};
export const useIsStreamSecureFramesVerified = function useIsStreamSecureFramesVerified(channelId) {
  const streamKey = channelId.streamKey;
  let isSecureFramesUIEnabled;
  isSecureFramesUIEnabled = streamKey(isSecureFramesUIEnabled[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = streamKey(isSecureFramesUIEnabled[3]);
  const isStreamRTCConnectionEmpty = streamKey(isSecureFramesUIEnabled[5]).useIsStreamRTCConnectionEmpty(streamKey);
  const obj2 = streamKey(isSecureFramesUIEnabled[5]);
  const items = [closure_4, isStreamRTCConnectionEmpty];
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  return streamKey(isSecureFramesUIEnabled[4]).useStateFromStores(items, () => {
    if (isSecureFramesUIEnabled) {
      if (!isStreamRTCConnectionEmpty) {
        if (null == streamKey) {
          return false;
        } else {
          const id = isStreamRTCConnectionEmpty.getId();
          let isStreamVerifiedResult = streamKey(isSecureFramesUIEnabled[6]).decodeStreamKey(streamKey).ownerId !== id;
          if (isStreamVerifiedResult) {
            isStreamVerifiedResult = closure_1_4.isStreamVerified(streamKey);
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
  isSecureFramesUIEnabled = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[3]);
  isCallRTCConnectionEmpty = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[5]).useIsCallRTCConnectionEmpty();
  const obj2 = isSecureFramesUIEnabled(isCallRTCConnectionEmpty[5]);
  const items = [closure_4];
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  return isSecureFramesUIEnabled(isCallRTCConnectionEmpty[4]).useStateFromStores(items, () => {
    let tmp = !isSecureFramesUIEnabled;
    if (isSecureFramesUIEnabled) {
      tmp = isCallRTCConnectionEmpty;
    }
    let isCallVerifiedResult = !tmp;
    if (!tmp) {
      isCallVerifiedResult = closure_1_4.isCallVerified();
    }
    return isCallVerifiedResult;
  }, items1);
};