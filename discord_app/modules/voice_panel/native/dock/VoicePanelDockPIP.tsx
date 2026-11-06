// === Module 19594: VoicePanelDockPIP ===

// Module 19594 (VoicePanelDockPIP)
import util from "util" /* 1113 */;
import _modDef3184 from "module_3184" /* 3184 */;
import native from "native" /* 5229 */;
import toastUtils from "toastUtils" /* 5868 */;
import StreamActionCreators from "StreamActionCreators" /* 8000 */;
import ScreenIcon from "ScreenIcon" /* 9693 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11076 */;
import EmbeddedActivitiesActionCreatorsAll from "EmbeddedActivitiesActionCreators" /* 11898 */;
import VoicePanelDockPIPOverlay from "VoicePanelDockPIPOverlay" /* 19604 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 6926 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function VoicePanelDockPIP(stream) {
  stream = stream.stream;
  _require = undefined;
  importDefault = undefined;
  let streamKey;
  let showStream;
  StyleSheet = undefined;
  let onMainTileTap;
  let callback2;
  let callback3;
  let name;
  let stateFromStores1;
  let callback4;
  const voicePanelPIPStyles = require("VoicePanelPIP").useVoicePanelPIPStyles();
  const context = showStream.useContext(require("VoicePanelStateContext"));
  const setMode = context.setMode;
  _require = setMode;
  const setFocused = context.setFocused;
  importDefault = setFocused;
  const showControls = context.showControls;
  ({ channelId, guildId } = context);
  let obj = require("VoicePanelPIP");
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  streamKey = stream.streamKey;
  const ownerId = stream.ownerId;
  ({ isWatching, isConnecting } = stream);
  const tmp7 = require("useShowStreamWithTimeout")(stream);
  showStream = tmp7.showStream;
  let obj3 = require("VoicePanelPIPStateContext");
  [HIDDEN, c6] = ownerId(showStream.useState(require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  if (!showStream) {
    HIDDEN = tmp(tmp2[16]).VoicePanelDockPIPOverlayModes.HIDDEN;
  }
  const tmp8 = ownerId(showStream.useState(require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.HIDDEN), 2);
  const pIPTileHandoff = require("VoicePanelPIP").usePIPTileHandoff();
  const isMainPIPActive = pIPTileHandoff.isMainPIPActive;
  let tmp10 = isMainPIPActive;
  if (!isMainPIPActive) {
    tmp10 = !pIPTileHandoff.panelLayoutCommitted;
  }
  items = [showStream];
  onMainTileTap = obj2.useCallback(() => {
    if (showStream) {
      _undefined3((arg0) => {
        if (arg0 === _undefined(streamKey[16]).VoicePanelDockPIPOverlayModes.HIDDEN) {
          let HIDDEN = _undefined(streamKey[16]).VoicePanelDockPIPOverlayModes.CONTROLS;
        } else {
          HIDDEN = _undefined(streamKey[16]).VoicePanelDockPIPOverlayModes.HIDDEN;
        }
        return HIDDEN;
      });
    }
  }, items);
  const items1 = [streamKey];
  const callback1 = obj2.useCallback(() => {
    _undefined3((arg0) => {
      if (arg0 === _undefined(streamKey[16]).VoicePanelDockPIPOverlayModes.VOLUME) {
        let VOLUME = _undefined(streamKey[16]).VoicePanelDockPIPOverlayModes.CONTROLS;
      } else {
        VOLUME = _undefined(streamKey[16]).VoicePanelDockPIPOverlayModes.VOLUME;
      }
      return VOLUME;
    });
  }, []);
  callback2 = obj2.useCallback(() => {
    if (null != streamKey) {
      _undefined3(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      StreamActionCreators.stopStream(tmp);
      const obj3 = { icon: ScreenIcon.ScreenIcon, text: null };
      const intl = util.intl;
      obj3.text = intl.string(_modDef3184.gLoosj);
      toastUtils.showToast(obj3);
    }
  }, items1);
  const items2 = [streamKey, setFocused, setMode, showControls];
  callback3 = obj2.useCallback(() => {
    _undefined3(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
    if (null != streamKey) {
      _undefined2(tmp2);
    }
    showControls();
    _undefined(VoicePanelModes.PANEL);
  }, items2);
  const tmpResult = require("VoicePanelPIP");
  let tmp15 = tmp10;
  if (tmp10) {
    let cardArrivedInPIP = !isMainPIPActive;
    if (isMainPIPActive) {
      cardArrivedInPIP = pIPTileHandoff.cardArrivedInPIP;
    }
    tmp15 = cardArrivedInPIP;
  }
  const tmpResult6 = require("VoicePanelPIP");
  const pIPGesture = tmpResult6.usePIPGesture(pIPState.mode, tmp10, tmp15, { onMainTileTap, dragEnabled: HIDDEN !== require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.VOLUME });
  ({ pipWrapperStyles, containerStyles, mainPIPVisibilityStyles, mainPIPGesture, secondaryPIPGesture, containerGesture, gestureState } = pIPGesture);
  let obj4 = { onMainTileTap, dragEnabled: HIDDEN !== require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.VOLUME };
  const pIPLayoutTransition = require("VoicePanelPIP").usePIPLayoutTransition(gestureState);
  const tmpResult7 = require("VoicePanelPIP");
  const items3 = [closure_18, require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius, pIPState];
  _require = undefined;
  importDefault = undefined;
  [tmp18, tmp19, tmp20] = items3;
  class VoicePanelDockPIPTsx1 {
    constructor() {
      obj = { borderRadius: closure_0(closure_1.width, closure_1.height) };
      return obj;
    }
  }
  const items4 = [tmp19, tmp20];
  VoicePanelDockPIPTsx1.__closure = items4;
  VoicePanelDockPIPTsx1.__workletHash = 7333687277052;
  VoicePanelDockPIPTsx1.__initData = tmp18;
  const animatedStyle = require("module_1652").useAnimatedStyle(VoicePanelDockPIPTsx1);
  const tmpResult8 = require("module_1652");
  const items5 = [callback2];
  const items6 = [ownerId];
  const stateFromStores = require("initialize").useStateFromStores(items5, () => UserStore.getUser(ownerId), items6);
  const tmpResult9 = require("initialize");
  name = require("NicknameUtils").useName(guildId, channelId, stateFromStores);
  const items7 = [showStream, ownerId, name, callback3, callback2, onMainTileTap];
  const memo = obj2.useMemo(() => {
    if (showStream) {
      let formatToPlainStringResult;
      if (null != ownerId) {
        const intl = util.intl;
        const obj2 = { username: name };
        formatToPlainStringResult = intl.formatToPlainString(_modDef3184["g9x8/M"], obj2);
      }
      const obj3 = { accessible: true, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null };
      const intl2 = util.intl;
      obj3.accessibilityHint = intl2.string(_modDef3184.IJMHj5);
      items = [{ name: "activate" }, , ];
      const obj4 = { name: openCall, label: null };
      const intl3 = util.intl;
      obj4.label = intl3.string(_modDef3184.MPtef8);
      items[1] = obj4;
      const obj5 = { name: stopWatching, label: null };
      const intl4 = util.intl;
      obj5.label = intl4.string(util.t.q3O3J8);
      items[2] = obj5;
      obj3.accessibilityActions = items;
      obj3.onAccessibilityAction = function onAccessibilityAction(nativeEvent) {
        const actionName = nativeEvent.nativeEvent.actionName;
        if (openCall === actionName) {
          callback3();
        } else if (stopWatching === actionName) {
          callback2();
        } else {
          onMainTileTap();
        }
      };
      let obj = obj3;
    } else {
      obj = {};
    }
    return obj;
  }, items7);
  const tmp4Result = require("NicknameUtils");
  const items8 = [onMainTileTap];
  stateFromStores1 = require("initialize").useStateFromStores(items8, () => {
    const mainFrame = callback.getMainFrame();
    let id = null;
    if (callback4(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items9 = [stateFromStores1];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores1) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items9);
  const items10 = [callback4];
  const memo1 = obj2.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
    items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = callback4;
    return obj;
  }, items10);
  let obj5 = { pointerEvents: "box-none", style: null, layout: pIPLayoutTransition, children: null };
  const items11 = [voicePanelPIPStyles.container, containerStyles];
  obj5.style = items11;
  const obj6 = { gesture: containerGesture, children: null };
  const obj7 = { pointerEvents: "box-none", style: voicePanelPIPStyles.multiPipContainer, layout: pIPLayoutTransition, children: null };
  let tmp29Result = null;
  if (tmp10) {
    tmp29Result = null;
    if (null != ownerId) {
      const obj8 = { style: null, pointerEvents: "box-none", layout: null, children: null };
      const items12 = [, , , ];
      ({ pipContentWrapper: arr13[0], inAppElevationShadow: arr13[1] } = voicePanelPIPStyles);
      items12[2] = pipWrapperStyles;
      items12[3] = mainPIPVisibilityStyles;
      obj8.style = items12;
      obj8.layout = pIPLayoutTransition;
      const obj9 = { gesture: mainPIPGesture, children: null };
      const obj10 = { style: null, layout: null };
      const items13 = [voicePanelPIPStyles.pipMask, animatedStyle];
      obj10.style = items13;
      obj10.layout = pIPLayoutTransition;
      const merged = Object.assign(memo);
      let tmp28Result = null;
      if (isWatching) {
        const obj11 = { layoutTransition: pIPLayoutTransition, onStreamReady: tmp7.onStreamReady };
        tmp28Result = closure_13(tmp4(tmp2[28]), obj11);
      }
      obj10.children = tmp28Result;
      obj9.children = closure_13(tmp4(tmp2[22]).View, obj10);
      const items14 = [closure_13(tmp(tmp2[27]).GestureDetector, obj9), , ];
      const obj12 = { style: null, pointerEvents: "box-none", children: null };
      const items15 = [voicePanelPIPStyles.pipMask, animatedStyle];
      obj12.style = items15;
      const obj13 = { ownerId, streamKey, isConnecting: null, visible: null };
      if (!isConnecting) {
        isConnecting = isWatching;
      }
      obj13.isConnecting = isConnecting;
      obj13.visible = !showStream;
      obj12.children = closure_13(tmp4(tmp2[29]), obj13);
      items14[1] = closure_13(tmp4(tmp2[22]).View, obj12);
      const obj14 = { ownerId, mode: HIDDEN, onToggleVolume: callback1, onStopWatching: callback2, onOpenCall: callback3 };
      items14[2] = closure_13(tmp4(tmp2[16]), obj14);
      obj8.children = items14;
      tmp29Result = closure_14(tmp4(tmp2[22]).View, obj8);
      const tmp4Result3 = tmp4(tmp2[29]);
    }
  }
  const items16 = [tmp29Result, ];
  let tmp28Result2 = null;
  if (pIPState.showSecondaryPIP) {
    const obj15 = { style: null };
    const items17 = [, , ];
    ({ pipContentWrapper: arr18[0], inAppElevationShadow: arr18[1] } = voicePanelPIPStyles);
    items17[2] = pipWrapperStyles;
    obj15.style = items17;
    const merged1 = Object.assign(memo1);
    const obj16 = { style: null, children: null };
    const items18 = [voicePanelPIPStyles.pipMask, animatedStyle];
    obj16.style = items18;
    const obj17 = { gesture: secondaryPIPGesture, children: null };
    const obj18 = { style: StyleSheet.absoluteFill, children: closure_13(tmp4(tmp2[31]), {}) };
    obj17.children = closure_13(tmp4(tmp2[30]), obj18);
    obj16.children = closure_13(tmp(tmp2[27]).GestureDetector, obj17);
    obj15.children = closure_13(tmp4(tmp2[22]).View, obj16);
    tmp28Result2 = closure_13(tmp4(tmp2[22]).View, obj15);
    const tmp4Result4 = tmp4(tmp2[30]);
  }
  items16[1] = tmp28Result2;
  obj7.children = items16;
  obj6.children = closure_14(require("module_1652").View, obj7);
  obj5.children = closure_13(require("LegacyBaseButton").GestureDetector, obj6);
  return closure_13(require("module_1652").View, obj5);
}
function renderVoicePanelDockPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  return state(closure_20, { transitionState, transitionCleanUp }, arg0);
}
let StyleSheet = fn(17).StyleSheet;
const VoicePanelModes = fn(11381).VoicePanelModes;
const VoicePanelPIPModes = fn(19414).VoicePanelPIPModes;
const ActivityPanelModes = fn(5811).ActivityPanelModes;
const isLaunched = fn(6927).isLaunched;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = { width: 16, height: 9 };
const openCall = "openCall";
const stopWatching = "stopWatching";
let closure_18 = { code: "(function VoicePanelDockPIPTsx1(){let[getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})" };
let closure_20 = noop.memo(function VoicePanelDockPIPWrapper(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const stream = transitionCleanUp(19608)(noop.useContext(transitionCleanUp(11380)).channelId);
  const panelLayoutCommitted = transitionState(19595).usePIPTileHandoff().panelLayoutCommitted;
  items = [transitionState, panelLayoutCommitted, transitionCleanUp];
  const effect = noop.useEffect(() => {
    if (tmp) {
      transitionCleanUp();
    }
    tmp = transitionState === native.TransitionStates.YEETED && panelLayoutCommitted;
  }, items);
  return closure_13(VoicePanelDockPIP, { stream });
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIP.tsx");

export default noop.memo(function VoicePanelDockPIPProvider() {
  const streamKey = pIPState(19608)(width.useContext(pIPState(11380)).channelId).streamKey;
  pIPState = undefined;
  dependencyMap = undefined;
  let IN_APP;
  width = undefined;
  let height;
  let containerHeight;
  let obj = width;
  const tmp2 = pIPState(19608)(width.useContext(pIPState(11380)).channelId);
  pIPState = streamKey(19503).usePIPState();
  const layoutManager = width.useContext(pIPState(11380)).layoutManager;
  const obj2 = streamKey(19503);
  [tmp6, c3] = IN_APP(width.useState(() => {
    let targetDimensions = layoutManager.getTargetDimensions(streamKey);
    if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
      targetDimensions = closure_15;
    }
    return targetDimensions;
  }), 2);
  items = [layoutManager, streamKey];
  const effect = width.useEffect(() => {
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
      dependencyMap((safeAreaState) => {
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
  IN_APP = undefined;
  if (pIPState.mode === VoicePanelPIPModes.IN_APP) {
    if (null != streamKey) {
      IN_APP = tmp8.IN_APP;
    }
  }
  const tmp5 = IN_APP(width.useState(() => {
    let targetDimensions = layoutManager.getTargetDimensions(streamKey);
    if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
      targetDimensions = closure_15;
    }
    return targetDimensions;
  }), 2);
  const size = streamKey(19413).computePIPSize(closure_15, false, false, pIPState.showSecondaryPIP);
  width = size.width;
  height = size.height;
  containerHeight = size.containerHeight;
  const items1 = [pIPState, streamKey, IN_APP, width, height, containerHeight];
  const memo = obj.useMemo(() => {
    const obj = {};
    const merged = Object.assign(pIPState);
    obj.id = streamKey;
    obj.mode = IN_APP;
    obj.width = width;
    obj.height = height;
    obj.containerHeight = containerHeight;
    return obj;
  }, items1);
  const obj3 = { value: memo, children: null };
  if (null != memo.mode) {
    const obj4 = { pipMode: memo.mode };
    const tmp13 = obj4;
  }
  obj3.children = closure_13(streamKey(5229).TransitionItem, { item: tmp13, renderItem: renderVoicePanelDockPIPWrapper });
  return closure_13(streamKey(19503).VoicePanelPIPStateContext.Provider, obj3);
});