// discord_app/modules/stage_channels/useMyCurrentStageChannel.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
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
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [SelectedChannelStore, ChannelStore];
      return initialize.useStateFromStores(items, () => {
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
