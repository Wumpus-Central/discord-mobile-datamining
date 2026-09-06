// === Module 17503: VoiceChannelSettingsManager ===

// Module 17503 (VoiceChannelSettingsManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BitRateStore from "BitRateStore" /* 13995 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import VideoQualityModeStore from "VideoQualityModeStore" /* 13996 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

function updateVoiceSettings() {
  let obj = SelectedChannelStore;
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  if (null != voiceChannelId) {
    const channel = ChannelStore.getChannel(voiceChannelId);
    if (tmp5) {
      obj = { type: "SET_CHANNEL_BITRATE", bitrate: channel.bitrate };
      DispatcherDefault.dispatch(obj);
    }
    tmp5 = null != channel && tmp2 !== channel.bitrate;
  }
  const voiceChannelId1 = obj.getVoiceChannelId();
  if (null != voiceChannelId1) {
    const channel1 = ChannelStore.getChannel(voiceChannelId1);
    if (null != channel1) {
      let AUTO = channel1.videoQualityMode;
      if (AUTO == null) {
        AUTO = VideoQualityMode.AUTO;
      }
      if (tmp10 !== AUTO) {
        obj = { type: "SET_CHANNEL_VIDEO_QUALITY_MODE", mode: AUTO };
        DispatcherDefault.dispatch(obj);
      }
    }
  }
}
function handleChannelUpdates(arg0) {
  while (tmp !== undefined) {
    if (SelectedChannelStore.getVoiceChannelId() === tmp2.id) {
      let tmp5 = updateVoiceSettings();
    }
    continue;
  }
  tmp = arg0.channels[Symbol.iterator]();
}
function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const item = voiceStates.forEach((sessionId) => {
    if (sessionId.getSessionId() === sessionId.sessionId) {
      updateVoiceSettings();
    }
  });
}
const VideoQualityMode = fn(1074).VideoQualityMode;
let prototype = function VoiceChannelSettingsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_UPDATES: handleChannelUpdates, VOICE_STATE_UPDATES: handleVoiceStateUpdates };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("stores/VoiceChannelSettingsManager.tsx");

export default prototype;