// === Module 19534: VoicePanelController ===

// Module 19534 (VoicePanelController)
import DurationsDefault from "Durations" /* 1089 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useWindowDimensions from "useWindowDimensions" /* 1493 */;
import _mod1705 from "module_1705" /* 1705 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5061 */;
import native from "native" /* 5199 */;
import ChatInputUtils from "ChatInputUtils" /* 5323 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5837 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5888 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5889 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6047 */;
import ChannelRTCParticipants from "ChannelRTCParticipants" /* 6906 */;
import DeviceOrientation from "DeviceOrientation" /* 8977 */;
import MicrophoneSlashIcon from "MicrophoneSlashIcon" /* 9322 */;
import cheapWorkletShallowEqual from "cheapWorkletShallowEqual" /* 10210 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 11327 */;
import VoicePanelCardLayoutManagerDefault from "VoicePanelCardLayoutManager" /* 11365 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11367 */;
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators" /* 11889 */;
import VideoSlashIcon from "VideoSlashIcon" /* 15137 */;
import applyActivityOrientationLockDefault from "applyActivityOrientationLock" /* 19499 */;
import trackActivityThermalStateNoticeShown from "trackActivityThermalStateNoticeShown" /* 19536 */;
import VoicePanelFloatingCTAUtils from "VoicePanelFloatingCTAUtils" /* 19537 */;
import useVoicePanelDockMorphStateDefault from "useVoicePanelDockMorphState" /* 19563 */;
import useIsVoicePanelParticipantFocusable from "useIsVoicePanelParticipantFocusable" /* 19564 */;
import useVoicePanelParticipantsDefault from "useVoicePanelParticipants" /* 19566 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 19575 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4988 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6898 */;
import AppFreezeStore from "AppFreezeStore" /* 8938 */;
import SafeAreaDisabledStore from "SafeAreaDisabledStore" /* 12011 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11868 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import MediaEngineStore from "MediaEngineStore" /* 2130 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5893 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5043 */;
import VoicePanelStore from "VoicePanelStore" /* 6930 */;

const require = globalThis.__r;

