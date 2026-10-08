// discord_app/modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

const require = fn;
function isSecureFramesUIEnabled(isCallRTCConnectionEmpty) {
  [obj, obj2] = items;
  if (null == isCallRTCConnectionEmpty) {
    return false;
  } else if (obj.getChannelId() !== isCallRTCConnectionEmpty) {
    return false;
  } else {
    const channel = obj2.getChannel(isCallRTCConnectionEmpty);
    if (null != channel) {
      if (!channel.isGuildStageVoice()) {
        const secureFramesState = obj.getSecureFramesState();
        let version;
        if (secureFramesState != null) {
          version = secureFramesState.version;
        }
        let tmp3 = null != version;
        if (tmp3) {
          tmp3 = version !== closure_4;
        }
        return tmp3;
      }
    }
    return false;
  }
}
let closure_4 = fn(8801).END_TO_END_ENCRYPTION_DISABLED;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsSecureFramesUIEnabled(channelId) {
      const cResult = channelId(576).c(4);
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [RTCConnectionStore, ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function l() {
          const items = [RTCConnectionStore, ChannelStore];
          return isSecureFramesUIEnabled(channelId, items);
        };
        const items1 = [channelId];
        cResult[1] = channelId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = channelId(576);
      return channelId(504).useStateFromStores(first, tmp7, tmp8);
    }
  : function useIsSecureFramesUIEnabled(channelId) {
      channelId = channelId.channelId;
      let items = [RTCConnectionStore, ChannelStore];
      const items1 = [channelId];
      return channelId(504).useStateFromStores(
        items,
        () => {
          const items = [RTCConnectionStore, ChannelStore];
          return isSecureFramesUIEnabled(channelId, items);
        },
        items1,
      );
    };
