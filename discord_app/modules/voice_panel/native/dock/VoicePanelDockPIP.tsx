// discord_app/modules/voice_panel/native/dock/VoicePanelDockPIP.tsx
import util from "../../../../intl/index.native.tsx";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import _modDef3205 from "VoicePanelDock.messages.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import toastUtils from "../../../../design/mana/components/Toast/toastUtils.native.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import ScreenIcon from "../../../../design/components/Icon/native/redesign/generated/ScreenIcon.tsx";
import EmbeddedActivitiesActionCreatorsAll from "../../../activities/EmbeddedActivitiesActionCreators.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import VoicePanelDockPIPOverlay from "VoicePanelDockPIPOverlay.tsx";
import VoicePanelDockActionCreators from "VoicePanelDockActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import FramesStore from "../../../frames/FramesStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function VoicePanelDockPIP(stream) {
  stream = stream.stream;
  _require = undefined;
  importDefault = undefined;
  let showControls;
  let streamKey;
  showVideo = undefined;
  let stateFromStores;
  c9 = undefined;
  let onMainTileTap;
  let callback2;
  let callback3;
  let name;
  let stateFromStores2;
  let callback4;
  ({ showVideo, exitOpacity } = stream);
  const voicePanelPIPStyles = require("VoicePanelPIP").useVoicePanelPIPStyles();
  const context = streamKey.useContext(require("VoicePanelStateContext"));
  const channelId = context.channelId;
  _require = channelId;
  const setMode = context.setMode;
  importDefault = setMode;
  const setFocused = context.setFocused;
  c2 = setFocused;
  showControls = context.showControls;
  ({ dockContentSwap, guildId } = context);
  let obj = require("VoicePanelPIP");
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  streamKey = stream.streamKey;
  ({ ownerId, isWatching, isConnecting } = stream);
  const tmp7 = require("useShowStreamWithTimeout")(stream);
  let showStream = tmp7.showStream;
  let tmp8 = null == streamKey;
  if (tmp8) {
    tmp8 = showVideo;
  }
  showVideo = tmp8;
  let tmp9 = tmp8;
  if (!tmp8) {
    tmp9 = showStream;
  }
  showStream = tmp9;
  let obj3 = require("VoicePanelPIPStateContext");
  items = [showStream];
  const items1 = [tmp8, channelId, pIPState.id];
  stateFromStores = ownerId;
  if (tmp8) {
    stateFromStores = tmpResult.useStateFromStores(
      items,
      () => {
        if (showVideo) {
          if (null != pIPState.id) {
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
      },
      items1,
    );
  }
  tmpResult = require("initialize");
  [HIDDEN, c9] = pIPState(
    streamKey.useState(require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.HIDDEN),
    2,
  );
  if (!tmp9) {
    HIDDEN = tmp(tmp2[20]).VoicePanelDockPIPOverlayModes.HIDDEN;
  }
  const tmp11 = pIPState(
    streamKey.useState(require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.HIDDEN),
    2,
  );
  const pIPTileHandoff = require("VoicePanelPIP").usePIPTileHandoff();
  const isMainPIPActive = pIPTileHandoff.isMainPIPActive;
  let tmp13 = isMainPIPActive;
  if (!isMainPIPActive) {
    tmp13 = !pIPTileHandoff.panelLayoutCommitted;
  }
  const items2 = [tmp9];
  onMainTileTap = obj2.useCallback(() => {
    if (showStream) {
      _undefined4((arg0) => {
        if (arg0 === _undefined(showControls[20]).VoicePanelDockPIPOverlayModes.HIDDEN) {
          let HIDDEN = _undefined(showControls[20]).VoicePanelDockPIPOverlayModes.CONTROLS;
        } else {
          HIDDEN = _undefined(showControls[20]).VoicePanelDockPIPOverlayModes.HIDDEN;
        }
        return HIDDEN;
      });
    }
  }, items2);
  const items3 = [tmp8, streamKey];
  const callback1 = obj2.useCallback(() => {
    _undefined4((arg0) => {
      if (arg0 === _undefined(showControls[20]).VoicePanelDockPIPOverlayModes.VOLUME) {
        let VOLUME = _undefined(showControls[20]).VoicePanelDockPIPOverlayModes.CONTROLS;
      } else {
        VOLUME = _undefined(showControls[20]).VoicePanelDockPIPOverlayModes.VOLUME;
      }
      return VOLUME;
    });
  }, []);
  callback2 = obj2.useCallback(() => {
    if (showVideo) {
      _undefined4(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      const result = VoicePanelDockActionCreators.dismissVoicePanelDockVideoPIP();
    } else if (null != streamKey) {
      _undefined4(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      StreamActionCreators.stopStream(tmp);
      const obj4 = { icon: ScreenIcon.ScreenIcon, text: null };
      const intl = util.intl;
      obj4.text = intl.string(_modDef3205.gLoosj);
      toastUtils.showToast(obj4);
    }
  }, items3);
  const items4 = [streamKey, setFocused, setMode, showControls];
  callback3 = obj2.useCallback(() => {
    _undefined4(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
    if (null != streamKey) {
      _undefined3(tmp2);
    }
    showControls();
    _undefined2(VoicePanelModes.PANEL);
  }, items4);
  const tmpResult10 = require("VoicePanelPIP");
  let tmp18 = tmp13;
  if (tmp13) {
    let cardArrivedInPIP = !isMainPIPActive;
    if (isMainPIPActive) {
      cardArrivedInPIP = pIPTileHandoff.cardArrivedInPIP;
    }
    tmp18 = cardArrivedInPIP;
  }
  const tmpResult11 = require("VoicePanelPIP");
  const pIPGesture = tmpResult11.usePIPGesture(pIPState.mode, tmp13, tmp18, {
    onMainTileTap,
    dragEnabled: HIDDEN !== require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.VOLUME,
    fadeInTiming: callback3,
  });
  ({
    pipWrapperStyles,
    containerStyles,
    mainPIPVisibilityStyles,
    mainPIPGesture,
    secondaryPIPGesture,
    containerGesture,
    gestureState,
  } = pIPGesture);
  let obj4 = {
    onMainTileTap,
    dragEnabled: HIDDEN !== require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.VOLUME,
    fadeInTiming: callback3,
  };
  const tmp19 = callback3;
  const pIPLayoutTransition = require("VoicePanelPIP").usePIPLayoutTransition(gestureState);
  const tmpResult12 = require("VoicePanelPIP");
  const items5 = [closure_21, require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius, pIPState];
  _require = undefined;
  importDefault = undefined;
  [tmp22, tmp23, tmp24] = items5;
  class VoicePanelDockPIPTsx1 {
    constructor() {
      obj = { borderRadius: closure_0(closure_1.width, closure_1.height) };
      return obj;
    }
  }
  const items6 = [tmp23, tmp24];
  VoicePanelDockPIPTsx1.__closure = items6;
  VoicePanelDockPIPTsx1.__workletHash = 7333687277052;
  VoicePanelDockPIPTsx1.__initData = tmp22;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelDockPIPTsx1);
  const tmpResult13 = require("../../../../../_runtime/metro/01652__.js");
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(1);
  const tmpResult14 = require("../../../../../_runtime/metro/01652__.js");
  const items7 = [closure_22, dockContentSwap];
  _require = undefined;
  [tmp27, tmp28] = items7;
  class VoicePanelDockPIPTsx2 {
    constructor() {
      return closure_0.get() > 0;
    }
  }
  const items8 = [tmp28];
  VoicePanelDockPIPTsx2.__closure = items8;
  VoicePanelDockPIPTsx2.__workletHash = 14999017166726;
  VoicePanelDockPIPTsx2.__initData = tmp27;
  const items9 = [closure_23, sharedValue, require("timing/timing").withTiming, tmp19];
  _require = undefined;
  importDefault = undefined;
  c2 = undefined;
  [tmp29, tmp30, tmp31, tmp32] = items9;
  class VoicePanelDockPIPTsx3 {
    constructor(arg0, arg1) {
      tmp = null != arg1 && stream !== arg1;
      if (tmp) {
        num = 1;
        tmp2 = closure_0;
        tmp3 = closure_1;
        if (stream) {
          num = 0;
        }
        tmp4 = closure_2;
        result = closure_0.set(tmp3(num, closure_2));
      }
      return;
    }
  }
  const items10 = [tmp30, tmp31, tmp32];
  VoicePanelDockPIPTsx3.__closure = items10;
  VoicePanelDockPIPTsx3.__workletHash = 320681970324;
  VoicePanelDockPIPTsx3.__initData = tmp29;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    VoicePanelDockPIPTsx2,
    VoicePanelDockPIPTsx3,
  );
  const tmpResult15 = require("../../../../../_runtime/metro/01652__.js");
  const items11 = [closure_24, exitOpacity, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp34, tmp35, tmp36] = items11;
  class VoicePanelDockPIPTsx4 {
    constructor() {
      obj = { opacity: null };
      value = closure_0.get();
      obj.opacity = value * closure_1.get();
      return obj;
    }
  }
  const items12 = [tmp35, tmp36];
  VoicePanelDockPIPTsx4.__closure = items12;
  VoicePanelDockPIPTsx4.__workletHash = 11406654493812;
  VoicePanelDockPIPTsx4.__initData = tmp34;
  const animatedStyle1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelDockPIPTsx4);
  const tmpResult16 = require("../../../../../_runtime/metro/01652__.js");
  const items13 = [c9];
  const items14 = [stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items13,
    () => UserStore.getUser(stateFromStores),
    items14,
  );
  const tmpResult17 = require("initialize");
  name = require("NicknameUtils").useName(guildId, channelId, stateFromStores1);
  const items15 = [tmp9, tmp8, stateFromStores, name, callback3, callback2, onMainTileTap];
  const memo = obj2.useMemo(() => {
    if (showStream) {
      if (null == stateFromStores) {
        const obj2 = {
          accessible: true,
          accessibilityRole: "button",
          accessibilityLabel: undefined,
          accessibilityHint: null,
          accessibilityActions: null,
          onAccessibilityAction: null,
        };
        const intl2 = util.intl;
        const tmp16 = _modDef3205;
        obj2.accessibilityHint = intl2.string(showVideo ? tmp16.qlWFBD : tmp16.IJMHj5);
        items = [{ name: "activate" }, ,];
        const obj3 = { name: openCall, label: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(_modDef3205.MPtef8);
        items[1] = obj3;
        const obj4 = { name: stopWatching, label: null };
        const intl4 = util.intl;
        const string = intl4.string;
        let cpT0Cq = util.t;
        if (showVideo) {
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
            callback3();
          } else if (stopWatching === actionName) {
            callback2();
          } else {
            onMainTileTap();
          }
        };
      } else {
        const intl = util.intl;
        const obj = { username: name };
        intl.formatToPlainString(showVideo ? obj.w1cTI7 : obj["g9x8/M"], obj);
        const tmp8 = showVideo ? obj.w1cTI7 : obj["g9x8/M"];
      }
    } else {
      return {};
    }
  }, items15);
  const tmp4Result = require("NicknameUtils");
  const items16 = [stateFromStores];
  stateFromStores2 = require("initialize").useStateFromStores(items16, () => {
    const mainFrame = stateFromStores.getMainFrame();
    let id = null;
    if (callback4(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items17 = [stateFromStores2];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores2) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items17);
  const items18 = [callback4];
  const memo1 = obj2.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
    items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = callback4;
    return obj;
  }, items18);
  const obj5 = { pointerEvents: "box-none", style: null, layout: pIPLayoutTransition, children: null };
  const items19 = [voicePanelPIPStyles.container, containerStyles];
  obj5.style = items19;
  const obj6 = { gesture: containerGesture, children: null };
  const obj7 = { pointerEvents: "box-none", style: null, layout: pIPLayoutTransition, children: null };
  const items20 = [voicePanelPIPStyles.multiPipContainer, animatedStyle1];
  obj7.style = items20;
  let tmp45Result = null;
  if (tmp13) {
    if (tmp8) {
      const obj8 = { style: null, pointerEvents: "box-none", layout: null, children: null };
      const items21 = [, , ,];
      ({ pipContentWrapper: arr22[0], inAppElevationShadow: arr22[1] } = voicePanelPIPStyles);
      items21[2] = pipWrapperStyles;
      items21[3] = mainPIPVisibilityStyles;
      obj8.style = items21;
      obj8.layout = pIPLayoutTransition;
      const obj9 = { gesture: mainPIPGesture, children: null };
      const obj10 = { style: null, layout: null };
      const items22 = [voicePanelPIPStyles.pipMask, animatedStyle];
      obj10.style = items22;
      obj10.layout = pIPLayoutTransition;
      const merged = Object.assign(memo);
      if (tmp8) {
        const obj11 = { layoutTransition: pIPLayoutTransition, onStreamReady: tmp7.onStreamReady };
        let tmp44Result = closure_16(tmp4(tmp2[33]), obj11);
      } else {
        tmp44Result = null;
      }
      obj10.children = tmp44Result;
      obj9.children = closure_16(tmp4(tmp2[27]).View, obj10);
      const items23 = [closure_16(tmp(tmp2[32]).GestureDetector, obj9), ,];
      let tmp44Result3 = null;
      if (!tmp8) {
        tmp44Result3 = null;
        if (null != ownerId) {
          const obj12 = { style: null, pointerEvents: "box-none", children: null };
          const items24 = [voicePanelPIPStyles.pipMask, animatedStyle];
          obj12.style = items24;
          const obj13 = { ownerId, streamKey, isConnecting: null, visible: null };
          if (!isConnecting) {
            isConnecting = isWatching;
          }
          obj13.isConnecting = isConnecting;
          obj13.visible = !showStream;
          obj12.children = closure_16(tmp4(tmp2[34]), obj13);
          tmp44Result3 = closure_16(tmp4(tmp2[27]).View, obj12);
          const tmp4Result4 = tmp4(tmp2[34]);
        }
      }
      items23[1] = tmp44Result3;
      let str = "stream";
      if (tmp8) {
        str = "video";
      }
      const obj14 = {
        kind: str,
        ownerId: stateFromStores,
        mode: HIDDEN,
        onToggleVolume: callback1,
        onStopWatching: callback2,
        onOpenCall: callback3,
      };
      items23[2] = closure_16(tmp4(tmp2[20]), obj14);
      obj8.children = items23;
      tmp45Result = closure_17(tmp4(tmp2[27]).View, obj8);
      const tmp4Result5 = tmp4(tmp2[20]);
    } else {
      tmp45Result = null;
    }
  }
  const items25 = [tmp45Result];
  let tmp44Result4 = null;
  if (pIPState.showSecondaryPIP) {
    const obj15 = { style: null };
    const items26 = [, ,];
    ({ pipContentWrapper: arr27[0], inAppElevationShadow: arr27[1] } = voicePanelPIPStyles);
    items26[2] = pipWrapperStyles;
    obj15.style = items26;
    const merged1 = Object.assign(memo1);
    const obj16 = { style: null, children: null };
    const items27 = [voicePanelPIPStyles.pipMask, animatedStyle];
    obj16.style = items27;
    const obj17 = { gesture: secondaryPIPGesture, children: null };
    const obj18 = { style: showVideo.absoluteFill, children: closure_16(tmp4(tmp2[36]), {}) };
    obj17.children = closure_16(tmp4(tmp2[35]), obj18);
    obj16.children = closure_16(tmp(tmp2[32]).GestureDetector, obj17);
    obj15.children = closure_16(tmp4(tmp2[27]).View, obj16);
    tmp44Result4 = closure_16(tmp4(tmp2[27]).View, obj15);
    const tmp4Result6 = tmp4(tmp2[35]);
  }
  items25[1] = tmp44Result4;
  obj7.children = items25;
  obj6.children = closure_17(require("../../../../../_runtime/metro/01652__.js").View, obj7);
  obj5.children = closure_16(require("LegacyBaseButton").GestureDetector, obj6);
  return closure_16(require("../../../../../_runtime/metro/01652__.js").View, obj5);
}
function renderVoicePanelDockPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  return closure_1_16(closure_27, { transitionState, transitionCleanUp }, arg0);
}
const StyleSheet = fn(17).StyleSheet;
const VoicePanelModes = fn(11919).VoicePanelModes;
const VoicePanelPIPModes = fn(19699).VoicePanelPIPModes;
const DOCK_FADE_TIMING = fn(11942).DOCK_FADE_TIMING;
const ActivityPanelModes = fn(5896).ActivityPanelModes;
const ParticipantTypes = fn(5920).ParticipantTypes;
const isLaunched = fn(6957).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let closure_18 = { width: 16, height: 9 };
const openCall = "openCall";
const stopWatching = "stopWatching";
let closure_21 = {
  code: "(function VoicePanelDockPIPTsx1(){let[getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})",
};
let closure_22 = {
  code: "(function VoicePanelDockPIPTsx2(){let[dockContentSwap]=this.__closure;return dockContentSwap.get()>0;})",
};
let closure_23 = {
  code: "(function VoicePanelDockPIPTsx3(isSwapped,wasSwapped){let[pullOpacity,withTiming,DOCK_FADE_TIMING]=this.__closure;if(wasSwapped==null||isSwapped===wasSwapped)return;pullOpacity.set(withTiming(isSwapped?0:1,DOCK_FADE_TIMING));})",
};
let closure_24 = {
  code: "(function VoicePanelDockPIPTsx4(){let[exitOpacity,pullOpacity]=this.__closure;return{opacity:exitOpacity.get()*pullOpacity.get()};})",
};
let closure_26 = {
  code: "(function VoicePanelDockPIPTsx5(finished){let[scheduleOnRN,setHasFadedOut]=this.__closure;if(finished){scheduleOnRN(setHasFadedOut,true);}})",
};
let closure_27 = noop.memo(function VoicePanelDockPIPWrapper(transitionCleanUp) {
  transitionCleanUp = transitionCleanUp.transitionCleanUp;
  let panelLayoutCommitted;
  let exitOpacity;
  let first;
  noop = undefined;
  const channelId = noop.useContext(panelLayoutCommitted(exitOpacity[14])).channelId;
  const stream = panelLayoutCommitted(exitOpacity[37])(channelId);
  const showVideo = panelLayoutCommitted(exitOpacity[38])(channelId);
  panelLayoutCommitted = transitionCleanUp(exitOpacity[17]).usePIPTileHandoff().panelLayoutCommitted;
  const tmp3 = transitionCleanUp.transitionState === transitionCleanUp(exitOpacity[39]).TransitionStates.YEETED;
  closure_2 = tmp3;
  const obj2 = transitionCleanUp(exitOpacity[17]);
  exitOpacity = transitionCleanUp(exitOpacity[27]).useSharedValue(1);
  const tmp5 = first(noop.useState(false), 2);
  first = tmp5[0];
  noop = tmp7;
  let tmp8 = !tmp3;
  if (!tmp3) {
    tmp8 = first;
  }
  if (tmp8) {
    tmp7(false);
  }
  items = [tmp3, exitOpacity];
  const effect = obj.useEffect(() => {
    const tmp2 = timing_timing;
    const withTiming = tmp2.withTiming;
    if (closure_2) {
      items = [closure_26, _mod1705.scheduleOnRN, closure_5];
      c0 = undefined;
      c1 = undefined;
      [tmp10, tmp11, tmp12] = items;
      class VoicePanelDockPIPTsx5 {
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
      const items1 = [tmp11, tmp12];
      VoicePanelDockPIPTsx5.__closure = items1;
      VoicePanelDockPIPTsx5.__workletHash = 17012667928419;
      VoicePanelDockPIPTsx5.__initData = tmp10;
      const result = set(withTiming(0, DOCK_FADE_TIMING, "respect-motion-settings", VoicePanelDockPIPTsx5));
    } else {
      const result1 = set(withTiming(1, DOCK_FADE_TIMING));
    }
  }, items);
  let items1 = [tmp3, first, panelLayoutCommitted, transitionCleanUp];
  const effect1 = obj.useEffect(() => {
    let tmp = closure_2;
    if (closure_2) {
      tmp = first;
    }
    if (tmp) {
      tmp = panelLayoutCommitted;
    }
    if (tmp) {
      transitionCleanUp();
    }
  }, items1);
  return closure_16(VoicePanelDockPIP, { stream, showVideo, exitOpacity });
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIP.tsx");

export default noop.memo(function VoicePanelDockPIPProvider() {
  const channelId = IN_APP.useContext(pIPState(11918)).channelId;
  const streamKey = pIPState(19909)(channelId).streamKey;
  pIPState = undefined;
  dependencyMap = undefined;
  IN_APP = undefined;
  let width;
  let height;
  let containerHeight;
  let obj = IN_APP;
  const tmp2 = pIPState(19909)(channelId);
  const tmp3 = pIPState(19911)(channelId);
  pIPState = streamKey(19788).usePIPState();
  const layoutManager = IN_APP.useContext(pIPState(11918)).layoutManager;
  const obj2 = streamKey(19788);
  [tmp7, c3] = IN_APP.useState(() => {
    let targetDimensions = layoutManager.getTargetDimensions(streamKey);
    if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
      targetDimensions = closure_18;
    }
    return targetDimensions;
  });
  items = [layoutManager, streamKey];
  const effect = IN_APP.useEffect(() => {
    _undefined((safeAreaState) => {
      let targetDimensions = closure_1_2.getTargetDimensions(closure_1_0);
      if (targetDimensions === closure_1_2.getDefaultTargetDimensions()) {
        targetDimensions = closure_2_18;
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
          targetDimensions = closure_2_18;
        }
        if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
          targetDimensions = safeAreaState;
        }
        return targetDimensions;
      });
    });
  }, items);
  _slicedToArray = tmp9;
  IN_APP = undefined;
  if (pIPState.mode === VoicePanelPIPModes.IN_APP) {
    if (null != streamKey) {
      IN_APP = VoicePanelPIPModes.IN_APP;
    }
  }
  const tmp6 = _slicedToArray(
    IN_APP.useState(() => {
      let targetDimensions = layoutManager.getTargetDimensions(streamKey);
      if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
        targetDimensions = closure_18;
      }
      return targetDimensions;
    }),
    2,
  );
  const size = streamKey(19698).computePIPSize(closure_18, false, false, pIPState.showSecondaryPIP);
  width = size.width;
  height = size.height;
  containerHeight = size.containerHeight;
  const items1 = [null == streamKey && tmp3, pIPState, streamKey, IN_APP, width, height, containerHeight];
  const memo = obj.useMemo(() => {
    const obj = {};
    const merged = Object.assign(pIPState);
    if (closure_4) {
      obj.mode = IN_APP;
      let tmp7 = obj;
    } else {
      obj.id = streamKey;
      obj.mode = IN_APP;
      obj.width = width;
      obj.height = height;
      obj.containerHeight = containerHeight;
      tmp7 = obj;
    }
    return tmp7;
  }, items1);
  const obj3 = { value: memo, children: null };
  if (null != memo.mode) {
    const obj4 = { pipMode: memo.mode };
    const tmp13 = obj4;
  }
  obj3.children = closure_16(streamKey(5314).TransitionItem, {
    item: tmp13,
    renderItem: renderVoicePanelDockPIPWrapper,
  });
  return closure_16(streamKey(19788).VoicePanelPIPStateContext.Provider, obj3);
});