require = fn;
const AppState = fn(17).AppState;
const VoicePanelConstants = fn(11363);
({ VoicePanelModes: closure_17, getAnalyticsNameForVoicePanelMode: closure_18 } = VoicePanelConstants);
const VoicePanelControlsConstants = fn(11361);
({ CONTROLS_HEIGHT: closure_19, CONTROLS_HEIGHT_PTT: closure_20, CONTROLS_HIDE_TIMEOUT: closure_21, VoicePanelControlsModes: closure_22 } = VoicePanelControlsConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_23, ComponentActions: closure_24, InputModes: closure_25 } = Constants);
const ActivityPanelModes = fn(5781).ActivityPanelModes;
const isActivityParticipant = fn(5805).isActivityParticipant;
const MorphablePanelModes = fn(11364).MorphablePanelModes;
const jsx = fn(21).jsx;
let closure_30 = { code: "(function VoicePanelControllerTsx1(){let[focused,mode,connected]=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];})" };
let closure_31 = { code: "(function VoicePanelControllerTsx2(props,previous){let[cheapWorkletArrayShallowEqual,scheduleOnRN,handleAnimatedReaction]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;scheduleOnRN(handleAnimatedReaction,{focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});})" };
const MINUTE = DurationsDefault.Millis.MINUTE;
let closure_33 = { code: "(function VoicePanelControllerTsx3(){let[focused,pipState]=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];})" };
let closure_34 = { code: "(function VoicePanelControllerTsx4(props,previous){let[cheapWorkletArrayShallowEqual,scheduleOnRN,handleStateUpdates]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;scheduleOnRN(handleStateUpdates,{focusedId:focusedId,pipParticipantId:pipParticipantId});})" };
let closure_35 = { code: "(function VoicePanelControllerTsx5(value){let[isFocusedVideoZoomed]=this.__closure;isFocusedVideoZoomed.set(value);})" };
let closure_36 = { code: "(function VoicePanelControllerTsx6(){let[mode,VoicePanelModes,MorphablePanelModes]=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}})" };
let closure_37 = { code: "(function VoicePanelControllerTsx7(){let[controlsSpecs,VoicePanelControlsModes,scheduleOnRN,_queueHideControls]=this.__closure;const specs=controlsSpecs.get();if(specs.locked)return;if(specs.mode!==VoicePanelControlsModes.FLOATING_DEFAULT)return;scheduleOnRN(_queueHideControls);})" };
let closure_38 = { code: "(function VoicePanelControllerTsx8(){let[mode]=this.__closure;return mode.get();})" };
let closure_39 = { code: "(function VoicePanelControllerTsx9(value){let[VoicePanelModes,scheduleOnRN,_queueHideControls,_clearHideControlsQueue]=this.__closure;if(value===VoicePanelModes.PANEL){scheduleOnRN(_queueHideControls);}else{scheduleOnRN(_clearHideControlsQueue);}})" };
let closure_40 = { code: "(function VoicePanelControllerTsx10(){let[connected]=this.__closure;return connected.get();})" };
let closure_41 = { code: "(function VoicePanelControllerTsx11(connected){let[updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT]=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});})" };
let closure_42 = { code: "(function VoicePanelControllerTsx12({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){let[isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,scheduleOnRN,executeLayoutManagerEffect]=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}scheduleOnRN(executeLayoutManagerEffect);})" };
let closure_43 = { code: "(function VoicePanelControllerTsx13(){let[connected,mode,sharedTransitionState]=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];})" };
let closure_44 = { code: "(function VoicePanelControllerTsx14(props,previous){let[cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,scheduleOnRN,setMode,isDockEnabled]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){scheduleOnRN(setMode,VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}scheduleOnRN(setMode,previousMode);}else if(!isDockEnabled&&!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){scheduleOnRN(setMode,VoicePanelModes.PANEL);}})" };
let closure_45 = { code: "(function VoicePanelControllerTsx15(){let[mode,controlsSpecs]=this.__closure;return[mode.get(),controlsSpecs.get().mode];})" };
let closure_46 = { code: "(function VoicePanelControllerTsx16(props,previous){let[cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,scheduleOnRN,dismissKeyboard]=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){scheduleOnRN(dismissKeyboard);}})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default function VoicePanelController(channelId) {
  channelId = channelId.channelId;
  _require = channelId;
  const guildId = channelId.guildId;
  importDefault = guildId;
  ({ transitionState, transitionCleanUp } = channelId);
  _slicedToArray = undefined;
  noop = undefined;
  let type;
  let sharedValue;
  let sharedValue12;
  let sharedValue6;
  let sharedValue7;
  let first4;
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
  let pipHandoff;
  closure_24 = undefined;
  let callback3;
  let controlsSpecs;
  let callback5;
  let callback4;
  let callback6;
  let setControlsMode;
  let first5;
  let callback7;
  let dismissPanel;
  let callback8;
  let stateFromStores2;
  let pipAvoidanceSpecs;
  let sharedValue14;
  let callback13;
  let dismissToPIPGestureRef;
  let tmp = _require;
  let items1 = [sharedValue8];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => sharedValue8.getMode() === callback3.PUSH_TO_TALK);
  let obj2 = noop;
  let first = _slicedToArray(noop.useState(() => {
    const tmp = _undefined(streamOutputSinkStack[61]);
    return new _undefined(streamOutputSinkStack[61])(sharedValue8.getMediaEngine());
  }), 1)[0];
  dependencyMap = first;
  const items2 = [first];
  const effect = noop.useEffect(() => () => streamOutputSinkStack.cleanUp(), items2);
  let obj = require("initialize");
  ({ items, isConnected } = useVoicePanelParticipantsDefault(channelId, guildId));
  closure_129_0 = items;
  closure_129_1 = isConnected;
  const first1 = _slicedToArray(noop.useState(() => new Set()), 1)[0];
  closure_129_2 = first1;
  const items3 = [isConnected, items, first1];
  const effect1 = noop.useEffect(() => {
    if (c1) {
      closure_0 = channelId(streamOutputSinkStack[60]).runAfterInteractions(() => {
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
      streamOutputSinkStack.clear();
    }
  }, items3);
  _slicedToArray = first1;
  const tmp9 = useVoicePanelParticipantsDefault(channelId, guildId);
  const first2 = _slicedToArray(noop.useState(require("MobileRTCV2Experiment").useIsMobileRTCV2Enabled("VoicePanelController")), 1)[0];
  noop = first2;
  const items4 = [channelId, first2];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (c4) {
      state = VoicePanelStore.getState();
      const result = state.setChannelPanelWithDock(c0, true);
      return () => {
        state = sharedValue2.getState();
        return state.setChannelPanelWithDock(channelId, false);
      };
    }
  }, items4);
  closure_130_0 = channelId;
  closure_130_1 = isConnected;
  closure_130_2 = items;
  closure_130_3 = stateFromStores;
  closure_130_4 = first2;
  closure_130_5 = undefined;
  closure_130_6 = undefined;
  closure_130_7 = undefined;
  closure_130_8 = undefined;
  let channel = sharedValue1.getChannel(channelId);
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
  let obj3 = require("MobileRTCV2Experiment");
  sharedValue = tmp(1652).useSharedValue(isConnected);
  const first3 = tmp5(obj2.useState(() => {
    if (!c4) {
      return c4;
    } else {
      if (!c4) {
        const voicePanelsPIP = VoicePanelStore.getState().voicePanelsPIP;
        if (!voicePanelsPIP.has(tmp2)) {
          let PIP = constants.PANEL;
        }
      }
      PIP = constants.PIP;
    }
  }), 1)[0];
  const tmpResult = tmp(1652);
  if (first3) {
    let PANEL = tmp17.PIP;
    let tmp18 = tmp17;
  } else {
    PANEL = tmp17.PANEL;
    tmp18 = tmp17;
  }
  sharedValue1 = tmp(1652).useSharedValue(PANEL);
  const tmpResult36 = tmp(1652);
  let size = tmp(1493).getWindowDimensions();
  closure_130_5 = size;
  const tmpResult37 = tmp(1493);
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height };
  sharedValue2 = tmp(1652).useSharedValue(size1);
  const tmpResult38 = tmp(1652);
  const rect = tmp(1627).getSafeAreaInsets();
  closure_130_6 = rect;
  const tmpResult39 = tmp(1627);
  let merged = Object.assign(rect);
  sharedValue3 = tmp(1652).useSharedValue({});
  let obj4 = {};
  const tmpResult40 = tmp(1652);
  const maxPanelWidth = tmp(19562).getMaxPanelWidth({ windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right });
  let obj5 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const tmpResult41 = tmp(19562);
  if (first3) {
    let obj6 = { drawerHeight: null, drawerWidth: null, drawerX: 0, drawerY: 0, pipX: -1, pipY: -1, animated: false, mode: null };
    ({ height: obj18.drawerHeight, width: obj18.drawerWidth } = size);
    obj6.mode = tmp18.PIP;
    let obj7 = obj6;
  } else {
    obj7 = { drawerHeight: size.height, drawerWidth: maxPanelWidth, drawerX: tmp(19562).getPanelX(size.width, maxPanelWidth), drawerY: size.height, pipX: -1, pipY: -1, animated: true, mode: tmp18.PANEL };
    const tmpResult43 = tmp(19562);
  }
  sharedValue4 = tmp(1652).useSharedValue(obj7);
  const tmpResult42 = tmp(1652);
  sharedValue5 = tmp(1652).useSharedValue(0);
  const tmpResult44 = tmp(1652);
  sharedValue6 = tmp(1652).useSharedValue(false);
  const tmpResult45 = tmp(1652);
  sharedValue7 = tmp(1652).useSharedValue(null);
  const tmpResult46 = tmp(1652);
  sharedValue8 = tmp(1652).useSharedValue(0);
  const tmpResult47 = tmp(1652);
  sharedValue9 = tmp(1652).useSharedValue(false);
  const items5 = [stateFromStores2, sharedValue9];
  _require = undefined;
  [tmp30, tmp31] = items5;
  class VoicePanelControllerTsx5 {
    constructor(arg0) {
      result = closure_0.set(channelId);
      return;
    }
  }
  const items6 = [tmp31];
  VoicePanelControllerTsx5.__closure = items6;
  VoicePanelControllerTsx5.__workletHash = 1592214518983;
  VoicePanelControllerTsx5.__initData = tmp30;
  const items7 = [sharedValue9];
  setIsFocusedVideoZoomed = obj2.useCallback(VoicePanelControllerTsx5, items7);
  const tmpResult48 = tmp(1652);
  sharedValue10 = tmp(1652).useSharedValue(sharedValue.useReducedMotion);
  closure_130_7 = sharedValue10;
  const items8 = [sharedValue10];
  const effect2 = obj2.useEffect(() => {
    function onChange() {
      const result = sharedValue12.set(sharedValue.useReducedMotion);
    }
    let result = sharedValue.addReactChangeListener(onChange);
    return () => {
      const result = AccessibilityStore.removeReactChangeListener(onChange);
    };
  }, items8);
  const tmpResult49 = tmp(1652);
  sharedValue11 = tmp(1652).useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const tmp36 = useVoicePanelDockMorphStateDefault({ isDockEnabled: first2, mountsMinimized: first3, mode: sharedValue1, connected: sharedValue, safeArea: sharedValue3, wrapperOffset: sharedValue11, wrapperDimensions: sharedValue4 });
  const tmpResult50 = tmp(1652);
  const items9 = [pipAvoidanceSpecs, sharedValue1, tmp18, callback4];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp37, tmp38, tmp39, tmp40] = items9;
  class VoicePanelControllerTsx6 {
    constructor() {
      value = closure_0.get();
      if (closure_1.PANEL === value) {
        tmp5 = closure_2;
        return closure_2.PANEL;
      } else if (tmp2.PIP === value) {
        tmp4 = closure_2;
        return closure_2.PIP;
      } else {
        tmp3 = closure_2;
        return closure_2.UNDEFINED;
      }
    }
  }
  const items10 = [tmp38, tmp39, tmp40];
  VoicePanelControllerTsx6.__closure = items10;
  VoicePanelControllerTsx6.__workletHash = 447322024316;
  VoicePanelControllerTsx6.__initData = tmp37;
  derivedValue = tmp(1652).useDerivedValue(VoicePanelControllerTsx6);
  first4 = tmp5(obj2.useState(() => {
    const obj = new VoicePanelCardLayoutManagerDefault(c0);
    obj.updateItems(c2);
    obj.updateProps({ windowWidth: type.width, windowHeight: type.height, safeAreaLeft: sharedValue.left, safeAreaRight: sharedValue.right, safeAreaTop: sharedValue.top, safeAreaBottom: sharedValue.bottom, controlBarSize: c3 ? dependencyMap : expandedHeight });
    return obj;
  }), 1)[0];
  closure_130_8 = first4;
  const items11 = [first4];
  const layoutEffect1 = obj2.useLayoutEffect(() => () => sharedValue6.cleanUp(), items11);
  const tmpResult51 = tmp(1652);
  sharedValue12 = tmp(1652).useSharedValue(first4.getContentDimensions());
  pipHandoff = tmp5(obj2.useState(() => new _undefined(streamOutputSinkStack[38])()), 1)[0];
  closure_24 = tmp36;
  closure_131_0 = sharedValue1;
  closure_131_1 = isConnected;
  closure_131_2 = stateFromStores;
  closure_131_3 = undefined;
  closure_131_4 = undefined;
  closure_131_5 = undefined;
  closure_131_6 = undefined;
  closure_131_7 = undefined;
  closure_131_8 = undefined;
  closure_131_9 = undefined;
  tmp(1652);
  const obj8 = { mode: derivedValue.FLOATING_DEFAULT, locked: false, height: null, pushToTalk: null };
  if (stateFromStores) {
    if (isConnected) {
      let tmp47 = sharedValue10;
    }
    obj8.height = tmp47;
    obj8.pushToTalk = stateFromStores;
    const tmp45Result = tmp45(obj8);
    closure_131_3 = tmp45Result;
    closure_131_4 = obj2.useRef(-1);
    const callback1 = obj2.useCallback(() => {
      if (-1 !== isDockEnabled.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(isDockEnabled.current);
        isDockEnabled.current = -1;
      }
    }, []);
    closure_131_5 = callback1;
    const items12 = [tmp45Result, callback1, sharedValue1];
    const callback2 = obj2.useCallback(() => {
      type();
      if (-1 === isDockEnabled.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
          type();
          if (channelId.get() === sharedValue4.PANEL) {
            let locked = mountedCards.get().mode !== derivedValue.FLOATING_DEFAULT;
            if (!locked) {
              locked = mountedCards.get().locked;
            }
            if (!locked) {
              const obj2 = { mode: derivedValue.HIDDEN };
              c1(c2[41])(mountedCards, obj2);
            }
          }
        }, guild);
      }
    }, items12);
    closure_131_6 = callback2;
    const items13 = [tmp45Result, callback2];
    const memo = obj2.useMemo(() => {
      closure_0 = _undefined(streamOutputSinkStack[42]).debounce(function _setControlsMode(mode, returnMode) {
        c1(c2[41])(mountedCards, { mode, returnMode });
        sharedValue();
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
            updateSharedValueIfChangedDefault(c3, obj2);
            sharedValue();
          }
        }
      };
    }, items13);
    const cancelControlsDebounce = memo.cancelControlsDebounce;
    closure_131_7 = cancelControlsDebounce;
    setControlsMode = memo.setControlsMode;
    closure_131_8 = setControlsMode;
    const _Set = Set;
    const set = new Set();
    closure_131_9 = obj2.useRef(set);
    const items14 = [tmp45Result, callback2, callback1];
    const items15 = [setControlsMode];
    callback3 = obj2.useCallback((arg0) => {
      let v4Result = arg0;
      if (arg0 == null) {
        v4Result = channelId(streamOutputSinkStack[43]).v4();
        let obj = channelId(streamOutputSinkStack[43]);
      }
      channelId = v4Result;
      return {
        lock(mode) {
          const current = sharedValue7.current;
          if (!current.has(v4Result)) {
            type();
            const current2 = sharedValue7.current;
            current2.add(v4Result);
            const obj = { locked: sharedValue7.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            updateSharedValueIfChangedDefault(c3, obj);
          }
        },
        unlock(mode) {
          const current = sharedValue7.current;
          if (current.has(v4Result)) {
            const current2 = sharedValue7.current;
            current2.delete(v4Result);
            const obj = { locked: sharedValue7.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            updateSharedValueIfChangedDefault(c3, obj);
            sharedValue();
          }
        }
      };
    }, items14);
    const items16 = [setControlsMode, tmp45Result];
    callback4 = obj2.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { debounce: false };
      }
      sharedValue6({ mode: constants2.HIDDEN, debounce: obj.debounce });
    }, items15);
    callback5 = obj2.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let debounce = obj.debounce;
      if (debounce === undefined) {
        debounce = false;
      }
      let mode = mountedCards.get().returnMode;
      if (mode == null) {
        mode = constants2.FLOATING_DEFAULT;
      }
      return sharedValue6({ mode, debounce });
    }, items16);
    const items17 = [sharedValue14, tmp45Result, tmp46, tmp(1705).scheduleOnRN, callback2];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    _slicedToArray = undefined;
    [tmp62, tmp63, tmp64, tmp65, tmp66] = items17;
    class VoicePanelControllerTsx7 {
      constructor() {
        value = closure_0.get();
        if (!value.locked) {
          tmp2 = closure_1;
          if (value.mode === closure_1.FLOATING_DEFAULT) {
            tmp3 = closure_2;
            tmp4 = closure_3;
            tmp5 = closure_2(closure_3);
          }
        }
        return;
      }
    }
    const items18 = [tmp63, tmp64, tmp65, tmp66];
    VoicePanelControllerTsx7.__closure = items18;
    VoicePanelControllerTsx7.__workletHash = 216796253323;
    VoicePanelControllerTsx7.__initData = tmp62;
    const items19 = [tmp45Result, callback2];
    callback6 = obj2.useCallback(VoicePanelControllerTsx7, items19);
    const items20 = [callback13, sharedValue1];
    _require = undefined;
    [tmp70, tmp71] = items20;
    class VoicePanelControllerTsx8 {
      constructor() {
        return closure_0.get();
      }
    }
    const items21 = [tmp71];
    VoicePanelControllerTsx8.__closure = items21;
    VoicePanelControllerTsx8.__workletHash = 6699398210324;
    VoicePanelControllerTsx8.__initData = tmp70;
    const items22 = [dismissToPIPGestureRef, tmp18, tmp(1705).scheduleOnRN, callback2, callback1];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    _slicedToArray = undefined;
    [tmp74, tmp75, tmp76, tmp77, tmp78] = items22;
    class VoicePanelControllerTsx9 {
      constructor(arg0) {
        if (channelId === closure_0.PANEL) {
          tmp4 = closure_1;
          tmp5 = closure_2;
          tmp6 = closure_1(closure_2);
        } else {
          tmp = closure_1;
          tmp2 = closure_3;
          tmp3 = closure_1(closure_3);
        }
        return;
      }
    }
    const items23 = [tmp75, tmp76, tmp77, tmp78];
    VoicePanelControllerTsx9.__closure = items23;
    VoicePanelControllerTsx9.__workletHash = 10393098854365;
    VoicePanelControllerTsx9.__initData = tmp74;
    const animatedReaction = tmp(1652).useAnimatedReaction(VoicePanelControllerTsx8, VoicePanelControllerTsx9);
    const items24 = [stateFromStores, tmp45Result, isConnected];
    const layoutEffect2 = obj2.useLayoutEffect(() => {
      if (c2) {
        if (c1) {
          let tmp5 = dependencyMap;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = expandedHeight;
    }, items24);
    const tmpResult54 = tmp(1652);
    const items25 = [closure_40, sharedValue];
    _require = undefined;
    [tmp83, tmp84] = items25;
    class VoicePanelControllerTsx10 {
      constructor() {
        return closure_0.get();
      }
    }
    const items26 = [tmp84];
    VoicePanelControllerTsx10.__closure = items26;
    VoicePanelControllerTsx10.__workletHash = 739056177037;
    VoicePanelControllerTsx10.__initData = tmp83;
    const items27 = [closure_41, tmp8(11367), tmp45Result, stateFromStores, sharedValue10, ];
    let tmp87 = setIsFocusedVideoZoomed;
    items27[5] = setIsFocusedVideoZoomed;
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    _slicedToArray = undefined;
    noop = undefined;
    [tmp89, tmp90, tmp91, tmp92, tmp93, tmp94] = items27;
    class VoicePanelControllerTsx11 {
      constructor(arg0) {
        if (closure_2) {
          tmp4 = channelId;
          if (channelId) {
            tmp5 = closure_3;
          }
          obj = { height: null, pushToTalk: null };
          obj.height = tmp5;
          obj.pushToTalk = tmp3;
          tmpResult = tmp(tmp2, obj);
          return;
        }
        tmp5 = closure_4;
        return;
      }
    }
    const items28 = [tmp90, tmp91, tmp92, tmp93, tmp94];
    VoicePanelControllerTsx11.__closure = items28;
    VoicePanelControllerTsx11.__workletHash = 17384584861986;
    VoicePanelControllerTsx11.__initData = tmp89;
    const animatedReaction1 = tmp(1652).useAnimatedReaction(VoicePanelControllerTsx10, VoicePanelControllerTsx11);
    class VoicePanelControllerTsx5 {
      constructor(arg0) {
        result = closure_0.set(channelId);
        return;
      }
    }
    tmp96[0] = cancelControlsDebounce;
    tmp96[1] = callback1;
    const layoutEffect3 = obj2.useLayoutEffect(() => () => {
      sharedValue12();
      type();
    }, tmp96);
    const items29 = [setControlsMode];
    const effect3 = obj2.useEffect(() => {
      function closeTiV() {
        sharedValue6({ mode: derivedValue.FLOATING_DEFAULT });
      }
      let ComponentDispatch = channelId(streamOutputSinkStack[44]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(closure_24.VOICE_PANEL_TIV_CLOSE, closeTiV);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants4.VOICE_PANEL_TIV_CLOSE, closeTiV);
      };
    }, items29);
    controlsSpecs = tmp45Result;
    ({ beginDockEntry, dockJoinMorphOrigin } = tmp36);
    closure_132_0 = channelId;
    closure_132_1 = isConnected;
    closure_132_2 = sharedValue1;
    closure_132_3 = sharedValue;
    closure_132_4 = transitionState;
    closure_132_5 = tmp45Result;
    closure_132_6 = setControlsMode;
    closure_132_7 = first2;
    closure_132_10 = undefined;
    const tmp5Result = tmp5(obj2.useState(() => {
      if (!sharedValue12) {
        const voicePanelsPIP = VoicePanelStore.getState().voicePanelsPIP;
        if (!voicePanelsPIP.has(tmp)) {
          let PIP = constants.PANEL;
        }
        return PIP;
      }
      PIP = constants.PIP;
    }), 2);
    first5 = tmp5Result[0];
    closure_132_8 = first5;
    closure_132_9 = tmp101;
    closure_133_0 = channelId;
    closure_133_1 = isConnected;
    closure_133_2 = first2;
    closure_133_3 = first3;
    closure_133_4 = tmp101;
    closure_133_5 = beginDockEntry;
    closure_133_6 = sharedValue4;
    closure_133_7 = dockJoinMorphOrigin;
    closure_133_8 = undefined;
    class VoicePanelControllerTsx6 {
      constructor() {
        value = closure_0.get();
        if (closure_1.PANEL === value) {
          tmp5 = closure_2;
          return closure_2.PANEL;
        } else if (tmp2.PIP === value) {
          tmp4 = closure_2;
          return closure_2.PIP;
        } else {
          tmp3 = closure_2;
          return closure_2.UNDEFINED;
        }
      }
    }
    const items30 = [channelId, dockJoinMorphOrigin, isConnected, first2, tmp5Result[1], sharedValue4];
    const layoutEffect4 = obj2.useLayoutEffect(() => {
      if (c2) {
        if (c1) {
          if (!sharedValue6.current) {
            tmp2.current = true;
            if (null == ChannelRTCStore.getSelectedParticipantId(c0)) {
              value = sharedValue.get();
              const size = { x: null, y: null, width: null, height: null };
              ({ drawerX: obj.x, drawerY: obj.y, drawerWidth: obj.width, drawerHeight: obj.height } = value);
              const result = sharedValue12.set(size);
              isDockEnabled(constants.PIP);
            }
          }
        }
      }
    }, items30);
    const items31 = [beginDockEntry, first3];
    const layoutEffect5 = obj2.useLayoutEffect(() => {
      if (c3) {
        type();
      }
    }, items31);
    const items32 = [sharedValue1];
    callback7 = obj2.useCallback((arg0) => {
      let tmp2 = arg0 === constants.PANEL;
      if (tmp2) {
        tmp2 = streamOutputSinkStack.get() === tmp.PIP;
      }
      if (tmp2) {
        ChatInputUtils.dismissKeyboard();
      }
      sharedValue7(arg0);
    }, items32);
    closure_132_10 = callback7;
    const layoutEffect6 = obj2.useLayoutEffect(() => {
      const result = streamOutputSinkStack.set(sharedValue6);
      if (c4 !== native.TransitionStates.YEETED) {
        const result1 = mountedCards.set(c1);
      }
    });
    const items33 = [channelId, sharedValue, sharedValue1, tmp45Result, setControlsMode, callback7];
    dismissPanel = obj2.useCallback(() => {
      if (type.get().mode === constants2.DRAWER) {
        const obj = { mode: tmp.FLOATING_DEFAULT };
        sharedValue(obj);
        flag = true;
      } else if (mountedCards.get()) {
        let flag2 = streamOutputSinkStack.get() === constants.PANEL;
        if (flag2) {
          flag(tmp7.PIP);
          flag2 = true;
        }
        flag = flag2;
      } else {
        state = VoicePanelStore.getState();
        state.closeChannel(c0);
        flag = true;
      }
      return flag;
    }, items33);
    closure_134_0 = guildId;
    closure_134_1 = channelId;
    closure_134_2 = sharedValue7;
    const tmp86 = sharedValue10;
    const tmpResult55 = tmp(1652);
    const items34 = [sharedValue6];
    const stateFromStores1 = tmp(504).useStateFromStores(items34, () => ChannelRTCStore.getSelectedParticipantId(c1));
    closure_134_3 = stateFromStores1;
    const items35 = [guildId, channelId];
    callback8 = obj2.useCallback((id2) => {
      let result = null == id2;
      if (!result) {
        result = useIsVoicePanelParticipantFocusable.isVoicePanelParticipantFocusable(c0, c1, id2);
      }
      if (result) {
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(c1, id2);
      }
    }, items35);
    closure_134_4 = callback8;
    closure_134_5 = obj2.useRef(undefined);
    const targetDimensions = first4.getTargetDimensions(stateFromStores1);
    closure_134_6 = targetDimensions;
    const items36 = [sharedValue7, stateFromStores1, targetDimensions];
    const layoutEffect7 = obj2.useLayoutEffect(() => {
      let tmp2 = null;
      if (null != c3) {
        const obj = { id: tmp };
        const merged = Object.assign(sharedValue);
        tmp2 = obj;
      }
      const current = type.current;
      if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
        type.current = tmp2;
        const result = streamOutputSinkStack.set(tmp2);
      }
      obj2 = cheapWorkletShallowEqual;
      tmp6 = tmp2;
    }, items36);
    const tmp112 = tmp8(19564)(guildId, channelId, stateFromStores1);
    closure_134_7 = tmp112;
    const items37 = [stateFromStores1, tmp112, callback8];
    const effect4 = obj2.useEffect(() => {
      if (null != c3) {
        if (!sharedValue12) {
          isDockEnabled(null);
        }
      }
    }, items37);
    const items38 = [channelId, callback8];
    const effect5 = obj2.useEffect(() => () => {
      const channel = sharedValue1.getChannel(sharedValue5.getVoiceChannelId());
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      let tmp2 = true === isGuildStageVoiceResult;
      if (tmp2) {
        tmp2 = !c0(dependencyMap[50]).isStageUnifiedCall(channel, "VoicePanelController");
        const obj3 = c0(dependencyMap[50]);
      }
      if (tmp2) {
        tmp2 = sharedValue5.getVoiceChannelId() === _undefined;
      }
      if (!tmp2) {
        isDockEnabled(null);
      }
    }, items38);
    const tmpResult56 = tmp(504);
    const items39 = [sharedValue12];
    stateFromStores2 = tmp(504).useStateFromStores(items39, () => {
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      let tmp4 = null != connectedActivityLocation;
      const activityPanelMode = EmbeddedActivitiesStore.getActivityPanelMode();
      if (tmp4) {
        tmp4 = embeddedActivityLocationChannelId !== c0;
      }
      if (tmp4) {
        tmp4 = activityPanelMode === ActivityPanelModes.PANEL;
      }
      return tmp4;
    });
    let tmp117 = first2;
    if (first2) {
      tmp117 = transitionState === tmp(5199).TransitionStates.YEETED;
    }
    closure_135_0 = sharedValue2;
    closure_135_1 = sharedValue3;
    closure_135_2 = sharedValue12;
    closure_135_3 = isConnected;
    closure_135_4 = first4;
    const tmp5Result3 = tmp5(obj2.useState(() => {
      const windowDimensions = channelId(streamOutputSinkStack[35]).getWindowDimensions();
      ({ width, height } = windowDimensions);
      const size = { width, height, landscape: width > height };
      return size;
    }), 2);
    const first6 = tmp5Result3[0];
    closure_135_5 = first6;
    closure_135_6 = tmp120;
    const tmp115 = sharedValue12;
    const tmpResult57 = tmp(504);
    const tmp5Result4 = tmp5(obj2.useState(tmp(1627).getSafeAreaInsets()), 2);
    const first7 = tmp5Result4[0];
    closure_135_7 = first7;
    closure_135_8 = tmp123;
    const tmpResult58 = tmp(1627);
    const managerSubscription = tmp(11365).useManagerSubscription(first4);
    closure_135_9 = managerSubscription;
    const obj9 = { timeout: -1, layoutKey: managerSubscription, connected: isConnected, windowState: first6, safeAreaState: first7, contentDimensions: { width: 0, height: 0 } };
    const ref = obj2.useRef(obj9);
    closure_135_10 = ref;
    closure_136_0 = isConnected;
    closure_136_1 = ref;
    closure_136_2 = tmp120;
    closure_136_3 = tmp123;
    const items40 = [ref, isConnected, tmp5Result3[1], tmp5Result4[1]];
    const layoutEffect8 = obj2.useLayoutEffect(() => {
      if (_undefined.current.connected !== c0) {
        _undefined.current.connected = tmp;
        streamOutputSinkStack((safeAreaState) => {
          let windowState = safeAreaState;
          const windowDimensions = c0(1493).getWindowDimensions();
          ({ width, height } = windowDimensions);
          _undefined.current.windowState = { width, height, landscape: width > height };
          const obj = c0(1493);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, _undefined.current.windowState)) {
            windowState = _undefined.current.windowState;
          }
          return windowState;
        });
        mountedCards((safeAreaState) => {
          _undefined.current.safeAreaState = c0(1627).getSafeAreaInsets();
          const obj = c0(1627);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, _undefined.current.safeAreaState)) {
            safeAreaState = _undefined.current.safeAreaState;
          }
          return safeAreaState;
        });
      }
    }, items40);
    const callback9 = obj2.useCallback(() => {
      clearTimeout(flag.current.timeout);
      flag.current.timeout = setTimeout(() => {
        clearTimeout(ref.current.timeout);
        c0(c2[45]).batchUpdates(() => {
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
    closure_135_11 = callback9;
    const items41 = [callback9];
    const layoutEffect9 = obj2.useLayoutEffect(() => {
      closure_0 = _undefined(streamOutputSinkStack[46])(function updateSafeAreas(current) {
        if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
          const obj2 = {};
          const merged = Object.assign(current);
          ref.current.safeAreaState = obj2;
          first4();
        }
        obj = c0(10210);
      });
      const safeAreaInsets = channelId(streamOutputSinkStack[36]).getSafeAreaInsets();
      let obj = channelId(streamOutputSinkStack[36]);
      if (!obj2.cheapWorkletShallowEqual(flag.current.safeAreaState, safeAreaInsets)) {
        let obj3 = {};
        let merged = Object.assign(safeAreaInsets);
        flag.current.safeAreaState = obj3;
        first4();
      }
      function updateWindowDimensions() {
        let windowDimensions = arg0;
        if (arg0 === undefined) {
          windowDimensions = c0(1493).getWindowDimensions();
          const obj = c0(1493);
        }
        ({ width, height } = windowDimensions);
        const size = { width, height, landscape: width > height };
        if (!obj3.cheapWorkletShallowEqual(ref.current.windowState, size)) {
          ref.current.windowState = size;
          first4();
        }
        obj3 = c0(10210);
      }
      closure_1 = _undefined(streamOutputSinkStack[47])(updateWindowDimensions);
      obj2 = channelId(streamOutputSinkStack[23]);
      let windowDimensions = channelId(streamOutputSinkStack[35]).getWindowDimensions();
      ({ width, height } = windowDimensions);
      let size = { width, height, landscape: width > height };
      const tmp3Result = channelId(streamOutputSinkStack[35]);
      if (!tmp3Result2.cheapWorkletShallowEqual(flag.current.windowState, size)) {
        flag.current.windowState = size;
        first4();
      }
      return () => {
        closure_0();
        closure_1();
      };
    }, items41);
    let id = obj2.useId();
    closure_135_12 = id;
    const items42 = [isConnected, id];
    const layoutEffect10 = obj2.useLayoutEffect(() => {
      if (c3) {
        state = SafeAreaDisabledStore.getState();
        const obj = { key: sharedValue1, lockEnabled: true };
        let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        return () => {
          state = flag.getState();
          const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
        };
      }
    }, items42);
    if (!tmp117) {
      first4.updateItems(items);
    }
    const obj10 = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null, safeAreaTop: null, safeAreaBottom: null, controlBarSize: null };
    ({ width: obj37.windowWidth, height: obj37.windowHeight } = first6);
    ({ left: obj37.safeAreaLeft, right: obj37.safeAreaRight, top: obj37.safeAreaTop, bottom: obj37.safeAreaBottom } = first7);
    if (stateFromStores) {
      tmp87 = tmp86;
    }
    obj10.controlBarSize = tmp87;
    const updatePropsResult = first4.updateProps(obj10);
    closure_135_13 = updatePropsResult;
    const items43 = [sharedValue12, updatePropsResult, managerSubscription, first4, sharedValue3, first7, sharedValue2, first6, isConnected];
    const layoutEffect11 = obj2.useLayoutEffect(() => {
      flag.current.layoutKey = sharedValue7;
      items = [
        closure_42,
        c3,
        cheapWorkletShallowEqual.cheapWorkletShallowEqual,
        c2,
        c0,
        c1,
        _mod1705.scheduleOnRN,
        function executeLayoutManagerEffect() {
          return _undefined4.handleLayoutEffect();
        }
      ];
      c0 = undefined;
      c1 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      c5 = undefined;
      c6 = undefined;
      [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      class VoicePanelControllerTsx12 {
        constructor(arg0) {
          ({ windowState, safeAreaState, contentState } = arg0);
          tmp = closure_0;
          if (closure_0) {
            tmp2 = closure_1;
            tmp3 = closure_2;
            tmp = !closure_1(closure_2.get(), contentState);
          }
          if (tmp) {
            tmp4 = closure_2;
            result = closure_2.set(contentState);
          }
          obj = closure_3;
          tmp6 = closure_1;
          if (!closure_1(closure_3.get(), windowState)) {
            result1 = obj.set(windowState);
          }
          obj2 = closure_4;
          if (!tmp6(closure_4.get(), safeAreaState)) {
            result2 = obj2.set(safeAreaState);
          }
          tmp9 = closure_5(closure_6);
          return;
        }
      }
      const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8];
      VoicePanelControllerTsx12.__closure = items1;
      VoicePanelControllerTsx12.__workletHash = 2580994334793;
      VoicePanelControllerTsx12.__initData = tmp;
      _mod1705.scheduleOnUI(VoicePanelControllerTsx12, { windowState: type, safeAreaState: sharedValue12, contentState: sharedValue8 });
    }, items43);
    const items44 = [first4];
    const effect6 = obj2.useEffect(() => {
      function checkDimensions() {
        if (!c3) {
          const size = _null(c2[35]).getWindowDimensions();
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
                if (null != c4.checkDimensionsMismatch(width, height)) {
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
          let obj = _null(c2[35]);
        }
      }
      if (!channelId(streamOutputSinkStack[48]).isStable) {
        let _setInterval = setInterval;
        channelId = setInterval(checkDimensions, 1000);
        c1 = null;
        closure_2 = type.addEventListener("change", (event) => {
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
    }, items44);
    const layoutEffect12 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
    const items45 = [first5, stateFromStores2];
    const layoutEffect13 = obj2.useLayoutEffect(() => {
      if (tmp) {
        const result = EmbeddedActivitiesActionCreators.updateActivityPanelMode(ActivityPanelModes.PIP);
      }
      tmp = first5 === constants.PANEL && stateFromStores2;
    }, items45);
    const tmpResult59 = tmp(11365);
    const items46 = [closure_45, sharedValue1, tmp45Result];
    _require = undefined;
    importDefault = undefined;
    [tmp139, tmp140, tmp141] = items46;
    class VoicePanelControllerTsx15 {
      constructor() {
        items = [, ];
        items[0] = closure_0.get();
        items[1] = closure_1.get().mode;
        return items;
      }
    }
    const items47 = [tmp140, tmp141];
    VoicePanelControllerTsx15.__closure = items47;
    VoicePanelControllerTsx15.__workletHash = 14860349997978;
    VoicePanelControllerTsx15.__initData = tmp139;
    const items48 = [closure_46, tmp(10210).cheapWorkletArrayShallowEqual, tmp46, tmp18, tmp(1705).scheduleOnRN, tmp(5323).dismissKeyboard];
    closure_137_0 = undefined;
    closure_137_1 = undefined;
    closure_137_2 = undefined;
    closure_137_3 = undefined;
    closure_137_4 = undefined;
    [tmp144, tmp145, tmp146, tmp147, tmp148, tmp149] = items48;
    class VoicePanelControllerTsx16 {
      constructor(arg0, arg1) {
        tmp2 = arg1;
        tmp = closure_0;
        if (!tmp(channelId, tmp2)) {
          tmp3 = closure_3;
          num = 2;
          tmp4 = closure_3(channelId, 2);
          tmp6 = closure_1;
          tmp7 = tmp4[1] === closure_1.DRAWER;
          if (tmp7) {
            tmp8 = closure_2;
            tmp7 = tmp5 === closure_2.PANEL;
          }
          if (tmp7) {
            first = undefined;
            if (arg1 != null) {
              first = arg1[0];
            }
            tmp10 = closure_2;
            tmp7 = first === closure_2.PANEL;
          }
          if (!tmp7) {
            tmp11 = closure_3;
            tmp12 = closure_4;
            tmp13 = closure_3(closure_4);
          }
        }
        return;
      }
    }
    const items49 = [tmp145, tmp146, tmp147, tmp148, tmp149];
    VoicePanelControllerTsx16.__closure = items49;
    VoicePanelControllerTsx16.__workletHash = 10128574886488;
    VoicePanelControllerTsx16.__initData = tmp144;
    const animatedReaction2 = tmp(1652).useAnimatedReaction(VoicePanelControllerTsx15, VoicePanelControllerTsx16);
    closure_138_0 = channelId;
    closure_138_1 = transitionState;
    closure_138_2 = transitionCleanUp;
    const tmpResult60 = tmp(1652);
    const sharedValue13 = tmp(1652).useSharedValue(transitionState);
    closure_138_3 = sharedValue13;
    const items50 = [transitionState, sharedValue13, transitionCleanUp, channelId];
    const layoutEffect14 = obj2.useLayoutEffect(() => {
      const result = mountedCards.set(c1);
      if (c1 === native.TransitionStates.YEETED) {
        state = AppFreezeStore.getState();
        const obj = { lockEnabled: false, key: null };
        const _HermesInternal = HermesInternal;
        obj.key = "voice-panel-freeze-" + c0;
        const freezeLock = state.requestFreezeLock(obj);
        const _setTimeout = setTimeout;
        const timeout = setTimeout(c2, 500);
        return () => clearTimeout(closure_0);
      }
    }, items50);
    const items51 = [channelId];
    const layoutEffect15 = obj2.useLayoutEffect(() => () => {
      state = sharedValue7.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + channelId });
    }, items51);
    const tmpResult61 = tmp(1652);
    const items52 = [closure_43, sharedValue, sharedValue1, sharedValue13];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    [tmp156, tmp157, tmp158, tmp159] = items52;
    class VoicePanelControllerTsx13 {
      constructor() {
        items = [, , ];
        items[0] = closure_0.get();
        items[1] = closure_1.get();
        items[2] = closure_2.get();
        return items;
      }
    }
    const items53 = [tmp157, tmp158, tmp159];
    VoicePanelControllerTsx13.__closure = items53;
    VoicePanelControllerTsx13.__workletHash = 15466493412616;
    VoicePanelControllerTsx13.__initData = tmp156;
    const items54 = [closure_44, tmp(10210).cheapWorkletArrayShallowEqual, tmp(5199).TransitionStates, tmp18, tmp(1705).scheduleOnRN, callback7, first2];
    closure_139_0 = undefined;
    closure_139_1 = undefined;
    closure_139_2 = undefined;
    closure_139_3 = undefined;
    closure_139_4 = undefined;
    closure_139_5 = undefined;
    [tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168] = items54;
    class VoicePanelControllerTsx14 {
      constructor(arg0, arg1) {
        tmp2 = arg1;
        tmp = closure_0;
        if (!tmp(channelId, tmp2)) {
          tmp3 = closure_3;
          num = 3;
          tmp4 = closure_3(channelId, 3);
          [tmp5, tmp6] = tmp4;
          tmp7 = closure_1;
          if (tmp4[2] === closure_1.YEETED) {
            if (tmp6 !== closure_2.DISMISSED) {
              tmp18 = closure_3;
              tmp19 = closure_4;
              tmp20 = closure_3(closure_4, tmp17.DISMISSED);
            }
          } else {
            tmp21 = closure_2;
            if (tmp6 === closure_2.DISMISSED) {
              PANEL1 = undefined;
              if (arg1 != null) {
                PANEL1 = arg1[1];
              }
              if (PANEL1 == null) {
                PANEL1 = tmp21.PANEL;
              }
              if (tmp21.PANEL !== PANEL1) {
                if (tmp21.PIP !== PANEL1) {
                  PANEL = tmp21.PANEL;
                }
                tmp14 = closure_3;
                tmp15 = closure_4;
                tmp16 = closure_3(closure_4, PANEL);
              }
              PANEL = PANEL1;
              if (!tmp5) {
                PANEL = tmp21.PANEL;
              }
            } else {
              tmp8 = type;
              if (!type) {
                tmp8 = tmp5;
              }
              if (!tmp8) {
                first = undefined;
                if (arg1 != null) {
                  first = arg1[0];
                }
                flag = true;
                tmp8 = true !== first;
              }
              if (!tmp8) {
                tmp8 = tmp6 !== tmp21.PIP;
              }
              if (!tmp8) {
                tmp10 = closure_3;
                tmp11 = closure_4;
                tmp12 = closure_3(closure_4, tmp21.PANEL);
              }
            }
          }
        }
        return;
      }
    }
    const items55 = [tmp163, tmp164, tmp165, tmp166, tmp167, tmp168];
    VoicePanelControllerTsx14.__closure = items55;
    VoicePanelControllerTsx14.__workletHash = 7078889270075;
    VoicePanelControllerTsx14.__initData = tmp162;
    const animatedReaction3 = tmp(1652).useAnimatedReaction(VoicePanelControllerTsx13, VoicePanelControllerTsx14);
    const obj11 = { mode: sharedValue1, controlsSpecs: tmp45Result, safeArea: sharedValue3, windowDimensions: sharedValue2, dockHeight: tmp36.dockHeight };
    const tmp170 = tmp8(19567)(obj11);
    pipAvoidanceSpecs = tmp170;
    const tmpResult62 = tmp(1652);
    const obj12 = { channelId, connected: isConnected, focusedId: stateFromStores1, layoutManager: first4, mode: first5, windowDimensions: sharedValue2, pipAvoidanceSpecs: tmp170, safeArea: sharedValue3 };
    const controllerPIPState = tmp(19568).useControllerPIPState(obj12);
    closure_140_0 = channelId;
    closure_140_1 = first5;
    closure_140_2 = obj2.useRef(null);
    const items56 = [first5, stateFromStores1, channelId];
    const layoutEffect16 = obj2.useLayoutEffect(() => {
      const rTCConnection = RTCConnectionStore.getRTCConnection();
      let tmp = null != rTCConnection;
      if (tmp) {
        tmp = RTCConnectionStore.getChannelId() === c0;
      }
      if (tmp) {
        if (streamOutputSinkStack.current !== constants.PIP) {
          if (c1 === constants.PIP) {
            rTCConnection.setPipOpen(true);
          }
        }
        let tmp7 = streamOutputSinkStack.current === constants.PIP;
        if (tmp7) {
          tmp7 = c1 !== constants.PIP;
        }
        if (tmp7) {
          rTCConnection.setPipOpen(false);
        }
      }
    }, items56);
    const layoutEffect17 = obj2.useLayoutEffect(() => {
      c2.current = _undefined;
    });
    closure_141_0 = channelId;
    closure_141_1 = controllerPIPState;
    closure_141_2 = stateFromStores1;
    const items57 = [channelId];
    const callback10 = obj2.useCallback((arg0) => {
      ({ focusedId, pipParticipantId } = arg0);
      const result = ChannelCallLifecycleStore.shouldReactToSeriousThermalStateWhenActivityFocused();
      let tmp3 = null != focusedId;
      const result1 = ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState();
      if (tmp3) {
        tmp3 = isActivityParticipant(ChannelRTCStore.getParticipant(c0, focusedId));
      }
      let participant;
      if (null != pipParticipantId) {
        participant = ChannelRTCStore.getParticipant(c0, pipParticipantId);
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
              const obj2 = { text: null, icon: null };
              const intl = util.intl;
              obj2.text = intl.string(util.t.O2IlPT);
              obj2.icon = VideoSlashIcon.VideoSlashIcon;
              ToastActionCreatorsDefault.open("EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", obj2);
              const result2 = trackActivityThermalStateNoticeShown.trackActivityThermalStateNoticeShown();
            }
            if (isVideoEnabledResult) {
              AudioActionCreatorsDefault.setVideoEnabled(false);
            }
            const result3 = EmbeddedActivitiesActionCreators.consumeRequestToReactToSeriousThermalState();
          }
        }
      }
    }, items57);
    closure_141_3 = callback10;
    const items58 = [stateFromStores1, controllerPIPState, callback10, channelId];
    const effect7 = obj2.useEffect(() => {
      items = [first4, sharedValue6];
      const batchedStoreListener = new channelId(streamOutputSinkStack[26]).BatchedStoreListener(items, () => {
        mountedCards({ focusedId: streamOutputSinkStack, pipParticipantId: id.id });
        const obj = { focusedId: streamOutputSinkStack, pipParticipantId: id.id };
      });
      batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
      return () => batchedStoreListener.detach();
    }, items58);
    const tmpResult63 = tmp(19568);
    const items59 = [dismissPanel, sharedValue7, controllerPIPState];
    _require = undefined;
    importDefault = undefined;
    [tmp179, tmp180, tmp181] = items59;
    class VoicePanelControllerTsx3 {
      constructor() {
        value = closure_0.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        items = [, ];
        items[0] = id;
        items[1] = closure_1.id;
        return items;
      }
    }
    const items60 = [tmp180, tmp181];
    VoicePanelControllerTsx3.__closure = items60;
    VoicePanelControllerTsx3.__workletHash = 6486564518565;
    VoicePanelControllerTsx3.__initData = tmp179;
    const items61 = [callback8, tmp(10210).cheapWorkletArrayShallowEqual, tmp(1705).scheduleOnRN, callback10];
    closure_142_0 = undefined;
    closure_142_1 = undefined;
    closure_142_2 = undefined;
    [tmp184, tmp185, tmp186, tmp187] = items61;
    class VoicePanelControllerTsx4 {
      constructor(arg0, arg1) {
        tmp = arg1;
        tmp2 = closure_0;
        if (!tmp2(channelId, tmp)) {
          tmp3 = closure_3;
          num = 2;
          tmp4 = closure_3(channelId, 2);
          tmp5 = closure_1;
          tmp6 = closure_2;
          obj = { focusedId: null, pipParticipantId: null };
          [obj.focusedId, obj.pipParticipantId] = tmp4;
          tmp7 = closure_1(closure_2, obj);
        }
        return;
      }
    }
    const items62 = [tmp185, tmp186, tmp187];
    VoicePanelControllerTsx4.__closure = items62;
    VoicePanelControllerTsx4.__workletHash = 13500285487054;
    VoicePanelControllerTsx4.__initData = tmp184;
    const animatedReaction4 = tmp(1652).useAnimatedReaction(VoicePanelControllerTsx3, VoicePanelControllerTsx4);
    closure_143_0 = channelId;
    const items63 = [channelId];
    const callback11 = obj2.useCallback((arg0) => {
      ({ focusedParticipantId, connectedValue } = arg0);
      if (connectedValue) {
        connectedValue = tmp === constants.PANEL;
      }
      let tmp3 = null != focusedParticipantId;
      if (tmp3) {
        tmp3 = isActivityParticipant(ChannelRTCStore.getParticipant(c0, focusedParticipantId));
      }
      if (tmp3) {
        tmp3 = connectedValue;
      }
      state = VoicePanelStore.getState();
      state.setIsActivityFocused(tmp3);
    }, items63);
    const tmpResult64 = tmp(1652);
    const items64 = [setControlsMode, sharedValue7, sharedValue1, sharedValue];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    [tmp192, tmp193, tmp194, tmp195] = items64;
    class VoicePanelControllerTsx1 {
      constructor() {
        value = closure_0.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        items = [, , ];
        items[0] = id;
        items[1] = closure_1.get();
        items[2] = closure_2.get();
        return items;
      }
    }
    const items65 = [tmp193, tmp194, tmp195];
    VoicePanelControllerTsx1.__closure = items65;
    VoicePanelControllerTsx1.__workletHash = 7885006587204;
    VoicePanelControllerTsx1.__initData = tmp192;
    const items66 = [first5, tmp(10210).cheapWorkletArrayShallowEqual, tmp(1705).scheduleOnRN, callback11];
    closure_144_0 = undefined;
    closure_144_1 = undefined;
    closure_144_2 = undefined;
    [tmp198, tmp199, tmp200, tmp201] = items66;
    class VoicePanelControllerTsx2 {
      constructor(arg0, arg1) {
        tmp = arg1;
        tmp2 = closure_0;
        if (!tmp2(channelId, tmp)) {
          tmp3 = closure_3;
          num = 3;
          tmp4 = closure_3(channelId, 3);
          tmp5 = closure_1;
          tmp6 = closure_2;
          obj = { focusedParticipantId: null, voicePanelMode: null, connectedValue: null };
          [obj.focusedParticipantId, obj.voicePanelMode, obj.connectedValue] = tmp4;
          tmp7 = closure_1(closure_2, obj);
        }
        return;
      }
    }
    const items67 = [tmp199, tmp200, tmp201];
    VoicePanelControllerTsx2.__closure = items67;
    VoicePanelControllerTsx2.__workletHash = 229994875745;
    VoicePanelControllerTsx2.__initData = tmp198;
    const animatedReaction5 = tmp(1652).useAnimatedReaction(VoicePanelControllerTsx1, VoicePanelControllerTsx2);
    closure_145_0 = setControlsMode;
    const items68 = [setControlsMode];
    const callback12 = obj2.useCallback(() => {
      channelId({ mode: constants2.FLOATING_DEFAULT });
    }, items68);
    const obj13 = { onTransition: callback12 };
    tmp8(19535)(obj13);
    closure_146_0 = callback5;
    closure_146_1 = obj2.useRef(false);
    closure_146_2 = obj2.useRef(0);
    const tmpResult65 = tmp(1652);
    const items69 = [tmp3];
    const stateFromStores3 = tmp(504).useStateFromStores(items69, () => sharedValue8.getSpeakingWhileMuted());
    closure_146_3 = stateFromStores3;
    const tmpResult66 = tmp(504);
    const items70 = [tmp3];
    const stateFromStores4 = tmp(504).useStateFromStores(items70, () => sharedValue8.isMute());
    closure_146_4 = stateFromStores4;
    const tmpResult67 = tmp(504);
    const items71 = [sharedValue3];
    const items72 = [tmp(504).useStateFromStores(items71, () => sharedValue3.getRTCConnectionId())];
    const effect8 = obj2.useEffect(() => {
      c2.current = performance.now();
      c1.current = false;
    }, items72);
    const items73 = [stateFromStores4];
    const effect9 = obj2.useEffect(() => {
      if (c4) {
        const _performance = performance;
        c2.current = performance.now();
      } else {
        c1.current = false;
      }
    }, items73);
    const items74 = [stateFromStores3, callback5];
    const effect10 = obj2.useEffect(() => {
      let tmp = c3;
      if (c3) {
        tmp = !_undefined.current;
      }
      if (tmp) {
        const _performance = performance;
        if (performance.now() - streamOutputSinkStack.current >= MINUTE) {
          _undefined.current = true;
          channelId();
          const obj2 = { text: null, icon: null, duration: null };
          const intl = util.intl;
          obj2.text = intl.string(util.t["29gnR4"]);
          obj2.icon = MicrophoneSlashIcon.MicrophoneSlashIcon;
          obj2.duration = 3 * DurationsDefault.Millis.SECOND;
          ToastActionCreatorsDefault.open("SPEAKING_WHILE_MUTED", obj2);
        }
      }
    }, items74);
    tmp8(19573)(channelId, sharedValue1, callback7, sharedValue);
    tmp8(19574)(first2, sharedValue1, callback7);
    tmp8(19501)();
    closure_147_0 = isConnected;
    closure_147_1 = first5;
    closure_147_2 = stateFromStores1;
    closure_147_3 = stateFromStores2;
    const tmpResult68 = tmp(504);
    const items75 = [tmp115];
    const stateFromStoresObject = tmp(504).useStateFromStoresObject(items75, () => {
      const currentEmbeddedActivity = sharedValue12.getCurrentEmbeddedActivity();
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
        let UNLOCKED2 = sharedValue12.getOrientationLockStateForApp(applicationId);
        if (UNLOCKED2 == null) {
          UNLOCKED2 = channelId(streamOutputSinkStack[51]).EmbeddedActivityOrientationLockState.UNLOCKED;
        }
        let UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = channelId(streamOutputSinkStack[51]).EmbeddedActivityOrientationLockState.UNLOCKED;
      }
      obj2.activityOrientationLockState = UNLOCKED;
      return obj2;
    });
    let applicationId = stateFromStoresObject.applicationId;
    closure_147_4 = applicationId;
    const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
    closure_147_5 = activityOrientationLockState;
    const instanceId = stateFromStoresObject.instanceId;
    closure_147_6 = instanceId;
    const items76 = [applicationId, isConnected, first5, activityOrientationLockState, stateFromStores1, stateFromStores2, instanceId];
    const layoutEffect18 = obj2.useLayoutEffect(() => {
      let tmp = c3;
      if (!c3) {
        const channel = ChannelStore.getChannel(SelectedChannelStore.getVoiceChannelId());
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        let tmp6 = true === isGuildStageVoiceResult;
        if (tmp6) {
          tmp6 = !StageChannelUnifiedCallExperiment.isStageUnifiedCall(channel, "VoicePanelController");
        }
        tmp = tmp6;
      }
      if (!tmp) {
        if (c1 === constants.PANEL) {
          if (c0) {
            if (null != c4) {
              const obj = { applicationId: tmp15, instanceId: sharedValue };
              if (c2 === obj4.getEmbeddedActivityParticipantId(obj)) {
                applyActivityOrientationLockDefault(type);
              }
              obj4 = ChannelRTCParticipants;
            }
            DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
          }
        }
        const result = DeviceOrientation.restoreDefaultOrientation();
      }
    }, items76);
    const layoutEffect19 = obj2.useLayoutEffect(() => () => {
      channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
      let isGuildStageVoiceResult;
      if (channel != null) {
        isGuildStageVoiceResult = channel.isGuildStageVoice();
      }
      let tmp2 = true === isGuildStageVoiceResult;
      if (tmp2) {
        tmp2 = !channelId(11327).isStageUnifiedCall(channel, "VoicePanelController");
        const obj2 = channelId(11327);
      }
      if (!tmp2) {
        const result = channelId(8977).restoreDefaultOrientation();
        const obj3 = channelId(8977);
      }
    }, []);
    closure_148_0 = channelId;
    closure_148_1 = isConnected;
    closure_148_2 = first5;
    closure_148_3 = first2;
    const items77 = [first5, channelId, isConnected, first2];
    const effect11 = obj2.useEffect(() => {
      let tmp2 = c2 !== constants.DISMISSED;
      if (tmp2) {
        tmp2 = c1;
      }
      if (tmp2) {
        const obj2 = { video_layout: collapsedCategories(c2, c3) };
        const obj = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(c0));
        obj.track(constants3.VIDEO_LAYOUT_TOGGLED, obj2);
      }
    }, items77);
    closure_149_0 = sharedValue1;
    closure_149_1 = obj2.useRef(-1);
    const tmpResult69 = tmp(504);
    sharedValue14 = tmp(1652).useSharedValue(null);
    closure_149_2 = sharedValue14;
    const items78 = [sharedValue1, sharedValue14];
    callback13 = obj2.useCallback((arg0) => {
      if (channelId.get() === constants.PANEL) {
        let result = streamOutputSinkStack.set(arg0);
        if (null != arg0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(_undefined.current);
          const _setTimeout = setTimeout;
          _undefined.current = setTimeout(() => {
            const result = streamOutputSinkStack.set(null);
          }, VoicePanelFloatingCTAUtils.FLOATING_CTA_HIDE_TIMEOUT);
        }
      }
    }, items78);
    const layoutEffect20 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current), []);
    dismissToPIPGestureRef = obj2.useRef(undefined);
    const obj14 = { value: tmp5(obj2.useState(() => ({ channelId, channelType: type, committedMode: closure_24.committedMode, connected: sharedValue, contentDimensions: sharedValue12, controlsSpecs, dismissPanel, dismissToPIPGestureRef, dockContentSwap: closure_24.dockContentSwap, dockEntryProgress: closure_24.dockEntryProgress, dockHeight: closure_24.dockHeight, dockJoinMorphOrigin: closure_24.dockJoinMorphOrigin, dockMinimizeProgress: closure_24.dockMinimizeProgress, dockPressProgress: closure_24.dockPressProgress, dockPressed: closure_24.dockPressed, dragScrolling: sharedValue6, focused: sharedValue7, generateStateLocker: callback3, guildId: _undefined, handleDockSheetLayout: closure_24.handleDockSheetLayout, hideControls: callback4, isCall: flag, isDockConnected: closure_24.isDockConnected, isDockEnabled, isDockExpanding: closure_24.isDockExpanding, isFocusedVideoZoomed: sharedValue9, layoutManager: first4, mode: sharedValue1, morphablePanelMode: derivedValue, mountedCards, pipAvoidanceSpecs, preJoinContentSize: sharedValue8, refreshIdleTimeout: callback6, safeArea: sharedValue3, scrollPosition: sharedValue5, setControlsMode, setFocused: callback8, setIsFocusedVideoZoomed, setMode: callback7, setShowFloatingCTA: callback13, sheetExitProgress: closure_24.sheetExitProgress, showControls: callback5, showFloatingCTA: sharedValue14, streamOutputSinkStack, usePIPState: VoicePanelPIPStateContext.usePIPState, useReducedMotion: sharedValue10, windowDimensions: sharedValue2, wrapperDimensions: sharedValue4, wrapperOffset: sharedValue11, pipHandoff })), 1)[0], children: null };
    const obj15 = { value: controllerPIPState, children: null };
    let tmp226 = guildId;
    if (guildId == null) {
      tmp226 = null;
    }
    const obj16 = { value: tmp226, children: channelId.children };
    obj15.children = callback6(tmp8(5340).Provider, obj16);
    obj14.children = callback6(tmp(19575).VoicePanelPIPStateContext.Provider, obj15);
    return callback6(tmp8(11362).Provider, obj14);
  }
  tmp47 = setIsFocusedVideoZoomed;
  const tmpResult52 = tmp(1652);
};