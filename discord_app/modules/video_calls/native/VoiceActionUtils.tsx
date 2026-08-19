// === Module 12567: NOOP ===

// Module 12567 (NOOP)
import obj132 from "obj132" /* 2 */;
import _handleToggleVideo from "_handleToggleVideo" /* 9647 */;

function NOOP() {

}
const obj = { SERVER_MUTE: 0, [0]: "SERVER_MUTE", SUPPRESS: 1, [1]: "SUPPRESS", SELF_MUTE: 2, [2]: "SELF_MUTE", NONE: 3, [3]: "NONE" };
const result = obj132.fileFinishedImporting("modules/video_calls/native/VoiceActionUtils.tsx");

export const DominantMuteState = obj;
export const createMuteHandler = function createMuteHandler(muteStates, stateFromStores) {
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
    onPress = _handleToggleVideo.handleToggleSelfMute;
  }
  if (muteStates.suppress) {
    onPress = _handleToggleVideo.showSuppressedAlert;
    dominantMuteState = obj.SUPPRESS;
  }
  if (muteStates.mute) {
    onPress = _handleToggleVideo.showServerMuteAlert;
    dominantMuteState = obj.SERVER_MUTE;
  }
  const mute = muteStates.selfMute || muteStates.mute || muteStates.suppress;
  return { mute, onPress, dominantMuteState };
};
export const createDeafHandler = function createDeafHandler(deafStates) {
  let onPress = _handleToggleVideo.handleToggleSelfDeaf;
  if (deafStates.deaf) {
    onPress = _handleToggleVideo.showServerDeafenAlert;
  }
  const deaf = deafStates.selfDeaf || deafStates.deaf;
  return { deaf, onPress };
};