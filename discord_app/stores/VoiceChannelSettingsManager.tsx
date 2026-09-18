// === Module 17816: VoiceChannelSettingsManager ===

// Module 17816 (VoiceChannelSettingsManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import BitRateStore from "BitRateStore" /* 14204 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;
import VideoQualityModeStore from "VideoQualityModeStore" /* 14205 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7314 */;

function updateVoiceSettings() {
  const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
  if (null != voiceChannelId) {
    const channel = ChannelStore.getChannel(voiceChannelId);
    if (tmp5) {
      const obj3 = { type: "SET_CHANNEL_BITRATE", bitrate: channel.bitrate };
      DispatcherDefault.dispatch(obj3);
    }
    tmp5 = null != channel && tmp2 !== channel.bitrate;
  }
  const voiceChannelId1 = SelectedChannelStore.getVoiceChannelId();
  if (null != voiceChannelId1) {
    const channel1 = ChannelStore.getChannel(voiceChannelId1);
    if (null != channel1) {
      let AUTO = channel1.videoQualityMode;
      if (AUTO == null) {
        AUTO = VideoQualityMode.AUTO;
      }
      if (tmp10 !== AUTO) {
        const obj5 = { type: "SET_CHANNEL_VIDEO_QUALITY_MODE", mode: AUTO };
        DispatcherDefault.dispatch(obj5);
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
const prototype = function VoiceChannelSettingsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_UPDATES: handleChannelUpdates, VOICE_STATE_UPDATES: handleVoiceStateUpdates };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("stores/VoiceChannelSettingsManager.tsx");

export default prototype1;