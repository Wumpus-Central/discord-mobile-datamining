// discord_app/modules/stage_channels/useMyCurrentStageChannel.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channel, voiceChannelId;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedChannelStore, ChannelStore];
        const fn = function u() {
          voiceChannelId = voiceChannelId.getVoiceChannelId();
          if (null != voiceChannelId) {
            channel = channel.getChannel(voiceChannelId);
            let isGuildStageVoiceResult;
            if (channel != null) {
              isGuildStageVoiceResult = channel.isGuildStageVoice();
            }
            if (isGuildStageVoiceResult) {
              return channel;
            }
          }
          return null;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [SelectedChannelStore, ChannelStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => {
        voiceChannelId = voiceChannelId.getVoiceChannelId();
        if (null != voiceChannelId) {
          channel = channel.getChannel(voiceChannelId);
          let isGuildStageVoiceResult;
          if (channel != null) {
            isGuildStageVoiceResult = channel.isGuildStageVoice();
          }
          if (isGuildStageVoiceResult) {
            return channel;
          }
        }
        return null;
      });
    };
const result = size.fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannel.tsx");

export default tmp2;
