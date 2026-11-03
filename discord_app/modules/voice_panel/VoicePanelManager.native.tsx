// === Module 20167: VoicePanelManager ===

// Module 20167 (VoicePanelManager)
import ChannelStore from "ChannelStore" /* 4990 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5884 */;
import VoicePanelStore from "VoicePanelStore" /* 6995 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7407 */;

const prototype = function VoicePanelManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    VOICE_CHANNEL_SELECT() {
      const channelId = RTCConnectionStore.getChannelId();
      if (null != channelId) {
        state = VoicePanelStore.getState();
        const channel = ChannelStore.getChannel(channelId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          state.closeChannel(channelId);
        } else {
          const channels = state.channels;
          if (!channels.has(channelId)) {
            state.openChannel(channelId);
          }
        }
      }
    },
    RTC_CONNECTION_STATE() {
      const channelId = RTCConnectionStore.getChannelId();
      if (null != channelId) {
        state = VoicePanelStore.getState();
        const channel = ChannelStore.getChannel(channelId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          state.closeChannel(channelId);
        } else {
          const channels = state.channels;
          if (!channels.has(channelId)) {
            state.openChannel(channelId);
          }
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/VoicePanelManager.native.tsx");

export default prototype1;