// discord_app/modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx
import SecureFramesConstants from "../SecureFramesConstants.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let channelId;

function isSecureFramesUIEnabled(isCallRTCConnectionEmpty) {
  let obj;
  let obj2;
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
        return null != version && version !== closure_4;
      }
    }
    return false;
  }
}
let closure_4 = SecureFramesConstants.END_TO_END_ENCRYPTION_DISABLED;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp7;
      let tmp8;
      const obj = channelId(576);
      const cResult = obj.c(4);
      const tmp = channelId;
      channelId = channelId.channelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [RTCConnectionStore, ChannelStore];
        cResult[0] = items;
        first = items;
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
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      let items = [RTCConnectionStore, ChannelStore];
      const items1 = [channelId];
      const obj = channelId(504);
      return obj.useStateFromStores(
        items,
        () => {
          const items = [RTCConnectionStore, ChannelStore];
          return isSecureFramesUIEnabled(channelId, items);
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesUIEnabled.tsx");

export const useIsSecureFramesUIEnabled = tmp2;
