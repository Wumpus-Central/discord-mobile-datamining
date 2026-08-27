// === Module 17000: updateVoiceSettings ===

// Module 17000 (updateVoiceSettings)
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 5438 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "bitrate" /* 4517 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "handleConnectionOpen" /* 1981 */;
import closure_6 from "mode" /* 13398 */;
import { VideoQualityMode } from "ME" /* 676 */;

function updateVoiceSettings() {
  let obj = store2;
  const voiceChannelId = store2.getVoiceChannelId();
  if (null != voiceChannelId) {
    const channel = store.getChannel(voiceChannelId);
    if (tmp5) {
      obj = { type: "SET_CHANNEL_BITRATE", bitrate: null };
      obj[1] = channel.bitrate;
      dispatcherDefault.dispatch(obj);
      const obj2 = dispatcherDefault;
    }
    tmp5 = null != channel && tmp2 !== channel.bitrate;
  }
  const voiceChannelId1 = obj.getVoiceChannelId();
  if (null != voiceChannelId1) {
    const channel1 = store.getChannel(voiceChannelId1);
    if (null != channel1) {
      let AUTO = channel1.videoQualityMode;
      if (AUTO == null) {
        AUTO = VideoQualityMode.AUTO;
      }
      if (tmp10 !== AUTO) {
        obj = { type: "SET_CHANNEL_VIDEO_QUALITY_MODE", mode: null };
        obj[1] = AUTO;
        dispatcherDefault.dispatch(obj);
        const obj4 = dispatcherDefault;
      }
    }
  }
}
function handleChannelUpdates(arg0) {
  while (tmp !== undefined) {
    let tmp3 = store2;
    if (store2.getVoiceChannelId() === tmp2.id) {
      let tmp4 = updateVoiceSettings;
      let tmp5 = updateVoiceSettings();
    }
    continue;
  }
}
function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const item = voiceStates.forEach((sessionId) => {
    if (sessionId.getSessionId() === sessionId.sessionId) {
      callback();
    }
  });
}
initializeDefault;
let prototype = function VoiceChannelSettingsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_UPDATES: handleChannelUpdates, VOICE_STATE_UPDATES: handleVoiceStateUpdates };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("stores/VoiceChannelSettingsManager.tsx");

export default prototype;