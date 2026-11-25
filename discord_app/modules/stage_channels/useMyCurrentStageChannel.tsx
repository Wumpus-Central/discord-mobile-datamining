// === Module 10230: useMyCurrentStageChannel ===

// Module 10230 (useMyCurrentStageChannel)
import initialize from "initialize" /* 504 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4915 */;

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