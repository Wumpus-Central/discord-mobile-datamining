// === Module 19314: VoicePanelDockPIP ===

// Module 19314 (VoicePanelDockPIP)
import util from "util" /* 1112 */;
import _mod1653 from "module_1653" /* 1653 */;
import _mod1706 from "module_1706" /* 1706 */;
import _modDef3376 from "module_3376" /* 3376 */;
import timing_timing from "timing/timing" /* 5123 */;
import toastUtils from "toastUtils" /* 5596 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5817 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5923 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5943 */;
import StreamActionCreators from "StreamActionCreators" /* 6456 */;
import ScreenIcon from "ScreenIcon" /* 9904 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11749 */;
import VoicePanelDockActionCreators from "VoicePanelDockActionCreators" /* 19316 */;
import VoicePanelDockPIPOverlay from "VoicePanelDockPIPOverlay" /* 19317 */;
import useVoicePanelDockPIPStreamDefault from "useVoicePanelDockPIPStream" /* 19320 */;
import useShowVoicePanelDockVideoPIPDefault from "useShowVoicePanelDockVideoPIP" /* 19322 */;
import useShowStreamWithTimeoutDefault from "useShowStreamWithTimeout" /* 19323 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6620 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
function useVoicePanelDockPIPState(streamKey, arg1, tmp4Result, isWatching, stateFromStores) {
  streamKey = streamKey.streamKey;
  importDefault = tmp4Result;
  let layoutManager;
  _slicedToArray = undefined;
  noop = undefined;
  closure_5 = undefined;
  let IN_APP;
  let width;
  let height;
  let containerHeight;
  layoutManager = noop.useContext(require("VoicePanelStateContext")).layoutManager;
  [tmp3, c3] = noop.useState(() => {
    let targetDimensions = layoutManager.getTargetDimensions(streamKey);
    if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
      targetDimensions = closure_16;
    }
    return targetDimensions;
  });
  items = [layoutManager, streamKey];
  const effect = noop.useEffect(() => {
    _undefined((safeAreaState) => {
      let targetDimensions = closure_1_2.getTargetDimensions(closure_1_0);
      if (targetDimensions === closure_1_2.getDefaultTargetDimensions()) {
        targetDimensions = closure_2_16;
      }
      if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
        targetDimensions = safeAreaState;
      }
      return targetDimensions;
    });
    return layoutManager.subscribeFromItem(function updateTargetDimensions() {
      _undefined((safeAreaState) => {
        let targetDimensions = closure_1_2.getTargetDimensions(closure_1_0);
        if (targetDimensions === closure_1_2.getDefaultTargetDimensions()) {
          targetDimensions = closure_2_16;
        }
        if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
          targetDimensions = safeAreaState;
        }
        return targetDimensions;
      });
    });
  }, items);
  let tmp6 = tmp4Result.mode !== containerHeight.IN_PANEL;
  if (tmp6) {
    tmp6 = !stateFromStores;
  }
  noop = tmp6;
  closure_5 = tmp8;
  IN_APP = undefined;
  if (tmp4Result.mode === containerHeight.IN_APP) {
    if (null != streamKey) {
      IN_APP = tmp5.IN_APP;
    }
  }
  let obj = noop;
  const tmp2 = _slicedToArray(noop.useState(() => {
    let targetDimensions = layoutManager.getTargetDimensions(streamKey);
    if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
      targetDimensions = closure_16;
    }
    return targetDimensions;
  }), 2);
  const size = streamKey(layoutManager[15]).computePIPSize(closure_16, false, false, tmp4Result.showSecondaryPIP);
  width = size.width;
  height = size.height;
  containerHeight = size.containerHeight;
  const items1 = [tmp6, null == streamKey && arg1, tmp4Result, streamKey, IN_APP, width, height, containerHeight];
  return obj.useMemo(() => {
    if (closure_4) {
      const obj = {};
      const merged = Object.assign(closure_1);
      if (closure_5) {
        obj.mode = IN_APP;
      } else {
        obj.id = streamKey;
        obj.mode = IN_APP;
        obj.width = width;
        obj.height = height;
        obj.containerHeight = containerHeight;
      }
    } else {
      return closure_1;
    }
  }, items1);
}
function getTileAccessibilityProps(onActivate) {
  onActivate = onActivate.onActivate;
  const actions = onActivate.actions;
  const iter = onActivate.adjustable;
  items = [];
  ({ label, hint, activateLabel } = onActivate);
  if (!obj.isIOS()) {
    const obj2 = { name: "activate", label: activateLabel };
    items.push(obj2);
    if (null != iter) {
      items.push({ name: "increment" }, { name: "decrement" });
    }
  }
  for (const item10026 of actions) {
    let obj4 = { name: null, label: null };
    ({ name: obj3.name, label: obj3.label } = item10026);
    let arr5 = items.push(obj4);
    continue;
  }
  const obj5 = { accessible: true, accessibilityLabel: label, accessibilityHint: hint, accessibilityRole: null, accessibilityValue: null, accessibilityActions: null, onAccessibilityTap: null, onAccessibilityAction: null };
  let str = "button";
  if (null != iter) {
    str = "adjustable";
  }
  obj5.accessibilityRole = str;
  let tmp5;
  if (null != iter) {
    const obj9 = { text: iter.value };
    tmp5 = obj9;
  }
  obj5.accessibilityValue = tmp5;
  obj5.accessibilityActions = items;
  obj5.onAccessibilityTap = onActivate;
  obj5.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
    const actionName = nativeEvent.nativeEvent.actionName;
    if ("activate" === actionName) {
      onActivate();
    } else if ("increment" === actionName) {
      if (iter != null) {
        iter.onIncrement();
      }
    } else if ("decrement" === actionName) {
      if (iter != null) {
        iter.onDecrement();
      }
    } else {
      const found = actions.find((name) => name.name === actionName);
      if (found != null) {
        found.onAction();
      }
    }
  };
  return obj5;
}
function renderVoicePanelDockPIP(arg0, arg1, transitionState, transitionCleanUp) {
  return state(closure_23, { transitionState, transitionCleanUp }, arg0);
}
const VoicePanelModes = fn(11750).VoicePanelModes;
const VoicePanelPIPConstants = fn(19165);
({ PIP_FIRST_FRAME_DELAY_MS: closure_8, VoicePanelPIPModes: closure_9 } = VoicePanelPIPConstants);
const DOCK_FADE_TIMING = fn(11768).DOCK_FADE_TIMING;
const ParticipantTypes = fn(5563).ParticipantTypes;
let closure_12 = fn(5658).MAX_EMBEDDED_VOLUME_PERCEPTUAL;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = { width: 16, height: 9 };
let closure_19 = { code: "(function VoicePanelDockPIPTsx1(finished){let[scheduleOnRN,setHasFadedOut]=this.__closure;if(finished){scheduleOnRN(setHasFadedOut,true);}})" };
let closure_20 = { code: "(function VoicePanelDockPIPTsx2(){let[dockContentSwap]=this.__closure;return dockContentSwap.get()>0;})" };
let closure_21 = { code: "(function VoicePanelDockPIPTsx3(isSwapped,wasSwapped){let[pullOpacity,withTiming,DOCK_FADE_TIMING]=this.__closure;if(wasSwapped==null||isSwapped===wasSwapped)return;pullOpacity.set(withTiming(isSwapped?0:1,DOCK_FADE_TIMING));})" };
let closure_22 = { code: "(function VoicePanelDockPIPTsx4(){let[fadeOpacity,pullOpacity]=this.__closure;return fadeOpacity.get()*pullOpacity.get();})" };
let closure_23 = noop.memo(function VoicePanelDockPIP(transitionCleanUp) {
  transitionCleanUp = transitionCleanUp.transitionCleanUp;
  _require = transitionCleanUp;
  importDefault = undefined;
  dependencyMap = undefined;
  let sharedValue;
  noop = undefined;
  let first3;
  let onActivate;
  const context = noop.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  const tmp6 = useVoicePanelDockPIPStreamDefault(channelId);
  const tmp7 = useShowVoicePanelDockVideoPIPDefault(channelId);
  const tmp8 = useShowStreamWithTimeoutDefault(tmp6);
  const showStream = tmp8.showStream;
  closure_129_7 = undefined;
  closure_129_8 = undefined;
  closure_129_9 = undefined;
  closure_129_10 = undefined;
  closure_129_11 = undefined;
  closure_129_12 = undefined;
  closure_129_13 = undefined;
  closure_129_14 = undefined;
  const context1 = noop.useContext(VoicePanelStateContextDefault);
  const channelId2 = context1.channelId;
  closure_129_0 = channelId2;
  const setMode = context1.setMode;
  closure_129_1 = setMode;
  const setFocused = context1.setFocused;
  closure_129_2 = setFocused;
  const showControls = context1.showControls;
  closure_129_3 = showControls;
  let obj2 = require("VoicePanelPIPStateContext");
  const pIPState1 = require("VoicePanelPIPStateContext").usePIPState();
  closure_129_4 = pIPState1;
  const streamKey = tmp6.streamKey;
  closure_129_5 = streamKey;
  ({ ownerId, isWatching, isConnecting, isAutoWatchChannel } = tmp6);
  closure_129_6 = tmp11;
  let tmp12 = tmp11;
  if (!(null == streamKey && tmp7)) {
    tmp12 = showStream;
  }
  closure_129_7 = tmp12;
  let obj3 = require("VoicePanelPIPStateContext");
  items = [first3];
  let items1 = [null == streamKey && tmp7, channelId2, pIPState1.id];
  let stateFromStores = ownerId;
  if (null == streamKey && tmp7) {
    stateFromStores = tmp4Result.useStateFromStores(items, () => {
      if (closure_6) {
        if (null != onAction.id) {
          const participant = ChannelRTCStore.getParticipant(c0, tmp.id);
          let type;
          if (participant != null) {
            type = participant.type;
          }
          let id;
          if (type === ParticipantTypes.USER) {
            id = participant.user.id;
          }
          return id;
        }
      }
    }, items1);
  }
  closure_129_8 = stateFromStores;
  const tmp13 = first3;
  tmp4Result = require("initialize");
  [HIDDEN, tmp17] = sharedValue(noop.useState(require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  closure_129_9 = tmp17;
  let tmp18 = null;
  if (!(null == streamKey && tmp7)) {
    tmp18 = streamKey;
  }
  const tmp15Result = sharedValue(noop.useState(tmp18), 2);
  if (tmp15Result[0] !== tmp18) {
    tmp15Result[1](tmp18);
    tmp17(tmp4(19317).VoicePanelDockPIPOverlayModes.HIDDEN);
  }
  if (!tmp12) {
    HIDDEN = tmp4(19317).VoicePanelDockPIPOverlayModes.HIDDEN;
  }
  closure_129_10 = HIDDEN;
  let tmp22 = tmp11;
  if (null == streamKey && tmp7) {
    tmp22 = HIDDEN === tmp4(19317).VoicePanelDockPIPOverlayModes.VOLUME;
  }
  if (tmp22) {
    const CONTROLS = tmp4(19317).VoicePanelDockPIPOverlayModes.CONTROLS;
    closure_129_10 = CONTROLS;
    HIDDEN = CONTROLS;
  }
  const tmp16 = sharedValue(noop.useState(require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  closure_129_11 = isScreenReaderEnabled;
  const tmp15Result7 = sharedValue(noop.useState(false), 2);
  const first = tmp15Result7[0];
  closure_129_12 = first;
  closure_129_13 = tmp26;
  const tmp15Result8 = sharedValue(noop.useState(false), 2);
  const first1 = tmp15Result8[0];
  closure_129_14 = first1;
  const tmp15Result9 = sharedValue(noop.useState(HIDDEN), 2);
  if (tmp15Result9[0] !== HIDDEN) {
    tmp15Result9[1](HIDDEN);
    tmp26(false);
    tmp29(false);
  }
  let items2 = [HIDDEN, first, first1, isScreenReaderEnabled];
  const effect = obj.useEffect(() => {
    if (closure_10 !== _undefined(ref[24]).VoicePanelDockPIPOverlayModes.HIDDEN) {
      if (!closure_12) {
        if (!closure_14) {
          if (!closure_11) {
            const _setTimeout = setTimeout;
            const timeout = setTimeout(() => closure_1_9(c0(c2[24]).VoicePanelDockPIPOverlayModes.HIDDEN), 3000);
            return () => clearTimeout(closure_0);
          }
        }
      }
    }
  }, items2);
  const callback = obj.useCallback(() => closure_1_13(true), []);
  const items3 = [tmp12];
  const callback1 = obj.useCallback(() => closure_1_13(false), []);
  const callback2 = obj.useCallback(() => {
    if (VoicePanelModes) {
      constants((arg0) => {
        if (arg0 === _undefined(ref[24]).VoicePanelDockPIPOverlayModes.HIDDEN) {
          let HIDDEN = _undefined(ref[24]).VoicePanelDockPIPOverlayModes.CONTROLS;
        } else {
          HIDDEN = _undefined(ref[24]).VoicePanelDockPIPOverlayModes.HIDDEN;
        }
        return HIDDEN;
      });
    }
  }, items3);
  const items4 = [null == streamKey && tmp7, streamKey];
  const callback3 = obj.useCallback(() => {
    constants((arg0) => {
      if (arg0 === _undefined(ref[24]).VoicePanelDockPIPOverlayModes.VOLUME) {
        let VOLUME = _undefined(ref[24]).VoicePanelDockPIPOverlayModes.CONTROLS;
      } else {
        VOLUME = _undefined(ref[24]).VoicePanelDockPIPOverlayModes.VOLUME;
      }
      return VOLUME;
    });
  }, []);
  const callback4 = obj.useCallback(() => {
    if (closure_6) {
      constants(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      const result = VoicePanelDockActionCreators.dismissVoicePanelDockVideoPIP();
    } else if (null != first3) {
      constants(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      StreamActionCreators.stopStream(tmp);
      const obj4 = { icon: ScreenIcon.ScreenIcon, text: null };
      const intl = util.intl;
      obj4.text = intl.string(_modDef3376.gLoosj);
      toastUtils.showToast(obj4);
    }
  }, items4);
  const items5 = [streamKey, setFocused, setMode, showControls];
  const callback5 = obj.useCallback(() => {
    constants(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
    if (null != first3) {
      ref(tmp2);
    }
    sharedValue();
    current(VoicePanelModes.PANEL);
  }, items5);
  const items6 = [null == streamKey && tmp7, pIPState1.id, streamKey, setFocused, setMode, showControls];
  const callback6 = obj.useCallback(() => {
    constants(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
    if (closure_6) {
      let id = onAction.id;
    } else {
      id = first3;
    }
    if (null != id) {
      ref(id);
    }
    sharedValue();
    current(VoicePanelModes.PANEL);
  }, items6);
  const tmp4Result11 = require("useIsScreenReaderEnabled");
  const items7 = [onActivate];
  const items8 = [stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items7, () => UserStore.getUser(closure_1_8), items8);
  NicknameUtilsDefault;
  if (null == stateFromStores) {
    const ref = obj.useRef(null);
    let tmp48 = !tmp11;
    if (!tmp11) {
      tmp48 = !showStream;
    }
    if (tmp48) {
      tmp48 = !isAutoWatchChannel;
    }
    let tmp49 = isConnecting;
    if (!isConnecting) {
      tmp49 = isWatching;
    }
    closure_130_0 = tmp11;
    closure_130_1 = tmp48;
    closure_130_2 = ref;
    closure_130_3 = undefined;
    closure_130_4 = callback5;
    closure_130_5 = callback4;
    closure_130_6 = callback6;
    let tmp51;
    if (!tmp11) {
      tmp51 = ownerId;
    }
    const tmpResult1Result = tmp(11040)(tmp51, tmp4(5679).MediaEngineContextTypes.STREAM);
    const effectiveVolume = tmpResult1Result.effectiveVolume;
    closure_130_7 = effectiveVolume;
    const handleVolumeChange = tmpResult1Result.handleVolumeChange;
    closure_130_8 = handleVolumeChange;
    const tmpResult5 = tmp(11040);
    let tmp53;
    if (tmp48) {
      tmp53 = ownerId;
    }
    const voicePanelDockWatchPromptActions = tmp4(19315).useVoicePanelDockWatchPromptActions(tmp53, streamKey, tmp49);
    const handleWatch = voicePanelDockWatchPromptActions.handleWatch;
    closure_130_9 = handleWatch;
    const handleDismiss = voicePanelDockWatchPromptActions.handleDismiss;
    closure_130_10 = handleDismiss;
    closure_130_11 = obj.useRef(tmp48);
    const items9 = [tmp48, ref];
    const effect1 = obj.useEffect(() => {
      current = ref2.current;
      ref2.current = current;
      if (current) {
        current = !current;
      }
      if (current) {
        const obj2 = { ref };
        const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
      }
    }, items9);
    const items10 = [tmp48, tmp11, undefined, effectiveVolume, handleWatch, handleDismiss, handleVolumeChange, callback5, callback4, callback6];
    let tmp57 = tmp11;
    const memo = obj.useMemo(() => {
      if (setVolume) {
        const obj2 = { label: sharedValue, hint: null, activateLabel: null, onActivate: null, actions: null };
        const intl6 = _undefined(ref[21]).intl;
        obj2.hint = intl6.string(_undefined(ref[21]).t["7Xq/nV"]);
        const intl7 = _undefined(ref[21]).intl;
        obj2.activateLabel = intl7.string(_undefined(ref[21]).t["7Xq/nV"]);
        obj2.onActivate = onAction;
        const obj3 = { name: "watch", label: null, onAction: null };
        const intl8 = _undefined(ref[21]).intl;
        obj3.label = intl8.string(_undefined(ref[21]).t["7Xq/nV"]);
        obj3.onAction = onAction;
        items = [obj3, ];
        const obj5 = { name: "dismiss", label: null, onAction: null };
        const intl9 = _undefined(ref[21]).intl;
        obj5.label = intl9.string(_undefined(ref[21]).t.WAI6xu);
        obj5.onAction = onAction2;
        items[1] = obj5;
        obj2.actions = items;
        return getTileAccessibilityProps(obj2);
      } else {
        const intl = _undefined(ref[21]).intl;
        const string = intl.string;
        const t = _undefined(ref[21]).t;
        if (rounded) {
          let stringResult = string(t.cpT0Cq);
        } else {
          stringResult = string(t.q3O3J8);
        }
        const obj = { name: "stopWatching", label: stringResult, onAction: first3 };
        if (null != sharedValue) {
          const intl2 = _undefined(ref[21]).intl;
          const obj6 = { thing: sharedValue };
          const formatToPlainStringResult = intl2.formatToPlainString(current(ref[22])["1CIzQl"], obj6);
        }
        if (null != sharedValue) {
          const intl4 = _undefined(ref[21]).intl;
          const obj7 = { targetName: sharedValue };
          let formatToPlainStringResult1 = intl4.formatToPlainString(_undefined(ref[21]).t.OervdV, obj7);
        } else {
          const intl3 = _undefined(ref[21]).intl;
          formatToPlainStringResult1 = intl3.string(_undefined(ref[21]).t["77cRN4"]);
        }
        if (tmp) {
          const obj8 = { label: sharedValue, hint: formatToPlainStringResult, activateLabel: formatToPlainStringResult1, onActivate, actions: null };
          const obj9 = { name: "openCall", label: null, onAction: null };
          const intl5 = _undefined(ref[21]).intl;
          obj9.label = intl5.string(current(ref[22]).MPtef8);
          obj9.onAction = onAction;
          const items1 = [obj9, obj];
          obj8.actions = items1;
          return getTileAccessibilityProps(obj8);
        } else {
          let _Math = Math;
          rounded = Math.round(_undefined(ref[23]).amplitudeToPerceptual(closure_7));
          setVolume = function setVolume(arg0) {

          };
          const obj10 = { label: sharedValue, hint: formatToPlainStringResult, activateLabel: formatToPlainStringResult1, onActivate, adjustable: null, actions: null };
          const obj11 = { value: null, onIncrement: null, onDecrement: null };
          const _HermesInternal = HermesInternal;
          obj11.value = "" + rounded + "%";
          obj11.onIncrement = function onIncrement() {
            if (typeof setVolume === "function") {
              const _Math = Math;
              const _Math2 = Math;
              return closure_2_8(PerceptualVolumeUtils.perceptualToAmplitude(Math.min(closure_12, Math.max(0, tmp))));
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          };
          obj11.onDecrement = function onDecrement() {
            if (typeof setVolume === "function") {
              const _Math = Math;
              const _Math2 = Math;
              return closure_2_8(PerceptualVolumeUtils.perceptualToAmplitude(Math.min(closure_12, Math.max(0, tmp))));
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          };
          obj10.adjustable = obj11;
          const items2 = [obj];
          obj10.actions = items2;
          return getTileAccessibilityProps(obj10);
        }
        tmp = rounded;
      }
    }, items10);
    if (!tmp11) {
      tmp57 = null != ownerId;
    }
    let obj4 = { hasTile: tmp57, showContent: null, mainTileAccessibilityProps: null, mainTileRef: null, dragEnabled: null, resizeEnabled: null, onMainTileTap: null, onStreamReady: null, showPushToTalk: false, onGesturePressedChange: null, controlsOverlay: null };
    let tmp58 = tmp11;
    if (!tmp11) {
      tmp58 = isWatching;
    }
    obj4.showContent = tmp58;
    obj4.mainTileAccessibilityProps = memo;
    obj4.mainTileRef = ref;
    obj4.dragEnabled = HIDDEN !== tmp4(19317).VoicePanelDockPIPOverlayModes.VOLUME;
    obj4.resizeEnabled = tmp12;
    obj4.onMainTileTap = callback2;
    obj4.onStreamReady = tmp8.onStreamReady;
    obj4.onGesturePressedChange = tmp29;
    let tmp62Result = null;
    if (!tmp11) {
      tmp62Result = null;
      if (!isAutoWatchChannel) {
        tmp62Result = null;
        if (null != ownerId) {
          let obj5 = { ownerId, streamKey, isConnecting: null, hideContent: null, visible: null };
          if (!isConnecting) {
            isConnecting = isWatching;
          }
          obj5.isConnecting = isConnecting;
          obj5.hideContent = isWatching;
          obj5.visible = !showStream;
          tmp62Result = closure_13(tmp(19315), obj5);
          const tmpResult6 = tmp(19315);
        }
      }
    }
    const items11 = [tmp62Result, ];
    let str = "stream";
    const tmp4Result13 = tmp4(19315);
    if (tmp11) {
      str = "video";
    }
    let obj6 = { children: null };
    let obj7 = { kind: str, ownerId: stateFromStores, mode: HIDDEN, onToggleVolume: callback3, onInteractionStart: callback, onInteractionEnd: callback1, onStopWatching: callback4, onOpenCall: callback5 };
    items11[1] = closure_13(tmp(19317), obj7);
    obj6.children = items11;
    obj4.controlsOverlay = closure_15(closure_14, obj6);
    const tmpResult7 = tmp(19317);
    const pIPState2 = tmp4(11759).usePIPState();
    let id = pIPState2.id;
    closure_131_0 = id;
    const channelId3 = obj.useContext(tmp(11749)).channelId;
    closure_131_1 = channelId3;
    let tmp67 = tmp(19227)();
    const tmp4Result14 = tmp4(11759);
    const items12 = [tmp13];
    const items13 = [channelId3, id];
    let stateFromStores2 = tmp4(504).useStateFromStores(items12, () => {
      let tmp2 = null != id;
      if (tmp2) {
        const participant = ChannelRTCStore.getParticipant(channelId2, tmp);
        let type;
        if (participant != null) {
          type = participant.type;
        }
        tmp2 = type === ParticipantTypes.ACTIVITY;
      }
      return tmp2;
    }, items13);
    let tmp70 = pIPState2.mode === constants.IN_APP;
    if (tmp70) {
      if (!stateFromStores2) {
        if (tmp67) {
          tmp67 = null == tmp6.streamKey;
        }
        if (tmp67) {
          tmp67 = !tmp7;
        }
        stateFromStores2 = tmp67;
      }
      tmp70 = stateFromStores2;
    }
    const tmp4Result15 = tmp4(504);
    const panelLayoutCommitted = tmp4(19324).usePIPTileHandoff().panelLayoutCommitted;
    importDefault = panelLayoutCommitted;
    const tmp71 = transitionCleanUp.transitionState === tmp4(4974).TransitionStates.YEETED;
    dependencyMap = tmp71;
    const tmp4Result16 = tmp4(19324);
    [tmp73, tmp74] = tmp15(obj.useState(pIPState), 2);
    const tmp15Result11 = tmp15(obj.useState(tmp70), 2);
    const first2 = tmp15Result11[0];
    let tmp77 = tmp71;
    if (!tmp71) {
      tmp77 = tmp73 === pIPState;
    }
    if (!tmp77) {
      tmp74(pIPState);
    }
    let tmp79 = tmp71;
    if (!tmp71) {
      tmp79 = first2 === tmp70;
    }
    if (!tmp79) {
      tmp15Result11[1](tmp70);
    }
    let tmp81 = first2;
    if (!first2) {
      tmp81 = tmp73.mode === constants.IN_PANEL;
    }
    let tmp83 = pIPState;
    if (tmp71) {
      tmp83 = pIPState;
      if (tmp81) {
        tmp83 = tmp73;
      }
    }
    const tmp82Result = useVoicePanelDockPIPState(tmp6, tmp7, tmp83, tmp8.showStream, first2);
    const tmp15Result10 = tmp15(obj.useState(pIPState), 2);
    sharedValue = tmp4(1653).useSharedValue(0);
    noop = obj.useRef(false);
    const tmp15Result12 = tmp15(obj.useState(false), 2);
    first3 = tmp15Result12[0];
    onActivate = tmp92;
    let tmp93 = !tmp71;
    if (!tmp71) {
      tmp93 = first3;
    }
    if (tmp93) {
      tmp92(false);
    }
    const items14 = [tmp71, sharedValue];
    const effect2 = obj.useEffect(() => {
      if (c2) {
        const obj3 = timing_timing;
        items = [closure_19, _mod1706.scheduleOnRN, closure_6];
        c0 = undefined;
        c1 = undefined;
        [tmp21, tmp22, tmp23] = items;
        class VoicePanelDockPIPTsx1 {
          constructor(arg0) {
            if (arg0) {
              tmp = closure_0;
              tmp2 = closure_1;
              flag = true;
              tmp3 = closure_0(closure_1, true);
            }
            return;
          }
        }
        const items1 = [tmp22, tmp23];
        VoicePanelDockPIPTsx1.__closure = items1;
        VoicePanelDockPIPTsx1.__workletHash = 16103844528487;
        VoicePanelDockPIPTsx1.__initData = tmp21;
        const result = sharedValue.set(obj3.withTiming(0, DOCK_FADE_TIMING, "respect-motion-settings", VoicePanelDockPIPTsx1));
      } else {
        const withTimingResult = timing_timing.withTiming(1, DOCK_FADE_TIMING);
        let withDelayResult = withTimingResult;
        if (!onAction.current) {
          withDelayResult = _mod1653.withDelay(React5, withTimingResult);
        }
        const result1 = sharedValue.set(withDelayResult);
        onAction.current = true;
      }
    }, items14);
    const items15 = [tmp71, first3, panelLayoutCommitted, transitionCleanUp];
    const effect3 = obj.useEffect(() => {
      let tmp = c2;
      if (c2) {
        tmp = first3;
      }
      if (tmp) {
        tmp = c1;
      }
      if (tmp) {
        _undefined();
      }
    }, items15);
    const tmp4Result17 = tmp4(1653);
    const sharedValue1 = tmp4(1653).useSharedValue(1);
    const tmp4Result18 = tmp4(1653);
    const items16 = [closure_20, context.dockContentSwap];
    _require = undefined;
    [tmp100, tmp101] = items16;
    class VoicePanelDockPIPTsx2 {
      constructor() {
        return closure_0.get() > 0;
      }
    }
    const items17 = [tmp101];
    VoicePanelDockPIPTsx2.__closure = items17;
    VoicePanelDockPIPTsx2.__workletHash = 14999017166726;
    VoicePanelDockPIPTsx2.__initData = tmp100;
    const items18 = [closure_21, sharedValue1, tmp4(5123).withTiming, DOCK_FADE_TIMING];
    _require = undefined;
    importDefault = undefined;
    dependencyMap = undefined;
    [tmp105, tmp106, tmp107, tmp108] = items18;
    class VoicePanelDockPIPTsx3 {
      constructor(arg0, arg1) {
        tmp = null != arg1 && transitionCleanUp !== arg1;
        if (tmp) {
          num = 1;
          tmp2 = closure_0;
          tmp3 = closure_1;
          if (transitionCleanUp) {
            num = 0;
          }
          tmp4 = closure_2;
          result = closure_0.set(tmp3(num, closure_2));
        }
        return;
      }
    }
    const items19 = [tmp106, tmp107, tmp108];
    VoicePanelDockPIPTsx3.__closure = items19;
    VoicePanelDockPIPTsx3.__workletHash = 320681970324;
    VoicePanelDockPIPTsx3.__initData = tmp105;
    const animatedReaction = tmp4(1653).useAnimatedReaction(VoicePanelDockPIPTsx2, VoicePanelDockPIPTsx3);
    const tmp4Result19 = tmp4(1653);
    const items20 = [closure_22, sharedValue, sharedValue1];
    _require = undefined;
    importDefault = undefined;
    [tmp112, tmp113, tmp114] = items20;
    class VoicePanelDockPIPTsx4 {
      constructor() {
        value = closure_0.get();
        return value * closure_1.get();
      }
    }
    const items21 = [tmp113, tmp114];
    VoicePanelDockPIPTsx4.__closure = items21;
    VoicePanelDockPIPTsx4.__workletHash = 5225188298385;
    VoicePanelDockPIPTsx4.__initData = tmp112;
    const derivedValue = tmp4(1653).useDerivedValue(VoicePanelDockPIPTsx4);
    let obj8 = { value: tmp82Result, children: null };
    let tmp116;
    if (tmp82Result.mode !== constants.IN_PANEL) {
      if (!first2) {
        tmp116 = obj4;
      }
    }
    let obj9 = {};
    const merged = Object.assign(tmp116);
    obj9.opacity = derivedValue;
    obj8.children = closure_13(tmp4(19324).VoicePanelPIPTiles, obj9);
    return closure_13(tmp4(11759).VoicePanelPIPStateContext.Provider, obj8);
  } else {
    let intl = tmp4(1112).intl;
    tmp(3376);
    const tmpResult8 = { username: tmp44 };
    intl.formatToPlainString(tmp11 ? tmpResult8.w1cTI7 : tmpResult8["g9x8/M"], tmpResult8);
    const tmp45 = tmp11 ? tmpResult8.w1cTI7 : tmpResult8["g9x8/M"];
  }
  const tmp4Result12 = require("initialize");
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIP.tsx");

export default noop.memo(function VoicePanelDockPIPProvider() {
  const channelId = noop.useContext(channelId2(11749)).channelId;
  let tmp2 = channelId2(19320)(channelId);
  const tmp3 = channelId2(19322)(channelId);
  let id;
  channelId2 = undefined;
  const pIPState = id(11759).usePIPState();
  id = pIPState.id;
  channelId2 = noop.useContext(channelId2(11749)).channelId;
  let tmp6 = channelId2(19227)();
  const obj = id(11759);
  items = [ChannelRTCStore];
  const items1 = [channelId2, id];
  let stateFromStores = id(504).useStateFromStores(items, () => {
    let tmp2 = null != id;
    if (tmp2) {
      const participant = ChannelRTCStore.getParticipant(channelId2, tmp);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      tmp2 = type === ParticipantTypes.ACTIVITY;
    }
    return tmp2;
  }, items1);
  let tmp8 = pIPState.mode === constants.IN_APP;
  if (tmp8) {
    if (!stateFromStores) {
      if (tmp6) {
        tmp6 = null == tmp2.streamKey;
      }
      if (tmp6) {
        tmp6 = !tmp3;
      }
      stateFromStores = tmp6;
    }
    tmp8 = stateFromStores;
  }
  const obj2 = id(504);
  const tmp10 = useVoicePanelDockPIPState(tmp2, tmp3, id(11759).usePIPState(), tmp2.isWatching, tmp8);
  const obj3 = { value: tmp10, children: null };
  if (null != tmp10.mode) {
    const obj4 = { pipMode: tmp10.mode };
    const tmp12 = obj4;
  }
  obj3.children = closure_13(id(4974).TransitionItem, { item: tmp12, renderItem: renderVoicePanelDockPIP });
  return closure_13(id(11759).VoicePanelPIPStateContext.Provider, obj3);
});