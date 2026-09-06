// discord_app/modules/voice_panel/native/VoicePanelController.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import embeddedActivityLocationUtils from "../../activities/utils/embeddedActivityLocationUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import DeviceOrientation from "../../device/native/DeviceOrientation.tsx";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import ChannelRTCParticipants from "../../calls/ChannelRTCParticipants.tsx";
import cheapWorkletShallowEqual from "../../reanimated/native/cheapWorkletShallowEqual.tsx";
import EmbeddedActivitiesActionCreators from "../../activities/EmbeddedActivitiesActionCreators.tsx";
import _modDef9627 from "../../../../_runtime/metro/09627__.js";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import VoicePanelCardLayoutManagerDefault from "card/VoicePanelCardLayoutManager.tsx";
import applyActivityOrientationLockDefault from "../../activities/native/applyActivityOrientationLock.tsx";
import _modDef17052 from "../../../../_runtime/metro/17052__.js";
import trackActivityThermalStateNoticeShown from "../../activities/trackActivityThermalStateNoticeShown.tsx";
import VoicePanelFloatingCTAUtils from "controls/utils/VoicePanelFloatingCTAUtils.tsx";
import useIsVoicePanelParticipantFocusable from "utils/useIsVoicePanelParticipantFocusable.tsx";
import VoicePanelPIPStateContext from "pip/VoicePanelPIPStateContext.tsx";
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
import VoicePanelStore from "../VoicePanelStore.tsx";

