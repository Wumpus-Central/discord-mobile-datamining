// discord_app/modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

const require = fn;
let closure_4 = fn(9152).END_TO_END_ENCRYPTION_DISABLED;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = function useIsSecureFramesUIEnabled(channelId) {
  channelId = channelId.channelId;
  let items = [RTCConnectionStore, ChannelStore];
  const items1 = [channelId];
  return channelId(504).useStateFromStores(
    items,
    () => {
      const items = [RTCConnectionStore, ChannelStore];
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
                tmp4 = version !== closure_4;
              }
              flag = tmp4;
            }
          }
        }
      }
      return flag;
    },
    items1,
  );
};
