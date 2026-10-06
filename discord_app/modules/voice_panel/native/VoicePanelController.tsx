// === Module 17392: VoicePanelController ===

// Module 17392 (VoicePanelController)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import DurationsDefault from "Durations" /* 1102 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import intl3 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useWindowDimensions from "useWindowDimensions" /* 1484 */;
import Constants2 from "Constants" /* 2011 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4504 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4580 */;
import native from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import AssetRegistryDefault from "AssetRegistry" /* 4825 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 4828 */;
import VideoSlashIcon from "VideoSlashIcon" /* 4829 */;
import CallConstants from "CallConstants" /* 4917 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5097 */;
import DeviceOrientation from "DeviceOrientation" /* 8018 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 8079 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 9001 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9026 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9049 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 9110 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 9787 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11917 */;
import VoicePanelCardLayoutManagerDefault from "VoicePanelCardLayoutManager" /* 11918 */;
import applyActivityOrientationLockDefault from "applyActivityOrientationLock" /* 17191 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 17236 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 17251 */;
import useIsVoicePanelParticipantFocusable from "useIsVoicePanelParticipantFocusable" /* 17328 */;
import useTransitionToConnectedActivityInVoiceDefault from "useTransitionToConnectedActivityInVoice" /* 17393 */;
import trackActivityThermalStateNoticeShown from "trackActivityThermalStateNoticeShown" /* 17394 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import EmbeddedActivitiesStore_mod from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import AppFreezeStore from "AppFreezeStore" /* 7975 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 9191 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9101 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import VoicePanelStore from "VoicePanelStore" /* 5104 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11916 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11914 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, attachResult, clearTimeoutResult, currentEmbeddedActivity, dependencyMap, importDefault, obj1, set;

let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
function useCoreSharedState(channelId, isConnected, items, stateFromStores) {
  let obj12;
  let obj24;
  _require = channelId;
  dependencyMap = stateFromStores;
  const channel = ChannelStore.getChannel(channelId);
  let flag;
  if (channel != null) {
    flag = channel.isDM();
  }
  if (flag == null) {
    flag = false;
  }
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let obj2 = require("ReanimatedRexport");
  const sharedValue = obj2.useSharedValue(isConnected);
  const obj3 = require("ReanimatedRexport");
  const sharedValue1 = obj3.useSharedValue(VoicePanelModes.PANEL);
  const obj4 = require("useWindowDimensions");
  size = obj4.getWindowDimensions();
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height };
  const obj5 = require("ReanimatedRexport");
  const sharedValue2 = obj5.useSharedValue(size1);
  const obj7 = require("useSafeAreaInsets");
  const rect = obj7.getSafeAreaInsets();
  let obj = {};
  const useSharedValue = require("ReanimatedRexport").useSharedValue;
  require("ReanimatedRexport");
  const merged = Object.assign(rect);
  const sharedValue3 = useSharedValue(obj);
  const obj6 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const obj9 = require("PanelSizeUtils");
  const maxPanelWidth = obj9.getMaxPanelWidth(obj6);
  const obj8 = { drawerHeight: size.height, drawerWidth: maxPanelWidth, drawerX: obj12.getPanelX(size.width, maxPanelWidth), drawerY: size.height, pipX: -1, pipY: -1, animated: true, mode: VoicePanelModes.PANEL };
  const useSharedValue2 = require("ReanimatedRexport").useSharedValue;
  require("ReanimatedRexport");
  obj12 = require("PanelSizeUtils");
  const sharedValue21 = useSharedValue2(obj8);
  const obj13 = require("ReanimatedRexport");
  const sharedValue4 = obj13.useSharedValue(0);
  const obj14 = require("ReanimatedRexport");
  const sharedValue5 = obj14.useSharedValue(false);
  const obj15 = require("ReanimatedRexport");
  const sharedValue6 = obj15.useSharedValue(null);
  const obj16 = require("ReanimatedRexport");
  const sharedValue7 = obj16.useSharedValue(0);
  const first = sharedValue1(size.useState(() => {
    const tmp = new items(stateFromStores[42])();
    return tmp;
  }), 1)[0];
  const obj17 = require("ReanimatedRexport");
  const sharedValue8 = obj17.useSharedValue(false);
  class S {
    constructor(arg0) {
      const result = sharedValue8.set(arg0);
    }
  }
  S.__closure = { isFocusedVideoZoomed: sharedValue8 };
  S.__workletHash = 16949064095058;
  S.__initData = __initData9;
  items = [sharedValue8];
  const callback = size.useCallback(S, items);
  const obj18 = require("ReanimatedRexport");
  const sharedValue9 = obj18.useSharedValue(sharedValue8.useReducedMotion);
  const items1 = [sharedValue9];
  const effect = size.useEffect(() => {
    function onChange() {
      const result = sharedValue9.set(sharedValue8.useReducedMotion);
    }
    let result = sharedValue8.addReactChangeListener(onChange);
    return () => {
      const result = AccessibilityStore.removeReactChangeListener(onChange);
    };
  }, items1);
  const obj19 = require("ReanimatedRexport");
  const sharedValue10 = obj19.useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const obj20 = require("ReanimatedRexport");
  class J {
    constructor() {
      const value = sharedValue1.get();
      if (constants.PANEL === value) {
        return MorphablePanelModes.PANEL;
      } else if (tmp2.PIP === value) {
        return MorphablePanelModes.PIP;
      } else {
        return MorphablePanelModes.UNDEFINED;
      }
    }
  }
  const obj10 = { mode: sharedValue1, VoicePanelModes, MorphablePanelModes };
  J.__closure = obj10;
  J.__workletHash = 8226755065394;
  J.__initData = __initData10;
  const derivedValue = obj20.useDerivedValue(J);
  const first1 = sharedValue1(size.useState(() => {
    const obj = new VoicePanelCardLayoutManagerDefault(channelId);
    const obj2 = { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: stateFromStores ? closure_20 : closure_19 };
    obj.updateState(items, obj2);
    return obj;
  }), 1)[0];
  const items2 = [first1];
  const layoutEffect = size.useLayoutEffect(() => () => first1.cleanUp(), items2);
  const obj11 = { channelType: type, connected: sharedValue, contentDimensions: obj24.useSharedValue(first1.getContentDimensions()), dragScrolling: sharedValue5, focused: sharedValue6, isCall: flag, layoutManager: first1, mode: sharedValue1, preJoinContentSize: sharedValue7, safeArea: sharedValue3, scrollPosition: sharedValue4, windowDimensions: sharedValue2, wrapperDimensions: sharedValue21, isFocusedVideoZoomed: sharedValue8, setIsFocusedVideoZoomed: callback, useReducedMotion: sharedValue9, wrapperOffset: sharedValue10, morphablePanelMode: derivedValue, pipHandoff: first };
  obj24 = require("ReanimatedRexport");
  return obj11;
}
function useControlsState(mode, isConnected, connected, stateFromStores) {
  let closure_4;
  let constants3;
  let tmp4;
  let tmp5;
  _require = mode;
  importDefault = isConnected;
  dependencyMap = connected;
  let closure_3 = stateFromStores;
  const tmp = _require;
  const tmp2 = dependencyMap;
  const tmp3 = require("ReanimatedRexport");
  let obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: null, pushToTalk: null };
  if (stateFromStores) {
    let tmp6;
    if (isConnected) {
      tmp6 = CONTROLS_HEIGHT_PTT;
    }
    obj.height = tmp6;
    obj.pushToTalk = stateFromStores;
    const tmp4Result = tmp4(obj);
    react = tmp4Result;
    const ref = react.useRef(-1);
    const _clearHideControlsQueue = react.useCallback(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = -1;
      }
    }, []);
    const items = [tmp4Result, _clearHideControlsQueue, mode];
    const callback1 = react.useCallback(() => {
      callback();
      if (-1 === ref.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
          _clearHideControlsQueue();
          if (mode.get() === constants.PANEL) {
            const locked = closure_1_4.get().mode !== constants2.FLOATING_DEFAULT || closure_1_4.get().locked;
            if (!locked) {
              const obj2 = { mode: constants2.HIDDEN };
              isConnected(connected[44])(closure_1_4, obj2);
            }
          }
        }, closure_21);
      }
    }, items);
    const items1 = [tmp4Result, callback1];
    const memo = react.useMemo(() => {
      let obj = isConnected(connected[45]);
      let closure_0 = obj.debounce(function _setControlsMode(mode, returnMode) {
        const obj = { mode, returnMode };
        isConnected(connected[44])(closure_1_4, obj);
        callback1();
      }, 200);
      let obj2 = {
        cancelControlsDebounce() {
          return closure_0.cancel();
        },
        setControlsMode(returnMode) {
          let debounce;
          ({ mode, debounce } = returnMode);
          if (debounce === undefined) {
            debounce = false;
          }
          let FLOATING_DEFAULT = returnMode.returnMode;
          if (FLOATING_DEFAULT === undefined) {
            FLOATING_DEFAULT = constants.FLOATING_DEFAULT;
          }
          if (debounce) {
            closure_0(mode, FLOATING_DEFAULT);
          } else {
            closure_0.cancel();
            const obj2 = { mode, returnMode: FLOATING_DEFAULT };
            updateSharedValueIfChangedDefault(closure_4, obj2);
            callback1();
          }
        }
      };
      return obj2;
    }, items1);
    const cancelControlsDebounce = memo.cancelControlsDebounce;
    const setControlsMode = memo.setControlsMode;
    const _Set = Set;
    const self = this;
    const self2 = this;
    const useRef = react.useRef;
    set = new Set();
    let closure_10 = useRef(set);
    const items2 = [tmp4Result, callback1, _clearHideControlsQueue];
    const items3 = [setControlsMode];
    const callback2 = react.useCallback((arg0) => {
      let v4Result = arg0;
      if (arg0 == null) {
        let obj = mode(connected[46]);
        v4Result = obj.v4();
      }
      mode = v4Result;
      return {
        lock(mode) {
          const current = ref.current;
          if (!current.has(v4Result)) {
            callback();
            const current2 = ref.current;
            current2.add(v4Result);
            const obj = { locked: ref.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            updateSharedValueIfChangedDefault(closure_4, obj);
          }
        },
        unlock(mode) {
          const current = ref.current;
          if (current.has(v4Result)) {
            const current2 = ref.current;
            current2.delete(v4Result);
            const obj = { locked: ref.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            updateSharedValueIfChangedDefault(closure_4, obj);
            callback1();
          }
        }
      };
    }, items2);
    const items4 = [setControlsMode, tmp4Result];
    const callback3 = react.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { debounce: false };
      }
      const obj2 = { mode: constants2.HIDDEN, debounce: obj.debounce };
      setControlsMode(obj2);
    }, items3);
    const fn = function l() {
      const value = closure_4.get();
      if (!value.locked) {
        if (value.mode === constants2.FLOATING_DEFAULT) {
          const obj = ReanimatedRexport;
          obj.runOnJS(callback1)();
        }
      }
    };
    let obj2 = { controlsSpecs: tmp4Result, VoicePanelControlsModes: tmp5, runOnJS: tmp(4618).runOnJS, _queueHideControls: callback1 };
    const callback4 = react.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let debounce = obj.debounce;
      if (debounce === undefined) {
        debounce = false;
      }
      mode = closure_4.get().returnMode;
      if (mode == null) {
        mode = constants2.FLOATING_DEFAULT;
      }
      return setControlsMode({ mode, debounce });
    }, items4);
    const useCallback = react.useCallback;
    fn.__closure = obj2;
    fn.__workletHash = 9447192071204;
    fn.__initData = __initData11;
    const items5 = [tmp4Result, callback1];
    const callback5 = useCallback(fn, items5);
    const tmpResult = tmp(4618);
    class S {
      constructor() {
        return mode.get();
      }
    }
    const obj3 = { mode };
    S.__closure = obj3;
    S.__workletHash = 7231693349110;
    S.__initData = __initData12;
    const fn2 = function u(arg0) {
      if (arg0 === constants.PANEL) {
        const obj2 = ReanimatedRexport;
        obj2.runOnJS(callback1)();
      } else {
        const obj = ReanimatedRexport;
        obj.runOnJS(callback)();
      }
    };
    const useAnimatedReaction = tmpResult.useAnimatedReaction;
    fn2.__closure = { VoicePanelModes, runOnJS: tmp(4618).runOnJS, _queueHideControls: callback1, _clearHideControlsQueue };
    fn2.__workletHash = 9080436423990;
    fn2.__initData = __initData13;
    const obj4 = { VoicePanelModes, runOnJS: tmp(4618).runOnJS, _queueHideControls: callback1, _clearHideControlsQueue };
    const animatedReaction = useAnimatedReaction(S, fn2);
    const items6 = [stateFromStores, tmp4Result, isConnected];
    const layoutEffect = react.useLayoutEffect(() => {
      if (stateFromStores) {
        let tmp5;
        if (isConnected) {
          tmp5 = closure_20;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = closure_19;
    }, items6);
    const fn3 = function f() {
      return connected.get();
    };
    const obj5 = { connected };
    fn3.__closure = obj5;
    fn3.__workletHash = 16717410106640;
    fn3.__initData = __initData14;
    const fn4 = function h(arg0) {
      if (stateFromStores) {
        let tmp5;
        const tmp4 = arg0;
        if (tmp4) {
          tmp5 = closure_20;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = closure_19;
    };
    const obj6 = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, controlsSpecs: tmp4Result, pushToTalk: stateFromStores, CONTROLS_HEIGHT_PTT, CONTROLS_HEIGHT };
    const useAnimatedReaction2 = tmp(4618).useAnimatedReaction;
    tmp(4618);
    fn4.__closure = obj6;
    fn4.__workletHash = 14172278286591;
    fn4.__initData = __initData15;
    const animatedReaction2 = useAnimatedReaction2(fn3, fn4);
    const items7 = [cancelControlsDebounce, _clearHideControlsQueue];
    const layoutEffect1 = react.useLayoutEffect(() => () => {
      cancelControlsDebounce();
      _clearHideControlsQueue();
    }, items7);
    const items8 = [setControlsMode];
    const effect = react.useEffect(() => {
      function closeTiV() {
        const obj = { mode: constants2.FLOATING_DEFAULT };
        setControlsMode(obj);
      }
      let ComponentDispatch = mode(connected[47]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants3.VOICE_PANEL_TIV_CLOSE, closeTiV);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants.VOICE_PANEL_TIV_CLOSE, closeTiV);
      };
    }, items8);
    return { generateStateLocker: callback2, setControlsMode, showControls: callback4, hideControls: callback3, refreshIdleTimeout: callback5, controlsSpecs: tmp4Result };
  }
  tmp6 = CONTROLS_HEIGHT;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let AppState = react_native.AppState;
let EmbeddedActivitiesStore = EmbeddedActivitiesStore_mod;
({ VoicePanelModes: closure_17, getAnalyticsNameForVoicePanelMode: closure_18 } = VoicePanelConstants);
({ CONTROLS_HEIGHT: closure_19, CONTROLS_HEIGHT_PTT: closure_20, CONTROLS_HIDE_TIMEOUT: closure_21, VoicePanelControlsModes: closure_22 } = VoicePanelControlsConstants);
({ AnalyticEvents: closure_23, ComponentActions: closure_24, InputModes: closure_25 } = Constants);
const OrientationLockState = Constants2.OrientationLockState;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const isActivityParticipant = CallConstants.isActivityParticipant;
const MorphablePanelModes = MorphablePanelConstants.MorphablePanelModes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((setControlsMode) => {
  let tmp3;
  let tmp4;
  let obj = setControlsMode(576);
  const cResult = obj.c(4);
  setControlsMode = setControlsMode.setControlsMode;
  if (cResult[0] !== setControlsMode) {
    const fn = function o() {
      const obj = { mode: constants.FLOATING_DEFAULT };
      setControlsMode(obj);
    };
    cResult[0] = setControlsMode;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== tmp3) {
    const obj2 = { onTransition: tmp3 };
    cResult[2] = tmp3;
    cResult[3] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[3];
  }
  useTransitionToConnectedActivityInVoiceDefault(tmp4);
}) : ((setControlsMode) => {
  setControlsMode = setControlsMode.setControlsMode;
  const items = [setControlsMode];
  const callback = react.useCallback(() => {
    const obj = { mode: constants.FLOATING_DEFAULT };
    setControlsMode(obj);
  }, items);
  useTransitionToConnectedActivityInVoiceDefault({ onTransition: callback });
});
const __initData = { code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
const __initData2 = { code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[focusedParticipantId_0,voicePanelMode_0,connectedValue_0]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId_0,voicePanelMode:voicePanelMode_0,connectedValue:connectedValue_0});}" };
const __initData3 = { code: "function VoicePanelControllerTsx3(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
const __initData4 = { code: "function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId_0,voicePanelMode_0,connectedValue_0]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId_0,voicePanelMode:voicePanelMode_0,connectedValue:connectedValue_0});}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  let focused;
  let require;
  ({ channelId: require, focused } = mode);
  mode = mode.mode;
  const connected = mode.connected;
  function handleAnimatedReaction(arg0) {
    let connectedValue;
    let focusedParticipantId;
    ({ focusedParticipantId, connectedValue } = arg0);
    if (connectedValue) {
      connectedValue = tmp === constants.PANEL;
    }
    const tmp3 = null != focusedParticipantId && isActivityParticipant(ChannelRTCStore.getParticipant(_require, focusedParticipantId)) && connectedValue;
    const state = VoicePanelStore.getState();
    state.setIsActivityFocused(tmp3);
  }
  let obj = require("ReanimatedRexport");
  const fn = function s() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    const items = [id, mode.get(), connected.get()];
    return items;
  };
  fn.__closure = { focused, mode, connected };
  fn.__workletHash = 16641161683997;
  fn.__initData = __initData;
  const fn2 = function n(arg0, arg1) {
    let tmp7;
    let tmp8;
    let tmp9;
    const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual2.cheapWorkletArrayShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp = arg1;
    if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
      [tmp7, tmp8, tmp9] = arg0;
      _slicedToArray(arg0, 3);
      const obj = { focusedParticipantId: tmp7, voicePanelMode: tmp8, connectedValue: tmp9 };
      const tmp2Result = ReanimatedRexport;
      tmp2Result.runOnJS(handleAnimatedReaction)(obj);
    }
  };
  fn2.__closure = { cheapWorkletArrayShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletArrayShallowEqual, runOnJS: require("ReanimatedRexport").runOnJS, handleAnimatedReaction };
  fn2.__workletHash = 5068513886995;
  fn2.__initData = __initData2;
  ({ cheapWorkletArrayShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletArrayShallowEqual, runOnJS: require("ReanimatedRexport").runOnJS, handleAnimatedReaction });
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const focused = channelId.focused;
  const mode = channelId.mode;
  const connected = channelId.connected;
  let handleAnimatedReaction;
  let items = [channelId];
  handleAnimatedReaction = handleAnimatedReaction.useCallback((arg0) => {
    let connectedValue;
    let focusedParticipantId;
    ({ focusedParticipantId, connectedValue } = arg0);
    if (connectedValue) {
      connectedValue = tmp === constants.PANEL;
    }
    const tmp3 = null != focusedParticipantId && isActivityParticipant(ChannelRTCStore.getParticipant(channelId, focusedParticipantId)) && connectedValue;
    const state = VoicePanelStore.getState();
    state.setIsActivityFocused(tmp3);
  }, items);
  let obj = channelId(mode[25]);
  const fn = function h() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    const items = [id, mode.get(), connected.get()];
    return items;
  };
  fn.__closure = { focused, mode, connected };
  fn.__workletHash = 6066981921055;
  fn.__initData = __initData3;
  class S {
    constructor(arg0, arg1) {
      let tmp7;
      let tmp8;
      let tmp9;
      const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual2.cheapWorkletArrayShallowEqual;
      cheapWorkletShallowEqual2;
      const tmp = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp7, tmp8, tmp9] = arg0;
        _slicedToArray(arg0, 3);
        const obj = { focusedParticipantId: tmp7, voicePanelMode: tmp8, connectedValue: tmp9 };
        const tmp2Result = ReanimatedRexport;
        tmp2Result.runOnJS(callback)(obj);
      }
    }
  }
  S.__closure = { cheapWorkletArrayShallowEqual: channelId(mode[26]).cheapWorkletArrayShallowEqual, runOnJS: channelId(mode[25]).runOnJS, handleAnimatedReaction };
  S.__workletHash = 8543775529459;
  S.__initData = __initData4;
  ({ cheapWorkletArrayShallowEqual: channelId(mode[26]).cheapWorkletArrayShallowEqual, runOnJS: channelId(mode[25]).runOnJS, handleAnimatedReaction });
  const animatedReaction = obj.useAnimatedReaction(fn, S);
});
const MINUTE = DurationsDefault.Millis.MINUTE;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? ((showControls) => {
  let items4;
  let rTCConnectionId;
  let ref;
  let ref2;
  let stateFromStores1;
  let tmp12;
  let tmp13;
  let tmp20;
  let tmp21;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let tmp = showControls;
  let obj = showControls(576);
  const cResult = obj.c(16);
  showControls = showControls.showControls;
  importDefault = stateFromStores1.useRef(false);
  dependencyMap = stateFromStores1.useRef(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function s() {
      return MediaEngineStore.getSpeakingWhileMuted();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MediaEngineStore];
    const fn2 = function f() {
      return MediaEngineStore.isMute();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = tmp(504);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [RTCConnectionStore];
    const fn3 = function w() {
      return rTCConnectionId.getRTCConnectionId();
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    tmp13 = fn3;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp12, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        ref2.current = performance.now();
        ref.current = false;
      }
    }
    cResult[6] = I;
  } else {
    class I {
      constructor() {
        ref2.current = performance.now();
        ref.current = false;
      }
    }
  }
  if (cResult[7] !== stateFromStores2) {
    class I {
      constructor() {
        ref2.current = performance.now();
        ref.current = false;
      }
    }
    tmp18[0] = stateFromStores2;
    cResult[7] = stateFromStores2;
    cResult[8] = tmp18;
  } else {
    class I {
      constructor() {
        ref2.current = performance.now();
        ref.current = false;
      }
    }
  }
  const effect = obj2.useEffect(I, tmp18);
  if (cResult[9] !== stateFromStores1) {
    class T {
      constructor() {
        if (stateFromStores1) {
          const _performance = performance;
          ref2.current = performance.now();
        } else {
          ref.current = false;
        }
      }
    }
    const items3 = [stateFromStores1];
    cResult[9] = stateFromStores1;
    cResult[10] = items3;
    cResult[11] = T;
    tmp21 = T;
    tmp20 = items3;
  } else {
    class T {
      constructor() {
        if (stateFromStores1) {
          const _performance = performance;
          ref2.current = performance.now();
        } else {
          ref.current = false;
        }
      }
    }
    tmp21 = cResult[11];
  }
  const effect1 = obj2.useEffect(tmp21, tmp20);
  if (cResult[12] === showControls) {
    class T {
      constructor() {
        if (stateFromStores1) {
          const _performance = performance;
          ref2.current = performance.now();
        } else {
          ref.current = false;
        }
      }
    }
    const effect2 = obj2.useEffect(M, items4);
  }
  class M {
    constructor() {
      let intl;
      const tmp = stateFromStores && !ref.current;
      if (tmp) {
        const _performance = performance;
        if (performance.now() - ref2.current >= MINUTE) {
          ref.current = true;
          showControls();
          const obj = { key: "SPEAKING_WHILE_MUTED", icon: AssetRegistryDefault, content: intl.string(intl3.t["29gnR4"]), toastDurationMs: 3 * DurationsDefault.Millis.SECOND };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl3.intl;
          open(obj);
        }
      }
    }
  }
  items4 = [stateFromStores, showControls];
  cResult[12] = showControls;
  cResult[13] = stateFromStores;
  cResult[14] = M;
  cResult[15] = items4;
}) : ((showControls) => {
  let rTCConnectionId;
  let ref2;
  showControls = showControls.showControls;
  let stateFromStores1;
  const ref = stateFromStores1.useRef(false);
  dependencyMap = stateFromStores1.useRef(0);
  let obj = showControls(504);
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => MediaEngineStore.getSpeakingWhileMuted());
  const items1 = [MediaEngineStore];
  const obj2 = showControls(504);
  stateFromStores1 = obj2.useStateFromStores(items1, () => MediaEngineStore.isMute());
  const items2 = [RTCConnectionStore];
  const items3 = [];
  const obj3 = showControls(504);
  items3[0] = obj3.useStateFromStores(items2, () => rTCConnectionId.getRTCConnectionId());
  const effect = stateFromStores1.useEffect(() => {
    ref2.current = performance.now();
    ref.current = false;
  }, items3);
  const items4 = [stateFromStores1];
  const effect1 = stateFromStores1.useEffect(() => {
    if (stateFromStores1) {
      const _performance = performance;
      ref2.current = performance.now();
    } else {
      ref.current = false;
    }
  }, items4);
  const items5 = [stateFromStores, showControls];
  const effect2 = stateFromStores1.useEffect(() => {
    let intl;
    const tmp = stateFromStores && !ref.current;
    if (tmp) {
      const _performance = performance;
      if (performance.now() - ref2.current >= MINUTE) {
        ref.current = true;
        showControls();
        const obj = { key: "SPEAKING_WHILE_MUTED", icon: AssetRegistryDefault, content: intl.string(intl3.t["29gnR4"]), toastDurationMs: 3 * DurationsDefault.Millis.SECOND };
        const open = ToastActionCreatorsDefault.open;
        ToastActionCreatorsDefault;
        intl = intl3.intl;
        open(obj);
      }
    }
  }, items5);
});
const __initData5 = { code: "function VoicePanelControllerTsx5(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}" };
const __initData6 = { code: "function VoicePanelControllerTsx6(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[focusedId_0,pipParticipantId_0]=props;runOnJS(handleStateUpdates)({focusedId:focusedId_0,pipParticipantId:pipParticipantId_0});}" };
const __initData7 = { code: "function VoicePanelControllerTsx7(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}" };
const __initData8 = { code: "function VoicePanelControllerTsx8(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId_0,pipParticipantId_0]=props;runOnJS(handleStateUpdates)({focusedId:focusedId_0,pipParticipantId:pipParticipantId_0});}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_43 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let closure_4;
  let pipState;
  let tmp4;
  let tmp = channelId;
  let obj = channelId(pipState[23]);
  const cResult = obj.c(12);
  channelId = channelId.channelId;
  const focused = channelId.focused;
  pipState = channelId.pipState;
  const manuallyFocusedId = channelId.manuallyFocusedId;
  if (cResult[0] !== channelId) {
    const fn = function s(arg0) {
      let focusedId;
      let intl;
      let intl2;
      let pipParticipantId;
      ({ focusedId, pipParticipantId } = arg0);
      const result = ChannelCallLifecycleStore.shouldReactToSeriousThermalStateWhenActivityFocused();
      let tmp3 = null != focusedId;
      const result1 = ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState();
      if (tmp3) {
        tmp3 = isActivityParticipant(ChannelRTCStore.getParticipant(channelId, focusedId));
      }
      let participant;
      if (null != pipParticipantId) {
        participant = ChannelRTCStore.getParticipant(channelId, pipParticipantId);
      }
      let streamId;
      if (participant != null) {
        streamId = participant.streamId;
      }
      let tmp11 = null != streamId;
      if (tmp11) {
        let selfVideo;
        if (participant != null) {
          const voiceState = participant.voiceState;
          if (voiceState != null) {
            selfVideo = voiceState.selfVideo;
          }
        }
        tmp11 = true === selfVideo;
      }
      if (tmp3) {
        if (result) {
          if (!result1) {
            const isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
            const tmp15 = isVideoEnabledResult || tmp11;
            if (tmp15) {
              const obj = DesignSystemsNotificationComponentsExperiment;
              const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("VoicePanelControllerThermalState");
              const tmp20 = ToastActionCreatorsDefault;
              if (designSystemsNotificationComponents) {
                const openMana = tmp20.openMana;
                const obj2 = { text: intl2.string(intl3.t.O2IlPT), icon: VideoSlashIcon.VideoSlashIcon };
                intl2 = intl3.intl;
                openMana("EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", obj2);
              } else {
                const open = tmp20.open;
                const obj3 = { key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", icon: AssetRegistryDefault2, content: intl.string(intl3.t.O2IlPT), disableAnimations: true, toastDurationMs: 3000 };
                intl = intl3.intl;
                open(obj3);
              }
              const tmp16Result = trackActivityThermalStateNoticeShown;
              const result2 = tmp16Result.trackActivityThermalStateNoticeShown();
            }
            if (isVideoEnabledResult) {
              const obj5 = AudioActionCreatorsDefault;
              obj5.setVideoEnabled(false);
            }
            const obj6 = EmbeddedActivitiesActionCreators;
            const result3 = obj6.consumeRequestToReactToSeriousThermalState();
          }
        }
      }
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  react = tmp4;
  if (cResult[2] === channelId) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === manuallyFocusedId) {
        let tmp5;
        if (cResult[5] === pipState.id) {
          tmp5 = cResult[6];
        }
        if (cResult[7] === channelId) {
          if (cResult[8] === tmp4) {
            if (cResult[9] === manuallyFocusedId) {
              let tmp6;
              if (cResult[10] === pipState) {
                tmp6 = cResult[11];
              }
              const tmp7 = react;
              const effect = react.useEffect(tmp5, tmp6);
              const tmpResult = tmp(tmp2[25]);
              class P {
                constructor() {
                  const value = focused.get();
                  let id;
                  if (value != null) {
                    id = value.id;
                  }
                  const items = [id, pipState.id];
                  return items;
                }
              }
              let obj2 = { focused, pipState };
              P.__closure = obj2;
              P.__workletHash = 13275424525242;
              P.__initData = __initData5;
              const fn2 = function w(arg0, arg1) {
                let tmp7;
                let tmp8;
                const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual2.cheapWorkletArrayShallowEqual;
                cheapWorkletShallowEqual2;
                const tmp = arg1;
                if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
                  [tmp7, tmp8] = arg0;
                  _slicedToArray(arg0, 2);
                  const obj = { focusedId: tmp7, pipParticipantId: tmp8 };
                  const tmp2Result = ReanimatedRexport;
                  tmp2Result.runOnJS(closure_4)(obj);
                }
              };
              let obj3 = { cheapWorkletArrayShallowEqual: tmp(pipState[26]).cheapWorkletArrayShallowEqual, runOnJS: tmp(pipState[25]).runOnJS, handleStateUpdates: null };
              const useAnimatedReaction = tmpResult.useAnimatedReaction;
              class E {
                constructor() {
                  items = [, ];
                  items[0] = closure_1_11;
                  items[1] = closure_1_8;
                  batchedStoreListener = new channelId(pipState[28]).BatchedStoreListener(items, () => {
                    const obj = { focusedId: manuallyFocusedId, pipParticipantId: id.id };
                    closure_1_4(obj);
                  });
                  closure_0 = batchedStoreListener;
                  attachResult = batchedStoreListener.attach("thermal-state-reactions-" + closure_0);
                  return () => batchedStoreListener.detach();
                }
              }
              fn2.__closure = obj3;
              fn2.__workletHash = 5497185467806;
              fn2.__initData = __initData6;
              const animatedReaction = useAnimatedReaction(P, fn2);
            }
          }
        }
        let items = [manuallyFocusedId, , tmp4, channelId];
        cResult[7] = channelId;
        cResult[8] = tmp4;
        cResult[9] = manuallyFocusedId;
        cResult[10] = pipState;
        cResult[11] = items;
        tmp6 = items;
      }
    }
  }
  class E {
    constructor() {
      items = [, ];
      items[0] = closure_1_11;
      items[1] = closure_1_8;
      batchedStoreListener = new channelId(pipState[28]).BatchedStoreListener(items, () => {
        const obj = { focusedId: manuallyFocusedId, pipParticipantId: id.id };
        closure_1_4(obj);
      });
      closure_0 = batchedStoreListener;
      attachResult = batchedStoreListener.attach("thermal-state-reactions-" + closure_0);
      return () => batchedStoreListener.detach();
    }
  }
  cResult[2] = channelId;
  cResult[3] = tmp4;
  cResult[4] = manuallyFocusedId;
  cResult[5] = pipState.id;
  cResult[6] = E;
  tmp5 = E;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const focused = channelId.focused;
  const pipState = channelId.pipState;
  const manuallyFocusedId = channelId.manuallyFocusedId;
  let handleStateUpdates;
  let items = [channelId];
  handleStateUpdates = handleStateUpdates.useCallback((arg0) => {
    let focusedId;
    let intl;
    let intl2;
    let pipParticipantId;
    ({ focusedId, pipParticipantId } = arg0);
    const result = ChannelCallLifecycleStore.shouldReactToSeriousThermalStateWhenActivityFocused();
    let tmp3 = null != focusedId;
    const result1 = ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState();
    if (tmp3) {
      tmp3 = isActivityParticipant(ChannelRTCStore.getParticipant(channelId, focusedId));
    }
    let participant;
    if (null != pipParticipantId) {
      participant = ChannelRTCStore.getParticipant(channelId, pipParticipantId);
    }
    let streamId;
    if (participant != null) {
      streamId = participant.streamId;
    }
    let tmp11 = null != streamId;
    if (tmp11) {
      let selfVideo;
      if (participant != null) {
        const voiceState = participant.voiceState;
        if (voiceState != null) {
          selfVideo = voiceState.selfVideo;
        }
      }
      tmp11 = true === selfVideo;
    }
    if (tmp3) {
      if (result) {
        if (!result1) {
          const isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
          const tmp15 = isVideoEnabledResult || tmp11;
          if (tmp15) {
            const obj = DesignSystemsNotificationComponentsExperiment;
            const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("VoicePanelControllerThermalState");
            const tmp20 = ToastActionCreatorsDefault;
            if (designSystemsNotificationComponents) {
              const openMana = tmp20.openMana;
              const obj2 = { text: intl2.string(intl3.t.O2IlPT), icon: VideoSlashIcon.VideoSlashIcon };
              intl2 = intl3.intl;
              openMana("EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", obj2);
            } else {
              const open = tmp20.open;
              const obj3 = { key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", icon: AssetRegistryDefault2, content: intl.string(intl3.t.O2IlPT), disableAnimations: true, toastDurationMs: 3000 };
              intl = intl3.intl;
              open(obj3);
            }
            const tmp16Result = trackActivityThermalStateNoticeShown;
            const result2 = tmp16Result.trackActivityThermalStateNoticeShown();
          }
          if (isVideoEnabledResult) {
            const obj5 = AudioActionCreatorsDefault;
            obj5.setVideoEnabled(false);
          }
          const obj6 = EmbeddedActivitiesActionCreators;
          const result3 = obj6.consumeRequestToReactToSeriousThermalState();
        }
      }
    }
  }, items);
  const items1 = [manuallyFocusedId, pipState, handleStateUpdates, channelId];
  const effect = handleStateUpdates.useEffect(() => {
    let id;
    const items = [ChannelCallLifecycleStore, ChannelRTCStore];
    const batchedStoreListener = new channelId(pipState[28]).BatchedStoreListener(items, () => {
      const obj = { focusedId: manuallyFocusedId, pipParticipantId: id.id };
      handleStateUpdates(obj);
    });
    batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
    return () => batchedStoreListener.detach();
  }, items1);
  let obj = channelId(pipState[25]);
  const fn = function f() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    const items = [id, pipState.id];
    return items;
  };
  fn.__closure = { focused, pipState };
  fn.__workletHash = 10687904091320;
  fn.__initData = __initData7;
  class S {
    constructor(arg0, arg1) {
      let tmp7;
      let tmp8;
      const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual2.cheapWorkletArrayShallowEqual;
      cheapWorkletShallowEqual2;
      const tmp = arg1;
      if (!cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp7, tmp8] = arg0;
        _slicedToArray(arg0, 2);
        const obj = { focusedId: tmp7, pipParticipantId: tmp8 };
        const tmp2Result = ReanimatedRexport;
        tmp2Result.runOnJS(callback)(obj);
      }
    }
  }
  let obj2 = { cheapWorkletArrayShallowEqual: channelId(pipState[26]).cheapWorkletArrayShallowEqual, runOnJS: channelId(pipState[25]).runOnJS, handleStateUpdates };
  S.__closure = obj2;
  S.__workletHash = 12547034222966;
  S.__initData = __initData8;
  const animatedReaction = obj.useAnimatedReaction(fn, S);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_44 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let sharedValue;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(8);
  const ref = react.useRef(-1);
  const obj3 = require("ReanimatedRexport");
  sharedValue = obj3.useSharedValue(null);
  if (cResult[0] === arg0) {
    let tmp3;
    let tmp6;
    let tmp5;
    if (cResult[1] === sharedValue) {
      tmp3 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function u() {
        return () => clearTimeout(ref.current);
      };
      const items = [];
      cResult[3] = fn2;
      cResult[4] = items;
      tmp6 = items;
      tmp5 = fn2;
    } else {
      tmp5 = cResult[3];
      tmp6 = cResult[4];
    }
    const layoutEffect = react.useLayoutEffect(tmp5, tmp6);
    if (cResult[5] === tmp3) {
      let tmp8;
      if (cResult[6] === sharedValue) {
        tmp8 = cResult[7];
      }
      return tmp8;
    }
    const obj4 = { showFloatingCTA: sharedValue, setShowFloatingCTA: tmp3 };
    cResult[5] = tmp3;
    cResult[6] = sharedValue;
    cResult[7] = obj4;
    tmp8 = obj4;
  }
  const fn = function n(arg0) {
    if (closure_0.get() === constants.PANEL) {
      let result = sharedValue.set(arg0);
      if (null != arg0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          const result = sharedValue.set(null);
        }, VoicePanelFloatingCTAUtils.FLOATING_CTA_HIDE_TIMEOUT);
      }
    }
  };
  cResult[0] = arg0;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  tmp3 = fn;
}) : ((arg0) => {
  let closure_0;
  let showFloatingCTA;
  _require = arg0;
  const ref = react.useRef(-1);
  const obj = require("ReanimatedRexport");
  showFloatingCTA = obj.useSharedValue(null);
  const items = [arg0, showFloatingCTA];
  const setShowFloatingCTA = react.useCallback((arg0) => {
    if (closure_0.get() === constants.PANEL) {
      let result = showFloatingCTA.set(arg0);
      if (null != arg0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          const result = showFloatingCTA.set(null);
        }, VoicePanelFloatingCTAUtils.FLOATING_CTA_HIDE_TIMEOUT);
      }
    }
  }, items);
  const layoutEffect = react.useLayoutEffect(() => () => clearTimeout(ref.current), []);
  return { showFloatingCTA, setShowFloatingCTA };
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_45 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let ref;
  const obj = channelId(576);
  const cResult = obj.c(9);
  channelId = channelId.channelId;
  const selectedMode = channelId.selectedMode;
  const manualFocusedItem = channelId.manualFocusedItem;
  dependencyMap = react.useRef(null);
  if (cResult[0] === channelId) {
    let tmp2;
    if (cResult[1] === selectedMode) {
      tmp2 = cResult[2];
    }
    if (cResult[3] === channelId) {
      if (cResult[4] === manualFocusedItem) {
        let tmp3;
        let tmp5;
        if (cResult[5] === selectedMode) {
          tmp3 = cResult[6];
        }
        const layoutEffect = react.useLayoutEffect(tmp2, tmp3);
        if (cResult[7] !== selectedMode) {
          const fn2 = function c() {
            ref.current = selectedMode;
          };
          cResult[7] = selectedMode;
          cResult[8] = fn2;
          tmp5 = fn2;
        } else {
          tmp5 = cResult[8];
        }
        const layoutEffect1 = react.useLayoutEffect(tmp5);
      }
    }
    const items = [selectedMode, manualFocusedItem, channelId];
    cResult[3] = channelId;
    cResult[4] = manualFocusedItem;
    cResult[5] = selectedMode;
    cResult[6] = items;
    tmp3 = items;
  }
  const fn = function n() {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    const tmp = null != rTCConnection && RTCConnectionStore.getChannelId() === channelId;
    if (tmp) {
      if (ref.current !== constants.PIP) {
        if (selectedMode === constants.PIP) {
          rTCConnection.setPipOpen(true);
        }
      }
      const tmp7 = ref.current === constants.PIP && selectedMode !== constants.PIP;
      if (tmp7) {
        rTCConnection.setPipOpen(false);
      }
    }
  };
  cResult[0] = channelId;
  cResult[1] = selectedMode;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const selectedMode = channelId.selectedMode;
  const manualFocusedItem = channelId.manualFocusedItem;
  const ref = react.useRef(null);
  const items = [selectedMode, manualFocusedItem, channelId];
  const layoutEffect = react.useLayoutEffect(() => {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    const tmp = null != rTCConnection && RTCConnectionStore.getChannelId() === channelId;
    if (tmp) {
      if (ref.current !== constants.PIP) {
        if (selectedMode === constants.PIP) {
          rTCConnection.setPipOpen(true);
        }
      }
      const tmp7 = ref.current === constants.PIP && selectedMode !== constants.PIP;
      if (tmp7) {
        rTCConnection.setPipOpen(false);
      }
    }
  }, items);
  const layoutEffect1 = react.useLayoutEffect(() => {
    ref.current = selectedMode;
  });
});
const __initData9 = { code: "function VoicePanelControllerTsx9(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}" };
const __initData10 = { code: "function VoicePanelControllerTsx10(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
const __initData11 = { code: "function VoicePanelControllerTsx11(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,_queueHideControls}=this.__closure;const specs=controlsSpecs.get();if(specs.locked)return;if(specs.mode!==VoicePanelControlsModes.FLOATING_DEFAULT)return;runOnJS(_queueHideControls)();}" };
const __initData12 = { code: "function VoicePanelControllerTsx12(){const{mode}=this.__closure;return mode.get();}" };
const __initData13 = { code: "function VoicePanelControllerTsx13(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}" };
const __initData14 = { code: "function VoicePanelControllerTsx14(){const{connected}=this.__closure;return connected.get();}" };
const __initData15 = { code: "function VoicePanelControllerTsx15(connected_0){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected_0?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_55 = ReactCompilerGating.isReactCompilerEnabled() ? ((isConnected) => {
  let setWindowState;
  let obj = isConnected(setWindowState[23]);
  const cResult = obj.c(6);
  isConnected = isConnected.isConnected;
  const currentUpdatesRef = isConnected.currentUpdatesRef;
  setWindowState = isConnected.setWindowState;
  const setSafeAreaState = isConnected.setSafeAreaState;
  if (cResult[0] === currentUpdatesRef) {
    if (cResult[1] === isConnected) {
      if (cResult[2] === setSafeAreaState) {
        let tmp2;
        let tmp3;
        if (cResult[3] === setWindowState) {
          tmp2 = cResult[4];
          tmp3 = cResult[5];
        }
        const layoutEffect = react.useLayoutEffect(tmp2, tmp3);
      }
    }
  }
  const fn = function n() {
    if (currentUpdatesRef.current.connected !== isConnected) {
      currentUpdatesRef.current.connected = tmp;
      setWindowState((safeAreaState) => {
        let height;
        let width;
        let windowState = safeAreaState;
        const obj = isConnected(setWindowState[39]);
        const windowDimensions = obj.getWindowDimensions();
        ({ width, height } = windowDimensions);
        currentUpdatesRef.current.windowState = { width, height, landscape: width > height };
        const obj2 = isConnected(setWindowState[26]);
        if (!obj2.cheapWorkletShallowEqual(safeAreaState, currentUpdatesRef.current.windowState)) {
          windowState = currentUpdatesRef.current.windowState;
        }
        return windowState;
      });
      setSafeAreaState((safeAreaState) => {
        const current = currentUpdatesRef.current;
        const obj = isConnected(setWindowState[40]);
        current.safeAreaState = obj.getSafeAreaInsets();
        const obj2 = isConnected(setWindowState[26]);
        if (!obj2.cheapWorkletShallowEqual(safeAreaState, currentUpdatesRef.current.safeAreaState)) {
          safeAreaState = currentUpdatesRef.current.safeAreaState;
        }
        return safeAreaState;
      });
    }
  };
  const items = [currentUpdatesRef, isConnected, setWindowState, setSafeAreaState];
  cResult[0] = currentUpdatesRef;
  cResult[1] = isConnected;
  cResult[2] = setSafeAreaState;
  cResult[3] = setWindowState;
  cResult[4] = fn;
  cResult[5] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((isConnected) => {
  isConnected = isConnected.isConnected;
  const currentUpdatesRef = isConnected.currentUpdatesRef;
  const setWindowState = isConnected.setWindowState;
  const setSafeAreaState = isConnected.setSafeAreaState;
  const items = [currentUpdatesRef, isConnected, setWindowState, setSafeAreaState];
  const layoutEffect = react.useLayoutEffect(() => {
    if (currentUpdatesRef.current.connected !== isConnected) {
      currentUpdatesRef.current.connected = tmp;
      setWindowState((safeAreaState) => {
        let height;
        let width;
        let windowState = safeAreaState;
        const obj = isConnected(setWindowState[39]);
        const windowDimensions = obj.getWindowDimensions();
        ({ width, height } = windowDimensions);
        currentUpdatesRef.current.windowState = { width, height, landscape: width > height };
        const obj2 = isConnected(setWindowState[26]);
        if (!obj2.cheapWorkletShallowEqual(safeAreaState, currentUpdatesRef.current.windowState)) {
          windowState = currentUpdatesRef.current.windowState;
        }
        return windowState;
      });
      setSafeAreaState((safeAreaState) => {
        const current = currentUpdatesRef.current;
        const obj = isConnected(setWindowState[40]);
        current.safeAreaState = obj.getSafeAreaInsets();
        const obj2 = isConnected(setWindowState[26]);
        if (!obj2.cheapWorkletShallowEqual(safeAreaState, currentUpdatesRef.current.safeAreaState)) {
          safeAreaState = currentUpdatesRef.current.safeAreaState;
        }
        return safeAreaState;
      });
    }
  }, items);
});
let closure_56 = { code: "function VoicePanelControllerTsx16(t14){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;const{windowState:windowState_1,safeAreaState:safeAreaState_1,contentState:contentState_0}=t14;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState_0)){contentDimensions.set(contentState_0);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState_1)){windowDimensions.set(windowState_1);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState_1)){safeArea.set(safeAreaState_1);}runOnJS(executeLayoutManagerEffect)();}" };
let closure_57 = { code: "function VoicePanelControllerTsx17({windowState:windowState_1,safeAreaState:safeAreaState_1,contentState:contentState_0}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState_0)){contentDimensions.set(contentState_0);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState_1)){windowDimensions.set(windowState_1);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState_1)){safeArea.set(safeAreaState_1);}runOnJS(executeLayoutManagerEffect)();}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_58 = ReactCompilerGating.isReactCompilerEnabled() ? ((windowDimensions) => {
  let contentDimensions;
  let contentState;
  let first;
  let items;
  let pushToTalk;
  let tmp13;
  let tmp25;
  let tmp8;
  let tmp = windowDimensions;
  const tmp2 = contentDimensions;
  let obj = windowDimensions(contentDimensions[23]);
  const cResult = obj.c(43);
  windowDimensions = windowDimensions.windowDimensions;
  const safeArea = windowDimensions.safeArea;
  contentDimensions = windowDimensions.contentDimensions;
  const isConnected = windowDimensions.isConnected;
  const layoutManager = windowDimensions.layoutManager;
  ({ items, pushToTalk } = windowDimensions);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function c() {
      let height;
      let width;
      const obj = windowDimensions(contentDimensions[39]);
      windowDimensions = obj.getWindowDimensions();
      ({ width, height } = windowDimensions);
      size = { width, height, landscape: width > height };
      return size;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let obj2 = layoutManager;
  const tmp6 = isConnected(layoutManager.useState(first), 2);
  size = tmp6[0];
  const tmp7 = tmp6[1];
  let closure_6 = tmp7;
  const tmp5 = isConnected;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(tmp2[40]);
    let safeAreaInsets = tmpResult.getSafeAreaInsets();
    cResult[1] = safeAreaInsets;
    tmp8 = safeAreaInsets;
  } else {
    tmp8 = cResult[1];
  }
  const tmp5Result = tmp5(obj2.useState(tmp8), 2);
  const rect = tmp5Result[0];
  let closure_8 = tmp11;
  const tmpResult2 = tmp(tmp2[43]);
  const managerSubscription = tmpResult2.useManagerSubscription(layoutManager);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const size1 = { width: 0, height: 0 };
    cResult[2] = size1;
    tmp13 = size1;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === isConnected) {
    if (cResult[4] === managerSubscription) {
      if (cResult[5] === rect) {
        let tmp14;
        let tmp16;
        let tmp21;
        if (cResult[6] === size) {
          tmp14 = cResult[7];
        }
        const ref = obj2.useRef(tmp14);
        if (cResult[8] !== isConnected) {
          let obj3 = { isConnected, currentUpdatesRef: ref, setWindowState: tmp7, setSafeAreaState: tmp5Result[1] };
          cResult[8] = isConnected;
          cResult[9] = obj3;
          tmp16 = obj3;
        } else {
          tmp16 = cResult[9];
        }
        closure_55(tmp16);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                let obj = windowDimensions(contentDimensions[48]);
                obj.batchUpdates(() => { /* body not rendered: F153911 */ });
              }, 60);
              return;
            }
          }
          cResult[10] = F;
        } else {
          class F {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                let obj = windowDimensions(contentDimensions[48]);
                obj.batchUpdates(() => { /* body not rendered: F153911 */ });
              }, 60);
              return;
            }
          }
        }
        F = tmp19;
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                let obj = windowDimensions(contentDimensions[48]);
                obj.batchUpdates(() => { /* body not rendered: F153911 */ });
              }, 60);
              return;
            }
          }
          const items1 = [tmp19];
          cResult[11] = tmp22;
          cResult[12] = items1;
          tmp21 = items1;
        } else {
          class F {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                let obj = windowDimensions(contentDimensions[48]);
                obj.batchUpdates(() => { /* body not rendered: F153911 */ });
              }, 60);
              return;
            }
          }
          tmp21 = cResult[12];
        }
        const layoutEffect = obj2.useLayoutEffect(tmp22, tmp21);
        const id = obj2.useId();
        if (cResult[13] === isConnected) {
          class F {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                let obj = windowDimensions(contentDimensions[48]);
                obj.batchUpdates(() => { /* body not rendered: F153911 */ });
              }, 60);
              return;
            }
          }
          const layoutEffect1 = obj2.useLayoutEffect(U, tmp25);
          if (cResult[17] === items) {
            class F {
              constructor() {
                clearTimeoutResult = clearTimeout(closure_10.current.timeout);
                closure_10.current.timeout = setTimeout(() => {
                  clearTimeout(ref.current.timeout);
                  let obj = windowDimensions(contentDimensions[48]);
                  obj.batchUpdates(() => { /* body not rendered: F153911 */ });
                }, 60);
                return;
              }
            }
          }
          let obj4 = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null, safeAreaTop: null, safeAreaBottom: null, controlBarSize: pushToTalk ? closure_20 : closure_19 };
          ({ width: obj8.windowWidth, height: obj8.windowHeight } = size);
          ({ left: obj8.safeAreaLeft, right: obj8.safeAreaRight, top: obj8.safeAreaTop, bottom: obj8.safeAreaBottom } = rect);
          cResult[17] = items;
          cResult[18] = layoutManager;
          const updateStateResult = layoutManager.updateState(items, obj4);
          class U {
            constructor() {
              tmp = isConnected;
              if (tmp) {
                tmp2 = closure_10;
                state = closure_10.getState();
                obj1 = { key: null, lockEnabled: true };
                tmp3 = closure_12;
                obj1.key = closure_12;
                safeAreaDisableLock = state.requestSafeAreaDisableLock(obj1);
                return () => {
                  const state = ref.getState();
                  const obj = { key, lockEnabled: false };
                  const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
                };
              } else {
                return;
              }
            }
          }
          cResult[20] = rect.bottom;
          cResult[21] = rect.left;
          cResult[22] = rect.right;
          cResult[23] = rect.top;
          cResult[24] = size.height;
          cResult[25] = size.width;
          cResult[26] = updateStateResult;
        }
        class U {
          constructor() {
            tmp = isConnected;
            if (tmp) {
              tmp2 = closure_10;
              state = closure_10.getState();
              obj1 = { key: null, lockEnabled: true };
              tmp3 = closure_12;
              obj1.key = closure_12;
              safeAreaDisableLock = state.requestSafeAreaDisableLock(obj1);
              return () => {
                const state = ref.getState();
                const obj = { key, lockEnabled: false };
                const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
              };
            } else {
              return;
            }
          }
        }
        const items2 = [isConnected, id];
        cResult[13] = isConnected;
        cResult[14] = id;
        cResult[15] = items2;
        cResult[16] = U;
        tmp25 = items2;
      }
    }
  }
  const obj5 = { timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: size, safeAreaState: rect, contentDimensions: tmp13 };
  cResult[3] = isConnected;
  cResult[4] = managerSubscription;
  cResult[5] = rect;
  cResult[6] = size;
  cResult[7] = obj5;
  tmp14 = obj5;
}) : ((windowDimensions) => {
  let contentState;
  let items;
  let pushToTalk;
  windowDimensions = windowDimensions.windowDimensions;
  const safeArea = windowDimensions.safeArea;
  const contentDimensions = windowDimensions.contentDimensions;
  const isConnected = windowDimensions.isConnected;
  const layoutManager = windowDimensions.layoutManager;
  let obj = layoutManager;
  ({ items, pushToTalk } = windowDimensions);
  let tmp = isConnected(layoutManager.useState(() => {
    let height;
    let width;
    const obj = windowDimensions(contentDimensions[39]);
    windowDimensions = obj.getWindowDimensions();
    ({ width, height } = windowDimensions);
    size = { width, height, landscape: width > height };
    return size;
  }), 2);
  size = tmp[0];
  const tmp2 = tmp[1];
  let closure_6 = tmp2;
  const useState = layoutManager.useState;
  let obj2 = windowDimensions(contentDimensions[40]);
  const tmp3 = isConnected(useState(obj2.getSafeAreaInsets()), 2);
  const rect = tmp3[0];
  let tmp4 = tmp3[1];
  let closure_8 = tmp4;
  let obj3 = windowDimensions(contentDimensions[43]);
  const managerSubscription = obj3.useManagerSubscription(layoutManager);
  const ref = layoutManager.useRef({ timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: size, safeAreaState: rect, contentDimensions: { width: 0, height: 0 } });
  const tmp7 = closure_55({ isConnected, currentUpdatesRef: ref, setWindowState: tmp2, setSafeAreaState: tmp4 });
  const callback = layoutManager.useCallback(() => {
    clearTimeout(ref.current.timeout);
    ref.current.timeout = setTimeout(() => {
      clearTimeout(ref.current.timeout);
      let obj = windowDimensions(contentDimensions[48]);
      obj.batchUpdates(() => {
        closure_1_6((safeAreaState2) => {
          let windowState = safeAreaState2;
          const obj = closure_2_0(closure_2_2[26]);
          if (!obj.cheapWorkletShallowEqual(ref.current.windowState, safeAreaState2)) {
            windowState = ref.current.windowState;
          }
          return windowState;
        });
        closure_1_8((safeAreaState2) => {
          let safeAreaState = safeAreaState2;
          const obj = closure_2_0(closure_2_2[26]);
          if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaState2)) {
            safeAreaState = ref.current.safeAreaState;
          }
          return safeAreaState;
        });
      });
    }, 60);
  }, []);
  const items1 = [callback];
  const layoutEffect = layoutManager.useLayoutEffect(() => {
    let height;
    let width;
    let closure_0 = safeArea(contentDimensions[49])(function updateSafeAreas(safeAreaState2) {
      const obj = windowDimensions(contentDimensions[26]);
      if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaState2)) {
        const current = ref.current;
        const obj2 = {};
        const merged = Object.assign(safeAreaState2);
        current.safeAreaState = obj2;
        callback();
      }
    });
    let obj = windowDimensions(contentDimensions[40]);
    const safeAreaInsets = obj.getSafeAreaInsets();
    let obj2 = windowDimensions(contentDimensions[26]);
    if (!obj2.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaInsets)) {
      let obj3 = {};
      let current = ref.current;
      let merged = Object.assign(safeAreaInsets);
      current.safeAreaState = obj3;
      callback();
    }
    function updateWindowDimensions() {
      let height;
      let width;
      windowDimensions = arg0;
      if (arg0 === undefined) {
        const obj = windowDimensions(contentDimensions[39]);
        windowDimensions = obj.getWindowDimensions();
      }
      ({ width, height } = windowDimensions);
      size = { width, height, landscape: width > height };
      const obj3 = windowDimensions(contentDimensions[26]);
      if (!obj3.cheapWorkletShallowEqual(ref.current.windowState, size)) {
        ref.current.windowState = size;
        callback();
      }
    }
    let closure_1 = safeArea(contentDimensions[50])(updateWindowDimensions);
    const tmp3Result = windowDimensions(contentDimensions[39]);
    windowDimensions = tmp3Result.getWindowDimensions();
    ({ width, height } = windowDimensions);
    size = { width, height, landscape: width > height };
    const tmp3Result2 = windowDimensions(contentDimensions[26]);
    if (!tmp3Result2.cheapWorkletShallowEqual(ref.current.windowState, size)) {
      ref.current.windowState = size;
      callback();
    }
    return () => {
      closure_0();
      closure_1();
    };
  }, items1);
  const id = layoutManager.useId();
  const items2 = [isConnected, id];
  const layoutEffect1 = layoutManager.useLayoutEffect(() => {
    if (isConnected) {
      let state = SafeAreaDisabledStore.getState();
      let obj = { key: id, lockEnabled: true };
      let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
      return () => {
        const state = ref.getState();
        const obj = { key, lockEnabled: false };
        const safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
      };
    }
  }, items2);
  let obj4 = { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: pushToTalk ? closure_20 : closure_19 };
  const updateStateResult = layoutManager.updateState(items, obj4);
  let c13 = updateStateResult;
  const items3 = [contentDimensions, updateStateResult, managerSubscription, layoutManager, safeArea, rect, windowDimensions, size, isConnected];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    function executeLayoutManagerEffect() {
      return layoutManager.handleLayoutEffect();
    }
    ref.current.layoutKey = managerSubscription;
    let obj = windowDimensions(contentDimensions[25]);
    const fn = function t(arg0) {
      let safeAreaState;
      let windowState;
      ({ windowState, safeAreaState, contentState } = arg0);
      let tmp = isConnected;
      if (tmp) {
        const obj = cheapWorkletShallowEqual2;
        tmp = !obj.cheapWorkletShallowEqual(contentDimensions.get(), contentState);
      }
      if (tmp) {
        const result = contentDimensions.set(contentState);
      }
      const obj2 = cheapWorkletShallowEqual2;
      if (!obj2.cheapWorkletShallowEqual(windowDimensions.get(), windowState)) {
        const result1 = windowDimensions.set(windowState);
      }
      const obj4 = cheapWorkletShallowEqual2;
      if (!obj4.cheapWorkletShallowEqual(safeArea.get(), safeAreaState)) {
        const result2 = safeArea.set(safeAreaState);
      }
      const obj6 = ReanimatedRexport;
      obj6.runOnJS(executeLayoutManagerEffect)();
    };
    let obj2 = { isConnected, cheapWorkletShallowEqual: windowDimensions(contentDimensions[26]).cheapWorkletShallowEqual, contentDimensions, windowDimensions: executeLayoutManagerEffect, safeArea, runOnJS: windowDimensions(contentDimensions[25]).runOnJS, executeLayoutManagerEffect };
    fn.__closure = obj2;
    fn.__workletHash = 8930741106171;
    fn.__initData = __initData;
    const obj3 = { windowState: size, safeAreaState: rect, contentState };
    let tmp = obj.runOnUI(fn)(obj3);
  }, items3);
  const items4 = [layoutManager];
  const effect = obj.useEffect(() => {
    let c0;
    function checkDimensions() {
      if (!c3) {
        let obj = windowDimensions(contentDimensions[39]);
        size = obj.getWindowDimensions();
        const width = size.width;
        const height = size.height;
        let window_height = height;
        const result = checkDimensions.checkDimensionsMismatch(width, height);
        const wasDirty = result;
        if (null != result) {
          const _setTimeout = setTimeout;
          window_height = setTimeout(() => {
            let height;
            const obj = useWindowDimensions;
            windowDimensions = obj.getWindowDimensions();
            ({ width, height } = windowDimensions);
            const tmp4 = width === width && window_height === height;
            if (tmp4) {
              if (null != layoutManager.checkDimensionsMismatch(width, height)) {
                c3 = true;
                const obj4 = { layout_width: null, layout_height: null, window_width: width, window_height, was_dirty: wasDirty.wasDirty };
                ({ staleWidth: obj3.layout_width, staleHeight: obj3.layout_height } = wasDirty);
                const obj2 = AnalyticsUtilsDefault;
                obj2.track(constants.VOICE_PANEL_LAYOUT_DESYNC, obj4);
                c1 = null;
              }
            }
          }, 250);
        }
      }
    }
    if (!windowDimensions(contentDimensions[51]).isStable) {
      let _setInterval = setInterval;
      let interval = setInterval(checkDimensions, 1000);
      let c1 = null;
      let closure_2 = size.addEventListener("change", (event) => {
        let interval;
        if ("active" === event) {
          if (null == interval) {
            const _setInterval = setInterval;
            interval = setInterval(checkDimensions, 1000);
          }
        }
        if ("active" !== event) {
          const _clearInterval = clearInterval;
          clearInterval(interval);
          const _clearTimeout = clearTimeout;
          clearTimeout(c1);
          interval = null;
        }
      });
      let c3 = false;
      return () => {
        clearInterval(c0);
        clearTimeout(c1);
        closure_2.remove();
      };
    }
  }, items4);
  const layoutEffect3 = obj.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_59 = ReactCompilerGating.isReactCompilerEnabled() ? ((isConnected) => {
  let manualFocusedItem;
  let tmp4;
  let tmp5;
  let tmp = isConnected;
  let obj = isConnected(manualFocusedItem[23]);
  const cResult = obj.c(13);
  isConnected = isConnected.isConnected;
  const selectedMode = isConnected.selectedMode;
  const tmp2 = manualFocusedItem;
  manualFocusedItem = isConnected.manualFocusedItem;
  const isNonVoiceEmbeddedActivityInPanelMode = isConnected.isNonVoiceEmbeddedActivityInPanelMode;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function s() {
      let UNLOCKED;
      const obj = currentEmbeddedActivity;
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      applicationId = undefined;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      const obj2 = { applicationId, instanceId: compositeInstanceId, activityOrientationLockState: UNLOCKED };
      if (null != applicationId) {
        let UNLOCKED2 = obj.getOrientationLockStateForApp(applicationId);
        if (UNLOCKED2 == null) {
          UNLOCKED2 = constants.UNLOCKED;
        }
        UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = constants.UNLOCKED;
      }
      return obj2;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[28]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  let applicationId = stateFromStoresObject.applicationId;
  const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
  const instanceId = stateFromStoresObject.instanceId;
  if (cResult[2] === activityOrientationLockState) {
    if (cResult[3] === applicationId) {
      if (cResult[4] === instanceId) {
        if (cResult[5] === isConnected) {
          if (cResult[6] === isNonVoiceEmbeddedActivityInPanelMode) {
            if (cResult[7] === manualFocusedItem) {
              let tmp8;
              let tmp9;
              let tmp12;
              let tmp11;
              if (cResult[8] === selectedMode) {
                tmp8 = cResult[9];
                tmp9 = cResult[10];
              }
              let obj3 = applicationId;
              const layoutEffect = applicationId.useLayoutEffect(tmp8, tmp9);
              const _Symbol = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const fn3 = function w() {
                  let voiceChannelId;
                  return () => {
                    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
                    let isGuildStageVoiceResult;
                    if (channel != null) {
                      isGuildStageVoiceResult = channel.isGuildStageVoice();
                    }
                    if (!isGuildStageVoiceResult) {
                      const obj2 = isConnected(manualFocusedItem[53]);
                      const result = obj2.restoreDefaultOrientation();
                    }
                  };
                };
                const items1 = [];
                cResult[11] = fn3;
                cResult[12] = items1;
                tmp12 = items1;
                tmp11 = fn3;
              } else {
                tmp11 = cResult[11];
                tmp12 = cResult[12];
              }
              const layoutEffect1 = obj3.useLayoutEffect(tmp11, tmp12);
            }
          }
        }
      }
    }
  }
  const fn2 = function _() {
    let tmp = isNonVoiceEmbeddedActivityInPanelMode;
    if (!tmp) {
      const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      tmp = isGuildStageVoiceResult;
    }
    if (!tmp) {
      if (selectedMode === constants.PANEL) {
        if (isConnected) {
          if (null != applicationId) {
            const obj = { applicationId: tmp12, instanceId };
            const obj3 = ChannelRTCParticipants;
            if (manualFocusedItem === obj3.getEmbeddedActivityParticipantId(obj)) {
              applyActivityOrientationLockDefault(activityOrientationLockState);
            }
          }
          const obj5 = DeviceOrientation;
          obj5.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      }
      const obj2 = DeviceOrientation;
      const result = obj2.restoreDefaultOrientation();
    }
  };
  const items2 = [applicationId, isConnected, selectedMode, activityOrientationLockState, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode, instanceId];
  cResult[2] = activityOrientationLockState;
  cResult[3] = applicationId;
  cResult[4] = instanceId;
  cResult[5] = isConnected;
  cResult[6] = isNonVoiceEmbeddedActivityInPanelMode;
  cResult[7] = manualFocusedItem;
  cResult[8] = selectedMode;
  cResult[9] = fn2;
  cResult[10] = items2;
  tmp9 = items2;
  tmp8 = fn2;
}) : ((isConnected) => {
  isConnected = isConnected.isConnected;
  const selectedMode = isConnected.selectedMode;
  const manualFocusedItem = isConnected.manualFocusedItem;
  const isNonVoiceEmbeddedActivityInPanelMode = isConnected.isNonVoiceEmbeddedActivityInPanelMode;
  let obj = isConnected(manualFocusedItem[28]);
  const items = [EmbeddedActivitiesStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let UNLOCKED;
    const obj = currentEmbeddedActivity;
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    applicationId = undefined;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    let compositeInstanceId;
    if (currentEmbeddedActivity != null) {
      compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
    }
    const obj2 = { applicationId, instanceId: compositeInstanceId, activityOrientationLockState: UNLOCKED };
    if (null != applicationId) {
      let UNLOCKED2 = obj.getOrientationLockStateForApp(applicationId);
      if (UNLOCKED2 == null) {
        UNLOCKED2 = constants.UNLOCKED;
      }
      UNLOCKED = UNLOCKED2;
    } else {
      UNLOCKED = constants.UNLOCKED;
    }
    return obj2;
  });
  let applicationId = stateFromStoresObject.applicationId;
  const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
  const instanceId = stateFromStoresObject.instanceId;
  const items1 = [applicationId, isConnected, selectedMode, activityOrientationLockState, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode, instanceId];
  const layoutEffect = applicationId.useLayoutEffect(() => {
    let tmp = isNonVoiceEmbeddedActivityInPanelMode;
    if (!tmp) {
      const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      tmp = isGuildStageVoiceResult;
    }
    if (!tmp) {
      if (selectedMode === constants.PANEL) {
        if (isConnected) {
          if (null != applicationId) {
            const obj = { applicationId: tmp12, instanceId };
            const obj3 = ChannelRTCParticipants;
            if (manualFocusedItem === obj3.getEmbeddedActivityParticipantId(obj)) {
              applyActivityOrientationLockDefault(activityOrientationLockState);
            }
          }
          const obj5 = DeviceOrientation;
          obj5.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      }
      const obj2 = DeviceOrientation;
      const result = obj2.restoreDefaultOrientation();
    }
  }, items1);
  const layoutEffect1 = applicationId.useLayoutEffect(() => {
    let voiceChannelId;
    return () => {
      channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      if (!isGuildStageVoiceResult) {
        const obj2 = isConnected(manualFocusedItem[53]);
        const result = obj2.restoreDefaultOrientation();
      }
    };
  }, []);
});
const __initData16 = { code: "function VoicePanelControllerTsx18(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}" };
const __initData17 = { code: "function VoicePanelControllerTsx19(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else{if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;bb35:switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:{if(!isConnected){previousMode=VoicePanelModes.PANEL;}break bb35;}default:{previousMode=VoicePanelModes.PANEL;}}runOnJS(setMode)(previousMode);}else{if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}}}" };
const __initData18 = { code: "function VoicePanelControllerTsx20(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}" };
const __initData19 = { code: "function VoicePanelControllerTsx21(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_64 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let transitionCleanUp;
  let obj = channelId(transitionCleanUp[23]);
  const cResult = obj.c(9);
  channelId = channelId.channelId;
  const transitionState = channelId.transitionState;
  transitionCleanUp = channelId.transitionCleanUp;
  const connected = channelId.connected;
  const mode = channelId.mode;
  const setMode = channelId.setMode;
  const obj2 = channelId(transitionCleanUp[25]);
  const sharedValue = obj2.useSharedValue(transitionState);
  if (cResult[0] === channelId) {
    if (cResult[1] === sharedValue) {
      if (cResult[2] === transitionCleanUp) {
        let tmp5;
        let tmp6;
        let tmp9;
        let tmp8;
        if (cResult[3] === transitionState) {
          tmp5 = cResult[4];
          tmp6 = cResult[5];
        }
        const layoutEffect = mode.useLayoutEffect(tmp5, tmp6);
        const obj3 = mode;
        if (cResult[6] !== channelId) {
          const fn2 = function l() {
            return () => {
              state = state.getState();
              const obj = { lockEnabled: false, key: "voice-panel-freeze-" + channelId };
              const freezeLock = state.requestFreezeLock(obj);
            };
          };
          let items = [channelId];
          cResult[6] = channelId;
          cResult[7] = fn2;
          cResult[8] = items;
          tmp9 = items;
          tmp8 = fn2;
        } else {
          tmp8 = cResult[7];
          tmp9 = cResult[8];
        }
        const layoutEffect1 = obj3.useLayoutEffect(tmp8, tmp9);
        let tmpResult = tmp(tmp2[25]);
        const fn3 = function f() {
          const items = [connected.get(), mode.get(), sharedValue.get()];
          return items;
        };
        const obj4 = { connected, mode, sharedTransitionState: sharedValue };
        fn3.__closure = obj4;
        fn3.__workletHash = 7872922764858;
        fn3.__initData = __initData16;
        const fn4 = function h(arg0, arg1) {
          let tmp7;
          let tmp8;
          let tmp9;
          const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual2.cheapWorkletArrayShallowEqual;
          cheapWorkletShallowEqual2;
          const tmp4 = arg1;
          if (!cheapWorkletArrayShallowEqual(arg0, tmp4)) {
            [tmp7, tmp8, tmp9] = arg0;
            _slicedToArray(arg0, 3);
            if (tmp9 === native.TransitionStates.YEETED) {
              if (tmp8 !== constants.DISMISSED) {
                const tmpResult = ReanimatedRexport;
                tmpResult.runOnJS(setMode)(tmp17.DISMISSED);
              }
            } else if (tmp8 === constants.DISMISSED) {
              let PANEL;
              let PANEL1;
              if (arg1 != null) {
                PANEL1 = arg1[1];
              }
              if (PANEL1 == null) {
                PANEL1 = constants.PANEL;
              }
              if (constants.PANEL !== PANEL1) {
                if (constants.PIP !== PANEL1) {
                  PANEL = constants.PANEL;
                }
                const tmpResult3 = ReanimatedRexport;
                tmpResult3.runOnJS(setMode)(PANEL);
              }
              PANEL = PANEL1;
              if (!tmp7) {
                PANEL = constants.PANEL;
              }
            } else {
              let tmp10 = tmp7;
              if (!tmp10) {
                let first;
                if (arg1 != null) {
                  first = arg1[0];
                }
                tmp10 = true !== first;
              }
              if (!tmp10) {
                tmp10 = tmp8 !== constants.PIP;
              }
              if (!tmp10) {
                const tmpResult4 = ReanimatedRexport;
                tmpResult4.runOnJS(setMode)(constants.PANEL);
              }
            }
          }
        };
        const useAnimatedReaction = tmpResult.useAnimatedReaction;
        fn4.__closure = { cheapWorkletArrayShallowEqual: channelId(transitionCleanUp[26]).cheapWorkletArrayShallowEqual, TransitionStates: channelId(transitionCleanUp[56]).TransitionStates, VoicePanelModes, runOnJS: channelId(transitionCleanUp[25]).runOnJS, setMode };
        fn4.__workletHash = 3397995101267;
        fn4.__initData = __initData17;
        const obj5 = { cheapWorkletArrayShallowEqual: channelId(transitionCleanUp[26]).cheapWorkletArrayShallowEqual, TransitionStates: channelId(transitionCleanUp[56]).TransitionStates, VoicePanelModes, runOnJS: channelId(transitionCleanUp[25]).runOnJS, setMode };
        const animatedReaction = useAnimatedReaction(fn3, fn4);
      }
    }
  }
  const fn = function s() {
    const result = sharedValue.set(transitionState);
    if (transitionState === native.TransitionStates.YEETED) {
      state = AppFreezeStore.getState();
      const _HermesInternal = HermesInternal;
      const requestFreezeLock = state.requestFreezeLock;
      const obj = { lockEnabled: false, key: "voice-panel-freeze-" + channelId };
      const freezeLock = requestFreezeLock(obj);
      const _setTimeout = setTimeout;
      const timeout = setTimeout(transitionCleanUp, 500);
      return () => clearTimeout(closure_0);
    }
  };
  const items1 = [transitionState, sharedValue, transitionCleanUp, channelId];
  cResult[0] = channelId;
  cResult[1] = sharedValue;
  cResult[2] = transitionCleanUp;
  cResult[3] = transitionState;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp6 = items1;
  tmp5 = fn;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const transitionState = channelId.transitionState;
  const transitionCleanUp = channelId.transitionCleanUp;
  const connected = channelId.connected;
  const mode = channelId.mode;
  const setMode = channelId.setMode;
  let obj = channelId(transitionCleanUp[25]);
  const sharedValue = obj.useSharedValue(transitionState);
  let items = [transitionState, sharedValue, transitionCleanUp, channelId];
  const layoutEffect = mode.useLayoutEffect(() => {
    const result = sharedValue.set(transitionState);
    if (transitionState === native.TransitionStates.YEETED) {
      state = AppFreezeStore.getState();
      const _HermesInternal = HermesInternal;
      const requestFreezeLock = state.requestFreezeLock;
      const obj = { lockEnabled: false, key: "voice-panel-freeze-" + channelId };
      const freezeLock = requestFreezeLock(obj);
      const _setTimeout = setTimeout;
      const timeout = setTimeout(transitionCleanUp, 500);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [channelId];
  const layoutEffect1 = mode.useLayoutEffect(() => () => {
    state = state.getState();
    const obj = { lockEnabled: false, key: "voice-panel-freeze-" + channelId };
    const freezeLock = state.requestFreezeLock(obj);
  }, items1);
  const fn = function p() {
    const items = [connected.get(), mode.get(), sharedValue.get()];
    return items;
  };
  fn.__closure = { connected, mode, sharedTransitionState: sharedValue };
  fn.__workletHash = 1059965238065;
  fn.__initData = __initData18;
  const fn2 = function f(arg0, arg1) {
    let tmp7;
    let tmp8;
    let tmp9;
    const cheapWorkletArrayShallowEqual = cheapWorkletShallowEqual2.cheapWorkletArrayShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp4 = arg1;
    if (!cheapWorkletArrayShallowEqual(arg0, tmp4)) {
      [tmp7, tmp8, tmp9] = arg0;
      _slicedToArray(arg0, 3);
      if (tmp9 === native.TransitionStates.YEETED) {
        if (tmp8 !== constants.DISMISSED) {
          const tmpResult = ReanimatedRexport;
          tmpResult.runOnJS(setMode)(tmp17.DISMISSED);
        }
      } else if (tmp8 === constants.DISMISSED) {
        let PANEL;
        let PANEL1;
        if (arg1 != null) {
          PANEL1 = arg1[1];
        }
        if (PANEL1 == null) {
          PANEL1 = constants.PANEL;
        }
        if (constants.PANEL !== PANEL1) {
          if (constants.PIP !== PANEL1) {
            PANEL = constants.PANEL;
          }
          const tmpResult3 = ReanimatedRexport;
          tmpResult3.runOnJS(setMode)(PANEL);
        }
        PANEL = PANEL1;
        if (!tmp7) {
          PANEL = constants.PANEL;
        }
      } else {
        let tmp10 = tmp7;
        if (!tmp10) {
          let first;
          if (arg1 != null) {
            first = arg1[0];
          }
          tmp10 = true !== first;
        }
        if (!tmp10) {
          tmp10 = tmp8 !== constants.PIP;
        }
        if (!tmp10) {
          const tmpResult4 = ReanimatedRexport;
          tmpResult4.runOnJS(setMode)(constants.PANEL);
        }
      }
    }
  };
  const obj2 = channelId(transitionCleanUp[25]);
  fn2.__closure = { cheapWorkletArrayShallowEqual: channelId(transitionCleanUp[26]).cheapWorkletArrayShallowEqual, TransitionStates: channelId(transitionCleanUp[56]).TransitionStates, VoicePanelModes, runOnJS: channelId(transitionCleanUp[25]).runOnJS, setMode };
  fn2.__workletHash = 17265790500356;
  fn2.__initData = __initData19;
  ({ cheapWorkletArrayShallowEqual: channelId(transitionCleanUp[26]).cheapWorkletArrayShallowEqual, TransitionStates: channelId(transitionCleanUp[56]).TransitionStates, VoicePanelModes, runOnJS: channelId(transitionCleanUp[25]).runOnJS, setMode });
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_65 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_4;
  let closure_7;
  let first;
  let focused;
  let layoutManager;
  let ref;
  let tmp6;
  let voiceChannelId;
  const tmp = guildId;
  let obj = guildId(focused[23]);
  const cResult = obj.c(26);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ layoutManager, focused } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelRTCStore.getSelectedParticipantId(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(focused[28]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === channelId) {
    let tmp8;
    if (cResult[4] === guildId) {
      tmp8 = cResult[5];
    }
    react = tmp8;
    AppState = react.useRef(undefined);
    if (cResult[6] === layoutManager) {
      let tmp9;
      if (cResult[7] === stateFromStores) {
        tmp9 = cResult[8];
      }
      let closure_6 = tmp9;
      if (cResult[9] === focused) {
        if (cResult[10] === stateFromStores) {
          let tmp13;
          let tmp14;
          if (cResult[11] === tmp9) {
            tmp13 = cResult[12];
            tmp14 = cResult[13];
          }
          const layoutEffect = obj3.useLayoutEffect(tmp13, tmp14);
          class A {
            constructor() {
              let tmp2 = null;
              if (null != stateFromStores) {
                const obj = { id: tmp };
                const merged = Object.assign(closure_6);
                tmp2 = obj;
              }
              const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
              const current = ref.current;
              cheapWorkletShallowEqual2;
              const tmp7 = tmp2;
              if (!cheapWorkletShallowEqual(tmp7, current)) {
                ref.current = tmp2;
                const result = focused.set(tmp2);
              }
            }
          }
          EmbeddedActivitiesStore = tmp17;
          if (cResult[14] === tmp17) {
            if (cResult[15] === stateFromStores) {
              let tmp18;
              let tmp19;
              if (cResult[16] === tmp8) {
                tmp18 = cResult[17];
                tmp19 = cResult[18];
              }
              const effect = obj3.useEffect(tmp18, tmp19);
              if (cResult[19] === channelId) {
                let tmp21;
                let tmp22;
                if (cResult[20] === tmp8) {
                  tmp21 = cResult[21];
                  tmp22 = cResult[22];
                }
                const effect1 = obj3.useEffect(tmp22, tmp21);
                if (cResult[23] === stateFromStores) {
                  let tmp25;
                  if (cResult[24] === tmp8) {
                    tmp25 = cResult[25];
                  }
                  return tmp25;
                }
                class A {
                  constructor() {
                    let tmp2 = null;
                    if (null != stateFromStores) {
                      const obj = { id: tmp };
                      const merged = Object.assign(closure_6);
                      tmp2 = obj;
                    }
                    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
                    const current = ref.current;
                    cheapWorkletShallowEqual2;
                    const tmp7 = tmp2;
                    if (!cheapWorkletShallowEqual(tmp7, current)) {
                      ref.current = tmp2;
                      const result = focused.set(tmp2);
                    }
                  }
                }
                tmp26[0] = tmp8;
                tmp26[1] = stateFromStores;
                class M {
                  constructor() {
                    if (null != stateFromStores) {
                      if (!EmbeddedActivitiesStore) {
                        closure_4(null);
                      }
                    }
                  }
                }
                cResult[23] = stateFromStores;
                cResult[24] = tmp8;
                cResult[25] = tmp26;
                tmp25 = tmp26;
              }
              class A {
                constructor() {
                  let tmp2 = null;
                  if (null != stateFromStores) {
                    const obj = { id: tmp };
                    const merged = Object.assign(closure_6);
                    tmp2 = obj;
                  }
                  const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
                  const current = ref.current;
                  cheapWorkletShallowEqual2;
                  const tmp7 = tmp2;
                  if (!cheapWorkletShallowEqual(tmp7, current)) {
                    ref.current = tmp2;
                    const result = focused.set(tmp2);
                  }
                }
              }
              const items1 = [channelId, ];
              class M {
                constructor() {
                  if (null != stateFromStores) {
                    if (!EmbeddedActivitiesStore) {
                      closure_4(null);
                    }
                  }
                }
              }
              cResult[19] = channelId;
              cResult[20] = tmp8;
              cResult[21] = items1;
              cResult[22] = tmp23;
              tmp22 = tmp23;
              tmp21 = items1;
            }
          }
          class M {
            constructor() {
              if (null != stateFromStores) {
                if (!EmbeddedActivitiesStore) {
                  closure_4(null);
                }
              }
            }
          }
          const items2 = [stateFromStores, tmp17, tmp8];
          cResult[14] = tmp17;
          cResult[15] = stateFromStores;
          cResult[16] = tmp8;
          cResult[17] = M;
          cResult[18] = items2;
          tmp19 = items2;
          tmp18 = M;
        }
      }
      class A {
        constructor() {
          let tmp2 = null;
          if (null != stateFromStores) {
            const obj = { id: tmp };
            const merged = Object.assign(closure_6);
            tmp2 = obj;
          }
          const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
          const current = ref.current;
          cheapWorkletShallowEqual2;
          const tmp7 = tmp2;
          if (!cheapWorkletShallowEqual(tmp7, current)) {
            ref.current = tmp2;
            const result = focused.set(tmp2);
          }
        }
      }
      const items3 = [focused, , tmp9];
      cResult[9] = focused;
      cResult[10] = stateFromStores;
      cResult[11] = tmp9;
      cResult[12] = A;
      cResult[13] = items3;
      tmp14 = items3;
      tmp13 = A;
    }
    const getTargetDimensions = layoutManager.getTargetDimensions;
    const targetDimensions = getTargetDimensions(tmp11);
    cResult[6] = layoutManager;
    cResult[7] = stateFromStores;
    cResult[8] = targetDimensions;
    tmp9 = targetDimensions;
  }
  const fn2 = function _(id2) {
    let result = null == id2;
    if (!result) {
      const obj = useIsVoicePanelParticipantFocusable;
      result = obj.isVoicePanelParticipantFocusable(guildId, channelId, id2);
    }
    if (result) {
      const obj2 = ChannelRTCActionCreatorsDefault;
      const participant = obj2.selectParticipant(channelId, id2);
    }
  };
  cResult[3] = channelId;
  cResult[4] = guildId;
  cResult[5] = fn2;
  tmp8 = fn2;
}) : ((guildId) => {
  let focused;
  let layoutManager;
  let voiceChannelId;
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ layoutManager, focused } = guildId);
  let setFocused;
  const tmp = focused;
  let obj = guildId(focused[28]);
  const items = [ChannelRTCStore];
  const manualFocusedItem = obj.useStateFromStores(items, () => ChannelRTCStore.getSelectedParticipantId(channelId));
  let obj2 = setFocused;
  const items1 = [guildId, channelId];
  setFocused = setFocused.useCallback((id2) => {
    let result = null == id2;
    if (!result) {
      const obj = useIsVoicePanelParticipantFocusable;
      result = obj.isVoicePanelParticipantFocusable(guildId, channelId, id2);
    }
    if (result) {
      const obj2 = ChannelRTCActionCreatorsDefault;
      const participant = obj2.selectParticipant(channelId, id2);
    }
  }, items1);
  const ref = setFocused.useRef(undefined);
  const getTargetDimensions = layoutManager.getTargetDimensions;
  const tmp4 = manualFocusedItem;
  const targetDimensions = getTargetDimensions(tmp4);
  const items2 = [focused, manualFocusedItem, targetDimensions];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let tmp2 = null;
    if (null != manualFocusedItem) {
      const obj = { id: tmp };
      const merged = Object.assign(targetDimensions);
      tmp2 = obj;
    }
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    const current = ref.current;
    cheapWorkletShallowEqual2;
    const tmp7 = tmp2;
    if (!cheapWorkletShallowEqual(tmp7, current)) {
      ref.current = tmp2;
      const result = focused.set(tmp2);
    }
  }, items2);
  let tmp7 = channelId(tmp[57])(guildId, channelId, manualFocusedItem);
  let closure_7 = tmp7;
  const items3 = [manualFocusedItem, tmp7, setFocused];
  const effect = obj2.useEffect(() => {
    if (null != manualFocusedItem) {
      if (!closure_7) {
        setFocused(null);
      }
    }
  }, items3);
  const items4 = [channelId, setFocused];
  const effect1 = obj2.useEffect(() => () => {
    channel = channel.getChannel(channelId);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      isGuildStageVoiceResult = voiceChannelId.getVoiceChannelId() === channelId;
    }
    if (!isGuildStageVoiceResult) {
      setFocused(null);
    }
  }, items4);
  return { setFocused, manualFocusedItem };
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_66 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let mode;
  let tmp2;
  let obj = channelId(mode[23]);
  const cResult = obj.c(17);
  channelId = channelId.channelId;
  const isConnected = channelId.isConnected;
  mode = channelId.mode;
  const connected = channelId.connected;
  const transitionState = channelId.transitionState;
  const controlsSpecs = channelId.controlsSpecs;
  const setControlsMode = channelId.setControlsMode;
  if (cResult[0] !== channelId) {
    const fn = function s() {
      const voicePanelsPIP = VoicePanelStore.getState().voicePanelsPIP;
      return voicePanelsPIP.has(channelId) ? constants.PIP : constants.PANEL;
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = connected(transitionState.useState(tmp2), 2);
  const selectedMode = tmp3[0];
  let closure_8 = tmp5;
  const obj2 = transitionState;
  if (cResult[2] === connected) {
    if (cResult[3] === isConnected) {
      if (cResult[4] === mode) {
        if (cResult[5] === selectedMode) {
          let tmp6;
          if (cResult[6] === transitionState) {
            tmp6 = cResult[7];
          }
          const layoutEffect = obj2.useLayoutEffect(tmp6);
          if (cResult[8] === channelId) {
            if (cResult[9] === connected) {
              if (cResult[10] === controlsSpecs) {
                if (cResult[11] === mode) {
                  let tmp8;
                  if (cResult[12] === setControlsMode) {
                    tmp8 = cResult[13];
                  }
                  if (cResult[14] === tmp8) {
                    let tmp9;
                    if (cResult[15] === selectedMode) {
                      tmp9 = cResult[16];
                    }
                    return tmp9;
                  }
                  const obj3 = { selectedMode, setMode: tmp3[1], dismissPanel: tmp8 };
                  cResult[14] = tmp8;
                  cResult[15] = selectedMode;
                  cResult[16] = obj3;
                  tmp9 = obj3;
                }
              }
            }
          }
          const fn2 = function w() {
            let flag;
            if (controlsSpecs.get().mode === constants2.DRAWER) {
              const obj = { mode: tmp.FLOATING_DEFAULT };
              setControlsMode(obj);
              flag = true;
            } else if (connected.get()) {
              let flag2 = mode.get() === constants.PANEL;
              if (flag2) {
                closure_8(tmp7.PIP);
                flag2 = true;
              }
              flag = flag2;
            } else {
              const state = VoicePanelStore.getState();
              state.closeChannel(channelId);
              flag = true;
            }
            return flag;
          };
          cResult[8] = channelId;
          cResult[9] = connected;
          cResult[10] = controlsSpecs;
          cResult[11] = mode;
          cResult[12] = setControlsMode;
          cResult[13] = fn2;
          tmp8 = fn2;
        }
      }
    }
  }
  class E {
    constructor() {
      const result = mode.set(first);
      if (transitionState !== native.TransitionStates.YEETED) {
        const result1 = connected.set(isConnected);
      }
    }
  }
  cResult[2] = connected;
  cResult[3] = isConnected;
  cResult[4] = mode;
  cResult[5] = selectedMode;
  cResult[6] = transitionState;
  cResult[7] = E;
  tmp6 = E;
}) : ((channelId) => {
  let controlsSpecs;
  let mode;
  channelId = channelId.channelId;
  ({ isConnected: importDefault, mode } = channelId);
  const connected = channelId.connected;
  ({ transitionState: react, controlsSpecs } = channelId);
  const setControlsMode = channelId.setControlsMode;
  const tmp = connected(react.useState(() => {
    const voicePanelsPIP = VoicePanelStore.getState().voicePanelsPIP;
    return voicePanelsPIP.has(channelId) ? constants.PIP : constants.PANEL;
  }), 2);
  const selectedMode = tmp[0];
  let closure_8 = tmp3;
  const layoutEffect = react.useLayoutEffect(() => {
    const result = mode.set(first);
    if (react !== native.TransitionStates.YEETED) {
      const result1 = connected.set(importDefault);
    }
  });
  const items = [channelId, connected, mode, controlsSpecs, setControlsMode];
  let obj = {
    selectedMode,
    setMode: tmp3,
    dismissPanel: react.useCallback(() => {
      let flag;
      if (controlsSpecs.get().mode === constants2.DRAWER) {
        const obj = { mode: tmp.FLOATING_DEFAULT };
        setControlsMode(obj);
        flag = true;
      } else if (connected.get()) {
        let flag2 = mode.get() === constants.PANEL;
        if (flag2) {
          closure_8(tmp7.PIP);
          flag2 = true;
        }
        flag = flag2;
      } else {
        const state = VoicePanelStore.getState();
        state.closeChannel(channelId);
        flag = true;
      }
      return flag;
    }, items)
  };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_67 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let selectedMode;
  let obj = channelId(selectedMode[23]);
  const cResult = obj.c(5);
  channelId = channelId.channelId;
  const isConnected = channelId.isConnected;
  selectedMode = channelId.selectedMode;
  if (cResult[0] === channelId) {
    if (cResult[1] === isConnected) {
      let tmp2;
      let tmp3;
      if (cResult[2] === selectedMode) {
        tmp2 = cResult[3];
        tmp3 = cResult[4];
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  }
  const fn = function n() {
    const tmp2 = selectedMode !== constants.DISMISSED && isConnected;
    if (tmp2) {
      const obj = { video_layout: authStore4(selectedMode) };
      const track = AnalyticsUtilsDefault.track;
      const VIDEO_LAYOUT_TOGGLED = constants2.VIDEO_LAYOUT_TOGGLED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channelId));
      track(VIDEO_LAYOUT_TOGGLED, obj);
    }
  };
  const items = [selectedMode, channelId, isConnected];
  cResult[0] = channelId;
  cResult[1] = isConnected;
  cResult[2] = selectedMode;
  cResult[3] = fn;
  cResult[4] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((channelId) => {
  channelId = channelId.channelId;
  const isConnected = channelId.isConnected;
  const selectedMode = channelId.selectedMode;
  const items = [selectedMode, channelId, isConnected];
  const effect = react.useEffect(() => {
    const tmp2 = selectedMode !== constants.DISMISSED && isConnected;
    if (tmp2) {
      const obj = { video_layout: authStore4(selectedMode) };
      const track = AnalyticsUtilsDefault.track;
      const VIDEO_LAYOUT_TOGGLED = constants2.VIDEO_LAYOUT_TOGGLED;
      AnalyticsUtilsDefault;
      const obj2 = AppAnalyticsUtils;
      const merged = Object.assign(obj2.collectVoiceAnalyticsMetadata(channelId));
      track(VIDEO_LAYOUT_TOGGLED, obj);
    }
  }, items);
});
const __initData20 = { code: "function VoicePanelControllerTsx22(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}" };
const __initData21 = { code: "function VoicePanelControllerTsx23(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}" };
const __initData22 = { code: "function VoicePanelControllerTsx24(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}" };
const __initData23 = { code: "function VoicePanelControllerTsx25(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_72 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const fn = function s() {
    const items = [mode.get(), controlsSpecs.get().mode];
    return items;
  };
  fn.__closure = { mode, controlsSpecs };
  fn.__workletHash = 5322323655367;
  fn.__initData = __initData20;
  const fn2 = function n(arg0, arg1) {
    const cheapWorkletArrayShallowEqual = mode(dependencyMap[26]).cheapWorkletArrayShallowEqual;
    mode(dependencyMap[26]);
    const tmp4 = arg1;
    if (!cheapWorkletArrayShallowEqual(arg0, tmp4)) {
      let tmp9 = _slicedToArray(arg0, 2)[1] === constants2.DRAWER;
      _slicedToArray(arg0, 2);
      if (tmp9) {
        tmp9 = tmp7 === constants.PANEL;
      }
      if (tmp9) {
        let first;
        if (arg1 != null) {
          first = arg1[0];
        }
        tmp9 = first === constants.PANEL;
      }
      if (!tmp9) {
        const tmpResult = mode(dependencyMap[25]);
        tmpResult.runOnJS(mode(dependencyMap[60]).dismissKeyboard)();
      }
    }
  };
  const obj = mode(4618);
  fn2.__closure = { cheapWorkletArrayShallowEqual: mode(9110).cheapWorkletArrayShallowEqual, VoicePanelControlsModes, VoicePanelModes, runOnJS: mode(4618).runOnJS, dismissKeyboard: mode(4751).dismissKeyboard };
  fn2.__workletHash = 9634019064864;
  fn2.__initData = __initData21;
  ({ cheapWorkletArrayShallowEqual: mode(9110).cheapWorkletArrayShallowEqual, VoicePanelControlsModes, VoicePanelModes, runOnJS: mode(4618).runOnJS, dismissKeyboard: mode(4751).dismissKeyboard });
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
}) : ((mode) => {
  mode = mode.mode;
  const controlsSpecs = mode.controlsSpecs;
  const fn = function c() {
    const items = [mode.get(), controlsSpecs.get().mode];
    return items;
  };
  fn.__closure = { mode, controlsSpecs };
  fn.__workletHash = 14098431956993;
  fn.__initData = __initData22;
  const fn2 = function s(arg0, arg1) {
    const cheapWorkletArrayShallowEqual = mode(dependencyMap[26]).cheapWorkletArrayShallowEqual;
    mode(dependencyMap[26]);
    const tmp4 = arg1;
    if (!cheapWorkletArrayShallowEqual(arg0, tmp4)) {
      let tmp9 = _slicedToArray(arg0, 2)[1] === constants2.DRAWER;
      _slicedToArray(arg0, 2);
      if (tmp9) {
        tmp9 = tmp7 === constants.PANEL;
      }
      if (tmp9) {
        let first;
        if (arg1 != null) {
          first = arg1[0];
        }
        tmp9 = first === constants.PANEL;
      }
      if (!tmp9) {
        const tmpResult = mode(dependencyMap[25]);
        tmpResult.runOnJS(mode(dependencyMap[60]).dismissKeyboard)();
      }
    }
  };
  const obj = mode(4618);
  fn2.__closure = { cheapWorkletArrayShallowEqual: mode(9110).cheapWorkletArrayShallowEqual, VoicePanelControlsModes, VoicePanelModes, runOnJS: mode(4618).runOnJS, dismissKeyboard: mode(4751).dismissKeyboard };
  fn2.__workletHash = 12442886667392;
  fn2.__initData = __initData23;
  ({ cheapWorkletArrayShallowEqual: mode(9110).cheapWorkletArrayShallowEqual, VoicePanelControlsModes, VoicePanelModes, runOnJS: mode(4618).runOnJS, dismissKeyboard: mode(4751).dismissKeyboard });
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_73 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let first;
  let first1;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      set = new Set();
      return set;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  first1 = _slicedToArray(react.useState(first), 1)[0];
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp4;
      let tmp5;
      if (cResult[3] === first1) {
        tmp4 = cResult[4];
        tmp5 = cResult[5];
      }
      const effect = react.useEffect(tmp4, tmp5);
      return first1;
    }
  }
  const fn2 = function u() {
    if (closure_1) {
      const obj = closure_0(first1[61]);
      closure_0 = obj.runAfterInteractions(() => {
        set.clear();
        for (const item10008 of closure_0) {
          let addResult = set.add(item10008.id);
          continue;
        }
      }, 100);
      return () => {
        if (closure_0 != null) {
          closure_0.cancel();
        }
      };
    } else {
      first1.clear();
    }
  };
  const items = [arg1, arg0, first1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = first1;
  cResult[4] = fn2;
  cResult[5] = items;
  tmp5 = items;
  tmp4 = fn2;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const first = _slicedToArray(react.useState(() => {
    set = new Set();
    return set;
  }), 1)[0];
  const items = [arg1, arg0, first];
  const effect = react.useEffect(() => {
    if (closure_1) {
      const obj = closure_0(first[61]);
      closure_0 = obj.runAfterInteractions(() => {
        set.clear();
        for (const item10008 of closure_0) {
          let addResult = set.add(item10008.id);
          continue;
        }
      }, 100);
      return () => {
        if (closure_0 != null) {
          closure_0.cancel();
        }
      };
    } else {
      first.clear();
    }
  }, items);
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let channelType;
  let children;
  let dismissPanel;
  let dismissToPIPGestureRef;
  let isConnected;
  let items;
  let mountedCards;
  let pipAvoidanceSpecs;
  let safeArea;
  let setFocused;
  let setMode;
  let setShowFloatingCTA;
  let showFloatingCTA;
  let streamOutputSinkStack;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp8;
  let transitionCleanUp;
  let transitionState;
  let tmp = channelId;
  let tmp2 = streamOutputSinkStack;
  let obj = channelId(streamOutputSinkStack[23]);
  const cResult = obj.c(130);
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  ({ children, transitionState, transitionCleanUp } = channelId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [safeArea];
    const fn = function l() {
      return safeArea.getMode() === showControls.PUSH_TO_TALK;
    };
    cResult[0] = items1;
    cResult[1] = fn;
    tmp4 = items1;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[28]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      const tmp = guildId(first[62]);
      const tmp2 = new tmp(safeArea.getMediaEngine());
      return tmp2;
    };
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  streamOutputSinkStack = _slicedToArray(channelType.useState(tmp8), 1)[0];
  const obj3 = channelType;
  if (cResult[3] !== streamOutputSinkStack) {
    class I {
      constructor() {
        return () => streamOutputSinkStack.cleanUp();
      }
    }
    const items2 = [streamOutputSinkStack];
    cResult[3] = streamOutputSinkStack;
    cResult[4] = I;
    cResult[5] = items2;
    tmp11 = items2;
  } else {
    class I {
      constructor() {
        return () => streamOutputSinkStack.cleanUp();
      }
    }
    tmp11 = cResult[5];
  }
  const effect = obj3.useEffect(I, tmp11);
  ({ items, isConnected } = guildId(tmp2[63])(channelId, guildId));
  guildId(tmp2[63])(channelId, guildId);
  _slicedToArray = closure_73(items, isConnected);
  closure_73(items, isConnected);
  const tmp15 = useCoreSharedState(channelId, isConnected, items, stateFromStores);
  channelType = tmp15.channelType;
  const connected = tmp15.connected;
  const contentDimensions = tmp15.contentDimensions;
  const dragScrolling = tmp15.dragScrolling;
  const focused = tmp15.focused;
  const isCall = tmp15.isCall;
  const layoutManager = tmp15.layoutManager;
  const mode = tmp15.mode;
  const preJoinContentSize = tmp15.preJoinContentSize;
  safeArea = tmp15.safeArea;
  const scrollPosition = tmp15.scrollPosition;
  const windowDimensions = tmp15.windowDimensions;
  const wrapperDimensions = tmp15.wrapperDimensions;
  const isFocusedVideoZoomed = tmp15.isFocusedVideoZoomed;
  const setIsFocusedVideoZoomed = tmp15.setIsFocusedVideoZoomed;
  const useReducedMotion = tmp15.useReducedMotion;
  const wrapperOffset = tmp15.wrapperOffset;
  const morphablePanelMode = tmp15.morphablePanelMode;
  const pipHandoff = tmp15.pipHandoff;
  const tmp16 = useControlsState(mode, isConnected, connected, stateFromStores);
  const generateStateLocker = tmp16.generateStateLocker;
  const controlsSpecs = tmp16.controlsSpecs;
  const showControls = tmp16.showControls;
  const hideControls = tmp16.hideControls;
  const refreshIdleTimeout = tmp16.refreshIdleTimeout;
  const setControlsMode = tmp16.setControlsMode;
  if (cResult[6] === channelId) {
    class I {
      constructor() {
        return () => streamOutputSinkStack.cleanUp();
      }
    }
  }
  const obj2 = { channelId, isConnected, mode, connected, transitionState, controlsSpecs, setControlsMode };
  cResult[6] = channelId;
  cResult[7] = connected;
  cResult[8] = controlsSpecs;
  cResult[9] = isConnected;
  cResult[10] = mode;
  cResult[11] = setControlsMode;
  cResult[12] = transitionState;
  cResult[13] = obj2;
}) : ((channelId) => {
  let Provider2;
  let Provider3;
  let c12;
  let c14;
  let c16;
  let c17;
  let c18;
  let c19;
  let c20;
  let c21;
  let c22;
  let c23;
  let c26;
  let c27;
  let c32;
  let c35;
  let c36;
  let c4;
  let c7;
  let c9;
  let channelType;
  let children;
  let connected;
  let controlsSpecs;
  let dragScrolling;
  let focused;
  let generateStateLocker;
  let hideControls;
  let isCall;
  let isConnected;
  let isFocusedVideoZoomed;
  let items;
  let layoutManager;
  let manualFocusedItem;
  let morphablePanelMode;
  let mountedCards;
  let obj6;
  let pipHandoff;
  let preJoinContentSize;
  let refreshIdleTimeout;
  let safeArea;
  let scrollPosition;
  let setControlsMode;
  let setFocused;
  let setIsFocusedVideoZoomed;
  let setShowFloatingCTA;
  let showFloatingCTA;
  let tmp33;
  let transitionCleanUp;
  let useReducedMotion;
  let windowDimensions;
  let wrapperDimensions;
  let wrapperOffset;
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const transitionState = channelId.transitionState;
  let streamOutputSinkStack;
  _slicedToArray = undefined;
  react = undefined;
  connected = undefined;
  c7 = undefined;
  focused = undefined;
  c9 = undefined;
  layoutManager = undefined;
  c12 = undefined;
  safeArea = undefined;
  c14 = undefined;
  windowDimensions = undefined;
  c16 = undefined;
  c17 = undefined;
  c18 = undefined;
  c19 = undefined;
  c20 = undefined;
  c21 = undefined;
  c22 = undefined;
  c23 = undefined;
  controlsSpecs = undefined;
  c26 = undefined;
  c27 = undefined;
  setControlsMode = undefined;
  c32 = undefined;
  c35 = undefined;
  c36 = undefined;
  let tmp2 = streamOutputSinkStack;
  ({ children, transitionCleanUp } = channelId);
  let tmp = channelId;
  let obj = channelId(streamOutputSinkStack[28]);
  const items1 = [safeArea];
  const stateFromStores = obj.useStateFromStores(items1, () => safeArea.getMode() === showControls.PUSH_TO_TALK);
  let tmp4 = _slicedToArray;
  streamOutputSinkStack = _slicedToArray(react.useState(() => {
    const tmp = guildId(first[62]);
    const tmp2 = new tmp(safeArea.getMediaEngine());
    return tmp2;
  }), 1)[0];
  const items2 = [streamOutputSinkStack];
  const effect = react.useEffect(() => () => streamOutputSinkStack.cleanUp(), items2);
  ({ items, isConnected } = guildId(streamOutputSinkStack[63])(channelId, guildId));
  guildId(streamOutputSinkStack[63])(channelId, guildId);
  _slicedToArray = closure_73(items, isConnected);
  const tmp9 = useCoreSharedState(channelId, isConnected, items, stateFromStores);
  ({ channelType: c4, connected } = tmp9);
  const contentDimensions = tmp9.contentDimensions;
  ({ dragScrolling: c7, focused } = tmp9);
  ({ isCall: c9, layoutManager } = tmp9);
  const mode = tmp9.mode;
  ({ preJoinContentSize: c12, safeArea } = tmp9);
  ({ scrollPosition: c14, windowDimensions } = tmp9);
  ({ wrapperDimensions: c16, isFocusedVideoZoomed: c17, setIsFocusedVideoZoomed: c18, useReducedMotion: c19, wrapperOffset: c20, morphablePanelMode: c21, pipHandoff: c22 } = tmp9);
  const tmp10 = useControlsState(mode, isConnected, connected, stateFromStores);
  ({ generateStateLocker: c23, controlsSpecs } = tmp10);
  const showControls = tmp10.showControls;
  ({ hideControls: c26, refreshIdleTimeout: c27, setControlsMode } = tmp10);
  const tmp11 = closure_66({ channelId, isConnected, mode, connected, transitionState, controlsSpecs, setControlsMode });
  const selectedMode = tmp11.selectedMode;
  const setMode = tmp11.setMode;
  const dismissPanel = tmp11.dismissPanel;
  ({ manualFocusedItem, setFocused: c32 } = closure_65({ guildId, channelId, layoutManager, focused }));
  closure_65({ guildId, channelId, layoutManager, focused });
  const items3 = [c7];
  const obj3 = channelId(streamOutputSinkStack[28]);
  const stateFromStores1 = obj3.useStateFromStores(items3, () => {
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const obj = embeddedActivityLocationUtils;
    const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    let tmp4 = null != connectedActivityLocation;
    const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
    if (tmp4) {
      tmp4 = embeddedActivityLocationChannelId !== channelId;
    }
    if (tmp4) {
      tmp4 = activityPanelMode === ActivityPanelModes.PANEL;
    }
    return tmp4;
  });
  closure_58({ isConnected, windowDimensions, contentDimensions, safeArea, layoutManager, items, pushToTalk: stateFromStores });
  const items4 = [selectedMode, stateFromStores1];
  const layoutEffect = react.useLayoutEffect(() => {
    const tmp = selectedMode === isFocusedVideoZoomed.PANEL && stateFromStores1;
    if (tmp) {
      const obj = EmbeddedActivitiesActionCreators;
      const result = obj.updateActivityPanelMode(ActivityPanelModes.PIP);
    }
  }, items4);
  closure_72({ mode, controlsSpecs });
  closure_64({ channelId, transitionState, transitionCleanUp, connected, mode, setMode });
  const tmp18 = guildId(streamOutputSinkStack[65])({ mode, controlsSpecs, safeArea, windowDimensions });
  const pipAvoidanceSpecs = tmp18;
  const obj4 = { channelId, connected: isConnected, focusedId: manualFocusedItem, layoutManager, mode: selectedMode, windowDimensions, pipAvoidanceSpecs: tmp18, safeArea };
  const useControllerPIPState = channelId(streamOutputSinkStack[66]).useControllerPIPState;
  channelId(streamOutputSinkStack[66]);
  const controllerPIPState = useControllerPIPState(obj4);
  closure_45({ channelId, selectedMode, manualFocusedItem });
  closure_43({ channelId, focused, pipState: controllerPIPState, manuallyFocusedId: manualFocusedItem });
  c36({ channelId, focused, mode, connected });
  dismissPanel({ setControlsMode });
  closure_38({ showControls });
  guildId(tmp2[67])(channelId, mode, setMode, connected);
  guildId(tmp2[68])();
  closure_59({ isConnected, selectedMode, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode: stateFromStores1 });
  closure_67({ channelId, isConnected, selectedMode });
  ({ showFloatingCTA: c35, setShowFloatingCTA: c36 } = closure_44(mode));
  closure_44(mode);
  const dismissToPIPGestureRef = obj2.useRef(undefined);
  const obj5 = {
    value: tmp4(react.useState(() => {
      const obj = { channelId, channelType, connected, contentDimensions, controlsSpecs, dismissPanel, dismissToPIPGestureRef, dragScrolling, focused, generateStateLocker, guildId, hideControls, isCall, isFocusedVideoZoomed, layoutManager, mode, morphablePanelMode, mountedCards, pipAvoidanceSpecs, preJoinContentSize, refreshIdleTimeout, safeArea, scrollPosition, setControlsMode, setFocused, setIsFocusedVideoZoomed, setMode, setShowFloatingCTA, showControls, showFloatingCTA, streamOutputSinkStack, usePIPState: VoicePanelPIPStateContext.usePIPState, useReducedMotion, windowDimensions, wrapperDimensions, wrapperOffset, pipHandoff };
      return obj;
    }), 1)[0],
    children: setMode(Provider2, obj6)
  };
  const Provider = tmp7(tmp2[71]).Provider;
  obj6 = { value: controllerPIPState, children: setMode(Provider3, { value: tmp33, children }) };
  Provider2 = tmp(tmp2[69]).VoicePanelPIPStateContext.Provider;
  tmp33 = guildId;
  Provider3 = tmp7(tmp2[70]).Provider;
  if (guildId == null) {
    tmp33 = null;
  }
  return setMode(Provider, obj5);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default tmp5;