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
const ChannelCallConstants = fn(10334);
({ VoiceCallOverlayType, VoiceChatDrawerState } = ChannelCallConstants);
const OrientationLockState = fn(2023).OrientationLockState;
const ParticipantTypes = fn(5113).ParticipantTypes;
const timeout = new fn(2058).Timeout();
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
  y: "Symbol",
  width: "y",
  height: "IconComponent",
  screenOrientation: fn(8426).OrientationType.PORTRAIT,
  hasUserInteractedSinceOrientationChange: true,
  isInitialized: true,
  isVisible: null,
};
obj2[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = size;
const size1 = {
  x: "Array",
  y: "Symbol",
  width: "y",
  height: "IconComponent",
  screenOrientation: fn(8426).OrientationType.PORTRAIT,
  hasUserInteractedSinceOrientationChange: true,
  isInitialized: true,
  isVisible: null,
};
obj2[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = size1;
obj.voiceCallOverlayLayoutStates = obj2;
let closure_9 = Object.freeze(obj);
const module_570 = fn(570);
let obj3 = module_570.create(() => closure_9);
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsVoiceChatFocused() {
      const voiceChatDrawerState = obj3().voiceChatDrawerState;
      return (
        voiceChatDrawerState === VoiceChatDrawerState.OPEN || voiceChatDrawerState === VoiceChatDrawerState.CLOSING
      );
    }
  : function useIsVoiceChatFocused() {
      const voiceChatDrawerState = obj3().voiceChatDrawerState;
      return (
        voiceChatDrawerState === VoiceChatDrawerState.OPEN || voiceChatDrawerState === VoiceChatDrawerState.CLOSING
      );
    };
let closure_11 = tmp6;
ReactCompilerGating = fn(558);
const throttleResult = apply.throttle(() => {
  const pipFocus = obj3.getState().pipFocus;
  pipFocus(1271).batchUpdates(() => obj3.setState({ pipFocus: !pipFocus }));
}, 300);
function resetFocusTimer() {
  timeout.stop();
  timeout.start(5000, () => {
    require("ReactBatchUpdates").batchUpdates(() => state.setState({ focus: false }));
  });
}
size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallStore.tsx");

export const focusTimeout = timeout;
export const setFocus = function setFocus(focus) {
  _require = focus;
  require("ReactBatchUpdates").batchUpdates(() => obj3.setState({ focus }));
};
export const toggleFocus = function toggleFocus() {
  const focus = obj3.getState().focus;
  focus(1271).batchUpdates(() => obj3.setState({ focus: !focus, pipFocus: false }));
};
export { resetFocusTimer };
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
export const togglePipFocus = throttleResult;
export const useIsVoiceChatFocused = tmp6;
export const useChannelCallOrientationHandlers = ReactCompilerGating.isReactCompilerEnabled()
  ? function useChannelCallOrientationHandlers(isGuildStageVoice) {
      const cResult = require("c").c(16);
      const tmp4 = useIsPrivateAudioOnlyCallDefault(isGuildStageVoice);
      _require = tmp4;
      const tmp5 = useSelectedParticipantDefault(isGuildStageVoice);
      importDefault = tmp5;
      if (cResult[0] === isGuildStageVoice) {
        if (cResult[1] === tmp5) {
          let tmp6 = cResult[2];
        }
        dependencyMap = tmp6;
        const tmp9 = closure_11();
        let tmp10 = tmp9;
        if (!tmp9) {
          tmp10 = !tmpResult.useIsConnectedToVoiceChannel(isGuildStageVoice);
        }
        noop = tmp10;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const currentEmbeddedActivity = applicationId.getCurrentEmbeddedActivity();
          cResult[3] = currentEmbeddedActivity;
          let tmp12 = currentEmbeddedActivity;
        } else {
          tmp12 = cResult[3];
        }
        applicationId = undefined;
        if (tmp12 != null) {
          applicationId = tmp12.applicationId;
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [applicationId];
          const fn = function k() {
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
          };
          const items1 = [applicationId];
          cResult[4] = items;
          cResult[5] = fn;
          cResult[6] = items1;
          let tmp19 = items1;
          let tmp18 = fn;
          let tmp17 = items;
        } else {
          tmp17 = cResult[4];
          tmp18 = cResult[5];
          tmp19 = cResult[6];
        }
        tmpResult = tmp(10337);
        const stateFromStores = tmp(504).useStateFromStores(tmp17, tmp18, tmp19);
        const _Symbol3 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              return closure_0(closure_2[6]).restoreDefaultOrientation;
            }
          }
          const items2 = [];
          cResult[7] = P;
          cResult[8] = items2;
          let tmp23 = items2;
        } else {
          class P {
            constructor() {
              return closure_0(closure_2[6]).restoreDefaultOrientation;
            }
          }
          tmp23 = cResult[8];
        }
        const effect = noop.useEffect(P, tmp23);
        if (cResult[9] === stateFromStores) {
          class P {
            constructor() {
              return closure_0(closure_2[6]).restoreDefaultOrientation;
            }
          }
        }
        class L {
          constructor() {
            if (!closure_2) {
              tmp = closure_3;
              if (!closure_3) {
                tmp2 = closure_1;
                tmp3 = null;
                if (null != closure_1) {
                  tmp4 = ParticipantTypes;
                  if (tmp2.type === ParticipantTypes.ACTIVITY) {
                    tmp5 = applicationId;
                    if (tmp2.applicationId === applicationId) {
                      tmp11 = closure_1;
                      tmp12 = closure_2;
                      if (closure_1(closure_2[18])()) {
                        tmp13 = closure_5;
                        tmp14 = OrientationLockState;
                        if (OrientationLockState.UNLOCKED === closure_5) {
                          tmp18 = closure_0;
                          tmp19 = closure_2;
                          obj3 = closure_0(closure_2[6]);
                          unlockOrientationResult = obj3.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
                        } else if (tmp14.PORTRAIT === tmp13) {
                          tmp15 = closure_0;
                          tmp16 = closure_2;
                          obj2 = closure_0(closure_2[6]);
                          flag = true;
                          str2 = "PORTRAIT";
                          lockOrientationResult = obj2.lockOrientation("PORTRAIT", true);
                        } else if (tmp14.LANDSCAPE === tmp13) {
                          tmp23 = closure_0;
                          tmp24 = closure_2;
                          obj6 = closure_0(closure_2[6]);
                          flag2 = true;
                          str3 = "LANDSCAPE";
                          lockOrientationResult1 = obj6.lockOrientation("LANDSCAPE", true);
                        }
                      }
                    }
                  }
                }
                tmp6 = closure_0;
                tmp7 = closure_0;
                tmp8 = closure_2;
                obj = closure_0(closure_2[6]);
                if (closure_0) {
                  str = "PORTRAIT";
                  result = obj.lockOrientationForiOS("PORTRAIT");
                } else {
                  unlockOrientationResult1 = obj.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
                }
              }
              return;
            }
            obj4 = closure_0(closure_2[6]);
            unlockOrientationResult2 = obj4.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
            obj5 = closure_0(closure_2[6]);
            result1 = obj5.lockOrientationForiOS("PORTRAIT");
            return;
          }
        }
        const items3 = [stateFromStores, tmp5, applicationId, tmp4, tmp6, tmp10];
        cResult[9] = stateFromStores;
        cResult[10] = tmp4;
        cResult[11] = tmp6;
        cResult[12] = tmp10;
        cResult[13] = tmp5;
        cResult[14] = L;
        cResult[15] = items3;
        const tmpResult2 = tmp(504);
      }
      let isGuildStageVoiceResult = isGuildStageVoice.isGuildStageVoice();
      if (isGuildStageVoiceResult) {
        class P {
          constructor() {
            return closure_0(closure_2[6]).restoreDefaultOrientation;
          }
        }
        isGuildStageVoiceResult = null == tmp5;
      }
      cResult[0] = isGuildStageVoice;
      cResult[1] = tmp5;
      cResult[2] = isGuildStageVoiceResult;
      tmp6 = isGuildStageVoiceResult;
      let obj = require("c");
    }
  : function useChannelCallOrientationHandlers(isGuildStageVoice) {
      const tmp2 = useIsPrivateAudioOnlyCallDefault(isGuildStageVoice);
      _require = tmp2;
      const tmp3 = useSelectedParticipantDefault(isGuildStageVoice);
      importDefault = tmp3;
      let isGuildStageVoiceResult = isGuildStageVoice.isGuildStageVoice();
      if (isGuildStageVoiceResult) {
        isGuildStageVoiceResult = null == tmp3;
      }
      dependencyMap = isGuildStageVoiceResult;
      const tmp6 = closure_11();
      let tmp8 = tmp6;
      if (!tmp6) {
        tmp8 = !obj.useIsConnectedToVoiceChannel(isGuildStageVoice);
      }
      noop = tmp8;
      const currentEmbeddedActivity = applicationId.getCurrentEmbeddedActivity();
      applicationId = undefined;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      obj = require("VoiceChatHooks");
      const tmp9 = applicationId;
      const items = [tmp9];
      const items1 = [applicationId];
      const stateFromStores = require("initialize").useStateFromStores(
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
      const items2 = [stateFromStores, tmp3, applicationId, tmp2, isGuildStageVoiceResult, tmp8];
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
