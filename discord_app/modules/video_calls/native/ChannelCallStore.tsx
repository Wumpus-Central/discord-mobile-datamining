// discord_app/modules/video_calls/native/ChannelCallStore.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import DeviceOrientation from "../../device/native/DeviceOrientation.tsx";
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall.tsx";
import useSelectedParticipantDefault from "../useSelectedParticipant.tsx";
import isOrientationLockSupportedDefault from "../../device/native/isOrientationLockSupported.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import apply from "../../../../_runtime/metro/00012__.js";

const require = globalThis.__r;

require = fn;
const ChannelCallConstants = fn(9641);
({ VoiceCallOverlayType, VoiceChatDrawerState } = ChannelCallConstants);
const OrientationLockState = fn(2004).OrientationLockState;
const ParticipantTypes = fn(4777).ParticipantTypes;
const timeout = new fn(2036).Timeout();
let obj = {
  focus: true,
  pipFocus: false,
  isGestureEnabled: true,
  voiceChatDrawerState: VoiceChatDrawerState.CLOSED,
  voiceCallOverlayLayoutStates: null,
};
let obj2 = {};
let size = {
  x: "Array",
  y: "flexDirection",
  width: "y",
  height: "HermesInternal",
  screenOrientation: fn(8603).OrientationType.PORTRAIT,
  hasUserInteractedSinceOrientationChange: true,
  isInitialized: true,
  isVisible: null,
};
obj2[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = size;
const size1 = {
  x: "Array",
  y: "flexDirection",
  width: "y",
  height: "HermesInternal",
  screenOrientation: fn(8603).OrientationType.PORTRAIT,
  hasUserInteractedSinceOrientationChange: true,
  isInitialized: true,
  isVisible: null,
};
obj2[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = size1;
obj.voiceCallOverlayLayoutStates = obj2;
let closure_9 = Object.freeze(obj);
const module_560 = fn(560);
let obj3 = module_560.create(() => closure_9);
size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallStore.tsx");

export const focusTimeout = timeout;
export const setFocus = function setFocus(focus) {
  _require = focus;
  require("ReactBatchUpdates").batchUpdates(() => obj3.setState({ focus }));
};
export const toggleFocus = function toggleFocus() {
  const focus = obj3.getState().focus;
  focus(1248).batchUpdates(() => obj3.setState({ focus: !focus, pipFocus: false }));
};
export const resetFocusTimer = function resetFocusTimer() {
  timeout.stop();
  timeout.start(5000, () => {
    require("ReactBatchUpdates").batchUpdates(() => state.setState({ focus: false }));
  });
};
export const resetFocus = function resetFocus() {
  if (obj3.getState().focus) {
    timeout.stop();
    timeout.start(5000, () => {
      require("ReactBatchUpdates").batchUpdates(() => state.setState({ focus: false }));
    });
  } else {
    ReactBatchUpdates.batchUpdates(() => state.setState({ focus: true }));
  }
};
export const clearFocusTimer = function clearFocusTimer() {
  timeout.stop();
};
export const setVoiceChatDrawerState = function setVoiceChatDrawerState(embeddedActivityLocationChannelId, CLOSED) {
  _require = embeddedActivityLocationChannelId;
  importDefault = CLOSED;
  if (!tmp) {
    DispatcherDefault.wait(() =>
      ChannelRTCActionCreatorsDefault.updateChatOpen(closure_0, closure_1 === VoiceChatDrawerState.OPEN),
    );
  }
  require("ReactBatchUpdates").batchUpdates(() => obj3.setState({ voiceChatDrawerState }));
  const obj2 = require("ReactBatchUpdates");
  tmp = CLOSED !== VoiceChatDrawerState.OPEN && CLOSED !== VoiceChatDrawerState.CLOSED;
};
export const togglePipFocus = apply.throttle(() => {
  const pipFocus = obj3.getState().pipFocus;
  pipFocus(1248).batchUpdates(() => obj3.setState({ pipFocus: !pipFocus }));
}, 300);
export const useIsVoiceChatFocused = function useIsVoiceChatFocused() {
  const voiceChatDrawerState = obj3().voiceChatDrawerState;
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
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
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
    },
    items1,
  );
  const effect = noop.useEffect(() => closure_0(isGuildStageVoiceResult[6]).restoreDefaultOrientation, []);
  const items2 = [stateFromStores, tmp3, applicationId, tmp2, isGuildStageVoiceResult, tmp6];
  const effect1 = noop.useEffect(() => {
    if (!isGuildStageVoiceResult) {
      if (!closure_3) {
        if (null != closure_1) {
          if (closure_1.type === ParticipantTypes.ACTIVITY) {
            if (closure_1.applicationId === applicationId) {
              if (isOrientationLockSupportedDefault()) {
                if (OrientationLockState.UNLOCKED === stateFromStores) {
                  DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
                } else if (OrientationLockState.PORTRAIT === stateFromStores) {
                  DeviceOrientation.lockOrientation("PORTRAIT", true);
                } else if (OrientationLockState.LANDSCAPE === stateFromStores) {
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
};
export const resetChannelCallStore = function resetChannelCallStore() {
  timeout.stop();
  ReactBatchUpdates.batchUpdates(() => state.setState(closure_1_9));
};
export const useChannelCallStore = obj3;
