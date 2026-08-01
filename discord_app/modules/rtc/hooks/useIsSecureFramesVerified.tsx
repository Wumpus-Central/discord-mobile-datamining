// === Module 8882: useIsUserSecureFramesVerified ===

// Module 8882 (useIsUserSecureFramesVerified)
import fetchFingerprint from "fetchFingerprint";
import createRTCConnection from "createRTCConnection";
import computeCallVerification from "computeCallVerification";

const require = arg1;
const result = require("computeCallVerification").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesVerified.tsx");

export const useIsUserSecureFramesVerified = function useIsUserSecureFramesVerified(channelId) {
  const userId = channelId.userId;
  let isSecureFramesUIEnabled;
  isSecureFramesUIEnabled = userId(isSecureFramesUIEnabled[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = userId(isSecureFramesUIEnabled[3]);
  const items = [computeCallVerification, fetchFingerprint, createRTCConnection];
  const items1 = [isSecureFramesUIEnabled, userId];
  return userId(isSecureFramesUIEnabled[4]).useStateFromStores(items, () => {
    let isUserConnectedResult = null != userId && isSecureFramesUIEnabled;
    if (isUserConnectedResult) {
      isUserConnectedResult = outer1_3.isUserConnected(tmp);
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = outer1_2.getId() !== tmp;
    }
    if (isUserConnectedResult) {
      isUserConnectedResult = outer1_4.isUserVerified(tmp);
    }
    return isUserConnectedResult;
  }, items1);
};
export const useIsStreamSecureFramesVerified = function useIsStreamSecureFramesVerified(channelId) {
  const streamKey = channelId.streamKey;
  let isSecureFramesUIEnabled;
  let isStreamRTCConnectionEmpty;
  isSecureFramesUIEnabled = streamKey(isSecureFramesUIEnabled[3]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = streamKey(isSecureFramesUIEnabled[3]);
  isStreamRTCConnectionEmpty = streamKey(isSecureFramesUIEnabled[5]).useIsStreamRTCConnectionEmpty(streamKey);
  const obj2 = streamKey(isSecureFramesUIEnabled[5]);
  const items = [computeCallVerification, isStreamRTCConnectionEmpty];
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  return streamKey(isSecureFramesUIEnabled[4]).useStateFromStores(items, () => {
    if (isSecureFramesUIEnabled) {
      if (!isStreamRTCConnectionEmpty) {
        if (null == streamKey) {
          return false;
        } else {
          const id = isStreamRTCConnectionEmpty.getId();
          let isStreamVerifiedResult = streamKey(isSecureFramesUIEnabled[6]).decodeStreamKey(tmp2).ownerId !== id;
          if (isStreamVerifiedResult) {
            isStreamVerifiedResult = outer1_4.isStreamVerified(tmp2);
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
  const items = [computeCallVerification];
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  return isSecureFramesUIEnabled(isCallRTCConnectionEmpty[4]).useStateFromStores(items, () => {
    let tmp = !isSecureFramesUIEnabled;
    if (isSecureFramesUIEnabled) {
      tmp = isCallRTCConnectionEmpty;
    }
    let isCallVerifiedResult = !tmp;
    if (!tmp) {
      isCallVerifiedResult = outer1_4.isCallVerified();
    }
    return isCallVerifiedResult;
  }, items1);
};