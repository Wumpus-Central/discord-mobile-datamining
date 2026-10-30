// === Module 10981: ChannelCallStore ===

// Module 10981 (ChannelCallStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1260 */;
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2021 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5754 */;
import DeviceOrientation from "DeviceOrientation" /* 8894 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 10983 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 10984 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 10986 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import apply from "module_12" /* 12 */;

const require = globalThis.__r;

require = fn;
const ChannelCallConstants = fn(10982);
({ VoiceCallOverlayType, VoiceChatDrawerState } = ChannelCallConstants);
const ParticipantTypes = fn(5676).ParticipantTypes;
const timeout = new fn(4853).Timeout();
let obj = { focus: true, pipFocus: false, isGestureEnabled: true, voiceChatDrawerState: VoiceChatDrawerState.CLOSED, voiceCallOverlayLayoutStates: null };
let obj2 = {};
let size = { x: "Array", y: "Path", width: "y", height: "HermesInternal", screenOrientation: fn(8894).OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: true, isInitialized: true, isVisible: null };
obj2[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = size;
const size1 = { x: "Array", y: "Path", width: "y", height: "HermesInternal", screenOrientation: fn(8894).OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: true, isInitialized: true, isVisible: null };
obj2[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = size1;
obj.voiceCallOverlayLayoutStates = obj2;
let closure_8 = Object.freeze(obj);
const module_560 = fn(560);
let obj3 = module_560.create(() => closure_8);
size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallStore.tsx");

export const focusTimeout = timeout;
export function setFocus(focus) {
  _require = focus;
  require("ReactBatchUpdates").batchUpdates(() => obj3.setState({ focus }));
}
export function toggleFocus() {
  const focus = obj3.getState().focus;
  focus(1260).batchUpdates(() => obj3.setState({ focus: !focus, pipFocus: false }));
}
export function resetFocusTimer() {
  timeout.stop();
  timeout.start(5000, () => {
    require("ReactBatchUpdates").batchUpdates(() => state.setState({ focus: false }));
  });
}
export function resetFocus() {
  if (obj3.getState().focus) {
    timeout.stop();
    timeout.start(5000, () => {
      require("ReactBatchUpdates").batchUpdates(() => state.setState({ focus: false }));
    });
  } else {
    ReactBatchUpdates.batchUpdates(() => state.setState({ focus: true }));
  }
}
export function clearFocusTimer() {
  timeout.stop();
}
export function setVoiceChatDrawerState(embeddedActivityLocationChannelId, CLOSED) {
  _require = CLOSED;
  if (!tmp2) {
    ChannelRTCActionCreatorsDefault.updateChatOpen(embeddedActivityLocationChannelId, CLOSED === VoiceChatDrawerState.OPEN);
  }
  require("ReactBatchUpdates").batchUpdates(() => obj3.setState({ voiceChatDrawerState }));
  const obj2 = require("ReactBatchUpdates");
  tmp2 = CLOSED !== VoiceChatDrawerState.OPEN && CLOSED !== VoiceChatDrawerState.CLOSED;
}
export const togglePipFocus = apply.throttle(() => {
  const pipFocus = obj3.getState().pipFocus;
  pipFocus(1260).batchUpdates(() => obj3.setState({ pipFocus: !pipFocus }));
}, 300);
export function useIsVoiceChatFocused() {
  const voiceChatDrawerState = obj3().voiceChatDrawerState;
  return voiceChatDrawerState === VoiceChatDrawerState.OPEN || voiceChatDrawerState === VoiceChatDrawerState.CLOSING;
}
export function useChannelCallOrientationHandlers(isGuildStageVoice) {
  const tmp2 = useIsPrivateAudioOnlyCallDefault(isGuildStageVoice);
  _require = tmp2;
  const tmp3 = useSelectedParticipantDefault(isGuildStageVoice);
  importDefault = tmp3;
  let isGuildStageVoiceResult = isGuildStageVoice.isGuildStageVoice();
  if (isGuildStageVoiceResult) {
    isGuildStageVoiceResult = null == tmp3;
  }
  dependencyMap = isGuildStageVoiceResult;
  const voiceChatDrawerState = obj3().voiceChatDrawerState;
  let tmp6 = voiceChatDrawerState === stateFromStores.OPEN || voiceChatDrawerState === stateFromStores.CLOSING;
  if (!tmp6) {
    tmp6 = !obj.useIsConnectedToVoiceChannel(isGuildStageVoice);
  }
  noop = tmp6;
  const currentEmbeddedActivity = applicationId.getCurrentEmbeddedActivity();
  applicationId = undefined;
  if (currentEmbeddedActivity != null) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  obj = require("VoiceChatHooks");
  const tmp8 = applicationId;
  const items = [tmp8];
  const items1 = [applicationId];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null != applicationId) {
      let UNLOCKED2 = EmbeddedActivitiesStore.getOrientationLockStateForApp(tmp);
      if (UNLOCKED2 == null) {
        UNLOCKED2 = EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED;
      }
      let UNLOCKED = UNLOCKED2;
    } else {
      UNLOCKED = EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED;
    }
    return UNLOCKED;
  }, items1);
  const effect = noop.useEffect(() => closure_0(isGuildStageVoiceResult[5]).restoreDefaultOrientation, []);
  const items2 = [stateFromStores, tmp3, applicationId, tmp2, isGuildStageVoiceResult, tmp6];
  const effect1 = noop.useEffect(() => {
    if (!isGuildStageVoiceResult) {
      if (!closure_3) {
        if (null != closure_1) {
          if (closure_1.type === ParticipantTypes.ACTIVITY) {
            if (closure_1.applicationId === applicationId) {
              if (isOrientationLockSupportedDefault()) {
                if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED === stateFromStores) {
                  DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
                } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT === stateFromStores) {
                  DeviceOrientation.lockOrientation("PORTRAIT", true);
                } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE === stateFromStores) {
                  DeviceOrientation.lockOrientation("LANDSCAPE", true);
                }
              }
            }
          }
        }
        const obj = DeviceOrientation;
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
}
export function resetChannelCallStore() {
  timeout.stop();
  ReactBatchUpdates.batchUpdates(() => state.setState(closure_1_8));
}
export const useChannelCallStore = obj3;