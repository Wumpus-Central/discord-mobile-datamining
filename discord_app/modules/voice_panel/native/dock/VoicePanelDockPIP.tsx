// === Module 20052: VoicePanelDockPIP ===

// Module 20052 (VoicePanelDockPIP)
import util from "util" /* 1113 */;
import _mod1655 from "module_1655" /* 1655 */;
import _mod1708 from "module_1708" /* 1708 */;
import _modDef3253 from "module_3253" /* 3253 */;
import timing_timing from "timing/timing" /* 5548 */;
import toastUtils from "toastUtils" /* 6016 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6351 */;
import StreamActionCreators from "StreamActionCreators" /* 6862 */;
import ScreenIcon from "ScreenIcon" /* 10467 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11984 */;
import VoicePanelDockPIPOverlay from "VoicePanelDockPIPOverlay" /* 20053 */;
import VoicePanelDockActionCreators from "VoicePanelDockActionCreators" /* 20055 */;
import useVoicePanelDockPIPStreamDefault from "useVoicePanelDockPIPStream" /* 20057 */;
import useShowVoicePanelDockVideoPIPDefault from "useShowVoicePanelDockVideoPIP" /* 20059 */;
import useShowStreamWithTimeoutDefault from "useShowStreamWithTimeout" /* 20060 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7016 */;
import UserStore from "UserStore" /* 1388 */;

