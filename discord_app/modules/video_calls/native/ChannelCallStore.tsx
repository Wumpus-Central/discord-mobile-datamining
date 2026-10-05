// === Module 9050: ChannelCallStore ===

// Module 9050 (ChannelCallStore)
import DispatcherDefault from "Dispatcher" /* 584 */;
import react_native from "react-native" /* 1259 */;
import Constants from "Constants" /* 2011 */;
import Timers from "Timers" /* 2046 */;
import CallConstants from "CallConstants" /* 4911 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5091 */;
import DeviceOrientation from "DeviceOrientation" /* 8008 */;
import useIsPrivateAudioOnlyCallDefault from "useIsPrivateAudioOnlyCall" /* 9052 */;
import useSelectedParticipantDefault from "useSelectedParticipant" /* 9053 */;
import isOrientationLockSupportedDefault from "isOrientationLockSupported" /* 9055 */;
import react_mod from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelCallConstants from "ChannelCallConstants" /* 9051 */;
import module_570 from "module_570" /* 570 */;
import module_12 from "module_12" /* 12 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, flag, flag2, importDefault, lockOrientationResult, lockOrientationResult1, str, str2, str3, tmp13, tmp14, tmp15, tmp16, tmp20, tmp24, tmp25, unlockOrientationResult, unlockOrientationResult1, unlockOrientationResult2;

let VoiceCallOverlayType;
let VoiceChatDrawerState;
let obj2;
const f99147 = () => {
  const obj = require("react-native");
  obj.batchUpdates(() => state.setState({ focus: false }));
};
let react = react_mod;
({ VoiceCallOverlayType, VoiceChatDrawerState } = ChannelCallConstants);
const OrientationLockState = Constants.OrientationLockState;
const ParticipantTypes = CallConstants.ParticipantTypes;
const timeout = new Timers.Timeout();
let obj = { focus: true, pipFocus: false, isGestureEnabled: true, voiceChatDrawerState: VoiceChatDrawerState.CLOSED, voiceCallOverlayLayoutStates: obj2 };
obj2 = {};
let size = { x: "Array", y: "T", width: "y", height: "IconComponent", screenOrientation: DeviceOrientation.OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: null, isVisible: null };
obj2[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON] = size;
const size1 = { x: "Array", y: "T", width: "y", height: "IconComponent", screenOrientation: DeviceOrientation.OrientationType.PORTRAIT, hasUserInteractedSinceOrientationChange: false, isInitialized: null, isVisible: null };
obj2[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE] = size1;
let closure_9 = freeze(obj);
let obj3 = module_570.create(() => closure_9);
const throttleResult = module_12.throttle(() => {
  const pipFocus = obj3.getState().pipFocus;
  let obj = pipFocus(1259);
  obj.batchUpdates(() => {
    const obj = { pipFocus: !pipFocus };
    return obj3.setState(obj);
  });
}, 300);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const voiceChatDrawerState = obj3().voiceChatDrawerState;
  return voiceChatDrawerState === VoiceChatDrawerState.OPEN || voiceChatDrawerState === VoiceChatDrawerState.CLOSING;
}) : (() => {
  const voiceChatDrawerState = obj3().voiceChatDrawerState;
  return voiceChatDrawerState === VoiceChatDrawerState.OPEN || voiceChatDrawerState === VoiceChatDrawerState.CLOSING;
});
let closure_11 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((isGuildStageVoice) => {
  let applicationId;
  let closure_0;
  let closure_1;
  let closure_2;
  let closure_3;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(16);
  const tmp4 = useIsPrivateAudioOnlyCallDefault(isGuildStageVoice);
  _require = tmp4;
  const tmp5 = useSelectedParticipantDefault(isGuildStageVoice);
  importDefault = tmp5;
  if (cResult[0] === isGuildStageVoice) {
    let tmp6;
    let tmp12;
    let tmp19;
    let tmp18;
    let tmp17;
    let tmp23;
    if (cResult[1] === tmp5) {
      tmp6 = cResult[2];
    }
    dependencyMap = tmp6;
    const tmp9 = closure_11();
    const tmpResult = tmp(9054);
    const tmp10 = tmp9 || !tmpResult.useIsConnectedToVoiceChannel(isGuildStageVoice);
    react = tmp10;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const currentEmbeddedActivity = applicationId.getCurrentEmbeddedActivity();
      cResult[3] = currentEmbeddedActivity;
      tmp12 = currentEmbeddedActivity;
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
      class I {
        constructor() {
          if (null != applicationId) {
            tmp3 = closure_4;
            UNLOCKED2 = closure_4.getOrientationLockStateForApp(tmp);
            if (UNLOCKED2 == null) {
              tmp4 = OrientationLockState;
              UNLOCKED2 = OrientationLockState.UNLOCKED;
            }
            UNLOCKED = UNLOCKED2;
          } else {
            tmp2 = OrientationLockState;
            UNLOCKED = OrientationLockState.UNLOCKED;
          }
          return UNLOCKED;
        }
      }
      const items1 = [applicationId];
      cResult[4] = items;
      cResult[5] = I;
      cResult[6] = items1;
      tmp19 = items1;
      tmp18 = I;
      tmp17 = items;
    } else {
      tmp17 = cResult[4];
      tmp18 = cResult[5];
      tmp19 = cResult[6];
    }
    const tmpResult2 = tmp(504);
    const stateFromStores = tmpResult2.useStateFromStores(tmp17, tmp18, tmp19);
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          return closure_0(closure_2[6]).restoreDefaultOrientation;
        }
      }
      const items2 = [];
      class I {
        constructor() {
          if (null != applicationId) {
            tmp3 = closure_4;
            UNLOCKED2 = closure_4.getOrientationLockStateForApp(tmp);
            if (UNLOCKED2 == null) {
              tmp4 = OrientationLockState;
              UNLOCKED2 = OrientationLockState.UNLOCKED;
            }
            UNLOCKED = UNLOCKED2;
          } else {
            tmp2 = OrientationLockState;
            UNLOCKED = OrientationLockState.UNLOCKED;
          }
          return UNLOCKED;
        }
      }
      cResult[8] = items2;
      tmp23 = items2;
    } else {
      class P {
        constructor() {
          return closure_0(closure_2[6]).restoreDefaultOrientation;
        }
      }
      tmp23 = cResult[8];
    }
    const effect = react.useEffect(P, tmp23);
    if (cResult[9] === stateFromStores) {
      class P {
        constructor() {
          return closure_0(closure_2[6]).restoreDefaultOrientation;
        }
      }
    }
    class L {
      constructor() {
        tmp = closure_2;
        if (!tmp) {
          tmp2 = closure_3;
          if (!tmp2) {
            tmp3 = closure_1;
            tmp4 = null;
            if (null != closure_1) {
              tmp5 = ParticipantTypes;
              if (tmp3.type === ParticipantTypes.ACTIVITY) {
                tmp6 = applicationId;
                if (tmp3.applicationId === applicationId) {
                  tmp12 = closure_1;
                  tmp13 = closure_2;
                  if (closure_1(closure_2[18])()) {
                    tmp14 = closure_5;
                    tmp15 = OrientationLockState;
                    if (OrientationLockState.UNLOCKED === closure_5) {
                      tmp19 = closure_0;
                      tmp20 = closure_2;
                      obj3 = closure_0(closure_2[6]);
                      unlockOrientationResult = obj3.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
                    } else if (tmp15.PORTRAIT === tmp14) {
                      tmp16 = closure_0;
                      tmp17 = closure_2;
                      obj2 = closure_0(closure_2[6]);
                      flag = true;
                      str2 = "PORTRAIT";
                      lockOrientationResult = obj2.lockOrientation("PORTRAIT", true);
                    } else if (tmp15.LANDSCAPE === tmp14) {
                      tmp24 = closure_0;
                      tmp25 = closure_2;
                      obj6 = closure_0(closure_2[6]);
                      flag2 = true;
                      str3 = "LANDSCAPE";
                      lockOrientationResult1 = obj6.lockOrientation("LANDSCAPE", true);
                    }
                  }
                }
              }
            }
            tmp7 = closure_0;
            tmp8 = closure_0;
            tmp9 = closure_2;
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
}) : ((isGuildStageVoice) => {
  let applicationId;
  let closure_0;
  let closure_1;
  let closure_3;
  const tmp = dependencyMap;
  const tmp2 = useIsPrivateAudioOnlyCallDefault(isGuildStageVoice);
  _require = tmp2;
  const tmp3 = useSelectedParticipantDefault(isGuildStageVoice);
  importDefault = tmp3;
  const isGuildStageVoiceResult = isGuildStageVoice.isGuildStageVoice() && null == tmp3;
  dependencyMap = isGuildStageVoiceResult;
  const tmp6 = closure_11();
  let obj = require("VoiceChatHooks");
  const tmp8 = tmp6 || !obj.useIsConnectedToVoiceChannel(isGuildStageVoice);
  react = tmp8;
  const currentEmbeddedActivity = applicationId.getCurrentEmbeddedActivity();
  const tmp9 = applicationId;
  applicationId = undefined;
  const tmp7 = _require;
  if (currentEmbeddedActivity != null) {
    applicationId = currentEmbeddedActivity.applicationId;
  }
  const items = [tmp9];
  const items1 = [applicationId];
  const tmp7Result = tmp7(504);
  const stateFromStores = tmp7Result.useStateFromStores(items, () => {
    let UNLOCKED;
    if (null != applicationId) {
      let UNLOCKED2 = EmbeddedActivitiesStore.getOrientationLockStateForApp(tmp);
      if (UNLOCKED2 == null) {
        UNLOCKED2 = OrientationLockState.UNLOCKED;
      }
      UNLOCKED = UNLOCKED2;
    } else {
      UNLOCKED = OrientationLockState.UNLOCKED;
    }
    return UNLOCKED;
  }, items1);
  const effect = react.useEffect(() => closure_0(dependencyMap[6]).restoreDefaultOrientation, []);
  const items2 = [stateFromStores, tmp3, applicationId, tmp2, isGuildStageVoiceResult, tmp8];
  const effect1 = react.useEffect(() => {
    if (!dependencyMap) {
      if (!closure_3) {
        if (null != closure_1) {
          if (closure_1.type === ParticipantTypes.ACTIVITY) {
            if (closure_1.applicationId === applicationId) {
              if (isOrientationLockSupportedDefault()) {
                if (OrientationLockState.UNLOCKED === stateFromStores) {
                  obj3 = DeviceOrientation;
                  obj3.unlockOrientation({ unlockAfterRotatingToPreviousLock: true });
                } else if (OrientationLockState.PORTRAIT === stateFromStores) {
                  const obj2 = DeviceOrientation;
                  obj2.lockOrientation("PORTRAIT", true);
                } else if (OrientationLockState.LANDSCAPE === stateFromStores) {
                  const obj6 = DeviceOrientation;
                  obj6.lockOrientation("LANDSCAPE", true);
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
    const obj4 = DeviceOrientation;
    obj4.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
    const obj5 = DeviceOrientation;
    const result1 = obj5.lockOrientationForiOS("PORTRAIT");
  }, items2);
});
function resetFocusTimer() {
  timeout.stop();
  timeout.start(5000, f99147);
}
size = size_mod;
let result = size.fileFinishedImporting("modules/video_calls/native/ChannelCallStore.tsx");

export const focusTimeout = timeout;
export const setFocus = function setFocus(focus) {
  _require = focus;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { focus };
    return obj3.setState(obj);
  });
};
export const toggleFocus = function toggleFocus() {
  const focus = obj3.getState().focus;
  let obj = focus(1259);
  obj.batchUpdates(() => {
    const obj = { focus: !focus, pipFocus: false };
    return obj3.setState(obj);
  });
};
export { resetFocusTimer };
export const resetFocus = function resetFocus() {
  let state;
  if (obj3.getState().focus) {
    timeout.stop();
    timeout.start(5000, f99147);
  } else {
    let obj = react_native;
    obj.batchUpdates(() => state.setState({ focus: true }));
  }
};
export const clearFocusTimer = function clearFocusTimer() {
  timeout.stop();
};
export const setVoiceChatDrawerState = function setVoiceChatDrawerState(embeddedActivityLocationChannelId, CLOSED) {
  let voiceChatDrawerState;
  _require = embeddedActivityLocationChannelId;
  importDefault = CLOSED;
  const tmp = CLOSED !== VoiceChatDrawerState.OPEN && CLOSED !== VoiceChatDrawerState.CLOSED;
  if (!tmp) {
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = ChannelRTCActionCreatorsDefault;
      return obj.updateChatOpen(embeddedActivityLocationChannelId, voiceChatDrawerState === VoiceChatDrawerState.OPEN);
    });
  }
  const obj2 = require("react-native");
  obj2.batchUpdates(() => {
    const obj = { voiceChatDrawerState };
    return obj3.setState(obj);
  });
};
export const togglePipFocus = throttleResult;
export const useIsVoiceChatFocused = tmp6;
export const useChannelCallOrientationHandlers = tmp7;
export const resetChannelCallStore = function resetChannelCallStore() {
  let state;
  timeout.stop();
  const obj = react_native;
  obj.batchUpdates(() => state.setState(closure_1_9));
};
export const useChannelCallStore = obj3;