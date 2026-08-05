// discord_app/stores/VoiceChannelSettingsManager.tsx
import fetchFingerprint from "fetchFingerprint";
import bitrate from "bitrate";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import mode from "mode";
import { VideoQualityMode } from "ME";
import "initialize";

function updateVoiceSettings() {
  let obj = store2;
  const voiceChannelId = store2.getVoiceChannelId();
  if (null != voiceChannelId) {
    const channel = store.getChannel(voiceChannelId);
    if (tmp5) {
      obj = { type: "SET_CHANNEL_BITRATE", bitrate: null };
      obj[1] = channel.bitrate;
      require("../Dispatcher.tsx").dispatch(obj);
      const obj2 = require("../Dispatcher.tsx");
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
        require("../Dispatcher.tsx").dispatch(obj);
        const obj4 = require("../Dispatcher.tsx");
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
let prototype = function VoiceChannelSettingsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_UPDATES: handleChannelUpdates, VOICE_STATE_UPDATES: handleVoiceStateUpdates };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("ensureGuildLoaded").fileFinishedImporting("stores/VoiceChannelSettingsManager.tsx");

export default prototype;