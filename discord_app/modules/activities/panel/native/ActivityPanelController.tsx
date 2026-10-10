// discord_app/modules/activities/panel/native/ActivityPanelController.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import DeviceOrientation from "../../../device/native/DeviceOrientation.tsx";
import EmbeddedActivitiesActionCreatorsAll from "../../EmbeddedActivitiesActionCreators.tsx";
import doesOrientationMatchLockStateDefault from "../../native/doesOrientationMatchLockState.tsx";
import applyActivityOrientationLockDefault from "../../native/applyActivityOrientationLock.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import AppFreezeStore from "../../../panels/morphable/AppFreezeStore.tsx";
import SafeAreaDisabledStore from "../../../panels/morphable/native/SafeAreaDisabledStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import EmbeddedActivitiesStore from "../../EmbeddedActivitiesStore.tsx";

require = fn;
const Constants = fn(2024);
({ OrientationLockState: closure_11, ACTIVITY_LOCKED_ASPECT_RATIO: closure_12 } = Constants);
const ActivityPanelModes = fn(6067).ActivityPanelModes;
const jsx = fn(21).jsx;
let closure_15 = { x: 0, y: 0, gestureActive: false };
const FunctionUtils = fn(2039);
let closure_16 = FunctionUtils.cachedFunction((arg0, arg1, arg2, arg3) => {
  ({ width, height } = arg0);
  if (constants.LANDSCAPE === arg2) {
    if (arg3) {
      if (!tmp) {
        let size = { width, height: width * __initData - arg1, isLandscape: true, isWindowLandscape: tmp };
      }
      return size;
    }
    const size1 = { width: null, height: null, isLandscape: true, isWindowLandscape: true };
    const _Math3 = Math;
    size1.width = Math.max(width, height);
    const _Math4 = Math;
    size1.height = Math.min(height, width);
    size = size1;
  } else if (constants.PORTRAIT === arg2) {
    if (arg3) {
      if (tmp) {
        const size2 = { width: height * __initData, height, isLandscape: false, isWindowLandscape: tmp };
        let size3 = size2;
      }
      return size3;
    }
    size3 = { width: null, height: null, isLandscape: false, isWindowLandscape: false };
    const _Math = Math;
    size3.width = Math.min(width, height);
    const _Math2 = Math;
    size3.height = Math.max(height, width) - arg1;
  } else {
    const UNLOCKED = constants.UNLOCKED;
    const size4 = { width, height: null, isLandscape: null, isWindowLandscape: null };
    let diff = height;
    if (!tmp) {
      diff = height - arg1;
    }
    size4.height = diff;
    size4.isLandscape = tmp;
    size4.isWindowLandscape = tmp;
    return size4;
  }
});
const __initData = {
  code: "function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}",
};
const __initData2 = {
  code: "function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous){return;}runOnJS(setWrapperGestureInProgress)(gestureActive);}",
};
const __initData3 = {
  code: "function ActivityPanelControllerTsx3(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}",
};
const __initData4 = {
  code: "function ActivityPanelControllerTsx4(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}",
};
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAppFreeze(wrapperOffset) {
      _require = wrapperOffset;
      const cResult = require("c").c(5);
      let obj = require("c");
      const isActivityPanelFullscreen = require("ActivityPanelUtils").useIsActivityPanelFullscreen();
      const tmp3 = id(noop.useState(false), 2);
      const first = tmp3[0];
      dependencyMap = tmp5;
      id = noop.useId();
      const obj2 = require("ActivityPanelUtils");
      const fn = function l() {
        return wrapperOffset.get().gestureActive;
      };
      fn.__closure = { wrapperOffset };
      fn.__workletHash = 5299695936442;
      fn.__initData = __initData;
      const fn2 = function s(arg0, arg1) {
        if (arg0 !== arg1) {
          ReanimatedRexport.runOnJS(closure_3)(arg0);
        }
      };
      const obj4 = require("ReanimatedRexport");
      fn2.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setWrapperGestureInProgress: tmp3[1] };
      fn2.__workletHash = 526468036640;
      fn2.__initData = __initData2;
      const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
      if (cResult[0] === id) {
        if (cResult[1] === isActivityPanelFullscreen) {
          if (cResult[2] === first) {
            let tmp8 = cResult[3];
            let tmp9 = cResult[4];
          }
          const effect = noop.useEffect(tmp8, tmp9);
        }
      }
      const fn3 = function u() {
        state = AppFreezeStore.getState();
        let tmp = isActivityPanelFullscreen;
        if (isActivityPanelFullscreen) {
          tmp = first;
        }
        let freezeLock = state.requestFreezeLock({ lockEnabled: tmp, key: id });
        return () => {
          state = state.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: false, key });
        };
      };
      const items = [isActivityPanelFullscreen, first, id];
      cResult[0] = id;
      cResult[1] = isActivityPanelFullscreen;
      cResult[2] = first;
      cResult[3] = fn3;
      cResult[4] = items;
      tmp9 = items;
      tmp8 = fn3;
      const obj5 = { runOnJS: require("ReanimatedRexport").runOnJS, setWrapperGestureInProgress: tmp3[1] };
    }
  : function useAppFreeze(wrapperOffset) {
      _require = wrapperOffset;
      const isActivityPanelFullscreen = require("ActivityPanelUtils").useIsActivityPanelFullscreen();
      const tmp2 = id(noop.useState(false), 2);
      const first = tmp2[0];
      dependencyMap = tmp4;
      id = noop.useId();
      let obj = require("ActivityPanelUtils");
      const fn = function l() {
        return wrapperOffset.get().gestureActive;
      };
      fn.__closure = { wrapperOffset };
      fn.__workletHash = 9281400139768;
      fn.__initData = __initData3;
      const fn2 = function s(arg0, arg1) {
        if (arg0 !== arg1) {
          ReanimatedRexport.runOnJS(closure_3)(arg0);
        }
      };
      const obj2 = require("ReanimatedRexport");
      fn2.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setWrapperGestureInProgress: tmp2[1] };
      fn2.__workletHash = 3530736051520;
      fn2.__initData = __initData4;
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      const items = [isActivityPanelFullscreen, first, id];
      const effect = noop.useEffect(() => {
        state = AppFreezeStore.getState();
        let tmp = isActivityPanelFullscreen;
        if (isActivityPanelFullscreen) {
          tmp = first;
        }
        let freezeLock = state.requestFreezeLock({ lockEnabled: tmp, key: id });
        return () => {
          state = state.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: false, key });
        };
      }, items);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useActivityOrientationState(isConnected) {
      const cResult = isConnected(orientationLockStateForApp[12]).c(13);
      isConnected = isConnected.isConnected;
      const selectedMode = isConnected.selectedMode;
      const isVoicePanelFullscreen = isConnected.isVoicePanelFullscreen;
      ({ applicationId, orientationLockStateForApp } = isConnected);
      if (orientationLockStateForApp == null) {
        orientationLockStateForApp = constants.UNLOCKED;
      }
      if (cResult[0] === orientationLockStateForApp) {
        if (cResult[1] === isConnected) {
          if (cResult[2] === isVoicePanelFullscreen) {
            if (cResult[3] === selectedMode) {
              let tmp3 = cResult[4];
            }
            if (cResult[5] === orientationLockStateForApp) {
              if (cResult[6] === applicationId) {
                if (cResult[7] === isConnected) {
                  if (cResult[8] === isVoicePanelFullscreen) {
                    if (cResult[9] === selectedMode) {
                      let tmp4 = cResult[10];
                    }
                    const layoutEffect = noop.useLayoutEffect(tmp3, tmp4);
                    const _Symbol = Symbol;
                    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                      const fn2 = function s() {
                        return () => isConnected(orientationLockStateForApp[15]).restoreDefaultOrientation();
                      };
                      const items = [];
                      cResult[11] = fn2;
                      cResult[12] = items;
                      let tmp8 = items;
                      let tmp7 = fn2;
                    } else {
                      tmp7 = cResult[11];
                      tmp8 = cResult[12];
                    }
                    const layoutEffect1 = noop.useLayoutEffect(tmp7, tmp8);
                  }
                }
              }
            }
            const items1 = [
              applicationId,
              isConnected,
              selectedMode,
              orientationLockStateForApp,
              isVoicePanelFullscreen,
            ];
            cResult[5] = orientationLockStateForApp;
            cResult[6] = applicationId;
            cResult[7] = isConnected;
            cResult[8] = isVoicePanelFullscreen;
            cResult[9] = selectedMode;
            cResult[10] = items1;
            tmp4 = items1;
          }
        }
      }
      const fn = function c() {
        if (!isVoicePanelFullscreen) {
          if (selectedMode === ActivityPanelModes.PANEL) {
            if (isConnected) {
              applyActivityOrientationLockDefault(orientationLockStateForApp);
            }
          }
          const result = DeviceOrientation.restoreDefaultOrientation();
        }
      };
      cResult[0] = orientationLockStateForApp;
      cResult[1] = isConnected;
      cResult[2] = isVoicePanelFullscreen;
      cResult[3] = selectedMode;
      cResult[4] = fn;
      tmp3 = fn;
      let obj = isConnected(orientationLockStateForApp[12]);
    }
  : function useActivityOrientationState(isConnected) {
      isConnected = isConnected.isConnected;
      const selectedMode = isConnected.selectedMode;
      const isVoicePanelFullscreen = isConnected.isVoicePanelFullscreen;
      let UNLOCKED;
      if (UNLOCKED == null) {
        UNLOCKED = constants.UNLOCKED;
      }
      const items = [isConnected.applicationId, isConnected, selectedMode, UNLOCKED, isVoicePanelFullscreen];
      const layoutEffect = noop.useLayoutEffect(() => {
        if (!isVoicePanelFullscreen) {
          if (selectedMode === ActivityPanelModes.PANEL) {
            if (isConnected) {
              applyActivityOrientationLockDefault(UNLOCKED);
            }
          }
          const result = DeviceOrientation.restoreDefaultOrientation();
        }
      }, items);
      const layoutEffect1 = noop.useLayoutEffect(() => () => isConnected(UNLOCKED[15]).restoreDefaultOrientation(), []);
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSafeAreaLock(isActivityConnected) {
      const cResult = isActivityConnected(id[12]).c(6);
      isActivityConnected = isActivityConnected.isActivityConnected;
      const isActivityFocused = isActivityConnected.isActivityFocused;
      const isVoicePanelFullscreen = isActivityConnected.isVoicePanelFullscreen;
      id = noop.useId();
      if (cResult[0] === isActivityConnected) {
        if (cResult[1] === isActivityFocused) {
          if (cResult[2] === isVoicePanelFullscreen) {
            if (cResult[3] === id) {
              let tmp3 = cResult[4];
              let tmp4 = cResult[5];
            }
            const layoutEffect = noop.useLayoutEffect(tmp3, tmp4);
          }
        }
      }
      let fn = function c() {
        if (!isVoicePanelFullscreen) {
          let fn;
          if (isActivityConnected) {
            state = SafeAreaDisabledStore.getState();
            const obj = { key: id, lockEnabled: isActivityFocused };
            let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
            fn = () => {
              state = state.getState();
              const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
            };
          }
          return fn;
        }
      };
      const items = [id, isActivityConnected, isActivityFocused, isVoicePanelFullscreen];
      cResult[0] = isActivityConnected;
      cResult[1] = isActivityFocused;
      cResult[2] = isVoicePanelFullscreen;
      cResult[3] = id;
      cResult[4] = fn;
      cResult[5] = items;
      tmp4 = items;
      tmp3 = fn;
      let obj = isActivityConnected(id[12]);
    }
  : function useSafeAreaLock(isActivityConnected) {
      isActivityConnected = isActivityConnected.isActivityConnected;
      const isActivityFocused = isActivityConnected.isActivityFocused;
      const isVoicePanelFullscreen = isActivityConnected.isVoicePanelFullscreen;
      const id = noop.useId();
      const items = [id, isActivityConnected, isActivityFocused, isVoicePanelFullscreen];
      const layoutEffect = noop.useLayoutEffect(() => {
        if (!isVoicePanelFullscreen) {
          let fn;
          if (isActivityConnected) {
            state = SafeAreaDisabledStore.getState();
            const obj = { key: id, lockEnabled: isActivityFocused };
            let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
            fn = () => {
              state = state.getState();
              const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
            };
          }
          return fn;
        }
      }, items);
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseActivityPanelController(arg0) {
      const cResult = mode(sharedValue1[12]).c(44);
      ({ children, context, orientationLockStateForApp, mode } = arg0);
      ({ hasConnectedActivity, connectedActivityAppId } = arg0);
      ({ currentApp, updateActivityPanelMode } = arg0);
      const tmp5 = connectedActivityAppId(sharedValue1[17])();
      const tmp6 = connectedActivityAppId(sharedValue1[18])();
      let obj = mode(sharedValue1[12]);
      const sharedValue = mode(sharedValue1[14]).useSharedValue({ x: -1, y: -1 });
      const tmp8 = connectedActivityAppId(sharedValue1[19])(tmp5);
      const obj2 = mode(sharedValue1[14]);
      sharedValue1 = mode(sharedValue1[14]).useSharedValue(closure_15);
      _slicedToArray = noop.useRef(mode);
      const tmp10 = connectedActivityAppId(sharedValue1[20])();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = connectedActivityAppId(tmp2[21])();
        cResult[0] = tmp12;
        let first = tmp12;
      } else {
        first = cResult[0];
      }
      noop = tmp13;
      if (cResult[1] === currentApp) {
        if (cResult[2] === orientationLockStateForApp) {
          let tmp14 = cResult[3];
        }
        closure_6 = tmp14;
        if (cResult[4] === tmp14) {
          if (cResult[5] === tmp5.top) {
            if (cResult[6] === tmp6) {
              let tmp16 = cResult[7];
            }
            AppFreezeStore = tmp16;
            SafeAreaDisabledStore = obj4.useRef(connectedActivityAppId);
            const isVoicePanelFullscreen = mode(tmp2[23]).useIsVoicePanelFullscreen();
            connectedActivityAppId(tmp2[24])();
            if (cResult[8] === mode) {
              if (cResult[9] === updateActivityPanelMode) {
                let tmp22 = cResult[10];
              }
              mode(tmp2[25]).useNavigatorBackPressHandler(tmp22);
              if (cResult[11] === connectedActivityAppId) {
                if (cResult[12] === mode) {
                  if (cResult[13] === tmp14) {
                    if (cResult[14] === updateActivityPanelMode) {
                      if (cResult[15] === tmp16.isWindowLandscape) {
                        let tmp24 = cResult[16];
                        let tmp25 = cResult[17];
                      }
                      const effect = obj4.useEffect(tmp24, tmp25);
                      if (cResult[18] === mode) {
                        if (cResult[19] === sharedValue1) {
                          let tmp27 = cResult[20];
                          let tmp28 = cResult[21];
                        }
                        const effect1 = obj4.useEffect(tmp27, tmp28);
                        if (cResult[22] === connectedActivityAppId) {
                          if (cResult[23] === hasConnectedActivity) {
                            if (cResult[24] === isVoicePanelFullscreen) {
                              if (cResult[25] === mode) {
                                if (cResult[26] === orientationLockStateForApp) {
                                  let tmp31 = cResult[27];
                                }
                                closure_22(tmp31);
                                class G {
                                  constructor() {
                                    tmp3 = mode === ActivityPanelModes.PANEL;
                                    tmp = mode;
                                    if (tmp3) {
                                      tmp4 = closure_4;
                                      tmp3 = closure_4.current !== tmp2.PANEL;
                                    }
                                    if (tmp3) {
                                      tmp5 = closure_0;
                                      tmp6 = closure_3;
                                      obj = closure_0(closure_3[27]);
                                      dismissKeyboardResult = obj.dismissKeyboard();
                                      tmp8 = closure_3;
                                      tmp9 = closure_15;
                                      result = closure_3.set(closure_15);
                                    }
                                    closure_4.current = tmp;
                                    return;
                                  }
                                }
                                class R {
                                  constructor() {
                                    tmp = connectedActivityAppId;
                                    if (null != connectedActivityAppId) {
                                      tmp2 = closure_8;
                                      if (null == closure_8.current) {
                                        tmp15 = closure_1;
                                        tmp16 = closure_3;
                                        tmp17 = closure_7;
                                        tmp18 = closure_6;
                                        if (!closure_1(closure_3[26])(closure_7.isWindowLandscape, closure_6)) {
                                          tmp19 = closure_5;
                                          if (!closure_5) {
                                            tmp20 = updateActivityPanelMode;
                                            tmp21 = ActivityPanelModes;
                                            tmp22 = updateActivityPanelMode(
                                              ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE,
                                            );
                                          }
                                        }
                                        tmp23 = updateActivityPanelMode;
                                        tmp24 = ActivityPanelModes;
                                        tmp25 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                                      }
                                      tmp26 = closure_8;
                                      closure_8.current = tmp;
                                      return;
                                    }
                                    if (null == tmp) {
                                      tmp3 = closure_8;
                                      if (null != closure_8.current) {
                                        tmp12 = updateActivityPanelMode;
                                        tmp13 = ActivityPanelModes;
                                        tmp14 = updateActivityPanelMode(ActivityPanelModes.DISCONNECTED);
                                      }
                                    }
                                    tmp4 = mode === ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE;
                                    if (tmp4) {
                                      tmp5 = closure_1;
                                      tmp6 = closure_3;
                                      tmp7 = closure_7;
                                      tmp8 = closure_6;
                                      tmp4 = closure_1(closure_3[26])(closure_7.isWindowLandscape, closure_6);
                                    }
                                    if (tmp4) {
                                      tmp9 = updateActivityPanelMode;
                                      tmp10 = ActivityPanelModes;
                                      tmp11 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                                    }
                                    return;
                                  }
                                }
                                if (cResult[28] === hasConnectedActivity) {
                                  if (cResult[29] === isVoicePanelFullscreen) {
                                    if (cResult[30] === tmp35) {
                                      let tmp36 = cResult[31];
                                    }
                                    closure_23(tmp36);
                                    class G {
                                      constructor() {
                                        tmp3 = mode === ActivityPanelModes.PANEL;
                                        tmp = mode;
                                        if (tmp3) {
                                          tmp4 = closure_4;
                                          tmp3 = closure_4.current !== tmp2.PANEL;
                                        }
                                        if (tmp3) {
                                          tmp5 = closure_0;
                                          tmp6 = closure_3;
                                          obj = closure_0(closure_3[27]);
                                          dismissKeyboardResult = obj.dismissKeyboard();
                                          tmp8 = closure_3;
                                          tmp9 = closure_15;
                                          result = closure_3.set(closure_15);
                                        }
                                        closure_4.current = tmp;
                                        return;
                                      }
                                    }
                                    class R {
                                      constructor() {
                                        tmp = connectedActivityAppId;
                                        if (null != connectedActivityAppId) {
                                          tmp2 = closure_8;
                                          if (null == closure_8.current) {
                                            tmp15 = closure_1;
                                            tmp16 = closure_3;
                                            tmp17 = closure_7;
                                            tmp18 = closure_6;
                                            if (!closure_1(closure_3[26])(closure_7.isWindowLandscape, closure_6)) {
                                              tmp19 = closure_5;
                                              if (!closure_5) {
                                                tmp20 = updateActivityPanelMode;
                                                tmp21 = ActivityPanelModes;
                                                tmp22 = updateActivityPanelMode(
                                                  ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE,
                                                );
                                              }
                                            }
                                            tmp23 = updateActivityPanelMode;
                                            tmp24 = ActivityPanelModes;
                                            tmp25 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                                          }
                                          tmp26 = closure_8;
                                          closure_8.current = tmp;
                                          return;
                                        }
                                        if (null == tmp) {
                                          tmp3 = closure_8;
                                          if (null != closure_8.current) {
                                            tmp12 = updateActivityPanelMode;
                                            tmp13 = ActivityPanelModes;
                                            tmp14 = updateActivityPanelMode(ActivityPanelModes.DISCONNECTED);
                                          }
                                        }
                                        tmp4 = mode === ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE;
                                        if (tmp4) {
                                          tmp5 = closure_1;
                                          tmp6 = closure_3;
                                          tmp7 = closure_7;
                                          tmp8 = closure_6;
                                          tmp4 = closure_1(closure_3[26])(closure_7.isWindowLandscape, closure_6);
                                        }
                                        if (tmp4) {
                                          tmp9 = updateActivityPanelMode;
                                          tmp10 = ActivityPanelModes;
                                          tmp11 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                                        }
                                        return;
                                      }
                                    }
                                    if (cResult[32] === mode) {
                                      if (cResult[33] === tmp8) {
                                        if (cResult[34] === sharedValue) {
                                          if (cResult[35] === updateActivityPanelMode) {
                                            if (cResult[36] === tmp10) {
                                              if (cResult[37] === tmp16) {
                                                if (cResult[38] === sharedValue1) {
                                                  let tmp39 = cResult[39];
                                                }
                                                if (cResult[40] === children) {
                                                  if (cResult[41] === context.Provider) {
                                                    if (cResult[42] === tmp39) {
                                                      let tmp40 = cResult[43];
                                                    }
                                                    return tmp40;
                                                  }
                                                }
                                                class G {
                                                  constructor() {
                                                    tmp3 = mode === ActivityPanelModes.PANEL;
                                                    tmp = mode;
                                                    if (tmp3) {
                                                      tmp4 = closure_4;
                                                      tmp3 = closure_4.current !== tmp2.PANEL;
                                                    }
                                                    if (tmp3) {
                                                      tmp5 = closure_0;
                                                      tmp6 = closure_3;
                                                      obj = closure_0(closure_3[27]);
                                                      dismissKeyboardResult = obj.dismissKeyboard();
                                                      tmp8 = closure_3;
                                                      tmp9 = closure_15;
                                                      result = closure_3.set(closure_15);
                                                    }
                                                    closure_4.current = tmp;
                                                    return;
                                                  }
                                                }
                                                class R {
                                                  constructor() {
                                                    tmp = connectedActivityAppId;
                                                    if (null != connectedActivityAppId) {
                                                      tmp2 = closure_8;
                                                      if (null == closure_8.current) {
                                                        tmp15 = closure_1;
                                                        tmp16 = closure_3;
                                                        tmp17 = closure_7;
                                                        tmp18 = closure_6;
                                                        if (
                                                          !closure_1(closure_3[26])(
                                                            closure_7.isWindowLandscape,
                                                            closure_6,
                                                          )
                                                        ) {
                                                          tmp19 = closure_5;
                                                          if (!closure_5) {
                                                            tmp20 = updateActivityPanelMode;
                                                            tmp21 = ActivityPanelModes;
                                                            tmp22 = updateActivityPanelMode(
                                                              ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE,
                                                            );
                                                          }
                                                        }
                                                        tmp23 = updateActivityPanelMode;
                                                        tmp24 = ActivityPanelModes;
                                                        tmp25 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                                                      }
                                                      tmp26 = closure_8;
                                                      closure_8.current = tmp;
                                                      return;
                                                    }
                                                    if (null == tmp) {
                                                      tmp3 = closure_8;
                                                      if (null != closure_8.current) {
                                                        tmp12 = updateActivityPanelMode;
                                                        tmp13 = ActivityPanelModes;
                                                        tmp14 = updateActivityPanelMode(
                                                          ActivityPanelModes.DISCONNECTED,
                                                        );
                                                      }
                                                    }
                                                    tmp4 =
                                                      mode === ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE;
                                                    if (tmp4) {
                                                      tmp5 = closure_1;
                                                      tmp6 = closure_3;
                                                      tmp7 = closure_7;
                                                      tmp8 = closure_6;
                                                      tmp4 = closure_1(closure_3[26])(
                                                        closure_7.isWindowLandscape,
                                                        closure_6,
                                                      );
                                                    }
                                                    if (tmp4) {
                                                      tmp9 = updateActivityPanelMode;
                                                      tmp10 = ActivityPanelModes;
                                                      tmp11 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                                                    }
                                                    return;
                                                  }
                                                }
                                                tmp42[1] = children;
                                                const tmp43 = <context.Provider {...tmp42} />;
                                                class M {
                                                  constructor() {
                                                    flag = mode === ActivityPanelModes.PANEL;
                                                    if (flag) {
                                                      tmp2 = updateActivityPanelMode;
                                                      tmp3 = updateActivityPanelMode(tmp.PIP);
                                                      flag = true;
                                                    }
                                                    return flag;
                                                  }
                                                }
                                                cResult[40] = children;
                                                cResult[41] = context.Provider;
                                                cResult[42] = tmp39;
                                                cResult[43] = tmp43;
                                                tmp40 = tmp43;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj5 = {
                                      mode: null,
                                      setMode: null,
                                      wrapperDimensions: null,
                                      pipState: null,
                                      pipAvoidanceSpecs: null,
                                      wrapperOffset: null,
                                      useActivityWebViewLock: null,
                                    };
                                    class M {
                                      constructor() {
                                        flag = mode === ActivityPanelModes.PANEL;
                                        if (flag) {
                                          tmp2 = updateActivityPanelMode;
                                          tmp3 = updateActivityPanelMode(tmp.PIP);
                                          flag = true;
                                        }
                                        return flag;
                                      }
                                    }
                                    obj5.setMode = updateActivityPanelMode;
                                    obj5.wrapperDimensions = tmp16;
                                    obj5.pipState = sharedValue;
                                    obj5.pipAvoidanceSpecs = tmp8;
                                    obj5.wrapperOffset = sharedValue1;
                                    obj5.useActivityWebViewLock = tmp10;
                                    cResult[32] = mode;
                                    cResult[33] = tmp8;
                                    cResult[34] = sharedValue;
                                    cResult[35] = updateActivityPanelMode;
                                    cResult[36] = tmp10;
                                    cResult[37] = tmp16;
                                    cResult[38] = sharedValue1;
                                    cResult[39] = obj5;
                                    tmp39 = obj5;
                                  }
                                }
                                const obj6 = {
                                  isActivityConnected: null,
                                  isActivityFocused: null,
                                  isVoicePanelFullscreen: null,
                                };
                                class M {
                                  constructor() {
                                    flag = mode === ActivityPanelModes.PANEL;
                                    if (flag) {
                                      tmp2 = updateActivityPanelMode;
                                      tmp3 = updateActivityPanelMode(tmp.PIP);
                                      flag = true;
                                    }
                                    return flag;
                                  }
                                }
                                obj6.isActivityFocused = tmp35;
                                obj6.isVoicePanelFullscreen = isVoicePanelFullscreen;
                                cResult[28] = hasConnectedActivity;
                                cResult[29] = isVoicePanelFullscreen;
                                cResult[30] = tmp35;
                                cResult[31] = obj6;
                                tmp36 = obj6;
                              }
                            }
                          }
                        }
                        class G {
                          constructor() {
                            tmp3 = mode === ActivityPanelModes.PANEL;
                            tmp = mode;
                            if (tmp3) {
                              tmp4 = closure_4;
                              tmp3 = closure_4.current !== tmp2.PANEL;
                            }
                            if (tmp3) {
                              tmp5 = closure_0;
                              tmp6 = closure_3;
                              obj = closure_0(closure_3[27]);
                              dismissKeyboardResult = obj.dismissKeyboard();
                              tmp8 = closure_3;
                              tmp9 = closure_15;
                              result = closure_3.set(closure_15);
                            }
                            closure_4.current = tmp;
                            return;
                          }
                        }
                        class R {
                          constructor() {
                            tmp = connectedActivityAppId;
                            if (null != connectedActivityAppId) {
                              tmp2 = closure_8;
                              if (null == closure_8.current) {
                                tmp15 = closure_1;
                                tmp16 = closure_3;
                                tmp17 = closure_7;
                                tmp18 = closure_6;
                                if (!closure_1(closure_3[26])(closure_7.isWindowLandscape, closure_6)) {
                                  tmp19 = closure_5;
                                  if (!closure_5) {
                                    tmp20 = updateActivityPanelMode;
                                    tmp21 = ActivityPanelModes;
                                    tmp22 = updateActivityPanelMode(
                                      ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE,
                                    );
                                  }
                                }
                                tmp23 = updateActivityPanelMode;
                                tmp24 = ActivityPanelModes;
                                tmp25 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                              }
                              tmp26 = closure_8;
                              closure_8.current = tmp;
                              return;
                            }
                            if (null == tmp) {
                              tmp3 = closure_8;
                              if (null != closure_8.current) {
                                tmp12 = updateActivityPanelMode;
                                tmp13 = ActivityPanelModes;
                                tmp14 = updateActivityPanelMode(ActivityPanelModes.DISCONNECTED);
                              }
                            }
                            tmp4 = mode === ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE;
                            if (tmp4) {
                              tmp5 = closure_1;
                              tmp6 = closure_3;
                              tmp7 = closure_7;
                              tmp8 = closure_6;
                              tmp4 = closure_1(closure_3[26])(closure_7.isWindowLandscape, closure_6);
                            }
                            if (tmp4) {
                              tmp9 = updateActivityPanelMode;
                              tmp10 = ActivityPanelModes;
                              tmp11 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                            }
                            return;
                          }
                        }
                        tmp32[1] = mode;
                        tmp32[2] = isVoicePanelFullscreen;
                        class M {
                          constructor() {
                            flag = mode === ActivityPanelModes.PANEL;
                            if (flag) {
                              tmp2 = updateActivityPanelMode;
                              tmp3 = updateActivityPanelMode(tmp.PIP);
                              flag = true;
                            }
                            return flag;
                          }
                        }
                        tmp32[4] = orientationLockStateForApp;
                        cResult[22] = connectedActivityAppId;
                        cResult[23] = hasConnectedActivity;
                        cResult[24] = isVoicePanelFullscreen;
                        cResult[25] = mode;
                        cResult[26] = orientationLockStateForApp;
                        cResult[27] = tmp32;
                        tmp31 = tmp32;
                      }
                      class G {
                        constructor() {
                          tmp3 = mode === ActivityPanelModes.PANEL;
                          tmp = mode;
                          if (tmp3) {
                            tmp4 = closure_4;
                            tmp3 = closure_4.current !== tmp2.PANEL;
                          }
                          if (tmp3) {
                            tmp5 = closure_0;
                            tmp6 = closure_3;
                            obj = closure_0(closure_3[27]);
                            dismissKeyboardResult = obj.dismissKeyboard();
                            tmp8 = closure_3;
                            tmp9 = closure_15;
                            result = closure_3.set(closure_15);
                          }
                          closure_4.current = tmp;
                          return;
                        }
                      }
                      class R {
                        constructor() {
                          tmp = connectedActivityAppId;
                          if (null != connectedActivityAppId) {
                            tmp2 = closure_8;
                            if (null == closure_8.current) {
                              tmp15 = closure_1;
                              tmp16 = closure_3;
                              tmp17 = closure_7;
                              tmp18 = closure_6;
                              if (!closure_1(closure_3[26])(closure_7.isWindowLandscape, closure_6)) {
                                tmp19 = closure_5;
                                if (!closure_5) {
                                  tmp20 = updateActivityPanelMode;
                                  tmp21 = ActivityPanelModes;
                                  tmp22 = updateActivityPanelMode(ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE);
                                }
                              }
                              tmp23 = updateActivityPanelMode;
                              tmp24 = ActivityPanelModes;
                              tmp25 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                            }
                            tmp26 = closure_8;
                            closure_8.current = tmp;
                            return;
                          }
                          if (null == tmp) {
                            tmp3 = closure_8;
                            if (null != closure_8.current) {
                              tmp12 = updateActivityPanelMode;
                              tmp13 = ActivityPanelModes;
                              tmp14 = updateActivityPanelMode(ActivityPanelModes.DISCONNECTED);
                            }
                          }
                          tmp4 = mode === ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE;
                          if (tmp4) {
                            tmp5 = closure_1;
                            tmp6 = closure_3;
                            tmp7 = closure_7;
                            tmp8 = closure_6;
                            tmp4 = closure_1(closure_3[26])(closure_7.isWindowLandscape, closure_6);
                          }
                          if (tmp4) {
                            tmp9 = updateActivityPanelMode;
                            tmp10 = ActivityPanelModes;
                            tmp11 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                          }
                          return;
                        }
                      }
                      tmp29[0] = mode;
                      tmp29[1] = sharedValue1;
                      class M {
                        constructor() {
                          flag = mode === ActivityPanelModes.PANEL;
                          if (flag) {
                            tmp2 = updateActivityPanelMode;
                            tmp3 = updateActivityPanelMode(tmp.PIP);
                            flag = true;
                          }
                          return flag;
                        }
                      }
                      cResult[18] = mode;
                      cResult[19] = sharedValue1;
                      cResult[20] = G;
                      cResult[21] = tmp29;
                      tmp28 = tmp29;
                      tmp27 = G;
                    }
                  }
                }
              }
              class R {
                constructor() {
                  tmp = connectedActivityAppId;
                  if (null != connectedActivityAppId) {
                    tmp2 = closure_8;
                    if (null == closure_8.current) {
                      tmp15 = closure_1;
                      tmp16 = closure_3;
                      tmp17 = closure_7;
                      tmp18 = closure_6;
                      if (!closure_1(closure_3[26])(closure_7.isWindowLandscape, closure_6)) {
                        tmp19 = closure_5;
                        if (!closure_5) {
                          tmp20 = updateActivityPanelMode;
                          tmp21 = ActivityPanelModes;
                          tmp22 = updateActivityPanelMode(ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE);
                        }
                      }
                      tmp23 = updateActivityPanelMode;
                      tmp24 = ActivityPanelModes;
                      tmp25 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                    }
                    tmp26 = closure_8;
                    closure_8.current = tmp;
                    return;
                  }
                  if (null == tmp) {
                    tmp3 = closure_8;
                    if (null != closure_8.current) {
                      tmp12 = updateActivityPanelMode;
                      tmp13 = ActivityPanelModes;
                      tmp14 = updateActivityPanelMode(ActivityPanelModes.DISCONNECTED);
                    }
                  }
                  tmp4 = mode === ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE;
                  if (tmp4) {
                    tmp5 = closure_1;
                    tmp6 = closure_3;
                    tmp7 = closure_7;
                    tmp8 = closure_6;
                    tmp4 = closure_1(closure_3[26])(closure_7.isWindowLandscape, closure_6);
                  }
                  if (tmp4) {
                    tmp9 = updateActivityPanelMode;
                    tmp10 = ActivityPanelModes;
                    tmp11 = updateActivityPanelMode(ActivityPanelModes.PANEL);
                  }
                  return;
                }
              }
              const items = [connectedActivityAppId, , , , ,];
              class M {
                constructor() {
                  flag = mode === ActivityPanelModes.PANEL;
                  if (flag) {
                    tmp2 = updateActivityPanelMode;
                    tmp3 = updateActivityPanelMode(tmp.PIP);
                    flag = true;
                  }
                  return flag;
                }
              }
              items[2] = mode;
              items[3] = tmp16.isWindowLandscape;
              items[4] = tmp13;
              items[5] = updateActivityPanelMode;
              cResult[11] = connectedActivityAppId;
              cResult[12] = mode;
              cResult[13] = tmp14;
              cResult[14] = updateActivityPanelMode;
              cResult[15] = tmp16.isWindowLandscape;
              cResult[16] = R;
              cResult[17] = items;
              tmp25 = items;
              tmp24 = R;
              const tmpResult3 = mode(tmp2[25]);
            }
            class M {
              constructor() {
                flag = mode === ActivityPanelModes.PANEL;
                if (flag) {
                  tmp2 = updateActivityPanelMode;
                  tmp3 = updateActivityPanelMode(tmp.PIP);
                  flag = true;
                }
                return flag;
              }
            }
            cResult[8] = mode;
            cResult[9] = updateActivityPanelMode;
            cResult[10] = M;
            tmp22 = M;
            const tmpResult = mode(tmp2[23]);
          }
        }
        const tmp19 = closure_16(tmp6, tmp5.top, tmp14, tmp13);
        cResult[4] = tmp14;
        cResult[5] = tmp5.top;
        cResult[6] = tmp6;
        cResult[7] = tmp19;
        tmp16 = tmp19;
      }
      let defaultOrientationLockState = orientationLockStateForApp;
      if (orientationLockStateForApp == null) {
        defaultOrientationLockState = mode(tmp2[22]).getDefaultOrientationLockState(currentApp);
        const tmpResult4 = mode(tmp2[22]);
      }
      cResult[1] = currentApp;
      cResult[2] = orientationLockStateForApp;
      cResult[3] = defaultOrientationLockState;
      tmp14 = defaultOrientationLockState;
      const obj3 = mode(sharedValue1[14]);
    }
  : function BaseActivityPanelController(updateActivityPanelMode) {
      ({ orientationLockStateForApp, mode } = updateActivityPanelMode);
      ({ hasConnectedActivity, connectedActivityAppId } = updateActivityPanelMode);
      updateActivityPanelMode = updateActivityPanelMode.updateActivityPanelMode;
      let sharedValue;
      let wrapperDimensions;
      ({ children, context, currentApp } = updateActivityPanelMode);
      let tmp3 = connectedActivityAppId(sharedValue[17])();
      let tmp4 = connectedActivityAppId(sharedValue[18])();
      sharedValue = mode(sharedValue[14]).useSharedValue({ x: -1, y: -1 });
      const tmp7 = connectedActivityAppId(sharedValue[19])(tmp3);
      const pipAvoidanceSpecs = tmp7;
      let obj = mode(sharedValue[14]);
      const sharedValue1 = mode(sharedValue[14]).useSharedValue(closure_15);
      sharedValue1.useRef(mode);
      const tmp9 = connectedActivityAppId(sharedValue[20])();
      const useActivityWebViewLock = tmp9;
      const tmp10 = !connectedActivityAppId(sharedValue[21])();
      closure_8 = tmp10;
      let defaultOrientationLockState = orientationLockStateForApp;
      if (orientationLockStateForApp == null) {
        defaultOrientationLockState = mode(tmp2[22]).getDefaultOrientationLockState(currentApp);
        const tmp5Result = mode(tmp2[22]);
      }
      const tmp12 = closure_16(tmp4, tmp3.top, defaultOrientationLockState, tmp10);
      wrapperDimensions = tmp12;
      sharedValue1.useRef(connectedActivityAppId);
      const obj2 = mode(sharedValue[14]);
      const isVoicePanelFullscreen = mode(sharedValue[23]).useIsVoicePanelFullscreen();
      connectedActivityAppId(sharedValue[24])();
      const tmp5Result3 = mode(sharedValue[23]);
      mode(sharedValue[25]).useNavigatorBackPressHandler(() => {
        let flag = mode === ActivityPanelModes.PANEL;
        if (flag) {
          updateActivityPanelMode(tmp.PIP);
          flag = true;
        }
        return flag;
      });
      const items = [
        connectedActivityAppId,
        defaultOrientationLockState,
        mode,
        tmp12.isWindowLandscape,
        tmp10,
        updateActivityPanelMode,
      ];
      const effect = obj3.useEffect(() => {
        if (null != connectedActivityAppId) {
          if (null == ref2.current) {
            if (
              !doesOrientationMatchLockStateDefault(wrapperDimensions.isWindowLandscape, defaultOrientationLockState)
            ) {
              if (!closure_8) {
                updateActivityPanelMode(ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE);
              }
            }
            updateActivityPanelMode(ActivityPanelModes.PANEL);
          }
          ref2.current = connectedActivityAppId;
        }
        if (null == connectedActivityAppId) {
          if (null != ref2.current) {
            updateActivityPanelMode(ActivityPanelModes.DISCONNECTED);
          }
        }
        let tmp4 = mode === ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE;
        if (tmp4) {
          tmp4 = doesOrientationMatchLockStateDefault(wrapperDimensions.isWindowLandscape, defaultOrientationLockState);
        }
        if (tmp4) {
          updateActivityPanelMode(ActivityPanelModes.PANEL);
        }
      }, items);
      const items1 = [mode, sharedValue1];
      const effect1 = obj3.useEffect(() => {
        let tmp3 = mode === ActivityPanelModes.PANEL;
        if (tmp3) {
          tmp3 = ref.current !== tmp2.PANEL;
        }
        if (tmp3) {
          ChatInputUtils.dismissKeyboard();
          const result = sharedValue1.set(closure_15);
        }
        ref.current = mode;
      }, items1);
      closure_22({
        isConnected: hasConnectedActivity,
        selectedMode: mode,
        isVoicePanelFullscreen,
        applicationId: connectedActivityAppId,
        orientationLockStateForApp,
      });
      const obj4 = { isActivityConnected: hasConnectedActivity, isActivityFocused: null, isVoicePanelFullscreen: null };
      if (hasConnectedActivity) {
        hasConnectedActivity = mode === ActivityPanelModes.PANEL;
      }
      obj4.isActivityFocused = hasConnectedActivity;
      obj4.isVoicePanelFullscreen = isVoicePanelFullscreen;
      closure_23(obj4);
      closure_21(sharedValue1);
      const items2 = [mode, tmp7, sharedValue, updateActivityPanelMode, tmp9, tmp12, sharedValue1];
      const tmp5Result4 = mode(sharedValue[25]);
      return (
        <context.Provider
          value={sharedValue1.useMemo(
            () => ({
              mode,
              setMode: updateActivityPanelMode,
              wrapperDimensions,
              pipState: sharedValue,
              pipAvoidanceSpecs,
              wrapperOffset: sharedValue1,
              useActivityWebViewLock,
            }),
            items2,
          )}
        >
          {children}
        </context.Provider>
      );
    };
let closure_24 = tmp3;
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelController.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityPanelController(children) {
      const cResult = mode(576).c(14);
      children = children.children;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmbeddedActivitiesStore, ApplicationStore];
        const fn = function s() {
          const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
          const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
          const selfEmbeddedActivityForLocation =
            EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
          let applicationId;
          if (selfEmbeddedActivityForLocation != null) {
            applicationId = selfEmbeddedActivityForLocation.applicationId;
          }
          application = undefined;
          if (null != applicationId) {
            application = application.getApplication(applicationId);
          }
          const embeddedActivityLocationChannelId = mode(dependencyMap[28]).getEmbeddedActivityLocationChannelId(
            connectedActivityLocation,
          );
          const obj3 = {
            mode: activityPanelMode,
            connectedActivityInTextChannelId: null,
            hasConnectedActivity: null,
            connectedActivityAppId: null,
            currentApp: null,
            orientationLockStateForApp: null,
          };
          let tmp9;
          if (null != embeddedActivityLocationChannelId) {
            if (!connectedActivityInTextChannelId(dependencyMap[29])(embeddedActivityLocationChannelId)) {
              tmp9 = embeddedActivityLocationChannelId;
            }
          }
          obj3.connectedActivityInTextChannelId = tmp9;
          obj3.hasConnectedActivity = null != selfEmbeddedActivityForLocation;
          obj3.connectedActivityAppId = applicationId;
          obj3.currentApp = application;
          let orientationLockStateForApp;
          if (null != applicationId) {
            orientationLockStateForApp = EmbeddedActivitiesStore.getOrientationLockStateForApp(applicationId);
          }
          obj3.orientationLockStateForApp = orientationLockStateForApp;
          return obj3;
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp4 = items;
        tmp5 = fn;
        tmp6 = items1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      let obj = mode(576);
      const stateFromStoresObject = mode(504).useStateFromStoresObject(tmp4, tmp5, tmp6);
      mode = stateFromStoresObject.mode;
      const connectedActivityInTextChannelId = stateFromStoresObject.connectedActivityInTextChannelId;
      ({ hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } =
        stateFromStoresObject);
      if (cResult[3] === connectedActivityInTextChannelId) {
        if (cResult[4] === mode) {
          let tmp10 = cResult[5];
          let tmp11 = cResult[6];
        }
        const effect = noop.useEffect(tmp10, tmp11);
        if (cResult[7] === children) {
          if (cResult[8] === connectedActivityAppId) {
            if (cResult[9] === currentApp) {
              if (cResult[10] === hasConnectedActivity) {
                if (cResult[11] === mode) {
                  if (cResult[12] === orientationLockStateForApp) {
                    let tmp14 = cResult[13];
                  }
                  return tmp14;
                }
              }
            }
          }
        }
        const obj2 = {
          context: connectedActivityInTextChannelId(17702),
          orientationLockStateForApp,
          mode,
          hasConnectedActivity,
          connectedActivityAppId,
          currentApp,
          updateActivityPanelMode: EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode,
          children,
        };
        const tmp19 = (
          <closure_24
            context={connectedActivityInTextChannelId(17702)}
            orientationLockStateForApp={orientationLockStateForApp}
            mode={mode}
            hasConnectedActivity={hasConnectedActivity}
            connectedActivityAppId={connectedActivityAppId}
            currentApp={currentApp}
            updateActivityPanelMode={EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode}
          >
            {children}
          </closure_24>
        );
        cResult[7] = children;
        cResult[8] = connectedActivityAppId;
        cResult[9] = currentApp;
        cResult[10] = hasConnectedActivity;
        cResult[11] = mode;
        cResult[12] = orientationLockStateForApp;
        cResult[13] = tmp19;
        tmp14 = tmp19;
      }
      const fn2 = function y() {
        if (mode === ActivityPanelModes.PANEL) {
          const channel = ChannelStore.getChannel(connectedActivityInTextChannelId);
          if (undefined !== channel) {
            ({ guild_id: obj2.guildId, id: obj2.channelId } = channel);
            const channel1 = SelectedChannelActionCreatorsDefault.selectChannel({ guildId: null, channelId: null });
            const obj4 = { guildId: null, channelId: null };
            transitionToChannel.transitionToChannel(channel.id);
          }
        }
      };
      const items2 = [mode, connectedActivityInTextChannelId];
      cResult[3] = connectedActivityInTextChannelId;
      cResult[4] = mode;
      cResult[5] = fn2;
      cResult[6] = items2;
      tmp11 = items2;
      tmp10 = fn2;
      const tmpResult = mode(504);
    }
  : function ActivityPanelController(children) {
      let mode;
      const items = [EmbeddedActivitiesStore, ApplicationStore];
      const stateFromStoresObject = mode(504).useStateFromStoresObject(items, () => {
        const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
        const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
        const selfEmbeddedActivityForLocation =
          EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        let applicationId;
        if (selfEmbeddedActivityForLocation != null) {
          applicationId = selfEmbeddedActivityForLocation.applicationId;
        }
        application = undefined;
        if (null != applicationId) {
          application = application.getApplication(applicationId);
        }
        const embeddedActivityLocationChannelId = mode(dependencyMap[28]).getEmbeddedActivityLocationChannelId(
          connectedActivityLocation,
        );
        const obj3 = {
          mode: activityPanelMode,
          connectedActivityInTextChannelId: null,
          hasConnectedActivity: null,
          connectedActivityAppId: null,
          currentApp: null,
          orientationLockStateForApp: null,
        };
        let tmp9;
        if (null != embeddedActivityLocationChannelId) {
          if (!connectedActivityInTextChannelId(dependencyMap[29])(embeddedActivityLocationChannelId)) {
            tmp9 = embeddedActivityLocationChannelId;
          }
        }
        obj3.connectedActivityInTextChannelId = tmp9;
        obj3.hasConnectedActivity = null != selfEmbeddedActivityForLocation;
        obj3.connectedActivityAppId = applicationId;
        obj3.currentApp = application;
        let orientationLockStateForApp;
        if (null != applicationId) {
          orientationLockStateForApp = EmbeddedActivitiesStore.getOrientationLockStateForApp(applicationId);
        }
        obj3.orientationLockStateForApp = orientationLockStateForApp;
        return obj3;
      }, []);
      mode = stateFromStoresObject.mode;
      const connectedActivityInTextChannelId = stateFromStoresObject.connectedActivityInTextChannelId;
      const items1 = [mode, connectedActivityInTextChannelId];
      ({ hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } =
        stateFromStoresObject);
      const effect = noop.useEffect(() => {
        if (mode === ActivityPanelModes.PANEL) {
          const channel = ChannelStore.getChannel(connectedActivityInTextChannelId);
          if (undefined !== channel) {
            ({ guild_id: obj2.guildId, id: obj2.channelId } = channel);
            const channel1 = SelectedChannelActionCreatorsDefault.selectChannel({ guildId: null, channelId: null });
            const obj4 = { guildId: null, channelId: null };
            transitionToChannel.transitionToChannel(channel.id);
          }
        }
      }, items1);
      let obj = mode(504);
      return (
        <closure_24
          context={connectedActivityInTextChannelId(17702)}
          orientationLockStateForApp={orientationLockStateForApp}
          mode={mode}
          hasConnectedActivity={hasConnectedActivity}
          connectedActivityAppId={connectedActivityAppId}
          currentApp={currentApp}
          updateActivityPanelMode={EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode}
        >
          {children.children}
        </closure_24>
      );
    };
export const BaseActivityPanelController = tmp3;
