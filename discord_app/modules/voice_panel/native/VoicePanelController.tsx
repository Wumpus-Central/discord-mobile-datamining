// discord_app/modules/voice_panel/native/VoicePanelController.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import embeddedActivityLocationUtils from "../../activities/utils/embeddedActivityLocationUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import DesignSystemsNotificationComponentsExperiment from "../../design/DesignSystemsNotificationComponentsExperiment.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import _modDef4825 from "../../../../_runtime/metro/04825__.js";
import _modDef4828 from "../../../../_runtime/metro/04828__.js";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import DeviceOrientation from "../../device/native/DeviceOrientation.tsx";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import EmbeddedActivitiesActionCreators from "../../activities/EmbeddedActivitiesActionCreators.tsx";
import ChannelRTCParticipants from "../../calls/ChannelRTCParticipants.tsx";
import cheapWorkletShallowEqual from "../../reanimated/native/cheapWorkletShallowEqual.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelCardLayoutManagerDefault from "card/VoicePanelCardLayoutManager.tsx";
import applyActivityOrientationLockDefault from "../../activities/native/applyActivityOrientationLock.tsx";
import VoicePanelPIPStateContext from "pip/VoicePanelPIPStateContext.tsx";
import VoicePanelFloatingCTAUtils from "controls/utils/VoicePanelFloatingCTAUtils.tsx";
import useIsVoicePanelParticipantFocusable from "utils/useIsVoicePanelParticipantFocusable.tsx";
import useTransitionToConnectedActivityInVoiceDefault from "../../activities/utils/useTransitionToConnectedActivityInVoice.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";
import AppFreezeStore from "../../panels/morphable/AppFreezeStore.tsx";
import SafeAreaDisabledStore from "../../panels/morphable/native/SafeAreaDisabledStore.tsx";
import ChannelCallLifecycleStore from "../../video_calls/native/ChannelCallLifecycleStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import VoicePanelStore from "../VoicePanelStore.tsx";

