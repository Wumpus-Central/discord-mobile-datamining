// discord_app/stores/VoiceChannelSettingsManager.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import BitRateStore from "BitRateStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import SelectedChannelStore from "SelectedChannelStore.tsx";
import VideoQualityModeStore from "VideoQualityModeStore.tsx";
import AutomaticLifecycleManager from "../lib/AutomaticLifecycleManager.tsx";

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
  applyArgumentsResult.actions = {
    CHANNEL_UPDATES: handleChannelUpdates,
    VOICE_STATE_UPDATES: handleVoiceStateUpdates,
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("stores/VoiceChannelSettingsManager.tsx");

export default prototype;
