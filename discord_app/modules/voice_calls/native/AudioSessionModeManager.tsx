// discord_app/modules/voice_calls/native/AudioSessionModeManager.tsx
import VoicePermissionManager from "../VoicePermissionManager.tsx";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import StageChannelRoleStore from "../../stage_channels/StageChannelRoleStore.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handleAVAudioSessionMode() {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
  if (null == channel) {
    VIDEO = VoiceEngine.AVAudioSessionMode.DEFAULT;
    let obj2 = VoiceEngine;
  } else {
    let hasVideoResult = ApplicationStreamingStore.getAllActiveStreams().length > 0;
    if (!hasVideoResult) {
      hasVideoResult = VoiceStateStore.hasVideo(channel.id);
    }
    if (!hasVideoResult) {
      hasVideoResult = MediaEngineStore.isVideoEnabled();
    }
    if (!hasVideoResult) {
      if (null == EmbeddedActivitiesStore.getCurrentEmbeddedActivity()) {
        const AVAudioSessionMode = VoiceEngine.AVAudioSessionMode;
        if (obj.shouldImmediatelyRequestVoicePermissions(AuthenticationStore.getId(), channel.id)) {
          VIDEO = AVAudioSessionMode.VOICE;
          obj2 = tmp9;
        } else {
          VIDEO = AVAudioSessionMode.LISTEN;
          obj2 = tmp9;
        }
        obj = VoicePermissionManager;
      }
    }
    VIDEO = VoiceEngine.AVAudioSessionMode.VIDEO;
    obj2 = VoiceEngine;
  }
  let tmp12 = VIDEO !== VIDEO;
  if (tmp12) {
    tmp12 = AppStateStore.getState() === AppStates.ACTIVE;
  }
  if (tmp12) {
    const result = obj2.setAVAudioSessionMode(VIDEO);
  }
}
const AppStates = fn(1074).AppStates;
let PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  PlatformUtils = {
    setAVAudioSessionMode() {},
    AVAudioSessionMode: {
      VOICE: "AVAudioSessionModeVoiceChat",
      VIDEO: "AVAudioSessionModeVideoChat",
      LISTEN: "AVAudioSessionModeSpokenAudio",
      DEFAULT: "AVAudioSessionModeDefault",
    },
  };
  let VoiceEngine = PlatformUtils;
} else {
  VoiceEngine = fn(17).NativeModules.VoiceEngine;
}
let VIDEO = VoiceEngine.AVAudioSessionMode.VOICE;
let prototype = function AudioSessionModeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const result = new Map().set(ApplicationStreamingStore, handleAVAudioSessionMode);
  const result1 = result.set(VoiceStateStore, handleAVAudioSessionMode);
  const result2 = result1.set(MediaEngineStore, handleAVAudioSessionMode);
  const result3 = result2.set(StageChannelRoleStore, handleAVAudioSessionMode);
  applyArgumentsResult.stores = result3.set(EmbeddedActivitiesStore, handleAVAudioSessionMode);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/AudioSessionModeManager.tsx");

export default prototype;
