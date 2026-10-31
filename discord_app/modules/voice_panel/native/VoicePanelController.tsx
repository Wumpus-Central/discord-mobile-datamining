// discord_app/modules/voice_panel/native/VoicePanelController.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import ComponentDispatchUtils from "../../../utils/ComponentDispatchUtils.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import useWindowDimensions from "../../screen/useWindowDimensions.native.tsx";
import embeddedActivityLocationUtils from "../../activities/utils/embeddedActivityLocationUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ChannelRTCActionCreatorsDefault from "../../../actions/ChannelRTCActionCreators.tsx";
import AppAnalyticsUtils from "../../app_analytics/AppAnalyticsUtils.tsx";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import ChannelRTCParticipants from "../../calls/ChannelRTCParticipants.tsx";
import DeviceOrientation from "../../device/native/DeviceOrientation.tsx";
import MicrophoneSlashIcon from "../../../design/components/Icon/native/redesign/generated/MicrophoneSlashIcon.tsx";
import cheapWorkletShallowEqual from "../../reanimated/native/cheapWorkletShallowEqual.tsx";
import VoicePanelCardLayoutManagerDefault from "card/VoicePanelCardLayoutManager.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import EmbeddedActivitiesActionCreators from "../../activities/EmbeddedActivitiesActionCreators.tsx";
import VideoSlashIcon from "../../../design/components/Icon/native/redesign/generated/VideoSlashIcon.tsx";
import applyActivityOrientationLockDefault from "../../activities/native/applyActivityOrientationLock.tsx";
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
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import VoicePanelStore from "../VoicePanelStore.tsx";

