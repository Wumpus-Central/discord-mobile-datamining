// === Module 16724: updateVoiceSettings ===

// Module 16724 (updateVoiceSettings)
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 5038 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import bitrate from "bitrate" /* 4537 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import mode from "mode" /* 13103 */;
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
      }
    }
  }
}
function handleChannelUpdates(arg0) {
  while (tmp !== undefined) {
    if (store2.getVoiceChannelId() === tmp2.id) {
      let tmp5 = updateVoiceSettings();
    }
    continue;
  }
  tmp = arg0.channels[Symbol.iterator]();
}
function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const item = voiceStates.forEach((item, index) => {
    if (sessionId.getSessionId() === item.sessionId) {
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
const result = require("obj132").fileFinishedImporting("stores/VoiceChannelSettingsManager.tsx");

export default prototype;