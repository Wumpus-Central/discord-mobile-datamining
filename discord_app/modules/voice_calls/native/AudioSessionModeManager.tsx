// discord_app/modules/voice_calls/native/AudioSessionModeManager.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import handleVoiceChannelSelect from "../VoicePermissionManager.tsx";
import closure_2 from "../../activities/EmbeddedActivitiesStore.tsx";
import closure_3 from "../../stage_channels/StageChannelRoleStore.tsx";
import closure_4 from "../../../stores/ApplicationStreamingStore.tsx";
import closure_5 from "../../../stores/AuthenticationStore.tsx";
import closure_6 from "../../../stores/ChannelStore.tsx";
import closure_7 from "../../../stores/MediaEngineStore.tsx";
import closure_8 from "../../../stores/SelectedChannelStore.tsx";
import closure_9 from "../../../stores/VoiceStateStore.tsx";
import closure_10 from "../../../stores/native/AppStateStore.tsx";
import { AppStates } from "../../../Constants.tsx";
import set from "../../../utils/PlatformUtils.tsx";

require = arg1;
function handleAVAudioSessionMode() {
  channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  if (null == channel) {
    let VIDEO = VoiceEngine.AVAudioSessionMode.DEFAULT;
    let obj2 = VoiceEngine;
  } else {
    let hasVideoResult = allActiveStreams.getAllActiveStreams().length > 0;
    if (!hasVideoResult) {
      hasVideoResult = closure_9.hasVideo(channel.id);
    }
    if (!hasVideoResult) {
      hasVideoResult = videoEnabled.isVideoEnabled();
    }
    if (!hasVideoResult) {
      if (null == currentEmbeddedActivity.getCurrentEmbeddedActivity()) {
        const AVAudioSessionMode = VoiceEngine.AVAudioSessionMode;
        if (obj.shouldImmediatelyRequestVoicePermissions(id.getId(), channel.id)) {
          VIDEO = AVAudioSessionMode.VOICE;
          obj2 = tmp9;
        } else {
          VIDEO = AVAudioSessionMode.LISTEN;
          obj2 = tmp9;
        }
        obj = handleVoiceChannelSelect;
      }
    }
    VIDEO = VoiceEngine.AVAudioSessionMode.VIDEO;
    obj2 = VoiceEngine;
  }
  let tmp12 = VIDEO !== VIDEO;
  if (tmp12) {
    tmp12 = state.getState() === AppStates.ACTIVE;
  }
  if (tmp12) {
    const result = obj2.setAVAudioSessionMode(VIDEO);
  }
}
if (set.isAndroid()) {
  set = { setAVAudioSessionMode: null, AVAudioSessionMode: null };
  set[0] = function setAVAudioSessionMode(VIDEO) {};
  set[1] = {
    VOICE: "AVAudioSessionModeVoiceChat",
    VIDEO: "AVAudioSessionModeVideoChat",
    LISTEN: "AVAudioSessionModeSpokenAudio",
    DEFAULT: "AVAudioSessionModeDefault",
  };
  let VoiceEngine = set;
} else {
  VoiceEngine = require("get ActivityIndicator").NativeModules.VoiceEngine;
}
const VOICE = VoiceEngine.AVAudioSessionMode.VOICE;
initializeDefault;
let prototype = function AudioSessionModeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const result = new Map().set(closure_4, handleAVAudioSessionMode);
  const result1 = result.set(closure_9, handleAVAudioSessionMode);
  const result2 = result1.set(closure_7, handleAVAudioSessionMode);
  const result3 = result2.set(closure_3, handleAVAudioSessionMode);
  applyArgumentsResult.stores = result3.set(closure_2, handleAVAudioSessionMode);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/voice_calls/native/AudioSessionModeManager.tsx");

export default prototype;
