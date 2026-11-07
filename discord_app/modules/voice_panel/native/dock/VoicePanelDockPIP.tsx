// discord_app/modules/voice_panel/native/dock/VoicePanelDockPIP.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3184 from "VoicePanelDock.messages.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import toastUtils from "../../../../design/mana/components/Toast/toastUtils.native.tsx";
import StreamActionCreators from "../../../../actions/StreamActionCreators.tsx";
import ScreenIcon from "../../../../design/components/Icon/native/redesign/generated/ScreenIcon.tsx";
import FramesActionCreatorsDefault from "../../../frames/FramesActionCreators.native.tsx";
import EmbeddedActivitiesActionCreatorsAll from "../../../activities/EmbeddedActivitiesActionCreators.tsx";
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
  let stateFromStores;
  c9 = undefined;
  let onMainTileTap;
  let callback2;
  let callback3;
  let name;
  let stateFromStores2;
  let callback4;
  const voicePanelPIPStyles = require("VoicePanelPIP").useVoicePanelPIPStyles();
  const context = streamKey.useContext(require("VoicePanelStateContext"));
  const channelId = context.channelId;
  _require = channelId;
  const setMode = context.setMode;
  importDefault = setMode;
  const setFocused = context.setFocused;
  showControls = context.showControls;
  let obj = require("VoicePanelPIP");
  const pIPState = require("VoicePanelPIPStateContext").usePIPState();
  streamKey = stream.streamKey;
  ({ ownerId, isWatching, isConnecting } = stream);
  const tmp7 = require("useShowStreamWithTimeout")(stream);
  let showStream = tmp7.showStream;
  let showVideo = null == streamKey;
  if (showVideo) {
    showVideo = stream.showVideo;
  }
  let tmp8 = showVideo;
  if (!showVideo) {
    tmp8 = showStream;
  }
  showStream = tmp8;
  let obj3 = require("VoicePanelPIPStateContext");
  items = [showStream];
  const items1 = [showVideo, channelId, pIPState.id];
  stateFromStores = ownerId;
  if (showVideo) {
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
  if (!tmp8) {
    HIDDEN = tmp(tmp2[19]).VoicePanelDockPIPOverlayModes.HIDDEN;
  }
  const tmp10 = pIPState(
    streamKey.useState(require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.HIDDEN),
    2,
  );
  const pIPTileHandoff = require("VoicePanelPIP").usePIPTileHandoff();
  const isMainPIPActive = pIPTileHandoff.isMainPIPActive;
  let tmp12 = isMainPIPActive;
  if (!isMainPIPActive) {
    tmp12 = !pIPTileHandoff.panelLayoutCommitted;
  }
  const items2 = [tmp8];
  onMainTileTap = obj2.useCallback(() => {
    if (showStream) {
      _undefined3((arg0) => {
        if (arg0 === _undefined(showControls[19]).VoicePanelDockPIPOverlayModes.HIDDEN) {
          let HIDDEN = _undefined(showControls[19]).VoicePanelDockPIPOverlayModes.CONTROLS;
        } else {
          HIDDEN = _undefined(showControls[19]).VoicePanelDockPIPOverlayModes.HIDDEN;
        }
        return HIDDEN;
      });
    }
  }, items2);
  const items3 = [showVideo, streamKey];
  const callback1 = obj2.useCallback(() => {
    _undefined3((arg0) => {
      if (arg0 === _undefined(showControls[19]).VoicePanelDockPIPOverlayModes.VOLUME) {
        let VOLUME = _undefined(showControls[19]).VoicePanelDockPIPOverlayModes.CONTROLS;
      } else {
        VOLUME = _undefined(showControls[19]).VoicePanelDockPIPOverlayModes.VOLUME;
      }
      return VOLUME;
    });
  }, []);
  callback2 = obj2.useCallback(() => {
    if (showVideo) {
      _undefined3(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      const result = VoicePanelDockActionCreators.dismissVoicePanelDockVideoPIP();
    } else if (null != streamKey) {
      _undefined3(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
      StreamActionCreators.stopStream(tmp);
      const obj4 = { icon: ScreenIcon.ScreenIcon, text: null };
      const intl = util.intl;
      obj4.text = intl.string(_modDef3184.gLoosj);
      toastUtils.showToast(obj4);
    }
  }, items3);
  const items4 = [streamKey, setFocused, setMode, showControls];
  callback3 = obj2.useCallback(() => {
    _undefined3(VoicePanelDockPIPOverlay.VoicePanelDockPIPOverlayModes.HIDDEN);
    if (null != streamKey) {
      setFocused(tmp2);
    }
    showControls();
    _undefined2(VoicePanelModes.PANEL);
  }, items4);
  const tmpResult7 = require("VoicePanelPIP");
  let tmp17 = tmp12;
  if (tmp12) {
    let cardArrivedInPIP = !isMainPIPActive;
    if (isMainPIPActive) {
      cardArrivedInPIP = pIPTileHandoff.cardArrivedInPIP;
    }
    tmp17 = cardArrivedInPIP;
  }
  const tmpResult8 = require("VoicePanelPIP");
  const pIPGesture = tmpResult8.usePIPGesture(pIPState.mode, tmp12, tmp17, {
    onMainTileTap,
    dragEnabled: HIDDEN !== require("VoicePanelDockPIPOverlay").VoicePanelDockPIPOverlayModes.VOLUME,
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
  };
  const pIPLayoutTransition = require("VoicePanelPIP").usePIPLayoutTransition(gestureState);
  const tmpResult9 = require("VoicePanelPIP");
  const items5 = [closure_20, require("VoicePanelPIPUtils").getVoicePanelPIPBorderRadius, pIPState];
  _require = undefined;
  importDefault = undefined;
  [tmp20, tmp21, tmp22] = items5;
  class VoicePanelDockPIPTsx1 {
    constructor() {
      obj = { borderRadius: closure_0(closure_1.width, closure_1.height) };
      return obj;
    }
  }
  const items6 = [tmp21, tmp22];
  VoicePanelDockPIPTsx1.__closure = items6;
  VoicePanelDockPIPTsx1.__workletHash = 7333687277052;
  VoicePanelDockPIPTsx1.__initData = tmp20;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(VoicePanelDockPIPTsx1);
  const tmpResult10 = require("../../../../../_runtime/metro/01652__.js");
  const items7 = [c9];
  const items8 = [stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items7,
    () => UserStore.getUser(stateFromStores),
    items8,
  );
  const tmpResult11 = require("initialize");
  name = require("NicknameUtils").useName(context.guildId, channelId, stateFromStores1);
  const items9 = [tmp8, showVideo, stateFromStores, name, callback3, callback2, onMainTileTap];
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
        const tmp16 = _modDef3184;
        obj2.accessibilityHint = intl2.string(showVideo ? tmp16.qlWFBD : tmp16.IJMHj5);
        items = [{ name: "activate" }, ,];
        const obj3 = { name: openCall, label: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(_modDef3184.MPtef8);
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
  }, items9);
  const tmp4Result = require("NicknameUtils");
  const items10 = [stateFromStores];
  stateFromStores2 = require("initialize").useStateFromStores(items10, () => {
    const mainFrame = stateFromStores.getMainFrame();
    let id = null;
    if (stateFromStores2(mainFrame)) {
      id = mainFrame.id;
    }
    return id;
  });
  const items11 = [stateFromStores2];
  callback4 = obj2.useCallback(() => {
    if (null != stateFromStores2) {
      FramesActionCreatorsDefault.updateFramePanelMode(tmp, ActivityPanelModes.PANEL);
    } else {
      const result = EmbeddedActivitiesActionCreatorsAll.updateActivityPanelMode(ActivityPanelModes.PANEL);
    }
  }, items11);
  const items12 = [callback4];
  const memo1 = obj2.useMemo(() => {
    const obj = { accessible: true, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t["3ejJer"]);
    items = [{ name: "activate" }];
    obj.accessibilityActions = items;
    obj.onAccessibilityAction = callback4;
    return obj;
  }, items12);
  const obj5 = { pointerEvents: "box-none", style: null, layout: pIPLayoutTransition, children: null };
  const items13 = [voicePanelPIPStyles.container, containerStyles];
  obj5.style = items13;
  const obj6 = { gesture: containerGesture, children: null };
  const obj7 = {
    pointerEvents: "box-none",
    style: voicePanelPIPStyles.multiPipContainer,
    layout: pIPLayoutTransition,
    children: null,
  };
  let tmp31Result = null;
  if (tmp12) {
    if (showVideo) {
      const obj8 = { style: null, pointerEvents: "box-none", layout: null, children: null };
      const items14 = [, , ,];
      ({ pipContentWrapper: arr15[0], inAppElevationShadow: arr15[1] } = voicePanelPIPStyles);
      items14[2] = pipWrapperStyles;
      items14[3] = mainPIPVisibilityStyles;
      obj8.style = items14;
      obj8.layout = pIPLayoutTransition;
      const obj9 = { gesture: mainPIPGesture, children: null };
      const obj10 = { style: null, layout: null };
      const items15 = [voicePanelPIPStyles.pipMask, animatedStyle];
      obj10.style = items15;
      obj10.layout = pIPLayoutTransition;
      const merged = Object.assign(memo);
      if (showVideo) {
        const obj11 = { layoutTransition: pIPLayoutTransition, onStreamReady: tmp7.onStreamReady };
        let tmp30Result = tmp30(tmp4(tmp2[31]), obj11);
      } else {
        tmp30Result = null;
      }
      obj10.children = tmp30Result;
      obj9.children = tmp30(tmp4(tmp2[26]).View, obj10);
      const items16 = [tmp30(tmp(tmp2[30]).GestureDetector, obj9), ,];
      let tmp30Result3 = null;
      if (!showVideo) {
        tmp30Result3 = null;
        if (null != ownerId) {
          const obj12 = { style: null, pointerEvents: "box-none", children: null };
          const items17 = [voicePanelPIPStyles.pipMask, animatedStyle];
          obj12.style = items17;
          const obj13 = { ownerId, streamKey, isConnecting: null, visible: null };
          if (!isConnecting) {
            isConnecting = isWatching;
          }
          obj13.isConnecting = isConnecting;
          obj13.visible = !showStream;
          obj12.children = tmp30(tmp4(tmp2[32]), obj13);
          tmp30Result3 = tmp30(tmp4(tmp2[26]).View, obj12);
          const tmp4Result4 = tmp4(tmp2[32]);
        }
      }
      items16[1] = tmp30Result3;
      let str = "stream";
      if (showVideo) {
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
      items16[2] = tmp30(tmp4(tmp2[19]), obj14);
      obj8.children = items16;
      tmp31Result = closure_16(tmp4(tmp2[26]).View, obj8);
      const tmp4Result5 = tmp4(tmp2[19]);
    } else {
      tmp31Result = null;
    }
  }
  const items18 = [tmp31Result];
  let tmp30Result4 = null;
  if (pIPState.showSecondaryPIP) {
    const obj15 = { style: null };
    const items19 = [, ,];
    ({ pipContentWrapper: arr20[0], inAppElevationShadow: arr20[1] } = voicePanelPIPStyles);
    items19[2] = pipWrapperStyles;
    obj15.style = items19;
    const merged1 = Object.assign(memo1);
    const obj16 = { style: null, children: null };
    const items20 = [voicePanelPIPStyles.pipMask, animatedStyle];
    obj16.style = items20;
    const obj17 = { gesture: secondaryPIPGesture, children: null };
    const obj18 = { style: showVideo.absoluteFill, children: tmp30(tmp4(tmp2[34]), {}) };
    obj17.children = tmp30(tmp4(tmp2[33]), obj18);
    obj16.children = tmp30(tmp(tmp2[30]).GestureDetector, obj17);
    obj15.children = tmp30(tmp4(tmp2[26]).View, obj16);
    tmp30Result4 = tmp30(tmp4(tmp2[26]).View, obj15);
    const tmp4Result6 = tmp4(tmp2[33]);
  }
  items18[1] = tmp30Result4;
  obj7.children = items18;
  obj6.children = closure_16(require("../../../../../_runtime/metro/01652__.js").View, obj7);
  obj5.children = callback4(require("LegacyBaseButton").GestureDetector, obj6);
  return callback4(require("../../../../../_runtime/metro/01652__.js").View, obj5);
}
function renderVoicePanelDockPIPWrapper(arg0, arg1, transitionState, transitionCleanUp) {
  return closure_1_15(closure_22, { transitionState, transitionCleanUp }, arg0);
}
const StyleSheet = fn(17).StyleSheet;
const VoicePanelModes = fn(11363).VoicePanelModes;
const VoicePanelPIPModes = fn(19473).VoicePanelPIPModes;
const ActivityPanelModes = fn(5781).ActivityPanelModes;
const ParticipantTypes = fn(5805).ParticipantTypes;
const isLaunched = fn(6902).isLaunched;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = { width: 16, height: 9 };
const openCall = "openCall";
const stopWatching = "stopWatching";
let closure_20 = {
  code: "(function VoicePanelDockPIPTsx1(){let[getVoicePanelPIPBorderRadius,pipState]=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};})",
};
let closure_22 = noop.memo(function VoicePanelDockPIPWrapper(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const channelId = noop.useContext(transitionCleanUp(11362)).channelId;
  const stream = transitionCleanUp(19680)(channelId);
  const showVideo = transitionCleanUp(19682)(channelId);
  const panelLayoutCommitted = transitionState(19667).usePIPTileHandoff().panelLayoutCommitted;
  items = [transitionState, panelLayoutCommitted, transitionCleanUp];
  const effect = noop.useEffect(() => {
    if (tmp) {
      transitionCleanUp();
    }
    tmp = transitionState === native.TransitionStates.YEETED && panelLayoutCommitted;
  }, items);
  return closure_15(VoicePanelDockPIP, { stream, showVideo });
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockPIP.tsx");

export default noop.memo(function VoicePanelDockPIPProvider() {
  const channelId = IN_APP.useContext(pIPState(11362)).channelId;
  const streamKey = pIPState(19680)(channelId).streamKey;
  pIPState = undefined;
  dependencyMap = undefined;
  IN_APP = undefined;
  let width;
  let height;
  let containerHeight;
  let obj = IN_APP;
  const tmp2 = pIPState(19680)(channelId);
  const tmp3 = pIPState(19682)(channelId);
  pIPState = streamKey(19562).usePIPState();
  const layoutManager = IN_APP.useContext(pIPState(11362)).layoutManager;
  const obj2 = streamKey(19562);
  [tmp7, c3] = IN_APP.useState(() => {
    let targetDimensions = layoutManager.getTargetDimensions(streamKey);
    if (targetDimensions === layoutManager.getDefaultTargetDimensions()) {
      targetDimensions = closure_17;
    }
    return targetDimensions;
  });
  items = [layoutManager, streamKey];
  const effect = IN_APP.useEffect(() => {
    _undefined((safeAreaState) => {
      let targetDimensions = closure_1_2.getTargetDimensions(closure_1_0);
      if (targetDimensions === closure_1_2.getDefaultTargetDimensions()) {
        targetDimensions = closure_2_17;
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
          targetDimensions = closure_2_17;
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
        targetDimensions = closure_17;
      }
      return targetDimensions;
    }),
    2,
  );
  const size = streamKey(19472).computePIPSize(closure_17, false, false, pIPState.showSecondaryPIP);
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
  obj3.children = closure_15(streamKey(5199).TransitionItem, {
    item: tmp13,
    renderItem: renderVoicePanelDockPIPWrapper,
  });
  return closure_15(streamKey(19562).VoicePanelPIPStateContext.Provider, obj3);
});
