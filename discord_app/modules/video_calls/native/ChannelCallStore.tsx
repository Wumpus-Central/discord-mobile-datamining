// discord_app/modules/video_calls/native/ChannelCallStore.tsx
import noop from "noop";
import participantFromServer from "participantFromServer";
import BOX_MODE_ACTIONSHEET_WIDTH from "BOX_MODE_ACTIONSHEET_WIDTH";
import { OrientationLockState } from "items3";
import { ParticipantTypes } from "ParticipantTypes";
import keys from "keys";
import importDefaultResult from "areParticipantStatesEqual";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { batchUpdates } from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
import { useIsConnectedToVoiceChannel } from "../../voice_chat/VoiceChatHooks.tsx";
import { useSelectedParticipant } from "../useSelectedParticipant.tsx";
import { areParticipantStatesEqual } from "useIsPrivateAudioOnlyCall.tsx";

let VoiceCallOverlayType;
let VoiceChatDrawerState;
let require = arg1;
({ VoiceCallOverlayType, VoiceChatDrawerState } = BOX_MODE_ACTIONSHEET_WIDTH);
const timeout = new require("start").Timeout();
let obj = { focus: true, pipFocus: false, isGestureEnabled: true, voiceChatDrawerState: VoiceChatDrawerState.CLOSED, voiceCallOverlayLayoutStates: null };
obj = {};
obj = { x: "Array", y: "flex", width: "Array", height: "justifyContent", screenOrientation: require("handleOrientationChange").OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: null, isInitialized: null, isVisible: true };
obj[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = obj;
obj[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = { x: "Array", y: "flex", width: "Array", height: "justifyContent", screenOrientation: require("handleOrientationChange").OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: null, isInitialized: null, isVisible: true };
obj[4] = obj;
let closure_9 = Object.freeze(obj);
let obj2 = keys.create(() => closure_9);
const obj1 = { x: "Array", y: "flex", width: "Array", height: "justifyContent", screenOrientation: require("handleOrientationChange").OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: null, isInitialized: null, isVisible: true };
const throttleResult = require("areParticipantStatesEqual").throttle(() => {
  const pipFocus = obj2.getState().pipFocus;
  pipFocus(705).batchUpdates(() => outer1_10.setState({ pipFocus: !pipFocus }));
}, 300);
let result = require("BOX_MODE_ACTIONSHEET_WIDTH").fileFinishedImporting("modules/video_calls/native/ChannelCallStore.tsx");

export const focusTimeout = timeout;
export const setFocus = function setFocus(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => outer1_10.setState({ focus: closure_0 }));
};
export const toggleFocus = function toggleFocus() {
  const focus = obj2.getState().focus;
  focus(705).batchUpdates(() => outer1_10.setState({ focus: !focus, pipFocus: false }));
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
  const importDefault = CLOSED;
  if (!tmp) {
    dispatcher.wait(() => CLOSED(outer1_2[10]).updateChatOpen(closure_0, CLOSED === outer1_5.OPEN));
    const obj = dispatcher;
  }
  _batchUpdates.batchUpdates(() => outer1_10.setState({ voiceChatDrawerState: closure_1 }));
};
export const togglePipFocus = throttleResult;
export const useIsVoiceChatFocused = function useIsVoiceChatFocused() {
  const voiceChatDrawerState = obj2().voiceChatDrawerState;
  return voiceChatDrawerState === VoiceChatDrawerState.OPEN || voiceChatDrawerState === VoiceChatDrawerState.CLOSING;
};
export const useChannelCallOrientationHandlers = function useChannelCallOrientationHandlers(isGuildStageVoice) {
  const tmp2 = areParticipantStatesEqual(isGuildStageVoice);
  const require = tmp2;
  const tmp3 = useSelectedParticipant(isGuildStageVoice);
  importDefault = tmp3;
  let isGuildStageVoiceResult = isGuildStageVoice.isGuildStageVoice();
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = null == tmp3;
  }
  const dependencyMap = isGuildStageVoiceResult;
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
  obj = useIsConnectedToVoiceChannel;
  const tmp7 = require;
  const tmp8 = applicationId;
  const items = [tmp8];
  const items1 = [applicationId];
  stateFromStores = initialize.useStateFromStores(items, () => {
    if (null != applicationId) {
      let UNLOCKED2 = applicationId.getOrientationLockStateForApp(tmp);
      if (UNLOCKED2 == null) {
        UNLOCKED2 = outer1_6.UNLOCKED;
      }
      let UNLOCKED = UNLOCKED2;
    } else {
      UNLOCKED = outer1_6.UNLOCKED;
    }
    return UNLOCKED;
  }, items1);
  const effect = React.useEffect(() => tmp2(isGuildStageVoiceResult[6]).restoreDefaultOrientation, []);
  const items2 = [stateFromStores, tmp3, applicationId, tmp2, isGuildStageVoiceResult, tmp6];
  const effect1 = React.useEffect(() => {
    if (!closure_2) {
      if (!noop) {
        if (null != null) {
          if (tmp2.type === outer1_7.ACTIVITY) {
            if (tmp2.applicationId === applicationId) {
              if (tmp3(isGuildStageVoiceResult[16])()) {
                if (outer1_6.UNLOCKED === stateFromStores) {
                  tmp2(isGuildStageVoiceResult[6]).unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
                  const obj3 = tmp2(isGuildStageVoiceResult[6]);
                } else if (tmp14.PORTRAIT === tmp13) {
                  tmp2(isGuildStageVoiceResult[6]).lockOrientation("PORTRAIT", true);
                  const obj2 = tmp2(isGuildStageVoiceResult[6]);
                } else if (tmp14.LANDSCAPE === tmp13) {
                  tmp2(isGuildStageVoiceResult[6]).lockOrientation("LANDSCAPE", true);
                  const obj6 = tmp2(isGuildStageVoiceResult[6]);
                }
              }
            }
          }
        }
        const obj = tmp3(isGuildStageVoiceResult[6]);
        if (tmp3) {
          const result = obj.lockOrientationForiOS("PORTRAIT");
        } else {
          obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      }
    }
    tmp2(isGuildStageVoiceResult[6]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    const obj4 = tmp2(isGuildStageVoiceResult[6]);
    const result1 = tmp2(isGuildStageVoiceResult[6]).lockOrientationForiOS("PORTRAIT");
  }, items2);
};
export const resetChannelCallStore = function resetChannelCallStore() {
  timeout.stop();
  batchUpdates.batchUpdates(() => state.setState(closure_9));
};
export const useChannelCallStore = obj2;