require = fn;
function useCoreSharedState(channelId, isConnected, items, stateFromStores) {
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
  const sharedValue = require("ReanimatedRexport").useSharedValue(isConnected);
  const obj2 = require("ReanimatedRexport");
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(VoicePanelModes.PANEL);
  const obj3 = require("ReanimatedRexport");
  const size = require("useWindowDimensions").getWindowDimensions();
  const obj4 = require("useWindowDimensions");
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height };
  const sharedValue2 = require("ReanimatedRexport").useSharedValue(size1);
  const obj5 = require("ReanimatedRexport");
  const rect = require("useSafeAreaInsets").getSafeAreaInsets();
  const obj7 = require("useSafeAreaInsets");
  const merged = Object.assign(rect);
  const sharedValue3 = require("ReanimatedRexport").useSharedValue({});
  let obj = {};
  const obj8 = require("ReanimatedRexport");
  const maxPanelWidth = require("PanelSizeUtils").getMaxPanelWidth({ windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right });
  const obj10 = require("PanelSizeUtils");
  const obj6 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const obj9 = { drawerHeight: size.height, drawerWidth: maxPanelWidth, drawerX: null, drawerY: null, pipX: -1, pipY: -1, animated: true, mode: null };
  const obj12 = require("ReanimatedRexport");
  obj9.drawerX = require("PanelSizeUtils").getPanelX(size.width, maxPanelWidth);
  obj9.drawerY = size.height;
  obj9.mode = VoicePanelModes.PANEL;
  const sharedValue4 = obj12.useSharedValue(obj9);
  const obj14 = require("PanelSizeUtils");
  const sharedValue5 = require("ReanimatedRexport").useSharedValue(0);
  const obj15 = require("ReanimatedRexport");
  const sharedValue6 = require("ReanimatedRexport").useSharedValue(false);
  const obj16 = require("ReanimatedRexport");
  const sharedValue7 = require("ReanimatedRexport").useSharedValue(null);
  const obj17 = require("ReanimatedRexport");
  const sharedValue8 = require("ReanimatedRexport").useSharedValue(0);
  const obj18 = require("ReanimatedRexport");
  const sharedValue9 = require("ReanimatedRexport").useSharedValue(false);
  class S {
    constructor(arg0) {
      result = closure_6.set(channelId);
      return;
    }
  }
  S.__closure = { isFocusedVideoZoomed: sharedValue9 };
  S.__workletHash = 16949064095058;
  S.__initData = __initData9;
  items = [sharedValue9];
  const callback = size.useCallback(S, items);
  const obj19 = require("ReanimatedRexport");
  const sharedValue10 = require("ReanimatedRexport").useSharedValue(sharedValue9.useReducedMotion);
  const items1 = [sharedValue10];
  const effect = size.useEffect(() => {
    function onChange() {
      const result = sharedValue10.set(sharedValue9.useReducedMotion);
    }
    let result = sharedValue9.addReactChangeListener(onChange);
    return () => {
      const result = AccessibilityStore.removeReactChangeListener(onChange);
    };
  }, items1);
  const obj20 = require("ReanimatedRexport");
  const sharedValue11 = require("ReanimatedRexport").useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const obj21 = require("ReanimatedRexport");
  class J {
    constructor() {
      value = closure_3.get();
      if (VoicePanelModes.PANEL === value) {
        tmp5 = MorphablePanelModes;
        return MorphablePanelModes.PANEL;
      } else if (tmp2.PIP === value) {
        tmp4 = MorphablePanelModes;
        return MorphablePanelModes.PIP;
      } else {
        tmp3 = MorphablePanelModes;
        return MorphablePanelModes.UNDEFINED;
      }
    }
  }
  J.__closure = { mode: sharedValue1, VoicePanelModes, MorphablePanelModes };
  J.__workletHash = 8226755065394;
  J.__initData = __initData10;
  const derivedValue = require("ReanimatedRexport").useDerivedValue(J);
  const layoutManager = sharedValue1(size.useState(() => {
    const obj = new VoicePanelCardLayoutManagerDefault(closure_0);
    obj.updateState(closure_1, { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: closure_2 ? CONTROLS_HEIGHT_PTT : CONTROLS_HEIGHT });
    return obj;
  }), 1)[0];
  const items2 = [layoutManager];
  const layoutEffect = size.useLayoutEffect(() => () => layoutManager.cleanUp(), items2);
  const obj13 = { channelType: type, connected: sharedValue, contentDimensions: null, dragScrolling: null, focused: null, isCall: null, layoutManager: null, mode: null, preJoinContentSize: null, safeArea: null, scrollPosition: null, windowDimensions: null, wrapperDimensions: null, isFocusedVideoZoomed: null, setIsFocusedVideoZoomed: null, useReducedMotion: null, wrapperOffset: null, morphablePanelMode: null, pipHandoff: null };
  const obj11 = { mode: sharedValue1, VoicePanelModes, MorphablePanelModes };
  const obj22 = require("ReanimatedRexport");
  obj13.contentDimensions = require("ReanimatedRexport").useSharedValue(layoutManager.getContentDimensions());
  obj13.dragScrolling = sharedValue6;
  obj13.focused = sharedValue7;
  obj13.isCall = flag;
  obj13.layoutManager = layoutManager;
  obj13.mode = sharedValue1;
  obj13.preJoinContentSize = sharedValue8;
  obj13.safeArea = sharedValue3;
  obj13.scrollPosition = sharedValue5;
  obj13.windowDimensions = sharedValue2;
  obj13.wrapperDimensions = sharedValue4;
  obj13.isFocusedVideoZoomed = sharedValue9;
  obj13.setIsFocusedVideoZoomed = callback;
  obj13.useReducedMotion = sharedValue10;
  obj13.wrapperOffset = sharedValue11;
  obj13.morphablePanelMode = derivedValue;
  obj13.pipHandoff = sharedValue1(size.useState(() => new items(stateFromStores[42])()), 1)[0];
  return obj13;
}
function useControlsState(mode, isConnected, connected, stateFromStores) {
  _require = mode;
  importDefault = isConnected;
  dependencyMap = connected;
  closure_3 = stateFromStores;
  require("ReanimatedRexport");
  let obj = { mode: VoicePanelControlsModes.FLOATING_DEFAULT, locked: false, height: null, pushToTalk: null };
  if (stateFromStores) {
    if (isConnected) {
      let tmp6 = CONTROLS_HEIGHT_PTT;
    }
    obj.height = tmp6;
    obj.pushToTalk = stateFromStores;
    const tmp4Result = tmp4(obj);
    noop = tmp4Result;
    noop.useRef(-1);
    const _clearHideControlsQueue = noop.useCallback(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = -1;
      }
    }, []);
    const items = [tmp4Result, _clearHideControlsQueue, mode];
    const callback1 = noop.useCallback(() => {
      callback();
      if (-1 === ref.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
          _clearHideControlsQueue();
          if (mode.get() === constants.PANEL) {
            let locked = closure_1_4.get().mode !== constants2.FLOATING_DEFAULT;
            if (!locked) {
              locked = closure_1_4.get().locked;
            }
            if (!locked) {
              const obj2 = { mode: constants2.HIDDEN };
              closure_1(closure_2[44])(closure_1_4, obj2);
            }
          }
        }, guild);
      }
    }, items);
    const items1 = [tmp4Result, callback1];
    const memo = noop.useMemo(() => {
      closure_0 = isConnected(connected[45]).debounce(function _setControlsMode(mode, returnMode) {
        closure_1(closure_2[44])(closure_1_4, { mode, returnMode });
        callback1();
      }, 200);
      return {
        cancelControlsDebounce() {
          return closure_0.cancel();
        },
        setControlsMode(returnMode) {
          ({ mode, debounce } = returnMode);
          if (debounce === undefined) {
            debounce = false;
          }
          let FLOATING_DEFAULT = returnMode.returnMode;
          if (FLOATING_DEFAULT === undefined) {
            FLOATING_DEFAULT = VoicePanelControlsModes.FLOATING_DEFAULT;
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
    }, items1);
    const cancelControlsDebounce = memo.cancelControlsDebounce;
    const setControlsMode = memo.setControlsMode;
    const _Set = Set;
    const set = new Set();
    closure_10 = noop.useRef(set);
    const items2 = [tmp4Result, callback1, _clearHideControlsQueue];
    const items3 = [setControlsMode];
    const callback2 = noop.useCallback((arg0) => {
      let v4Result = arg0;
      if (arg0 == null) {
        v4Result = mode(connected[46]).v4();
        let obj = mode(connected[46]);
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
    const callback3 = noop.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { debounce: false };
      }
      setControlsMode({ mode: VoicePanelControlsModes.HIDDEN, debounce: obj.debounce });
    }, items3);
    const fn = function l() {
      value = closure_4.get();
      if (!value.locked) {
        if (value.mode === VoicePanelControlsModes.FLOATING_DEFAULT) {
          ReanimatedRexport.runOnJS(callback1)();
        }
      }
    };
    let obj2 = { controlsSpecs: tmp4Result, VoicePanelControlsModes: tmp5, runOnJS: null, _queueHideControls: null };
    const callback4 = noop.useCallback(() => {
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
        mode = VoicePanelControlsModes.FLOATING_DEFAULT;
      }
      return setControlsMode({ mode, debounce });
    }, items4);
    obj2.runOnJS = tmp(4618).runOnJS;
    obj2._queueHideControls = callback1;
    fn.__closure = obj2;
    fn.__workletHash = 9447192071204;
    fn.__initData = __initData11;
    const items5 = [tmp4Result, callback1];
    const callback5 = noop.useCallback(fn, items5);
    class S {
      constructor() {
        return closure_0.get();
      }
    }
    const obj3 = { mode };
    S.__closure = obj3;
    S.__workletHash = 7231693349110;
    S.__initData = __initData12;
    const fn2 = function u(arg0) {
      if (arg0 === VoicePanelModes.PANEL) {
        ReanimatedRexport.runOnJS(callback1)();
      } else {
        ReanimatedRexport.runOnJS(callback)();
      }
    };
    const obj4 = { VoicePanelModes, runOnJS: tmp(4618).runOnJS, _queueHideControls: callback1, _clearHideControlsQueue };
    fn2.__closure = obj4;
    fn2.__workletHash = 9080436423990;
    fn2.__initData = __initData13;
    const animatedReaction = tmp(4618).useAnimatedReaction(S, fn2);
    const items6 = [stateFromStores, tmp4Result, isConnected];
    const layoutEffect = noop.useLayoutEffect(() => {
      if (closure_3) {
        if (closure_1) {
          let tmp5 = CONTROLS_HEIGHT_PTT;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = CONTROLS_HEIGHT;
    }, items6);
    const tmpResult = tmp(4618);
    const fn3 = function f() {
      return connected.get();
    };
    const obj5 = { connected };
    fn3.__closure = obj5;
    fn3.__workletHash = 16717410106640;
    fn3.__initData = __initData14;
    const fn4 = function h(arg0) {
      if (closure_3) {
        if (arg0) {
          let tmp5 = CONTROLS_HEIGHT_PTT;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = CONTROLS_HEIGHT;
    };
    const obj6 = { updateSharedValueIfChanged: updateSharedValueIfChangedDefault, controlsSpecs: tmp4Result, pushToTalk: stateFromStores, CONTROLS_HEIGHT_PTT, CONTROLS_HEIGHT };
    fn4.__closure = obj6;
    fn4.__workletHash = 14172278286591;
    fn4.__initData = __initData15;
    const animatedReaction1 = tmp(4618).useAnimatedReaction(fn3, fn4);
    const items7 = [cancelControlsDebounce, _clearHideControlsQueue];
    const layoutEffect1 = noop.useLayoutEffect(() => () => {
      cancelControlsDebounce();
      _clearHideControlsQueue();
    }, items7);
    const items8 = [setControlsMode];
    const effect = noop.useEffect(() => {
      function closeTiV() {
        setControlsMode({ mode: constants2.FLOATING_DEFAULT });
      }
      let ComponentDispatch = mode(connected[47]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants3.VOICE_PANEL_TIV_CLOSE, closeTiV);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants2.VOICE_PANEL_TIV_CLOSE, closeTiV);
      };
    }, items8);
    const obj7 = { generateStateLocker: callback2, setControlsMode, showControls: callback4, hideControls: callback3, refreshIdleTimeout: callback5, controlsSpecs: tmp4Result };
    return obj7;
  }
  tmp6 = CONTROLS_HEIGHT;
}
let AppState = fn(17).AppState;
const VoicePanelConstants = fn(11916);
({ VoicePanelModes: closure_17, getAnalyticsNameForVoicePanelMode: closure_18 } = VoicePanelConstants);
const VoicePanelControlsConstants = fn(11914);
({ CONTROLS_HEIGHT: closure_19, CONTROLS_HEIGHT_PTT: closure_20, CONTROLS_HIDE_TIMEOUT: closure_21, VoicePanelControlsModes: closure_22 } = VoicePanelControlsConstants);
const Constants = fn(1085);
({ AnalyticEvents: closure_23, ComponentActions: closure_24, InputModes: closure_25 } = Constants);
const OrientationLockState = fn(2011).OrientationLockState;
const ActivityPanelModes = fn(9001).ActivityPanelModes;
const isActivityParticipant = fn(4917).isActivityParticipant;
const MorphablePanelModes = fn(11917).MorphablePanelModes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? ((setControlsMode) => {
  const cResult = setControlsMode(576).c(4);
  setControlsMode = setControlsMode.setControlsMode;
  if (cResult[0] !== setControlsMode) {
    const fn = function o() {
      setControlsMode({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
    };
    cResult[0] = setControlsMode;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== tmp3) {
    const obj2 = { onTransition: tmp3 };
    cResult[2] = tmp3;
    cResult[3] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[3];
  }
  useTransitionToConnectedActivityInVoiceDefault(tmp4);
  const obj = setControlsMode(576);
}) : ((setControlsMode) => {
  setControlsMode = setControlsMode.setControlsMode;
  const items = [setControlsMode];
  const callback = noop.useCallback(() => {
    setControlsMode({ mode: VoicePanelControlsModes.FLOATING_DEFAULT });
  }, items);
  useTransitionToConnectedActivityInVoiceDefault({ onTransition: callback });
});
const __initData = { code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
const __initData2 = { code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[focusedParticipantId_0,voicePanelMode_0,connectedValue_0]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId_0,voicePanelMode:voicePanelMode_0,connectedValue:connectedValue_0});}" };
const __initData3 = { code: "function VoicePanelControllerTsx3(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
const __initData4 = { code: "function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId_0,voicePanelMode_0,connectedValue_0]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId_0,voicePanelMode:voicePanelMode_0,connectedValue:connectedValue_0});}" };
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  ({ channelId: require, focused } = mode);
  mode = mode.mode;
  const connected = mode.connected;
  function handleAnimatedReaction(arg0) {
    ({ focusedParticipantId, connectedValue } = arg0);
    if (connectedValue) {
      connectedValue = tmp === VoicePanelModes.PANEL;
    }
    let tmp3 = null != focusedParticipantId;
    if (tmp3) {
      tmp3 = isActivityParticipant(ChannelRTCStore.getParticipant(_require, focusedParticipantId));
    }
    if (tmp3) {
      tmp3 = connectedValue;
    }
    state = VoicePanelStore.getState();
    state.setIsActivityFocused(tmp3);
  }
  const fn = function s() {
    value = focused.get();
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
    if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
      [tmp6, tmp7, tmp8] = arg0;
      const tmp5 = _slicedToArray(arg0, 3);
      const obj2 = { focusedParticipantId: tmp6, voicePanelMode: tmp7, connectedValue: tmp8 };
      ReanimatedRexport.runOnJS(handleAnimatedReaction)(obj2);
      const tmp2Result = ReanimatedRexport;
    }
    obj = cheapWorkletShallowEqual;
    tmp = arg1;
  };
  let obj = require("ReanimatedRexport");
  fn2.__closure = { cheapWorkletArrayShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletArrayShallowEqual, runOnJS: require("ReanimatedRexport").runOnJS, handleAnimatedReaction };
  fn2.__workletHash = 5068513886995;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const focused = channelId.focused;
  const mode = channelId.mode;
  const connected = channelId.connected;
  let handleAnimatedReaction;
  let items = [channelId];
  handleAnimatedReaction = handleAnimatedReaction.useCallback((arg0) => {
    ({ focusedParticipantId, connectedValue } = arg0);
    if (connectedValue) {
      connectedValue = tmp === VoicePanelModes.PANEL;
    }
    let tmp3 = null != focusedParticipantId;
    if (tmp3) {
      tmp3 = isActivityParticipant(ChannelRTCStore.getParticipant(channelId, focusedParticipantId));
    }
    if (tmp3) {
      tmp3 = connectedValue;
    }
    state = VoicePanelStore.getState();
    state.setIsActivityFocused(tmp3);
  }, items);
  const fn = function h() {
    value = focused.get();
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
      tmp = arg1;
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[26]);
      if (!obj.cheapWorkletArrayShallowEqual(channelId, tmp)) {
        tmp4 = closure_3;
        num = 3;
        tmp5 = closure_3(channelId, 3);
        [tmp6, tmp7, tmp8] = tmp5;
        tmp2Result = tmp2(tmp3[25]);
        tmp9 = closure_4;
        obj1 = { focusedParticipantId: null, voicePanelMode: null, connectedValue: null };
        obj1.focusedParticipantId = tmp6;
        obj1.voicePanelMode = tmp7;
        obj1.connectedValue = tmp8;
        tmp10 = tmp2Result.runOnJS(closure_4)(obj1);
      }
      return;
    }
  }
  let obj = channelId(mode[25]);
  S.__closure = { cheapWorkletArrayShallowEqual: channelId(mode[26]).cheapWorkletArrayShallowEqual, runOnJS: channelId(mode[25]).runOnJS, handleAnimatedReaction };
  S.__workletHash = 8543775529459;
  S.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(fn, S);
});
const MINUTE = DurationsDefault.Millis.MINUTE;
ReactCompilerGating = fn(558);
let closure_38 = ReactCompilerGating.isReactCompilerEnabled() ? ((showControls) => {
  const cResult = showControls(576).c(16);
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
  let obj = showControls(576);
  const stateFromStores = showControls(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MediaEngineStore];
    const fn2 = function f() {
      return MediaEngineStore.isMute();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = showControls(504);
  stateFromStores1 = showControls(504).useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [RTCConnectionStore];
    const fn3 = function w() {
      return rTCConnectionId.getRTCConnectionId();
    };
    cResult[4] = items2;
    cResult[5] = fn3;
    let tmp13 = fn3;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult3 = showControls(504);
  const stateFromStores2 = showControls(504).useStateFromStores(tmp12, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        closure_2.current = performance.now();
        closure_1.current = false;
        return;
      }
    }
    cResult[6] = I;
  } else {
    class I {
      constructor() {
        closure_2.current = performance.now();
        closure_1.current = false;
        return;
      }
    }
  }
  if (cResult[7] !== stateFromStores2) {
    class I {
      constructor() {
        closure_2.current = performance.now();
        closure_1.current = false;
        return;
      }
    }
    tmp18[0] = stateFromStores2;
    cResult[7] = stateFromStores2;
    cResult[8] = tmp18;
  } else {
    class I {
      constructor() {
        closure_2.current = performance.now();
        closure_1.current = false;
        return;
      }
    }
  }
  const effect = obj2.useEffect(I, tmp18);
  if (cResult[9] !== stateFromStores1) {
    class T {
      constructor() {
        if (closure_4) {
          tmp2 = closure_2;
          tmp3 = globalThis;
          _performance = performance;
          closure_2.current = performance.now();
        } else {
          tmp = closure_1;
          flag = false;
          closure_1.current = false;
        }
        return;
      }
    }
    const items3 = [stateFromStores1];
    cResult[9] = stateFromStores1;
    cResult[10] = items3;
    cResult[11] = T;
    let tmp21 = T;
    const tmp20 = items3;
  } else {
    class T {
      constructor() {
        if (closure_4) {
          tmp2 = closure_2;
          tmp3 = globalThis;
          _performance = performance;
          closure_2.current = performance.now();
        } else {
          tmp = closure_1;
          flag = false;
          closure_1.current = false;
        }
        return;
      }
    }
    tmp21 = cResult[11];
  }
  const effect1 = obj2.useEffect(tmp21, tmp20);
  if (cResult[12] === showControls) {
    class T {
      constructor() {
        if (closure_4) {
          tmp2 = closure_2;
          tmp3 = globalThis;
          _performance = performance;
          closure_2.current = performance.now();
        } else {
          tmp = closure_1;
          flag = false;
          closure_1.current = false;
        }
        return;
      }
    }
    const effect2 = obj2.useEffect(M, items4);
  }
  class M {
    constructor() {
      tmp = closure_3;
      if (closure_3) {
        tmp2 = closure_1;
        tmp = !closure_1.current;
      }
      if (tmp) {
        tmp3 = globalThis;
        _performance = performance;
        tmp4 = closure_2;
        tmp5 = closure_37;
        if (performance.now() - closure_2.current >= closure_37) {
          tmp6 = closure_1;
          flag = true;
          closure_1.current = true;
          tmp7 = showControls;
          tmp8 = showControls();
          tmp9 = closure_1;
          tmp10 = closure_2;
          obj = closure_1(closure_2[29]);
          obj1 = { key: "SPEAKING_WHILE_MUTED", icon: null, content: null, toastDurationMs: null };
          obj1.icon = closure_1(closure_2[30]);
          tmp11 = closure_0;
          intl = closure_0(closure_2[31]).intl;
          obj1.content = intl.string(closure_0(closure_2[31]).t["29gnR4"]);
          num = 3;
          obj1.toastDurationMs = 3 * closure_1(closure_2[27]).Millis.SECOND;
          openResult = obj.open(obj1);
        }
      }
      return;
    }
  }
  items4 = [stateFromStores, showControls];
  cResult[12] = showControls;
  cResult[13] = stateFromStores;
  cResult[14] = M;
  cResult[15] = items4;
  const tmpResult4 = showControls(504);
}) : ((showControls) => {
  showControls = showControls.showControls;
  let stateFromStores1;
  stateFromStores1.useRef(false);
  dependencyMap = stateFromStores1.useRef(0);
  const items = [MediaEngineStore];
  const stateFromStores = showControls(504).useStateFromStores(items, () => MediaEngineStore.getSpeakingWhileMuted());
  let obj = showControls(504);
  const items1 = [MediaEngineStore];
  stateFromStores1 = showControls(504).useStateFromStores(items1, () => MediaEngineStore.isMute());
  let obj2 = showControls(504);
  const items2 = [RTCConnectionStore];
  const items3 = [showControls(504).useStateFromStores(items2, () => rTCConnectionId.getRTCConnectionId())];
  const effect = stateFromStores1.useEffect(() => {
    closure_2.current = performance.now();
    closure_1.current = false;
  }, items3);
  const items4 = [stateFromStores1];
  const effect1 = stateFromStores1.useEffect(() => {
    if (stateFromStores1) {
      const _performance = performance;
      closure_2.current = performance.now();
    } else {
      closure_1.current = false;
    }
  }, items4);
  const items5 = [stateFromStores, showControls];
  const effect2 = stateFromStores1.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !ref.current;
    }
    if (tmp) {
      const _performance = performance;
      if (performance.now() - ref2.current >= MINUTE) {
        ref.current = true;
        showControls();
        const obj2 = { key: "SPEAKING_WHILE_MUTED", icon: _modDef4825, content: null, toastDurationMs: null };
        const intl = util.intl;
        obj2.content = intl.string(util.t["29gnR4"]);
        obj2.toastDurationMs = 3 * DurationsDefault.Millis.SECOND;
        ToastActionCreatorsDefault.open(obj2);
      }
    }
  }, items5);
});
const __initData5 = { code: "function VoicePanelControllerTsx5(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}" };
const __initData6 = { code: "function VoicePanelControllerTsx6(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[focusedId_0,pipParticipantId_0]=props;runOnJS(handleStateUpdates)({focusedId:focusedId_0,pipParticipantId:pipParticipantId_0});}" };
const __initData7 = { code: "function VoicePanelControllerTsx7(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}" };
const __initData8 = { code: "function VoicePanelControllerTsx8(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId_0,pipParticipantId_0]=props;runOnJS(handleStateUpdates)({focusedId:focusedId_0,pipParticipantId:pipParticipantId_0});}" };
ReactCompilerGating = fn(558);
let closure_43 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(pipState[23]).c(12);
  channelId = channelId.channelId;
  const focused = channelId.focused;
  pipState = channelId.pipState;
  const manuallyFocusedId = channelId.manuallyFocusedId;
  if (cResult[0] !== channelId) {
    const fn = function s(arg0) {
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
            let tmp15 = isVideoEnabledResult;
            if (!isVideoEnabledResult) {
              tmp15 = tmp11;
            }
            if (!tmp15) {
              if (isVideoEnabledResult) {
                AudioActionCreatorsDefault.setVideoEnabled(false);
              }
              const result2 = EmbeddedActivitiesActionCreators.consumeRequestToReactToSeriousThermalState();
            } else {
              let obj = require;
              let result3 = dependencyMap;
              const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("VoicePanelControllerThermalState");
              const obj3 = ToastActionCreatorsDefault;
              if (designSystemsNotificationComponents) {
                const obj4 = { text: null, icon: null };
                const intl2 = obj(1126).intl;
                obj4.text = intl2.string(obj(1126).t.O2IlPT);
                obj4.icon = obj(4829).VideoSlashIcon;
                obj3.openMana("EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", obj4);
              } else {
                const obj5 = { key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", icon: _modDef4828, content: null, disableAnimations: true, toastDurationMs: 3000 };
                const intl = obj(1126).intl;
                obj5.content = intl.string(obj(1126).t.O2IlPT);
                obj3.open(obj5);
              }
              obj = obj(17394);
              result3 = obj.trackActivityThermalStateNoticeShown();
            }
          }
        }
      }
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  noop = tmp4;
  if (cResult[2] === channelId) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === manuallyFocusedId) {
        if (cResult[5] === pipState.id) {
          let tmp5 = cResult[6];
        }
        if (cResult[7] === channelId) {
          if (cResult[8] === tmp4) {
            if (cResult[9] === manuallyFocusedId) {
              if (cResult[10] === pipState) {
                let tmp6 = cResult[11];
              }
              const effect = noop.useEffect(tmp5, tmp6);
              class P {
                constructor() {
                  value = focused.get();
                  id = undefined;
                  if (value != null) {
                    id = value.id;
                  }
                  items = [, ];
                  items[0] = id;
                  items[1] = pipState.id;
                  return items;
                }
              }
              let obj2 = { focused, pipState };
              P.__closure = obj2;
              P.__workletHash = 13275424525242;
              P.__initData = __initData5;
              const fn2 = function w(arg0, arg1) {
                if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
                  [tmp6, tmp7] = arg0;
                  const tmp5 = _slicedToArray(arg0, 2);
                  const obj2 = { focusedId: tmp6, pipParticipantId: tmp7 };
                  ReanimatedRexport.runOnJS(closure_4)(obj2);
                  const tmp2Result = ReanimatedRexport;
                }
                obj = cheapWorkletShallowEqual;
                tmp = arg1;
              };
              let obj3 = { cheapWorkletArrayShallowEqual: tmp(tmp2[26]).cheapWorkletArrayShallowEqual, runOnJS: tmp(tmp2[25]).runOnJS, handleStateUpdates: null };
              class E {
                constructor() {
                  items = [, ];
                  items[0] = closure_1_11;
                  items[1] = closure_1_8;
                  batchedStoreListener = new channelId(pipState[28]).BatchedStoreListener(items, () => {
                    closure_1_4({ focusedId: manuallyFocusedId, pipParticipantId: id.id });
                    const obj = { focusedId: manuallyFocusedId, pipParticipantId: id.id };
                  });
                  closure_0 = batchedStoreListener;
                  attachResult = batchedStoreListener.attach("thermal-state-reactions-" + closure_0);
                  return () => batchedStoreListener.detach();
                }
              }
              fn2.__closure = obj3;
              fn2.__workletHash = 5497185467806;
              fn2.__initData = __initData6;
              const animatedReaction = tmp(tmp2[25]).useAnimatedReaction(P, fn2);
              const tmpResult = tmp(tmp2[25]);
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
        closure_1_4({ focusedId: manuallyFocusedId, pipParticipantId: id.id });
        const obj = { focusedId: manuallyFocusedId, pipParticipantId: id.id };
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
  let obj = channelId(pipState[23]);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const focused = channelId.focused;
  const pipState = channelId.pipState;
  const manuallyFocusedId = channelId.manuallyFocusedId;
  let handleStateUpdates;
  let items = [channelId];
  handleStateUpdates = handleStateUpdates.useCallback((arg0) => {
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
          let tmp15 = isVideoEnabledResult;
          if (!isVideoEnabledResult) {
            tmp15 = tmp11;
          }
          if (!tmp15) {
            if (isVideoEnabledResult) {
              AudioActionCreatorsDefault.setVideoEnabled(false);
            }
            const result2 = EmbeddedActivitiesActionCreators.consumeRequestToReactToSeriousThermalState();
          } else {
            let obj = require;
            let result3 = dependencyMap;
            const designSystemsNotificationComponents = DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("VoicePanelControllerThermalState");
            const obj3 = ToastActionCreatorsDefault;
            if (designSystemsNotificationComponents) {
              const obj4 = { text: null, icon: null };
              const intl2 = obj(1126).intl;
              obj4.text = intl2.string(obj(1126).t.O2IlPT);
              obj4.icon = obj(4829).VideoSlashIcon;
              obj3.openMana("EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", obj4);
            } else {
              const obj5 = { key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", icon: _modDef4828, content: null, disableAnimations: true, toastDurationMs: 3000 };
              const intl = obj(1126).intl;
              obj5.content = intl.string(obj(1126).t.O2IlPT);
              obj3.open(obj5);
            }
            obj = obj(17394);
            result3 = obj.trackActivityThermalStateNoticeShown();
          }
        }
      }
    }
  }, items);
  const items1 = [manuallyFocusedId, pipState, handleStateUpdates, channelId];
  const effect = handleStateUpdates.useEffect(() => {
    const items = [ChannelCallLifecycleStore, ChannelRTCStore];
    const batchedStoreListener = new channelId(pipState[28]).BatchedStoreListener(items, () => {
      handleStateUpdates({ focusedId: manuallyFocusedId, pipParticipantId: id.id });
      const obj = { focusedId: manuallyFocusedId, pipParticipantId: id.id };
    });
    batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
    return () => batchedStoreListener.detach();
  }, items1);
  const fn = function f() {
    value = focused.get();
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
      tmp = arg1;
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj = closure_0(closure_2[26]);
      if (!obj.cheapWorkletArrayShallowEqual(channelId, tmp)) {
        tmp4 = closure_3;
        num = 2;
        tmp5 = closure_3(channelId, 2);
        [tmp6, tmp7] = tmp5;
        tmp2Result = tmp2(tmp3[25]);
        tmp8 = closure_4;
        obj1 = { focusedId: null, pipParticipantId: null };
        obj1.focusedId = tmp6;
        obj1.pipParticipantId = tmp7;
        tmp9 = tmp2Result.runOnJS(closure_4)(obj1);
      }
      return;
    }
  }
  let obj = channelId(pipState[25]);
  S.__closure = { cheapWorkletArrayShallowEqual: channelId(pipState[26]).cheapWorkletArrayShallowEqual, runOnJS: channelId(pipState[25]).runOnJS, handleStateUpdates };
  S.__workletHash = 12547034222966;
  S.__initData = __initData8;
  const animatedReaction = obj.useAnimatedReaction(fn, S);
});
ReactCompilerGating = fn(558);
let closure_44 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(8);
  noop.useRef(-1);
  const obj = require("c");
  sharedValue = require("ReanimatedRexport").useSharedValue(null);
  if (cResult[0] === arg0) {
    if (cResult[1] === sharedValue) {
      let tmp3 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function u() {
        return () => clearTimeout(ref.current);
      };
      const items = [];
      cResult[3] = fn2;
      cResult[4] = items;
      let tmp6 = items;
      let tmp5 = fn2;
    } else {
      tmp5 = cResult[3];
      tmp6 = cResult[4];
    }
    const layoutEffect = noop.useLayoutEffect(tmp5, tmp6);
    if (cResult[5] === tmp3) {
      if (cResult[6] === sharedValue) {
        let tmp8 = cResult[7];
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
    if (closure_0.get() === VoicePanelModes.PANEL) {
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
  const obj3 = require("ReanimatedRexport");
}) : ((arg0) => {
  _require = arg0;
  noop.useRef(-1);
  showFloatingCTA = require("ReanimatedRexport").useSharedValue(null);
  const items = [arg0, showFloatingCTA];
  const setShowFloatingCTA = noop.useCallback((arg0) => {
    if (closure_0.get() === VoicePanelModes.PANEL) {
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
  const layoutEffect = noop.useLayoutEffect(() => () => clearTimeout(ref.current), []);
  return { showFloatingCTA, setShowFloatingCTA };
});
ReactCompilerGating = fn(558);
let closure_45 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(576).c(9);
  channelId = channelId.channelId;
  const selectedMode = channelId.selectedMode;
  const manualFocusedItem = channelId.manualFocusedItem;
  dependencyMap = noop.useRef(null);
  if (cResult[0] === channelId) {
    if (cResult[1] === selectedMode) {
      let tmp2 = cResult[2];
    }
    if (cResult[3] === channelId) {
      if (cResult[4] === manualFocusedItem) {
        if (cResult[5] === selectedMode) {
          let tmp3 = cResult[6];
        }
        const layoutEffect = noop.useLayoutEffect(tmp2, tmp3);
        if (cResult[7] !== selectedMode) {
          const fn2 = function c() {
            closure_2.current = selectedMode;
          };
          cResult[7] = selectedMode;
          cResult[8] = fn2;
          let tmp5 = fn2;
        } else {
          tmp5 = cResult[8];
        }
        const layoutEffect1 = noop.useLayoutEffect(tmp5);
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
    let tmp = null != rTCConnection;
    if (tmp) {
      tmp = RTCConnectionStore.getChannelId() === channelId;
    }
    if (tmp) {
      if (ref.current !== VoicePanelModes.PIP) {
        if (selectedMode === VoicePanelModes.PIP) {
          rTCConnection.setPipOpen(true);
        }
      }
      let tmp7 = ref.current === VoicePanelModes.PIP;
      if (tmp7) {
        tmp7 = selectedMode !== VoicePanelModes.PIP;
      }
      if (tmp7) {
        rTCConnection.setPipOpen(false);
      }
    }
  };
  cResult[0] = channelId;
  cResult[1] = selectedMode;
  cResult[2] = fn;
  tmp2 = fn;
  const obj = channelId(576);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const selectedMode = channelId.selectedMode;
  noop.useRef(null);
  const items = [selectedMode, channelId.manualFocusedItem, channelId];
  const layoutEffect = noop.useLayoutEffect(() => {
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    let tmp = null != rTCConnection;
    if (tmp) {
      tmp = RTCConnectionStore.getChannelId() === channelId;
    }
    if (tmp) {
      if (ref.current !== VoicePanelModes.PIP) {
        if (selectedMode === VoicePanelModes.PIP) {
          rTCConnection.setPipOpen(true);
        }
      }
      let tmp7 = ref.current === VoicePanelModes.PIP;
      if (tmp7) {
        tmp7 = selectedMode !== VoicePanelModes.PIP;
      }
      if (tmp7) {
        rTCConnection.setPipOpen(false);
      }
    }
  }, items);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    closure_2.current = selectedMode;
  });
});
const __initData9 = { code: "function VoicePanelControllerTsx9(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}" };
const __initData10 = { code: "function VoicePanelControllerTsx10(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
const __initData11 = { code: "function VoicePanelControllerTsx11(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,_queueHideControls}=this.__closure;const specs=controlsSpecs.get();if(specs.locked)return;if(specs.mode!==VoicePanelControlsModes.FLOATING_DEFAULT)return;runOnJS(_queueHideControls)();}" };
const __initData12 = { code: "function VoicePanelControllerTsx12(){const{mode}=this.__closure;return mode.get();}" };
const __initData13 = { code: "function VoicePanelControllerTsx13(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}" };
const __initData14 = { code: "function VoicePanelControllerTsx14(){const{connected}=this.__closure;return connected.get();}" };
const __initData15 = { code: "function VoicePanelControllerTsx15(connected_0){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected_0?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}" };
ReactCompilerGating = fn(558);
let closure_55 = ReactCompilerGating.isReactCompilerEnabled() ? ((isConnected) => {
  const cResult = isConnected(setWindowState[23]).c(6);
  isConnected = isConnected.isConnected;
  const currentUpdatesRef = isConnected.currentUpdatesRef;
  setWindowState = isConnected.setWindowState;
  const setSafeAreaState = isConnected.setSafeAreaState;
  if (cResult[0] === currentUpdatesRef) {
    if (cResult[1] === isConnected) {
      if (cResult[2] === setSafeAreaState) {
        if (cResult[3] === setWindowState) {
          let tmp2 = cResult[4];
          let tmp3 = cResult[5];
        }
        const layoutEffect = noop.useLayoutEffect(tmp2, tmp3);
      }
    }
  }
  const fn = function n() {
    if (currentUpdatesRef.current.connected !== isConnected) {
      currentUpdatesRef.current.connected = tmp;
      setWindowState((safeAreaState) => {
        let windowState = safeAreaState;
        const windowDimensions = isConnected(setWindowState[39]).getWindowDimensions();
        ({ width, height } = windowDimensions);
        currentUpdatesRef.current.windowState = { width, height, landscape: width > height };
        const obj = isConnected(setWindowState[39]);
        if (!obj2.cheapWorkletShallowEqual(safeAreaState, currentUpdatesRef.current.windowState)) {
          windowState = currentUpdatesRef.current.windowState;
        }
        return windowState;
      });
      setSafeAreaState((safeAreaState) => {
        currentUpdatesRef.current.safeAreaState = isConnected(setWindowState[40]).getSafeAreaInsets();
        const obj = isConnected(setWindowState[40]);
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
  let obj = isConnected(setWindowState[23]);
}) : ((isConnected) => {
  isConnected = isConnected.isConnected;
  const currentUpdatesRef = isConnected.currentUpdatesRef;
  const setWindowState = isConnected.setWindowState;
  const setSafeAreaState = isConnected.setSafeAreaState;
  const items = [currentUpdatesRef, isConnected, setWindowState, setSafeAreaState];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (currentUpdatesRef.current.connected !== isConnected) {
      currentUpdatesRef.current.connected = tmp;
      setWindowState((safeAreaState) => {
        let windowState = safeAreaState;
        const windowDimensions = isConnected(setWindowState[39]).getWindowDimensions();
        ({ width, height } = windowDimensions);
        currentUpdatesRef.current.windowState = { width, height, landscape: width > height };
        const obj = isConnected(setWindowState[39]);
        if (!obj2.cheapWorkletShallowEqual(safeAreaState, currentUpdatesRef.current.windowState)) {
          windowState = currentUpdatesRef.current.windowState;
        }
        return windowState;
      });
      setSafeAreaState((safeAreaState) => {
        currentUpdatesRef.current.safeAreaState = isConnected(setWindowState[40]).getSafeAreaInsets();
        const obj = isConnected(setWindowState[40]);
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
ReactCompilerGating = fn(558);
let closure_58 = ReactCompilerGating.isReactCompilerEnabled() ? ((windowDimensions) => {
  const cResult = windowDimensions(contentDimensions[23]).c(43);
  windowDimensions = windowDimensions.windowDimensions;
  const safeArea = windowDimensions.safeArea;
  contentDimensions = windowDimensions.contentDimensions;
  const isConnected = windowDimensions.isConnected;
  const layoutManager = windowDimensions.layoutManager;
  ({ items, pushToTalk: width } = windowDimensions);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let fn = function c() {
      windowDimensions = windowDimensions(contentDimensions[39]).getWindowDimensions();
      ({ width, height } = windowDimensions);
      const size = { width, height, landscape: width > height };
      return size;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp6 = isConnected(layoutManager.useState(first), 2);
  const first1 = tmp6[0];
  closure_6 = tmp8;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let safeAreaInsets = tmp(tmp2[40]).getSafeAreaInsets();
    cResult[1] = safeAreaInsets;
    let tmp9 = safeAreaInsets;
    const tmpResult = tmp(tmp2[40]);
  } else {
    tmp9 = cResult[1];
  }
  const tmp5Result = isConnected(layoutManager.useState(tmp9), 2);
  const rect = tmp5Result[0];
  closure_8 = tmp12;
  let obj = windowDimensions(contentDimensions[23]);
  const managerSubscription = windowDimensions(contentDimensions[43]).useManagerSubscription(layoutManager);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let size = { width: 0, height: 0 };
    cResult[2] = size;
    let tmp14 = size;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] === isConnected) {
    if (cResult[4] === managerSubscription) {
      if (cResult[5] === rect) {
        if (cResult[6] === first1) {
          let tmp15 = cResult[7];
        }
        if (cResult[8] !== isConnected) {
          let obj3 = { isConnected, currentUpdatesRef: ref, setWindowState: tmp8, setSafeAreaState: tmp12 };
          cResult[8] = isConnected;
          cResult[9] = obj3;
          let tmp17 = obj3;
        } else {
          tmp17 = cResult[9];
        }
        closure_55(tmp17);
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                windowDimensions(contentDimensions[48]).batchUpdates(() => { ... });
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
                windowDimensions(contentDimensions[48]).batchUpdates(() => { ... });
              }, 60);
              return;
            }
          }
        }
        F = tmp20;
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                windowDimensions(contentDimensions[48]).batchUpdates(() => { ... });
              }, 60);
              return;
            }
          }
          const items1 = [tmp20];
          cResult[11] = tmp23;
          cResult[12] = items1;
          let tmp22 = items1;
        } else {
          class F {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                windowDimensions(contentDimensions[48]).batchUpdates(() => { ... });
              }, 60);
              return;
            }
          }
          tmp22 = cResult[12];
        }
        const layoutEffect = obj2.useLayoutEffect(tmp23, tmp22);
        const id = obj2.useId();
        if (cResult[13] === isConnected) {
          class F {
            constructor() {
              clearTimeoutResult = clearTimeout(closure_10.current.timeout);
              closure_10.current.timeout = setTimeout(() => {
                clearTimeout(ref.current.timeout);
                windowDimensions(contentDimensions[48]).batchUpdates(() => { ... });
              }, 60);
              return;
            }
          }
          const layoutEffect1 = obj2.useLayoutEffect(U, tmp26);
          if (cResult[17] === items) {
            class F {
              constructor() {
                clearTimeoutResult = clearTimeout(closure_10.current.timeout);
                closure_10.current.timeout = setTimeout(() => {
                  clearTimeout(ref.current.timeout);
                  windowDimensions(contentDimensions[48]).batchUpdates(() => { ... });
                }, 60);
                return;
              }
            }
          }
          let obj4 = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null, safeAreaTop: null, safeAreaBottom: null, controlBarSize: null };
          ({ width: obj8.windowWidth, height: obj8.windowHeight } = first1);
          ({ left: obj8.safeAreaLeft, right: obj8.safeAreaRight, top: obj8.safeAreaTop, bottom: obj8.safeAreaBottom } = rect);
          obj4.controlBarSize = width ? closure_20 : closure_19;
          obj4 = layoutManager.updateState(items, obj4);
          cResult[17] = items;
          cResult[18] = layoutManager;
          class U {
            constructor() {
              if (isConnected) {
                tmp = closure_10;
                state = closure_10.getState();
                obj1 = { key: null, lockEnabled: true };
                tmp2 = closure_12;
                obj1.key = closure_12;
                safeAreaDisableLock = state.requestSafeAreaDisableLock(obj1);
                return () => {
                  state = ref.getState();
                  const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
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
          ({ height: tmp3[24], width } = first1);
          cResult[25] = width;
          cResult[26] = obj4;
        }
        class U {
          constructor() {
            if (isConnected) {
              tmp = closure_10;
              state = closure_10.getState();
              obj1 = { key: null, lockEnabled: true };
              tmp2 = closure_12;
              obj1.key = closure_12;
              safeAreaDisableLock = state.requestSafeAreaDisableLock(obj1);
              return () => {
                state = ref.getState();
                const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
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
        ref = obj2.useRef(tmp15);
        tmp26 = items2;
      }
    }
  }
  const obj5 = { timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: first1, safeAreaState: rect, contentDimensions: tmp14 };
  cResult[3] = isConnected;
  cResult[4] = managerSubscription;
  cResult[5] = rect;
  cResult[6] = first1;
  cResult[7] = obj5;
  tmp15 = obj5;
  const tmpResult2 = windowDimensions(contentDimensions[43]);
}) : ((windowDimensions) => {
  windowDimensions = windowDimensions.windowDimensions;
  const safeArea = windowDimensions.safeArea;
  const contentDimensions = windowDimensions.contentDimensions;
  const isConnected = windowDimensions.isConnected;
  const layoutManager = windowDimensions.layoutManager;
  ({ items, pushToTalk } = windowDimensions);
  let tmp = isConnected(layoutManager.useState(() => {
    windowDimensions = windowDimensions(contentDimensions[39]).getWindowDimensions();
    ({ width, height } = windowDimensions);
    size = { width, height, landscape: width > height };
    return size;
  }), 2);
  let size = tmp[0];
  closure_6 = tmp2;
  const tmp3 = isConnected(layoutManager.useState(windowDimensions(contentDimensions[40]).getSafeAreaInsets()), 2);
  const rect = tmp3[0];
  closure_8 = tmp4;
  let obj2 = windowDimensions(contentDimensions[40]);
  const managerSubscription = windowDimensions(contentDimensions[43]).useManagerSubscription(layoutManager);
  const ref = layoutManager.useRef({ timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: size, safeAreaState: rect, contentDimensions: { width: 0, height: 0 } });
  closure_55({ isConnected, currentUpdatesRef: ref, setWindowState: tmp[1], setSafeAreaState: tmp3[1] });
  const callback = layoutManager.useCallback(() => {
    clearTimeout(ref.current.timeout);
    ref.current.timeout = setTimeout(() => {
      clearTimeout(ref.current.timeout);
      windowDimensions(contentDimensions[48]).batchUpdates(() => {
        closure_1_6((safeAreaState2) => {
          let windowState = safeAreaState2;
          if (!obj.cheapWorkletShallowEqual(ref.current.windowState, safeAreaState2)) {
            windowState = ref.current.windowState;
          }
          return windowState;
        });
        closure_1_8((safeAreaState2) => {
          let safeAreaState = safeAreaState2;
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
    closure_0 = safeArea(contentDimensions[49])(function updateSafeAreas(safeAreaState2) {
      if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaState2)) {
        const obj2 = {};
        const merged = Object.assign(safeAreaState2);
        ref.current.safeAreaState = obj2;
        callback();
      }
      obj = windowDimensions(contentDimensions[26]);
    });
    const safeAreaInsets = windowDimensions(contentDimensions[40]).getSafeAreaInsets();
    let obj = windowDimensions(contentDimensions[40]);
    if (!obj2.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaInsets)) {
      let obj3 = {};
      let merged = Object.assign(safeAreaInsets);
      ref.current.safeAreaState = obj3;
      callback();
    }
    function updateWindowDimensions() {
      windowDimensions = arg0;
      if (arg0 === undefined) {
        windowDimensions = windowDimensions(contentDimensions[39]).getWindowDimensions();
        const obj = windowDimensions(contentDimensions[39]);
      }
      ({ width, height } = windowDimensions);
      size = { width, height, landscape: width > height };
      if (!obj3.cheapWorkletShallowEqual(ref.current.windowState, size)) {
        ref.current.windowState = size;
        callback();
      }
      obj3 = windowDimensions(contentDimensions[26]);
    }
    closure_1 = safeArea(contentDimensions[50])(updateWindowDimensions);
    obj2 = windowDimensions(contentDimensions[26]);
    windowDimensions = windowDimensions(contentDimensions[39]).getWindowDimensions();
    ({ width, height } = windowDimensions);
    size = { width, height, landscape: width > height };
    const tmp3Result = windowDimensions(contentDimensions[39]);
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
      state = SafeAreaDisabledStore.getState();
      const obj = { key: id, lockEnabled: true };
      let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
      return () => {
        state = ref.getState();
        const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
      };
    }
  }, items2);
  const updateStateResult = layoutManager.updateState(items, { windowWidth: size.width, windowHeight: size.height, safeAreaLeft: rect.left, safeAreaRight: rect.right, safeAreaTop: rect.top, safeAreaBottom: rect.bottom, controlBarSize: pushToTalk ? closure_20 : closure_19 });
  c13 = updateStateResult;
  const items3 = [contentDimensions, updateStateResult, managerSubscription, layoutManager, safeArea, rect, windowDimensions, size, isConnected];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    function executeLayoutManagerEffect() {
      return layoutManager.handleLayoutEffect();
    }
    ref.current.layoutKey = managerSubscription;
    const fn = function t(arg0) {
      ({ windowState, safeAreaState, contentState } = arg0);
      let tmp = isConnected;
      if (isConnected) {
        tmp = !cheapWorkletShallowEqual.cheapWorkletShallowEqual(contentDimensions.get(), contentState);
      }
      if (tmp) {
        const result = contentDimensions.set(contentState);
      }
      if (!obj2.cheapWorkletShallowEqual(windowDimensions.get(), windowState)) {
        const result1 = windowDimensions.set(windowState);
      }
      obj2 = cheapWorkletShallowEqual;
      if (!obj4.cheapWorkletShallowEqual(safeArea.get(), safeAreaState)) {
        const result2 = safeArea.set(safeAreaState);
      }
      obj4 = cheapWorkletShallowEqual;
      ReanimatedRexport.runOnJS(executeLayoutManagerEffect)();
    };
    let obj = windowDimensions(contentDimensions[25]);
    fn.__closure = { isConnected, cheapWorkletShallowEqual: windowDimensions(contentDimensions[26]).cheapWorkletShallowEqual, contentDimensions, windowDimensions: executeLayoutManagerEffect, safeArea, runOnJS: windowDimensions(contentDimensions[25]).runOnJS, executeLayoutManagerEffect };
    fn.__workletHash = 8930741106171;
    fn.__initData = __initData;
    obj.runOnUI(fn)({ windowState: size, safeAreaState: rect, contentState });
  }, items3);
  const items4 = [layoutManager];
  const effect = obj.useEffect(() => {
    function checkDimensions() {
      if (!c3) {
        size = windowDimensions(contentDimensions[39]).getWindowDimensions();
        const width = size.width;
        const height = size.height;
        let window_height = height;
        const result = checkDimensions.checkDimensionsMismatch(width, height);
        closure_2 = result;
        if (null != result) {
          const _setTimeout = setTimeout;
          window_height = setTimeout(() => {
            windowDimensions = useWindowDimensions.getWindowDimensions();
            ({ width, height } = windowDimensions);
            let tmp4 = width === width;
            if (tmp4) {
              tmp4 = window_height === height;
            }
            if (tmp4) {
              if (null != layoutManager.checkDimensionsMismatch(width, height)) {
                c3 = true;
                const obj4 = { layout_width: null, layout_height: null, window_width: null, window_height: null, was_dirty: null };
                ({ staleWidth: obj3.layout_width, staleHeight: obj3.layout_height } = result);
                obj4.window_width = width;
                obj4.window_height = window_height;
                obj4.was_dirty = result.wasDirty;
                AnalyticsUtilsDefault.track(constants.VOICE_PANEL_LAYOUT_DESYNC, obj4);
                c1 = null;
              }
            }
          }, 250);
        }
        let obj = windowDimensions(contentDimensions[39]);
      }
    }
    if (!windowDimensions(contentDimensions[51]).isStable) {
      let _setInterval = setInterval;
      let interval = setInterval(checkDimensions, 1000);
      c1 = null;
      closure_2 = size.addEventListener("change", (event) => {
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
      c3 = false;
      return () => {
        clearInterval(c0);
        clearTimeout(c1);
        closure_2.remove();
      };
    }
  }, items4);
  const layoutEffect3 = obj.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
});
ReactCompilerGating = fn(558);
let closure_59 = ReactCompilerGating.isReactCompilerEnabled() ? ((isConnected) => {
  const cResult = isConnected(manualFocusedItem[23]).c(13);
  isConnected = isConnected.isConnected;
  const selectedMode = isConnected.selectedMode;
  manualFocusedItem = isConnected.manualFocusedItem;
  const isNonVoiceEmbeddedActivityInPanelMode = isConnected.isNonVoiceEmbeddedActivityInPanelMode;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function s() {
      currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
      applicationId = undefined;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      const obj2 = { applicationId, instanceId: compositeInstanceId, activityOrientationLockState: null };
      if (null != applicationId) {
        let UNLOCKED2 = currentEmbeddedActivity.getOrientationLockStateForApp(applicationId);
        if (UNLOCKED2 == null) {
          UNLOCKED2 = constants.UNLOCKED;
        }
        let UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = constants.UNLOCKED;
      }
      obj2.activityOrientationLockState = UNLOCKED;
      return obj2;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = isConnected(manualFocusedItem[23]);
  const stateFromStoresObject = isConnected(manualFocusedItem[28]).useStateFromStoresObject(tmp4, tmp5);
  let applicationId = stateFromStoresObject.applicationId;
  const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
  const instanceId = stateFromStoresObject.instanceId;
  if (cResult[2] === activityOrientationLockState) {
    if (cResult[3] === applicationId) {
      if (cResult[4] === instanceId) {
        if (cResult[5] === isConnected) {
          if (cResult[6] === isNonVoiceEmbeddedActivityInPanelMode) {
            if (cResult[7] === manualFocusedItem) {
              if (cResult[8] === selectedMode) {
                let tmp8 = cResult[9];
                let tmp9 = cResult[10];
              }
              const layoutEffect = applicationId.useLayoutEffect(tmp8, tmp9);
              const _Symbol = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const fn3 = function w() {
                  return () => {
                    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
                    let isGuildStageVoiceResult;
                    if (channel != null) {
                      isGuildStageVoiceResult = channel.isGuildStageVoice();
                    }
                    if (!isGuildStageVoiceResult) {
                      const result = isConnected(manualFocusedItem[53]).restoreDefaultOrientation();
                      const obj2 = isConnected(manualFocusedItem[53]);
                    }
                  };
                };
                const items1 = [];
                cResult[11] = fn3;
                cResult[12] = items1;
                let tmp12 = items1;
                let tmp11 = fn3;
              } else {
                tmp11 = cResult[11];
                tmp12 = cResult[12];
              }
              const layoutEffect1 = applicationId.useLayoutEffect(tmp11, tmp12);
            }
          }
        }
      }
    }
  }
  const fn2 = function _() {
    let tmp = isNonVoiceEmbeddedActivityInPanelMode;
    if (!isNonVoiceEmbeddedActivityInPanelMode) {
      const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      tmp = isGuildStageVoiceResult;
    }
    if (!tmp) {
      if (selectedMode === VoicePanelModes.PANEL) {
        if (isConnected) {
          if (null != applicationId) {
            const obj = { applicationId: tmp12, instanceId };
            if (manualFocusedItem === obj3.getEmbeddedActivityParticipantId(obj)) {
              applyActivityOrientationLockDefault(activityOrientationLockState);
            }
            obj3 = ChannelRTCParticipants;
          }
          DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      }
      const result = DeviceOrientation.restoreDefaultOrientation();
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
  const tmpResult = isConnected(manualFocusedItem[28]);
}) : ((isConnected) => {
  isConnected = isConnected.isConnected;
  const selectedMode = isConnected.selectedMode;
  const manualFocusedItem = isConnected.manualFocusedItem;
  const isNonVoiceEmbeddedActivityInPanelMode = isConnected.isNonVoiceEmbeddedActivityInPanelMode;
  const items = [EmbeddedActivitiesStore];
  const stateFromStoresObject = isConnected(manualFocusedItem[28]).useStateFromStoresObject(items, () => {
    currentEmbeddedActivity = currentEmbeddedActivity.getCurrentEmbeddedActivity();
    applicationId = undefined;
    if (currentEmbeddedActivity != null) {
      applicationId = currentEmbeddedActivity.applicationId;
    }
    let compositeInstanceId;
    if (currentEmbeddedActivity != null) {
      compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
    }
    const obj2 = { applicationId, instanceId: compositeInstanceId, activityOrientationLockState: null };
    if (null != applicationId) {
      let UNLOCKED2 = currentEmbeddedActivity.getOrientationLockStateForApp(applicationId);
      if (UNLOCKED2 == null) {
        UNLOCKED2 = constants.UNLOCKED;
      }
      let UNLOCKED = UNLOCKED2;
    } else {
      UNLOCKED = constants.UNLOCKED;
    }
    obj2.activityOrientationLockState = UNLOCKED;
    return obj2;
  });
  let applicationId = stateFromStoresObject.applicationId;
  const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
  const instanceId = stateFromStoresObject.instanceId;
  const items1 = [applicationId, isConnected, selectedMode, activityOrientationLockState, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode, instanceId];
  const layoutEffect = applicationId.useLayoutEffect(() => {
    let tmp = isNonVoiceEmbeddedActivityInPanelMode;
    if (!isNonVoiceEmbeddedActivityInPanelMode) {
      const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      tmp = isGuildStageVoiceResult;
    }
    if (!tmp) {
      if (selectedMode === VoicePanelModes.PANEL) {
        if (isConnected) {
          if (null != applicationId) {
            const obj = { applicationId: tmp12, instanceId };
            if (manualFocusedItem === obj3.getEmbeddedActivityParticipantId(obj)) {
              applyActivityOrientationLockDefault(activityOrientationLockState);
            }
            obj3 = ChannelRTCParticipants;
          }
          DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
        }
      }
      const result = DeviceOrientation.restoreDefaultOrientation();
    }
  }, items1);
  const layoutEffect1 = applicationId.useLayoutEffect(() => () => {
    channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (!isGuildStageVoiceResult) {
      const result = isConnected(manualFocusedItem[53]).restoreDefaultOrientation();
      const obj2 = isConnected(manualFocusedItem[53]);
    }
  }, []);
});
const __initData16 = { code: "function VoicePanelControllerTsx18(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}" };
const __initData17 = { code: "function VoicePanelControllerTsx19(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else{if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;bb35:switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:{if(!isConnected){previousMode=VoicePanelModes.PANEL;}break bb35;}default:{previousMode=VoicePanelModes.PANEL;}}runOnJS(setMode)(previousMode);}else{if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}}}" };
const __initData18 = { code: "function VoicePanelControllerTsx20(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}" };
const __initData19 = { code: "function VoicePanelControllerTsx21(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}" };
ReactCompilerGating = fn(558);
let closure_64 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(transitionCleanUp[23]).c(9);
  channelId = channelId.channelId;
  const transitionState = channelId.transitionState;
  transitionCleanUp = channelId.transitionCleanUp;
  const connected = channelId.connected;
  const mode = channelId.mode;
  const setMode = channelId.setMode;
  let obj = channelId(transitionCleanUp[23]);
  const sharedValue = channelId(transitionCleanUp[25]).useSharedValue(transitionState);
  if (cResult[0] === channelId) {
    if (cResult[1] === sharedValue) {
      if (cResult[2] === transitionCleanUp) {
        if (cResult[3] === transitionState) {
          let tmp5 = cResult[4];
          let tmp6 = cResult[5];
        }
        const layoutEffect = mode.useLayoutEffect(tmp5, tmp6);
        if (cResult[6] !== channelId) {
          const fn2 = function l() {
            return () => {
              state = state.getState();
              const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + channelId });
            };
          };
          let items = [channelId];
          cResult[6] = channelId;
          cResult[7] = fn2;
          cResult[8] = items;
          let tmp9 = items;
          let tmp8 = fn2;
        } else {
          tmp8 = cResult[7];
          tmp9 = cResult[8];
        }
        const layoutEffect1 = mode.useLayoutEffect(tmp8, tmp9);
        const fn3 = function f() {
          const items = [connected.get(), mode.get(), sharedValue.get()];
          return items;
        };
        const obj4 = { connected, mode, sharedTransitionState: sharedValue };
        fn3.__closure = obj4;
        fn3.__workletHash = 7872922764858;
        fn3.__initData = __initData16;
        const fn4 = function h(arg0, arg1) {
          if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
            [tmp6, tmp7, tmp8] = arg0;
            if (tmp8 === native.TransitionStates.YEETED) {
              if (tmp7 !== VoicePanelModes.DISMISSED) {
                ReanimatedRexport.runOnJS(setMode)(tmp16.DISMISSED);
                const tmpResult = ReanimatedRexport;
              }
            } else if (tmp7 === VoicePanelModes.DISMISSED) {
              let PANEL1;
              if (arg1 != null) {
                PANEL1 = arg1[1];
              }
              if (PANEL1 == null) {
                PANEL1 = VoicePanelModes.PANEL;
              }
              if (VoicePanelModes.PANEL !== PANEL1) {
                if (VoicePanelModes.PIP !== PANEL1) {
                  let PANEL = VoicePanelModes.PANEL;
                }
                ReanimatedRexport.runOnJS(setMode)(PANEL);
                const tmpResult3 = ReanimatedRexport;
              }
              PANEL = PANEL1;
              if (!tmp6) {
                PANEL = VoicePanelModes.PANEL;
              }
            } else {
              let tmp9 = tmp6;
              if (!tmp6) {
                let first;
                if (arg1 != null) {
                  first = arg1[0];
                }
                tmp9 = true !== first;
              }
              if (!tmp9) {
                tmp9 = tmp7 !== VoicePanelModes.PIP;
              }
              if (!tmp9) {
                ReanimatedRexport.runOnJS(setMode)(VoicePanelModes.PANEL);
                const tmpResult4 = ReanimatedRexport;
              }
            }
            const tmp5 = _slicedToArray(arg0, 3);
          }
          obj = cheapWorkletShallowEqual;
          tmp3 = arg1;
        };
        const obj5 = { cheapWorkletArrayShallowEqual: tmp(tmp2[26]).cheapWorkletArrayShallowEqual, TransitionStates: tmp(tmp2[56]).TransitionStates, VoicePanelModes, runOnJS: tmp(tmp2[25]).runOnJS, setMode };
        fn4.__closure = obj5;
        fn4.__workletHash = 3397995101267;
        fn4.__initData = __initData17;
        const animatedReaction = tmp(tmp2[25]).useAnimatedReaction(fn3, fn4);
        let tmpResult = tmp(tmp2[25]);
      }
    }
  }
  const fn = function s() {
    const result = sharedValue.set(transitionState);
    if (transitionState === native.TransitionStates.YEETED) {
      state = AppFreezeStore.getState();
      const obj = { lockEnabled: false, key: null };
      const _HermesInternal = HermesInternal;
      obj.key = "voice-panel-freeze-" + channelId;
      const freezeLock = state.requestFreezeLock(obj);
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
  const obj2 = channelId(transitionCleanUp[25]);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const transitionState = channelId.transitionState;
  const transitionCleanUp = channelId.transitionCleanUp;
  const connected = channelId.connected;
  const mode = channelId.mode;
  const setMode = channelId.setMode;
  const sharedValue = channelId(transitionCleanUp[25]).useSharedValue(transitionState);
  let items = [transitionState, sharedValue, transitionCleanUp, channelId];
  const layoutEffect = mode.useLayoutEffect(() => {
    const result = sharedValue.set(transitionState);
    if (transitionState === native.TransitionStates.YEETED) {
      state = AppFreezeStore.getState();
      const obj = { lockEnabled: false, key: null };
      const _HermesInternal = HermesInternal;
      obj.key = "voice-panel-freeze-" + channelId;
      const freezeLock = state.requestFreezeLock(obj);
      const _setTimeout = setTimeout;
      const timeout = setTimeout(transitionCleanUp, 500);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const items1 = [channelId];
  const layoutEffect1 = mode.useLayoutEffect(() => () => {
    state = state.getState();
    const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + channelId });
  }, items1);
  let obj = channelId(transitionCleanUp[25]);
  const fn = function p() {
    const items = [connected.get(), mode.get(), sharedValue.get()];
    return items;
  };
  fn.__closure = { connected, mode, sharedTransitionState: sharedValue };
  fn.__workletHash = 1059965238065;
  fn.__initData = __initData18;
  const fn2 = function f(arg0, arg1) {
    if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
      [tmp6, tmp7, tmp8] = arg0;
      if (tmp8 === native.TransitionStates.YEETED) {
        if (tmp7 !== VoicePanelModes.DISMISSED) {
          ReanimatedRexport.runOnJS(setMode)(tmp16.DISMISSED);
          const tmpResult = ReanimatedRexport;
        }
      } else if (tmp7 === VoicePanelModes.DISMISSED) {
        let PANEL1;
        if (arg1 != null) {
          PANEL1 = arg1[1];
        }
        if (PANEL1 == null) {
          PANEL1 = VoicePanelModes.PANEL;
        }
        if (VoicePanelModes.PANEL !== PANEL1) {
          if (VoicePanelModes.PIP !== PANEL1) {
            let PANEL = VoicePanelModes.PANEL;
          }
          ReanimatedRexport.runOnJS(setMode)(PANEL);
          const tmpResult3 = ReanimatedRexport;
        }
        PANEL = PANEL1;
        if (!tmp6) {
          PANEL = VoicePanelModes.PANEL;
        }
      } else {
        let tmp9 = tmp6;
        if (!tmp6) {
          let first;
          if (arg1 != null) {
            first = arg1[0];
          }
          tmp9 = true !== first;
        }
        if (!tmp9) {
          tmp9 = tmp7 !== VoicePanelModes.PIP;
        }
        if (!tmp9) {
          ReanimatedRexport.runOnJS(setMode)(VoicePanelModes.PANEL);
          const tmpResult4 = ReanimatedRexport;
        }
      }
      const tmp5 = _slicedToArray(arg0, 3);
    }
    obj = cheapWorkletShallowEqual;
    tmp3 = arg1;
  };
  const obj2 = channelId(transitionCleanUp[25]);
  fn2.__closure = { cheapWorkletArrayShallowEqual: channelId(transitionCleanUp[26]).cheapWorkletArrayShallowEqual, TransitionStates: channelId(transitionCleanUp[56]).TransitionStates, VoicePanelModes, runOnJS: channelId(transitionCleanUp[25]).runOnJS, setMode };
  fn2.__workletHash = 17265790500356;
  fn2.__initData = __initData19;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
});
ReactCompilerGating = fn(558);
let closure_65 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(focused[23]).c(26);
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ layoutManager, focused } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelRTCStore.getSelectedParticipantId(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = guildId(focused[23]);
  const stateFromStores = guildId(focused[28]).useStateFromStores(first, tmp6);
  if (cResult[3] === channelId) {
    if (cResult[4] === guildId) {
      let tmp8 = cResult[5];
    }
    noop = tmp8;
    AppState = noop.useRef(undefined);
    if (cResult[6] === layoutManager) {
      if (cResult[7] === stateFromStores) {
        let tmp9 = cResult[8];
      }
      closure_6 = tmp9;
      if (cResult[9] === focused) {
        if (cResult[10] === stateFromStores) {
          if (cResult[11] === tmp9) {
            let tmp13 = cResult[12];
            let tmp14 = cResult[13];
          }
          const layoutEffect = obj3.useLayoutEffect(tmp13, tmp14);
          class A {
            constructor() {
              tmp2 = null;
              if (null != closure_3) {
                obj = { id: null };
                obj.id = tmp;
                tmp3 = closure_6;
                tmp4 = obj;
                merged = Object.assign(closure_6);
                tmp2 = obj;
              }
              obj2 = closure_0(closure_2[26]);
              tmp6 = tmp2;
              current = closure_5.current;
              tmp7 = closure_5;
              if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
                tmp7.current = tmp2;
                tmp8 = focused;
                result = focused.set(tmp2);
              }
              return;
            }
          }
          EmbeddedActivitiesStore = tmp17;
          if (cResult[14] === tmp17) {
            if (cResult[15] === stateFromStores) {
              if (cResult[16] === tmp8) {
                let tmp18 = cResult[17];
                let tmp19 = cResult[18];
              }
              const effect = obj3.useEffect(tmp18, tmp19);
              if (cResult[19] === channelId) {
                if (cResult[20] === tmp8) {
                  let tmp21 = cResult[21];
                  let tmp22 = cResult[22];
                }
                const effect1 = obj3.useEffect(tmp22, tmp21);
                if (cResult[23] === stateFromStores) {
                  if (cResult[24] === tmp8) {
                    let tmp25 = cResult[25];
                  }
                  return tmp25;
                }
                class A {
                  constructor() {
                    tmp2 = null;
                    if (null != closure_3) {
                      obj = { id: null };
                      obj.id = tmp;
                      tmp3 = closure_6;
                      tmp4 = obj;
                      merged = Object.assign(closure_6);
                      tmp2 = obj;
                    }
                    obj2 = closure_0(closure_2[26]);
                    tmp6 = tmp2;
                    current = closure_5.current;
                    tmp7 = closure_5;
                    if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
                      tmp7.current = tmp2;
                      tmp8 = focused;
                      result = focused.set(tmp2);
                    }
                    return;
                  }
                }
                tmp26[0] = tmp8;
                tmp26[1] = stateFromStores;
                class M {
                  constructor() {
                    if (null != closure_3) {
                      tmp = closure_7;
                      if (!closure_7) {
                        tmp2 = closure_4;
                        tmp3 = closure_4(null);
                      }
                    }
                    return;
                  }
                }
                cResult[23] = stateFromStores;
                cResult[24] = tmp8;
                cResult[25] = tmp26;
                tmp25 = tmp26;
              }
              class A {
                constructor() {
                  tmp2 = null;
                  if (null != closure_3) {
                    obj = { id: null };
                    obj.id = tmp;
                    tmp3 = closure_6;
                    tmp4 = obj;
                    merged = Object.assign(closure_6);
                    tmp2 = obj;
                  }
                  obj2 = closure_0(closure_2[26]);
                  tmp6 = tmp2;
                  current = closure_5.current;
                  tmp7 = closure_5;
                  if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
                    tmp7.current = tmp2;
                    tmp8 = focused;
                    result = focused.set(tmp2);
                  }
                  return;
                }
              }
              const items1 = [channelId, ];
              class M {
                constructor() {
                  if (null != closure_3) {
                    tmp = closure_7;
                    if (!closure_7) {
                      tmp2 = closure_4;
                      tmp3 = closure_4(null);
                    }
                  }
                  return;
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
              if (null != closure_3) {
                tmp = closure_7;
                if (!closure_7) {
                  tmp2 = closure_4;
                  tmp3 = closure_4(null);
                }
              }
              return;
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
          tmp2 = null;
          if (null != closure_3) {
            obj = { id: null };
            obj.id = tmp;
            tmp3 = closure_6;
            tmp4 = obj;
            merged = Object.assign(closure_6);
            tmp2 = obj;
          }
          obj2 = closure_0(closure_2[26]);
          tmp6 = tmp2;
          current = closure_5.current;
          tmp7 = closure_5;
          if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
            tmp7.current = tmp2;
            tmp8 = focused;
            result = focused.set(tmp2);
          }
          return;
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
    const targetDimensions = layoutManager.getTargetDimensions(tmp11);
    cResult[6] = layoutManager;
    cResult[7] = stateFromStores;
    cResult[8] = targetDimensions;
    tmp9 = targetDimensions;
  }
  const fn2 = function _(id2) {
    let result = null == id2;
    if (!result) {
      result = useIsVoicePanelParticipantFocusable.isVoicePanelParticipantFocusable(guildId, channelId, id2);
    }
    if (result) {
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channelId, id2);
    }
  };
  cResult[3] = channelId;
  cResult[4] = guildId;
  cResult[5] = fn2;
  tmp8 = fn2;
  const tmpResult = guildId(focused[28]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  ({ layoutManager, focused } = guildId);
  let setFocused;
  const items = [ChannelRTCStore];
  const manualFocusedItem = guildId(focused[28]).useStateFromStores(items, () => ChannelRTCStore.getSelectedParticipantId(channelId));
  const items1 = [guildId, channelId];
  setFocused = setFocused.useCallback((id2) => {
    let result = null == id2;
    if (!result) {
      result = useIsVoicePanelParticipantFocusable.isVoicePanelParticipantFocusable(guildId, channelId, id2);
    }
    if (result) {
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channelId, id2);
    }
  }, items1);
  setFocused.useRef(undefined);
  const targetDimensions = layoutManager.getTargetDimensions(manualFocusedItem);
  const items2 = [focused, manualFocusedItem, targetDimensions];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let tmp2 = null;
    if (null != manualFocusedItem) {
      const obj = { id: tmp };
      const merged = Object.assign(targetDimensions);
      tmp2 = obj;
    }
    const current = ref.current;
    if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
      ref.current = tmp2;
      const result = focused.set(tmp2);
    }
    obj2 = cheapWorkletShallowEqual;
    tmp6 = tmp2;
  }, items2);
  const tmp7 = channelId(focused[57])(guildId, channelId, manualFocusedItem);
  closure_7 = tmp7;
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
ReactCompilerGating = fn(558);
let closure_66 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(mode[23]).c(17);
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
      return voicePanelsPIP.has(channelId) ? VoicePanelModes.PIP : VoicePanelModes.PANEL;
    };
    cResult[0] = channelId;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = connected(transitionState.useState(tmp2), 2);
  const selectedMode = tmp3[0];
  closure_8 = tmp5;
  if (cResult[2] === connected) {
    if (cResult[3] === isConnected) {
      if (cResult[4] === mode) {
        if (cResult[5] === selectedMode) {
          if (cResult[6] === transitionState) {
            let tmp6 = cResult[7];
          }
          const layoutEffect = transitionState.useLayoutEffect(tmp6);
          if (cResult[8] === channelId) {
            if (cResult[9] === connected) {
              if (cResult[10] === controlsSpecs) {
                if (cResult[11] === mode) {
                  if (cResult[12] === setControlsMode) {
                    let tmp8 = cResult[13];
                  }
                  if (cResult[14] === tmp8) {
                    if (cResult[15] === selectedMode) {
                      let tmp9 = cResult[16];
                    }
                    return tmp9;
                  }
                  const obj3 = { selectedMode, setMode: tmp5, dismissPanel: tmp8 };
                  cResult[14] = tmp8;
                  cResult[15] = selectedMode;
                  cResult[16] = obj3;
                  tmp9 = obj3;
                }
              }
            }
          }
          const fn2 = function w() {
            if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
              const obj = { mode: tmp.FLOATING_DEFAULT };
              setControlsMode(obj);
              let flag = true;
            } else if (connected.get()) {
              let flag2 = mode.get() === VoicePanelModes.PANEL;
              if (flag2) {
                closure_8(tmp7.PIP);
                flag2 = true;
              }
              flag = flag2;
            } else {
              state = VoicePanelStore.getState();
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
      result = mode.set(closure_7);
      if (transitionState !== closure_0(closure_2[56]).TransitionStates.YEETED) {
        tmp2 = connected;
        tmp3 = isConnected;
        result1 = connected.set(isConnected);
      }
      return;
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
  channelId = channelId.channelId;
  ({ isConnected: importDefault, mode } = channelId);
  const connected = channelId.connected;
  ({ transitionState: noop, controlsSpecs } = channelId);
  const setControlsMode = channelId.setControlsMode;
  const tmp = connected(noop.useState(() => {
    const voicePanelsPIP = VoicePanelStore.getState().voicePanelsPIP;
    return voicePanelsPIP.has(channelId) ? VoicePanelModes.PIP : VoicePanelModes.PANEL;
  }), 2);
  const selectedMode = tmp[0];
  closure_8 = tmp3;
  const layoutEffect = noop.useLayoutEffect(() => {
    const result = mode.set(first);
    if (noop !== native.TransitionStates.YEETED) {
      const result1 = connected.set(importDefault);
    }
  });
  const items = [channelId, connected, mode, controlsSpecs, setControlsMode];
  return {
    selectedMode,
    setMode: tmp[1],
    dismissPanel: noop.useCallback(() => {
      if (controlsSpecs.get().mode === VoicePanelControlsModes.DRAWER) {
        const obj = { mode: tmp.FLOATING_DEFAULT };
        setControlsMode(obj);
        let flag = true;
      } else if (connected.get()) {
        let flag2 = mode.get() === VoicePanelModes.PANEL;
        if (flag2) {
          closure_8(tmp7.PIP);
          flag2 = true;
        }
        flag = flag2;
      } else {
        state = VoicePanelStore.getState();
        state.closeChannel(channelId);
        flag = true;
      }
      return flag;
    }, items)
  };
});
ReactCompilerGating = fn(558);
let closure_67 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(selectedMode[23]).c(5);
  channelId = channelId.channelId;
  const isConnected = channelId.isConnected;
  selectedMode = channelId.selectedMode;
  if (cResult[0] === channelId) {
    if (cResult[1] === isConnected) {
      if (cResult[2] === selectedMode) {
        let tmp2 = cResult[3];
        let tmp3 = cResult[4];
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  }
  const fn = function n() {
    let tmp2 = selectedMode !== VoicePanelModes.DISMISSED;
    if (tmp2) {
      tmp2 = isConnected;
    }
    if (tmp2) {
      const obj2 = { video_layout: collapsedCategories(selectedMode) };
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channelId));
      obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
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
  let obj = channelId(selectedMode[23]);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const isConnected = channelId.isConnected;
  const selectedMode = channelId.selectedMode;
  const items = [selectedMode, channelId, isConnected];
  const effect = noop.useEffect(() => {
    let tmp2 = selectedMode !== VoicePanelModes.DISMISSED;
    if (tmp2) {
      tmp2 = isConnected;
    }
    if (tmp2) {
      const obj2 = { video_layout: collapsedCategories(selectedMode) };
      const obj = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channelId));
      obj.track(constants.VIDEO_LAYOUT_TOGGLED, obj2);
    }
  }, items);
});
const __initData20 = { code: "function VoicePanelControllerTsx22(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}" };
const __initData21 = { code: "function VoicePanelControllerTsx23(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}" };
const __initData22 = { code: "function VoicePanelControllerTsx24(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}" };
const __initData23 = { code: "function VoicePanelControllerTsx25(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}" };
ReactCompilerGating = fn(558);
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
    if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
      let tmp8 = _slicedToArray(arg0, 2)[1] === constants2.DRAWER;
      if (tmp8) {
        tmp8 = tmp6 === constants.PANEL;
      }
      if (tmp8) {
        let first;
        if (arg1 != null) {
          first = arg1[0];
        }
        tmp8 = first === constants.PANEL;
      }
      if (!tmp8) {
        mode(dependencyMap[25]).runOnJS(mode(dependencyMap[60]).dismissKeyboard)();
        const tmpResult = mode(dependencyMap[25]);
      }
      const tmp5 = _slicedToArray(arg0, 2);
    }
    obj = mode(dependencyMap[26]);
    tmp3 = arg1;
  };
  let obj = mode(4618);
  fn2.__closure = { cheapWorkletArrayShallowEqual: mode(9110).cheapWorkletArrayShallowEqual, VoicePanelControlsModes, VoicePanelModes, runOnJS: mode(4618).runOnJS, dismissKeyboard: mode(4751).dismissKeyboard };
  fn2.__workletHash = 9634019064864;
  fn2.__initData = __initData21;
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
    if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
      let tmp8 = _slicedToArray(arg0, 2)[1] === constants2.DRAWER;
      if (tmp8) {
        tmp8 = tmp6 === constants.PANEL;
      }
      if (tmp8) {
        let first;
        if (arg1 != null) {
          first = arg1[0];
        }
        tmp8 = first === constants.PANEL;
      }
      if (!tmp8) {
        mode(dependencyMap[25]).runOnJS(mode(dependencyMap[60]).dismissKeyboard)();
        const tmpResult = mode(dependencyMap[25]);
      }
      const tmp5 = _slicedToArray(arg0, 2);
    }
    obj = mode(dependencyMap[26]);
    tmp3 = arg1;
  };
  let obj = mode(4618);
  fn2.__closure = { cheapWorkletArrayShallowEqual: mode(9110).cheapWorkletArrayShallowEqual, VoicePanelControlsModes, VoicePanelModes, runOnJS: mode(4618).runOnJS, dismissKeyboard: mode(4751).dismissKeyboard };
  fn2.__workletHash = 12442886667392;
  fn2.__initData = __initData23;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
});
ReactCompilerGating = fn(558);
let closure_73 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      return new Set();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  first1 = _slicedToArray(noop.useState(first), 1)[0];
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      if (cResult[3] === first1) {
        let tmp4 = cResult[4];
        let tmp5 = cResult[5];
      }
      const effect = noop.useEffect(tmp4, tmp5);
      return first1;
    }
  }
  const fn2 = function u() {
    if (closure_1) {
      closure_0 = closure_0(first1[61]).runAfterInteractions(() => {
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
  const obj = require("c");
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  const first = _slicedToArray(noop.useState(() => new Set()), 1)[0];
  const items = [arg1, arg0, first];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      closure_0 = closure_0(first[61]).runAfterInteractions(() => {
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
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(streamOutputSinkStack[23]).c(130);
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
  let obj = channelId(streamOutputSinkStack[23]);
  const stateFromStores = channelId(streamOutputSinkStack[28]).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      const tmp = guildId(first[62]);
      return new guildId(first[62])(safeArea.getMediaEngine());
    };
    cResult[2] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  streamOutputSinkStack = _slicedToArray(channelType.useState(tmp8), 1)[0];
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
    let tmp11 = items2;
  } else {
    class I {
      constructor() {
        return () => streamOutputSinkStack.cleanUp();
      }
    }
    tmp11 = cResult[5];
  }
  const effect = channelType.useEffect(I, tmp11);
  const tmpResult = channelId(streamOutputSinkStack[28]);
  ({ items, isConnected } = guildId(streamOutputSinkStack[63])(channelId, guildId));
  const tmp13 = guildId(streamOutputSinkStack[63])(channelId, guildId);
  _slicedToArray = closure_73(items, isConnected);
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
  cResult[6] = channelId;
  cResult[7] = connected;
  cResult[8] = controlsSpecs;
  cResult[9] = isConnected;
  cResult[10] = mode;
  cResult[11] = setControlsMode;
  cResult[12] = transitionState;
  cResult[13] = { channelId, isConnected, mode, connected, transitionState, controlsSpecs, setControlsMode };
  const obj2 = { channelId, isConnected, mode, connected, transitionState, controlsSpecs, setControlsMode };
  const tmp14 = closure_73(items, isConnected);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  const transitionState = channelId.transitionState;
  let streamOutputSinkStack;
  _slicedToArray = undefined;
  noop = undefined;
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
  ({ children, transitionCleanUp } = channelId);
  const items1 = [safeArea];
  const stateFromStores = channelId(streamOutputSinkStack[28]).useStateFromStores(items1, () => safeArea.getMode() === showControls.PUSH_TO_TALK);
  streamOutputSinkStack = _slicedToArray(noop.useState(() => {
    const tmp = guildId(first[62]);
    return new guildId(first[62])(safeArea.getMediaEngine());
  }), 1)[0];
  const items2 = [streamOutputSinkStack];
  const effect = noop.useEffect(() => () => streamOutputSinkStack.cleanUp(), items2);
  let obj = channelId(streamOutputSinkStack[28]);
  let tmp = channelId;
  let tmp4 = _slicedToArray;
  ({ items, isConnected } = guildId(streamOutputSinkStack[63])(channelId, guildId));
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
  const tmp8 = guildId(streamOutputSinkStack[63])(channelId, guildId);
  ({ manualFocusedItem, setFocused: c32 } = closure_65({ guildId, channelId, layoutManager, focused }));
  const tmp12 = closure_65({ guildId, channelId, layoutManager, focused });
  const items3 = [c7];
  const stateFromStores1 = channelId(streamOutputSinkStack[28]).useStateFromStores(items3, () => {
    const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
  const layoutEffect = noop.useLayoutEffect(() => {
    if (tmp) {
      const result = EmbeddedActivitiesActionCreators.updateActivityPanelMode(ActivityPanelModes.PIP);
    }
    tmp = selectedMode === VoicePanelModes.PANEL && stateFromStores1;
  }, items4);
  closure_72({ mode, controlsSpecs });
  closure_64({ channelId, transitionState, transitionCleanUp, connected, mode, setMode });
  const tmp18 = guildId(streamOutputSinkStack[65])({ mode, controlsSpecs, safeArea, windowDimensions });
  const pipAvoidanceSpecs = tmp18;
  const obj3 = channelId(streamOutputSinkStack[28]);
  const obj5 = { channelId, connected: isConnected, focusedId: manualFocusedItem, layoutManager, mode: selectedMode, windowDimensions, pipAvoidanceSpecs: tmp18, safeArea };
  const controllerPIPState = channelId(streamOutputSinkStack[66]).useControllerPIPState(obj5);
  closure_45({ channelId, selectedMode, manualFocusedItem });
  closure_43({ channelId, focused, pipState: controllerPIPState, manuallyFocusedId: manualFocusedItem });
  c36({ channelId, focused, mode, connected });
  dismissPanel({ setControlsMode });
  closure_38({ showControls });
  guildId(streamOutputSinkStack[67])(channelId, mode, setMode, connected);
  guildId(streamOutputSinkStack[68])();
  closure_59({ isConnected, selectedMode, manualFocusedItem, isNonVoiceEmbeddedActivityInPanelMode: stateFromStores1 });
  closure_67({ channelId, isConnected, selectedMode });
  const obj4 = channelId(streamOutputSinkStack[66]);
  ({ showFloatingCTA: c35, setShowFloatingCTA: c36 } = closure_44(mode));
  const dismissToPIPGestureRef = obj2.useRef(undefined);
  const obj6 = { value: tmp4(noop.useState(() => ({ channelId, channelType, connected, contentDimensions, controlsSpecs, dismissPanel, dismissToPIPGestureRef, dragScrolling, focused, generateStateLocker, guildId, hideControls, isCall, isFocusedVideoZoomed, layoutManager, mode, morphablePanelMode, mountedCards, pipAvoidanceSpecs, preJoinContentSize, refreshIdleTimeout, safeArea, scrollPosition, setControlsMode, setFocused, setIsFocusedVideoZoomed, setMode, setShowFloatingCTA, showControls, showFloatingCTA, streamOutputSinkStack, usePIPState: VoicePanelPIPStateContext.usePIPState, useReducedMotion, windowDimensions, wrapperDimensions, wrapperOffset, pipHandoff })), 1)[0], children: null };
  const obj7 = { value: controllerPIPState, children: null };
  let tmp32 = guildId;
  if (guildId == null) {
    tmp32 = null;
  }
  obj7.children = setMode(guildId(streamOutputSinkStack[70]).Provider, { value: tmp32, children });
  obj6.children = setMode(tmp(streamOutputSinkStack[69]).VoicePanelPIPStateContext.Provider, obj7);
  return setMode(guildId(streamOutputSinkStack[71]).Provider, obj6);
});