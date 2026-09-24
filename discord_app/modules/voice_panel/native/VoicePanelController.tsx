// === Module 17616: VoicePanelController ===

// Module 17616 (VoicePanelController)
import DurationsDefault from "Durations" /* 1091 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useWindowDimensions from "useWindowDimensions" /* 1478 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4453 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4523 */;
import native from "native" /* 4535 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4561 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5009 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5030 */;
import DeviceOrientation from "DeviceOrientation" /* 8682 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 9676 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 9699 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 9747 */;
import _modDef9798 from "module_9798" /* 9798 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9995 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11703 */;
import VoicePanelCardLayoutManagerDefault from "VoicePanelCardLayoutManager" /* 12617 */;
import applyActivityOrientationLockDefault from "applyActivityOrientationLock" /* 17576 */;
import _modDef17618 from "module_17618" /* 17618 */;
import trackActivityThermalStateNoticeShown from "trackActivityThermalStateNoticeShown" /* 17619 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 17620 */;
import useIsVoicePanelParticipantFocusable from "useIsVoicePanelParticipantFocusable" /* 17647 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 17659 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4845 */;
import AppFreezeStore from "AppFreezeStore" /* 8640 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 9830 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9738 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4852 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;
import VoicePanelStore from "VoicePanelStore" /* 5037 */;

