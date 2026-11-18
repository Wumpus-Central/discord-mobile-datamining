// === Module 20117: VoicePanelManager ===

// Module 20117 (VoicePanelManager)
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 10815 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5564 */;
import VoicePanelStore from "VoicePanelStore" /* 6403 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;

require = fn;
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
          if (!obj.isStageUnifiedCall(channel, "VoicePanelManager")) {
            state.closeChannel(channelId);
          }
          obj = StageChannelUnifiedCallExperiment;
        }
        const channels = state.channels;
        if (!channels.has(channelId)) {
          state.openChannel(channelId);
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
          if (!obj.isStageUnifiedCall(channel, "VoicePanelManager")) {
            state.closeChannel(channelId);
          }
          obj = StageChannelUnifiedCallExperiment;
        }
        const channels = state.channels;
        if (!channels.has(channelId)) {
          state.openChannel(channelId);
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