require = fn;
const AppState = fn(17).AppState;
const VoicePanelConstants = fn(12273);
({ VoicePanelModes: closure_16, getAnalyticsNameForVoicePanelMode: closure_17 } = VoicePanelConstants);
const VoicePanelControlsConstants = fn(12271);
({
  CONTROLS_HEIGHT: closure_18,
  CONTROLS_HEIGHT_PTT: closure_19,
  CONTROLS_HIDE_TIMEOUT: closure_20,
  VoicePanelControlsModes: closure_21,
} = VoicePanelControlsConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_22, ComponentActions: closure_23, InputModes: closure_24 } = Constants);
const OrientationLockState = fn(1920).OrientationLockState;
const ActivityPanelModes = fn(9505).ActivityPanelModes;
const isActivityParticipant = fn(4581).isActivityParticipant;
const MorphablePanelModes = fn(12274).MorphablePanelModes;
const jsx = fn(21).jsx;
let __initData = {
  code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}",
};
let closure_31 = {
  code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}",
};
let closure_32 = 5 * DurationsDefault.Millis.MINUTE;
let __initData2 = {
  code: "function VoicePanelControllerTsx3(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}",
};
let closure_34 = {
  code: "function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;runOnJS(handleStateUpdates)({focusedId:focusedId,pipParticipantId:pipParticipantId});}",
};
let closure_35 = {
  code: "function VoicePanelControllerTsx5(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}",
};
let __initData3 = {
  code: "function VoicePanelControllerTsx6(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}",
};
const __initData4 = { code: "function VoicePanelControllerTsx7(){const{mode}=this.__closure;return mode.get();}" };
const __initData5 = {
  code: "function VoicePanelControllerTsx8(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}",
};
const __initData6 = {
  code: "function VoicePanelControllerTsx9(){const{connected}=this.__closure;return connected.get();}",
};
const __initData7 = {
  code: "function VoicePanelControllerTsx10(connected){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}",
};
let closure_41 = {
  code: "function VoicePanelControllerTsx11({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}runOnJS(executeLayoutManagerEffect)();}",
};
const __initData8 = {
  code: "function VoicePanelControllerTsx12(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}",
};
const __initData9 = {
  code: "function VoicePanelControllerTsx13(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}",
};
const __initData10 = {
  code: "function VoicePanelControllerTsx14(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}",
};
const __initData11 = {
  code: "function VoicePanelControllerTsx15(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}",
};
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
  let sharedValue13;
  let sharedValue6;
  let sharedValue7;
  let first2;
  let sharedValue1;
  let sharedValue8;
  let sharedValue3;
  let sharedValue5;
  let sharedValue2;
  let sharedValue4;
  let sharedValue10;
  let CONTROLS_HEIGHT;
  let sharedValue11;
  let sharedValue12;
  let derivedValue;
  let sharedValue9;
  let callback3;
  let controlsSpecs;
  let callback5;
  let callback4;
  let setControlsMode;
  let first3;
  let setMode;
  __initData = undefined;
  let callback6;
  let stateFromStores2;
  __initData2 = undefined;
  let sharedValue15;
  let callback11;
  __initData3 = undefined;
  let tmp2 = first;
  let obj = channelId(first[26]);
  items = [sharedValue3];
  const stateFromStores = obj.useStateFromStores(items, () => sharedValue3.getMode() === controlsSpecs.PUSH_TO_TALK);
  let obj1 = type;
  first = first1(
    type.useState(() => {
      let tmp = guildId(first[57]);
      tmp = new tmp(sharedValue3.getMediaEngine());
      return tmp;
    }),
    1,
  )[0];
  const items1 = [first];
  const effect = type.useEffect(() => () => first.cleanUp(), items1);
  ({ items, isConnected } = guildId(first[58])(channelId, guildId));
  closure_129_0 = items;
  closure_129_1 = isConnected;
  first1 = first1(
    type.useState(() => new Set()),
    1,
  )[0];
  closure_129_2 = first1;
  const items2 = [isConnected, items, first1];
  const effect1 = type.useEffect(() => {
    if (guildId) {
      closure_0 = channelId(first[56]).runAfterInteractions(() => {
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
  }, items2);
  closure_130_0 = channelId;
  closure_130_1 = items;
  closure_130_2 = stateFromStores;
  closure_130_3 = undefined;
  closure_130_4 = undefined;
  closure_130_5 = undefined;
  closure_130_6 = undefined;
  closure_130_7 = undefined;
  closure_130_8 = undefined;
  const channel = sharedValue8.getChannel(channelId);
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
  let tmpResult = tmp(tmp2[22]);
  sharedValue = tmpResult.useSharedValue(isConnected);
  tmpResult = tmp(tmp2[22]);
  sharedValue1 = tmpResult.useSharedValue(sharedValue4.PANEL);
  closure_130_3 = sharedValue1;
  let tmp3 = sharedValue3;
  let tmp9 = guildId(first[58])(channelId, guildId);
  let size = channelId(tmp2[35]).getWindowDimensions();
  closure_130_4 = size;
  let tmpResult1 = channelId(tmp2[35]);
  size = { width: size.width, height: size.height, landscape: size.width > size.height };
  sharedValue2 = channelId(tmp2[22]).useSharedValue(size);
  const tmpResult2 = channelId(tmp2[22]);
  const rect = channelId(tmp2[36]).getSafeAreaInsets();
  closure_130_5 = rect;
  const tmpResult3 = channelId(tmp2[36]);
  obj = {};
  let merged = Object.assign(rect);
  sharedValue3 = channelId(tmp2[22]).useSharedValue(obj);
  const tmpResult4 = channelId(tmp2[22]);
  obj = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const maxPanelWidth = channelId(tmp2[37]).getMaxPanelWidth(obj);
  const tmpResult5 = channelId(tmp2[37]);
  obj1 = {
    drawerHeight: size.height,
    drawerWidth: maxPanelWidth,
    drawerX: null,
    drawerY: null,
    pipX: -1,
    pipY: -1,
    animated: true,
    mode: null,
  };
  const tmpResult6 = channelId(tmp2[22]);
  obj1.drawerX = channelId(tmp2[37]).getPanelX(size.width, maxPanelWidth);
  obj1.drawerY = size.height;
  obj1.mode = sharedValue4.PANEL;
  sharedValue4 = tmpResult6.useSharedValue(obj1);
  const tmpResult7 = channelId(tmp2[37]);
  sharedValue5 = channelId(tmp2[22]).useSharedValue(0);
  const tmpResult8 = channelId(tmp2[22]);
  sharedValue6 = channelId(tmp2[22]).useSharedValue(false);
  const tmpResult9 = channelId(tmp2[22]);
  sharedValue7 = channelId(tmp2[22]).useSharedValue(null);
  const tmpResult10 = channelId(tmp2[22]);
  sharedValue8 = channelId(tmp2[22]).useSharedValue(0);
  const tmpResult11 = channelId(tmp2[22]);
  sharedValue9 = channelId(tmp2[22]).useSharedValue(false);
  const tmpResult12 = channelId(tmp2[22]);
  sharedValue10 = channelId(tmp2[22]).useSharedValue(false);
  closure_130_6 = sharedValue10;
  let fn = function h(arg0) {
    const result = sharedValue13.set(arg0);
  };
  fn.__closure = { isFocusedVideoZoomed: sharedValue10 };
  fn.__workletHash = 13885070318174;
  fn.__initData = callback11;
  const items3 = [sharedValue10];
  CONTROLS_HEIGHT = obj1.useCallback(fn, items3);
  const tmpResult13 = channelId(tmp2[22]);
  sharedValue11 = channelId(tmp2[22]).useSharedValue(sharedValue13.useReducedMotion);
  closure_130_7 = sharedValue11;
  const items4 = [sharedValue11];
  const effect2 = obj1.useEffect(() => {
    function onChange() {
      const result = sharedValue6.set(sharedValue13.useReducedMotion);
    }
    let result = sharedValue13.addReactChangeListener(onChange);
    return () => {
      const result = AccessibilityStore.removeReactChangeListener(onChange);
    };
  }, items4);
  const tmpResult14 = channelId(tmp2[22]);
  sharedValue12 = channelId(tmp2[22]).useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const tmpResult15 = channelId(tmp2[22]);
  class H {
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
  H.__closure = { mode: sharedValue1, VoicePanelModes: sharedValue4, MorphablePanelModes: first3 };
  H.__workletHash = 931249605381;
  H.__initData = __initData3;
  derivedValue = channelId(tmp2[22]).useDerivedValue(H);
  first2 = tmp5(
    obj1.useState(() => {
      new VoicePanelCardLayoutManagerDefault(channelId);
      const obj = {
        windowWidth: type.width,
        windowHeight: type.height,
        safeAreaLeft: sharedValue.left,
        safeAreaRight: sharedValue.right,
        safeAreaTop: sharedValue.top,
        safeAreaBottom: sharedValue.bottom,
        controlBarSize: first ? closure_2_19 : collapsedCategories,
      };
      obj.updateState(guildId, obj);
      return obj;
    }),
    1,
  )[0];
  closure_130_8 = first2;
  const items5 = [first2];
  const layoutEffect = obj1.useLayoutEffect(() => () => sharedValue7.cleanUp(), items5);
  let obj2 = { mode: sharedValue1, VoicePanelModes: sharedValue4, MorphablePanelModes: first3 };
  const tmpResult16 = channelId(tmp2[22]);
  sharedValue13 = channelId(tmp2[22]).useSharedValue(first2.getContentDimensions());
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
  channelId(tmp2[22]);
  let obj3 = { mode: derivedValue.FLOATING_DEFAULT, locked: false, height: null, pushToTalk: null };
  if (stateFromStores) {
    if (isConnected) {
      let tmp37 = sharedValue11;
    }
    obj3.height = tmp37;
    obj3.pushToTalk = stateFromStores;
    const tmp35Result = tmp35(obj3);
    closure_131_4 = tmp35Result;
    closure_131_5 = obj1.useRef(-1);
    const callback1 = obj1.useCallback(() => {
      if (-1 !== sharedValue.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(sharedValue.current);
        sharedValue.current = -1;
      }
    }, []);
    closure_131_6 = callback1;
    const items6 = [tmp35Result, callback1, sharedValue1];
    const callback2 = obj1.useCallback(() => {
      sharedValue13();
      if (-1 === sharedValue.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
          sharedValue13();
          if (channelId.get() === sharedValue4.PANEL) {
            let obj = type;
            let locked = type.get().mode !== derivedValue.FLOATING_DEFAULT;
            if (!locked) {
              locked = obj.get().locked;
            }
            if (!locked) {
              obj = { mode: derivedValue.HIDDEN };
              guildId(first[39])(obj, obj);
            }
          }
        }, closure_2_20);
      }
    }, items6);
    closure_131_7 = callback2;
    const items7 = [tmp35Result, callback2];
    const memo = obj1.useMemo(() => {
      let obj = guildId(first[40]);
      closure_0 = obj.debounce(function _setControlsMode(mode, returnMode) {
        guildId(first[39])(type, { mode, returnMode });
        sharedValue6();
      }, 200);
      obj = {
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
          let obj = closure_0;
          if (debounce) {
            obj(mode, FLOATING_DEFAULT);
          } else {
            obj.cancel();
            obj = { mode, returnMode: FLOATING_DEFAULT };
            updateSharedValueIfChangedDefault(type, obj);
            sharedValue6();
          }
        },
      };
      return obj;
    }, items7);
    const cancelControlsDebounce = memo.cancelControlsDebounce;
    closure_131_8 = cancelControlsDebounce;
    setControlsMode = memo.setControlsMode;
    closure_131_9 = setControlsMode;
    const _Set = Set;
    const set = new Set();
    closure_131_10 = obj1.useRef(set);
    const items8 = [tmp35Result, callback2, callback1];
    const items9 = [setControlsMode];
    callback3 = obj1.useCallback((arg0) => {
      let v4Result = arg0;
      if (arg0 == null) {
        let obj = channelId(first[41]);
        v4Result = obj.v4();
      }
      channelId = v4Result;
      obj = {
        lock(mode) {
          const current = first2.current;
          if (!current.has(v4Result)) {
            sharedValue13();
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
        },
      };
      return obj;
    }, items8);
    const items10 = [setControlsMode, tmp35Result];
    callback4 = obj1.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { debounce: false };
      }
      obj = { mode: constants2.HIDDEN, debounce: obj.debounce };
      flag(obj);
    }, items9);
    callback5 = obj1.useCallback(() => {
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
    }, items10);
    const fn2 = function u() {
      return channelId.get();
    };
    let obj4 = { mode: sharedValue1 };
    fn2.__closure = obj4;
    fn2.__workletHash = 12140218650562;
    fn2.__initData = __initData4;
    const fn3 = function l(arg0) {
      if (arg0 === constants.PANEL) {
        ReanimatedRexport.runOnJS(sharedValue6)();
      } else {
        ReanimatedRexport.runOnJS(sharedValue13)();
      }
    };
    let obj5 = {
      VoicePanelModes: tmp14,
      runOnJS: tmp(tmp2[22]).runOnJS,
      _queueHideControls: callback2,
      _clearHideControlsQueue: callback1,
    };
    fn3.__closure = obj5;
    fn3.__workletHash = 7742206515980;
    fn3.__initData = __initData5;
    const animatedReaction = tmp(tmp2[22]).useAnimatedReaction(fn2, fn3);
    const items11 = [stateFromStores, tmp35Result, isConnected];
    const layoutEffect1 = obj1.useLayoutEffect(() => {
      if (first1) {
        if (guildId) {
          let tmp5 = closure_2_19;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = collapsedCategories;
    }, items11);
    const tmpResult19 = tmp(tmp2[22]);
    class S {
      constructor() {
        return closure_2.get();
      }
    }
    let obj6 = { connected: sharedValue };
    S.__closure = obj6;
    S.__workletHash = 16653595323628;
    S.__initData = __initData6;
    const fn4 = function h(arg0) {
      if (first1) {
        if (arg0) {
          let tmp5 = closure_2_19;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = collapsedCategories;
    };
    const obj7 = {
      updateSharedValueIfChanged: tmp8(tmp2[39]),
      controlsSpecs: tmp35Result,
      pushToTalk: stateFromStores,
      CONTROLS_HEIGHT_PTT: sharedValue11,
      CONTROLS_HEIGHT: null,
    };
    let tmp56 = CONTROLS_HEIGHT;
    obj7.CONTROLS_HEIGHT = CONTROLS_HEIGHT;
    fn4.__closure = obj7;
    fn4.__workletHash = 2154816141018;
    fn4.__initData = __initData7;
    const animatedReaction1 = tmp(tmp2[22]).useAnimatedReaction(S, fn4);
    const items12 = [cancelControlsDebounce, callback1];
    const layoutEffect2 = obj1.useLayoutEffect(
      () => () => {
        sharedValue7();
        sharedValue13();
      },
      items12,
    );
    const items13 = [setControlsMode];
    const effect3 = obj1.useEffect(() => {
      function closeTiV() {
        flag({ mode: derivedValue.FLOATING_DEFAULT });
      }
      let ComponentDispatch = channelId(first[42]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(callback3.VOICE_PANEL_TIV_CLOSE, closeTiV);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants4.VOICE_PANEL_TIV_CLOSE, closeTiV);
      };
    }, items13);
    controlsSpecs = tmp35Result;
    closure_132_0 = channelId;
    closure_132_1 = isConnected;
    closure_132_2 = sharedValue1;
    closure_132_3 = sharedValue;
    closure_132_4 = transitionState;
    closure_132_5 = tmp35Result;
    closure_132_6 = setControlsMode;
    let tmp5Result = tmp5(
      obj1.useState(() => {
        const voicePanelsPIP = VoicePanelStore.getState().voicePanelsPIP;
        return voicePanelsPIP.has(channelId) ? constants.PIP : constants.PANEL;
      }),
      2,
    );
    first3 = tmp5Result[0];
    closure_132_7 = first3;
    closure_132_8 = tmp63;
    const layoutEffect3 = obj1.useLayoutEffect(() => {
      const result = first.set(sharedValue6);
      if (type !== native.TransitionStates.YEETED) {
        const result1 = first1.set(guildId);
      }
    });
    const items14 = [channelId, sharedValue, sharedValue1, tmp35Result, setControlsMode];
    setMode = tmp63;
    __initData = obj1.useCallback(() => {
      if (sharedValue.get().mode === constants2.DRAWER) {
        const obj = { mode: tmp.FLOATING_DEFAULT };
        sharedValue13(obj);
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
    }, items14);
    closure_133_0 = guildId;
    closure_133_1 = channelId;
    closure_133_2 = sharedValue7;
    const tmp55 = sharedValue11;
    const tmpResult20 = tmp(tmp2[22]);
    const items15 = [sharedValue7];
    const stateFromStores1 = tmp(tmp2[26]).useStateFromStores(items15, () =>
      ChannelRTCStore.getSelectedParticipantId(guildId),
    );
    closure_133_3 = stateFromStores1;
    const items16 = [guildId, channelId];
    callback6 = obj1.useCallback((id2) => {
      let result = null == id2;
      if (!result) {
        result = useIsVoicePanelParticipantFocusable.isVoicePanelParticipantFocusable(channelId, guildId, id2);
      }
      if (result) {
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(guildId, id2);
      }
    }, items16);
    closure_133_4 = callback6;
    closure_133_5 = obj1.useRef(undefined);
    const targetDimensions = first2.getTargetDimensions(stateFromStores1);
    closure_133_6 = targetDimensions;
    const items17 = [sharedValue7, stateFromStores1, targetDimensions];
    const layoutEffect4 = obj1.useLayoutEffect(() => {
      let tmp2 = null;
      if (null != first1) {
        const obj = { id: tmp };
        const merged = Object.assign(sharedValue13);
        tmp2 = obj;
      }
      const current = sharedValue.current;
      if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
        sharedValue.current = tmp2;
        const result = first.set(tmp2);
      }
      obj2 = cheapWorkletShallowEqual;
      tmp6 = tmp2;
    }, items17);
    const tmp71 = tmp8(tmp2[52])(guildId, channelId, stateFromStores1);
    closure_133_7 = tmp71;
    const items18 = [stateFromStores1, tmp71, callback6];
    const effect4 = obj1.useEffect(() => {
      if (null != first1) {
        if (!sharedValue6) {
          type(null);
        }
      }
    }, items18);
    class H {
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
    tmp73[0] = callback6;
    const effect5 = obj1.useEffect(() => () => type(null), tmp73);
    const tmpResult21 = tmp(tmp2[26]);
    const items19 = [sharedValue6];
    stateFromStores2 = tmp(tmp2[26]).useStateFromStores(items19, () => {
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      const embeddedActivityLocationChannelId =
        embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
    closure_134_2 = sharedValue13;
    closure_134_3 = isConnected;
    closure_134_4 = first2;
    closure_134_13 = undefined;
    tmp5Result = tmp5(
      obj1.useState(() => {
        const windowDimensions = channelId(first[35]).getWindowDimensions();
        ({ width, height } = windowDimensions);
        const size = { width, height, landscape: width > height };
        return size;
      }),
      2,
    );
    const first4 = tmp5Result[0];
    closure_134_5 = first4;
    closure_134_6 = tmp79;
    const tmp75 = sharedValue6;
    const tmpResult22 = tmp(tmp2[26]);
    const tmp5Result1 = tmp5(obj1.useState(tmp(tmp2[36]).getSafeAreaInsets()), 2);
    const first5 = tmp5Result1[0];
    closure_134_7 = first5;
    closure_134_8 = tmp82;
    const tmpResult23 = tmp(tmp2[36]);
    const managerSubscription = tmp(tmp2[38]).useManagerSubscription(first2);
    closure_134_9 = managerSubscription;
    const obj8 = {
      timeout: -1,
      layoutKey: managerSubscription,
      connected: isConnected,
      windowState: first4,
      safeAreaState: first5,
      contentDimensions: { width: 0, height: 0 },
    };
    const ref = obj1.useRef(obj8);
    closure_134_10 = ref;
    closure_135_0 = isConnected;
    closure_135_1 = ref;
    closure_135_2 = tmp79;
    closure_135_3 = tmp82;
    const items20 = [ref, isConnected, tmp5Result[1], tmp5Result1[1]];
    const layoutEffect5 = obj1.useLayoutEffect(() => {
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
    }, items20);
    const callback7 = obj1.useCallback(() => {
      clearTimeout(first2.current.timeout);
      first2.current.timeout = setTimeout(() => {
        clearTimeout(ref.current.timeout);
        channelId(first[43]).batchUpdates(() => {
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
    closure_134_11 = callback7;
    const items21 = [callback7];
    const layoutEffect6 = obj1.useLayoutEffect(() => {
      closure_0 = guildId(first[44])(function updateSafeAreas(current) {
        let obj = channelId(first[23]);
        if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
          obj = {};
          const merged = Object.assign(current);
          ref.current.safeAreaState = obj;
          sharedValue1();
        }
      });
      let obj = channelId(first[36]);
      const safeAreaInsets = obj.getSafeAreaInsets();
      if (!obj2.cheapWorkletShallowEqual(first2.current.safeAreaState, safeAreaInsets)) {
        obj = {};
        let merged = Object.assign(safeAreaInsets);
        first2.current.safeAreaState = obj;
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
        obj3 = channelId(first[23]);
      }
      closure_1 = guildId(first[45])(updateWindowDimensions);
      let tmp3Result = channelId(first[35]);
      let windowDimensions = tmp3Result.getWindowDimensions();
      ({ width, height } = windowDimensions);
      let size = { width, height, landscape: width > height };
      tmp3Result = channelId(first[23]);
      if (!tmp3Result.cheapWorkletShallowEqual(first2.current.windowState, size)) {
        first2.current.windowState = size;
        sharedValue1();
      }
      return () => {
        closure_0();
        closure_1();
      };
    }, items21);
    let id = obj1.useId();
    closure_134_12 = id;
    const items22 = [isConnected, id];
    const layoutEffect7 = obj1.useLayoutEffect(() => {
      if (first1) {
        let state = SafeAreaDisabledStore.getState();
        const obj = { key: sharedValue8, lockEnabled: true };
        let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        return () => {
          const state = first2.getState();
          const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
        };
      }
    }, items22);
    const obj9 = {
      windowWidth: null,
      windowHeight: null,
      safeAreaLeft: null,
      safeAreaRight: null,
      safeAreaTop: null,
      safeAreaBottom: null,
      controlBarSize: null,
    };
    ({ width: obj41.windowWidth, height: obj41.windowHeight } = first4);
    ({
      left: obj41.safeAreaLeft,
      right: obj41.safeAreaRight,
      top: obj41.safeAreaTop,
      bottom: obj41.safeAreaBottom,
    } = first5);
    if (stateFromStores) {
      tmp56 = tmp55;
    }
    obj9.controlBarSize = tmp56;
    const updateStateResult = first2.updateState(items, obj9);
    closure_134_13 = updateStateResult;
    const items23 = [
      sharedValue13,
      updateStateResult,
      managerSubscription,
      first2,
      sharedValue3,
      first5,
      sharedValue2,
      first4,
      isConnected,
    ];
    const layoutEffect8 = obj1.useLayoutEffect(() => {
      function executeLayoutManagerEffect() {
        return type.handleLayoutEffect();
      }
      first2.current.layoutKey = flag;
      channelId(contentDimensions[22]);
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
      let obj = {
        isConnected: first1,
        cheapWorkletShallowEqual: channelId(contentDimensions[23]).cheapWorkletShallowEqual,
        contentDimensions,
        windowDimensions: executeLayoutManagerEffect,
        safeArea: guildId,
        runOnJS: channelId(contentDimensions[22]).runOnJS,
        executeLayoutManagerEffect,
      };
      fn.__closure = obj;
      fn.__workletHash = 13791383688018;
      fn.__initData = __initData;
      obj = { windowState: sharedValue, safeAreaState: sharedValue6, contentState: sharedValue3 };
      obj.runOnUI(fn)(obj);
    }, items23);
    const items24 = [first2];
    const effect6 = obj1.useEffect(() => {
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
              let obj = useWindowDimensions;
              const windowDimensions = obj.getWindowDimensions();
              ({ width, height } = windowDimensions);
              let tmp4 = width === width;
              if (tmp4) {
                tmp4 = window_height === height;
              }
              if (tmp4) {
                if (null != type.checkDimensionsMismatch(width, height)) {
                  c3 = true;
                  obj = {
                    layout_width: null,
                    layout_height: null,
                    window_width: null,
                    window_height: null,
                    was_dirty: null,
                  };
                  ({ staleWidth: obj3.layout_width, staleHeight: obj3.layout_height } = result);
                  obj.window_width = width;
                  obj.window_height = window_height;
                  obj.was_dirty = result.wasDirty;
                  AnalyticsUtilsDefault.track(constants3.VOICE_PANEL_LAYOUT_DESYNC, obj);
                  c1 = null;
                }
              }
            }, 250);
          }
          let obj = channelId(first[35]);
        }
      }
      if (!channelId(first[46]).isStable) {
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
    }, items24);
    const layoutEffect9 = obj1.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
    const items25 = [first3, stateFromStores2];
    const layoutEffect10 = obj1.useLayoutEffect(() => {
      if (tmp) {
        const result = EmbeddedActivitiesActionCreators.updateActivityPanelMode(ActivityPanelModes.PIP);
      }
      tmp = first3 === constants.PANEL && stateFromStores2;
    }, items25);
    closure_136_0 = sharedValue1;
    closure_136_1 = tmp35Result;
    const tmpResult24 = tmp(tmp2[38]);
    const fn5 = function c() {
      const items = [channelId.get(), guildId.get().mode];
      return items;
    };
    const obj10 = { mode: sharedValue1, controlsSpecs: tmp35Result };
    fn5.__closure = obj10;
    fn5.__workletHash = 10791754460802;
    fn5.__initData = __initData10;
    const fn6 = function s(arg0, arg1) {
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
        let tmp8 = first1(arg0, 2)[1] === derivedValue.DRAWER;
        if (tmp8) {
          tmp8 = tmp6 === sharedValue4.PANEL;
        }
        if (tmp8) {
          first = undefined;
          if (arg1 != null) {
            first = arg1[0];
          }
          tmp8 = first === sharedValue4.PANEL;
        }
        if (!tmp8) {
          channelId(tmp2[22]).runOnJS(channelId(tmp2[55]).dismissKeyboard)();
          const tmpResult = channelId(tmp2[22]);
        }
        const tmp5 = first1(arg0, 2);
      }
      obj = channelId(first[23]);
      tmp3 = arg1;
    };
    const obj11 = {
      cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual,
      VoicePanelControlsModes: tmp36,
      VoicePanelModes: tmp14,
      runOnJS: tmp(tmp2[22]).runOnJS,
      dismissKeyboard: tmp(tmp2[55]).dismissKeyboard,
    };
    fn6.__closure = obj11;
    fn6.__workletHash = 16494740341507;
    fn6.__initData = __initData11;
    const animatedReaction2 = tmp(tmp2[22]).useAnimatedReaction(fn5, fn6);
    closure_137_0 = channelId;
    closure_137_1 = transitionState;
    closure_137_2 = transitionCleanUp;
    closure_137_3 = sharedValue;
    closure_137_4 = sharedValue1;
    closure_137_5 = tmp63;
    const tmpResult25 = tmp(tmp2[22]);
    const sharedValue14 = tmp(tmp2[22]).useSharedValue(transitionState);
    closure_137_6 = sharedValue14;
    const items26 = [transitionState, sharedValue14, transitionCleanUp, channelId];
    const layoutEffect11 = obj1.useLayoutEffect(() => {
      const result = sharedValue13.set(guildId);
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
    }, items26);
    const items27 = [channelId];
    const layoutEffect12 = obj1.useLayoutEffect(
      () => () => {
        const state = flag.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + channelId });
      },
      items27,
    );
    const tmpResult26 = tmp(tmp2[22]);
    const fn7 = function p() {
      const items = [first1.get(), type.get(), sharedValue13.get()];
      return items;
    };
    const obj12 = { connected: sharedValue, mode: sharedValue1, sharedTransitionState: sharedValue14 };
    fn7.__closure = obj12;
    fn7.__workletHash = 7656858903152;
    fn7.__initData = __initData8;
    const fn8 = function f(arg0, arg1) {
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
        [tmp6, tmp7, tmp8] = _slicedToArray(arg0, 3);
        if (tmp8 === native.TransitionStates.YEETED) {
          if (tmp7 !== constants.DISMISSED) {
            let tmpResult = ReanimatedRexport;
            tmpResult.runOnJS(sharedValue)(tmp16.DISMISSED);
          }
        } else if (tmp7 === constants.DISMISSED) {
          let PANEL;
          if (arg1 != null) {
            PANEL = arg1[1];
          }
          if (PANEL == null) {
            PANEL = constants.PANEL;
          }
          if (constants.PANEL !== PANEL) {
            if (constants.PIP !== PANEL) {
              PANEL = constants.PANEL;
            }
            tmpResult = ReanimatedRexport;
            tmpResult.runOnJS(sharedValue)(PANEL);
          }
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
            const tmpResult1 = ReanimatedRexport;
          }
        }
        const tmp5 = _slicedToArray(arg0, 3);
      }
      obj = cheapWorkletShallowEqual;
      tmp3 = arg1;
    };
    const obj13 = {
      cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual,
      TransitionStates: tmp(tmp2[51]).TransitionStates,
      VoicePanelModes: tmp14,
      runOnJS: tmp(tmp2[22]).runOnJS,
      setMode: tmp5Result[1],
    };
    fn8.__closure = obj13;
    fn8.__workletHash = 5740547237317;
    fn8.__initData = __initData9;
    const animatedReaction3 = tmp(tmp2[22]).useAnimatedReaction(fn7, fn8);
    const tmpResult27 = tmp(tmp2[22]);
    const obj14 = {
      channelId,
      connected: isConnected,
      focusedId: stateFromStores1,
      layoutManager: first2,
      mode: first3,
    };
    const controllerPIPState = tmp(tmp2[60]).useControllerPIPState(obj14);
    const obj15 = {
      mode: sharedValue1,
      controlsSpecs: tmp35Result,
      safeArea: sharedValue3,
      windowDimensions: sharedValue2,
    };
    __initData2 = tmp8(tmp2[61])(obj15);
    closure_138_0 = channelId;
    closure_138_1 = first3;
    closure_138_2 = obj1.useRef(null);
    const items28 = [first3, stateFromStores1, channelId];
    const layoutEffect13 = obj1.useLayoutEffect(() => {
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
    }, items28);
    const layoutEffect14 = obj1.useLayoutEffect(() => {
      first.current = guildId;
    });
    closure_139_0 = channelId;
    closure_139_1 = sharedValue7;
    closure_139_2 = controllerPIPState;
    closure_139_3 = stateFromStores1;
    const items29 = [channelId];
    const callback8 = obj1.useCallback((arg0) => {
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
              const obj = {
                key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE",
                icon: _modDef17052,
                content: null,
                disableAnimations: true,
                toastDurationMs: 3000,
              };
              const intl = util.intl;
              obj.content = intl.string(util.t.O2IlPT);
              obj.open(obj);
              const result2 = trackActivityThermalStateNoticeShown.trackActivityThermalStateNoticeShown();
            }
            if (isVideoEnabledResult) {
              AudioActionCreatorsDefault.setVideoEnabled(false);
            }
            const result3 = EmbeddedActivitiesActionCreators.consumeRequestToReactToSeriousThermalState();
          }
        }
      }
    }, items29);
    closure_139_4 = callback8;
    const items30 = [stateFromStores1, controllerPIPState, callback8, channelId];
    const effect7 = obj1.useEffect(() => {
      const items = [sharedValue1, sharedValue7];
      const batchedStoreListener = new channelId(first[26]).BatchedStoreListener(items, () => {
        type({ focusedId: first1, pipParticipantId: id.id });
        const obj = { focusedId: first1, pipParticipantId: id.id };
      });
      batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
      return () => batchedStoreListener.detach();
    }, items30);
    const tmpResult28 = tmp(tmp2[60]);
    const fn9 = function f() {
      value = guildId.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      const items = [id, first.id];
      return items;
    };
    const obj16 = { focused: sharedValue7, pipState: controllerPIPState };
    fn9.__closure = obj16;
    fn9.__workletHash = 94735519164;
    fn9.__initData = __initData2;
    const fn10 = function h(arg0, arg1) {
      let obj = cheapWorkletShallowEqual;
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp6, tmp7] = _slicedToArray(arg0, 2);
        const tmp5 = _slicedToArray(arg0, 2);
        obj = { focusedId: tmp6, pipParticipantId: tmp7 };
        ReanimatedRexport.runOnJS(type)(obj);
        const tmp2Result = ReanimatedRexport;
      }
      tmp = arg1;
    };
    const obj17 = {
      cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual,
      runOnJS: tmp(tmp2[22]).runOnJS,
      handleStateUpdates: callback8,
    };
    fn10.__closure = obj17;
    fn10.__workletHash = 15246095289306;
    fn10.__initData = sharedValue15;
    const animatedReaction4 = tmp(tmp2[22]).useAnimatedReaction(fn9, fn10);
    closure_140_0 = channelId;
    closure_140_1 = sharedValue7;
    closure_140_2 = sharedValue1;
    closure_140_3 = sharedValue;
    const items31 = [channelId];
    const callback9 = obj1.useCallback((arg0) => {
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
    }, items31);
    closure_140_4 = callback9;
    const tmpResult29 = tmp(tmp2[22]);
    class S {
      constructor() {
        value = guildId.get();
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        items = [, ,];
        items[0] = id;
        items[1] = closure_2.get();
        items[2] = closure_3.get();
        return items;
      }
    }
    const obj18 = { focused: sharedValue7, mode: sharedValue1, connected: sharedValue };
    S.__closure = obj18;
    S.__workletHash = 16641161683997;
    S.__initData = __initData;
    const fn11 = function h(arg0, arg1) {
      let obj = cheapWorkletShallowEqual;
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp6, tmp7, tmp8] = _slicedToArray(arg0, 3);
        const tmp5 = _slicedToArray(arg0, 3);
        obj = { focusedParticipantId: tmp6, voicePanelMode: tmp7, connectedValue: tmp8 };
        ReanimatedRexport.runOnJS(type)(obj);
        const tmp2Result = ReanimatedRexport;
      }
      tmp = arg1;
    };
    const obj19 = {
      cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual,
      runOnJS: tmp(tmp2[22]).runOnJS,
      handleAnimatedReaction: callback9,
    };
    fn11.__closure = obj19;
    fn11.__workletHash = 15290799116693;
    fn11.__initData = callback6;
    const animatedReaction5 = tmp(tmp2[22]).useAnimatedReaction(S, fn11);
    closure_141_0 = setControlsMode;
    const items32 = [setControlsMode];
    const callback10 = obj1.useCallback(() => {
      channelId({ mode: constants2.FLOATING_DEFAULT });
    }, items32);
    const obj20 = { onTransition: callback10 };
    tmp8(tmp2[21])(obj20);
    closure_142_0 = callback5;
    const tmpResult30 = tmp(tmp2[22]);
    const enableMuteWarning = tmp8(tmp2[25]).useConfig({ location: "VoicePanelController" }).enableMuteWarning;
    closure_142_1 = enableMuteWarning;
    closure_142_2 = obj1.useRef(0);
    const tmp8Result = tmp8(tmp2[25]);
    const items33 = [tmp3];
    const stateFromStores3 = tmp(tmp2[26]).useStateFromStores(items33, () => sharedValue3.getSpeakingWhileMuted());
    closure_142_3 = stateFromStores3;
    const items34 = [stateFromStores3, enableMuteWarning, callback5];
    const effect8 = obj1.useEffect(() => {
      let tmp = first1;
      if (first1) {
        tmp = guildId;
      }
      if (tmp) {
        const _performance = performance;
        if (performance.now() - first.current >= closure_32) {
          const _performance2 = performance;
          tmp3.current = performance.now();
          channelId();
          const obj = { key: "SPEAKING_WHILE_MUTED", icon: _modDef9627, content: null, toastDurationMs: 3000 };
          const intl = util.intl;
          obj.content = intl.string(util.t["29gnR4"]);
          obj.open(obj);
        }
      }
    }, items34);
    tmp8(tmp2[62])(channelId, sharedValue1, tmp5Result[1], sharedValue);
    tmp8(tmp2[63])();
    closure_143_0 = isConnected;
    closure_143_1 = first3;
    closure_143_2 = stateFromStores1;
    closure_143_3 = stateFromStores2;
    const tmpResult31 = tmp(tmp2[26]);
    const items35 = [tmp75];
    const stateFromStoresObject = tmp(tmp2[26]).useStateFromStoresObject(items35, () => {
      let obj = sharedValue6;
      const currentEmbeddedActivity = sharedValue6.getCurrentEmbeddedActivity();
      let applicationId;
      if (currentEmbeddedActivity != null) {
        applicationId = currentEmbeddedActivity.applicationId;
      }
      let compositeInstanceId;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId = currentEmbeddedActivity.compositeInstanceId;
      }
      obj = { applicationId, instanceId: compositeInstanceId, activityOrientationLockState: null };
      if (null != applicationId) {
        let UNLOCKED2 = obj.getOrientationLockStateForApp(applicationId);
        if (UNLOCKED2 == null) {
          UNLOCKED2 = callback5.UNLOCKED;
        }
        let UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = callback5.UNLOCKED;
      }
      obj.activityOrientationLockState = UNLOCKED;
      return obj;
    });
    let applicationId = stateFromStoresObject.applicationId;
    closure_143_4 = applicationId;
    const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
    closure_143_5 = activityOrientationLockState;
    const instanceId = stateFromStoresObject.instanceId;
    closure_143_6 = instanceId;
    const items36 = [
      applicationId,
      isConnected,
      first3,
      activityOrientationLockState,
      stateFromStores1,
      stateFromStores2,
      instanceId,
    ];
    const layoutEffect15 = obj1.useLayoutEffect(() => {
      if (!first1) {
        if (guildId === constants.PANEL) {
          if (channelId) {
            if (null != type) {
              let obj = { applicationId: tmp7, instanceId: sharedValue13 };
              if (first === obj2.getEmbeddedActivityParticipantId(obj)) {
                applyActivityOrientationLockDefault(sharedValue);
              }
              obj2 = ChannelRTCParticipants;
            }
            DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
          }
        }
        obj = DeviceOrientation;
        const result = obj.restoreDefaultOrientation();
      }
    }, items36);
    const layoutEffect16 = obj1.useLayoutEffect(() => () => channelId(first[48]).restoreDefaultOrientation(), []);
    closure_144_0 = channelId;
    closure_144_1 = isConnected;
    closure_144_2 = first3;
    const items37 = [first3, channelId, isConnected];
    const effect9 = obj1.useEffect(() => {
      let tmp2 = first !== constants.DISMISSED;
      if (tmp2) {
        tmp2 = guildId;
      }
      if (tmp2) {
        const obj = { video_layout: closure_2_17(first) };
        const merged = Object.assign(AppAnalyticsUtils.collectVoiceAnalyticsMetadata(channelId));
        obj.track(constants3.VIDEO_LAYOUT_TOGGLED, obj);
      }
    }, items37);
    closure_145_0 = sharedValue1;
    closure_145_1 = obj1.useRef(-1);
    const tmpResult32 = tmp(tmp2[26]);
    sharedValue15 = tmp(tmp2[22]).useSharedValue(null);
    closure_145_2 = sharedValue15;
    const items38 = [sharedValue1, sharedValue15];
    callback11 = obj1.useCallback((arg0) => {
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
    }, items38);
    const layoutEffect17 = obj1.useLayoutEffect(() => () => clearTimeout(ref.current), []);
    __initData3 = obj1.useRef(undefined);
    const obj21 = {
      value: tmp5(
        obj1.useState(() => ({
          channelId,
          channelType: type,
          connected: sharedValue,
          contentDimensions: sharedValue13,
          controlsSpecs,
          dismissPanel,
          dismissToPIPGestureRef,
          dragScrolling: sharedValue6,
          focused: sharedValue7,
          generateStateLocker: callback3,
          guildId,
          hideControls: callback4,
          isCall: flag,
          isFocusedVideoZoomed: sharedValue10,
          layoutManager: first2,
          mode: sharedValue1,
          morphablePanelMode: derivedValue,
          mountedCards: first1,
          pipAvoidanceSpecs,
          preJoinContentSize: sharedValue8,
          safeArea: sharedValue3,
          scrollPosition: sharedValue5,
          setControlsMode,
          setFocused: callback6,
          setIsFocusedVideoZoomed,
          setMode,
          setShowFloatingCTA: callback11,
          showControls: callback5,
          showFloatingCTA: sharedValue15,
          streamOutputSinkStack,
          usePIPState: VoicePanelPIPStateContext.usePIPState,
          useReducedMotion: sharedValue11,
          windowDimensions: sharedValue2,
          wrapperDimensions: sharedValue4,
          wrapperOffset: sharedValue12,
          panelCardStillInPIP: sharedValue9,
        })),
        1,
      )[0],
      children: null,
    };
    const obj22 = { value: controllerPIPState, children: null };
    let tmp135 = guildId;
    if (guildId == null) {
      tmp135 = null;
    }
    const obj23 = { value: tmp135, children: channelId.children };
    obj22.children = setMode(tmp8(tmp2[66]).Provider, obj23);
    obj21.children = setMode(tmp(tmp2[64]).VoicePanelPIPStateContext.Provider, obj22);
    return setMode(tmp8(tmp2[65]).Provider, obj21);
  }
  tmp37 = CONTROLS_HEIGHT;
  const tmpResult17 = channelId(tmp2[22]);
}
