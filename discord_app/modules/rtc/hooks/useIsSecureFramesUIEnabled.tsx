// discord_app/modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";
import { END_TO_END_ENCRYPTION_DISABLED as closure_4 } from "../SecureFramesConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = function useIsSecureFramesUIEnabled(channelId) {
  channelId = channelId.channelId;
  let items = [closure_3, closure_2];
  const items1 = [channelId];
  return channelId(589).useStateFromStores(items, () => {
    const items = [closure_1_3, closure_1_2];
    [obj, obj2] = items;
    let flag = false;
    if (null != channelId) {
      flag = false;
      if (obj.getChannelId() === channelId) {
        const channel = obj2.getChannel(channelId);
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
              tmp4 = version !== closure_1_4;
            }
            flag = tmp4;
          }
        }
      }
    }
    return flag;
  }, items1);
};