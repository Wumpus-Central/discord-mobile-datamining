// discord_app/modules/voice_panel/native/VoicePanelController.tsx
import obj132Default from "../../../utils/Durations.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { AppState } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import participantFromServer from "../../activities/EmbeddedActivitiesStore.tsx";
import getParticipants from "../../calls/ChannelRTCStore.tsx";
import closure_9 from "../../panels/morphable/AppFreezeStore.tsx";
import closure_10 from "../../panels/morphable/native/SafeAreaDisabledStore.tsx";
import initialize from "../../video_calls/native/ChannelCallLifecycleStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";
import withEqualityFn from "../VoicePanelStore.tsx";
import VoicePanelModes from "../VoicePanelConstants.tsx";
import VoicePanelControlsModes from "controls/VoicePanelControlsConstants.tsx";
import ME from "../../../Constants.tsx";
import { OrientationLockState } from "../../activities/Constants.tsx";
import { ActivityPanelModes } from "../../activities/panel/ActivityPanelConstants.tsx";
import { isActivityParticipant } from "../../calls/CallConstants.tsx";
import { MorphablePanelModes } from "../../panels/morphable/native/MorphablePanelConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
({ VoicePanelModes: closure_16, getAnalyticsNameForVoicePanelMode: closure_17 } = VoicePanelModes);
({ CONTROLS_HEIGHT: closure_18, CONTROLS_HEIGHT_PTT: closure_19, CONTROLS_HIDE_TIMEOUT: closure_20, VoicePanelControlsModes: closure_21 } = VoicePanelControlsModes);
({ AnalyticEvents: closure_22, ComponentActions: closure_23, InputModes: closure_24 } = ME);
let closure_30 = { code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
let closure_31 = { code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}" };
let closure_32 = 5 * obj132Default.Millis.MINUTE;
let closure_33 = { code: "function VoicePanelControllerTsx3(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}" };
let closure_34 = { code: "function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;runOnJS(handleStateUpdates)({focusedId:focusedId,pipParticipantId:pipParticipantId});}" };
let closure_35 = { code: "function VoicePanelControllerTsx5(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}" };
let closure_36 = { code: "function VoicePanelControllerTsx6(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
let closure_37 = { code: "function VoicePanelControllerTsx7(){const{mode}=this.__closure;return mode.get();}" };
let closure_38 = { code: "function VoicePanelControllerTsx8(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}" };
let closure_39 = { code: "function VoicePanelControllerTsx9(){const{connected}=this.__closure;return connected.get();}" };
let closure_40 = { code: "function VoicePanelControllerTsx10(connected){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}" };
let closure_41 = { code: "function VoicePanelControllerTsx11({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}runOnJS(executeLayoutManagerEffect)();}" };
let closure_42 = { code: "function VoicePanelControllerTsx12(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}" };
let closure_43 = { code: "function VoicePanelControllerTsx13(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}" };
let closure_44 = { code: "function VoicePanelControllerTsx14(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}" };
let closure_45 = { code: "function VoicePanelControllerTsx15(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}" };
let result = require("obj132").fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default function VoicePanelController(channelId) {
  channelId = channelId.channelId;
  let sharedValue1 = channelId;
  const guildId = channelId.guildId;
  importDefault = guildId;
  ({ transitionState, transitionCleanUp } = channelId);
  let applicationId;
  let managerSubscription;
  let ref;
  let callback7;
  let id;
  c13 = undefined;
  let sharedValue5;
  let sharedValue2;
  let sharedValue4;
  let sharedValue10;
  let callback;
  let sharedValue11;
  let sharedValue12;
  let derivedValue;
  let sharedValue9;
  let callback3;
  closure_24 = undefined;
  let callback5;
  let callback4;
  let setControlsMode;
  let first3;
  closure_29 = undefined;
  closure_30 = undefined;
  let callback6;
  let stateFromStores2;
  closure_33 = undefined;
  let sharedValue15;
  let callback11;
  closure_36 = undefined;
  let ref1;
  let tmp2 = sharedValue15;
  let obj = sharedValue1(sharedValue15[26]);
  items = [c13];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.getMode() === constants.PUSH_TO_TALK);
  obj1 = applicationId;
  let first = stateFromStores2(applicationId.useState(() => {
    let tmp = store(sharedValue15[57]);
    tmp = new tmp(_undefined.getMediaEngine());
    return tmp;
  }), 1)[0];
  sharedValue15 = first;
  const items1 = [first];
  const effect = applicationId.useEffect(() => () => closure_2.cleanUp(), items1);
  ({ items, isConnected } = importDefault(sharedValue15[58])(channelId, guildId));
  const first1 = stateFromStores2(applicationId.useState(() => new Set()), 1)[0];
  const items2 = [isConnected, items, first1];
  const effect1 = applicationId.useEffect(() => {
    if (closure_1) {
      closure_0 = sharedValue1(sharedValue15[56]).runAfterInteractions(() => {
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
      sharedValue15.clear();
    }
  }, items2);
  sharedValue1 = channelId;
  importDefault = items;
  sharedValue15 = stateFromStores;
  stateFromStores2 = undefined;
  applicationId = undefined;
  let activityOrientationLockState;
  let instanceId;
  let first5;
  closure_8 = undefined;
  const channel = id.getChannel(channelId);
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
  let tmpResult = tmp(tmp2[22]);
  const sharedValue = tmpResult.useSharedValue(isConnected);
  tmpResult = tmp(tmp2[22]);
  sharedValue1 = tmpResult.useSharedValue(sharedValue4.PANEL);
  stateFromStores2 = sharedValue1;
  let tmp3 = c13;
  let tmp9 = importDefault(sharedValue15[58])(channelId, guildId);
  let size = sharedValue1(tmp2[35]).getWindowDimensions();
  applicationId = size;
  let tmpResult1 = sharedValue1(tmp2[35]);
  obj = { width: size.width, height: size.height, landscape: size.width > size.height };
  sharedValue2 = sharedValue1(tmp2[22]).useSharedValue(obj);
  const tmpResult2 = sharedValue1(tmp2[22]);
  const rect = sharedValue1(tmp2[36]).getSafeAreaInsets();
  activityOrientationLockState = rect;
  const tmpResult3 = sharedValue1(tmp2[36]);
  obj = {};
  let merged = Object.assign(rect);
  const sharedValue3 = sharedValue1(tmp2[22]).useSharedValue(obj);
  const tmpResult4 = sharedValue1(tmp2[22]);
  obj1 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const maxPanelWidth = sharedValue1(tmp2[37]).getMaxPanelWidth(obj1);
  const tmpResult5 = sharedValue1(tmp2[37]);
  let obj2 = { drawerHeight: size.height, drawerWidth: maxPanelWidth, drawerX: null, drawerY: null, pipX: -1, pipY: -1, animated: true, mode: null };
  const tmpResult6 = sharedValue1(tmp2[22]);
  obj2[2] = sharedValue1(tmp2[37]).getPanelX(size.width, maxPanelWidth);
  obj2[3] = size.height;
  obj2[7] = sharedValue4.PANEL;
  sharedValue4 = tmpResult6.useSharedValue(obj2);
  const tmpResult7 = sharedValue1(tmp2[37]);
  sharedValue5 = sharedValue1(tmp2[22]).useSharedValue(0);
  const tmpResult8 = sharedValue1(tmp2[22]);
  const sharedValue6 = sharedValue1(tmp2[22]).useSharedValue(false);
  const tmpResult9 = sharedValue1(tmp2[22]);
  const sharedValue7 = sharedValue1(tmp2[22]).useSharedValue(null);
  const tmpResult10 = sharedValue1(tmp2[22]);
  const sharedValue8 = sharedValue1(tmp2[22]).useSharedValue(0);
  const tmpResult11 = sharedValue1(tmp2[22]);
  sharedValue9 = sharedValue1(tmp2[22]).useSharedValue(false);
  const tmpResult12 = sharedValue1(tmp2[22]);
  sharedValue10 = sharedValue1(tmp2[22]).useSharedValue(false);
  instanceId = sharedValue10;
  let fn = function h(arg0) {
    const result = instanceId.set(arg0);
  };
  fn.__closure = { isFocusedVideoZoomed: sharedValue10 };
  fn.__workletHash = 13885070318174;
  fn.__initData = callback11;
  const items3 = [sharedValue10];
  callback = obj1.useCallback(fn, items3);
  const tmpResult13 = sharedValue1(tmp2[22]);
  sharedValue11 = sharedValue1(tmp2[22]).useSharedValue(instanceId.useReducedMotion);
  first5 = sharedValue11;
  const items4 = [sharedValue11];
  const effect2 = obj1.useEffect(() => {
    function onChange() {
      const result = closure_7.set(instanceId.useReducedMotion);
    }
    let result = instanceId.addReactChangeListener(onChange);
    return () => {
      const result = instanceId.removeReactChangeListener(onChange);
    };
  }, items4);
  const tmpResult14 = sharedValue1(tmp2[22]);
  sharedValue12 = sharedValue1(tmp2[22]).useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const tmpResult15 = sharedValue1(tmp2[22]);
  class H {
    constructor() {
      value = closure_3.get();
      if (closure_16.PANEL === value) {
        tmp5 = closure_28;
        return closure_28.PANEL;
      } else if (tmp2.PIP === value) {
        tmp4 = closure_28;
        return closure_28.PIP;
      } else {
        tmp3 = closure_28;
        return closure_28.UNDEFINED;
      }
    }
  }
  H.__closure = { mode: sharedValue1, VoicePanelModes: sharedValue4, MorphablePanelModes: first3 };
  H.__workletHash = 931249605381;
  H.__initData = closure_36;
  derivedValue = sharedValue1(tmp2[22]).useDerivedValue(H);
  const first2 = tmp5(obj1.useState(() => {
    new store(sharedValue15[38])(sharedValue1);
    const obj = { windowWidth: applicationId.width, windowHeight: applicationId.height, safeAreaLeft: activityOrientationLockState.left, safeAreaRight: activityOrientationLockState.right, safeAreaTop: activityOrientationLockState.top, safeAreaBottom: activityOrientationLockState.bottom, controlBarSize: sharedValue15 ? sharedValue11 : callback };
    obj.updateState(store, obj);
    return obj;
  }), 1)[0];
  const items5 = [first2];
  const layoutEffect = obj1.useLayoutEffect(() => () => closure_8.cleanUp(), items5);
  const tmpResult16 = sharedValue1(tmp2[22]);
  const sharedValue13 = sharedValue1(tmp2[22]).useSharedValue(first2.getContentDimensions());
  callback7 = sharedValue1;
  id = sharedValue8;
  c13 = sharedValue3;
  importDefault = isConnected;
  sharedValue15 = sharedValue;
  stateFromStores2 = stateFromStores;
  applicationId = undefined;
  activityOrientationLockState = undefined;
  instanceId = undefined;
  first5 = undefined;
  closure_8 = undefined;
  managerSubscription = undefined;
  ref = undefined;
  sharedValue1(tmp2[22]);
  let obj4 = { mode: derivedValue.FLOATING_DEFAULT, locked: false, height: null, pushToTalk: null };
  if (stateFromStores) {
    if (isConnected) {
      let tmp37 = sharedValue11;
    }
    obj4[2] = tmp37;
    obj4[3] = stateFromStores;
    const tmp35Result = tmp35(obj4);
    applicationId = tmp35Result;
    activityOrientationLockState = obj1.useRef(-1);
    const callback1 = obj1.useCallback(() => {
      if (-1 !== activityOrientationLockState.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(activityOrientationLockState.current);
        activityOrientationLockState.current = -1;
      }
    }, []);
    instanceId = callback1;
    const items6 = [tmp35Result, callback1, sharedValue1];
    const callback2 = obj1.useCallback(() => {
      instanceId();
      if (-1 === activityOrientationLockState.current) {
        const _setTimeout = setTimeout;
        tmp2.current = setTimeout(() => {
          callback();
          if (closure_0.get() === sharedValue4.PANEL) {
            let obj = closure_4;
            let locked = closure_4.get().mode !== derivedValue.FLOATING_DEFAULT;
            if (!locked) {
              locked = obj.get().locked;
            }
            if (!locked) {
              obj = { mode: null };
              obj[0] = derivedValue.HIDDEN;
              closure_1_1(sharedValue15[39])(obj, obj);
            }
          }
        }, sharedValue12);
      }
    }, items6);
    first5 = callback2;
    const items7 = [tmp35Result, callback2];
    const memo = obj1.useMemo(() => {
      let obj = store(sharedValue15[40]);
      closure_0 = obj.debounce(function _setControlsMode(mode, returnMode) {
        closure_1_1(sharedValue15[39])(closure_4, { mode, returnMode });
        callback2();
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
            FLOATING_DEFAULT = derivedValue.FLOATING_DEFAULT;
          }
          let obj = closure_0;
          if (debounce) {
            obj(mode, FLOATING_DEFAULT);
          } else {
            obj.cancel();
            obj = { mode: null, returnMode: null };
            obj[0] = mode;
            obj[1] = FLOATING_DEFAULT;
            callback(sharedValue15[39])(applicationId, obj);
            first5();
          }
        }
      };
      return obj;
    }, items7);
    const cancelControlsDebounce = memo.cancelControlsDebounce;
    closure_8 = cancelControlsDebounce;
    setControlsMode = memo.setControlsMode;
    managerSubscription = setControlsMode;
    const _Set = Set;
    const set = new Set();
    ref = obj1.useRef(set);
    const items8 = [tmp35Result, callback2, callback1];
    const items9 = [setControlsMode];
    callback3 = obj1.useCallback((arg0) => {
      let v4Result = arg0;
      if (arg0 == null) {
        let obj = sharedValue1(sharedValue15[41]);
        v4Result = obj.v4();
      }
      sharedValue1 = v4Result;
      obj = {
        lock(mode) {
          const current = ref.current;
          if (!current.has(closure_0)) {
            instanceId();
            const current2 = ref.current;
            current2.add(closure_0);
            const obj = { locked: null };
            obj[0] = ref.current.size > 0;
            if (null != mode) {
              obj.mode = mode;
            }
            callback(sharedValue15[39])(applicationId, obj);
          }
        },
        unlock(mode) {
          const current = ref.current;
          if (current.has(closure_0)) {
            const current2 = ref.current;
            current2.delete(closure_0);
            const obj = { locked: null };
            obj[0] = ref.current.size > 0;
            if (null != mode) {
              obj.mode = mode;
            }
            callback(sharedValue15[39])(applicationId, obj);
            first5();
          }
        }
      };
      return obj;
    }, items8);
    const items10 = [setControlsMode, tmp35Result];
    callback4 = obj1.useCallback(() => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { debounce: false };
      }
      obj = { mode: derivedValue.HIDDEN, debounce: obj.debounce };
      managerSubscription(obj);
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
      let mode = applicationId.get().returnMode;
      if (mode == null) {
        mode = derivedValue.FLOATING_DEFAULT;
      }
      return managerSubscription({ mode, debounce });
    }, items10);
    const fn2 = function u() {
      return sharedValue1.get();
    };
    let obj5 = { mode: null };
    obj5[0] = sharedValue1;
    fn2.__closure = obj5;
    fn2.__workletHash = 12140218650562;
    fn2.__initData = ref1;
    const fn3 = function l(arg0) {
      if (arg0 === sharedValue4.PANEL) {
        sharedValue1(sharedValue15[22]).runOnJS(first5)();
        const obj2 = sharedValue1(sharedValue15[22]);
      } else {
        sharedValue1(sharedValue15[22]).runOnJS(instanceId)();
        const obj = sharedValue1(sharedValue15[22]);
      }
    };
    let obj6 = { VoicePanelModes: null, runOnJS: null, _queueHideControls: null, _clearHideControlsQueue: null };
    obj6[0] = tmp14;
    obj6[1] = tmp(tmp2[22]).runOnJS;
    obj6[2] = callback2;
    obj6[3] = callback1;
    fn3.__closure = obj6;
    fn3.__workletHash = 7742206515980;
    fn3.__initData = closure_38;
    const animatedReaction = tmp(tmp2[22]).useAnimatedReaction(fn2, fn3);
    const items11 = [stateFromStores, tmp35Result, isConnected];
    const layoutEffect1 = obj1.useLayoutEffect(() => {
      if (stateFromStores2) {
        if (closure_1) {
          let tmp5 = sharedValue11;
        }
        const obj = { height: null, pushToTalk: null };
        obj[0] = tmp5;
        obj[1] = tmp3;
        tmp(tmp2, obj);
      }
      tmp5 = callback;
    }, items11);
    const tmpResult19 = tmp(tmp2[22]);
    class S {
      constructor() {
        return closure_2.get();
      }
    }
    const obj7 = { connected: null };
    obj7[0] = sharedValue;
    S.__closure = obj7;
    S.__workletHash = 16653595323628;
    S.__initData = closure_39;
    const fn4 = function h(arg0) {
      if (stateFromStores2) {
        if (arg0) {
          let tmp5 = sharedValue11;
        }
        const obj = { height: null, pushToTalk: null };
        obj[0] = tmp5;
        obj[1] = tmp3;
        tmp(tmp2, obj);
      }
      tmp5 = callback;
    };
    const obj8 = { updateSharedValueIfChanged: null, controlsSpecs: null, pushToTalk: null, CONTROLS_HEIGHT_PTT: null, CONTROLS_HEIGHT: null };
    obj8[0] = tmp8(tmp2[39]);
    obj8[1] = tmp35Result;
    obj8[2] = stateFromStores;
    obj8[3] = sharedValue11;
    let tmp56 = callback;
    obj8[4] = callback;
    fn4.__closure = obj8;
    fn4.__workletHash = 2154816141018;
    fn4.__initData = closure_40;
    const animatedReaction1 = tmp(tmp2[22]).useAnimatedReaction(S, fn4);
    const items12 = [cancelControlsDebounce, callback1];
    const layoutEffect2 = obj1.useLayoutEffect(() => () => {
      callback2();
      callback();
    }, items12);
    const items13 = [setControlsMode];
    const effect3 = obj1.useEffect(() => {
      function closeTiV() {
        callback({ mode: derivedValue.FLOATING_DEFAULT });
      }
      let ComponentDispatch = sharedValue1(sharedValue15[42]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(callback3.VOICE_PANEL_TIV_CLOSE, closeTiV);
      return () => {
        const ComponentDispatch = sharedValue1(sharedValue15[42]).ComponentDispatch;
        ComponentDispatch.unsubscribe(callback3.VOICE_PANEL_TIV_CLOSE, closeTiV);
      };
    }, items13);
    closure_24 = tmp35Result;
    sharedValue1 = channelId;
    let tmp5Result = tmp5(obj1.useState(() => {
      const voicePanelsPIP = sharedValue2.getState().voicePanelsPIP;
      return voicePanelsPIP.has(sharedValue1) ? sharedValue4.PIP : sharedValue4.PANEL;
    }), 2);
    first3 = tmp5Result[0];
    closure_8 = tmp63;
    const layoutEffect3 = obj1.useLayoutEffect(() => {
      const result = sharedValue15.set(first5);
      if (applicationId !== sharedValue1(sharedValue15[51]).TransitionStates.YEETED) {
        const result1 = stateFromStores2.set(closure_1);
      }
    });
    const items14 = [channelId, sharedValue, sharedValue1, tmp35Result, setControlsMode];
    closure_29 = tmp63;
    closure_30 = obj1.useCallback(() => {
      if (activityOrientationLockState.get().mode === derivedValue.DRAWER) {
        const obj = { mode: null };
        obj[0] = tmp.FLOATING_DEFAULT;
        instanceId(obj);
        let flag = true;
      } else if (stateFromStores2.get()) {
        let flag2 = sharedValue15.get() === sharedValue4.PANEL;
        if (flag2) {
          store2(tmp7.PIP);
          flag2 = true;
        }
        flag = flag2;
      } else {
        const state = sharedValue2.getState();
        state.closeChannel(sharedValue1);
        flag = true;
      }
      return flag;
    }, items14);
    sharedValue1 = guildId;
    importDefault = channelId;
    sharedValue15 = sharedValue7;
    const tmp55 = sharedValue11;
    const tmpResult20 = tmp(tmp2[22]);
    const items15 = [closure_8];
    const stateFromStores1 = tmp(tmp2[26]).useStateFromStores(items15, () => store2.getSelectedParticipantId(closure_1));
    stateFromStores2 = stateFromStores1;
    const items16 = [guildId, channelId];
    callback6 = obj1.useCallback((id2) => {
      let result = null == id2;
      if (!result) {
        result = sharedValue1(sharedValue15[52]).isVoicePanelParticipantFocusable(sharedValue1, store, id2);
        const obj = sharedValue1(sharedValue15[52]);
      }
      if (result) {
        const participant = store(sharedValue15[53]).selectParticipant(store, id2);
        const obj2 = store(sharedValue15[53]);
      }
    }, items16);
    applicationId = callback6;
    activityOrientationLockState = obj1.useRef(undefined);
    const targetDimensions = first2.getTargetDimensions(stateFromStores1);
    instanceId = targetDimensions;
    const items17 = [sharedValue7, stateFromStores1, targetDimensions];
    const layoutEffect4 = obj1.useLayoutEffect(() => {
      let tmp2 = null;
      if (null != stateFromStores2) {
        const obj = { id: null };
        obj[0] = tmp;
        const merged = Object.assign(instanceId);
        tmp2 = obj;
      }
      const current = activityOrientationLockState.current;
      if (!obj2.cheapWorkletShallowEqual(tmp6, current)) {
        activityOrientationLockState.current = tmp2;
        const result = sharedValue15.set(tmp2);
      }
      obj2 = sharedValue1(sharedValue15[23]);
      tmp6 = tmp2;
    }, items17);
    const tmp71 = tmp8(tmp2[52])(guildId, channelId, stateFromStores1);
    first5 = tmp71;
    const items18 = [stateFromStores1, tmp71, callback6];
    const effect4 = obj1.useEffect(() => {
      if (null != stateFromStores2) {
        if (!first5) {
          applicationId(null);
        }
      }
    }, items18);
    const items19 = [];
    class H {
      constructor() {
        value = closure_3.get();
        if (closure_16.PANEL === value) {
          tmp5 = closure_28;
          return closure_28.PANEL;
        } else if (tmp2.PIP === value) {
          tmp4 = closure_28;
          return closure_28.PIP;
        } else {
          tmp3 = closure_28;
          return closure_28.UNDEFINED;
        }
      }
    }
    const effect5 = obj1.useEffect(() => () => callback(null), items19);
    const tmpResult21 = tmp(tmp2[26]);
    const items20 = [first5];
    tmp(tmp2[26]).useStateFromStores(items20, () => {
      const connectedActivityLocation = first5.getConnectedActivityLocation();
      const embeddedActivityLocationChannelId = sharedValue1(sharedValue15[59]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      let tmp4 = null != connectedActivityLocation;
      const activityPanelMode = first5.getActivityPanelMode();
      if (tmp4) {
        tmp4 = embeddedActivityLocationChannelId !== sharedValue1;
      }
      if (tmp4) {
        tmp4 = activityPanelMode === callback4.PANEL;
      }
      return tmp4;
    });
    applicationId = first2;
    first5 = undefined;
    c13 = undefined;
    tmp5Result = tmp5(obj1.useState(() => {
      let obj = sharedValue1(sharedValue15[35]);
      const windowDimensions = obj.getWindowDimensions();
      ({ width, height } = windowDimensions);
      obj = { width, height, landscape: width > height };
      return obj;
    }), 2);
    const first4 = tmp5Result[0];
    activityOrientationLockState = first4;
    instanceId = tmp78;
    const tmp74 = first5;
    const tmpResult22 = tmp(tmp2[26]);
    const tmp5Result1 = tmp5(obj1.useState(tmp(tmp2[36]).getSafeAreaInsets()), 2);
    first5 = tmp5Result1[0];
    closure_8 = tmp81;
    const tmpResult23 = tmp(tmp2[36]);
    managerSubscription = tmp(tmp2[38]).useManagerSubscription(first2);
    const obj9 = { timeout: -1, layoutKey: null, connected: null, windowState: null, safeAreaState: null, contentDimensions: null };
    obj9[1] = managerSubscription;
    obj9[2] = isConnected;
    obj9[3] = first4;
    obj9[4] = first5;
    obj9[5] = { width: 0, height: 0 };
    ref = obj1.useRef(obj9);
    sharedValue1 = isConnected;
    importDefault = ref;
    sharedValue15 = tmp78;
    stateFromStores2 = tmp81;
    const items21 = [ref, isConnected, tmp5Result[1], tmp5Result1[1]];
    const layoutEffect5 = obj1.useLayoutEffect(() => {
      if (store.current.connected !== sharedValue1) {
        store.current.connected = tmp;
        sharedValue15((safeAreaState) => {
          let windowState = safeAreaState;
          const windowDimensions = sharedValue1(sharedValue15[35]).getWindowDimensions();
          ({ width, height } = windowDimensions);
          closure_1.current.windowState = { width, height, landscape: width > height };
          const obj = sharedValue1(sharedValue15[35]);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, closure_1.current.windowState)) {
            windowState = closure_1.current.windowState;
          }
          return windowState;
        });
        stateFromStores2((safeAreaState) => {
          closure_1.current.safeAreaState = sharedValue1(sharedValue15[36]).getSafeAreaInsets();
          const obj = sharedValue1(sharedValue15[36]);
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, closure_1.current.safeAreaState)) {
            safeAreaState = closure_1.current.safeAreaState;
          }
          return safeAreaState;
        });
      }
    }, items21);
    callback7 = obj1.useCallback(() => {
      clearTimeout(ref.current.timeout);
      ref.current.timeout = setTimeout(() => {
        clearTimeout(ref.current.timeout);
        sharedValue1(sharedValue15[43]).batchUpdates(() => {
          callback((current) => {
            let windowState = current;
            if (!obj.cheapWorkletShallowEqual(ref.current.windowState, current)) {
              windowState = ref.current.windowState;
            }
            return windowState;
          });
          callback2((current) => {
            let safeAreaState = current;
            if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
              safeAreaState = ref.current.safeAreaState;
            }
            return safeAreaState;
          });
        });
      }, 60);
    }, []);
    const items22 = [callback7];
    const layoutEffect6 = obj1.useLayoutEffect(() => {
      closure_0 = store(sharedValue15[44])(function updateSafeAreas(current) {
        let obj = callback(sharedValue15[23]);
        if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
          obj = {};
          const merged = Object.assign(current);
          ref.current.safeAreaState = obj;
          callback3();
        }
      });
      let obj = sharedValue1(sharedValue15[36]);
      const safeAreaInsets = obj.getSafeAreaInsets();
      if (!obj2.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaInsets)) {
        obj = {};
        let merged = Object.assign(safeAreaInsets);
        ref.current.safeAreaState = obj;
        callback7();
      }
      function updateWindowDimensions() {
        let windowDimensions = arg0;
        if (arg0 === undefined) {
          let obj = callback(sharedValue15[35]);
          windowDimensions = obj.getWindowDimensions();
        }
        ({ width, height } = windowDimensions);
        obj = { width, height, landscape: width > height };
        if (!obj3.cheapWorkletShallowEqual(ref.current.windowState, obj)) {
          ref.current.windowState = obj;
          callback3();
        }
        obj3 = callback(sharedValue15[23]);
      }
      store = store(sharedValue15[45])(updateWindowDimensions);
      let tmp3Result = sharedValue1(sharedValue15[35]);
      let windowDimensions = tmp3Result.getWindowDimensions();
      ({ width, height } = windowDimensions);
      obj = { width, height, landscape: width > height };
      tmp3Result = sharedValue1(sharedValue15[23]);
      if (!tmp3Result.cheapWorkletShallowEqual(ref.current.windowState, obj)) {
        ref.current.windowState = obj;
        callback7();
      }
      return () => {
        callback();
        callback2();
      };
    }, items22);
    id = obj1.useId();
    const items23 = [isConnected, id];
    const layoutEffect7 = obj1.useLayoutEffect(() => {
      if (stateFromStores2) {
        let state = ref.getState();
        const obj = { key: null, lockEnabled: true };
        obj[0] = id;
        let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        return () => {
          const state = ref.getState();
          const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: closure_12, lockEnabled: false });
        };
      }
    }, items23);
    const obj10 = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null, safeAreaTop: null, safeAreaBottom: null, controlBarSize: null };
    ({ width: obj41[0], height: obj41[1] } = first4);
    ({ left: obj41[2], right: obj41[3], top: obj41[4], bottom: obj41[5] } = first5);
    if (stateFromStores) {
      tmp56 = tmp55;
    }
    obj10[6] = tmp56;
    const updateStateResult = first2.updateState(items, obj10);
    c13 = updateStateResult;
    const items24 = [sharedValue13, updateStateResult, managerSubscription, first2, sharedValue3, first5, sharedValue2, first4, isConnected];
    const layoutEffect8 = obj1.useLayoutEffect(() => {
      function executeLayoutManagerEffect() {
        return closure_4.handleLayoutEffect();
      }
      ref.current.layoutKey = managerSubscription;
      sharedValue1(sharedValue15[22]);
      const fn = function t(arg0) {
        ({ windowState, safeAreaState, contentState } = arg0);
        let tmp = stateFromStores2;
        if (stateFromStores2) {
          tmp = !sharedValue1(sharedValue15[23]).cheapWorkletShallowEqual(closure_1_2.get(), contentState);
          const obj = sharedValue1(sharedValue15[23]);
        }
        if (tmp) {
          const result = closure_1_2.set(contentState);
        }
        if (!obj2.cheapWorkletShallowEqual(executeLayoutManagerEffect.get(), windowState)) {
          const result1 = executeLayoutManagerEffect.set(windowState);
        }
        obj2 = sharedValue1(sharedValue15[23]);
        if (!obj4.cheapWorkletShallowEqual(closure_1_1.get(), safeAreaState)) {
          const result2 = closure_1_1.set(safeAreaState);
        }
        obj4 = sharedValue1(sharedValue15[23]);
        sharedValue1(sharedValue15[22]).runOnJS(executeLayoutManagerEffect)();
        const obj6 = sharedValue1(sharedValue15[22]);
      };
      let obj = { isConnected: stateFromStores2, cheapWorkletShallowEqual: sharedValue1(sharedValue15[23]).cheapWorkletShallowEqual, contentDimensions: sharedValue15, windowDimensions: executeLayoutManagerEffect, safeArea: closure_1, runOnJS: sharedValue1(sharedValue15[22]).runOnJS, executeLayoutManagerEffect };
      fn.__closure = obj;
      fn.__workletHash = 13791383688018;
      fn.__initData = closure_1_41;
      obj = { windowState: activityOrientationLockState, safeAreaState: first5, contentState: c13 };
      obj.runOnUI(fn)(obj);
    }, items24);
    const items25 = [first2];
    const effect6 = obj1.useEffect(() => {
      function checkDimensions() {
        if (!c3) {
          const size = sharedValue1(sharedValue15[35]).getWindowDimensions();
          const width = size.width;
          const height = size.height;
          let timeout = height;
          const result = checkDimensions.checkDimensionsMismatch(width, height);
          closure_2 = result;
          if (null != result) {
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              let obj = sharedValue1(sharedValue15[35]);
              const windowDimensions = obj.getWindowDimensions();
              ({ width, height } = windowDimensions);
              let tmp4 = width === width;
              if (tmp4) {
                tmp4 = c1 === height;
              }
              if (tmp4) {
                if (null != checkDimensions.checkDimensionsMismatch(width, height)) {
                  c3 = true;
                  obj = { layout_width: null, layout_height: null, window_width: null, window_height: null, was_dirty: null };
                  ({ staleWidth: obj3[0], staleHeight: obj3[1] } = wasDirty);
                  obj[2] = width;
                  obj[3] = c1;
                  obj[4] = wasDirty.wasDirty;
                  _null(sharedValue15[47]).track(sharedValue9.VOICE_PANEL_LAYOUT_DESYNC, obj);
                  c1 = null;
                  const obj2 = _null(sharedValue15[47]);
                }
              }
            }, 250);
          }
          let obj = sharedValue1(sharedValue15[35]);
        }
      }
      if (!sharedValue1(sharedValue15[46]).isStable) {
        let _setInterval = setInterval;
        let interval = setInterval(checkDimensions, 1000);
        c1 = null;
        closure_2 = activityOrientationLockState.addEventListener("change", (event) => {
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
          clearInterval(closure_0);
          clearTimeout(c1);
          closure_2.remove();
        };
      }
    }, items25);
    const layoutEffect9 = obj1.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
    const items26 = [first3, stateFromStores2];
    const layoutEffect10 = obj1.useLayoutEffect(() => {
      if (tmp) {
        const result = sharedValue1(sharedValue15[33]).updateActivityPanelMode(callback4.PIP);
        const obj = sharedValue1(sharedValue15[33]);
      }
      tmp = first3 === sharedValue4.PANEL && stateFromStores2;
    }, items26);
    const tmpResult24 = tmp(tmp2[38]);
    const fn5 = function c() {
      const items = [sharedValue1.get(), store.get().mode];
      return items;
    };
    const obj11 = { mode: null, controlsSpecs: null };
    obj11[0] = sharedValue1;
    obj11[1] = tmp35Result;
    fn5.__closure = obj11;
    fn5.__workletHash = 10791754460802;
    fn5.__initData = closure_44;
    const fn6 = function s(closure_3) {
      if (!obj.cheapWorkletArrayShallowEqual(closure_3, tmp3)) {
        let tmp8 = stateFromStores2(closure_3, 2)[1] === derivedValue.DRAWER;
        if (tmp8) {
          tmp8 = tmp6 === sharedValue4.PANEL;
        }
        if (tmp8) {
          let first;
          if (arg1 != null) {
            first = arg1[0];
          }
          tmp8 = first === sharedValue4.PANEL;
        }
        if (!tmp8) {
          sharedValue1(sharedValue15[22]).runOnJS(sharedValue1(sharedValue15[55]).dismissKeyboard)();
          const tmpResult = sharedValue1(sharedValue15[22]);
        }
        const tmp5 = stateFromStores2(closure_3, 2);
      }
      obj = sharedValue1(sharedValue15[23]);
      tmp3 = arg1;
    };
    const obj12 = { cheapWorkletArrayShallowEqual: null, VoicePanelControlsModes: null, VoicePanelModes: null, runOnJS: null, dismissKeyboard: null };
    obj12[0] = tmp(tmp2[23]).cheapWorkletArrayShallowEqual;
    obj12[1] = tmp36;
    obj12[2] = tmp14;
    obj12[3] = tmp(tmp2[22]).runOnJS;
    obj12[4] = tmp(tmp2[55]).dismissKeyboard;
    fn6.__closure = obj12;
    fn6.__workletHash = 16494740341507;
    fn6.__initData = closure_45;
    const animatedReaction2 = tmp(tmp2[22]).useAnimatedReaction(fn5, fn6);
    sharedValue1 = channelId;
    activityOrientationLockState = tmp63;
    const tmpResult25 = tmp(tmp2[22]);
    const sharedValue14 = tmp(tmp2[22]).useSharedValue(transitionState);
    instanceId = sharedValue14;
    const items27 = [transitionState, sharedValue14, transitionCleanUp, channelId];
    const layoutEffect11 = obj1.useLayoutEffect(() => {
      const result = instanceId.set(closure_1);
      if (closure_1 === sharedValue1(sharedValue15[51]).TransitionStates.YEETED) {
        const state = managerSubscription.getState();
        const obj = { lockEnabled: false, key: null };
        const _HermesInternal = HermesInternal;
        obj[1] = "voice-panel-freeze-" + timeout;
        const freezeLock = state.requestFreezeLock(obj);
        const _setTimeout = setTimeout;
        timeout = setTimeout(sharedValue15, 500);
        return () => clearTimeout(closure_0);
      }
    }, items27);
    const items28 = [channelId];
    const layoutEffect12 = obj1.useLayoutEffect(() => () => {
      const state = managerSubscription.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + closure_0 });
    }, items28);
    const tmpResult26 = tmp(tmp2[22]);
    const fn7 = function p() {
      const items = [stateFromStores2.get(), applicationId.get(), instanceId.get()];
      return items;
    };
    const obj13 = { connected: null, mode: null, sharedTransitionState: null };
    obj13[0] = sharedValue;
    obj13[1] = sharedValue1;
    obj13[2] = sharedValue14;
    fn7.__closure = obj13;
    fn7.__workletHash = 7656858903152;
    fn7.__initData = closure_42;
    const fn8 = function f(closure_3) {
      if (!obj.cheapWorkletArrayShallowEqual(closure_3, tmp3)) {
        [tmp6, tmp7, tmp8] = stateFromStores2(closure_3, 3);
        if (tmp8 === sharedValue1(sharedValue15[51]).TransitionStates.YEETED) {
          if (tmp7 !== sharedValue4.DISMISSED) {
            let tmpResult = sharedValue1(sharedValue15[22]);
            tmpResult.runOnJS(activityOrientationLockState)(tmp16.DISMISSED);
          }
        } else if (tmp7 === sharedValue4.DISMISSED) {
          let PANEL;
          if (arg1 != null) {
            PANEL = arg1[1];
          }
          if (PANEL == null) {
            PANEL = sharedValue4.PANEL;
          }
          if (sharedValue4.PANEL !== PANEL) {
            if (sharedValue4.PIP !== PANEL) {
              PANEL = sharedValue4.PANEL;
            }
            tmpResult = sharedValue1(sharedValue15[22]);
            tmpResult.runOnJS(activityOrientationLockState)(PANEL);
          }
          if (!tmp6) {
            PANEL = sharedValue4.PANEL;
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
            tmp9 = tmp7 !== sharedValue4.PIP;
          }
          if (!tmp9) {
            sharedValue1(sharedValue15[22]).runOnJS(activityOrientationLockState)(sharedValue4.PANEL);
            const tmpResult1 = sharedValue1(sharedValue15[22]);
          }
        }
        const tmp5 = stateFromStores2(closure_3, 3);
      }
      obj = sharedValue1(sharedValue15[23]);
      tmp3 = arg1;
    };
    const obj14 = { cheapWorkletArrayShallowEqual: null, TransitionStates: null, VoicePanelModes: null, runOnJS: null, setMode: null };
    obj14[0] = tmp(tmp2[23]).cheapWorkletArrayShallowEqual;
    obj14[1] = tmp(tmp2[51]).TransitionStates;
    obj14[2] = tmp14;
    obj14[3] = tmp(tmp2[22]).runOnJS;
    obj14[4] = tmp5Result[1];
    fn8.__closure = obj14;
    fn8.__workletHash = 5740547237317;
    fn8.__initData = closure_43;
    const animatedReaction3 = tmp(tmp2[22]).useAnimatedReaction(fn7, fn8);
    const tmpResult27 = tmp(tmp2[22]);
    const obj15 = { channelId: null, connected: null, focusedId: null, layoutManager: null, mode: null };
    obj15[0] = channelId;
    obj15[1] = isConnected;
    obj15[2] = stateFromStores1;
    obj15[3] = first2;
    obj15[4] = first3;
    const controllerPIPState = tmp(tmp2[60]).useControllerPIPState(obj15);
    const obj16 = { mode: null, controlsSpecs: null, safeArea: null, windowDimensions: null };
    obj16[0] = sharedValue1;
    obj16[1] = tmp35Result;
    obj16[2] = sharedValue3;
    obj16[3] = sharedValue2;
    closure_33 = tmp8(tmp2[61])(obj16);
    obj1.useRef(null);
    const items29 = [first3, stateFromStores1, channelId];
    const layoutEffect13 = obj1.useLayoutEffect(() => {
      const rTCConnection = sharedValue5.getRTCConnection();
      let tmp = null != rTCConnection;
      if (tmp) {
        tmp = sharedValue5.getChannelId() === sharedValue1;
      }
      if (tmp) {
        if (sharedValue15.current !== sharedValue4.PIP) {
          if (closure_1 === sharedValue4.PIP) {
            rTCConnection.setPipOpen(true);
          }
        }
        let tmp7 = sharedValue15.current === sharedValue4.PIP;
        if (tmp7) {
          tmp7 = closure_1 !== sharedValue4.PIP;
        }
        if (tmp7) {
          rTCConnection.setPipOpen(false);
        }
      }
    }, items29);
    const layoutEffect14 = obj1.useLayoutEffect(() => {
      sharedValue15.current = closure_1;
    });
    sharedValue15 = controllerPIPState;
    const items30 = [channelId];
    const callback8 = obj1.useCallback((arg0) => {
      ({ focusedId, pipParticipantId } = arg0);
      const result = callback7.shouldReactToSeriousThermalStateWhenActivityFocused();
      let tmp3 = null != focusedId;
      const result1 = callback7.consumedRequestToRespondToSeriousThermalState();
      if (tmp3) {
        tmp3 = setControlsMode(store2.getParticipant(sharedValue1, focusedId));
      }
      let participant;
      if (null != pipParticipantId) {
        participant = store2.getParticipant(sharedValue1, pipParticipantId);
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
            const isVideoEnabledResult = _undefined.isVideoEnabled();
            let tmp15 = isVideoEnabledResult;
            if (!isVideoEnabledResult) {
              tmp15 = tmp11;
            }
            if (tmp15) {
              store(sharedValue15[27]);
              const obj = { key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", icon: null, content: null, disableAnimations: true, toastDurationMs: 3000 };
              obj[1] = store(sharedValue15[30]);
              const intl = sharedValue1(sharedValue15[29]).intl;
              obj[2] = intl.string(sharedValue1(sharedValue15[29]).t.O2IlPT);
              obj.open(obj);
              const result2 = sharedValue1(sharedValue15[31]).trackActivityThermalStateNoticeShown();
              const obj3 = sharedValue1(sharedValue15[31]);
            }
            if (isVideoEnabledResult) {
              store(sharedValue15[32]).setVideoEnabled(false);
              const obj4 = store(sharedValue15[32]);
            }
            const result3 = sharedValue1(sharedValue15[33]).consumeRequestToReactToSeriousThermalState();
            const obj5 = sharedValue1(sharedValue15[33]);
          }
        }
      }
    }, items30);
    const items31 = [stateFromStores1, controllerPIPState, callback8, channelId];
    const effect7 = obj1.useEffect(() => {
      const items = [callback7, closure_8];
      const batchedStoreListener = new sharedValue1(sharedValue15[26]).BatchedStoreListener(items, () => {
        callback({ focusedId: closure_3, pipParticipantId: id.id });
      });
      batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
      return () => batchedStoreListener.detach();
    }, items31);
    const tmpResult28 = tmp(tmp2[60]);
    const fn9 = function f() {
      const value = store.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      const items = [id, sharedValue15.id];
      return items;
    };
    const obj17 = { focused: null, pipState: null };
    obj17[0] = sharedValue7;
    obj17[1] = controllerPIPState;
    fn9.__closure = obj17;
    fn9.__workletHash = 94735519164;
    fn9.__initData = closure_33;
    const fn10 = function h(closure_3) {
      let obj = sharedValue1(sharedValue15[23]);
      if (!obj.cheapWorkletArrayShallowEqual(closure_3, tmp)) {
        [tmp6, tmp7] = stateFromStores2(closure_3, 2);
        const tmp5 = stateFromStores2(closure_3, 2);
        obj = { focusedId: null, pipParticipantId: null };
        obj[0] = tmp6;
        obj[1] = tmp7;
        sharedValue1(sharedValue15[22]).runOnJS(applicationId)(obj);
        const tmp2Result = sharedValue1(sharedValue15[22]);
      }
      tmp = arg1;
    };
    const obj18 = { cheapWorkletArrayShallowEqual: null, runOnJS: null, handleStateUpdates: null };
    obj18[0] = tmp(tmp2[23]).cheapWorkletArrayShallowEqual;
    obj18[1] = tmp(tmp2[22]).runOnJS;
    obj18[2] = callback8;
    fn10.__closure = obj18;
    fn10.__workletHash = 15246095289306;
    fn10.__initData = sharedValue15;
    const animatedReaction4 = tmp(tmp2[22]).useAnimatedReaction(fn9, fn10);
    sharedValue1 = channelId;
    importDefault = sharedValue7;
    sharedValue15 = sharedValue1;
    stateFromStores2 = sharedValue;
    const items32 = [channelId];
    const callback9 = obj1.useCallback((arg0) => {
      ({ focusedParticipantId, connectedValue } = arg0);
      if (connectedValue) {
        connectedValue = tmp === sharedValue4.PANEL;
      }
      let tmp3 = null != focusedParticipantId;
      if (tmp3) {
        tmp3 = setControlsMode(store2.getParticipant(sharedValue1, focusedParticipantId));
      }
      if (tmp3) {
        tmp3 = connectedValue;
      }
      const state = sharedValue2.getState();
      state.setIsActivityFocused(tmp3);
    }, items32);
    applicationId = callback9;
    const tmpResult29 = tmp(tmp2[22]);
    class S {
      constructor() {
        value = closure_1.get();
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
    const obj19 = { focused: null, mode: null, connected: null };
    obj19[0] = sharedValue7;
    obj19[1] = sharedValue1;
    obj19[2] = sharedValue;
    S.__closure = obj19;
    S.__workletHash = 16641161683997;
    S.__initData = closure_30;
    const fn11 = function h(closure_3) {
      let obj = sharedValue1(sharedValue15[23]);
      if (!obj.cheapWorkletArrayShallowEqual(closure_3, tmp)) {
        [tmp6, tmp7, tmp8] = stateFromStores2(closure_3, 3);
        const tmp5 = stateFromStores2(closure_3, 3);
        obj = { focusedParticipantId: null, voicePanelMode: null, connectedValue: null };
        obj[0] = tmp6;
        obj[1] = tmp7;
        obj[2] = tmp8;
        sharedValue1(sharedValue15[22]).runOnJS(applicationId)(obj);
        const tmp2Result = sharedValue1(sharedValue15[22]);
      }
      tmp = arg1;
    };
    const obj20 = { cheapWorkletArrayShallowEqual: null, runOnJS: null, handleAnimatedReaction: null };
    obj20[0] = tmp(tmp2[23]).cheapWorkletArrayShallowEqual;
    obj20[1] = tmp(tmp2[22]).runOnJS;
    obj20[2] = callback9;
    fn11.__closure = obj20;
    fn11.__workletHash = 15290799116693;
    fn11.__initData = callback6;
    const animatedReaction5 = tmp(tmp2[22]).useAnimatedReaction(S, fn11);
    const items33 = [setControlsMode];
    const callback10 = obj1.useCallback(() => {
      sharedValue1({ mode: derivedValue.FLOATING_DEFAULT });
    }, items33);
    const obj21 = { onTransition: null };
    obj21[0] = callback10;
    tmp8(tmp2[21])(obj21);
    sharedValue1 = callback5;
    let tmp8Result = tmp8(tmp2[25]);
    const enableMuteWarning = tmp8Result.useConfig({ location: "VoicePanelController" }).enableMuteWarning;
    obj1.useRef(0);
    const tmpResult30 = tmp(tmp2[22]);
    const items34 = [tmp3];
    const stateFromStores3 = tmp(tmp2[26]).useStateFromStores(items34, () => _undefined.getSpeakingWhileMuted());
    stateFromStores2 = stateFromStores3;
    const items35 = [stateFromStores3, enableMuteWarning, callback5];
    const effect8 = obj1.useEffect(() => {
      let tmp = stateFromStores2;
      if (stateFromStores2) {
        tmp = store;
      }
      if (tmp) {
        const _performance = performance;
        if (performance.now() - sharedValue15.current >= stateFromStores2) {
          const _performance2 = performance;
          tmp3.current = performance.now();
          sharedValue1();
          store(sharedValue15[27]);
          const obj = { key: "SPEAKING_WHILE_MUTED", icon: null, content: null, toastDurationMs: 3000 };
          obj[1] = store(sharedValue15[28]);
          const intl = sharedValue1(sharedValue15[29]).intl;
          obj[2] = intl.string(sharedValue1(sharedValue15[29]).t["29gnR4"]);
          obj.open(obj);
        }
      }
    }, items35);
    tmp8(tmp2[62])(channelId, sharedValue1, tmp5Result[1], sharedValue);
    tmp8(tmp2[63])();
    const tmpResult31 = tmp(tmp2[26]);
    const items36 = [tmp74];
    const stateFromStoresObject = tmp(tmp2[26]).useStateFromStoresObject(items36, () => {
      let obj = first5;
      const currentEmbeddedActivity = first5.getCurrentEmbeddedActivity();
      applicationId = undefined;
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
      obj[2] = UNLOCKED;
      return obj;
    });
    applicationId = stateFromStoresObject.applicationId;
    activityOrientationLockState = stateFromStoresObject.activityOrientationLockState;
    instanceId = stateFromStoresObject.instanceId;
    const items37 = [applicationId, isConnected, first3, activityOrientationLockState, stateFromStores1, stateFromStores2, instanceId];
    const layoutEffect15 = obj1.useLayoutEffect(() => {
      if (!stateFromStores2) {
        if (store === sharedValue4.PANEL) {
          if (sharedValue1) {
            if (null != applicationId) {
              let obj = { applicationId: null, instanceId: null };
              obj[0] = tmp7;
              obj[1] = instanceId;
              if (sharedValue15 === obj2.getEmbeddedActivityParticipantId(obj)) {
                store(sharedValue15[50])(activityOrientationLockState);
              }
              obj2 = sharedValue1(sharedValue15[49]);
            }
            sharedValue1(sharedValue15[48]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
            const obj4 = sharedValue1(sharedValue15[48]);
          }
        }
        obj = sharedValue1(sharedValue15[48]);
        const result = obj.restoreDefaultOrientation();
      }
    }, items37);
    const layoutEffect16 = obj1.useLayoutEffect(() => () => callback(table[48]).restoreDefaultOrientation(), []);
    sharedValue1 = channelId;
    const items38 = [first3, channelId, isConnected];
    const effect9 = obj1.useEffect(() => {
      let tmp2 = sharedValue15 !== sharedValue4.DISMISSED;
      if (tmp2) {
        tmp2 = store;
      }
      if (tmp2) {
        store(sharedValue15[47]);
        const obj = { video_layout: null };
        obj[0] = sharedValue10(sharedValue15);
        const merged = Object.assign(sharedValue1(sharedValue15[54]).collectVoiceAnalyticsMetadata(sharedValue1));
        obj.track(sharedValue9.VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = sharedValue1(sharedValue15[54]);
      }
    }, items38);
    importDefault = obj1.useRef(-1);
    const tmpResult32 = tmp(tmp2[26]);
    sharedValue15 = tmp(tmp2[22]).useSharedValue(null);
    const items39 = [sharedValue1, sharedValue15];
    callback11 = obj1.useCallback((arg0) => {
      if (sharedValue1.get() === sharedValue4.PANEL) {
        let result = sharedValue15.set(arg0);
        if (null != arg0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(store.current);
          const _setTimeout = setTimeout;
          store.current = setTimeout(() => {
            const result = closure_2.set(null);
          }, sharedValue1(sharedValue15[34]).FLOATING_CTA_HIDE_TIMEOUT);
        }
      }
    }, items39);
    const layoutEffect17 = obj1.useLayoutEffect(() => () => clearTimeout(ref.current), []);
    closure_36 = obj1.useRef(undefined);
    ref1 = obj1.useRef(0);
    const effect10 = obj1.useEffect(() => {
      ref1.current = 0;
    });
    if (null != ref1.current) {
      ref1.current = ref1.current + 1;
      if (ref1.current > 10) {
        tmp8Result = tmp8(tmp2[64]);
        const obj22 = { category: "voice-panel", message: null };
        let _HermesInternal = HermesInternal;
        obj22[1] = "VoicePanelController is rendering too many times (>" + ref1.current + ")";
        tmp8Result.addBreadcrumb(obj22);
        ref1.current = null;
      }
    }
    const obj23 = { value: null, children: null };
    obj23[0] = tmp5(obj1.useState(() => ({ channelId: sharedValue1, channelType: applicationId, connected: activityOrientationLockState, contentDimensions: instanceId, controlsSpecs: closure_24, dismissPanel: closure_30, dismissToPIPGestureRef: closure_36, dragScrolling: first5, focused: closure_8, generateStateLocker: callback3, guildId: closure_1, hideControls: callback4, isCall: managerSubscription, isFocusedVideoZoomed: sharedValue10, layoutManager: ref, mode: callback7, morphablePanelMode: derivedValue, mountedCards: stateFromStores2, pipAvoidanceSpecs: closure_33, preJoinContentSize: id, safeArea: c13, scrollPosition: sharedValue5, setControlsMode, setFocused: callback6, setIsFocusedVideoZoomed: callback, setMode: closure_29, setShowFloatingCTA: callback11, showControls: callback5, showFloatingCTA: sharedValue15, streamOutputSinkStack: sharedValue15, usePIPState: sharedValue1(sharedValue15[65]).usePIPState, useReducedMotion: sharedValue11, windowDimensions: sharedValue2, wrapperDimensions: sharedValue4, wrapperOffset: sharedValue12, panelCardStillInPIP: sharedValue9 })), 1)[0];
    const obj24 = { value: null, children: null };
    obj24[0] = controllerPIPState;
    let tmp137 = guildId;
    if (guildId == null) {
      tmp137 = null;
    }
    const obj25 = { value: null, children: null };
    obj25[0] = tmp137;
    obj25[1] = channelId.children;
    obj24[1] = closure_29(tmp8(tmp2[67]).Provider, obj25);
    obj23[1] = closure_29(tmp(tmp2[65]).VoicePanelPIPStateContext.Provider, obj24);
    return closure_29(tmp8(tmp2[66]).Provider, obj23);
  }
  tmp37 = callback;
  const tmpResult17 = sharedValue1(tmp2[22]);
};