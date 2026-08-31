// discord_app/modules/rtc/hooks/useIsSecureFramesVerified.tsx
import closure_2 from "../../../stores/AuthenticationStore.tsx";
import closure_3 from "../../../stores/RTCConnectionStore.tsx";
import closure_4 from "../SecureFramesVerifiedStore.tsx";
import closure_5 from "../TransientKeyStore.tsx";
import closure_6 from "../VerifiedKeyStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesVerified.tsx");

export const useIsUserSecureFramesVerified = function useIsUserSecureFramesVerified(channelId) {
  const userId = channelId.userId;
  const userKey = channelId.userKey;
  let isSecureFramesUIEnabled;
  isSecureFramesUIEnabled = userId(userKey[5]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = userId(userKey[5]);
  const items = [closure_4, isSecureFramesUIEnabled, closure_3, closure_6, closure_5];
  const items1 = [isSecureFramesUIEnabled, userId, userKey];
  return userId(userKey[6]).useStateFromStores(items, () => {
    if (null != userId) {
      if (isSecureFramesUIEnabled) {
        if (closure_1_3.isUserConnected(tmp)) {
          if (isSecureFramesUIEnabled.getId() !== tmp) {
            if (undefined === userKey) {
              return closure_1_4.isUserVerified(tmp);
            } else if (null === tmp4) {
              return false;
            } else {
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(tmp4);
              let isKeyVerifiedResult = closure_1_6.isKeyVerified(tmp, uint8Array);
              if (!isKeyVerifiedResult) {
                isKeyVerifiedResult = closure_1_5.isKeyVerified(tmp, uint8Array);
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
  let isStreamRTCConnectionEmpty;
  isSecureFramesUIEnabled = streamKey(isSecureFramesUIEnabled[5]).useIsSecureFramesUIEnabled({ channelId: channelId.channelId });
  const obj = streamKey(isSecureFramesUIEnabled[5]);
  isStreamRTCConnectionEmpty = streamKey(isSecureFramesUIEnabled[7]).useIsStreamRTCConnectionEmpty(streamKey);
  const obj2 = streamKey(isSecureFramesUIEnabled[7]);
  const items = [closure_4, isStreamRTCConnectionEmpty];
  const items1 = [isStreamRTCConnectionEmpty, isSecureFramesUIEnabled, streamKey];
  return streamKey(isSecureFramesUIEnabled[6]).useStateFromStores(items, () => {
    if (isSecureFramesUIEnabled) {
      if (!isStreamRTCConnectionEmpty) {
        if (null == streamKey) {
          return false;
        } else {
          const id = isStreamRTCConnectionEmpty.getId();
          let isStreamVerifiedResult = streamKey(isSecureFramesUIEnabled[8]).decodeStreamKey(tmp2).ownerId !== id;
          if (isStreamVerifiedResult) {
            isStreamVerifiedResult = closure_1_4.isStreamVerified(tmp2);
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
  const items = [closure_4];
  const items1 = [isCallRTCConnectionEmpty, isSecureFramesUIEnabled];
  return isSecureFramesUIEnabled(isCallRTCConnectionEmpty[6]).useStateFromStores(items, () => {
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