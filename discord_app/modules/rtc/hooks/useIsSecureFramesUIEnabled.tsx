import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import { END_TO_END_ENCRYPTION_DISABLED as closure_4 } from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";

const require = arg1;
const result = require("SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = function useIsSecureFramesUIEnabled(channelId) {
  channelId = channelId.channelId;
  let items = [createRTCConnection, ensureGuildLoaded];
  const items1 = [channelId];
  return channelId(589).useStateFromStores(items, () => {
    let obj;
    let obj2;
    const items = [outer1_3, outer1_2];
    [obj, obj2] = items;
    let flag = false;
    if (null != channelId) {
      flag = false;
      if (obj.getChannelId() === tmp) {
        const channel = obj2.getChannel(tmp);
        flag = false;
        if (null != channel) {
          flag = false;
          if (!channel.isGuildStageVoice()) {
            const secureFramesState = obj.getSecureFramesState();
            let version;
            if (secureFramesState != null) {
              version = secureFramesState.version;
            }
            let tmp4 = null != version;
            if (tmp4) {
              tmp4 = version !== outer1_4;
            }
            flag = tmp4;
          }
        }
      }
    }
    return flag;
  }, items1);
};