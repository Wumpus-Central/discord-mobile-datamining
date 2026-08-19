// === Module 16529: handleAVAudioSessionMode ===

// Module 16529 (handleAVAudioSessionMode)
import initializeDefault from "initialize" /* 5038 */;
import handleVoiceChannelSelect from "handleVoiceChannelSelect" /* 16530 */;
import participantFromServer from "participantFromServer" /* 1390 */;
import buildStageChannelUserRoles from "buildStageChannelUserRoles" /* 4990 */;
import reset from "reset" /* 4652 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import getState from "getState" /* 7383 */;
import { AppStates } from "ME" /* 676 */;
import obj132 from "obj132" /* 500 */;

require = fn;
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
          obj2 = VoiceEngine;
        } else {
          VIDEO = AVAudioSessionMode.LISTEN;
          obj2 = VoiceEngine;
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
if (obj132.isAndroid()) {
  obj132 = { setAVAudioSessionMode: null, AVAudioSessionMode: null };
  obj132[0] = function setAVAudioSessionMode(VIDEO) {

  };
  obj132[1] = { VOICE: "AVAudioSessionModeVoiceChat", VIDEO: "AVAudioSessionModeVideoChat", LISTEN: "AVAudioSessionModeSpokenAudio", DEFAULT: "AVAudioSessionModeDefault" };
  let VoiceEngine = obj132;
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
class prototype extends tmp2 {
}
prototype = new prototype();
let result = obj132.fileFinishedImporting("modules/voice_calls/native/AudioSessionModeManager.tsx");

export default prototype;