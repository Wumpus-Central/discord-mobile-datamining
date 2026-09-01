// === Module 8112: prototype ===

// Module 8112 (prototype)
import initializeDefault from "initialize" /* 5486 */;
import closure_0 from "handleConnectionOpen" /* 1981 */;

initializeDefault;
let prototype = function VideoBackgroundManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const voiceChannelId = applyArgumentsResult;
  applyArgumentsResult.previousSelectedVoiceChannelId = voiceChannelId.getVoiceChannelId();
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
const result = require("set").fileFinishedImporting("modules/calls/native/VideoBackgroundManager.tsx");

export default prototype;