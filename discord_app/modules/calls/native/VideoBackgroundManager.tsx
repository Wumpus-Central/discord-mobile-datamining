// === Module 8250: VideoBackgroundManager ===

// Module 8250 (VideoBackgroundManager)
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

let prototype = function VideoBackgroundManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  SelectedChannelStore = applyArgumentsResult;
  applyArgumentsResult.previousSelectedVoiceChannelId = SelectedChannelStore.getVoiceChannelId();
  applyArgumentsResult.cachedDominantColors = {};
  applyArgumentsResult._handleSelectVoiceChannel = function _handleSelectVoiceChannel(channelId) {
    channelId = channelId.channelId;
    if (applyArgumentsResult.previousSelectedVoiceChannelId !== channelId) {
      tmp.cachedDominantColors = {};
    }
    applyArgumentsResult.previousSelectedVoiceChannelId = channelId;
  };
  applyArgumentsResult.actions = { VOICE_CHANNEL_SELECT: applyArgumentsResult._handleSelectVoiceChannel };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/native/VideoBackgroundManager.tsx");

export default prototype;