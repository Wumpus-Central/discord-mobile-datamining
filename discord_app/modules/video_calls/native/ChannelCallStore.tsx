// === Module 9467: ChannelCallStore ===

// Module 9467 (ChannelCallStore)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import DeviceOrientation from "DeviceOrientation" /* 8332 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 9469 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9470 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 9472 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import apply from "module_12" /* 12 */;

require = fn;
const ChannelCallConstants = fn(9468);
({ VoiceCallOverlayType, VoiceChatDrawerState } = ChannelCallConstants);
const OrientationLockState = fn(1920).OrientationLockState;
const ParticipantTypes = fn(4581).ParticipantTypes;
const timeout = new fn(4447).Timeout();
let useChannelCallStore = { focus: true, pipFocus: false, isGestureEnabled: true, voiceChatDrawerState: VoiceChatDrawerState.CLOSED, voiceCallOverlayLayoutStates: null };
useChannelCallStore = {};
let size = { x: "Array", y: "flexDirection", width: "y", height: "HermesInternal", screenOrientation: fn(8332).OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: true, isInitialized: true, isVisible: null };
useChannelCallStore[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = size;
const size1 = { x: "Array", y: "flexDirection", width: "y", height: "HermesInternal", screenOrientation: fn(8332).OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: true, isInitialized: true, isVisible: null };
useChannelCallStore[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = size1;
useChannelCallStore.voiceCallOverlayLayoutStates = useChannelCallStore;
let closure_9 = Object.freeze(useChannelCallStore);
const module_560 = fn(560);
useChannelCallStore = module_560.create(() => closure_9);
size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallStore.tsx");

export const focusTimeout = timeout;
export const setFocus = function setFocus(focus) {
  _require = focus;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { focus };
    return obj.setState(obj);
  });
};
export const toggleFocus = function toggleFocus() {
  const focus = obj.getState().focus;
  obj = focus(1249);
  obj.batchUpdates(() => {
    obj = { focus: !focus, pipFocus: false };
    return obj.setState(obj);
  });
};
export const resetFocusTimer = function resetFocusTimer() {
  timeout.stop();
  timeout.start(5000, () => {
    require("ReactBatchUpdates").batchUpdates(() => state.setState({ focus: false }));
  });
};
export const resetFocus = function resetFocus() {
  if (obj.getState().focus) {
    timeout.stop();
    timeout.start(5000, () => {
      require("ReactBatchUpdates").batchUpdates(() => state.setState({ focus: false }));
    });
  } else {
    obj = ReactBatchUpdates;
    obj.batchUpdates(() => state.setState({ focus: true }));
  }
};
export const clearFocusTimer = function clearFocusTimer() {
  timeout.stop();
};
export const setVoiceChatDrawerState = function setVoiceChatDrawerState(embeddedActivityLocationChannelId, CLOSED) {
  _require = embeddedActivityLocationChannelId;
  importDefault = CLOSED;
  if (!tmp) {
    DispatcherDefault.wait(() => ChannelRTCActionCreatorsDefault.updateChatOpen(closure_0, closure_1 === VoiceChatDrawerState.OPEN));
  }
  require("ReactBatchUpdates").batchUpdates(() => {
    obj = { voiceChatDrawerState };
    return obj.setState(obj);
  });
};
export const togglePipFocus = apply.throttle(() => {
  const pipFocus = obj.getState().pipFocus;
  obj = pipFocus(1249);
  obj.batchUpdates(() => {
    obj = { pipFocus: !pipFocus };
    return obj.setState(obj);
  });
}, 300);
export const useIsVoiceChatFocused = function useIsVoiceChatFocused() {
  const voiceChatDrawerState = obj().voiceChatDrawerState;
  return voiceChatDrawerState === VoiceChatDrawerState.OPEN || voiceChatDrawerState === VoiceChatDrawerState.CLOSING;
};
export const useChannelCallOrientationHandlers = function useChannelCallOrientationHandlers(isGuildStageVoice) {
  const tmp2 = useIsPrivateAudioOnlyCallDefault(isGuildStageVoice);
  _require = tmp2;
  const tmp3 = useSelectedParticipantDefault(isGuildStageVoice);
  importDefault = tmp3;
  let isGuildStageVoiceResult = isGuildStageVoice.isGuildStageVoice();
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = null == tmp3;
  }
  dependencyMap = isGuildStageVoiceResult;
  const voiceChatDrawerState = obj().voiceChatDrawerState;
  let tmp6 = voiceChatDrawerState === stateFromStores.OPEN || voiceChatDrawerState === stateFromStores.CLOSING;
  obj = require("VoiceChatHooks");
  if (!tmp6) {
    tmp6 = !obj.useIsConnectedToVoiceChannel(isGuildStageVoice);
  }
  noop = tmp6;
  const currentEmbeddedActivity = applicationId.getCurrentEmbeddedActivity();
  applicationId = undefined;
  if (currentEmbeddedActivity != null) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  const items = [applicationId];
  const items1 = [applicationId];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null != applicationId) {
      let UNLOCKED2 = EmbeddedActivitiesStore.getOrientationLockStateForApp(tmp);
      if (UNLOCKED2 == null) {
        UNLOCKED2 = OrientationLockState.UNLOCKED;
      }
      let UNLOCKED = UNLOCKED2;
    } else {
      UNLOCKED = OrientationLockState.UNLOCKED;
    }
    return UNLOCKED;
  }, items1);
  const effect = noop.useEffect(() => closure_0(isGuildStageVoiceResult[6]).restoreDefaultOrientation, []);
  const items2 = [stateFromStores, tmp3, applicationId, tmp2, isGuildStageVoiceResult, tmp6];
  const effect1 = noop.useEffect(() => {
    if (!isGuildStageVoiceResult) {
      if (!closure_3) {
        if (null != closure_1) {
          if (tmp2.type === ParticipantTypes.ACTIVITY) {
            if (tmp2.applicationId === applicationId) {
              if (isOrientationLockSupportedDefault()) {
                if (OrientationLockState.UNLOCKED === stateFromStores) {
                  DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
                } else if (tmp14.PORTRAIT === tmp13) {
                  DeviceOrientation.lockOrientation("PORTRAIT", true);
                } else if (tmp14.LANDSCAPE === tmp13) {
                  DeviceOrientation.lockOrientation("LANDSCAPE", true);
                }
              }
            }
          }
        }
        obj = DeviceOrientation;
        if (closure_0) {
          const result = obj.lockOrientationForiOS("PORTRAIT");
        } else {
          obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      }
    }
    DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    const result1 = DeviceOrientation.lockOrientationForiOS("PORTRAIT");
  }, items2);
};
export const resetChannelCallStore = function resetChannelCallStore() {
  timeout.stop();
  ReactBatchUpdates.batchUpdates(() => state.setState(closure_1_9));
};
export { useChannelCallStore };