require = fn;
const AppState = fn(17).AppState;
const VoicePanelConstants = fn(11223);
({ VoicePanelModes: closure_17, getAnalyticsNameForVoicePanelMode: closure_18 } = VoicePanelConstants);
const VoicePanelControlsConstants = fn(11221);
({
  CONTROLS_HEIGHT: closure_19,
  CONTROLS_HEIGHT_PTT: closure_20,
  CONTROLS_HIDE_TIMEOUT: closure_21,
  VoicePanelControlsModes: closure_22,
} = VoicePanelControlsConstants);
const Constants = fn(1072);
({ AnalyticEvents: closure_23, ComponentActions: closure_24, InputModes: closure_25 } = Constants);
const ActivityPanelModes = fn(5657).ActivityPanelModes;
const isActivityParticipant = fn(5681).isActivityParticipant;
const MorphablePanelModes = fn(11224).MorphablePanelModes;
const jsx = fn(21).jsx;
let closure_30 = {
  code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}",
};
let closure_31 = {
  code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}",
};
const MINUTE = DurationsDefault.Millis.MINUTE;
let __initData = {
  code: "function VoicePanelControllerTsx3(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}",
};
let closure_34 = {
  code: "function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;runOnJS(handleStateUpdates)({focusedId:focusedId,pipParticipantId:pipParticipantId});}",
};
let closure_35 = {
  code: "function VoicePanelControllerTsx5(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}",
};
let __initData2 = {
  code: "function VoicePanelControllerTsx6(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}",
};
let closure_37 = {
  code: "function VoicePanelControllerTsx7(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,_queueHideControls}=this.__closure;const specs=controlsSpecs.get();if(specs.locked)return;if(specs.mode!==VoicePanelControlsModes.FLOATING_DEFAULT)return;runOnJS(_queueHideControls)();}",
};
let closure_38 = { code: "function VoicePanelControllerTsx8(){const{mode}=this.__closure;return mode.get();}" };
let __initData3 = {
  code: "function VoicePanelControllerTsx9(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}",
};
const __initData4 = {
  code: "function VoicePanelControllerTsx10(){const{connected}=this.__closure;return connected.get();}",
};
const __initData5 = {
  code: "function VoicePanelControllerTsx11(connected){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}",
};
let closure_42 = {
  code: "function VoicePanelControllerTsx12({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}runOnJS(executeLayoutManagerEffect)();}",
};
const __initData6 = {
  code: "function VoicePanelControllerTsx13(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}",
};
const __initData7 = {
  code: "function VoicePanelControllerTsx14(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode,isDockEnabled}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isDockEnabled&&!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}",
};
const __initData8 = {
  code: "function VoicePanelControllerTsx15(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}",
};
const __initData9 = {
  code: "function VoicePanelControllerTsx16(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default function VoicePanelController(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  ({ transitionState, transitionCleanUp } = channelId);
  let first;
  let first1;
  let first2;
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
  let CONTROLS_HEIGHT;
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
  __initData = undefined;
  let callback8;
  let stateFromStores2;
  __initData2 = undefined;
  let sharedValue14;
  let callback13;
  __initData3 = undefined;
  let tmp = channelId;
  let tmp2 = first;
  const items1 = [sharedValue8];
  const stateFromStores = channelId(first[25]).useStateFromStores(
    items1,
    () => sharedValue8.getMode() === callback3.PUSH_TO_TALK,
  );
  let obj2 = first2;
  first = first1(
    first2.useState(() => {
      const tmp = guildId(first[59]);
      return new guildId(first[59])(sharedValue8.getMediaEngine());
    }),
    1,
  )[0];
  const items2 = [first];
  const effect = first2.useEffect(() => () => first.cleanUp(), items2);
  let obj = channelId(first[25]);
  ({ items, isConnected } = guildId(first[60])(channelId, guildId));
  closure_129_0 = items;
  closure_129_1 = isConnected;
  first1 = first1(
    first2.useState(() => new Set()),
    1,
  )[0];
  closure_129_2 = first1;
  const items3 = [isConnected, items, first1];
  const effect1 = first2.useEffect(() => {
    if (guildId) {
      closure_0 = channelId(first[58]).runAfterInteractions(() => {
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
  let tmp9 = guildId(first[60])(channelId, guildId);
  first2 = first1(first2.useState(channelId(first[61]).useIsMobileRTCV2Enabled("VoicePanelController")), 1)[0];
  const items4 = [channelId, first2];
  const layoutEffect = first2.useLayoutEffect(() => {
    if (first2) {
      let state = VoicePanelStore.getState();
      const result = state.setChannelPanelWithDock(channelId, true);
      return () => {
        const state = sharedValue2.getState();
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
  closure_130_9 = undefined;
  closure_130_10 = undefined;
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
  let obj3 = channelId(first[61]);
  sharedValue = tmp(tmp2[22]).useSharedValue(isConnected);
  const first3 = tmp5(
    obj2.useState(() => {
      if (!first2) {
        return first2;
      } else {
        if (!first2) {
          const voicePanelsPIP = VoicePanelStore.getState().voicePanelsPIP;
          if (!voicePanelsPIP.has(tmp2)) {
            let PIP = constants.PANEL;
          }
        }
        PIP = constants.PIP;
      }
    }),
    1,
  )[0];
  let tmpResult = tmp(tmp2[22]);
  if (first3) {
    let PANEL = tmp17.PIP;
    let tmp18 = tmp17;
  } else {
    PANEL = tmp17.PANEL;
    tmp18 = tmp17;
  }
  sharedValue1 = tmp(tmp2[22]).useSharedValue(PANEL);
  closure_130_5 = sharedValue1;
  const tmpResult36 = tmp(tmp2[22]);
  let size = tmp(tmp2[34]).getWindowDimensions();
  closure_130_6 = size;
  const tmpResult37 = tmp(tmp2[34]);
  const size1 = { width: size.width, height: size.height, landscape: size.width > size.height };
  sharedValue2 = tmp(tmp2[22]).useSharedValue(size1);
  const tmpResult38 = tmp(tmp2[22]);
  const rect = tmp(tmp2[35]).getSafeAreaInsets();
  closure_130_7 = rect;
  const tmpResult39 = tmp(tmp2[35]);
  let merged = Object.assign(rect);
  sharedValue3 = tmp(tmp2[22]).useSharedValue({});
  let obj4 = {};
  const tmpResult40 = tmp(tmp2[22]);
  const maxPanelWidth = tmp(tmp2[36]).getMaxPanelWidth({
    windowWidth: size.width,
    connected: isConnected,
    safeAreaLeft: rect.left,
    safeAreaRight: rect.right,
  });
  let obj5 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const tmpResult41 = tmp(tmp2[36]);
  if (first3) {
    let obj6 = {
      drawerHeight: null,
      drawerWidth: null,
      drawerX: 0,
      drawerY: 0,
      pipX: -1,
      pipY: -1,
      animated: false,
      mode: null,
    };
    ({ height: obj18.drawerHeight, width: obj18.drawerWidth } = size);
    obj6.mode = tmp18.PIP;
    let obj7 = obj6;
  } else {
    obj7 = {
      drawerHeight: size.height,
      drawerWidth: maxPanelWidth,
      drawerX: tmp(tmp2[36]).getPanelX(size.width, maxPanelWidth),
      drawerY: size.height,
      pipX: -1,
      pipY: -1,
      animated: true,
      mode: tmp18.PANEL,
    };
    const tmpResult43 = tmp(tmp2[36]);
  }
  sharedValue4 = tmp(tmp2[22]).useSharedValue(obj7);
  const tmpResult42 = tmp(tmp2[22]);
  sharedValue5 = tmp(tmp2[22]).useSharedValue(0);
  const tmpResult44 = tmp(tmp2[22]);
  sharedValue6 = tmp(tmp2[22]).useSharedValue(false);
  const tmpResult45 = tmp(tmp2[22]);
  sharedValue7 = tmp(tmp2[22]).useSharedValue(null);
  const tmpResult46 = tmp(tmp2[22]);
  sharedValue8 = tmp(tmp2[22]).useSharedValue(0);
  const tmpResult47 = tmp(tmp2[22]);
  sharedValue9 = tmp(tmp2[22]).useSharedValue(false);
  closure_130_8 = sharedValue9;
  class S {
    constructor(arg0) {
      result = closure_8.set(channelId);
      return;
    }
  }
  S.__closure = { isFocusedVideoZoomed: sharedValue9 };
  S.__workletHash = 13885070318174;
  S.__initData = stateFromStores2;
  const items5 = [sharedValue9];
  CONTROLS_HEIGHT = obj2.useCallback(S, items5);
  const tmpResult48 = tmp(tmp2[22]);
  sharedValue10 = tmp(tmp2[22]).useSharedValue(sharedValue.useReducedMotion);
  closure_130_9 = sharedValue10;
  const items6 = [sharedValue10];
  const effect2 = obj2.useEffect(() => {
    function onChange() {
      const result = sharedValue7.set(sharedValue.useReducedMotion);
    }
    let result = sharedValue.addReactChangeListener(onChange);
    return () => {
      const result = AccessibilityStore.removeReactChangeListener(onChange);
    };
  }, items6);
  const tmpResult49 = tmp(tmp2[22]);
  sharedValue11 = tmp(tmp2[22]).useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const tmp34 = guildId(tmp2[38])({
    isDockEnabled: first2,
    mountsMinimized: first3,
    mode: sharedValue1,
    connected: sharedValue,
    safeArea: sharedValue3,
    wrapperOffset: sharedValue11,
    wrapperDimensions: sharedValue4,
  });
  const tmpResult50 = tmp(tmp2[22]);
  let fn = function z() {
    value = type.get();
    if (constants.PANEL === value) {
      return MorphablePanelModes.PANEL;
    } else if (tmp2.PIP === value) {
      return MorphablePanelModes.PIP;
    } else {
      return MorphablePanelModes.UNDEFINED;
    }
  };
  fn.__closure = { mode: sharedValue1, VoicePanelModes: tmp18, MorphablePanelModes: callback4 };
  fn.__workletHash = 931249605381;
  fn.__initData = __initData2;
  derivedValue = tmp(tmp2[22]).useDerivedValue(fn);
  first4 = tmp5(
    obj2.useState(() => {
      const obj = new VoicePanelCardLayoutManagerDefault(channelId);
      obj.updateItems(first);
      obj.updateProps({
        windowWidth: sharedValue.width,
        windowHeight: sharedValue.height,
        safeAreaLeft: sharedValue12.left,
        safeAreaRight: sharedValue12.right,
        safeAreaTop: sharedValue12.top,
        safeAreaBottom: sharedValue12.bottom,
        controlBarSize: first1 ? dependencyMap : closure_2_19,
      });
      return obj;
    }),
    1,
  )[0];
  closure_130_10 = first4;
  const items7 = [first4];
  const layoutEffect1 = obj2.useLayoutEffect(() => () => flag.cleanUp(), items7);
  const obj8 = { mode: sharedValue1, VoicePanelModes: tmp18, MorphablePanelModes: callback4 };
  const tmpResult51 = tmp(tmp2[22]);
  sharedValue12 = tmp(tmp2[22]).useSharedValue(first4.getContentDimensions());
  pipHandoff = tmp5(
    obj2.useState(() => new guildId(first[37])()),
    1,
  )[0];
  closure_24 = tmp34;
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
  tmp(tmp2[22]);
  const obj9 = { mode: derivedValue.FLOATING_DEFAULT, locked: false, height: null, pushToTalk: null };
  if (stateFromStores) {
    if (isConnected) {
      let tmp41 = sharedValue10;
    }
    obj9.height = tmp41;
    obj9.pushToTalk = stateFromStores;
    const tmp39Result = tmp39(obj9);
    closure_131_4 = tmp39Result;
    closure_131_5 = obj2.useRef(-1);
    const callback1 = obj2.useCallback(() => {
      if (-1 !== type.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(type.current);
        type.current = -1;
      }
    }, []);
    closure_131_6 = callback1;
    const items8 = [tmp39Result, callback1, sharedValue1];
    const callback2 = obj2.useCallback(() => {
      sharedValue();
      if (-1 === type.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
          sharedValue();
          if (channelId.get() === sharedValue4.PANEL) {
            let locked = first2.get().mode !== derivedValue.FLOATING_DEFAULT;
            if (!locked) {
              locked = first2.get().locked;
            }
            if (!locked) {
              const obj2 = { mode: derivedValue.HIDDEN };
              guildId(first[40])(first2, obj2);
            }
          }
        }, __initData);
      }
    }, items8);
    closure_131_7 = callback2;
    const items9 = [tmp39Result, callback2];
    const memo = obj2.useMemo(() => {
      closure_0 = guildId(first[41]).debounce(function _setControlsMode(mode, returnMode) {
        guildId(first[40])(first2, { mode, returnMode });
        sharedValue12();
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
            updateSharedValueIfChangedDefault(first2, obj2);
            sharedValue12();
          }
        },
      };
    }, items9);
    const cancelControlsDebounce = memo.cancelControlsDebounce;
    closure_131_8 = cancelControlsDebounce;
    setControlsMode = memo.setControlsMode;
    closure_131_9 = setControlsMode;
    const _Set = Set;
    const set = new Set();
    closure_131_10 = obj2.useRef(set);
    const items10 = [tmp39Result, callback2, callback1];
    const items11 = [setControlsMode];
    callback3 = obj2.useCallback((arg0) => {
      let v4Result = arg0;
      if (arg0 == null) {
        v4Result = channelId(first[42]).v4();
        let obj = channelId(first[42]);
      }
      channelId = v4Result;
      return {
        lock(mode) {
          const current = flag.current;
          if (!current.has(v4Result)) {
            sharedValue();
            const current2 = flag.current;
            current2.add(v4Result);
            const obj = { locked: flag.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            updateSharedValueIfChangedDefault(first2, obj);
          }
        },
        unlock(mode) {
          const current = flag.current;
          if (current.has(v4Result)) {
            const current2 = flag.current;
            current2.delete(v4Result);
            const obj = { locked: flag.current.size > 0 };
            if (null != mode) {
              obj.mode = mode;
            }
            updateSharedValueIfChangedDefault(first2, obj);
            sharedValue12();
          }
        },
      };
    }, items10);
    const items12 = [setControlsMode, tmp39Result];
    callback4 = obj2.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { debounce: false };
      }
      sharedValue7({ mode: constants2.HIDDEN, debounce: obj.debounce });
    }, items11);
    callback5 = obj2.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let debounce = obj.debounce;
      if (debounce === undefined) {
        debounce = false;
      }
      let mode = first2.get().returnMode;
      if (mode == null) {
        mode = constants2.FLOATING_DEFAULT;
      }
      return sharedValue7({ mode, debounce });
    }, items12);
    const fn2 = function l() {
      value = first2.get();
      if (!value.locked) {
        if (value.mode === constants2.FLOATING_DEFAULT) {
          ReanimatedRexport.runOnJS(sharedValue12)();
        }
      }
    };
    const obj10 = {
      controlsSpecs: tmp39Result,
      VoicePanelControlsModes: tmp40,
      runOnJS: tmp(tmp2[22]).runOnJS,
      _queueHideControls: callback2,
    };
    fn2.__closure = obj10;
    fn2.__workletHash = 11728765250899;
    fn2.__initData = sharedValue14;
    const items13 = [tmp39Result, callback2];
    callback6 = obj2.useCallback(fn2, items13);
    const fn3 = function h() {
      return channelId.get();
    };
    const obj11 = { mode: sharedValue1 };
    fn3.__closure = obj11;
    fn3.__workletHash = 974064852045;
    fn3.__initData = callback13;
    const fn4 = function u(arg0) {
      if (arg0 === constants.PANEL) {
        ReanimatedRexport.runOnJS(sharedValue12)();
      } else {
        ReanimatedRexport.runOnJS(sharedValue)();
      }
    };
    const obj12 = {
      VoicePanelModes: tmp18,
      runOnJS: tmp(tmp2[22]).runOnJS,
      _queueHideControls: callback2,
      _clearHideControlsQueue: callback1,
    };
    fn4.__closure = obj12;
    fn4.__workletHash = 14878725055629;
    fn4.__initData = __initData3;
    const animatedReaction = tmp(tmp2[22]).useAnimatedReaction(fn3, fn4);
    const items14 = [stateFromStores, tmp39Result, isConnected];
    const layoutEffect2 = obj2.useLayoutEffect(() => {
      if (first1) {
        if (guildId) {
          let tmp5 = dependencyMap;
        }
        const obj = { height: tmp5, pushToTalk: tmp3 };
        tmp(tmp2, obj);
      }
      tmp5 = closure_2_19;
    }, items14);
    const tmpResult54 = tmp(tmp2[22]);
    const fn5 = function f() {
      return first.get();
    };
    const obj13 = { connected: sharedValue };
    fn5.__closure = obj13;
    fn5.__workletHash = 16839042645652;
    fn5.__initData = __initData4;
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
    const obj14 = {
      updateSharedValueIfChanged: tmp8(tmp2[40]),
      controlsSpecs: tmp39Result,
      pushToTalk: stateFromStores,
      CONTROLS_HEIGHT_PTT: sharedValue10,
      CONTROLS_HEIGHT: null,
    };
    let tmp62 = CONTROLS_HEIGHT;
    obj14.CONTROLS_HEIGHT = CONTROLS_HEIGHT;
    S.__closure = obj14;
    S.__workletHash = 8961429796283;
    S.__initData = __initData5;
    const animatedReaction1 = tmp(tmp2[22]).useAnimatedReaction(fn5, S);
    const items15 = [cancelControlsDebounce, callback1];
    const layoutEffect3 = obj2.useLayoutEffect(
      () => () => {
        sharedValue6();
        sharedValue();
      },
      items15,
    );
    const items16 = [setControlsMode];
    const effect3 = obj2.useEffect(() => {
      function closeTiV() {
        sharedValue7({ mode: derivedValue.FLOATING_DEFAULT });
      }
      let ComponentDispatch = channelId(first[43]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(closure_24.VOICE_PANEL_TIV_CLOSE, closeTiV);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants4.VOICE_PANEL_TIV_CLOSE, closeTiV);
      };
    }, items16);
    controlsSpecs = tmp39Result;
    ({ beginDockEntry, dockJoinMorphOrigin } = tmp34);
    closure_132_0 = channelId;
    closure_132_1 = isConnected;
    closure_132_2 = sharedValue1;
    closure_132_3 = sharedValue;
    closure_132_4 = transitionState;
    closure_132_5 = tmp39Result;
    closure_132_6 = setControlsMode;
    closure_132_7 = first2;
    closure_132_10 = undefined;
    const tmp5Result = tmp5(
      obj2.useState(() => {
        if (!sharedValue12) {
          const voicePanelsPIP = VoicePanelStore.getState().voicePanelsPIP;
          if (!voicePanelsPIP.has(tmp)) {
            let PIP = constants.PANEL;
          }
          return PIP;
        }
        PIP = constants.PIP;
      }),
      2,
    );
    first5 = tmp5Result[0];
    closure_132_8 = first5;
    closure_132_9 = tmp69;
    closure_133_0 = channelId;
    closure_133_1 = isConnected;
    closure_133_2 = first2;
    closure_133_3 = first3;
    closure_133_4 = tmp69;
    closure_133_5 = beginDockEntry;
    closure_133_6 = sharedValue4;
    closure_133_7 = dockJoinMorphOrigin;
    closure_133_8 = obj2.useRef(isConnected);
    const items17 = [channelId, dockJoinMorphOrigin, isConnected, first2, ,];
    class S {
      constructor(arg0) {
        result = closure_8.set(channelId);
        return;
      }
    }
    items17[5] = sharedValue4;
    const layoutEffect4 = obj2.useLayoutEffect(() => {
      if (first) {
        if (guildId) {
          if (!sharedValue6.current) {
            tmp2.current = true;
            if (null == ChannelRTCStore.getSelectedParticipantId(channelId)) {
              value = sharedValue.get();
              const size = { x: null, y: null, width: null, height: null };
              ({ drawerX: obj.x, drawerY: obj.y, drawerWidth: obj.width, drawerHeight: obj.height } = value);
              const result = sharedValue12.set(size);
              first2(constants.PIP);
            }
          }
        }
      }
    }, items17);
    const items18 = [beginDockEntry, first3];
    const layoutEffect5 = obj2.useLayoutEffect(() => {
      if (first1) {
        type();
      }
    }, items18);
    const items19 = [sharedValue1];
    callback7 = obj2.useCallback((arg0) => {
      let tmp2 = arg0 === constants.PANEL;
      if (tmp2) {
        tmp2 = first.get() === tmp.PIP;
      }
      if (tmp2) {
        ChatInputUtils.dismissKeyboard();
      }
      sharedValue7(arg0);
    }, items19);
    closure_132_10 = callback7;
    const layoutEffect6 = obj2.useLayoutEffect(() => {
      const result = first.set(sharedValue6);
      if (first2 !== native.TransitionStates.YEETED) {
        const result1 = first1.set(guildId);
      }
    });
    const items20 = [channelId, sharedValue, sharedValue1, tmp39Result, setControlsMode, callback7];
    __initData = obj2.useCallback(() => {
      if (type.get().mode === constants2.DRAWER) {
        const obj = { mode: tmp.FLOATING_DEFAULT };
        sharedValue(obj);
        flag = true;
      } else if (first1.get()) {
        let flag2 = first.get() === constants.PANEL;
        if (flag2) {
          flag(tmp7.PIP);
          flag2 = true;
        }
        flag = flag2;
      } else {
        const state = VoicePanelStore.getState();
        state.closeChannel(channelId);
        flag = true;
      }
      return flag;
    }, items20);
    closure_134_0 = guildId;
    closure_134_1 = channelId;
    closure_134_2 = sharedValue7;
    const tmp61 = sharedValue10;
    const tmpResult55 = tmp(tmp2[22]);
    const items21 = [sharedValue6];
    const stateFromStores1 = tmp(tmp2[25]).useStateFromStores(items21, () =>
      ChannelRTCStore.getSelectedParticipantId(guildId),
    );
    closure_134_3 = stateFromStores1;
    const items22 = [guildId, channelId];
    callback8 = obj2.useCallback((id2) => {
      let result = null == id2;
      if (!result) {
        result = useIsVoicePanelParticipantFocusable.isVoicePanelParticipantFocusable(channelId, guildId, id2);
      }
      if (result) {
        const participant = ChannelRTCActionCreatorsDefault.selectParticipant(guildId, id2);
      }
    }, items22);
    closure_134_4 = callback8;
    closure_134_5 = obj2.useRef(undefined);
    const targetDimensions = first4.getTargetDimensions(stateFromStores1);
    closure_134_6 = targetDimensions;
    const items23 = [sharedValue7, stateFromStores1, targetDimensions];
    const layoutEffect7 = obj2.useLayoutEffect(() => {
      let tmp2 = null;
      if (null != first1) {
        const obj = { id: tmp };
        const merged = Object.assign(sharedValue);
        tmp2 = obj;
      }
      const current = type.current;
      if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
        type.current = tmp2;
        const result = first.set(tmp2);
      }
      obj2 = cheapWorkletShallowEqual;
      tmp6 = tmp2;
    }, items23);
    const tmp80 = tmp8(tmp2[54])(guildId, channelId, stateFromStores1);
    closure_134_7 = tmp80;
    const items24 = [stateFromStores1, tmp80, callback8];
    const effect4 = obj2.useEffect(() => {
      if (null != first1) {
        if (!sharedValue12) {
          first2(null);
        }
      }
    }, items24);
    const items25 = [channelId, callback8];
    const effect5 = obj2.useEffect(
      () => () => {
        const channel = sharedValue1.getChannel(guildId);
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (isGuildStageVoiceResult) {
          isGuildStageVoiceResult = sharedValue5.getVoiceChannelId() === guildId;
        }
        if (!isGuildStageVoiceResult) {
          first2(null);
        }
      },
      items25,
    );
    const tmpResult56 = tmp(tmp2[25]);
    const items26 = [sharedValue12];
    stateFromStores2 = tmp(tmp2[25]).useStateFromStores(items26, () => {
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
    let tmp85 = first2;
    if (first2) {
      tmp85 = transitionState === tmp(tmp2[53]).TransitionStates.YEETED;
    }
    closure_135_0 = sharedValue2;
    closure_135_1 = sharedValue3;
    closure_135_2 = sharedValue12;
    closure_135_3 = isConnected;
    closure_135_4 = first4;
    const tmp5Result3 = tmp5(
      obj2.useState(() => {
        const windowDimensions = channelId(first[34]).getWindowDimensions();
        ({ width, height } = windowDimensions);
        const size = { width, height, landscape: width > height };
        return size;
      }),
      2,
    );
    const first6 = tmp5Result3[0];
    closure_135_5 = first6;
    closure_135_6 = tmp88;
    const tmp83 = sharedValue12;
    const tmpResult57 = tmp(tmp2[25]);
    const tmp5Result4 = tmp5(obj2.useState(tmp(tmp2[35]).getSafeAreaInsets()), 2);
    const first7 = tmp5Result4[0];
    closure_135_7 = first7;
    closure_135_8 = tmp91;
    const tmpResult58 = tmp(tmp2[35]);
    const managerSubscription = tmp(tmp2[39]).useManagerSubscription(first4);
    closure_135_9 = managerSubscription;
    const obj15 = {
      timeout: -1,
      layoutKey: managerSubscription,
      connected: isConnected,
      windowState: first6,
      safeAreaState: first7,
      contentDimensions: { width: 0, height: 0 },
    };
    const ref = obj2.useRef(obj15);
    closure_135_10 = ref;
    closure_136_0 = isConnected;
    closure_136_1 = ref;
    closure_136_2 = tmp88;
    closure_136_3 = tmp91;
    const items27 = [ref, isConnected, tmp5Result3[1], tmp5Result4[1]];
    const layoutEffect8 = obj2.useLayoutEffect(() => {
      if (guildId.current.connected !== channelId) {
        guildId.current.connected = tmp;
        first((safeAreaState) => {
          let windowState = safeAreaState;
          const windowDimensions = channelId(first[34]).getWindowDimensions();
          ({ width, height } = windowDimensions);
          guildId.current.windowState = { width, height, landscape: width > height };
          const obj = channelId(first[34]);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, guildId.current.windowState)) {
            windowState = guildId.current.windowState;
          }
          return windowState;
        });
        first1((safeAreaState) => {
          guildId.current.safeAreaState = channelId(first[35]).getSafeAreaInsets();
          const obj = channelId(first[35]);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, guildId.current.safeAreaState)) {
            safeAreaState = guildId.current.safeAreaState;
          }
          return safeAreaState;
        });
      }
    }, items27);
    const callback9 = obj2.useCallback(() => {
      clearTimeout(flag.current.timeout);
      flag.current.timeout = setTimeout(() => {
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
    closure_135_11 = callback9;
    const items28 = [callback9];
    const layoutEffect9 = obj2.useLayoutEffect(() => {
      closure_0 = guildId(first[45])(function updateSafeAreas(current) {
        if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
          const obj2 = {};
          const merged = Object.assign(current);
          ref.current.safeAreaState = obj2;
          first4();
        }
        obj = channelId(first[23]);
      });
      const safeAreaInsets = channelId(first[35]).getSafeAreaInsets();
      let obj = channelId(first[35]);
      if (!obj2.cheapWorkletShallowEqual(flag.current.safeAreaState, safeAreaInsets)) {
        let obj3 = {};
        let merged = Object.assign(safeAreaInsets);
        flag.current.safeAreaState = obj3;
        first4();
      }
      function updateWindowDimensions() {
        let windowDimensions = arg0;
        if (arg0 === undefined) {
          windowDimensions = channelId(first[34]).getWindowDimensions();
          const obj = channelId(first[34]);
        }
        ({ width, height } = windowDimensions);
        const size = { width, height, landscape: width > height };
        if (!obj3.cheapWorkletShallowEqual(ref.current.windowState, size)) {
          ref.current.windowState = size;
          first4();
        }
        obj3 = channelId(first[23]);
      }
      closure_1 = guildId(first[46])(updateWindowDimensions);
      obj2 = channelId(first[23]);
      let windowDimensions = channelId(first[34]).getWindowDimensions();
      ({ width, height } = windowDimensions);
      let size = { width, height, landscape: width > height };
      const tmp3Result = channelId(first[34]);
      if (!tmp3Result2.cheapWorkletShallowEqual(flag.current.windowState, size)) {
        flag.current.windowState = size;
        first4();
      }
      return () => {
        closure_0();
        closure_1();
      };
    }, items28);
    let id = obj2.useId();
    closure_135_12 = id;
    const items29 = [isConnected, id];
    const layoutEffect10 = obj2.useLayoutEffect(() => {
      if (first1) {
        let state = SafeAreaDisabledStore.getState();
        const obj = { key: sharedValue1, lockEnabled: true };
        let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        return () => {
          const state = flag.getState();
          const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key, lockEnabled: false });
        };
      }
    }, items29);
    if (!tmp85) {
      first4.updateItems(items);
    }
    const obj16 = {
      windowWidth: null,
      windowHeight: null,
      safeAreaLeft: null,
      safeAreaRight: null,
      safeAreaTop: null,
      safeAreaBottom: null,
      controlBarSize: null,
    };
    ({ width: obj43.windowWidth, height: obj43.windowHeight } = first6);
    ({
      left: obj43.safeAreaLeft,
      right: obj43.safeAreaRight,
      top: obj43.safeAreaTop,
      bottom: obj43.safeAreaBottom,
    } = first7);
    if (stateFromStores) {
      tmp62 = tmp61;
    }
    obj16.controlBarSize = tmp62;
    const updatePropsResult = first4.updateProps(obj16);
    closure_135_13 = updatePropsResult;
    const items30 = [
      sharedValue12,
      updatePropsResult,
      managerSubscription,
      first4,
      sharedValue3,
      first7,
      sharedValue2,
      first6,
      isConnected,
    ];
    const layoutEffect11 = obj2.useLayoutEffect(() => {
      function executeLayoutManagerEffect() {
        return first2.handleLayoutEffect();
      }
      flag.current.layoutKey = sharedValue7;
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
      let obj = channelId(contentDimensions[22]);
      fn.__closure = {
        isConnected: first1,
        cheapWorkletShallowEqual: channelId(contentDimensions[23]).cheapWorkletShallowEqual,
        contentDimensions,
        windowDimensions: executeLayoutManagerEffect,
        safeArea: guildId,
        runOnJS: channelId(contentDimensions[22]).runOnJS,
        executeLayoutManagerEffect,
      };
      fn.__workletHash = 5348227953265;
      fn.__initData = __initData;
      obj.runOnUI(fn)({ windowState: type, safeAreaState: sharedValue12, contentState: sharedValue8 });
    }, items30);
    const items31 = [first4];
    const effect6 = obj2.useEffect(() => {
      function checkDimensions() {
        if (!c3) {
          const size = channelId(first[34]).getWindowDimensions();
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
                if (null != first2.checkDimensionsMismatch(width, height)) {
                  c3 = true;
                  const obj4 = {
                    layout_width: null,
                    layout_height: null,
                    window_width: null,
                    window_height: null,
                    was_dirty: null,
                  };
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
          let obj = channelId(first[34]);
        }
      }
      if (!channelId(first[47]).isStable) {
        let _setInterval = setInterval;
        let interval = setInterval(checkDimensions, 1000);
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
    }, items31);
    const layoutEffect12 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
    const items32 = [first5, stateFromStores2];
    const layoutEffect13 = obj2.useLayoutEffect(() => {
      if (tmp) {
        const result = EmbeddedActivitiesActionCreators.updateActivityPanelMode(ActivityPanelModes.PIP);
      }
      tmp = first5 === constants.PANEL && stateFromStores2;
    }, items32);
    closure_137_0 = sharedValue1;
    closure_137_1 = tmp39Result;
    const tmpResult59 = tmp(tmp2[39]);
    const fn6 = function c() {
      const items = [channelId.get(), guildId.get().mode];
      return items;
    };
    const obj17 = { mode: sharedValue1, controlsSpecs: tmp39Result };
    fn6.__closure = obj17;
    fn6.__workletHash = 2821493173859;
    fn6.__initData = __initData8;
    const fn7 = function s(arg0, arg1) {
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
          channelId(tmp2[22]).runOnJS(channelId(tmp2[56]).dismissKeyboard)();
          const tmpResult = channelId(tmp2[22]);
        }
        const tmp5 = first1(arg0, 2);
      }
      obj = channelId(first[23]);
      tmp3 = arg1;
    };
    const obj19 = {
      cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual,
      VoicePanelControlsModes: tmp40,
      VoicePanelModes: tmp18,
      runOnJS: tmp(tmp2[22]).runOnJS,
      dismissKeyboard: tmp(tmp2[56]).dismissKeyboard,
    };
    fn7.__closure = obj19;
    fn7.__workletHash = 6506973979360;
    fn7.__initData = __initData9;
    const animatedReaction2 = tmp(tmp2[22]).useAnimatedReaction(fn6, fn7);
    closure_138_0 = channelId;
    closure_138_1 = transitionState;
    closure_138_2 = transitionCleanUp;
    closure_138_3 = sharedValue;
    closure_138_4 = sharedValue1;
    closure_138_5 = callback7;
    closure_138_6 = first2;
    const tmpResult60 = tmp(tmp2[22]);
    const sharedValue13 = tmp(tmp2[22]).useSharedValue(transitionState);
    closure_138_7 = sharedValue13;
    const items33 = [transitionState, sharedValue13, transitionCleanUp, channelId];
    const layoutEffect14 = obj2.useLayoutEffect(() => {
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
    }, items33);
    const items34 = [channelId];
    const layoutEffect15 = obj2.useLayoutEffect(
      () => () => {
        const state = sharedValue7.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + channelId });
      },
      items34,
    );
    const tmpResult61 = tmp(tmp2[22]);
    class E {
      constructor() {
        items = [, ,];
        items[0] = closure_3.get();
        items[1] = closure_4.get();
        items[2] = closure_7.get();
        return items;
      }
    }
    const obj20 = { connected: sharedValue, mode: sharedValue1, sharedTransitionState: sharedValue13 };
    E.__closure = obj20;
    E.__workletHash = 10141598131153;
    E.__initData = __initData6;
    const fn8 = function p(arg0, arg1) {
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp3)) {
        [tmp6, tmp7, tmp8] = arg0;
        if (tmp8 === native.TransitionStates.YEETED) {
          if (tmp7 !== constants.DISMISSED) {
            ReanimatedRexport.runOnJS(type)(tmp16.DISMISSED);
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
            ReanimatedRexport.runOnJS(type)(PANEL);
            const tmpResult3 = ReanimatedRexport;
          }
          PANEL = PANEL1;
          if (!tmp6) {
            PANEL = constants.PANEL;
          }
        } else {
          let tmp9 = sharedValue;
          if (!sharedValue) {
            tmp9 = tmp6;
          }
          if (!tmp9) {
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
            ReanimatedRexport.runOnJS(type)(constants.PANEL);
            const tmpResult4 = ReanimatedRexport;
          }
        }
        const tmp5 = _slicedToArray(arg0, 3);
      }
      obj = cheapWorkletShallowEqual;
      tmp3 = arg1;
    };
    const obj21 = {
      cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual,
      TransitionStates: tmp(tmp2[53]).TransitionStates,
      VoicePanelModes: tmp18,
      runOnJS: tmp(tmp2[22]).runOnJS,
      setMode: callback7,
      isDockEnabled: first2,
    };
    fn8.__closure = obj21;
    fn8.__workletHash = 3038003117263;
    fn8.__initData = __initData7;
    const animatedReaction3 = tmp(tmp2[22]).useAnimatedReaction(E, fn8);
    const obj22 = {
      mode: sharedValue1,
      controlsSpecs: tmp39Result,
      safeArea: sharedValue3,
      windowDimensions: sharedValue2,
      dockHeight: tmp34.dockHeight,
    };
    const tmp114 = tmp8(tmp2[63])(obj22);
    __initData2 = tmp114;
    const tmpResult62 = tmp(tmp2[22]);
    const obj23 = {
      channelId,
      connected: isConnected,
      focusedId: stateFromStores1,
      layoutManager: first4,
      mode: first5,
      windowDimensions: sharedValue2,
      pipAvoidanceSpecs: tmp114,
      safeArea: sharedValue3,
    };
    const controllerPIPState = tmp(tmp2[64]).useControllerPIPState(obj23);
    closure_139_0 = channelId;
    closure_139_1 = first5;
    closure_139_2 = obj2.useRef(null);
    const items35 = [first5, stateFromStores1, channelId];
    const layoutEffect16 = obj2.useLayoutEffect(() => {
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
    }, items35);
    const layoutEffect17 = obj2.useLayoutEffect(() => {
      first.current = guildId;
    });
    closure_140_0 = channelId;
    closure_140_1 = sharedValue7;
    closure_140_2 = controllerPIPState;
    closure_140_3 = stateFromStores1;
    const items36 = [channelId];
    const callback10 = obj2.useCallback((arg0) => {
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
    }, items36);
    closure_140_4 = callback10;
    const items37 = [stateFromStores1, controllerPIPState, callback10, channelId];
    const effect7 = obj2.useEffect(() => {
      const items = [first4, sharedValue6];
      const batchedStoreListener = new channelId(first[25]).BatchedStoreListener(items, () => {
        first2({ focusedId: first1, pipParticipantId: id.id });
        const obj = { focusedId: first1, pipParticipantId: id.id };
      });
      batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
      return () => batchedStoreListener.detach();
    }, items37);
    const tmpResult63 = tmp(tmp2[64]);
    const fn9 = function f() {
      value = guildId.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      const items = [id, first.id];
      return items;
    };
    const obj24 = { focused: sharedValue7, pipState: controllerPIPState };
    fn9.__closure = obj24;
    fn9.__workletHash = 94735519164;
    fn9.__initData = __initData;
    const fn10 = function h(arg0, arg1) {
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp6, tmp7] = arg0;
        const tmp5 = _slicedToArray(arg0, 2);
        const obj2 = { focusedId: tmp6, pipParticipantId: tmp7 };
        ReanimatedRexport.runOnJS(first2)(obj2);
        const tmp2Result = ReanimatedRexport;
      }
      obj = cheapWorkletShallowEqual;
      tmp = arg1;
    };
    const obj25 = {
      cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual,
      runOnJS: tmp(tmp2[22]).runOnJS,
      handleStateUpdates: callback10,
    };
    fn10.__closure = obj25;
    fn10.__workletHash = 15246095289306;
    fn10.__initData = callback8;
    const animatedReaction4 = tmp(tmp2[22]).useAnimatedReaction(fn9, fn10);
    closure_141_0 = channelId;
    closure_141_1 = sharedValue7;
    closure_141_2 = sharedValue1;
    closure_141_3 = sharedValue;
    const items38 = [channelId];
    const callback11 = obj2.useCallback((arg0) => {
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
    }, items38);
    closure_141_4 = callback11;
    const tmpResult64 = tmp(tmp2[22]);
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
    const obj26 = { focused: sharedValue7, mode: sharedValue1, connected: sharedValue };
    S.__closure = obj26;
    S.__workletHash = 16641161683997;
    S.__initData = setControlsMode;
    const fn11 = function h(arg0, arg1) {
      if (!obj.cheapWorkletArrayShallowEqual(arg0, tmp)) {
        [tmp6, tmp7, tmp8] = arg0;
        const tmp5 = _slicedToArray(arg0, 3);
        const obj2 = { focusedParticipantId: tmp6, voicePanelMode: tmp7, connectedValue: tmp8 };
        ReanimatedRexport.runOnJS(first2)(obj2);
        const tmp2Result = ReanimatedRexport;
      }
      obj = cheapWorkletShallowEqual;
      tmp = arg1;
    };
    const obj27 = {
      cheapWorkletArrayShallowEqual: tmp(tmp2[23]).cheapWorkletArrayShallowEqual,
      runOnJS: tmp(tmp2[22]).runOnJS,
      handleAnimatedReaction: callback11,
    };
    fn11.__closure = obj27;
    fn11.__workletHash = 15290799116693;
    fn11.__initData = first5;
    const animatedReaction5 = tmp(tmp2[22]).useAnimatedReaction(S, fn11);
    closure_142_0 = setControlsMode;
    const items39 = [setControlsMode];
    const callback12 = obj2.useCallback(() => {
      channelId({ mode: constants2.FLOATING_DEFAULT });
    }, items39);
    const obj28 = { onTransition: callback12 };
    tmp8(tmp2[21])(obj28);
    closure_143_0 = callback5;
    closure_143_1 = obj2.useRef(false);
    closure_143_2 = obj2.useRef(0);
    const tmpResult65 = tmp(tmp2[22]);
    const items40 = [tmp3];
    const stateFromStores3 = tmp(tmp2[25]).useStateFromStores(items40, () => sharedValue8.getSpeakingWhileMuted());
    closure_143_3 = stateFromStores3;
    const tmpResult66 = tmp(tmp2[25]);
    const items41 = [tmp3];
    const stateFromStores4 = tmp(tmp2[25]).useStateFromStores(items41, () => sharedValue8.isMute());
    closure_143_4 = stateFromStores4;
    const tmpResult67 = tmp(tmp2[25]);
    const items42 = [sharedValue3];
    const items43 = [tmp(tmp2[25]).useStateFromStores(items42, () => sharedValue3.getRTCConnectionId())];
    const effect8 = obj2.useEffect(() => {
      first.current = performance.now();
      guildId.current = false;
    }, items43);
    const items44 = [stateFromStores4];
    const effect9 = obj2.useEffect(() => {
      if (first2) {
        const _performance = performance;
        first.current = performance.now();
      } else {
        guildId.current = false;
      }
    }, items44);
    const items45 = [stateFromStores3, callback5];
    const effect10 = obj2.useEffect(() => {
      let tmp = first1;
      if (first1) {
        tmp = !guildId.current;
      }
      if (tmp) {
        const _performance = performance;
        if (performance.now() - first.current >= MINUTE) {
          guildId.current = true;
          channelId();
          const obj2 = { text: null, icon: null, duration: null };
          const intl = util.intl;
          obj2.text = intl.string(util.t["29gnR4"]);
          obj2.icon = MicrophoneSlashIcon.MicrophoneSlashIcon;
          obj2.duration = 3 * DurationsDefault.Millis.SECOND;
          ToastActionCreatorsDefault.open("SPEAKING_WHILE_MUTED", obj2);
        }
      }
    }, items45);
    tmp8(tmp2[65])(channelId, sharedValue1, callback7, sharedValue);
    tmp8(tmp2[66])(first2, sharedValue1, callback7);
    tmp8(tmp2[67])();
    closure_144_0 = isConnected;
    closure_144_1 = first5;
    closure_144_2 = stateFromStores1;
    closure_144_3 = stateFromStores2;
    const tmpResult68 = tmp(tmp2[25]);
    const items46 = [tmp83];
    const stateFromStoresObject = tmp(tmp2[25]).useStateFromStoresObject(items46, () => {
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
          UNLOCKED2 = channelId(first[49]).EmbeddedActivityOrientationLockState.UNLOCKED;
        }
        let UNLOCKED = UNLOCKED2;
      } else {
        UNLOCKED = channelId(first[49]).EmbeddedActivityOrientationLockState.UNLOCKED;
      }
      obj2.activityOrientationLockState = UNLOCKED;
      return obj2;
    });
    let applicationId = stateFromStoresObject.applicationId;
    closure_144_4 = applicationId;
    const activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
    closure_144_5 = activityOrientationLockState;
    const instanceId = stateFromStoresObject.instanceId;
    closure_144_6 = instanceId;
    const items47 = [
      applicationId,
      isConnected,
      first5,
      activityOrientationLockState,
      stateFromStores1,
      stateFromStores2,
      instanceId,
    ];
    const layoutEffect18 = obj2.useLayoutEffect(() => {
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
            if (null != first2) {
              const obj = { applicationId: tmp12, instanceId: sharedValue };
              if (first === obj3.getEmbeddedActivityParticipantId(obj)) {
                applyActivityOrientationLockDefault(type);
              }
              obj3 = ChannelRTCParticipants;
            }
            DeviceOrientation.unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
          }
        }
        const result = DeviceOrientation.restoreDefaultOrientation();
      }
    }, items47);
    const layoutEffect19 = obj2.useLayoutEffect(
      () => () => {
        channel = channel.getChannel(voiceChannelId.getVoiceChannelId());
        let isGuildStageVoiceResult;
        if (channel != null) {
          isGuildStageVoiceResult = channel.isGuildStageVoice();
        }
        if (!isGuildStageVoiceResult) {
          const result = channelId(first[50]).restoreDefaultOrientation();
          const obj2 = channelId(first[50]);
        }
      },
      [],
    );
    closure_145_0 = channelId;
    closure_145_1 = isConnected;
    closure_145_2 = first5;
    const items48 = [first5, channelId, isConnected];
    const effect11 = obj2.useEffect(() => {
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
    }, items48);
    closure_146_0 = sharedValue1;
    closure_146_1 = obj2.useRef(-1);
    const tmpResult69 = tmp(tmp2[25]);
    sharedValue14 = tmp(tmp2[22]).useSharedValue(null);
    closure_146_2 = sharedValue14;
    const items49 = [sharedValue1, sharedValue14];
    callback13 = obj2.useCallback((arg0) => {
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
    }, items49);
    const layoutEffect20 = obj2.useLayoutEffect(() => () => clearTimeout(ref.current), []);
    __initData3 = obj2.useRef(undefined);
    const obj29 = {
      value: tmp5(
        obj2.useState(() => ({
          channelId,
          channelType: type,
          committedMode: closure_24.committedMode,
          connected: sharedValue,
          contentDimensions: sharedValue12,
          controlsSpecs,
          dismissPanel,
          dismissToPIPGestureRef,
          dockContentSwap: closure_24.dockContentSwap,
          dockEntryProgress: closure_24.dockEntryProgress,
          dockHeight: closure_24.dockHeight,
          dockJoinMorphOrigin: closure_24.dockJoinMorphOrigin,
          dockMinimizeProgress: closure_24.dockMinimizeProgress,
          dockPressProgress: closure_24.dockPressProgress,
          dockPressed: closure_24.dockPressed,
          dragScrolling: sharedValue6,
          focused: sharedValue7,
          generateStateLocker: callback3,
          guildId,
          handleDockSheetLayout: closure_24.handleDockSheetLayout,
          hideControls: callback4,
          isCall: flag,
          isDockConnected: closure_24.isDockConnected,
          isDockEnabled: first2,
          isDockExpanding: closure_24.isDockExpanding,
          isFocusedVideoZoomed: sharedValue9,
          layoutManager: first4,
          mode: sharedValue1,
          morphablePanelMode: derivedValue,
          mountedCards: first1,
          pipAvoidanceSpecs,
          preJoinContentSize: sharedValue8,
          refreshIdleTimeout: callback6,
          safeArea: sharedValue3,
          scrollPosition: sharedValue5,
          setControlsMode,
          setFocused: callback8,
          setIsFocusedVideoZoomed,
          setMode: callback7,
          setShowFloatingCTA: callback13,
          sheetExitProgress: closure_24.sheetExitProgress,
          showControls: callback5,
          showFloatingCTA: sharedValue14,
          streamOutputSinkStack,
          usePIPState: VoicePanelPIPStateContext.usePIPState,
          useReducedMotion: sharedValue10,
          windowDimensions: sharedValue2,
          wrapperDimensions: sharedValue4,
          wrapperOffset: sharedValue11,
          pipHandoff,
        })),
        1,
      )[0],
      children: null,
    };
    const obj30 = { value: controllerPIPState, children: null };
    let tmp151 = guildId;
    if (guildId == null) {
      tmp151 = null;
    }
    const obj31 = { value: tmp151, children: channelId.children };
    obj30.children = callback6(tmp8(tmp2[70]).Provider, obj31);
    obj29.children = callback6(tmp(tmp2[68]).VoicePanelPIPStateContext.Provider, obj30);
    return callback6(tmp8(tmp2[69]).Provider, obj29);
  }
  tmp41 = CONTROLS_HEIGHT;
  const tmpResult52 = tmp(tmp2[22]);
}
