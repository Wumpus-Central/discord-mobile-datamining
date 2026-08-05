// discord_app/modules/voice_calls/native/AudioSessionModeManager.tsx
import participantFromServer from "participantFromServer";
import buildStageChannelUserRoles from "buildStageChannelUserRoles";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import handleConnectionOpen from "handleConnectionOpen";
import updateVoiceState from "updateVoiceState";
import getState from "getState";
import { AppStates } from "ME";
import set from "set";
import "initialize";
import set from "buildStageChannelUserRoles";

const require = arg1;
function handleAVAudioSessionMode() {
  channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
  if (null == channel) {
    let VIDEO = VoiceEngine.AVAudioSessionMode.DEFAULT;
    let obj2 = VoiceEngine;
  } else {
    let hasVideoResult = allActiveStreams.getAllActiveStreams().length > 0;
    if (!hasVideoResult) {
      hasVideoResult = updateVoiceState.hasVideo(channel.id);
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
        obj = require(16254) /* handleVoiceChannelSelect */;
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
  set[0] = function setAVAudioSessionMode(VIDEO) {

  };
  set[1] = { VOICE: "AVAudioSessionModeVoiceChat", VIDEO: "AVAudioSessionModeVideoChat", LISTEN: "AVAudioSessionModeSpokenAudio", DEFAULT: "AVAudioSessionModeDefault" };
  let VoiceEngine = set;
} else {
  VoiceEngine = require("get ActivityIndicator").NativeModules.VoiceEngine;
}
const VOICE = VoiceEngine.AVAudioSessionMode.VOICE;
let prototype = function AudioSessionModeManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const result = new Map().set(reset, handleAVAudioSessionMode);
  const result1 = result.set(updateVoiceState, handleAVAudioSessionMode);
  const result2 = result1.set(_detectH265HardwareDecode, handleAVAudioSessionMode);
  const result3 = result2.set(buildStageChannelUserRoles, handleAVAudioSessionMode);
  applyArgumentsResult.stores = result3.set(participantFromServer, handleAVAudioSessionMode);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/voice_calls/native/AudioSessionModeManager.tsx");

export default prototype;