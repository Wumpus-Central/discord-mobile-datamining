// === Module 16478: VoicePanelController ===

// Module 16478 (VoicePanelController)
import setDefault from "set" /* 687 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { AppState } from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4436 */;
import closure_7 from "participantFromServer" /* 1390 */;
import closure_8 from "getParticipants" /* 4460 */;
import closure_9 from "module_9077" /* 9077 */;
import closure_10 from "module_10915" /* 10915 */;
import closure_11 from "initialize" /* 10815 */;
import closure_12 from "ensureGuildLoaded" /* 1391 */;
import closure_13 from "_detectH265HardwareDecode" /* 4495 */;
import closure_14 from "createRTCConnection" /* 4518 */;
import closure_15 from "withEqualityFn" /* 4680 */;
import VoicePanelModes from "VoicePanelModes" /* 11914 */;
import VoicePanelControlsModes from "VoicePanelControlsModes" /* 11912 */;
import ME from "ME" /* 676 */;
import { OrientationLockState } from "items3" /* 4472 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9982 */;
import { isActivityParticipant } from "ParticipantTypes" /* 4465 */;
import { MorphablePanelModes } from "MIN_PAN_GESTURE_MOVE" /* 11915 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ VoicePanelModes: closure_16, getAnalyticsNameForVoicePanelMode: closure_17 } = VoicePanelModes);
({ CONTROLS_HEIGHT: closure_18, CONTROLS_HEIGHT_PTT: closure_19, CONTROLS_HIDE_TIMEOUT: closure_20, VoicePanelControlsModes: closure_21 } = VoicePanelControlsModes);
({ AnalyticEvents: closure_22, ComponentActions: closure_23, InputModes: closure_24 } = ME);
let closure_30 = { code: "function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}" };
let closure_31 = { code: "function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}" };
let closure_32 = 5 * setDefault.Millis.MINUTE;
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
let result = require("set").fileFinishedImporting("modules/voice_panel/native/VoicePanelController.tsx");

export default function VoicePanelController(channelId) {
  channelId = channelId.channelId;
  let sharedValue1 = channelId;
  const guildId = channelId.guildId;
  importDefault = guildId;
  ({ transitionState, transitionCleanUp } = channelId);
  let layoutEffect12;
  let stateFromStores2;
  let applicationId;
  let activityOrientationLockState;
  let instanceId;
  let first5;
  closure_8 = undefined;
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
  stateFromStores2 = undefined;
  closure_33 = undefined;
  layoutEffect12 = undefined;
  layoutEffect12 = undefined;
  closure_36 = undefined;
  layoutEffect12 = sharedValue1;
  let tmp2 = layoutEffect12;
  let obj = sharedValue1(layoutEffect12[26]);
  items = [c13];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.getMode() === constants.PUSH_TO_TALK);
  obj1 = applicationId;
  let first = stateFromStores2(applicationId.useState(() => {
    let tmp = store(layoutEffect12[57]);
    tmp = new tmp(_undefined.getMediaEngine());
    return tmp;
  }), 1)[0];
  layoutEffect12 = first;
  const items1 = [first];
  const effect = applicationId.useEffect(() => () => closure_2.cleanUp(), items1);
  ({ items, isConnected } = importDefault(layoutEffect12[58])(channelId, guildId));
  sharedValue1 = items;
  importDefault = isConnected;
  layoutEffect12 = undefined;
  const first1 = stateFromStores2(applicationId.useState(() => new Set()), 1)[0];
  layoutEffect12 = first1;
  const items2 = [isConnected, items, first1];
  const effect1 = applicationId.useEffect(() => {
    if (closure_1) {
      closure_0 = sharedValue1(layoutEffect12[56]).runAfterInteractions(() => {
        set.clear();
        for (const item10008 of closure_0) {
          let tmp2 = set;
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
      layoutEffect12.clear();
    }
  }, items2);
  stateFromStores2 = first1;
  sharedValue1 = channelId;
  importDefault = items;
  layoutEffect12 = stateFromStores;
  stateFromStores2 = undefined;
  applicationId = undefined;
  activityOrientationLockState = undefined;
  instanceId = undefined;
  first5 = undefined;
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
  let tmp3 = c13;
  let tmp9 = importDefault(layoutEffect12[58])(channelId, guildId);
  const sharedValue = layoutEffect12(tmp2[22]).useSharedValue(isConnected);
  const layoutEffect12Result = layoutEffect12(tmp2[22]);
  sharedValue1 = layoutEffect12(tmp2[22]).useSharedValue(sharedValue4.PANEL);
  stateFromStores2 = sharedValue1;
  const layoutEffect12Result1 = layoutEffect12(tmp2[22]);
  let size = layoutEffect12(tmp2[35]).getWindowDimensions();
  applicationId = size;
  const layoutEffect12Result2 = layoutEffect12(tmp2[35]);
  obj = { width: size.width, height: size.height, landscape: size.width > size.height };
  sharedValue2 = layoutEffect12(tmp2[22]).useSharedValue(obj);
  const layoutEffect12Result3 = layoutEffect12(tmp2[22]);
  const rect = layoutEffect12(tmp2[36]).getSafeAreaInsets();
  activityOrientationLockState = rect;
  const layoutEffect12Result4 = layoutEffect12(tmp2[36]);
  obj = {};
  let merged = Object.assign(rect);
  const sharedValue3 = layoutEffect12(tmp2[22]).useSharedValue(obj);
  const layoutEffect12Result5 = layoutEffect12(tmp2[22]);
  obj1 = { windowWidth: size.width, connected: isConnected, safeAreaLeft: rect.left, safeAreaRight: rect.right };
  const maxPanelWidth = layoutEffect12(tmp2[37]).getMaxPanelWidth(obj1);
  const layoutEffect12Result6 = layoutEffect12(tmp2[37]);
  let obj2 = { drawerHeight: size.height, drawerWidth: maxPanelWidth, drawerX: null, drawerY: null, pipX: -1, pipY: -1, animated: true, mode: null };
  const layoutEffect12Result7 = layoutEffect12(tmp2[22]);
  obj2[2] = layoutEffect12(tmp2[37]).getPanelX(size.width, maxPanelWidth);
  obj2[3] = size.height;
  obj2[7] = sharedValue4.PANEL;
  sharedValue4 = layoutEffect12Result7.useSharedValue(obj2);
  const layoutEffect12Result8 = layoutEffect12(tmp2[37]);
  sharedValue5 = layoutEffect12(tmp2[22]).useSharedValue(0);
  const layoutEffect12Result9 = layoutEffect12(tmp2[22]);
  const sharedValue6 = layoutEffect12(tmp2[22]).useSharedValue(false);
  const layoutEffect12Result10 = layoutEffect12(tmp2[22]);
  const sharedValue7 = layoutEffect12(tmp2[22]).useSharedValue(null);
  const layoutEffect12Result11 = layoutEffect12(tmp2[22]);
  const sharedValue8 = layoutEffect12(tmp2[22]).useSharedValue(0);
  const layoutEffect12Result12 = layoutEffect12(tmp2[22]);
  sharedValue9 = layoutEffect12(tmp2[22]).useSharedValue(false);
  const layoutEffect12Result13 = layoutEffect12(tmp2[22]);
  sharedValue10 = layoutEffect12(tmp2[22]).useSharedValue(false);
  instanceId = sharedValue10;
  let fn = function h(arg0) {
    const result = instanceId.set(arg0);
  };
  fn.__closure = { isFocusedVideoZoomed: sharedValue10 };
  fn.__workletHash = 13885070318174;
  fn.__initData = layoutEffect12;
  const items3 = [sharedValue10];
  callback = obj1.useCallback(fn, items3);
  const layoutEffect12Result14 = layoutEffect12(tmp2[22]);
  sharedValue11 = layoutEffect12(tmp2[22]).useSharedValue(instanceId.useReducedMotion);
  first5 = sharedValue11;
  const items4 = [sharedValue11];
  const effect2 = obj1.useEffect(() => {
    function onChange() {
      const result = closure_7.set(closure_1_6.useReducedMotion);
    }
    let result = instanceId.addReactChangeListener(onChange);
    return () => {
      const result = instanceId.removeReactChangeListener(onChange);
    };
  }, items4);
  const layoutEffect12Result15 = layoutEffect12(tmp2[22]);
  sharedValue12 = layoutEffect12(tmp2[22]).useSharedValue({ gestureActive: false, x: 0, y: 0 });
  const layoutEffect12Result16 = layoutEffect12(tmp2[22]);
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
  derivedValue = layoutEffect12(tmp2[22]).useDerivedValue(H);
  const first2 = tmp5(obj1.useState(() => {
    let obj = new store(layoutEffect12[38])(sharedValue1);
    obj = { windowWidth: applicationId.width, windowHeight: applicationId.height, safeAreaLeft: activityOrientationLockState.left, safeAreaRight: activityOrientationLockState.right, safeAreaTop: activityOrientationLockState.top, safeAreaBottom: activityOrientationLockState.bottom, controlBarSize: layoutEffect12 ? sharedValue11 : callback };
    obj.updateState(store, obj);
    return obj;
  }), 1)[0];
  closure_8 = first2;
  const items5 = [first2];
  const layoutEffect = obj1.useLayoutEffect(() => () => closure_8.cleanUp(), items5);
  const layoutEffect12Result17 = layoutEffect12(tmp2[22]);
  let obj3 = { mode: sharedValue1, VoicePanelModes: sharedValue4, MorphablePanelModes: first3 };
  const sharedValue13 = layoutEffect12(tmp2[22]).useSharedValue(first2.getContentDimensions());
  applicationId = type;
  activityOrientationLockState = sharedValue;
  instanceId = sharedValue13;
  first5 = sharedValue6;
  closure_8 = sharedValue7;
  managerSubscription = flag;
  ref = first2;
  callback7 = sharedValue1;
  id = sharedValue8;
  c13 = sharedValue3;
  importDefault = isConnected;
  layoutEffect12 = sharedValue;
  stateFromStores2 = stateFromStores;
  applicationId = undefined;
  activityOrientationLockState = undefined;
  instanceId = undefined;
  first5 = undefined;
  closure_8 = undefined;
  managerSubscription = undefined;
  ref = undefined;
  layoutEffect12(tmp2[22]);
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
        clearTimeout(tmp.current);
        tmp.current = -1;
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
          if (closure_0.get() === closure_1_16.PANEL) {
            let obj = closure_4;
            let locked = closure_4.get().mode !== closure_1_21.FLOATING_DEFAULT;
            if (!locked) {
              locked = obj.get().locked;
            }
            if (!locked) {
              obj = { mode: null };
              obj[0] = tmp2.HIDDEN;
              closure_1_1(closure_1_2[39])(obj, obj);
            }
            tmp2 = closure_1_21;
          }
        }, sharedValue12);
      }
    }, items6);
    first5 = callback2;
    const items7 = [tmp35Result, callback2];
    const memo = obj1.useMemo(() => {
      let obj = store(layoutEffect12[40]);
      closure_0 = obj.debounce(function _setControlsMode(mode, returnMode) {
        closure_1_1(closure_1_2[39])(closure_4, { mode, returnMode });
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
            callback(layoutEffect12[39])(closure_1_4, obj);
            closure_1_7();
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
        let obj = sharedValue1(layoutEffect12[41]);
        v4Result = obj.v4();
      }
      sharedValue1 = v4Result;
      obj = {
        lock(mode) {
          const current = closure_1_10.current;
          if (!current.has(closure_0)) {
            closure_1_6();
            const current2 = tmp.current;
            current2.add(closure_0);
            const obj = { locked: null };
            obj[0] = tmp.current.size > 0;
            if (null != mode) {
              obj.mode = mode;
            }
            callback(layoutEffect12[39])(closure_1_4, obj);
          }
        },
        unlock(mode) {
          const current = closure_1_10.current;
          if (current.has(closure_0)) {
            const current2 = tmp.current;
            current2.delete(closure_0);
            const obj = { locked: null };
            obj[0] = tmp.current.size > 0;
            if (null != mode) {
              obj.mode = mode;
            }
            callback(layoutEffect12[39])(closure_1_4, obj);
            closure_1_7();
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
    fn2.__initData = closure_37;
    const fn3 = function l(arg0) {
      if (arg0 === sharedValue4.PANEL) {
        sharedValue1(layoutEffect12[22]).runOnJS(first5)();
        const obj2 = sharedValue1(layoutEffect12[22]);
      } else {
        sharedValue1(layoutEffect12[22]).runOnJS(instanceId)();
        const obj = sharedValue1(layoutEffect12[22]);
      }
    };
    const obj6 = { VoicePanelModes: null, runOnJS: null, _queueHideControls: null, _clearHideControlsQueue: null };
    obj6[0] = tmp14;
    obj6[1] = layoutEffect12(tmp2[22]).runOnJS;
    obj6[2] = callback2;
    obj6[3] = callback1;
    fn3.__closure = obj6;
    fn3.__workletHash = 7742206515980;
    fn3.__initData = closure_38;
    const animatedReaction = layoutEffect12(tmp2[22]).useAnimatedReaction(fn2, fn3);
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
    const layoutEffect12Result20 = layoutEffect12(tmp2[22]);
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
    const animatedReaction1 = layoutEffect12(tmp2[22]).useAnimatedReaction(S, fn4);
    const items12 = [cancelControlsDebounce, callback1];
    const layoutEffect2 = obj1.useLayoutEffect(() => () => {
      callback2();
      callback();
    }, items12);
    const items13 = [setControlsMode];
    const effect3 = obj1.useEffect(() => {
      function closeTiV() {
        callback({ mode: closure_1_21.FLOATING_DEFAULT });
      }
      let ComponentDispatch = sharedValue1(layoutEffect12[42]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(callback3.VOICE_PANEL_TIV_CLOSE, closeTiV);
      return () => {
        const ComponentDispatch = sharedValue1(layoutEffect12[42]).ComponentDispatch;
        ComponentDispatch.unsubscribe(callback3.VOICE_PANEL_TIV_CLOSE, closeTiV);
      };
    }, items13);
    closure_24 = tmp35Result;
    sharedValue1 = channelId;
    importDefault = isConnected;
    layoutEffect12 = sharedValue1;
    stateFromStores2 = sharedValue;
    applicationId = transitionState;
    activityOrientationLockState = tmp35Result;
    instanceId = setControlsMode;
    first5 = undefined;
    closure_8 = undefined;
    let tmp5Result = tmp5(obj1.useState(() => {
      const voicePanelsPIP = sharedValue2.getState().voicePanelsPIP;
      return voicePanelsPIP.has(sharedValue1) ? sharedValue4.PIP : sharedValue4.PANEL;
    }), 2);
    first3 = tmp5Result[0];
    first5 = first3;
    closure_8 = tmp63;
    const layoutEffect3 = obj1.useLayoutEffect(() => {
      const result = layoutEffect12.set(first5);
      if (applicationId !== sharedValue1(layoutEffect12[51]).TransitionStates.YEETED) {
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
        let flag2 = layoutEffect12.get() === sharedValue4.PANEL;
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
    layoutEffect12 = sharedValue7;
    stateFromStores2 = undefined;
    applicationId = undefined;
    activityOrientationLockState = undefined;
    instanceId = undefined;
    first5 = undefined;
    const layoutEffect12Result21 = layoutEffect12(tmp2[22]);
    const tmp55 = sharedValue11;
    const items15 = [closure_8];
    const stateFromStores1 = layoutEffect12(tmp2[26]).useStateFromStores(items15, () => store2.getSelectedParticipantId(closure_1));
    stateFromStores2 = stateFromStores1;
    const items16 = [guildId, channelId];
    callback6 = obj1.useCallback((id2) => {
      let result = null == id2;
      if (!result) {
        result = sharedValue1(layoutEffect12[52]).isVoicePanelParticipantFocusable(sharedValue1, store, id2);
        const obj = sharedValue1(layoutEffect12[52]);
      }
      if (result) {
        const participant = store(layoutEffect12[53]).selectParticipant(store, id2);
        const obj2 = store(layoutEffect12[53]);
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
      if (!obj2.cheapWorkletShallowEqual(tmp2, current)) {
        activityOrientationLockState.current = tmp2;
        const result = layoutEffect12.set(tmp2);
      }
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
    tmp73[0] = callback6;
    const effect5 = obj1.useEffect(() => () => callback(null), tmp73);
    const layoutEffect12Result22 = layoutEffect12(tmp2[26]);
    const tmp68 = stateFromStores1;
    const items19 = [first5];
    stateFromStores2 = layoutEffect12(tmp2[26]).useStateFromStores(items19, () => {
      const connectedActivityLocation = first5.getConnectedActivityLocation();
      const embeddedActivityLocationChannelId = sharedValue1(layoutEffect12[59]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
    sharedValue1 = sharedValue2;
    importDefault = sharedValue3;
    layoutEffect12 = sharedValue13;
    stateFromStores2 = isConnected;
    applicationId = first2;
    activityOrientationLockState = undefined;
    instanceId = undefined;
    first5 = undefined;
    closure_8 = undefined;
    managerSubscription = undefined;
    ref = undefined;
    callback7 = undefined;
    id = undefined;
    c13 = undefined;
    tmp5Result = tmp5(obj1.useState(() => {
      let obj = sharedValue1(layoutEffect12[35]);
      const windowDimensions = obj.getWindowDimensions();
      ({ width, height } = windowDimensions);
      obj = { width, height, landscape: width > height };
      return obj;
    }), 2);
    const first4 = tmp5Result[0];
    activityOrientationLockState = first4;
    instanceId = tmp79;
    const layoutEffect12Result23 = layoutEffect12(tmp2[26]);
    const tmp75 = first5;
    const tmp5Result1 = tmp5(obj1.useState(layoutEffect12(tmp2[36]).getSafeAreaInsets()), 2);
    first5 = tmp5Result1[0];
    closure_8 = tmp82;
    const layoutEffect12Result24 = layoutEffect12(tmp2[36]);
    managerSubscription = layoutEffect12(tmp2[38]).useManagerSubscription(first2);
    const obj9 = { timeout: -1, layoutKey: null, connected: null, windowState: null, safeAreaState: null, contentDimensions: null };
    obj9[1] = managerSubscription;
    obj9[2] = isConnected;
    obj9[3] = first4;
    obj9[4] = first5;
    obj9[5] = { width: 0, height: 0 };
    ref = obj1.useRef(obj9);
    sharedValue1 = isConnected;
    importDefault = ref;
    layoutEffect12 = tmp79;
    stateFromStores2 = tmp82;
    const items20 = [ref, isConnected, tmp5Result[1], tmp5Result1[1]];
    const layoutEffect5 = obj1.useLayoutEffect(() => {
      if (store.current.connected !== sharedValue1) {
        store.current.connected = tmp;
        layoutEffect12((safeAreaState) => {
          let windowState = safeAreaState;
          const windowDimensions = closure_1_0(closure_1_2[35]).getWindowDimensions();
          ({ width, height } = windowDimensions);
          closure_1.current.windowState = { width, height, landscape: width > height };
          const obj = closure_1_0(closure_1_2[35]);
          const tmp2 = closure_1;
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, closure_1.current.windowState)) {
            windowState = tmp2.current.windowState;
          }
          return windowState;
        });
        stateFromStores2((safeAreaState) => {
          closure_1.current.safeAreaState = closure_1_0(closure_1_2[36]).getSafeAreaInsets();
          const obj = closure_1_0(closure_1_2[36]);
          const tmp = closure_1;
          if (!obj2.cheapWorkletShallowEqual(safeAreaState, closure_1.current.safeAreaState)) {
            safeAreaState = tmp.current.safeAreaState;
          }
          return safeAreaState;
        });
      }
    }, items20);
    callback7 = obj1.useCallback(() => {
      clearTimeout(ref.current.timeout);
      ref.current.timeout = setTimeout(() => {
        clearTimeout(ref.current.timeout);
        closure_1_0(closure_1_2[43]).batchUpdates(() => {
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
    const items21 = [callback7];
    const layoutEffect6 = obj1.useLayoutEffect(() => {
      closure_0 = store(layoutEffect12[44])(function updateSafeAreas(current) {
        let obj = callback(closure_1_2[23]);
        if (!obj.cheapWorkletShallowEqual(ref.current.safeAreaState, current)) {
          obj = {};
          const merged = Object.assign(current);
          ref.current.safeAreaState = obj;
          callback3();
        }
      });
      let obj = sharedValue1(layoutEffect12[36]);
      const safeAreaInsets = obj.getSafeAreaInsets();
      if (!obj2.cheapWorkletShallowEqual(ref.current.safeAreaState, safeAreaInsets)) {
        obj = {};
        let merged = Object.assign(safeAreaInsets);
        tmp5.current.safeAreaState = obj;
        callback7();
      }
      function updateWindowDimensions() {
        let windowDimensions = arg0;
        if (arg0 === undefined) {
          let obj = callback(closure_1_2[35]);
          windowDimensions = obj.getWindowDimensions();
        }
        ({ width, height } = windowDimensions);
        obj = { width, height, landscape: width > height };
        if (!obj3.cheapWorkletShallowEqual(ref.current.windowState, obj)) {
          ref.current.windowState = obj;
          callback3();
        }
      }
      store = store(tmp2[45])(updateWindowDimensions);
      let tmp3Result = tmp3(tmp2[35]);
      let windowDimensions = tmp3Result.getWindowDimensions();
      ({ width, height } = windowDimensions);
      obj = { width, height, landscape: width > height };
      tmp3Result = tmp3(tmp2[23]);
      if (!tmp3Result.cheapWorkletShallowEqual(ref.current.windowState, obj)) {
        tmp5.current.windowState = obj;
        callback7();
      }
      return () => {
        callback();
        callback2();
      };
    }, items21);
    id = obj1.useId();
    const items22 = [isConnected, id];
    const layoutEffect7 = obj1.useLayoutEffect(() => {
      if (stateFromStores2) {
        let state = ref.getState();
        const obj = { key: null, lockEnabled: true };
        obj[0] = id;
        let safeAreaDisableLock = state.requestSafeAreaDisableLock(obj);
        return () => {
          const state = closure_1_10.getState();
          const safeAreaDisableLock = state.requestSafeAreaDisableLock({ key: closure_12, lockEnabled: false });
        };
      }
    }, items22);
    const obj10 = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null, safeAreaTop: null, safeAreaBottom: null, controlBarSize: null };
    ({ width: obj41[0], height: obj41[1] } = first4);
    ({ left: obj41[2], right: obj41[3], top: obj41[4], bottom: obj41[5] } = first5);
    if (stateFromStores) {
      tmp56 = tmp55;
    }
    obj10[6] = tmp56;
    const updateStateResult = first2.updateState(items, obj10);
    c13 = updateStateResult;
    const items23 = [sharedValue13, updateStateResult, managerSubscription, first2, sharedValue3, first5, sharedValue2, first4, isConnected];
    const layoutEffect8 = obj1.useLayoutEffect(() => {
      function executeLayoutManagerEffect() {
        return closure_4.handleLayoutEffect();
      }
      ref.current.layoutKey = managerSubscription;
      let obj = sharedValue1(layoutEffect12[22]);
      const fn = function t(arg0) {
        ({ windowState, safeAreaState, contentState } = arg0);
        let tmp = closure_1_3;
        if (closure_1_3) {
          tmp = !sharedValue1(layoutEffect12[23]).cheapWorkletShallowEqual(closure_1_2.get(), contentState);
          const obj = sharedValue1(layoutEffect12[23]);
        }
        if (tmp) {
          const result = closure_1_2.set(contentState);
        }
        if (!obj2.cheapWorkletShallowEqual(executeLayoutManagerEffect.get(), windowState)) {
          const result1 = obj3.set(windowState);
        }
        obj2 = sharedValue1(layoutEffect12[23]);
        obj3 = executeLayoutManagerEffect;
        if (!obj4.cheapWorkletShallowEqual(closure_1_1.get(), safeAreaState)) {
          const result2 = obj5.set(safeAreaState);
        }
        obj4 = sharedValue1(layoutEffect12[23]);
        obj5 = closure_1_1;
        sharedValue1(layoutEffect12[22]).runOnJS(executeLayoutManagerEffect)();
      };
      obj = { isConnected: stateFromStores2, cheapWorkletShallowEqual: sharedValue1(layoutEffect12[23]).cheapWorkletShallowEqual, contentDimensions: layoutEffect12, windowDimensions: executeLayoutManagerEffect, safeArea: closure_1, runOnJS: sharedValue1(layoutEffect12[22]).runOnJS, executeLayoutManagerEffect };
      fn.__closure = obj;
      fn.__workletHash = 13791383688018;
      fn.__initData = closure_1_41;
      obj = { windowState: activityOrientationLockState, safeAreaState: first5, contentState: c13 };
      obj.runOnUI(fn)(obj);
    }, items23);
    const items24 = [first2];
    const effect6 = obj1.useEffect(() => {
      function checkDimensions() {
        if (!c3) {
          const size = sharedValue1(layoutEffect12[35]).getWindowDimensions();
          const width = size.width;
          const height = size.height;
          let timeout = height;
          const result = checkDimensions.checkDimensionsMismatch(width, height);
          closure_2 = result;
          if (null != result) {
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              let obj = sharedValue1(layoutEffect12[35]);
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
                  _null(layoutEffect12[47]).track(sharedValue9.VOICE_PANEL_LAYOUT_DESYNC, obj);
                  c1 = null;
                  const obj2 = _null(layoutEffect12[47]);
                }
              }
            }, 250);
          }
          let obj = sharedValue1(layoutEffect12[35]);
        }
      }
      if (!sharedValue1(layoutEffect12[46]).isStable) {
        let _setInterval = setInterval;
        let interval = setInterval(checkDimensions, 1000);
        c1 = null;
        closure_2 = activityOrientationLockState.addEventListener("change", (arg0) => {
          if ("active" === arg0) {
            if (null == interval) {
              const _setInterval = setInterval;
              interval = setInterval(checkDimensions, 1000);
            }
          }
          if ("active" !== arg0) {
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
    }, items24);
    const layoutEffect9 = obj1.useLayoutEffect(() => () => clearTimeout(ref.current.timeout), []);
    const items25 = [first3, stateFromStores2];
    const layoutEffect10 = obj1.useLayoutEffect(() => {
      if (tmp) {
        const result = sharedValue1(layoutEffect12[33]).updateActivityPanelMode(callback4.PIP);
        const obj = sharedValue1(layoutEffect12[33]);
      }
    }, items25);
    importDefault = tmp35Result;
    const layoutEffect12Result25 = layoutEffect12(tmp2[38]);
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
    const fn6 = function s(activeIndex) {
      if (!obj.cheapWorkletArrayShallowEqual(activeIndex, arg1)) {
        let tmp8 = stateFromStores2(activeIndex, 2)[1] === derivedValue.DRAWER;
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
          tmp(tmp2[22]).runOnJS(tmp(tmp2[55]).dismissKeyboard)();
          const tmpResult = tmp(tmp2[22]);
        }
        const tmp5 = stateFromStores2(activeIndex, 2);
      }
    };
    const obj12 = { cheapWorkletArrayShallowEqual: null, VoicePanelControlsModes: null, VoicePanelModes: null, runOnJS: null, dismissKeyboard: null };
    obj12[0] = layoutEffect12(tmp2[23]).cheapWorkletArrayShallowEqual;
    obj12[1] = tmp36;
    obj12[2] = tmp14;
    obj12[3] = layoutEffect12(tmp2[22]).runOnJS;
    obj12[4] = layoutEffect12(tmp2[55]).dismissKeyboard;
    fn6.__closure = obj12;
    fn6.__workletHash = 16494740341507;
    fn6.__initData = closure_45;
    const animatedReaction2 = layoutEffect12(tmp2[22]).useAnimatedReaction(fn5, fn6);
    sharedValue1 = channelId;
    importDefault = transitionState;
    layoutEffect12 = transitionCleanUp;
    stateFromStores2 = sharedValue;
    applicationId = sharedValue1;
    activityOrientationLockState = tmp63;
    instanceId = undefined;
    const layoutEffect12Result26 = layoutEffect12(tmp2[22]);
    const sharedValue14 = layoutEffect12(tmp2[22]).useSharedValue(transitionState);
    instanceId = sharedValue14;
    const items26 = [transitionState, sharedValue14, transitionCleanUp, channelId];
    const layoutEffect11 = obj1.useLayoutEffect(() => {
      const result = instanceId.set(closure_1);
      if (closure_1 === sharedValue1(layoutEffect12[51]).TransitionStates.YEETED) {
        const state = managerSubscription.getState();
        const obj = { lockEnabled: false, key: null };
        const _HermesInternal = HermesInternal;
        obj[1] = "voice-panel-freeze-" + timeout;
        const freezeLock = state.requestFreezeLock(obj);
        const _setTimeout = setTimeout;
        timeout = setTimeout(layoutEffect12, 500);
        return () => clearTimeout(closure_0);
      }
    }, items26);
    const items27 = [channelId];
    layoutEffect12 = obj1.useLayoutEffect(() => () => {
      const state = closure_1_9.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "voice-panel-freeze-" + closure_0 });
    }, items27);
    const layoutEffect12Result27 = layoutEffect12(tmp2[22]);
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
    layoutEffect12 = closure_42;
    fn7.__initData = closure_42;
    const fn8 = function f(activeIndex) {
      if (!obj.cheapWorkletArrayShallowEqual(activeIndex, arg1)) {
        [tmp6, tmp7, tmp8] = stateFromStores2(activeIndex, 3);
        if (tmp8 === tmp(tmp2[51]).TransitionStates.YEETED) {
          if (tmp7 !== sharedValue4.DISMISSED) {
            let tmpResult = tmp(tmp2[22]);
            tmpResult.runOnJS(activityOrientationLockState)(tmp16.DISMISSED);
          }
        } else if (tmp7 === sharedValue4.DISMISSED) {
          let PANEL;
          if (arg1 != null) {
            PANEL = arg1[1];
          }
          if (PANEL == null) {
            PANEL = tmp19.PANEL;
          }
          if (tmp19.PANEL !== PANEL) {
            if (tmp19.PIP !== PANEL) {
              PANEL = tmp19.PANEL;
            }
            tmpResult = tmp(tmp2[22]);
            tmpResult.runOnJS(activityOrientationLockState)(PANEL);
          }
          if (!tmp6) {
            PANEL = tmp19.PANEL;
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
            tmp9 = tmp7 !== tmp19.PIP;
          }
          if (!tmp9) {
            tmp(tmp2[22]).runOnJS(activityOrientationLockState)(tmp19.PANEL);
            const tmpResult1 = tmp(tmp2[22]);
          }
        }
        const tmp5 = stateFromStores2(activeIndex, 3);
      }
    };
    const obj14 = { cheapWorkletArrayShallowEqual: null, TransitionStates: null, VoicePanelModes: null, runOnJS: null, setMode: null };
    obj14[0] = layoutEffect12(tmp2[23]).cheapWorkletArrayShallowEqual;
    obj14[1] = layoutEffect12(tmp2[51]).TransitionStates;
    obj14[2] = tmp14;
    obj14[3] = layoutEffect12(tmp2[22]).runOnJS;
    obj14[4] = tmp5Result[1];
    fn8.__closure = obj14;
    fn8.__workletHash = 5740547237317;
    layoutEffect12 = closure_43;
    fn8.__initData = closure_43;
    layoutEffect12 = layoutEffect12(tmp2[22]).useAnimatedReaction(fn7, fn8);
    const layoutEffect12Result28 = layoutEffect12(tmp2[22]);
    const obj15 = { channelId: null, connected: null, focusedId: null, layoutManager: null, mode: null };
    obj15[0] = channelId;
    obj15[1] = isConnected;
    layoutEffect12 = stateFromStores1;
    obj15[2] = layoutEffect12;
    obj15[3] = first2;
    obj15[4] = first3;
    layoutEffect12 = layoutEffect12(tmp2[60]).useControllerPIPState(obj15);
    const obj16 = { mode: null, controlsSpecs: null, safeArea: null, windowDimensions: null };
    obj16[0] = sharedValue1;
    obj16[1] = tmp35Result;
    obj16[2] = sharedValue3;
    obj16[3] = sharedValue2;
    closure_33 = tmp8(tmp2[61])(obj16);
    sharedValue1 = channelId;
    importDefault = first3;
    layoutEffect12 = undefined;
    layoutEffect12 = obj1.useRef(null);
    const items28 = [first3, stateFromStores1, channelId];
    layoutEffect12 = obj1.useLayoutEffect(() => {
      const rTCConnection = sharedValue5.getRTCConnection();
      let tmp = null != rTCConnection;
      if (tmp) {
        tmp = sharedValue5.getChannelId() === sharedValue1;
      }
      if (tmp) {
        if (layoutEffect12.current !== sharedValue4.PIP) {
          if (closure_1 === tmp4.PIP) {
            rTCConnection.setPipOpen(true);
          }
        }
        let tmp7 = layoutEffect12.current === tmp4.PIP;
        if (tmp7) {
          tmp7 = closure_1 !== tmp4.PIP;
        }
        if (tmp7) {
          rTCConnection.setPipOpen(false);
        }
        const tmp3 = layoutEffect12;
      }
    }, items28);
    layoutEffect12 = obj1.useLayoutEffect(() => {
      layoutEffect12.current = closure_1;
    });
    sharedValue1 = channelId;
    importDefault = sharedValue7;
    stateFromStores2 = stateFromStores1;
    applicationId = undefined;
    const items29 = [channelId];
    layoutEffect12 = obj1.useCallback((arg0) => {
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
              let obj = store(layoutEffect12[27]);
              obj = { key: "EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE", icon: null, content: null, disableAnimations: true, toastDurationMs: 3000 };
              obj[1] = store(layoutEffect12[30]);
              const intl = sharedValue1(layoutEffect12[29]).intl;
              obj[2] = intl.string(sharedValue1(layoutEffect12[29]).t.O2IlPT);
              obj.open(obj);
              const result2 = sharedValue1(layoutEffect12[31]).trackActivityThermalStateNoticeShown();
              const obj3 = sharedValue1(layoutEffect12[31]);
            }
            if (isVideoEnabledResult) {
              store(layoutEffect12[32]).setVideoEnabled(false);
              const obj4 = store(layoutEffect12[32]);
            }
            const result3 = sharedValue1(layoutEffect12[33]).consumeRequestToReactToSeriousThermalState();
            const obj5 = sharedValue1(layoutEffect12[33]);
          }
        }
      }
    }, items29);
    applicationId = layoutEffect12;
    const items30 = [stateFromStores1, layoutEffect12, layoutEffect12, channelId];
    layoutEffect12 = obj1.useEffect(() => {
      const items = [callback7, closure_8];
      const batchedStoreListener = new sharedValue1(layoutEffect12[26]).BatchedStoreListener(items, () => {
        closure_4({ focusedId: closure_3, pipParticipantId: id.id });
      });
      batchedStoreListener.attach("thermal-state-reactions-" + batchedStoreListener);
      return () => batchedStoreListener.detach();
    }, items30);
    const layoutEffect12Result29 = layoutEffect12(tmp2[60]);
    const fn9 = function f() {
      const value = store.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      const items = [id, layoutEffect12.id];
      return items;
    };
    const obj17 = { focused: null, pipState: null };
    obj17[0] = sharedValue7;
    obj17[1] = layoutEffect12;
    fn9.__closure = obj17;
    fn9.__workletHash = 94735519164;
    layoutEffect12 = closure_33;
    fn9.__initData = closure_33;
    const fn10 = function h(activeIndex) {
      let obj = sharedValue1(layoutEffect12[23]);
      if (!obj.cheapWorkletArrayShallowEqual(activeIndex, arg1)) {
        [tmp6, tmp7] = stateFromStores2(activeIndex, 2);
        const tmp5 = stateFromStores2(activeIndex, 2);
        obj = { focusedId: null, pipParticipantId: null };
        obj[0] = tmp6;
        obj[1] = tmp7;
        sharedValue1(layoutEffect12[22]).runOnJS(applicationId)(obj);
        const tmp2Result = sharedValue1(layoutEffect12[22]);
      }
    };
    const obj18 = { cheapWorkletArrayShallowEqual: null, runOnJS: null, handleStateUpdates: null };
    obj18[0] = layoutEffect12(tmp2[23]).cheapWorkletArrayShallowEqual;
    obj18[1] = layoutEffect12(tmp2[22]).runOnJS;
    obj18[2] = layoutEffect12;
    fn10.__closure = obj18;
    fn10.__workletHash = 15246095289306;
    fn10.__initData = layoutEffect12;
    layoutEffect12 = layoutEffect12(tmp2[22]).useAnimatedReaction(fn9, fn10);
    sharedValue1 = channelId;
    importDefault = sharedValue7;
    layoutEffect12 = sharedValue1;
    stateFromStores2 = sharedValue;
    applicationId = undefined;
    const items31 = [channelId];
    layoutEffect12 = obj1.useCallback((arg0) => {
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
    }, items31);
    applicationId = layoutEffect12;
    const layoutEffect12Result30 = layoutEffect12(tmp2[22]);
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
    layoutEffect12 = closure_30;
    S.__initData = closure_30;
    const fn11 = function h(activeIndex) {
      let obj = sharedValue1(layoutEffect12[23]);
      if (!obj.cheapWorkletArrayShallowEqual(activeIndex, arg1)) {
        [tmp6, tmp7, tmp8] = stateFromStores2(activeIndex, 3);
        const tmp5 = stateFromStores2(activeIndex, 3);
        obj = { focusedParticipantId: null, voicePanelMode: null, connectedValue: null };
        obj[0] = tmp6;
        obj[1] = tmp7;
        obj[2] = tmp8;
        sharedValue1(layoutEffect12[22]).runOnJS(applicationId)(obj);
        const tmp2Result = sharedValue1(layoutEffect12[22]);
      }
    };
    const obj20 = { cheapWorkletArrayShallowEqual: null, runOnJS: null, handleAnimatedReaction: null };
    obj20[0] = layoutEffect12(tmp2[23]).cheapWorkletArrayShallowEqual;
    obj20[1] = layoutEffect12(tmp2[22]).runOnJS;
    obj20[2] = layoutEffect12;
    fn11.__closure = obj20;
    fn11.__workletHash = 15290799116693;
    layoutEffect12 = callback6;
    fn11.__initData = callback6;
    layoutEffect12 = layoutEffect12(tmp2[22]).useAnimatedReaction(S, fn11);
    sharedValue1 = setControlsMode;
    const items32 = [setControlsMode];
    layoutEffect12 = obj1.useCallback(() => {
      sharedValue1({ mode: derivedValue.FLOATING_DEFAULT });
    }, items32);
    const obj21 = { onTransition: null };
    obj21[0] = layoutEffect12;
    layoutEffect12 = tmp8(tmp2[21])(obj21);
    sharedValue1 = callback5;
    importDefault = undefined;
    layoutEffect12 = undefined;
    stateFromStores2 = undefined;
    const layoutEffect12Result31 = layoutEffect12(tmp2[22]);
    const enableMuteWarning = tmp8(tmp2[25]).useConfig({ location: "VoicePanelController" }).enableMuteWarning;
    importDefault = enableMuteWarning;
    layoutEffect12 = obj1.useRef(0);
    const tmp8Result = tmp8(tmp2[25]);
    const items33 = [tmp3];
    layoutEffect12 = layoutEffect12(tmp2[26]).useStateFromStores(items33, () => _undefined.getSpeakingWhileMuted());
    stateFromStores2 = layoutEffect12;
    const items34 = [layoutEffect12, enableMuteWarning, callback5];
    layoutEffect12 = obj1.useEffect(() => {
      let tmp = stateFromStores2;
      if (stateFromStores2) {
        tmp = store;
      }
      if (tmp) {
        const _performance = performance;
        if (performance.now() - layoutEffect12.current >= stateFromStores2) {
          const _performance2 = performance;
          tmp3.current = performance.now();
          sharedValue1();
          let obj = store(layoutEffect12[27]);
          obj = { key: "SPEAKING_WHILE_MUTED", icon: null, content: null, toastDurationMs: 3000 };
          obj[1] = store(layoutEffect12[28]);
          const intl = sharedValue1(layoutEffect12[29]).intl;
          obj[2] = intl.string(sharedValue1(layoutEffect12[29]).t["29gnR4"]);
          obj.open(obj);
        }
      }
    }, items34);
    layoutEffect12 = channelId;
    layoutEffect12 = sharedValue1;
    layoutEffect12 = tmp63;
    layoutEffect12 = sharedValue;
    layoutEffect12 = tmp8(tmp2[62])(channelId, sharedValue1, tmp63, sharedValue);
    layoutEffect12 = tmp8(tmp2[63])();
    sharedValue1 = isConnected;
    importDefault = first3;
    layoutEffect12 = stateFromStores1;
    applicationId = undefined;
    activityOrientationLockState = undefined;
    instanceId = undefined;
    const layoutEffect12Result32 = layoutEffect12(tmp2[26]);
    const items35 = [tmp75];
    layoutEffect12 = layoutEffect12(tmp2[26]).useStateFromStoresObject(items35, () => {
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
    applicationId = layoutEffect12.applicationId;
    activityOrientationLockState = layoutEffect12.activityOrientationLockState;
    instanceId = layoutEffect12.instanceId;
    const items36 = [applicationId, isConnected, first3, activityOrientationLockState, stateFromStores1, stateFromStores2, instanceId];
    layoutEffect12 = obj1.useLayoutEffect(() => {
      if (!stateFromStores2) {
        if (store === sharedValue4.PANEL) {
          if (sharedValue1) {
            if (null != applicationId) {
              let obj = { applicationId: null, instanceId: null };
              obj[0] = tmp7;
              obj[1] = instanceId;
              if (layoutEffect12 === obj2.getEmbeddedActivityParticipantId(obj)) {
                store(tmp11[50])(activityOrientationLockState);
              }
              obj2 = sharedValue1(layoutEffect12[49]);
              tmp11 = layoutEffect12;
            }
            sharedValue1(layoutEffect12[48]).unlockOrientation({ unlockAfterRotatingToPreviousLock: false });
            const obj4 = sharedValue1(layoutEffect12[48]);
          }
        }
        obj = sharedValue1(layoutEffect12[48]);
        const result = obj.restoreDefaultOrientation();
      }
    }, items36);
    layoutEffect12 = obj1.useLayoutEffect(() => () => callback(table[48]).restoreDefaultOrientation(), []);
    sharedValue1 = channelId;
    importDefault = isConnected;
    layoutEffect12 = first3;
    const items37 = [first3, channelId, isConnected];
    layoutEffect12 = obj1.useEffect(() => {
      let tmp2 = layoutEffect12 !== sharedValue4.DISMISSED;
      if (tmp2) {
        tmp2 = store;
      }
      if (tmp2) {
        let obj = store(layoutEffect12[47]);
        obj = { video_layout: null };
        obj[0] = sharedValue10(layoutEffect12);
        const merged = Object.assign(sharedValue1(layoutEffect12[54]).collectVoiceAnalyticsMetadata(sharedValue1));
        obj.track(sharedValue9.VIDEO_LAYOUT_TOGGLED, obj);
        const obj3 = sharedValue1(layoutEffect12[54]);
      }
    }, items37);
    importDefault = undefined;
    layoutEffect12 = undefined;
    importDefault = obj1.useRef(-1);
    const layoutEffect12Result33 = layoutEffect12(tmp2[26]);
    layoutEffect12 = layoutEffect12(tmp2[22]).useSharedValue(null);
    const items38 = [sharedValue1, layoutEffect12];
    layoutEffect12 = obj1.useCallback((arg0) => {
      if (sharedValue1.get() === sharedValue4.PANEL) {
        let result = layoutEffect12.set(arg0);
        if (null != arg0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(store.current);
          const _setTimeout = setTimeout;
          store.current = setTimeout(() => {
            const result = closure_2.set(null);
          }, sharedValue1(layoutEffect12[34]).FLOATING_CTA_HIDE_TIMEOUT);
        }
      }
    }, items38);
    layoutEffect12 = obj1.useLayoutEffect(() => () => clearTimeout(ref.current), []);
    closure_36 = obj1.useRef(undefined);
    layoutEffect12 = closure_29;
    const obj22 = { value: null, children: null };
    obj22[0] = tmp5(obj1.useState(() => ({ channelId: sharedValue1, channelType: applicationId, connected: activityOrientationLockState, contentDimensions: instanceId, controlsSpecs: closure_24, dismissPanel: closure_30, dismissToPIPGestureRef: closure_36, dragScrolling: first5, focused: closure_8, generateStateLocker: callback3, guildId: closure_1, hideControls: callback4, isCall: managerSubscription, isFocusedVideoZoomed: sharedValue10, layoutManager: ref, mode: callback7, morphablePanelMode: derivedValue, mountedCards: stateFromStores2, pipAvoidanceSpecs: closure_33, preJoinContentSize: id, safeArea: c13, scrollPosition: sharedValue5, setControlsMode, setFocused: callback6, setIsFocusedVideoZoomed: callback, setMode: closure_29, setShowFloatingCTA: layoutEffect12, showControls: callback5, showFloatingCTA: layoutEffect12, streamOutputSinkStack: layoutEffect12, usePIPState: sharedValue1(layoutEffect12[64]).usePIPState, useReducedMotion: sharedValue11, windowDimensions: sharedValue2, wrapperDimensions: sharedValue4, wrapperOffset: sharedValue12, panelCardStillInPIP: sharedValue9 })), 1)[0];
    const obj23 = { value: null, children: null };
    obj23[0] = layoutEffect12;
    layoutEffect12 = guildId;
    if (guildId == null) {
      layoutEffect12 = null;
    }
    const obj24 = { value: null, children: null };
    obj24[0] = layoutEffect12;
    obj24[1] = channelId.children;
    obj23[1] = layoutEffect12(tmp8(tmp2[66]).Provider, obj24);
    obj22[1] = layoutEffect12(layoutEffect12(tmp2[64]).VoicePanelPIPStateContext.Provider, obj23);
    return layoutEffect12(tmp8(tmp2[65]).Provider, obj22);
  }
  tmp37 = callback;
};