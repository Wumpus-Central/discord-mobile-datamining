// discord_app/modules/calls/native/VideoBackgroundManager.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import handleConnectionOpen from "../../../stores/SelectedChannelStore.tsx";

initializeDefault;
let prototype = function VideoBackgroundManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const voiceChannelId = applyArgumentsResult;
  applyArgumentsResult.previousSelectedVoiceChannelId = voiceChannelId.getVoiceChannelId();
  applyArgumentsResult.cachedDominantColors = {};
  applyArgumentsResult._handleSelectVoiceChannel = function _handleSelectVoiceChannel(channelId) {
    channelId = channelId.channelId;
    if (applyArgumentsResult.previousSelectedVoiceChannelId !== channelId) {
      applyArgumentsResult.cachedDominantColors = {};
    }
    applyArgumentsResult.previousSelectedVoiceChannelId = channelId;
  };
  applyArgumentsResult.actions = { VOICE_CHANNEL_SELECT: applyArgumentsResult._handleSelectVoiceChannel };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("obj132").fileFinishedImporting("modules/calls/native/VideoBackgroundManager.tsx");

export default prototype;