// === Module 10003: VoiceActionUtils ===

// Module 10003 (VoiceActionUtils)
import CallsUtils from "CallsUtils" /* 9082 */;
import size from "module_2" /* 2 */;

function NOOP() {

}
const DominantMuteState = { SERVER_MUTE: 0, [0]: "SERVER_MUTE", SUPPRESS: 1, [1]: "SUPPRESS", SELF_MUTE: 2, [2]: "SELF_MUTE", NONE: 3, [3]: "NONE" };
const result = size.fileFinishedImporting("modules/video_calls/native/VoiceActionUtils.tsx");

export { DominantMuteState };
export const createMuteHandler = function createMuteHandler(muteStates) {
  let flag = stateFromStores;
  if (stateFromStores === undefined) {
    flag = false;
  }
  let dominantMuteState = obj.NONE;
  if (muteStates.selfMute) {
    dominantMuteState = obj.SELF_MUTE;
  }
  if (flag) {
    let onPress = NOOP;
  } else {
    onPress = CallsUtils.handleToggleSelfMute;
  }
  if (muteStates.suppress) {
    onPress = CallsUtils.showSuppressedAlert;
    dominantMuteState = obj.SUPPRESS;
  }
  if (muteStates.mute) {
    onPress = CallsUtils.showServerMuteAlert;
    dominantMuteState = obj.SERVER_MUTE;
  }
  const mute = muteStates.selfMute || muteStates.mute || muteStates.suppress;
  return { mute, onPress, dominantMuteState };
};
export const createDeafHandler = function createDeafHandler(deafStates) {
  let onPress = CallsUtils.handleToggleSelfDeaf;
  if (deafStates.deaf) {
    onPress = CallsUtils.showServerDeafenAlert;
  }
  const deaf = deafStates.selfDeaf || deafStates.deaf;
  return { deaf, onPress };
};