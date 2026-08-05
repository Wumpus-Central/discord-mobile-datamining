// discord_app/modules/video_calls/native/VoiceActionUtils.tsx
import { _handleToggleVideo } from "../../voice_calls/native/CallsUtils.tsx";
function NOOP() {

}
const obj = { SERVER_MUTE: 0, [0]: "SERVER_MUTE", SUPPRESS: 1, [1]: "SUPPRESS", SELF_MUTE: 2, [2]: "SELF_MUTE", NONE: 3, [3]: "NONE" };
const result = require("set").fileFinishedImporting("modules/video_calls/native/VoiceActionUtils.tsx");

export const DominantMuteState = obj;
export const createMuteHandler = function createMuteHandler(muteStates, stateFromStores) {
  let flag = stateFromStores;
  if (stateFromStores === undefined) {
    flag = false;
  }
  let dominantMuteState = obj.NONE;
  if (muteStates.selfMute) {
    dominantMuteState = tmp.SELF_MUTE;
  }
  if (flag) {
    let onPress = NOOP;
  } else {
    onPress = _handleToggleVideo /* _handleToggleVideo */.handleToggleSelfMute;
  }
  if (muteStates.suppress) {
    onPress = _handleToggleVideo /* _handleToggleVideo */.showSuppressedAlert;
    dominantMuteState = tmp.SUPPRESS;
  }
  if (muteStates.mute) {
    onPress = _handleToggleVideo /* _handleToggleVideo */.showServerMuteAlert;
    dominantMuteState = tmp.SERVER_MUTE;
  }
  const mute = muteStates.selfMute || muteStates.mute || muteStates.suppress;
  return { mute, onPress, dominantMuteState };
};
export const createDeafHandler = function createDeafHandler(deafStates) {
  let onPress = _handleToggleVideo /* _handleToggleVideo */.handleToggleSelfDeaf;
  if (deafStates.deaf) {
    onPress = _handleToggleVideo /* _handleToggleVideo */.showServerDeafenAlert;
  }
  const deaf = deafStates.selfDeaf || deafStates.deaf;
  return { deaf, onPress };
};