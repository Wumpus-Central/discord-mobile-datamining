// === Module 10273: useMyCurrentStageChannel ===

// Module 10273 (useMyCurrentStageChannel)
import initialize from "initialize" /* 504 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4946 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannel.tsx");

export default function useMyCurrentStageChannel() {
  items = [SelectedChannelStore, ChannelStore];
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