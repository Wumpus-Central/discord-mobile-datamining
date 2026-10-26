// === Module 18749: AudioSessionModeManager ===

// Module 18749 (AudioSessionModeManager)
import VoicePermissionManager from "VoicePermissionManager" /* 18750 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6686 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6642 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4874 */;
import VoiceStateStore from "VoiceStateStore" /* 5630 */;
import AppStateStore from "AppStateStore" /* 2001 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;

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
          obj2 = VoiceEngine;
        } else {
          VIDEO = AVAudioSessionMode.LISTEN;
          obj2 = VoiceEngine;
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
const AppStates = fn(1087).AppStates;
const PlatformUtils = fn(1384);
if (PlatformUtils.isAndroid()) {
  let obj2 = {
    setAVAudioSessionMode() {

      },
    AVAudioSessionMode: { VOICE: "AVAudioSessionModeVoiceChat", VIDEO: "AVAudioSessionModeVideoChat", LISTEN: "AVAudioSessionModeSpokenAudio", DEFAULT: "AVAudioSessionModeDefault" }
  };
  let VoiceEngine = obj2;
} else {
  VoiceEngine = fn(17).NativeModules.VoiceEngine;
}
let VIDEO = VoiceEngine.AVAudioSessionMode.VOICE;
const prototype = function AudioSessionModeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const result = new Map().set(ApplicationStreamingStore, handleAVAudioSessionMode);
  const result1 = result.set(VoiceStateStore, handleAVAudioSessionMode);
  const result2 = result1.set(MediaEngineStore, handleAVAudioSessionMode);
  const result3 = result2.set(StageChannelRoleStore, handleAVAudioSessionMode);
  applyArgumentsResult.stores = result3.set(EmbeddedActivitiesStore, handleAVAudioSessionMode);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/AudioSessionModeManager.tsx");

export default prototype1;