const VoicePanelDockPIPOverlayDefault = VoicePanelDockPIPOverlay;

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
      targetDimensions = closure_15;
    }
    return targetDimensions;
  });
  items = [layoutManager, streamKey];
  const effect = noop.useEffect(() => {
    _undefined((safeAreaState) => {
      let targetDimensions = closure_1_2.getTargetDimensions(closure_1_0);
      if (targetDimensions === closure_1_2.getDefaultTargetDimensions()) {
        targetDimensions = closure_2_15;
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
          targetDimensions = closure_2_15;
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
      targetDimensions = closure_15;
    }
    return targetDimensions;
  }), 2);
  const size = streamKey(layoutManager[14]).computePIPSize(closure_15, false, false, tmp4Result.showSecondaryPIP);
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
function renderVoicePanelDockPIP(arg0, arg1, transitionState, transitionCleanUp) {
  return application_id(closure_23, { transitionState, transitionCleanUp }, arg0);
}
const VoicePanelModes = fn(11985).VoicePanelModes;
const VoicePanelPIPConstants = fn(19909);
({ PIP_FIRST_FRAME_DELAY_MS: closure_8, VoicePanelPIPModes: closure_9 } = VoicePanelPIPConstants);
const DOCK_FADE_TIMING = fn(12009).DOCK_FADE_TIMING;
const ParticipantTypes = fn(5983).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = { width: 16, height: 9 };
const openCall = "openCall";
const stopWatching = "stopWatching";
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
  let first1;
  closure_6 = undefined;
  const context = noop.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  const tmp6 = useVoicePanelDockPIPStreamDefault(channelId);
  const tmp7 = useShowVoicePanelDockVideoPIPDefault(channelId);
  let tmp8 = useShowStreamWithTimeoutDefault(tmp6);
  const showStream = tmp8.showStream;
  closure_129_7 = undefined;
  closure_129_8 = undefined;
  closure_129_9 = undefined;
  closure_129_10 = undefined;
  closure_129_11 = undefined;
  closure_129_12 = undefined;
  closure_129_13 = undefined;
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
  ({ ownerId, isWatching, isConnecting } = tmp6);
  closure_129_6 = tmp11;
  let tmp12 = tmp11;
  if (!(null == streamKey && tmp7)) {
    tmp12 = showStream;
  }
  closure_129_7 = tmp12;
  let obj3 = require("VoicePanelPIPStateContext");
  items = [first1];
  let items1 = [null == streamKey && tmp7, channelId2, pIPState1.id];
  let stateFromStores = ownerId;
  if (null == streamKey && tmp7) {
    stateFromStores = tmp4Result.useStateFromStores(items, () => {
      if (closure_6) {
        if (null != ref.id) {
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
  const tmp13 = first1;
  tmp4Result = require("initialize");
  [HIDDEN, closure_129_9] = sharedValue(noop.useState(require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  if (!tmp12) {
    HIDDEN = tmp4(20053).VoicePanelDockPIPOverlayModes.HIDDEN;
  }
  const items2 = [tmp12];
  const callback = obj.useCallback(() => {
    if (VoicePanelModes) {
      constants((arg0) => {
        if (arg0 === _undefined(_undefined3[15]).VoicePanelDockPIPOverlayModes.HIDDEN) {
          let HIDDEN = _undefined(_undefined3[15]).VoicePanelDockPIPOverlayModes.CONTROLS;
        } else {
          HIDDEN = _undefined(_undefined3[15]).VoicePanelDockPIPOverlayModes.HIDDEN;
        }
        return HIDDEN;
      });
    }
  }, items2);
  closure_129_10 = callback;
  const items3 = [null == streamKey && tmp7, streamKey];
  const callback1 = obj.useCallback(() => {
    constants((arg0) => {
      if (arg0 === _undefined(_undefined3[15]).VoicePanelDockPIPOverlayModes.VOLUME) {
        let VOLUME = _undefined(_undefined3[15]).VoicePanelDockPIPOverlayModes.CONTROLS;
      } else {
        VOLUME = _undefined(_undefined3[15]).VoicePanelDockPIPOverlayModes.VOLUME;
      }
      return VOLUME;
    });
  }, []);
  const callback2 = obj.useCallback(() => {
    if (closure_6) {
      constants(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      const result = VoicePanelDockActionCreators.dismissVoicePanelDockVideoPIP();
    } else if (null != first1) {
      constants(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      StreamActionCreators.stopStream(tmp);
      const obj4 = { icon: ScreenIcon.ScreenIcon, text: null };
      const intl = util.intl;
      obj4.text = intl.string(_modDef3253.gLoosj);
      toastUtils.showToast(obj4);
    }
  }, items3);
  closure_129_11 = callback2;
  const items4 = [streamKey, setFocused, setMode, showControls];
  const callback3 = obj.useCallback(() => {
    constants(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
    if (null != first1) {
      _undefined3(tmp2);
    }
    sharedValue();
    _undefined2(VoicePanelModes.PANEL);
  }, items4);
  closure_129_12 = callback3;
  let tmp16 = sharedValue(noop.useState(require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  const items5 = [closure_6];
  const items6 = [stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items5, () => UserStore.getUser(closure_1_8), items6);
  const tmp4Result9 = require("initialize");
  const name = NicknameUtilsDefault.useName(context1.guildId, channelId2, stateFromStores1);
  closure_129_13 = name;
  const items7 = [tmp12, null == streamKey && tmp7, stateFromStores, name, callback3, callback2, callback];
  let tmp24 = tmp11;
  const memo = obj.useMemo(() => {
    if (VoicePanelModes) {
      if (null == closure_1_8) {
        const obj2 = { accessible: true, accessibilityRole: "button", accessibilityLabel: undefined, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null };
        const intl2 = util.intl;
        const tmp16 = _modDef3253;
        obj2.accessibilityHint = intl2.string(closure_6 ? tmp16.qlWFBD : tmp16.IJMHj5);
        items = [{ name: "activate" }, , ];
        const obj3 = { name: openCall, label: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(_modDef3253.MPtef8);
        items[1] = obj3;
        const obj4 = { name: stopWatching, label: null };
        const intl4 = util.intl;
        const string = intl4.string;
        let cpT0Cq = util.t;
        if (closure_6) {
          cpT0Cq = cpT0Cq.cpT0Cq;
          let stringResult = string(cpT0Cq);
        } else {
          stringResult = string(cpT0Cq.q3O3J8);
        }
        obj4.label = stringResult;
        items[2] = obj4;
        obj2.accessibilityActions = items;
        obj2.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
          const actionName = nativeEvent.nativeEvent.actionName;
          if (openCall === actionName) {
            closure_1_12();
          } else if (stopWatching === actionName) {
            closure_1_11();
          } else {
            closure_1_10();
          }
        };
      } else {
        const intl = util.intl;
        const obj = { username };
        intl.formatToPlainString(closure_6 ? obj.w1cTI7 : obj["g9x8/M"], obj);
        const tmp8 = closure_6 ? obj.w1cTI7 : obj["g9x8/M"];
      }
    } else {
      return {};
    }
  }, items7);
  if (!(null == streamKey && tmp7)) {
    tmp24 = null != ownerId;
  }
  let obj4 = { hasTile: tmp24, showContent: null, mainTileAccessibilityProps: null, dragEnabled: null, resizeEnabled: null, onMainTileTap: null, onStreamReady: null, showPushToTalk: false, controlsOverlay: null };
  let tmp25 = tmp11;
  if (!(null == streamKey && tmp7)) {
    tmp25 = isWatching;
  }
  obj4.showContent = tmp25;
  obj4.mainTileAccessibilityProps = memo;
  obj4.dragEnabled = HIDDEN !== require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.VOLUME;
  obj4.resizeEnabled = tmp12;
  obj4.onMainTileTap = callback;
  obj4.onStreamReady = tmp8.onStreamReady;
  let tmp29Result = null;
  if (!(null == streamKey && tmp7)) {
    tmp29Result = null;
    if (null != ownerId) {
      const obj5 = { ownerId, streamKey, isConnecting: null, visible: null };
      if (!isConnecting) {
        isConnecting = isWatching;
      }
      obj5.isConnecting = isConnecting;
      obj5.visible = !showStream;
      tmp29Result = closure_12(tmp(20056), obj5);
      const tmpResult3 = tmp(20056);
    }
  }
  const items8 = [tmp29Result, ];
  let str = "stream";
  const tmpResult = NicknameUtilsDefault;
  if (null == streamKey && tmp7) {
    str = "video";
  }
  const obj6 = { children: null };
  items8[1] = closure_12(VoicePanelDockPIPOverlayDefault, { kind: str, ownerId: stateFromStores, mode: HIDDEN, onToggleVolume: callback1, onStopWatching: callback2, onOpenCall: callback3 });
  obj6.children = items8;
  obj4.controlsOverlay = closure_14(username, obj6);
  const tmpResult4 = VoicePanelDockPIPOverlayDefault;
  const pIPState2 = require("VoicePanelPIPStateContext").usePIPState();
  let id = pIPState2.id;
  closure_130_0 = id;
  const channelId3 = obj.useContext(tmp(11984)).channelId;
  closure_130_1 = channelId3;
  let tmp34 = tmp(19965)();
  const tmp4Result10 = require("VoicePanelPIPStateContext");
  const items9 = [tmp13];
  const items10 = [channelId3, id];
  let stateFromStores2 = require("initialize").useStateFromStores(items9, () => {
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
  }, items10);
  let tmp37 = pIPState2.mode === constants.IN_APP;
  if (tmp37) {
    if (!stateFromStores2) {
      if (tmp34) {
        tmp34 = null == tmp6.streamKey;
      }
      if (tmp34) {
        tmp34 = !tmp7;
      }
      stateFromStores2 = tmp34;
    }
    tmp37 = stateFromStores2;
  }
  const tmp4Result11 = require("initialize");
  const panelLayoutCommitted = require("VoicePanelPIP").usePIPTileHandoff().panelLayoutCommitted;
  importDefault = panelLayoutCommitted;
  const tmp38 = transitionCleanUp.transitionState === require("native").TransitionStates.YEETED;
  dependencyMap = tmp38;
  const tmp4Result12 = require("VoicePanelPIP");
  [tmp40, tmp41] = sharedValue(noop.useState(pIPState), 2);
  const tmp15Result3 = sharedValue(noop.useState(tmp37), 2);
  const first = tmp15Result3[0];
  let tmp44 = tmp38;
  if (!tmp38) {
    tmp44 = tmp40 === pIPState;
  }
  if (!tmp44) {
    tmp41(pIPState);
  }
  let tmp46 = tmp38;
  if (!tmp38) {
    tmp46 = first === tmp37;
  }
  if (!tmp46) {
    tmp15Result3[1](tmp37);
  }
  let tmp48 = first;
  if (!first) {
    tmp48 = tmp40.mode === constants.IN_PANEL;
  }
  let tmp50 = pIPState;
  if (tmp38) {
    tmp50 = pIPState;
    if (tmp48) {
      tmp50 = tmp40;
    }
  }
  const tmp49Result = useVoicePanelDockPIPState(tmp6, tmp7, tmp50, tmp8.showStream, first);
  const tmp15Result = sharedValue(noop.useState(pIPState), 2);
  sharedValue = require("module_1655").useSharedValue(0);
  noop = obj.useRef(false);
  const tmp15Result4 = sharedValue(noop.useState(false), 2);
  first1 = tmp15Result4[0];
  closure_6 = tmp55;
  let tmp56 = !tmp38;
  if (!tmp38) {
    tmp56 = first1;
  }
  if (tmp56) {
    tmp55(false);
  }
  const items11 = [tmp38, sharedValue];
  const effect = obj.useEffect(() => {
    if (c2) {
      const obj3 = timing_timing;
      items = [closure_19, _mod1708.scheduleOnRN, closure_6];
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
      if (!ref.current) {
        withDelayResult = _mod1655.withDelay(React5, withTimingResult);
      }
      const result1 = sharedValue.set(withDelayResult);
      ref.current = true;
    }
  }, items11);
  const items12 = [tmp38, first1, panelLayoutCommitted, transitionCleanUp];
  const effect1 = obj.useEffect(() => {
    let tmp = c2;
    if (c2) {
      tmp = first1;
    }
    if (tmp) {
      tmp = c1;
    }
    if (tmp) {
      _undefined();
    }
  }, items12);
  const tmp4Result13 = require("module_1655");
  const sharedValue1 = require("module_1655").useSharedValue(1);
  const tmp4Result14 = require("module_1655");
  const items13 = [closure_20, context.dockContentSwap];
  _require = undefined;
  [tmp61, tmp62] = items13;
  class VoicePanelDockPIPTsx2 {
    constructor() {
      return closure_0.get() > 0;
    }
  }
  const items14 = [tmp62];
  VoicePanelDockPIPTsx2.__closure = items14;
  VoicePanelDockPIPTsx2.__workletHash = 14999017166726;
  VoicePanelDockPIPTsx2.__initData = tmp61;
  const items15 = [closure_21, sharedValue1, require("timing/timing").withTiming, DOCK_FADE_TIMING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp63, tmp64, tmp65, tmp66] = items15;
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
  const items16 = [tmp64, tmp65, tmp66];
  VoicePanelDockPIPTsx3.__closure = items16;
  VoicePanelDockPIPTsx3.__workletHash = 320681970324;
  VoicePanelDockPIPTsx3.__initData = tmp63;
  const animatedReaction = require("module_1655").useAnimatedReaction(VoicePanelDockPIPTsx2, VoicePanelDockPIPTsx3);
  const tmp4Result15 = require("module_1655");
  const items17 = [closure_22, sharedValue, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp68, tmp69, tmp70] = items17;
  class VoicePanelDockPIPTsx4 {
    constructor() {
      value = closure_0.get();
      return value * closure_1.get();
    }
  }
  const items18 = [tmp69, tmp70];
  VoicePanelDockPIPTsx4.__closure = items18;
  VoicePanelDockPIPTsx4.__workletHash = 5225188298385;
  VoicePanelDockPIPTsx4.__initData = tmp68;
  const derivedValue = require("module_1655").useDerivedValue(VoicePanelDockPIPTsx4);
  const obj7 = { value: tmp49Result, children: null };
  let tmp72;
  if (tmp49Result.mode !== constants.IN_PANEL) {
    if (!first) {
      tmp72 = obj4;
    }
  }
  const obj8 = {};
  const merged = Object.assign(tmp72);
  obj8.opacity = derivedValue;
  obj7.children = closure_12(require("VoicePanelPIP").VoicePanelPIPTiles, obj8);
  return closure_12(require("VoicePanelPIPStateContext").VoicePanelPIPStateContext.Provider, obj7);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIP.tsx");

export default noop.memo(function VoicePanelDockPIPProvider() {
  const channelId = noop.useContext(channelId2(11984)).channelId;
  let tmp2 = channelId2(20057)(channelId);
  const tmp3 = channelId2(20059)(channelId);
  let id;
  channelId2 = undefined;
  const pIPState = id(11995).usePIPState();
  id = pIPState.id;
  channelId2 = noop.useContext(channelId2(11984)).channelId;
  let tmp6 = channelId2(19965)();
  const obj = id(11995);
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
  const tmp10 = useVoicePanelDockPIPState(tmp2, tmp3, id(11995).usePIPState(), tmp2.isWatching, tmp8);
  const obj3 = { value: tmp10, children: null };
  if (null != tmp10.mode) {
    const obj4 = { pipMode: tmp10.mode };
    const tmp12 = obj4;
  }
  obj3.children = closure_12(id(5377).TransitionItem, { item: tmp12, renderItem: renderVoicePanelDockPIP });
  return closure_12(id(11995).VoicePanelPIPStateContext.Provider, obj3);
});