require = fn;
const AppState = fn(17).AppState;
const VoicePanelConstants = fn(12615);
({ VoicePanelModes: closure_17, getAnalyticsNameForVoicePanelMode: closure_18 } = VoicePanelConstants);
const VoicePanelControlsConstants = fn(12613);
({ CONTROLS_HEIGHT: closure_19, CONTROLS_HEIGHT_PTT: closure_20, CONTROLS_HIDE_TIMEOUT: closure_21, VoicePanelControlsModes: closure_22 } = VoicePanelControlsConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_23, ComponentActions: closure_24, InputModes: closure_25 } = Constants);
const OrientationLockState = fn(2004).OrientationLockState;
const ActivityPanelModes = fn(9396).ActivityPanelModes;
const isActivityParticipant = fn(4850).isActivityParticipant;
const MorphablePanelModes = fn(12616).MorphablePanelModes;
const jsx = fn(21).jsx;
let __initData = { code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
let closure_32 = { code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}" };
let closure_33 = 5 * DurationsDefault.Millis.MINUTE;
let __initData2 = { code: "function VoicePanelControllerTsx3(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}" };
let closure_35 = { code: "function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;runOnJS(handleStateUpdates)({focusedId:focusedId,pipParticipantId:pipParticipantId});}" };
let closure_36 = { code: "function VoicePanelControllerTsx5(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}" };
let __initData3 = { code: "function VoicePanelControllerTsx6(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
const __initData4 = { code: "function VoicePanelControllerTsx7(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,_queueHideControls}=this.__closure;const specs=controlsSpecs.get();if(specs.locked)return;if(specs.mode!==VoicePanelControlsModes.FLOATING_DEFAULT)return;runOnJS(_queueHideControls)();}" };
const __initData5 = { code: "function VoicePanelControllerTsx8(){const{mode}=this.__closure;return mode.get();}" };
const __initData6 = { code: "function VoicePanelControllerTsx9(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}" };
const __initData7 = { code: "function VoicePanelControllerTsx10(){const{connected}=this.__closure;return connected.get();}" };
const __initData8 = { code: "function VoicePanelControllerTsx11(connected){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}" };
let closure_43 = { code: "function VoicePanelControllerTsx12({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}runOnJS(executeLayoutManagerEffect)();}" };
const __initData9 = { code: "function VoicePanelControllerTsx13(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}" };
const __initData10 = { code: "function VoicePanelControllerTsx14(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}" };
const __initData11 = { code: "function VoicePanelControllerTsx15(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}" };
const __initData12 = { code: "function VoicePanelControllerTsx16(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default function VoicePanelController(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  ({ transitionState, transitionCleanUp } = channelId);
  let first;
  let first1;
  let type;
  let sharedValue;
  let sharedValue12;
  let sharedValue6;
  let sharedValue7;
  let first2;
  let sharedValue1;
  let sharedValue8;
  let sharedValue3;
  let sharedValue5;
  let sharedValue2;
  let sharedValue4;
  let sharedValue9;
  let setIsFocusedVideoZoomed;
  let sharedValue10;
  let sharedValue11;
  let derivedValue;
  constants2 = undefined;
  let callback3;
  let controlsSpecs;
  let callback5;
  let callback4;
  let callback6;
  let setControlsMode;
  let first3;
  let setMode;
  __initData = undefined;
  let callback7;
  let stateFromStores2;
  __initData2 = undefined;
  let sharedValue14;
  let callback12;
  __initData3 = undefined;
  let tmp2 = first;
  const items1 = [sharedValue3];
  const stateFromStores = channelId(first[26]).useStateFromStores(items1, () => sharedValue3.getMode() === callback5.PUSH_TO_TALK);
  let obj2 = type;
  first = first1(type.useState(() => {
    const tmp = guildId(first[58]);
    return new guildId(first[58])(sharedValue3.getMediaEngine());
  }), 1)[0];
  const items2 = [first];
  const effect = type.useEffect(() => () => first.cleanUp(), items2);
  let obj = channelId(first[26]);
  let tmp3 = sharedValue3;
  ({ items, isConnected } = guildId(first[59])(channelId, guildId));
  closure_129_0 = items;
  closure_129_1 = isConnected;
  first1 = first1(type.useState(() => new Set()), 1)[0];
  closure_129_2 = first1;
  const items3 = [isConnected, items, first1];
  const effect1 = type.useEffect(() => {
    if (guildId) {
      closure_0 = channelId(first[57]).runAfterInteractions(() => {
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
  }, items3);
  closure_130_0 = channelId;
  closure_130_1 = items;
  closure_130_2 = stateFromStores;
  closure_130_3 = undefined;
  closure_130_4 = undefined;
  closure_130_5 = undefined;
  closure_130_6 = undefined;
  closure_130_7 = undefined;
  closure_130_8 = undefined;
  let channel = sharedValue8.getChannel(channelId);
  let flag;
  if (channel != null) {
    flag = channel.isDM();
  }
  if (flag == null) {
    flag = false;
  }
  type = undefined;
  if (channel != null) {
    type = channel.type;
  }
  let tmp9 = guildId(first[59])(channelId, guildId);
  sharedValue = channelId(tmp2[23]).useSharedValue(isConnected);
  let tmpResult = channelId(tmp2[23]);
  sharedValue1 = channelId(tmp2[23]).useSharedValue(sharedValue9.PANEL);
  closure_130_3 = sharedValue1;
  const tmpResult34 = channelId(tmp2[23]);
  let size = channelId(tmp2[35]).getWindowDimensions();
  closure_130_4 = size;
  const tmpResult35 = channelId(tmp2[35]);
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height };
  sharedValue2 = channelId(tmp2[23]).useSharedValue(size1);
  const tmpResult36 = channelId(tmp2[23]);
  const rect = channelId(tmp2[36]).getSafeAreaInsets();
  closure_130_5 = rect;
  const tmpResult37 = channelId(tmp2[36]);
  let merged = Object.assign(rect);
  sharedValue3 = channelId(tmp2[23]).useSharedValue({});
  let obj3 = {};
  const tmpResult38 = channelId(tmp2[23]);
  const maxPanelWidth = channelId(tmp2[37]).getMaxPanelWidth({ windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right });
  let obj4 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const tmpResult39 = channelId(tmp2[37]);
  let obj5 = { drawerHeight: size.height, drawerWidth: maxPanelWidth, drawerX: null, drawerY: null, pipX: -1, pipY: -1, animated: true, mode: null };
  const tmpResult40 = channelId(tmp2[23]);
  obj5.drawerX = channelId(tmp2[37]).getPanelX(size.width, maxPanelWidth);
  obj5.drawerY = size.height;
  obj5.mode = sharedValue9.PANEL;
  sharedValue4 = tmpResult40.useSharedValue(obj5);
  const tmpResult41 = channelId(tmp2[37]);
  sharedValue5 = channelId(tmp2[23]).useSharedValue(0);
  const tmpResult42 = channelId(tmp2[23]);
  sharedValue6 = channelId(tmp2[23]).useSharedValue(false);
  const tmpResult43 = channelId(tmp2[23]);
  sharedValue7 = channelId(tmp2[23]).useSharedValue(null);
  const tmpResult44 = channelId(tmp2[23]);
  sharedValue8 = channelId(tmp2[23]).useSharedValue(0);
  const tmpResult45 = channelId(tmp2[23]);
  sharedValue9 = channelId(tmp2[23]).useSharedValue(false);
  closure_130_6 = sharedValue9;
  let fn = function h(arg0) {
    const result = sharedValue12.set(arg0);
  };
  fn.__closure = { isFocusedVideoZoomed: sharedValue9 };
  fn.__workletHash = 13885070318174;
  fn.__initData = callback12;
  const items4 = [sharedValue9];
  setIsFocusedVideoZoomed = obj2.useCallback(fn, items4);
  const tmpResult46 = channelId(tmp2[23]);
  sharedValue10 = channelId(tmp2[23]).useSharedValue(sharedValue12.useReducedMotion);
  closure_130_7 = sharedValue10;
  const items5 = [sharedValue10];
  const effect2 = obj2.useEffect(() => {
    function onChange() {
      const result = sharedValue6.set(sharedValue12.useReducedMotion);
    }
    let result = sharedValue12.addReactChangeListener(onChange);
    return () => {
      const result = AccessibilityStore.removeReactChangeListener(onChange);
    };
  }, items5);
  const tmpResult47 = channelId(tmp2[23]);
  sharedValue11 = channelId(tmp2[23]).useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const tmpResult48 = channelId(tmp2[23]);
  const fn2 = function q() {
    value = first1.get();
    if (constants.PANEL === value) {
      return MorphablePanelModes.PANEL;
    } else if (tmp2.PIP === value) {
      return MorphablePanelModes.PIP;
    } else {
      return MorphablePanelModes.UNDEFINED;
    }
  };
  fn2.__closure = { mode: sharedValue1, VoicePanelModes: sharedValue9, MorphablePanelModes: first3 };
  fn2.__workletHash = 931249605381;
  fn2.__initData = __initData3;
  derivedValue = channelId(tmp2[23]).useDerivedValue(fn2);
  first2 = tmp5(obj2.useState(() => {
    const obj = new VoicePanelCardLayoutManagerDefault(channelId);
    obj.updateState(guildId, { windowWidth: type.width, windowHeight: type.height, safeAreaLeft: sharedValue.left, safeAreaRight: sharedValue.right, safeAreaTop: sharedValue.top, safeAreaBottom: sharedValue.bottom, controlBarSize: first ? closure_2_20 : closure_2_19 });
    return obj;
  }), 1)[0];
  closure_130_8 = first2;
  const items6 = [first2];
  const layoutEffect = obj2.useLayoutEffect(() => () => sharedValue7.cleanUp(), items6);
  let obj6 = { mode: sharedValue1, VoicePanelModes: sharedValue9, MorphablePanelModes: first3 };
  const tmpResult49 = channelId(tmp2[23]);
  sharedValue12 = channelId(tmp2[23]).useSharedValue(first2.getContentDimensions());
  constants2 = tmp5(obj2.useState(() => new guildId(first[38])()), 1)[0];
  closure_131_0 = sharedValue1;
  closure_131_1 = isConnected;
  closure_131_2 = sharedValue;
  closure_131_3 = stateFromStores;
  closure_131_4 = undefined;
  closure_131_5 = undefined;
  closure_131_6 = undefined;
  closure_131_7 = undefined;
  closure_131_8 = undefined;
  closure_131_9 = undefined;
  closure_131_10 = undefined;
  channelId(tmp2[23]);
  const obj7 = { mode: constants2.FLOATING_DEFAULT, locked: false, height: null, pushToTalk: null };
  if (stateFromStores) {
    if (isConnected) {
      let tmp36 = sharedValue11;
    }
    obj7.height = tmp36;
    obj7.pushToTalk = stateFromStores;
    const tmp34Result = tmp34(obj7);
    closure_131_4 = tmp34Result;
    closure_131_5 = obj2.useRef(-1);
    const callback1 = obj2.useCallback(() => {
      if (-1 !== sharedValue.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(sharedValue.current);
        sharedValue.current = -1;
      }
    }, []);
    closure_131_6 = callback1;
    const items7 = [tmp34Result, callback1, sharedValue1];
    const callback2 = obj2.useCallback(() => {
      sharedValue12();
      if (-1 === sharedValue.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
          sharedValue12();
          if (channelId.get() === sharedValue9.PANEL) {
            let locked = type.get().mode !== constants.FLOATING_DEFAULT;
            if (!locked) {
              locked = type.get().locked;
            }
            if (!locked) {
              const obj2 = { mode: constants.HIDDEN };
              guildId(first[40])(type, obj2);
            }
          }
        }, __initData);
      }
    }, items7);
    closure_131_7 = callback2;
    const items8 = [tmp34Result, callback2];
    const memo = obj2.useMemo(() => {
      closure_0 = guildId(first[41]).debounce(function _setControlsMode(mode, returnMode) {
        guildId(first[40])(type, { mode, returnMode });
        sharedValue6();
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
            FLOATING_DEFAULT = constants2.FLOATING_DEFAULT;
          }
          if (debounce) {
            closure_0(mode, FLOATING_DEFAULT);
          } else {
            closure_0.cancel();
            const obj2 = { mode, returnMode: FLOATING_DEFAULT };
            updateSharedValueIfChangedDefault(type, obj2);
            sharedValue6();
          }
        }
      };
    }, items8);
    const cancelControlsDebounce = memo.cancelControlsDebounce;
    closure_131_8 = cancelControlsDebounce;
    setControlsMode = memo.setControlsMode;
    closure_131_9 = setControlsMode;
    const _Set = Set;
    const set = new Set();
    closure_131_10 = obj2.useRef(set);
    const items9 = [tmp34Result, callback2, callback1];
    const items10 = [setControlsMode];
    callback3 = obj2.useCallback((arg0) => {
      let v4Result = arg0;
      if (arg0 == null) {
        v4Result = channelId(first[42]).v4();
        let obj = channelId(first[42]);
      }
      channelId = v4Result;
      return {
        lock(mode) {
          const current = first2.current;
          if (!current.has(v4Result)) {
            sharedValue12();
            const current2 = first2.current;
            current2.add(v4Result);
            const obj = { locked: first2.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            updateSharedValueIfChangedDefault(type, obj);
          }
        },
        unlock(mode) {
          const current = first2.current;
          if (current.has(v4Result)) {
            const current2 = first2.current;
            current2.delete(v4Result);
            const obj = { locked: first2.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            updateSharedValueIfChangedDefault(type, obj);
            sharedValue6();
          }
        }
      };
    }, items9);
    const items11 = [setControlsMode, tmp34Result];
    callback4 = obj2.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { debounce: false };
      }
      flag({ mode: constants2.HIDDEN, debounce: obj.debounce });
    }, items10);
    callback5 = obj2.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let debounce = obj.debounce;
      if (debounce === undefined) {
        debounce = false;
      }
      let mode = type.get().returnMode;
      if (mode == null) {
        mode = constants2.FLOATING_DEFAULT;
      }
      return flag({ mode, debounce });
    }, items11);
    const fn3 = function l() {
      value = type.get();
      if (!value.locked) {
        if (value.mode === constants2.FLOATING_DEFAULT) {
          ReanimatedRexport.runOnJS(sharedValue6)();
        }
      }
    };
    const obj8 = { controlsSpecs: tmp34Result, VoicePanelControlsModes: tmp35, runOnJS: tmp(tmp2[23]).runOnJS, _queueHideControls: callback2 };
    fn3.__closure = obj8;
    fn3.__workletHash = 11728765250899;
    fn3.__initData = __initData4;
    const items12 = [tmp34Result, callback2];
    callback6 = obj2.useCallback(fn3, items12);
    const fn4 = function h() {
      return channelId.get();
    };
    const obj9 = { mode: sharedValue1 };
    fn4.__closure = obj9;
    fn4.__workletHash = 974064852045;
    fn4.__initData = __initData5;
    const fn5 = function u(arg0) {
      if (arg0 === constants.PANEL) {
        ReanimatedRexport.runOnJS(sharedValue6)();
      } else {
        ReanimatedRexport.runOnJS(sharedValue12)();
      }
    };
    const obj10 = { VoicePanelModes: tmp14, runOnJS: tmp(tmp2[23]).runOnJS, _queueHideControls: callback2, _clearHideControlsQueue: callback1 };
    fn5.__closure = obj10;
    fn5.__workletHash = 14878725055629;
    fn5.__initData = __initData6;
    const animatedReaction = tmp(tmp2[23]).useAnimatedReaction(fn4, fn5);
    const items13 = [stateFromStores, tmp34Result, isConnected];
    const layoutEffect1 = obj2.useLayoutEffect(() => {
      if (first1) {
        if (guildId) {
          let tmp5 = closure_2_20;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = closure_2_19;
    }, items13);
    const tmpResult52 = tmp(tmp2[23]);
    const fn6 = function f() {
      return first.get();
    };
    const obj11 = { connected: sharedValue };
    fn6.__closure = obj11;
    fn6.__workletHash = 16839042645652;
    fn6.__initData = __initData7;
    class S {
      constructor(arg0) {
        if (closure_3) {
          tmp4 = channelId;
          if (channelId) {
            tmp5 = CONTROLS_HEIGHT_PTT;
          }
          obj = { height: null, pushToTalk: null };
          obj.height = tmp5;
          obj.pushToTalk = tmp3;
          tmpResult = tmp(tmp2, obj);
          return;
        }
        tmp5 = CONTROLS_HEIGHT;
        return;
      }
    }
    const obj12 = { updateSharedValueIfChanged: tmp8(tmp2[40]), controlsSpecs: tmp34Result, pushToTalk: stateFromStores, CONTROLS_HEIGHT_PTT: sharedValue11, CONTROLS_HEIGHT: null };
    let tmp57 = sharedValue10;
    obj12.CONTROLS_HEIGHT = sharedValue10;
    S.__closure = obj12;
    S.__workletHash = 8961429796283;
    S.__initData = __initData8;
    const animatedReaction1 = tmp(tmp2[23]).useAnimatedReaction(fn6, S);
    const items14 = [cancelControlsDebounce, callback1];
    const layoutEffect2 = obj2.useLayoutEffect(() => () => {
      sharedValue7();
      sharedValue12();
    }, items14);
    const items15 = [setControlsMode];
    const effect3 = obj2.useEffect(() => {
      function closeTiV() {
        flag({ mode: constants.FLOATING_DEFAULT });
      }
      let ComponentDispatch = channelId(first[43]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(controlsSpecs.VOICE_PANEL_TIV_CLOSE, closeTiV);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants4.VOICE_PANEL_TIV_CLOSE, closeTiV);
      };
    }, items15);
    controlsSpecs = tmp34Result;
    closure_132_0 = channelId;
    closure_132_1 = isConnected;
    closure_132_2 = sharedValue1;
    closure_132_3 = sharedValue;
    closure_132_4 = transitionState;
    closure_132_5 = tmp34Result;
    closure_132_6 = setControlsMode;
    const tmp5Result = tmp5(obj2.useState(() => {
      const voicePanelsPIP = VoicePanelStore.getState().voicePanelsPIP;
      return voicePanelsPIP.has(channelId) ? constants.PIP : constants.PANEL;
    }), 2);
    first3 = tmp5Result[0];
    closure_132_7 = first3;
    closure_132_8 = tmp64;
    const layoutEffect3 = obj2.useLayoutEffect(() => {
      const result = first.set(sharedValue6);
      if (type !== native.TransitionStates.YEETED) {
        const result1 = first1.set(guildId);
      }
    });
    const items16 = [channelId, sharedValue, sharedValue1, tmp34Result, setControlsMode];
    setMode = tmp64;
    __initData = obj2.useCallback(() => {
      if (sharedValue.get().mode === constants2.DRAWER) {
        const obj = { mode: tmp.FLOATING_DEFAULT };
        sharedValue12(obj);
        flag = true;
      } else if (first1.get()) {
        let flag2 = first.get() === constants.PANEL;
        if (flag2) {
          sharedValue7(tmp7.PIP);
          flag2 = true;
        }
        flag = flag2;
      } else {
        const state = VoicePanelStore.getState();
        state.closeChannel(channelId);
        flag = true;
      }
      return flag;
    }, items16);
    closure_133_0 = guildId;
    closure_133_1 = channelId;
    closure_133_2 = sharedValue7;
    const tmp56 = sharedValue11;
    const tmpResult53 = tmp(tmp2[23]);
    const items17 = [sharedValue7];
    const stateFromStores1 = tmp(tmp2[26]).useStateFromStores(items17, () => ChannelRTCStore.getSelectedParticipantId(guildId));
    closure_133_3 = stateFromStores1;
    const items18 = [guildId, channelId];
    callback7 = obj2.useCallback((id2) => {
      let result = null == id2;
      if (!result) {
        result = useIsVoicePanelParticipantFocusable.isVoicePanelParticipantFocusable(channelId, guildId, id2);
      }
      if (result) {
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(guildId, id2);
      }
    }, items18);
    closure_133_4 = callback7;
    closure_133_5 = obj2.useRef(undefined);
    const targetDimensions = first2.getTargetDimensions(stateFromStores1);
    closure_133_6 = targetDimensions;
    const items19 = [sharedValue7, stateFromStores1, targetDimensions];
    const layoutEffect4 = obj2.useLayoutEffect(() => {
      let tmp2 = null;
      if (null != first1) {
        const obj = { id: tmp };
        const merged = Object.assign(sharedValue12);
        tmp2 = obj;
      }
      const current = sharedValue.current;
      if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
        sharedValue.current = tmp2;
        const result = first.set(tmp2);
      }
      obj2 = cheapWorkletShallowEqual;
      tmp6 = tmp2;
    }, items19);
    const tmp72 = tmp8(tmp2[53])(guildId, channelId, stateFromStores1);
    closure_133_7 = tmp72;
    const items20 = [stateFromStores1, tmp72, callback7];
    const effect4 = obj2.useEffect(() => {
      if (null != first1) {
        if (!sharedValue6) {
          type(null);
        }
      }
    }, items20);
    const items21 = [channelId, callback7];
    const effect5 = obj2.useEffect(() => () => {
      const channel = sharedValue8.getChannel(guildId);
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      if (isGuildStageVoiceResult) {
        isGuildStageVoiceResult = sharedValue2.getVoiceChannelId() === guildId;
      }
      if (!isGuildStageVoiceResult) {
        type(null);
      }
    }, items21);
    const tmpResult54 = tmp(tmp2[26]);
    const items22 = [sharedValue6];
    stateFromStores2 = tmp(tmp2[26]).useStateFromStores(items22, () => {
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
    closure_134_0 = sharedValue2;
    closure_134_1 = sharedValue3;
    closure_134_2 = sharedValue12;
    closure_134_3 = isConnected;
    closure_134_4 = first2;
    closure_134_13 = undefined;
    const tmp5Result3 = tmp5(obj2.useState(() => {
      const windowDimensions = channelId(first[35]).getWindowDimensions();
      ({ width, height } = windowDimensions);
      const size = { width, height, landscape: width > height };
      return size;
    }), 2);
    const first4 = tmp5Result3[0];
    closure_134_5 = first4;
    closure_134_6 = tmp79;
    const tmp75 = sharedValue6;
    const tmpResult55 = tmp(tmp2[26]);
    const tmp5Result4 = tmp5(obj2.useState(tmp(tmp2[36]).getSafeAreaInsets()), 2);
    const first5 = tmp5Result4[0];
    closure_134_7 = first5;
    closure_134_8 = tmp82;
    const tmpResult56 = tmp(tmp2[36]);
    const managerSubscription = tmp(tmp2[39]).useManagerSubscription(first2);
    closure_134_9 = managerSubscription;
    const obj13 = { timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: first4, safeAreaState: first5, contentDimensions: { width: 0, height: 0 } };
    const ref = obj2.useRef(obj13);
    closure_134_10 = ref;
    closure_135_0 = isConnected;
    closure_135_1 = ref;
    closure_135_2 = tmp79;
    closure_135_3 = tmp82;
    const items23 = [ref, isConnected, tmp5Result3[1], tmp5Result4[1]];
    const layoutEffect5 = obj2.useLayoutEffect(() => {
      if (guildId.current.connected !== channelId) {
        guildId.current.connected = tmp;
        first((safeAreaState) => {
          let windowState = safeAreaState;
          const windowDimensions = channelId(first[35]).getWindowDimensions();
          ({ width, height } = windowDimensions);
          guildId.current.windowState = { width, height, landscape: width > height };
          const obj = channelId(first[35]);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, guildId.current.windowState)) {
            windowState = guildId.current.windowState;
          }
          return windowState;
        });
        first1((safeAreaState) => {
          guildId.current.safeAreaState = channelId(first[36]).getSafeAreaInsets();
          const obj = channelId(first[36]);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, guildId.current.safeAreaState)) {
            safeAreaState = guildId.current.safeAreaState;
          }
          return safeAreaState;
        });
      }
    }, items23);
    const callback8 = obj2.useCallback(() => {
      clearTimeout(first2.current.timeout);
      first2.current.timeout = setTimeout(() => {
        clearTimeout(ref.current.timeout);
        channelId(first[44]).batchUpdates(() => {
          closure_1_6((current) => {
            let windowState = current;
            if (!obj.cheapWorkletShallowEqual(ref.current.windowState, current)) {
              windowState = ref.current.windowState;
            }
            return windowState;
          });
          closure_1_8((current) => {
            let safeAreaState = current;
            if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
              safeAreaState = ref.current.safeAreaState;
            }
            return safeAreaState;
          });
        });
      }, 60);
    }, []);
    closure_134_11 = callback8;
    const items24 = [callback8];
    const layoutEffect6 = obj2.useLayoutEffect(() => {
      closure_0 = guildId(first[45])(function updateSafeAreas(current) {
        if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
          const obj2 = {};
          const merged = Object.assign(current);
          ref.current.safeAreaState = obj2;
          sharedValue1();
        }
        obj = channelId(first[24]);
      });
      const safeAreaInsets = channelId(first[36]).getSafeAreaInsets();
      let obj = channelId(first[36]);
      if (!obj2.cheapWorkletShallowEqual(first2.current.safeAreaState, safeAreaInsets)) {
        let obj3 = {};
        let merged = Object.assign(safeAreaInsets);
        first2.current.safeAreaState = obj3;
        sharedValue1();
      }
      function updateWindowDimensions() {
        let windowDimensions = arg0;
        if (arg0 === undefined) {
          windowDimensions = channelId(first[35]).getWindowDimensions();
          const obj = channelId(first[35]);
        }
        ({ width, height } = windowDimensions);
        const size = { width, height, landscape: width > height };
        if (!obj3.cheapWorkletShallowEqual(ref.current.windowState, size)) {
          ref.current.windowState = size;
          sharedValue1();
        }
        obj3 = channelId(first[24]);
      }
      closure_1 = guildId(first[46])(updateWindowDimensions);
      obj2 = channelId(first[24]);
      let windowDimensions = channelId(first[35]).getWindowDimensions();
      ({ width, height } = windowDimensions);
      let size = { width, height, landscape: width > height };
      const tmp3Result = channelId(first[35]);
      if (!tmp3Result2.cheapWorkletShallowEqual(first2.current.windowState, size)) {
        first2.current.windowState = size;
        sharedValue1();
      }
      return () => {
        closure_0();
        closure_1();
      };
    }, items24);
    let id = obj2.useId();
    closure_134_12 = id;
    const items25 = [isConnected, id];
    const layoutEffect7 = obj2.useLayoutEffect(() => {
      if (first1) {
        let state = SafeAreaDisabledStore.getState();
        const obj = { key: sharedValue8, lockEnabled: true };
        let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        return () => {
          const state = first2.getState();
          const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
        };
      }
    }, items25);
    const obj14 = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null, safeAreaTop: null, safeAreaBottom: null, controlBarSize: null };
    ({ width: obj41.windowWidth, height: obj41.windowHeight } = first4);
    ({ left: obj41.safeAreaLeft, right: obj41.safeAreaRight, top: obj41.safeAreaTop, bottom: obj41.safeAreaBottom } = first5);
    if (stateFromStores) {
      tmp57 = tmp56;
    }
    obj14.controlBarSize = tmp57;
    const updateStateResult = first2.updateState(items, obj14);
    closure_134_13 = updateStateResult;
    const items26 = [sharedValue12, updateStateResult, managerSubscription, first2, sharedValue3, first5, sharedValue2, first4, isConnected];
    const layoutEffect8 = obj2.useLayoutEffect(() => {
      function executeLayoutManagerEffect() {
        return type.handleLayoutEffect();
      }
      first2.current.layoutKey = flag;
      const fn = function t(arg0) {
        ({ windowState, safeAreaState, contentState } = arg0);
        let tmp = first1;
        if (first1) {
          tmp = !cheapWorkletShallowEqual.cheapWorkletShallowEqual(first.get(), contentState);
        }
        if (tmp) {
          const result = first.set(contentState);
        }
        if (!obj2.cheapWorkletShallowEqual(channelId.get(), windowState)) {
          const result1 = channelId.set(windowState);
        }
        obj2 = cheapWorkletShallowEqual;
        if (!obj4.cheapWorkletShallowEqual(guildId.get(), safeAreaState)) {
          const result2 = guildId.set(safeAreaState);
        }
        obj4 = cheapWorkletShallowEqual;
        ReanimatedRexport.runOnJS(executeLayoutManagerEffect)();
      };
      let obj = channelId(contentDimensions[23]);
      fn.__closure = { isConnected: first1, cheapWorkletShallowEqual: channelId(contentDimensions[24]).cheapWorkletShallowEqual, contentDimensions, windowDimensions: executeLayoutManagerEffect, safeArea: guildId, runOnJS: channelId(contentDimensions[23]).runOnJS, executeLayoutManagerEffect };
      fn.__workletHash = 5348227953265;
      fn.__initData = __initData;
      obj.runOnUI(fn)({ windowState: sharedValue, safeAreaState: sharedValue6, contentState: sharedValue3 });
    }, items26);
    const items27 = [first2];
    const effect6 = obj2.useEffect(() => {
      function checkDimensions() {
        if (!c3) {
          const size = channelId(first[35]).getWindowDimensions();
          const width = size.width;
          const height = size.height;
          let window_height = height;
          const result = checkDimensions.checkDimensionsMismatch(width, height);
          closure_2 = result;
          if (null != result) {
            const _setTimeout = setTimeout;
            window_height = setTimeout(() => {
              const windowDimensions = useWindowDimensions.getWindowDimensions();
              ({ width, height } = windowDimensions);
              let tmp4 = width === width;
              if (tmp4) {
                tmp4 = window_height === height;
              }
              if (tmp4) {
                if (null != type.checkDimensionsMismatch(width, height)) {
                  c3 = true;
                  const obj4 = { layout_width: null, layout_height: null, window_width: null, window_height: null, was_dirty: null };
                  ({ staleWidth: obj3.layout_width, staleHeight: obj3.layout_height } = result);
                  obj4.window_width = width;
                  obj4.window_height = window_height;
                  obj4.was_dirty = result.wasDirty;
                  AnalyticsUtilsDefault.track(constants3.VOICE_PANEL_LAYOUT_DESYNC, obj4);
                  c1 = null;
                }
              }
            }, 250);
          }
          let obj = channelId(first[35]);
        }
      }
      if (!channelId(first[47]).isStable) {
        let _setInterval = setInterval;
        let interval = setInterval(checkDimensions, 1000);
        c1 = null;
        closure_2 = sharedValue.addEventListener("change", (event) => {
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
    }, items27);
    const layoutEffect9 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
    const items28 = [first3, stateFromStores2];
    const layoutEffect10 = obj2.useLayoutEffect(() => {
      if (tmp) {
        const result = EmbeddedActivitiesActionCreators.updateActivityPanelMode(ActivityPanelModes.PIP);
      }
      tmp = first3 === constants.PANEL && stateFromStores2;
    }, items28);
    closure_136_0 = sharedValue1;
    closure_136_1 = tmp34Result;
    const tmpResult57 = tmp(tmp2[39]);
    const fn7 = function c() {
      const items = [channelId.get(), guildId.get().mode];
      return items;
    };
    const obj15 = { mode: sharedValue1, controlsSpecs: tmp34Result };
    fn7.__closure = obj15;
    fn7.__workletHash = 2821493173859;
    fn7.__initData = __initData11;
    const fn8 = function s(arg0, arg1) {
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
        let tmp8 = first1(arg0, 2)[1] === pipHandoff.DRAWER;
        if (tmp8) {
          tmp8 = tmp6 === sharedValue9.PANEL;
        }
        if (tmp8) {
          first = undefined;
          if (arg1 != null) {
            first = arg1[0];
          }
          tmp8 = first === sharedValue9.PANEL;
        }
        if (!tmp8) {
          channelId(tmp2[23]).runOnJS(channelId(tmp2[56]).dismissKeyboard)();
          const tmpResult = channelId(tmp2[23]);
        }
        const tmp5 = first1(arg0, 2);
      }
      obj = channelId(first[24]);
      tmp3 = arg1;
    };
    const obj16 = { cheapWorkletArrayShallowEqual: tmp(tmp2[24]).cheapWorkletArrayShallowEqual, VoicePanelControlsModes: tmp35, VoicePanelModes: tmp14, runOnJS: tmp(tmp2[23]).runOnJS, dismissKeyboard: tmp(tmp2[56]).dismissKeyboard };
    fn8.__closure = obj16;
    fn8.__workletHash = 6506973979360;
    fn8.__initData = __initData12;
    const animatedReaction2 = tmp(tmp2[23]).useAnimatedReaction(fn7, fn8);
    closure_137_0 = channelId;
    closure_137_1 = transitionState;
    closure_137_2 = transitionCleanUp;
    closure_137_3 = sharedValue;
    closure_137_4 = sharedValue1;
    closure_137_5 = tmp64;
    const tmpResult58 = tmp(tmp2[23]);
    const sharedValue13 = tmp(tmp2[23]).useSharedValue(transitionState);
    closure_137_6 = sharedValue13;
    const items29 = [transitionState, sharedValue13, transitionCleanUp, channelId];
    const layoutEffect11 = obj2.useLayoutEffect(() => {
      const result = sharedValue12.set(guildId);
      if (guildId === native.TransitionStates.YEETED) {
        const state = AppFreezeStore.getState();
        const obj = { lockEnabled: false, key: null };
        const _HermesInternal = HermesInternal;
        obj.key = "voice-panel-freeze-" + channelId;
        const freezeLock = state.requestFreezeLock(obj);
        const _setTimeout = setTimeout;
        const timeout = setTimeout(first, 500);
        return () => clearTimeout(closure_0);
      }
    }, items29);
    const items30 = [channelId];
    const layoutEffect12 = obj2.useLayoutEffect(() => () => {
      const state = flag.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + channelId });
    }, items30);
    const tmpResult59 = tmp(tmp2[23]);
    const fn9 = function p() {
      const items = [first1.get(), type.get(), sharedValue12.get()];
      return items;
    };
    const obj17 = { connected: sharedValue, mode: sharedValue1, sharedTransitionState: sharedValue13 };
    fn9.__closure = obj17;
    fn9.__workletHash = 10141598131153;
    fn9.__initData = __initData9;
    const fn10 = function f(arg0, arg1) {
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
        [tmp6, tmp7, tmp8] = arg0;
        if (tmp8 === native.TransitionStates.YEETED) {
          if (tmp7 !== constants.DISMISSED) {
            ReanimatedRexport.runOnJS(sharedValue)(tmp16.DISMISSED);
            const tmpResult = ReanimatedRexport;
          }
        } else if (tmp7 === constants.DISMISSED) {
          let PANEL1;
          if (arg1 != null) {
            PANEL1 = arg1[1];
          }
          if (PANEL1 == null) {
            PANEL1 = constants.PANEL;
          }
          if (constants.PANEL !== PANEL1) {
            if (constants.PIP !== PANEL1) {
              let PANEL = constants.PANEL;
            }
            ReanimatedRexport.runOnJS(sharedValue)(PANEL);
            const tmpResult3 = ReanimatedRexport;
          }
          PANEL = PANEL1;
          if (!tmp6) {
            PANEL = constants.PANEL;
          }
        } else {
          let tmp9 = tmp6;
          if (!tmp6) {
            first = undefined;
            if (arg1 != null) {
              first = arg1[0];
            }
            tmp9 = true !== first;
          }
          if (!tmp9) {
            tmp9 = tmp7 !== constants.PIP;
          }
          if (!tmp9) {
            ReanimatedRexport.runOnJS(sharedValue)(constants.PANEL);
            const tmpResult4 = ReanimatedRexport;
          }
        }
        const tmp5 = _slicedToArray(arg0, 3);
      }
      obj = cheapWorkletShallowEqual;
      tmp3 = arg1;
    };
    const obj18 = { cheapWorkletArrayShallowEqual: tmp(tmp2[24]).cheapWorkletArrayShallowEqual, TransitionStates: tmp(tmp2[52]).TransitionStates, VoicePanelModes: tmp14, runOnJS: tmp(tmp2[23]).runOnJS, setMode: tmp5Result[1] };
    fn10.__closure = obj18;
    fn10.__workletHash = 5550443413922;
    fn10.__initData = __initData10;
    const animatedReaction3 = tmp(tmp2[23]).useAnimatedReaction(fn9, fn10);
    const obj19 = { mode: sharedValue1, controlsSpecs: tmp34Result, safeArea: sharedValue3, windowDimensions: sharedValue2 };
    const tmp104 = tmp8(tmp2[61])(obj19);
    __initData2 = tmp104;
    const tmpResult60 = tmp(tmp2[23]);
    const obj20 = { channelId, connected: isConnected, focusedId: stateFromStores1, layoutManager: first2, mode: first3, windowDimensions: sharedValue2, pipAvoidanceSpecs: tmp104, safeArea: sharedValue3 };
    const controllerPIPState = tmp(tmp2[62]).useControllerPIPState(obj20);
    closure_138_0 = channelId;
    closure_138_1 = first3;
    closure_138_2 = obj2.useRef(null);
    const items31 = [first3, stateFromStores1, channelId];
    const layoutEffect13 = obj2.useLayoutEffect(() => {
      const rTCConnection = RTCConnectionStore.getRTCConnection();
      let tmp = null != rTCConnection;
      if (tmp) {
        tmp = RTCConnectionStore.getChannelId() === channelId;
      }
      if (tmp) {
        if (first.current !== constants.PIP) {
          if (guildId === constants.PIP) {
            rTCConnection.setPipOpen(true);
          }
        }
        let tmp7 = first.current === constants.PIP;
        if (tmp7) {
          tmp7 = guildId !== constants.PIP;
        }
        if (tmp7) {
          rTCConnection.setPipOpen(false);
        }
      }
    }, items31);
    const layoutEffect14 = obj2.useLayoutEffect(() => {
      first.current = guildId;
    });
    closure_139_0 = channelId;
    closure_139_1 = sharedValue7;
    closure_139_2 = controllerPIPState;
    closure_139_3 = stateFromStores1;
    const items32 = [channelId];
    const callback9 = obj2.useCallback((arg0) => {
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
            if (tmp15) {
              const obj2 = { key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", icon: _modDef17618, content: null, disableAnimations: true, toastDurationMs: 3000 };
              const intl = util.intl;
              obj2.content = intl.string(util.t.O2IlPT);
              ToastActionCreatorsDefault.open(obj2);
              const result2 = trackActivityThermalStateNoticeShown.trackActivityThermalStateNoticeShown();
            }
            if (isVideoEnabledResult) {
              AudioActionCreatorsDefault.setVideoEnabled(false);
            }
            const result3 = EmbeddedActivitiesActionCreators.consumeRequestToReactToSeriousThermalState();
          }
        }
      }
    }, items32);
    closure_139_4 = callback9;
    const items33 = [stateFromStores1, controllerPIPState, callback9, channelId];
    const effect7 = obj2.useEffect(() => {
      const items = [sharedValue1, sharedValue7];
      const batchedStoreListener = new channelId(first[26]).BatchedStoreListener(items, () => {
        type({ focusedId: first1, pipParticipantId: id.id });
        const obj = { focusedId: first1, pipParticipantId: id.id };
      });
      batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
      return () => batchedStoreListener.detach();
    }, items33);
    const tmpResult61 = tmp(tmp2[62]);
    const fn11 = function f() {
      value = guildId.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      const items = [id, first.id];
      return items;
    };
    const obj21 = { focused: sharedValue7, pipState: controllerPIPState };
    fn11.__closure = obj21;
    fn11.__workletHash = 94735519164;
    fn11.__initData = __initData2;
    const fn12 = function h(arg0, arg1) {
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp6, tmp7] = arg0;
        const tmp5 = _slicedToArray(arg0, 2);
        const obj2 = { focusedId: tmp6, pipParticipantId: tmp7 };
        ReanimatedRexport.runOnJS(type)(obj2);
        const tmp2Result = ReanimatedRexport;
      }
      obj = cheapWorkletShallowEqual;
      tmp = arg1;
    };
    const obj22 = { cheapWorkletArrayShallowEqual: tmp(tmp2[24]).cheapWorkletArrayShallowEqual, runOnJS: tmp(tmp2[23]).runOnJS, handleStateUpdates: callback9 };
    fn12.__closure = obj22;
    fn12.__workletHash = 15246095289306;
    fn12.__initData = sharedValue14;
    const animatedReaction4 = tmp(tmp2[23]).useAnimatedReaction(fn11, fn12);
    closure_140_0 = channelId;
    closure_140_1 = sharedValue7;
    closure_140_2 = sharedValue1;
    closure_140_3 = sharedValue;
    const items34 = [channelId];
    const callback10 = obj2.useCallback((arg0) => {
      ({ focusedParticipantId, connectedValue } = arg0);
      if (connectedValue) {
        connectedValue = tmp === constants.PANEL;
      }
      let tmp3 = null != focusedParticipantId;
      if (tmp3) {
        tmp3 = isActivityParticipant(ChannelRTCStore.getParticipant(channelId, focusedParticipantId));
      }
      if (tmp3) {
        tmp3 = connectedValue;
      }
      const state = VoicePanelStore.getState();
      state.setIsActivityFocused(tmp3);
    }, items34);
    closure_140_4 = callback10;
    const tmpResult62 = tmp(tmp2[23]);
    class S {
      constructor() {
        value = guildId.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        items = [, , ];
        items[0] = id;
        items[1] = closure_2.get();
        items[2] = closure_3.get();
        return items;
      }
    }
    const obj23 = { focused: sharedValue7, mode: sharedValue1, connected: sharedValue };
    S.__closure = obj23;
    S.__workletHash = 16641161683997;
    S.__initData = __initData;
    const fn13 = function h(arg0, arg1) {
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp6, tmp7, tmp8] = arg0;
        const tmp5 = _slicedToArray(arg0, 3);
        const obj2 = { focusedParticipantId: tmp6, voicePanelMode: tmp7, connectedValue: tmp8 };
        ReanimatedRexport.runOnJS(type)(obj2);
        const tmp2Result = ReanimatedRexport;
      }
      obj = cheapWorkletShallowEqual;
      tmp = arg1;
    };
    const obj24 = { cheapWorkletArrayShallowEqual: tmp(tmp2[24]).cheapWorkletArrayShallowEqual, runOnJS: tmp(tmp2[23]).runOnJS, handleAnimatedReaction: callback10 };
    fn13.__closure = obj24;
    fn13.__workletHash = 15290799116693;
    fn13.__initData = callback7;
    const animatedReaction5 = tmp(tmp2[23]).useAnimatedReaction(S, fn13);
    closure_141_0 = setControlsMode;
    const items35 = [setControlsMode];
    const callback11 = obj2.useCallback(() => {
      channelId({ mode: constants2.FLOATING_DEFAULT });
    }, items35);
    const obj25 = { onTransition: callback11 };
    tmp8(tmp2[22])(obj25);
    closure_142_0 = callback5;
    closure_142_1 = obj2.useRef(0);
    const tmpResult63 = tmp(tmp2[23]);
    const items36 = [tmp3];
    const stateFromStores3 = tmp(tmp2[26]).useStateFromStores(items36, () => sharedValue3.getSpeakingWhileMuted());
    closure_142_2 = stateFromStores3;
    const items37 = [stateFromStores3, callback5];
    const effect8 = obj2.useEffect(() => {
      if (first) {
        const _performance = performance;
        if (performance.now() - guildId.current >= closure_33) {
          const _performance2 = performance;
          tmp2.current = performance.now();
          channelId();
          const obj2 = { key: "SPEAKING_WHILE_MUTED", icon: _modDef9798, content: null, toastDurationMs: 3000 };
          const intl = util.intl;
          obj2.content = intl.string(util.t["29gnR4"]);
          ToastActionCreatorsDefault.open(obj2);
        }
      }
    }, items37);
    tmp8(tmp2[63])(channelId, sharedValue1, tmp5Result[1], sharedValue);
    tmp8(tmp2[64])();
    closure_143_0 = isConnected;
    closure_143_1 = first3;
    closure_143_2 = stateFromStores1;
    closure_143_3 = stateFromStores2;
    const tmpResult64 = tmp(tmp2[26]);
    const items38 = [tmp75];
    const stateFromStoresObject = tmp(tmp2[26]).useStateFromStoresObject(items38, () => {
      const currentEmbeddedActivity = sharedValue6.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      const obj2 = { applicationId, instanceId: compositeInstanceId, activityOrientationLockState: null };
      if (null != applicationId) {
        let UNLOCKED2 = sharedValue6.getOrientationLockStateForApp(applicationId);
        if (UNLOCKED2 == null) {
          UNLOCKED2 = callback4.UNLOCKED;
        }
        let UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = callback4.UNLOCKED;
      }
      obj2.activityOrientationLockState = UNLOCKED;
      return obj2;
    });
    let applicationId = stateFromStoresObject.applicationId;
    closure_143_4 = applicationId;
    const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
    closure_143_5 = activityOrientationLockState;
    const instanceId = stateFromStoresObject.instanceId;
    closure_143_6 = instanceId;
    const items39 = [applicationId, isConnected, first3, activityOrientationLockState, stateFromStores1, stateFromStores2, instanceId];
    const layoutEffect15 = obj2.useLayoutEffect(() => {
      let tmp = first1;
      if (!first1) {
        const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        tmp = isGuildStageVoiceResult;
      }
      if (!tmp) {
        if (guildId === constants.PANEL) {
          if (channelId) {
            if (null != type) {
              const obj = { applicationId: tmp12, instanceId: sharedValue12 };
              if (first === obj3.getEmbeddedActivityParticipantId(obj)) {
                applyActivityOrientationLockDefault(sharedValue);
              }
              obj3 = ChannelRTCParticipants;
            }
            DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
          }
        }
        const result = DeviceOrientation.restoreDefaultOrientation();
      }
    }, items39);
    const layoutEffect16 = obj2.useLayoutEffect(() => () => {
      channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      if (!isGuildStageVoiceResult) {
        const result = channelId(first[49]).restoreDefaultOrientation();
        const obj2 = channelId(first[49]);
      }
    }, []);
    closure_144_0 = channelId;
    closure_144_1 = isConnected;
    closure_144_2 = first3;
    const items40 = [first3, channelId, isConnected];
    const effect9 = obj2.useEffect(() => {
      let tmp2 = first !== constants.DISMISSED;
      if (tmp2) {
        tmp2 = guildId;
      }
      if (tmp2) {
        const obj2 = { video_layout: collapsedCategories(first) };
        const obj = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channelId));
        obj.track(constants3.VIDEO_LAYOUT_TOGGLED, obj2);
      }
    }, items40);
    closure_145_0 = sharedValue1;
    closure_145_1 = obj2.useRef(-1);
    const tmpResult65 = tmp(tmp2[26]);
    sharedValue14 = tmp(tmp2[23]).useSharedValue(null);
    closure_145_2 = sharedValue14;
    const items41 = [sharedValue1, sharedValue14];
    callback12 = obj2.useCallback((arg0) => {
      if (channelId.get() === constants.PANEL) {
        let result = first.set(arg0);
        if (null != arg0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(guildId.current);
          const _setTimeout = setTimeout;
          guildId.current = setTimeout(() => {
            const result = first.set(null);
          }, VoicePanelFloatingCTAUtils.FLOATING_CTA_HIDE_TIMEOUT);
        }
      }
    }, items41);
    const layoutEffect17 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current), []);
    __initData3 = obj2.useRef(undefined);
    const obj26 = { value: tmp5(obj2.useState(() => ({ channelId, channelType: type, connected: sharedValue, contentDimensions: sharedValue12, controlsSpecs, dismissPanel, dismissToPIPGestureRef, dragScrolling: sharedValue6, focused: sharedValue7, generateStateLocker: callback3, guildId, hideControls: callback4, isCall: flag, isFocusedVideoZoomed: sharedValue9, layoutManager: first2, mode: sharedValue1, morphablePanelMode: derivedValue, mountedCards: first1, pipAvoidanceSpecs, preJoinContentSize: sharedValue8, refreshIdleTimeout: callback6, safeArea: sharedValue3, scrollPosition: sharedValue5, setControlsMode, setFocused: callback7, setIsFocusedVideoZoomed, setMode, setShowFloatingCTA: callback12, showControls: callback5, showFloatingCTA: sharedValue14, streamOutputSinkStack, usePIPState: VoicePanelPIPStateContext.usePIPState, useReducedMotion: sharedValue10, windowDimensions: sharedValue2, wrapperDimensions: sharedValue4, wrapperOffset: sharedValue11, pipHandoff })), 1)[0], children: null };
    const obj27 = { value: controllerPIPState, children: null };
    let tmp136 = guildId;
    if (guildId == null) {
      tmp136 = null;
    }
    const obj28 = { value: tmp136, children: channelId.children };
    obj27.children = setMode(tmp8(tmp2[67]).Provider, obj28);
    obj26.children = setMode(tmp(tmp2[65]).VoicePanelPIPStateContext.Provider, obj27);
    return setMode(tmp8(tmp2[66]).Provider, obj26);
  }
  tmp36 = sharedValue10;
  const tmpResult50 = channelId(tmp2[23]);
};