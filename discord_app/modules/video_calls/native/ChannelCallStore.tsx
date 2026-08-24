// === Module 8706: VoiceChatDrawerState ===

// Module 8706 (VoiceChatDrawerState)
import batchUpdates from "batchUpdates" /* 705 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import areParticipantStatesEqualDefault from "areParticipantStatesEqual" /* 8710 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 8711 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "participantFromServer" /* 1390 */;
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH" /* 8707 */;
import { OrientationLockState } from "items3" /* 4485 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4549 */;
import keys from "keys" /* 644 */;
import importDefaultResult from "apply" /* 12 */;

require = arg1;
({ VoiceCallOverlayType, VoiceChatDrawerState } = BOX_MODE_ACTIONSHEET_WIDTH);
const timeout = new require("start").Timeout();
let obj = { focus: true, pipFocus: false, isGestureEnabled: true, voiceChatDrawerState: VoiceChatDrawerState.CLOSED, voiceCallOverlayLayoutStates: null };
obj = {};
obj = { x: "Array", y: "flex", width: "y", height: "HermesInternal", screenOrientation: require("handleOrientationChange").OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: true, isInitialized: true, isVisible: "nodeType" };
obj[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = obj;
obj[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = { x: "Array", y: "flex", width: "y", height: "HermesInternal", screenOrientation: require("handleOrientationChange").OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: true, isInitialized: true, isVisible: "nodeType" };
obj[4] = obj;
let closure_9 = Object.freeze(obj);
let obj2 = keys.create(() => closure_9);
const obj1 = { x: "Array", y: "flex", width: "y", height: "HermesInternal", screenOrientation: require("handleOrientationChange").OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: true, isInitialized: true, isVisible: "nodeType" };
const throttleResult = importDefaultResult.throttle(() => {
  const pipFocus = obj2.getState().pipFocus;
  pipFocus(705).batchUpdates(() => closure_1_10.setState({ pipFocus: !pipFocus }));
}, 300);
let result = require("set").fileFinishedImporting("modules/video_calls/native/ChannelCallStore.tsx");

export const focusTimeout = timeout;
export const setFocus = function setFocus(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_10.setState({ focus: closure_0 }));
};
export const toggleFocus = function toggleFocus() {
  const focus = obj2.getState().focus;
  focus(705).batchUpdates(() => closure_1_10.setState({ focus: !focus, pipFocus: false }));
};
export const resetFocusTimer = function resetFocusTimer() {
  timeout.stop();
  timeout.start(5000, () => {
    callback(table[8]).batchUpdates(() => state.setState({ focus: false }));
  });
};
export const resetFocus = function resetFocus() {
  if (obj2.getState().focus) {
    timeout.stop();
    timeout.start(5000, () => {
      callback(table[8]).batchUpdates(() => state.setState({ focus: false }));
    });
  } else {
    batchUpdates.batchUpdates(() => state.setState({ focus: true }));
    const obj = batchUpdates;
  }
};
export const clearFocusTimer = function clearFocusTimer() {
  timeout.stop();
};
export const setVoiceChatDrawerState = function setVoiceChatDrawerState(embeddedActivityLocationChannelId, CLOSED) {
  const _require = embeddedActivityLocationChannelId;
  importDefault = CLOSED;
  if (!tmp) {
    dispatcherDefault.wait(() => CLOSED(closure_1_2[10]).updateChatOpen(closure_0, CLOSED === closure_1_5.OPEN));
    const obj = dispatcherDefault;
  }
  _require(705).batchUpdates(() => closure_1_10.setState({ voiceChatDrawerState: closure_1 }));
};
export const togglePipFocus = throttleResult;
export const useIsVoiceChatFocused = function useIsVoiceChatFocused() {
  const voiceChatDrawerState = obj2().voiceChatDrawerState;
  return voiceChatDrawerState === VoiceChatDrawerState.OPEN || voiceChatDrawerState === VoiceChatDrawerState.CLOSING;
};
export const useChannelCallOrientationHandlers = function useChannelCallOrientationHandlers(isGuildStageVoice) {
  const tmp2 = areParticipantStatesEqualDefault(isGuildStageVoice);
  const _require = tmp2;
  const tmp3 = useSelectedParticipantDefault(isGuildStageVoice);
  importDefault = tmp3;
  let isGuildStageVoiceResult = isGuildStageVoice.isGuildStageVoice();
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = null == tmp3;
  }
  dependencyMap = isGuildStageVoiceResult;
  const voiceChatDrawerState = obj2().voiceChatDrawerState;
  let tmp6 = voiceChatDrawerState === stateFromStores.OPEN || voiceChatDrawerState === stateFromStores.CLOSING;
  if (!tmp6) {
    tmp6 = !obj.useIsConnectedToVoiceChannel(isGuildStageVoice);
  }
  const React = tmp6;
  const currentEmbeddedActivity = applicationId.getCurrentEmbeddedActivity();
  applicationId = undefined;
  if (currentEmbeddedActivity != null) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  obj = _require(8712);
  const tmp7 = _require;
  const tmp8 = applicationId;
  const items = [tmp8];
  const items1 = [applicationId];
  stateFromStores = _require(589).useStateFromStores(items, () => {
    if (null != applicationId) {
      let UNLOCKED2 = applicationId.getOrientationLockStateForApp(tmp);
      if (UNLOCKED2 == null) {
        UNLOCKED2 = closure_1_6.UNLOCKED;
      }
      let UNLOCKED = UNLOCKED2;
    } else {
      UNLOCKED = closure_1_6.UNLOCKED;
    }
    return UNLOCKED;
  }, items1);
  const effect = React.useEffect(() => callback(isGuildStageVoiceResult[6]).restoreDefaultOrientation, []);
  const items2 = [stateFromStores, tmp3, applicationId, tmp2, isGuildStageVoiceResult, tmp6];
  const effect1 = React.useEffect(() => {
    if (!closure_2) {
      if (!closure_3) {
        if (null != callback2) {
          if (tmp2.type === closure_1_7.ACTIVITY) {
            if (tmp2.applicationId === applicationId) {
              if (callback2(isGuildStageVoiceResult[16])()) {
                if (closure_1_6.UNLOCKED === stateFromStores) {
                  callback(isGuildStageVoiceResult[6]).unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
                  const obj3 = callback(isGuildStageVoiceResult[6]);
                } else if (tmp14.PORTRAIT === tmp13) {
                  callback(isGuildStageVoiceResult[6]).lockOrientation("PORTRAIT", true);
                  obj2 = callback(isGuildStageVoiceResult[6]);
                } else if (tmp14.LANDSCAPE === tmp13) {
                  callback(isGuildStageVoiceResult[6]).lockOrientation("LANDSCAPE", true);
                  const obj6 = callback(isGuildStageVoiceResult[6]);
                }
              }
            }
          }
        }
        const obj = callback(isGuildStageVoiceResult[6]);
        if (callback) {
          const result = obj.lockOrientationForiOS("PORTRAIT");
        } else {
          obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      }
    }
    callback(isGuildStageVoiceResult[6]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    const obj4 = callback(isGuildStageVoiceResult[6]);
    const result1 = callback(isGuildStageVoiceResult[6]).lockOrientationForiOS("PORTRAIT");
  }, items2);
};
export const resetChannelCallStore = function resetChannelCallStore() {
  timeout.stop();
  batchUpdates.batchUpdates(() => state.setState(closure_9));
};
export const useChannelCallStore = obj2;