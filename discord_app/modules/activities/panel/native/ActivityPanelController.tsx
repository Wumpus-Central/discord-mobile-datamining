// === Module 17161: ActivityPanelController ===

// Module 17161 (ActivityPanelController)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ChatInputUtils from "ChatInputUtils" /* 4745 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5568 */;
import DeviceOrientation from "DeviceOrientation" /* 8008 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8705 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 8993 */;
import doesOrientationMatchLockStateDefault from "doesOrientationMatchLockState" /* 9135 */;
import applyActivityOrientationLockDefault from "applyActivityOrientationLock" /* 17162 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import AppFreezeStore_mod from "AppFreezeStore" /* 7964 */;
import SafeAreaDisabledStore_mod from "SafeAreaDisabledStore" /* 9156 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import Constants from "Constants" /* 2011 */;
import FunctionUtils from "FunctionUtils" /* 2026 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, application, dependencyMap, dismissKeyboardResult, isActivityConnected, isConnected, state, tmp13, tmp15, tmp17, tmp18, tmp20, tmp21, tmp23, tmp26;

let closure_12;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let AppFreezeStore = AppFreezeStore_mod;
let SafeAreaDisabledStore = SafeAreaDisabledStore_mod;
({ OrientationLockState: unpackModuleId, ACTIVITY_LOCKED_ASPECT_RATIO: closure_12 } = Constants);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const jsx = Fragment.jsx;
let closure_15 = { x: 0, y: 0, gestureActive: false };
let closure_16 = FunctionUtils.cachedFunction((arg0, arg1, arg2, arg3) => {
  let diff;
  let height;
  let width;
  ({ width, height } = arg0);
  if (unpackModuleId.LANDSCAPE === arg2) {
    if (arg3) {
      if (width <= height) {
        size = { width, height: width * closure_12 - arg1, isLandscape: true, isWindowLandscape: width > height };
      }
      return size;
    }
    const size1 = { width: Math.max(width, height), height: Math.min(height, width), isLandscape: true, isWindowLandscape: true };
    const _Math3 = Math;
    const _Math4 = Math;
    size = size1;
  } else if (unpackModuleId.PORTRAIT === arg2) {
    if (arg3) {
      let size3;
      if (width > height) {
        const size2 = { width: height * closure_12, height, isLandscape: false, isWindowLandscape: width > height };
        size3 = size2;
      }
      return size3;
    }
    size3 = { width: Math.min(width, height), height: Math.max(height, width) - arg1, isLandscape: false, isWindowLandscape: false };
    const _Math = Math;
    const _Math2 = Math;
  } else {
    const UNLOCKED = unpackModuleId.UNLOCKED;
    const size4 = { width, height: diff, isLandscape: width > height, isWindowLandscape: width > height };
    diff = height;
    if (width <= height) {
      diff = height - arg1;
    }
    return size4;
  }
});
const __initData = { code: "function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}" };
const __initData2 = { code: "function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous){return;}runOnJS(setWrapperGestureInProgress)(gestureActive);}" };
const __initData3 = { code: "function ActivityPanelControllerTsx3(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}" };
const __initData4 = { code: "function ActivityPanelControllerTsx4(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((wrapperOffset) => {
  let closure_3;
  let id;
  _require = wrapperOffset;
  let obj = require("react");
  const cResult = obj.c(5);
  const obj2 = require("ActivityPanelUtils");
  const isActivityPanelFullscreen = obj2.useIsActivityPanelFullscreen();
  const tmp3 = id(react.useState(false), 2);
  const first = tmp3[0];
  dependencyMap = tmp5;
  id = react.useId();
  const fn = function l() {
    return wrapperOffset.get().gestureActive;
  };
  fn.__closure = { wrapperOffset };
  fn.__workletHash = 5299695936442;
  fn.__initData = __initData;
  const fn2 = function s(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_3)(arg0);
    }
  };
  const obj4 = require("ReanimatedRexport");
  fn2.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setWrapperGestureInProgress: tmp3[1] };
  fn2.__workletHash = 526468036640;
  fn2.__initData = __initData2;
  ({ runOnJS: require("ReanimatedRexport").runOnJS, setWrapperGestureInProgress: tmp3[1] });
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  if (cResult[0] === id) {
    if (cResult[1] === isActivityPanelFullscreen) {
      let tmp8;
      let tmp9;
      if (cResult[2] === first) {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const effect = react.useEffect(tmp8, tmp9);
    }
  }
  const fn3 = function u() {
    let key;
    state = AppFreezeStore.getState();
    let tmp2 = isActivityPanelFullscreen;
    const requestFreezeLock = state.requestFreezeLock;
    if (isActivityPanelFullscreen) {
      tmp2 = first;
    }
    let obj = { lockEnabled: tmp2, key: id };
    let freezeLock = requestFreezeLock(obj);
    return () => {
      state = state.getState();
      const obj = { lockEnabled: false, key };
      const freezeLock = state.requestFreezeLock(obj);
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
}) : ((wrapperOffset) => {
  let closure_3;
  let id;
  _require = wrapperOffset;
  let obj = require("ActivityPanelUtils");
  const isActivityPanelFullscreen = obj.useIsActivityPanelFullscreen();
  let tmp2 = id(react.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp4;
  id = react.useId();
  const fn = function l() {
    return wrapperOffset.get().gestureActive;
  };
  fn.__closure = { wrapperOffset };
  fn.__workletHash = 9281400139768;
  fn.__initData = __initData3;
  const fn2 = function s(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_3)(arg0);
    }
  };
  const obj2 = require("ReanimatedRexport");
  fn2.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, setWrapperGestureInProgress: tmp2[1] };
  fn2.__workletHash = 3530736051520;
  fn2.__initData = __initData4;
  ({ runOnJS: require("ReanimatedRexport").runOnJS, setWrapperGestureInProgress: tmp2[1] });
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  const items = [isActivityPanelFullscreen, first, id];
  const effect = react.useEffect(() => {
    let key;
    state = AppFreezeStore.getState();
    let tmp2 = isActivityPanelFullscreen;
    const requestFreezeLock = state.requestFreezeLock;
    if (isActivityPanelFullscreen) {
      tmp2 = first;
    }
    let obj = { lockEnabled: tmp2, key: id };
    let freezeLock = requestFreezeLock(obj);
    return () => {
      state = state.getState();
      const obj = { lockEnabled: false, key };
      const freezeLock = state.requestFreezeLock(obj);
    };
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((isConnected) => {
  let applicationId;
  let orientationLockStateForApp;
  let obj = isConnected(orientationLockStateForApp[12]);
  const cResult = obj.c(13);
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
        let tmp3;
        if (cResult[3] === selectedMode) {
          tmp3 = cResult[4];
        }
        if (cResult[5] === orientationLockStateForApp) {
          if (cResult[6] === applicationId) {
            if (cResult[7] === isConnected) {
              if (cResult[8] === isVoicePanelFullscreen) {
                let tmp4;
                let tmp8;
                let tmp7;
                if (cResult[9] === selectedMode) {
                  tmp4 = cResult[10];
                }
                const layoutEffect = react.useLayoutEffect(tmp3, tmp4);
                const _Symbol = Symbol;
                if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                  const fn2 = function s() {
                    return () => {
                      const obj = isConnected(orientationLockStateForApp[15]);
                      return obj.restoreDefaultOrientation();
                    };
                  };
                  const items = [];
                  cResult[11] = fn2;
                  cResult[12] = items;
                  tmp8 = items;
                  tmp7 = fn2;
                } else {
                  tmp7 = cResult[11];
                  tmp8 = cResult[12];
                }
                const layoutEffect1 = react.useLayoutEffect(tmp7, tmp8);
              }
            }
          }
        }
        const items1 = [applicationId, isConnected, selectedMode, orientationLockStateForApp, isVoicePanelFullscreen];
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
      const obj = DeviceOrientation;
      const result = obj.restoreDefaultOrientation();
    }
  };
  cResult[0] = orientationLockStateForApp;
  cResult[1] = isConnected;
  cResult[2] = isVoicePanelFullscreen;
  cResult[3] = selectedMode;
  cResult[4] = fn;
  tmp3 = fn;
}) : ((isConnected) => {
  isConnected = isConnected.isConnected;
  const selectedMode = isConnected.selectedMode;
  const isVoicePanelFullscreen = isConnected.isVoicePanelFullscreen;
  let UNLOCKED;
  const applicationId = isConnected.applicationId;
  if (UNLOCKED == null) {
    UNLOCKED = constants.UNLOCKED;
  }
  const items = [applicationId, isConnected, selectedMode, UNLOCKED, isVoicePanelFullscreen];
  const layoutEffect = react.useLayoutEffect(() => {
    if (!isVoicePanelFullscreen) {
      if (selectedMode === ActivityPanelModes.PANEL) {
        if (isConnected) {
          applyActivityOrientationLockDefault(UNLOCKED);
        }
      }
      const obj = DeviceOrientation;
      const result = obj.restoreDefaultOrientation();
    }
  }, items);
  const layoutEffect1 = react.useLayoutEffect(() => () => {
    const obj = isConnected(UNLOCKED[15]);
    return obj.restoreDefaultOrientation();
  }, []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((isActivityConnected) => {
  let id;
  let obj = isActivityConnected(id[12]);
  const cResult = obj.c(6);
  isActivityConnected = isActivityConnected.isActivityConnected;
  const isActivityFocused = isActivityConnected.isActivityFocused;
  const isVoicePanelFullscreen = isActivityConnected.isVoicePanelFullscreen;
  id = react.useId();
  if (cResult[0] === isActivityConnected) {
    if (cResult[1] === isActivityFocused) {
      if (cResult[2] === isVoicePanelFullscreen) {
        let tmp3;
        let tmp4;
        if (cResult[3] === id) {
          tmp3 = cResult[4];
          tmp4 = cResult[5];
        }
        const layoutEffect = react.useLayoutEffect(tmp3, tmp4);
      }
    }
  }
  let fn = function c() {
    let key;
    if (!isVoicePanelFullscreen) {
      let fn;
      if (isActivityConnected) {
        state = SafeAreaDisabledStore.getState();
        let obj = { key: id, lockEnabled: isActivityFocused };
        let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        fn = () => {
          state = state.getState();
          const obj = { key, lockEnabled: false };
          const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
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
}) : ((isActivityConnected) => {
  isActivityConnected = isActivityConnected.isActivityConnected;
  const isActivityFocused = isActivityConnected.isActivityFocused;
  const isVoicePanelFullscreen = isActivityConnected.isVoicePanelFullscreen;
  const id = react.useId();
  const items = [id, isActivityConnected, isActivityFocused, isVoicePanelFullscreen];
  const layoutEffect = react.useLayoutEffect(() => {
    let key;
    if (!isVoicePanelFullscreen) {
      let fn;
      if (isActivityConnected) {
        state = SafeAreaDisabledStore.getState();
        let obj = { key: id, lockEnabled: isActivityFocused };
        let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        fn = () => {
          state = state.getState();
          const obj = { key, lockEnabled: false };
          const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        };
      }
      return fn;
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let closure_5;
  let closure_7;
  let connectedActivityAppId;
  let context;
  let currentApp;
  let first;
  let hasConnectedActivity;
  let mode;
  let orientationLockStateForApp;
  let ref;
  let ref2;
  let sharedValue1;
  let updateActivityPanelMode;
  const tmp2 = sharedValue1;
  let obj = mode(sharedValue1[12]);
  const cResult = obj.c(44);
  ({ children, context, orientationLockStateForApp, mode } = arg0);
  ({ hasConnectedActivity, connectedActivityAppId } = arg0);
  ({ currentApp, updateActivityPanelMode } = arg0);
  const tmp5 = connectedActivityAppId(sharedValue1[17])();
  const tmp6 = connectedActivityAppId(sharedValue1[18])();
  const obj2 = mode(sharedValue1[14]);
  const sharedValue = obj2.useSharedValue({ x: -1, y: -1 });
  const tmp8 = connectedActivityAppId(sharedValue1[19])(tmp5);
  const obj3 = mode(sharedValue1[14]);
  sharedValue1 = obj3.useSharedValue(closure_15);
  _slicedToArray = react.useRef(mode);
  const tmp10 = connectedActivityAppId(sharedValue1[20])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = connectedActivityAppId(tmp2[21])();
    cResult[0] = tmp12;
    first = tmp12;
  } else {
    first = cResult[0];
  }
  react = tmp13;
  if (cResult[1] === currentApp) {
    let tmp14;
    if (cResult[2] === orientationLockStateForApp) {
      tmp14 = cResult[3];
    }
    let closure_6 = tmp14;
    if (cResult[4] === tmp14) {
      if (cResult[5] === tmp5.top) {
        let tmp16;
        if (cResult[6] === tmp6) {
          tmp16 = cResult[7];
        }
        AppFreezeStore = tmp16;
        SafeAreaDisabledStore = obj4.useRef(connectedActivityAppId);
        const tmpResult = mode(tmp2[23]);
        const isVoicePanelFullscreen = tmpResult.useIsVoicePanelFullscreen();
        connectedActivityAppId(tmp2[24])();
        if (cResult[8] === mode) {
          let tmp22;
          if (cResult[9] === updateActivityPanelMode) {
            tmp22 = cResult[10];
          }
          const tmpResult3 = mode(tmp2[25]);
          tmpResult3.useNavigatorBackPressHandler(tmp22);
          if (cResult[11] === connectedActivityAppId) {
            if (cResult[12] === mode) {
              if (cResult[13] === tmp14) {
                if (cResult[14] === updateActivityPanelMode) {
                  let tmp24;
                  let tmp25;
                  if (cResult[15] === tmp16.isWindowLandscape) {
                    tmp24 = cResult[16];
                    tmp25 = cResult[17];
                  }
                  const effect = obj4.useEffect(tmp24, tmp25);
                  if (cResult[18] === mode) {
                    let tmp27;
                    let tmp28;
                    if (cResult[19] === sharedValue1) {
                      tmp27 = cResult[20];
                      tmp28 = cResult[21];
                    }
                    const effect1 = obj4.useEffect(tmp27, tmp28);
                    if (cResult[22] === connectedActivityAppId) {
                      if (cResult[23] === hasConnectedActivity) {
                        if (cResult[24] === isVoicePanelFullscreen) {
                          if (cResult[25] === mode) {
                            let tmp31;
                            if (cResult[26] === orientationLockStateForApp) {
                              tmp31 = cResult[27];
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
                                      if (!tmp19) {
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
                            if (cResult[28] === hasConnectedActivity) {
                              if (cResult[29] === isVoicePanelFullscreen) {
                                let tmp36;
                                if (cResult[30] === tmp35) {
                                  tmp36 = cResult[31];
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
                                          if (!tmp19) {
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
                                if (cResult[32] === mode) {
                                  if (cResult[33] === tmp8) {
                                    if (cResult[34] === sharedValue) {
                                      if (cResult[35] === updateActivityPanelMode) {
                                        if (cResult[36] === tmp10) {
                                          if (cResult[37] === tmp16) {
                                            let tmp39;
                                            if (cResult[38] === sharedValue1) {
                                              tmp39 = cResult[39];
                                            }
                                            if (cResult[40] === children) {
                                              if (cResult[41] === context.Provider) {
                                                let tmp40;
                                                if (cResult[42] === tmp39) {
                                                  tmp40 = cResult[43];
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
                                                    if (!closure_1(closure_3[26])(closure_7.isWindowLandscape, closure_6)) {
                                                      tmp19 = closure_5;
                                                      if (!tmp19) {
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
                                const obj5 = { mode: null, setMode: updateActivityPanelMode, wrapperDimensions: tmp16, pipState: sharedValue, pipAvoidanceSpecs: tmp8, wrapperOffset: sharedValue1, useActivityWebViewLock: tmp10 };
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
                            const obj6 = { isActivityConnected: null, isActivityFocused: tmp35, isVoicePanelFullscreen };
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
                              if (!tmp19) {
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
                            if (!tmp19) {
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
                    if (!tmp19) {
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
          const items = [connectedActivityAppId, , , , , ];
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
          items[4] = !first;
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
      }
    }
    const tmp19 = closure_16(tmp6, tmp5.top, tmp14, !first);
    cResult[4] = tmp14;
    cResult[5] = tmp5.top;
    cResult[6] = tmp6;
    cResult[7] = tmp19;
    tmp16 = tmp19;
  }
  let defaultOrientationLockState = orientationLockStateForApp;
  if (orientationLockStateForApp == null) {
    const tmpResult4 = mode(tmp2[22]);
    defaultOrientationLockState = tmpResult4.getDefaultOrientationLockState(currentApp);
  }
  cResult[1] = currentApp;
  cResult[2] = orientationLockStateForApp;
  cResult[3] = defaultOrientationLockState;
  tmp14 = defaultOrientationLockState;
}) : ((updateActivityPanelMode) => {
  let children;
  let connectedActivityAppId;
  let context;
  let currentApp;
  let hasConnectedActivity;
  let mode;
  let orientationLockStateForApp;
  ({ orientationLockStateForApp, mode } = updateActivityPanelMode);
  ({ hasConnectedActivity, connectedActivityAppId } = updateActivityPanelMode);
  updateActivityPanelMode = updateActivityPanelMode.updateActivityPanelMode;
  let sharedValue;
  let wrapperDimensions;
  let ref2;
  const tmp2 = sharedValue;
  ({ children, context, currentApp } = updateActivityPanelMode);
  let tmp3 = connectedActivityAppId(sharedValue[17])();
  let tmp4 = connectedActivityAppId(sharedValue[18])();
  let obj = mode(sharedValue[14]);
  sharedValue = obj.useSharedValue({ x: -1, y: -1 });
  const tmp7 = connectedActivityAppId(sharedValue[19])(tmp3);
  const pipAvoidanceSpecs = tmp7;
  const obj2 = mode(sharedValue[14]);
  const sharedValue1 = obj2.useSharedValue(closure_15);
  const ref = sharedValue1.useRef(mode);
  const tmp9 = connectedActivityAppId(sharedValue[20])();
  const useActivityWebViewLock = tmp9;
  const tmp10 = !connectedActivityAppId(sharedValue[21])();
  let closure_8 = tmp10;
  let defaultOrientationLockState = orientationLockStateForApp;
  if (orientationLockStateForApp == null) {
    const tmp5Result = mode(tmp2[22]);
    defaultOrientationLockState = tmp5Result.getDefaultOrientationLockState(currentApp);
  }
  const tmp12 = closure_16(tmp4, tmp3.top, defaultOrientationLockState, tmp10);
  wrapperDimensions = tmp12;
  ref2 = obj3.useRef(connectedActivityAppId);
  const tmp5Result3 = mode(tmp2[23]);
  const isVoicePanelFullscreen = tmp5Result3.useIsVoicePanelFullscreen();
  connectedActivityAppId(tmp2[24])();
  const tmp5Result4 = mode(tmp2[25]);
  tmp5Result4.useNavigatorBackPressHandler(() => {
    let flag = mode === ActivityPanelModes.PANEL;
    if (flag) {
      updateActivityPanelMode(tmp.PIP);
      flag = true;
    }
    return flag;
  });
  const items = [connectedActivityAppId, defaultOrientationLockState, mode, tmp12.isWindowLandscape, tmp10, updateActivityPanelMode];
  const effect = obj3.useEffect(() => {
    if (null != connectedActivityAppId) {
      if (null == ref2.current) {
        if (!doesOrientationMatchLockStateDefault(wrapperDimensions.isWindowLandscape, defaultOrientationLockState)) {
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
    const tmp4 = mode === ActivityPanelModes.LAUNCHING_WITH_ORIENTATION_CHANGE && doesOrientationMatchLockStateDefault(wrapperDimensions.isWindowLandscape, defaultOrientationLockState);
    if (tmp4) {
      updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items);
  const items1 = [mode, sharedValue1];
  const effect1 = obj3.useEffect(() => {
    const tmp3 = mode === ActivityPanelModes.PANEL && ref.current !== tmp2.PANEL;
    if (tmp3) {
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
      const result = sharedValue1.set(closure_15);
    }
    ref.current = mode;
  }, items1);
  closure_22({ isConnected: hasConnectedActivity, selectedMode: mode, isVoicePanelFullscreen, applicationId: connectedActivityAppId, orientationLockStateForApp });
  const obj4 = { isActivityConnected: hasConnectedActivity, isActivityFocused: hasConnectedActivity, isVoicePanelFullscreen };
  if (hasConnectedActivity) {
    hasConnectedActivity = mode === ActivityPanelModes.PANEL;
  }
  closure_23(obj4);
  closure_21(sharedValue1);
  const items2 = [mode, tmp7, sharedValue, updateActivityPanelMode, tmp9, tmp12, sharedValue1];
  return <context.Provider value={sharedValue1.useMemo(() => ({ mode, setMode: updateActivityPanelMode, wrapperDimensions, pipState: sharedValue, pipAvoidanceSpecs, wrapperOffset: sharedValue1, useActivityWebViewLock }), items2)}>{children}</context.Provider>;
});
let closure_24 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let connectedActivityAppId;
  let currentApp;
  let hasConnectedActivity;
  let mode;
  let orientationLockStateForApp;
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = mode(576);
  const cResult = obj.c(14);
  children = children.children;
  const tmp = mode;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore, ApplicationStore];
    const fn = function s() {
      let orientationLockStateForApp;
      let tmp9;
      const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
      let applicationId;
      if (selfEmbeddedActivityForLocation != null) {
        applicationId = selfEmbeddedActivityForLocation.applicationId;
      }
      application = undefined;
      if (null != applicationId) {
        application = application.getApplication(applicationId);
      }
      const obj2 = mode(dependencyMap[28]);
      const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      const obj3 = { mode: activityPanelMode, connectedActivityInTextChannelId: tmp9, hasConnectedActivity: null != selfEmbeddedActivityForLocation, connectedActivityAppId: applicationId, currentApp: application, orientationLockStateForApp };
      tmp9 = undefined;
      if (null != embeddedActivityLocationChannelId) {
        if (!connectedActivityInTextChannelId(dependencyMap[29])(embeddedActivityLocationChannelId)) {
          tmp9 = embeddedActivityLocationChannelId;
        }
      }
      orientationLockStateForApp = undefined;
      if (null != applicationId) {
        orientationLockStateForApp = EmbeddedActivitiesStore.getOrientationLockStateForApp(applicationId);
      }
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
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5, tmp6);
  mode = stateFromStoresObject.mode;
  const connectedActivityInTextChannelId = stateFromStoresObject.connectedActivityInTextChannelId;
  ({ hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  if (cResult[3] === connectedActivityInTextChannelId) {
    let tmp10;
    let tmp11;
    if (cResult[4] === mode) {
      tmp10 = cResult[5];
      tmp11 = cResult[6];
    }
    const effect = react.useEffect(tmp10, tmp11);
    if (cResult[7] === children) {
      if (cResult[8] === connectedActivityAppId) {
        if (cResult[9] === currentApp) {
          if (cResult[10] === hasConnectedActivity) {
            if (cResult[11] === mode) {
              let tmp14;
              if (cResult[12] === orientationLockStateForApp) {
                tmp14 = cResult[13];
              }
              return tmp14;
            }
          }
        }
      }
    }
    const tmp19 = <closure_24 context={connectedActivityInTextChannelId(17168)} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={hasConnectedActivity} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode}>{children}</closure_24>;
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
        const obj4 = { guildId: null, channelId: null };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel);
        const obj = SelectedChannelActionCreatorsDefault;
        const channel1 = obj.selectChannel(obj4);
        const obj3 = transitionToChannel;
        obj3.transitionToChannel(channel.id);
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
}) : ((children) => {
  let connectedActivityAppId;
  let currentApp;
  let hasConnectedActivity;
  let orientationLockStateForApp;
  let mode;
  children = children.children;
  let obj = mode(504);
  const items = [EmbeddedActivitiesStore, ApplicationStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let orientationLockStateForApp;
    let tmp9;
    const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
    let applicationId;
    if (selfEmbeddedActivityForLocation != null) {
      applicationId = selfEmbeddedActivityForLocation.applicationId;
    }
    application = undefined;
    if (null != applicationId) {
      application = application.getApplication(applicationId);
    }
    const obj2 = mode(dependencyMap[28]);
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    const obj3 = { mode: activityPanelMode, connectedActivityInTextChannelId: tmp9, hasConnectedActivity: null != selfEmbeddedActivityForLocation, connectedActivityAppId: applicationId, currentApp: application, orientationLockStateForApp };
    tmp9 = undefined;
    if (null != embeddedActivityLocationChannelId) {
      if (!connectedActivityInTextChannelId(dependencyMap[29])(embeddedActivityLocationChannelId)) {
        tmp9 = embeddedActivityLocationChannelId;
      }
    }
    orientationLockStateForApp = undefined;
    if (null != applicationId) {
      orientationLockStateForApp = EmbeddedActivitiesStore.getOrientationLockStateForApp(applicationId);
    }
    return obj3;
  }, []);
  mode = stateFromStoresObject.mode;
  const connectedActivityInTextChannelId = stateFromStoresObject.connectedActivityInTextChannelId;
  const items1 = [mode, connectedActivityInTextChannelId];
  ({ hasConnectedActivity, connectedActivityAppId, currentApp, orientationLockStateForApp } = stateFromStoresObject);
  const effect = react.useEffect(() => {
    if (mode === ActivityPanelModes.PANEL) {
      const channel = ChannelStore.getChannel(connectedActivityInTextChannelId);
      if (undefined !== channel) {
        const obj4 = { guildId: null, channelId: null };
        ({ guild_id: obj2.guildId, id: obj2.channelId } = channel);
        const obj = SelectedChannelActionCreatorsDefault;
        const channel1 = obj.selectChannel(obj4);
        const obj3 = transitionToChannel;
        obj3.transitionToChannel(channel.id);
      }
    }
  }, items1);
  return <closure_24 context={connectedActivityInTextChannelId(17168)} orientationLockStateForApp={orientationLockStateForApp} mode={mode} hasConnectedActivity={hasConnectedActivity} connectedActivityAppId={connectedActivityAppId} currentApp={currentApp} updateActivityPanelMode={EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode}>{children}</closure_24>;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelController.tsx");

export default tmp4;
export const BaseActivityPanelController = tmp3;