// === Module 17841: VoicePanelPIPContent ===

// Module 17841 (VoicePanelPIPContent)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import useWindowDimensions from "useWindowDimensions" /* 1497 */;
import native from "native" /* 4827 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4850 */;
import ExternalPipDefault from "ExternalPip" /* 5221 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import NativeViewDefault from "NativeView" /* 6161 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6761 */;
import useProfileTileGradientDefault from "useProfileTileGradient" /* 8377 */;
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 10900 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11969 */;
import VoicePanelCardLayoutManager from "VoicePanelCardLayoutManager" /* 11972 */;
import VideoActionCreators from "VideoActionCreators" /* 17691 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 17739 */;
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext" /* 17741 */;
import VoicePanelStreamOutputSinkStack from "VoicePanelStreamOutputSinkStack" /* 17807 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6036 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 10831 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5897 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import UserStore from "UserStore" /* 1390 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function markContentReady() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
}
function getFocusedKey(id) {
  return id.id;
}
function areParticipantsEqual(arg0, arg1) {
  if (arg0.length !== arg1.length) {
    return false;
  } else if (0 === arg0.length) {
    return true;
  } else {
    let num2 = 0;
    const iter = arg0[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp6 = arg1[num2];
      let id;
      if (tmp6 != null) {
        id = tmp6.id;
      }
      if (iter.next().id !== id) {
        iter.return();
        let flag = false;
        return false;
      } else {
        num2 = num2 + 1;
        continue;
      }
    }
    return true;
  }
}
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const VoicePanelModes = fn(11970).VoicePanelModes;
const VoicePanelPIPModes = fn(17740).VoicePanelPIPModes;
let Constants = fn(1085);
({ ApplicationStreamStates: closure_16, ComponentActions: closure_17 } = Constants);
Constants = fn(2024);
({ ActivityLayoutMode: closure_18, OrientationLockState: closure_19 } = Constants);
const CallConstants = fn(5115);
({ ParticipantTypes: closure_20, isActivityParticipant: closure_21 } = CallConstants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
const createStyles = fn(5092);
let obj = { contentWrapper: { position: "absolute", width: "100%", height: "100%", overflow: "hidden", alignItems: "center", justifyContent: "center" }, userOpacity: { opacity: 0.1 }, activity: { position: "absolute", width: "100%", height: "100%" }, user: { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, video: { position: "absolute", width: "100%", height: "100%" }, avatarWrapper: { position: "relative", width: "56%", height: "56%", alignItems: "center", justifyContent: "center" }, thermalAlertIconContainer: null, thermalAlertIcon: null, onTop: null, onBottom: null, streamEmptyImage: null, emptyPip: null, innerStroke: null, blackBackground: null };
let size = { width: 22, height: 22, backgroundColor: "rgba(78, 80, 88, 0.48)", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", position: "absolute", top: 6, left: 6 };
obj.thermalAlertIconContainer = size;
const size1 = { width: 14, height: 14, color: nativeDefault.colors.WHITE };
obj.thermalAlertIcon = size1;
obj.onTop = { zIndex: 1 };
obj.onBottom = { zIndex: 0 };
obj.streamEmptyImage = { width: "50%" };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BLACK;
obj.emptyPip = obj3;
obj.innerStroke = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderColor: "white", zIndex: 1, opacity: 0.3 };
obj.blackBackground = { backgroundColor: "black" };
let closure_24 = createStyles.createStyles(obj);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function VideoStream(streamId) {
  const cResult = c.c(6);
  streamId = streamId.streamId;
  const setHasActiveVideoOutputSink = VoicePanelStreamOutputSinkStack.useSetHasActiveVideoOutputSink(noop.useContext(VoicePanelStateContextDefault).streamOutputSinkStack);
  if (cResult[0] === setHasActiveVideoOutputSink) {
    if (cResult[1] === streamId) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = noop.useEffect(tmp5, tmp6);
    if (cResult[4] !== streamId) {
      const obj4 = {};
      const merged = Object.assign(streamId);
      const tmp14 = closure_1_22(VideoRendererNativeComponentDefault, obj4);
      cResult[4] = streamId;
      cResult[5] = tmp14;
      let tmp8 = tmp14;
      const tmp3Result = VideoRendererNativeComponentDefault;
    } else {
      tmp8 = cResult[5];
    }
    return tmp8;
  }
  const fn = function o() {
    if (null != streamId) {
      setHasActiveVideoOutputSink(tmp, true);
      return () => {
        setHasActiveVideoOutputSink(streamId, false);
      };
    }
  };
  const items = [setHasActiveVideoOutputSink, streamId];
  cResult[0] = setHasActiveVideoOutputSink;
  cResult[1] = streamId;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
}) : (function VideoStream(streamId) {
  streamId = streamId.streamId;
  const setHasActiveVideoOutputSink = VoicePanelStreamOutputSinkStack.useSetHasActiveVideoOutputSink(noop.useContext(VoicePanelStateContextDefault).streamOutputSinkStack);
  const items = [setHasActiveVideoOutputSink, streamId];
  const effect = noop.useEffect(() => {
    if (null != streamId) {
      setHasActiveVideoOutputSink(tmp, true);
      return () => {
        setHasActiveVideoOutputSink(streamId, false);
      };
    }
  }, items);
  const obj2 = {};
  const merged = Object.assign(streamId);
  return closure_1_22(VideoRendererNativeComponentDefault, obj2);
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTransitionStyles(onTop, arg1, arg2) {
  _require = arg1;
  closure_1 = arg2;
  const cResult = require("c").c(4);
  if (cResult[0] === arg2) {
    if (cResult[1] === arg1) {
      let tmp4 = cResult[2];
      let tmp5 = cResult[3];
    }
    const effect = noop.useEffect(tmp4, tmp5);
    return arg1 === tmp(4827).TransitionStates.YEETED ? onTop.onTop : onTop.onBottom;
  }
  const fn = function u() {
    if (timeout === timeout(dependencyMap[26]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      function handleVideoReady() {
        clearTimeout(closure_0);
        const timerId = setTimeout(() => {
          let tmp;
          if (handleVideoReady != null) {
            tmp = handleVideoReady();
          }
          return tmp;
        }, 17);
      }
      let ComponentDispatch = tmp(dependencyMap[25]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants2.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
    tmp = timeout;
  };
  const items = [arg1, arg2];
  cResult[0] = arg2;
  cResult[1] = arg1;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useTransitionStyles(onTop, arg1, arg2) {
  _require = arg1;
  closure_1 = arg2;
  const items = [arg1, arg2];
  const effect = noop.useEffect(() => {
    function handleVideoReady() {
      clearTimeout(closure_0);
      const timerId = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 17);
    }
    if (timeout === timeout(dependencyMap[26]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = tmp(dependencyMap[25]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants2.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
    tmp = timeout;
  }, items);
  return arg1 === require("native").TransitionStates.YEETED ? onTop.onTop : onTop.onBottom;
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function InnerStroke(style) {
  const cResult = c.c(8);
  style = style.style;
  const pIPState = VoicePanelPIPStateContext.usePIPState();
  ({ width, height } = pIPState);
  const tmp4 = closure_24();
  const sum = VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height) + 1;
  if (cResult[0] !== sum) {
    const obj4 = { borderRadius: sum };
    cResult[0] = sum;
    cResult[1] = obj4;
    let tmp6 = obj4;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === style) {
    if (cResult[3] === tmp4.innerStroke) {
      if (cResult[4] === tmp6) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] !== tmp7) {
        const obj5 = { style: tmp7 };
        const tmp11 = closure_1_22(NativeViewDefault, obj5);
        cResult[6] = tmp7;
        cResult[7] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[7];
      }
      return tmp8;
    }
  }
  const items = [tmp4.innerStroke, tmp6, style];
  cResult[2] = style;
  cResult[3] = tmp4.innerStroke;
  cResult[4] = tmp6;
  cResult[5] = items;
  tmp7 = items;
}) : (function InnerStroke(style) {
  style = style.style;
  let height;
  const size = style(height[27]).usePIPState();
  const width = size.width;
  height = size.height;
  const tmp = closure_24();
  const innerStroke = tmp;
  const obj2 = { style: null };
  let items = [width, height, tmp.innerStroke, style];
  let obj = style(height[27]);
  obj2.style = noop.useMemo(() => {
    const items = [innerStroke.innerStroke, , ];
    const obj = { borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height) + 1 };
    items[1] = obj;
    items[2] = style;
    return items;
  }, items);
  return closure_22(width(height[29]), obj2);
});
let closure_30 = { code: "function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_31 = { code: "function VoicePanelPIPContentTsx2(windowDimensionsVal_0,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal_0!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal_0);}}" };
const __initData = { code: "function VoicePanelPIPContentTsx3(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
const __initData2 = { code: "function VoicePanelPIPContentTsx4(windowDimensionsVal_0,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal_0!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal_0);}}" };
ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityInVoice(participantId) {
  const cResult = participantId(layoutManager[21]).c(35);
  participantId = participantId.participantId;
  ({ transitionState, layoutTransition } = participantId);
  let obj = participantId(layoutManager[21]);
  closure_28(closure_24(), transitionState, participantId.transitionCleanUp);
  const context = noop.useContext(channelId(layoutManager[22]));
  channelId = context.channelId;
  layoutManager = context.layoutManager;
  const windowDimensions = context.windowDimensions;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function u() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  let obj2 = noop;
  const tmp4 = closure_24();
  const stateFromStores = participantId(layoutManager[30]).useStateFromStores(first, tmp9);
  const tmp11 = windowDimensions(obj2.useState(transitionState === participantId(layoutManager[26]).TransitionStates.MOUNTED), 2);
  noop = tmp11[0];
  closure_5 = tmp11[1];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelRTCStore];
    cResult[3] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === channelId) {
    if (cResult[5] === participantId) {
      let tmp14 = cResult[6];
      let tmp15 = cResult[7];
    }
    const stateFromStores1 = tmp(tmp2[30]).useStateFromStores(tmp12, tmp14, tmp15);
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [stateFromStores2];
      cResult[8] = items2;
      let tmp17 = items2;
    } else {
      tmp17 = cResult[8];
    }
    if (cResult[9] !== stateFromStores1) {
      class B {
        constructor() {
          return closure_7.getPipOrientationLockStateForApp(closure_6);
        }
      }
      const items3 = [stateFromStores1];
      cResult[9] = stateFromStores1;
      cResult[10] = B;
      cResult[11] = items3;
      let tmp20 = items3;
    } else {
      class B {
        constructor() {
          return closure_7.getPipOrientationLockStateForApp(closure_6);
        }
      }
      tmp20 = cResult[11];
    }
    const tmpResult3 = tmp(tmp2[30]);
    stateFromStores2 = tmp(tmp2[30]).useStateFromStores(tmp17, B, tmp20);
    if (cResult[12] === stateFromStores1) {
      class B {
        constructor() {
          return closure_7.getPipOrientationLockStateForApp(closure_6);
        }
      }
    }
    const fn3 = function q(width) {
      if (constants4.LANDSCAPE === stateFromStores2) {
        layoutManager.setTargetDimensions(stateFromStores1, 16, 9);
      } else if (constants4.PORTRAIT === stateFromStores2) {
        layoutManager.setTargetDimensions(stateFromStores1, 9, 16);
      } else if (constants4.UNLOCKED === stateFromStores2) {
        let num2 = 9;
        if (tmp) {
          num2 = 16;
        }
        let num3 = 16;
        if (tmp) {
          num3 = 9;
        }
        layoutManager.setTargetDimensions(stateFromStores1, num2, num3);
      }
    };
    cResult[12] = stateFromStores1;
    cResult[13] = layoutManager;
    cResult[14] = stateFromStores2;
    cResult[15] = fn3;
    const tmpResult4 = tmp(tmp2[30]);
  }
  const fn2 = function x() {
    const participant = ChannelRTCStore.getParticipant(channelId, participantId);
    let applicationId = participantId;
    if (null != participant) {
      applicationId = participantId;
      if (participant.type === constants5.ACTIVITY) {
        applicationId = participant.applicationId;
      }
    }
    return applicationId;
  };
  const items4 = [channelId, participantId];
  cResult[4] = channelId;
  cResult[5] = participantId;
  cResult[6] = fn2;
  cResult[7] = items4;
  tmp15 = items4;
  tmp14 = fn2;
  const tmpResult = participantId(layoutManager[30]);
}) : (function ActivityInVoice(participantId) {
  participantId = participantId.participantId;
  const transitionState = participantId.transitionState;
  let channelId;
  let layoutManager;
  let first;
  let stateFromStores1;
  let handleTargetAspectRatioParams;
  ({ transitionCleanUp, layoutTransition } = participantId);
  let tmp = closure_24();
  let tmp3 = channelId;
  let items9 = layoutManager;
  const context = first.useContext(channelId(layoutManager[22]));
  channelId = context.channelId;
  layoutManager = context.layoutManager;
  const windowDimensions = context.windowDimensions;
  const tmp2 = closure_28(tmp, transitionState, transitionCleanUp);
  const items = [ChannelStore];
  let PIP = participantId(layoutManager[30]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp5 = windowDimensions(first.useState(transitionState === participantId(layoutManager[26]).TransitionStates.MOUNTED), 2);
  first = tmp5[0];
  closure_5 = tmp5[1];
  let obj = participantId(layoutManager[30]);
  const items1 = [handleTargetAspectRatioParams];
  const items2 = [channelId, participantId];
  const stateFromStores = participantId(layoutManager[30]).useStateFromStores(items1, () => {
    const participant = ChannelRTCStore.getParticipant(channelId, participantId);
    let applicationId = participantId;
    if (null != participant) {
      applicationId = participantId;
      if (participant.type === constants5.ACTIVITY) {
        applicationId = participant.applicationId;
      }
    }
    return applicationId;
  }, items2);
  let obj2 = participantId(layoutManager[30]);
  const items3 = [stateFromStores1];
  const items4 = [stateFromStores];
  stateFromStores1 = participantId(layoutManager[30]).useStateFromStores(items3, () => EmbeddedActivitiesStore.getPipOrientationLockStateForApp(stateFromStores), items4);
  const items5 = [layoutManager, stateFromStores1, stateFromStores];
  handleTargetAspectRatioParams = first.useCallback((width) => {
    if (constants4.LANDSCAPE === stateFromStores1) {
      layoutManager.setTargetDimensions(stateFromStores, 16, 9);
    } else if (constants4.PORTRAIT === stateFromStores1) {
      layoutManager.setTargetDimensions(stateFromStores, 9, 16);
    } else if (constants4.UNLOCKED === stateFromStores1) {
      let num2 = 9;
      if (tmp) {
        num2 = 16;
      }
      let num3 = 16;
      if (tmp) {
        num3 = 9;
      }
      layoutManager.setTargetDimensions(stateFromStores, num2, num3);
    }
  }, items5);
  const items6 = [handleTargetAspectRatioParams];
  const layoutEffect = first.useLayoutEffect(() => {
    const size = useWindowDimensions.getWindowDimensions();
    const obj2 = {};
    const merged = Object.assign(size);
    obj2.landscape = size.width > size.height;
    callback(obj2);
  }, items6);
  const obj3 = participantId(layoutManager[30]);
  const fn = function v() {
    return windowDimensions.get();
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 10821342487514;
  fn.__initData = __initData;
  const fn2 = function p(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(callback)(arg0);
    }
  };
  const obj4 = participantId(layoutManager[18]);
  fn2.__closure = { runOnJS: participantId(layoutManager[18]).runOnJS, handleTargetAspectRatioParams };
  fn2.__workletHash = 3382402534204;
  fn2.__initData = __initData2;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  closure_9 = tmp12;
  const items7 = [null != PIP, first];
  const effect = first.useEffect(() => {
    if (!first) {
      if (closure_9) {
        let ComponentDispatch = participantId(layoutManager[25]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
      }
    }
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_5(false);
        const ComponentDispatch = participantId(layoutManager[25]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
      }, 500);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items7);
  if (first) {
    return null;
  } else if (tmp12) {
    const obj6 = { style: null, children: null };
    const items8 = [tmp.activity, tmp2];
    obj6.style = items8;
    tmp = closure_22;
    const obj7 = { channel: PIP, layoutMode: null };
    PIP = constants3.PIP;
    obj7.layoutMode = PIP;
    const tmp3Result = tmp3(items9[29]);
    items9 = [, ];
    items9[0] = closure_22(tmp3(items9[32]), obj7);
    tmp3 = closure_29;
    items9[1] = closure_22(closure_29, {});
    obj6.children = items9;
    let tmp17 = closure_23(tmp3Result, obj6);
    const tmp21 = closure_22(tmp3(items9[32]), obj7);
  } else {
    const obj8 = { participantId: AuthenticationStore.getId(), layoutTransition };
    tmp17 = closure_22(closure_43, obj8);
  }
  const obj5 = { runOnJS: participantId(layoutManager[18]).runOnJS, handleTargetAspectRatioParams };
});
const __initData3 = { code: "function VoicePanelPIPContentTsx5(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData4 = { code: "function VoicePanelPIPContentTsx6(focusedParticipantId_0,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId_0!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId_0,mode.get());}}" };
const __initData5 = { code: "function VoicePanelPIPContentTsx7(){const{mode}=this.__closure;return mode.get();}" };
const __initData6 = { code: "function VoicePanelPIPContentTsx8(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}" };
const __initData7 = { code: "function VoicePanelPIPContentTsx9(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData8 = { code: "function VoicePanelPIPContentTsx10(focusedParticipantId_0,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId_0!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId_0,mode.get());}}" };
const __initData9 = { code: "function VoicePanelPIPContentTsx11(){const{mode}=this.__closure;return mode.get();}" };
const __initData10 = { code: "function VoicePanelPIPContentTsx12(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}" };
ReactCompilerGating = fn(558);
let closure_43 = ReactCompilerGating.isReactCompilerEnabled() ? (function User(participantId) {
  const cResult = participantId(focused[21]).c(59);
  participantId = participantId.participantId;
  const layoutTransition = participantId.layoutTransition;
  ({ transitionState, transitionCleanUp } = participantId);
  const tmp4 = closure_24();
  let tmp5 = closure_28(tmp4, transitionState, transitionCleanUp);
  const context = layoutManager.useContext(channelId(focused[22]));
  channelId = context.channelId;
  ({ guildId, focused } = context);
  const mode = context.mode;
  layoutManager = context.layoutManager;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === participantId) {
      let tmp10 = cResult[3];
    }
    const stateFromStores = tmp(focused[30]).useStateFromStores(first, tmp10);
    let user1;
    if (stateFromStores != null) {
      user1 = stateFromStores.user;
    }
    if (user1 == null) {
      user1 = UserStore.getCurrentUser();
    }
    const tmpResult = tmp(focused[30]);
    let avatarURL;
    if (user1 != null) {
      avatarURL = user1.getAvatarURL(guildId, 80, false);
    }
    const dominantColorFromImage = tmp(focused[33]).useDominantColorFromImage(avatarURL);
    let id;
    const tmpResult8 = tmp(focused[33]);
    if (user1 != null) {
      id = user1.id;
    }
    const obj3 = { userId: id, guildId, location: "VoicePanelPIPContent-native" };
    const tmp6ResultResult = tmp6(focused[34])(obj3);
    if (cResult[4] === dominantColorFromImage) {
      if (cResult[5] === tmp6ResultResult) {
        let tmp20 = cResult[6];
      }
      if (cResult[7] === tmp4.user) {
        if (cResult[8] === tmp20) {
          if (cResult[9] === tmp5) {
            let tmp22 = cResult[10];
          }
          [tmp25, closure_5] = mode(obj2.useState(false), 2);
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { location: "VoicePanelPIPContent" };
            cResult[11] = obj4;
            let tmp26 = obj4;
          } else {
            tmp26 = cResult[11];
          }
          const tmp24 = mode(obj2.useState(false), 2);
          let id1;
          if (stateFromStores != null) {
            const user = stateFromStores.user;
            if (user != null) {
              id1 = user.id;
            }
          }
          const surfaceDirectRendererExperiment = tmp(focused[35]).useSurfaceDirectRendererExperiment(id1, tmp26);
          function updateIsActivityFocused(arg0, arg1) {
            let participant;
            if (null != arg0) {
              participant = ChannelRTCStore.getParticipant(channelId, arg0);
            }
            let tmp5 = null != participant;
            if (tmp5) {
              tmp5 = guild(participant);
            }
            if (tmp5) {
              tmp5 = arg1 === VoicePanelModes.PANEL;
            }
            closure_1_5(tmp5);
          }
          const tmpResult9 = tmp(focused[35]);
          function ae() {
            value = focused.get();
            let id;
            if (value != null) {
              id = value.id;
            }
            return id;
          }
          const obj5 = { focused };
          ae.__closure = obj5;
          ae.__workletHash = 7289784389347;
          ae.__initData = __initData3;
          function ne(arg0, arg1) {
            if (arg0 !== arg1) {
              ReanimatedRexport2.runOnJS(updateIsActivityFocused)(arg0, mode.get());
              const runOnJSResult = ReanimatedRexport2.runOnJS(updateIsActivityFocused);
            }
          }
          const obj6 = { runOnJS: tmp(focused[18]).runOnJS, updateIsActivityFocused, mode };
          ne.__closure = obj6;
          ne.__workletHash = 14994700175532;
          ne.__initData = __initData4;
          const animatedReaction = tmp(focused[18]).useAnimatedReaction(ae, ne);
          const tmpResult10 = tmp(focused[18]);
          function re() {
            return mode.get();
          }
          const obj7 = { mode };
          re.__closure = obj7;
          re.__workletHash = 1496434071774;
          re.__initData = __initData5;
          function ie(arg0, arg1) {
            if (arg0 !== arg1) {
              value = focused.get();
              let id;
              if (value != null) {
                id = value.id;
              }
              ReanimatedRexport2.runOnJS(updateIsActivityFocused)(id, arg0);
              const runOnJSResult = ReanimatedRexport2.runOnJS(updateIsActivityFocused);
            }
          }
          const obj8 = { runOnJS: tmp(focused[18]).runOnJS, updateIsActivityFocused, focused };
          ie.__closure = obj8;
          ie.__workletHash = 16735078785493;
          ie.__initData = __initData6;
          const animatedReaction1 = tmp(focused[18]).useAnimatedReaction(re, ie);
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [ChannelCallLifecycleStore];
            function se() {
              return { isReactingToThermalState: ChannelCallLifecycleStore.isReactingToThermalState(), consumedRequestToRespondToSeriousThermalState: ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState() };
            }
            cResult[12] = items1;
            cResult[13] = se;
            let tmp36 = se;
            let tmp35 = items1;
          } else {
            tmp35 = cResult[12];
            tmp36 = cResult[13];
          }
          const tmpResult11 = tmp(focused[18]);
          const stateFromStoresObject = tmp(focused[30]).useStateFromStoresObject(tmp35, tmp36);
          const consumedRequestToRespondToSeriousThermalState = stateFromStoresObject.consumedRequestToRespondToSeriousThermalState;
          if (cResult[14] === layoutManager) {
            if (cResult[15] === participantId) {
              let tmp40 = cResult[16];
            }
            let canRenderParticipantVideo = tmp(focused[36]).useCanRenderParticipantVideo(stateFromStores);
            if (canRenderParticipantVideo) {
              let tmp42 = tmp25;
              if (tmp25) {
                tmp42 = tmp39;
              }
              canRenderParticipantVideo = !tmp42;
            }
            if (cResult[17] !== canRenderParticipantVideo) {
              function pe() {
                if (!canRenderParticipantVideo) {
                  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                  ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
                }
              }
              const items2 = [canRenderParticipantVideo];
              cResult[17] = canRenderParticipantVideo;
              cResult[18] = items2;
              cResult[19] = pe;
              let tmp44 = pe;
              let tmp43 = items2;
            } else {
              tmp43 = cResult[18];
              tmp44 = cResult[19];
            }
            const effect = obj2.useEffect(tmp44, tmp43);
            if (canRenderParticipantVideo) {
              if (cResult[20] === tmp4.blackBackground) {
                if (cResult[21] === tmp4.user) {
                  let tmp70 = cResult[22];
                }
                if (cResult[23] !== tmp4.video) {
                  const items3 = [tmp4.video, undefined];
                  cResult[23] = tmp4.video;
                  cResult[24] = items3;
                  let tmp71 = items3;
                } else {
                  tmp71 = cResult[24];
                }
                if (cResult[25] === tmp40) {
                  if (cResult[26] === stateFromStores.streamId) {
                    if (cResult[27] === tmp71) {
                      if (cResult[28] === surfaceDirectRendererExperiment) {
                        let tmp72 = cResult[29];
                      }
                      if (cResult[30] === participantId) {
                        if (cResult[31] === tmp72) {
                          if (cResult[32] === tmp5) {
                            let tmp77 = cResult[33];
                          }
                          const _Symbol3 = Symbol;
                          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp84 = closure_22(closure_29, {});
                            cResult[34] = tmp84;
                            let tmp81 = tmp84;
                          } else {
                            tmp81 = cResult[34];
                          }
                          if (cResult[35] === tmp70) {
                            if (cResult[36] === tmp77) {
                              let tmp85 = cResult[37];
                            }
                            return tmp85;
                          }
                          const obj9 = { style: tmp70, children: null };
                          const items4 = [tmp77, tmp81];
                          obj9.children = items4;
                          const tmp87 = closure_23(tmp6(focused[29]), obj9);
                          cResult[35] = tmp70;
                          cResult[36] = tmp77;
                          cResult[37] = tmp87;
                          tmp85 = tmp87;
                        }
                      }
                      const obj10 = { style: tmp5, participantId, children: tmp72 };
                      const tmp80 = closure_22(closure_46, obj10);
                      cResult[30] = participantId;
                      cResult[31] = tmp72;
                      cResult[32] = tmp5;
                      cResult[33] = tmp80;
                      tmp77 = tmp80;
                    }
                  }
                }
                const obj11 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: stateFromStores.streamId, style: tmp71, onSize: tmp40, onReady: markContentReady };
                const tmp76 = closure_22(closure_26, obj11);
                cResult[25] = tmp40;
                cResult[26] = stateFromStores.streamId;
                cResult[27] = tmp71;
                cResult[28] = surfaceDirectRendererExperiment;
                cResult[29] = tmp76;
                tmp72 = tmp76;
              }
              const items5 = [, ];
              ({ blackBackground: arr6[0], user: arr6[1] } = tmp4);
              cResult[20] = tmp4.blackBackground;
              cResult[21] = tmp4.user;
              cResult[22] = items5;
              tmp70 = items5;
            } else {
              const tmp6Result4 = tmp6(focused[29]);
              if (cResult[38] === tmp6ResultResult) {
                if (cResult[39] === layoutTransition) {
                  let tmp47 = cResult[40];
                }
                const tmp6Result5 = tmp6(focused[29]);
                let tmp54Result = null;
                if (null != user1) {
                  const obj12 = { source: tmp(focused[33]).getCachedSourceFromURI(user1.getAvatarURL(guildId, 80, false)), size: null, avatarDecoration: null };
                  const AvatarSizes = tmp(focused[37]).AvatarSizes;
                  obj12.size = tmp25 ? AvatarSizes.LARGE : AvatarSizes.XLARGE;
                  let userAvatarDecoration;
                  if (stateFromStores != null) {
                    userAvatarDecoration = stateFromStores.userAvatarDecoration;
                  }
                  obj12.avatarDecoration = userAvatarDecoration;
                  tmp54Result = closure_22(tmp(focused[37]).Avatar, obj12);
                  const tmpResult14 = tmp(focused[33]);
                }
                if (cResult[41] === tmp6Result5) {
                  if (cResult[42] === tmp4.avatarWrapper) {
                    if (cResult[43] === tmp54Result) {
                      let tmp56 = cResult[44];
                    }
                    if (cResult[45] !== tmp4.userOpacity) {
                      const obj13 = { style: tmp4.userOpacity };
                      const tmp62 = closure_22(closure_29, obj13);
                      cResult[45] = tmp4.userOpacity;
                      cResult[46] = tmp62;
                      let tmp59 = tmp62;
                    } else {
                      tmp59 = cResult[46];
                    }
                    if (cResult[47] === consumedRequestToRespondToSeriousThermalState) {
                      if (cResult[48] === tmp25) {
                        if (cResult[49] === tmp4.thermalAlertIcon) {
                          if (cResult[50] === tmp4.thermalAlertIconContainer) {
                            let tmp63 = cResult[51];
                          }
                          if (cResult[52] === tmp6Result4) {
                            if (cResult[53] === tmp47) {
                              if (cResult[54] === tmp56) {
                                if (cResult[55] === tmp59) {
                                  if (cResult[56] === tmp63) {
                                    if (cResult[57] === tmp22) {
                                      let tmp67 = cResult[58];
                                    }
                                    return tmp67;
                                  }
                                }
                              }
                            }
                          }
                          const obj14 = { style: tmp22, children: null };
                          const items6 = [tmp47, tmp56, tmp59, tmp63];
                          obj14.children = items6;
                          const tmp69 = closure_23(tmp6Result4, obj14);
                          cResult[52] = tmp6Result4;
                          cResult[53] = tmp47;
                          cResult[54] = tmp56;
                          cResult[55] = tmp59;
                          cResult[56] = tmp63;
                          cResult[57] = tmp22;
                          cResult[58] = tmp69;
                          tmp67 = tmp69;
                        }
                      }
                    }
                    let tmp64 = null;
                    if (tmp25) {
                      tmp64 = null;
                      if (consumedRequestToRespondToSeriousThermalState) {
                        const obj15 = { style: tmp4.thermalAlertIconContainer, children: null };
                        const obj16 = { style: tmp4.thermalAlertIcon, source: tmp6(focused[38]), color: tmp4.thermalAlertIcon.color };
                        obj15.children = closure_22(tmp(focused[37]).Icon, obj16);
                        tmp64 = closure_22(tmp6(focused[29]), obj15);
                        const tmp6Result6 = tmp6(focused[29]);
                      }
                    }
                    cResult[47] = consumedRequestToRespondToSeriousThermalState;
                    cResult[48] = tmp25;
                    cResult[49] = tmp4.thermalAlertIcon;
                    cResult[50] = tmp4.thermalAlertIconContainer;
                    cResult[51] = tmp64;
                    tmp63 = tmp64;
                  }
                }
                const obj17 = { style: tmp4.avatarWrapper, children: tmp54Result };
                const tmp58 = closure_22(tmp6Result5, obj17);
                cResult[41] = tmp6Result5;
                cResult[42] = tmp4.avatarWrapper;
                cResult[43] = tmp54Result;
                cResult[44] = tmp58;
                tmp56 = tmp58;
              }
              let tmp48 = null;
              if (null != tmp6ResultResult) {
                const obj18 = { colors: tmp6ResultResult, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: updateIsActivityFocused.absoluteFill, layout: layoutTransition, pointerEvents: "none" };
                tmp48 = closure_22(LinearGradient, obj18);
              }
              cResult[38] = tmp6ResultResult;
              cResult[39] = layoutTransition;
              cResult[40] = tmp48;
              tmp47 = tmp48;
            }
            const tmpResult13 = tmp(focused[36]);
          }
          function ce(nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
            layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
          }
          cResult[14] = layoutManager;
          cResult[15] = participantId;
          cResult[16] = ce;
          tmp40 = ce;
          const tmpResult12 = tmp(focused[30]);
        }
      }
      const items7 = [tmp4.user, tmp5, tmp20];
      cResult[7] = tmp4.user;
      cResult[8] = tmp20;
      cResult[9] = tmp5;
      cResult[10] = items7;
      tmp22 = items7;
    }
    let tmp21 = null;
    if (null == tmp6ResultResult) {
      const obj19 = { backgroundColor: dominantColorFromImage };
      tmp21 = obj19;
    }
    cResult[4] = dominantColorFromImage;
    cResult[5] = tmp6ResultResult;
    cResult[6] = tmp21;
    tmp20 = tmp21;
    const tmp6Result = tmp6(focused[34]);
  }
  const fn = function c() {
    const participant = ChannelRTCStore.getParticipant(channelId, participantId);
    let type;
    if (participant != null) {
      type = participant.type;
    }
    let tmp3;
    if (type === constants5.USER) {
      tmp3 = participant;
    }
    return tmp3;
  };
  cResult[1] = channelId;
  cResult[2] = participantId;
  cResult[3] = fn;
  tmp10 = fn;
  let obj = participantId(focused[21]);
}) : (function User(participantId) {
  participantId = participantId.participantId;
  focused = undefined;
  let dominantColorFromImage;
  closure_8 = undefined;
  c9 = undefined;
  let updateIsActivityFocused;
  let canRenderParticipantVideo;
  ({ transitionState, transitionCleanUp, layoutTransition } = participantId);
  let tmp = closure_24();
  importDefault = tmp;
  const tmp2 = closure_28(tmp, transitionState, transitionCleanUp);
  dependencyMap = tmp2;
  const context = focused.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ guildId, focused } = context);
  const mode = context.mode;
  const layoutManager = context.layoutManager;
  let items = [closure_8];
  const stateFromStores = participantId(573).useStateFromStores(items, () => {
    const participant = ChannelRTCStore.getParticipant(channelId, participantId);
    let type;
    if (participant != null) {
      type = participant.type;
    }
    let tmp3;
    if (type === constants5.USER) {
      tmp3 = participant;
    }
    return tmp3;
  });
  let user1;
  if (stateFromStores != null) {
    user1 = stateFromStores.user;
  }
  if (user1 == null) {
    user1 = UserStore.getCurrentUser();
  }
  const obj2 = participantId(573);
  let avatarURL;
  if (user1 != null) {
    avatarURL = user1.getAvatarURL(guildId, 80, false);
  }
  dominantColorFromImage = participantId(9029).useDominantColorFromImage(avatarURL);
  let id;
  const tmp6Result = participantId(9029);
  if (user1 != null) {
    id = user1.id;
  }
  const tmp3ResultResult = useProfileTileGradientDefault({ userId: id, guildId, location: "VoicePanelPIPContent-native" });
  closure_8 = tmp3ResultResult;
  const items1 = [tmp, tmp2, dominantColorFromImage, tmp3ResultResult];
  const memo = obj.useMemo(() => {
    const items = [user.user, closure_2, ];
    let tmp = null;
    if (null == closure_8) {
      const obj = { backgroundColor: dominantColorFromImage };
      tmp = obj;
    }
    items[2] = tmp;
    return items;
  }, items1);
  const tmp3Result = useProfileTileGradientDefault;
  [tmp17, c9] = channelId(focused.useState(false), 2);
  const tmp16 = channelId(focused.useState(false), 2);
  let id1;
  if (stateFromStores != null) {
    const user = stateFromStores.user;
    if (user != null) {
      id1 = user.id;
    }
  }
  const items2 = [channelId];
  const surfaceDirectRendererExperiment = participantId(5231).useSurfaceDirectRendererExperiment(id1, { location: "VoicePanelPIPContent" });
  updateIsActivityFocused = obj.useCallback((arg0, arg1) => {
    let participant;
    if (null != arg0) {
      participant = ChannelRTCStore.getParticipant(channelId, arg0);
    }
    let tmp5 = null != participant;
    if (tmp5) {
      tmp5 = guild(participant);
    }
    if (tmp5) {
      tmp5 = arg1 === VoicePanelModes.PANEL;
    }
    _undefined(tmp5);
  }, items2);
  const tmp6Result7 = participantId(5231);
  const fn = function _() {
    value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return id;
  };
  fn.__closure = { focused };
  fn.__workletHash = 4704058004463;
  fn.__initData = __initData7;
  class S {
    constructor(arg0, arg1) {
      if (participantId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[18]);
        tmp3 = closure_10;
        tmp5 = mode;
        runOnJSResult = obj.runOnJS(closure_10);
        tmp4Result = runOnJSResult(participantId, mode.get());
      }
      return;
    }
  }
  const tmp6Result8 = participantId(4850);
  S.__closure = { runOnJS: participantId(4850).runOnJS, updateIsActivityFocused, mode };
  S.__workletHash = 10514296638459;
  S.__initData = __initData8;
  const animatedReaction = tmp6Result8.useAnimatedReaction(fn, S);
  const obj3 = { runOnJS: participantId(4850).runOnJS, updateIsActivityFocused, mode };
  const fn2 = function y() {
    return mode.get();
  };
  fn2.__closure = { mode };
  fn2.__workletHash = 16088308548105;
  fn2.__initData = __initData9;
  const fn3 = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      ReanimatedRexport2.runOnJS(callback)(id, arg0);
      const runOnJSResult = ReanimatedRexport2.runOnJS(callback);
    }
  };
  const tmp6Result9 = participantId(4850);
  fn3.__closure = { runOnJS: participantId(4850).runOnJS, updateIsActivityFocused, focused };
  fn3.__workletHash = 7336366136494;
  fn3.__initData = __initData10;
  const animatedReaction1 = tmp6Result9.useAnimatedReaction(fn2, fn3);
  const obj4 = { runOnJS: participantId(4850).runOnJS, updateIsActivityFocused, focused };
  const items3 = [c9];
  const stateFromStoresObject = participantId(573).useStateFromStoresObject(items3, () => ({ isReactingToThermalState: _undefined.isReactingToThermalState(), consumedRequestToRespondToSeriousThermalState: _undefined.consumedRequestToRespondToSeriousThermalState() }));
  const items4 = [layoutManager, participantId];
  ({ isReactingToThermalState, consumedRequestToRespondToSeriousThermalState } = stateFromStoresObject);
  const callback1 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items4);
  const tmp6Result10 = participantId(573);
  canRenderParticipantVideo = participantId(10904).useCanRenderParticipantVideo(stateFromStores);
  if (canRenderParticipantVideo) {
    let tmp26 = tmp17;
    if (tmp17) {
      tmp26 = isReactingToThermalState;
    }
    canRenderParticipantVideo = !tmp26;
  }
  const items5 = [canRenderParticipantVideo];
  const effect = obj.useEffect(() => {
    if (!canRenderParticipantVideo) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items5);
  const obj5 = { style: null, children: null };
  const tmp6Result11 = participantId(10904);
  if (canRenderParticipantVideo) {
    const items6 = [, ];
    ({ blackBackground: arr8[0], user: arr8[1] } = tmp);
    obj5.style = items6;
    const obj6 = { style: tmp2, participantId, children: null };
    const obj7 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: stateFromStores.streamId, style: null, onSize: null, onReady: null };
    const items7 = [tmp.video, undefined];
    obj7.style = items7;
    obj7.onSize = callback1;
    obj7.onReady = markContentReady;
    obj6.children = closure_22(closure_26, obj7);
    const items8 = [closure_22(closure_46, obj6), closure_22(closure_29, {})];
    obj5.children = items8;
    let tmp41 = obj5;
  } else {
    obj5.style = memo;
    let tmp30 = null;
    if (null != tmp3ResultResult) {
      const obj8 = { colors: tmp3ResultResult, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: layoutManager.absoluteFill, layout: layoutTransition, pointerEvents: "none" };
      tmp30 = closure_22(LinearGradient, obj8);
    }
    const items9 = [tmp30, , , ];
    const obj9 = { style: tmp.avatarWrapper, children: null };
    let tmp34Result = null;
    if (null != user1) {
      const obj10 = { source: tmp6(9029).getCachedSourceFromURI(user1.getAvatarURL(guildId, 80, false)), size: null, avatarDecoration: null };
      const AvatarSizes = tmp6(1200).AvatarSizes;
      obj10.size = tmp17 ? AvatarSizes.LARGE : AvatarSizes.XLARGE;
      let userAvatarDecoration;
      if (stateFromStores != null) {
        userAvatarDecoration = stateFromStores.userAvatarDecoration;
      }
      obj10.avatarDecoration = userAvatarDecoration;
      tmp34Result = closure_22(tmp6(1200).Avatar, obj10);
      const tmp6Result12 = tmp6(9029);
    }
    obj9.children = tmp34Result;
    items9[1] = closure_22(tmp3(6161), obj9);
    const obj11 = { style: tmp.userOpacity };
    items9[2] = closure_22(closure_29, obj11);
    let tmp34Result2 = null;
    if (tmp17) {
      tmp34Result2 = null;
      if (consumedRequestToRespondToSeriousThermalState) {
        const obj12 = { style: tmp.thermalAlertIconContainer, children: null };
        const obj13 = { style: tmp.thermalAlertIcon, source: tmp3(10910), color: tmp.thermalAlertIcon.color };
        obj12.children = closure_22(tmp6(1200).Icon, obj13);
        tmp34Result2 = closure_22(tmp3(6161), obj12);
        const tmp3Result6 = tmp3(6161);
      }
    }
    items9[3] = tmp34Result2;
    obj5.children = items9;
    tmp41 = obj5;
    const tmp3Result5 = tmp3(6161);
  }
  return closure_23(NativeViewDefault, tmp41);
});
const __initData11 = { code: "function VoicePanelPIPContentTsx13(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height=\"100%\";let width=\"100%\";if(targetHeight<targetWidth){width=\"auto\";}else{height=\"auto\";}return{position:\"absolute\",aspectRatio:targetWidth/targetHeight,width:width,height:height};}" };
const __initData12 = { code: "function VoicePanelPIPContentTsx14(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}" };
ReactCompilerGating = fn(558);
let closure_46 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedVideoWrapper(participantId) {
  const cResult = c.c(6);
  ({ style, children } = participantId);
  const targetDimensionsSubscription = VoicePanelCardLayoutManager.useTargetDimensionsSubscription(participantId.participantId, noop.useContext(VoicePanelStateContextDefault).layoutManager);
  const fn = function o() {
    value = targetDimensionsSubscription.get();
    ({ width, height } = value);
    let str = "100%";
    let str2 = "auto";
    if (height < width) {
      str = "auto";
      str2 = "100%";
    }
    const size = { position: "absolute", aspectRatio: width / height, width: str, height: str2 };
    return size;
  };
  fn.__closure = { targetDimensions: targetDimensionsSubscription };
  fn.__workletHash = 17312139117941;
  fn.__initData = __initData11;
  const animatedStyle = ReanimatedRexport2.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === style) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp6) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj4 = { style: tmp6, children };
    const tmp9 = closure_1_22(ReanimatedNativeViewDefault, obj4);
    cResult[3] = children;
    cResult[4] = tmp6;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const items = [style, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = style;
  cResult[2] = items;
  tmp6 = items;
}) : (function AnimatedVideoWrapper(arg0) {
  ({ participantId, style, children } = arg0);
  const targetDimensionsSubscription = VoicePanelCardLayoutManager.useTargetDimensionsSubscription(participantId, noop.useContext(VoicePanelStateContextDefault).layoutManager);
  const fn = function u() {
    value = targetDimensionsSubscription.get();
    ({ width, height } = value);
    let str = "100%";
    let str2 = "auto";
    if (height < width) {
      str = "auto";
      str2 = "100%";
    }
    const size = { position: "absolute", aspectRatio: width / height, width: str, height: str2 };
    return size;
  };
  fn.__closure = { targetDimensions: targetDimensionsSubscription };
  fn.__workletHash = 14992307578674;
  fn.__initData = __initData12;
  const animatedStyle = ReanimatedRexport2.useAnimatedStyle(fn);
  const obj3 = { style: null, children };
  const items = [style, animatedStyle];
  obj3.style = items;
  return closure_1_22(ReanimatedNativeViewDefault, obj3);
});
ReactCompilerGating = fn(558);
let closure_47 = ReactCompilerGating.isReactCompilerEnabled() ? (function Stream(participantId) {
  const cResult = participantId(channelId[21]).c(38);
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  let obj = participantId(channelId[21]);
  const tmp4 = closure_24();
  const mode = participantId(channelId[27]).usePIPState().mode;
  closure_28(tmp4, transitionState, transitionCleanUp);
  const context = streamId.useContext(mode(channelId[22]));
  channelId = context.channelId;
  const layoutManager = context.layoutManager;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === participantId) {
      let tmp9 = cResult[3];
    }
    const stateFromStoresObject = tmp(tmp2[30]).useStateFromStoresObject(first, tmp9);
    streamId = stateFromStoresObject.streamId;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { location: "VoicePanelPIPContent.Stream" };
      cResult[4] = obj4;
      let tmp11 = obj4;
    } else {
      tmp11 = cResult[4];
    }
    const tmpResult = tmp(tmp2[30]);
    const surfaceDirectRendererExperiment = tmp(tmp2[35]).useSurfaceDirectRendererExperiment(stateFromStoresObject.userId, tmp11);
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ApplicationStreamingStore];
      cResult[5] = items1;
      let tmp13 = items1;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] !== participantId) {
      class M {
        constructor() {
          activeStreamForStreamKey = closure_10.getActiveStreamForStreamKey(participantId);
          state = undefined;
          if (activeStreamForStreamKey != null) {
            state = activeStreamForStreamKey.state;
          }
          return state;
        }
      }
      cResult[6] = participantId;
      cResult[7] = M;
    } else {
      class M {
        constructor() {
          activeStreamForStreamKey = closure_10.getActiveStreamForStreamKey(participantId);
          state = undefined;
          if (activeStreamForStreamKey != null) {
            state = activeStreamForStreamKey.state;
          }
          return state;
        }
      }
    }
    const tmpResult3 = tmp(tmp2[35]);
    const stateFromStores = tmp(tmp2[30]).useStateFromStores(tmp13, M);
    if (cResult[8] === layoutManager) {
      class M {
        constructor() {
          activeStreamForStreamKey = closure_10.getActiveStreamForStreamKey(participantId);
          state = undefined;
          if (activeStreamForStreamKey != null) {
            state = activeStreamForStreamKey.state;
          }
          return state;
        }
      }
      closure_5 = closure_5.get();
      StyleSheet = obj3.useRef(0);
      EmbeddedActivitiesStore = obj3.useRef(0);
      if (cResult[11] === mode) {
        class M {
          constructor() {
            activeStreamForStreamKey = closure_10.getActiveStreamForStreamKey(participantId);
            state = undefined;
            if (activeStreamForStreamKey != null) {
              state = activeStreamForStreamKey.state;
            }
            return state;
          }
        }
        if (cResult[14] === mode) {
          class M {
            constructor() {
              activeStreamForStreamKey = closure_10.getActiveStreamForStreamKey(participantId);
              state = undefined;
              if (activeStreamForStreamKey != null) {
                state = activeStreamForStreamKey.state;
              }
              return state;
            }
          }
          ChannelRTCStore = B;
          class B {
            constructor(arg0) {
              tmp2 = null == streamId;
              tmp = streamId;
              if (!tmp2) {
                tmp2 = participantId;
              }
              if (!tmp2) {
                tmp3 = mode;
                tmp4 = VoicePanelPIPModes;
                tmp2 = mode !== VoicePanelPIPModes.IN_APP;
              }
              if (!tmp2) {
                tmp5 = closure_0;
                tmp6 = closure_2;
                obj = closure_0(closure_2[41]);
                size = { width: null, height: null };
                tmp7 = closure_6;
                tmp8 = closure_5;
                size.width = closure_6.current * closure_5;
                tmp9 = closure_7;
                size.height = closure_7.current * closure_5;
                num = 1;
                updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
              }
              return;
            }
          }
          const effect = obj3.useEffect(tmp22, tmp21);
          closure_9 = null != streamId;
          class W {
            constructor(arg0) {
              if (null != streamId) {
                tmp11 = participantId;
                ({ width, height } = participantId.nativeEvent.layout);
                tmp3 = width === closure_6.current;
                tmp12 = closure_6;
                if (tmp3) {
                  tmp2 = closure_7;
                  tmp3 = height === closure_7.current;
                }
                if (!tmp3) {
                  tmp12.current = width;
                  tmp4 = closure_7;
                  closure_7.current = height;
                  tmp5 = mode;
                  tmp6 = VoicePanelPIPModes;
                  if (mode === VoicePanelPIPModes.IN_APP) {
                    tmp7 = closure_0;
                    tmp8 = closure_2;
                    obj = closure_0(closure_2[41]);
                    size = { width: null, height: null };
                    tmp9 = closure_5;
                    size.width = width * closure_5;
                    size.height = height * closure_5;
                    num = 1;
                    updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
                  }
                }
              }
              return;
            }
          }
          const effect1 = obj3.useEffect(tmp25, tmp26);
          if (stateFromStores === constants.ENDED) {
            class M {
              constructor() {
                activeStreamForStreamKey = closure_10.getActiveStreamForStreamKey(participantId);
                state = undefined;
                if (activeStreamForStreamKey != null) {
                  state = activeStreamForStreamKey.state;
                }
                return state;
              }
            }
          } else {
            class M {
              constructor() {
                activeStreamForStreamKey = closure_10.getActiveStreamForStreamKey(participantId);
                state = undefined;
                if (activeStreamForStreamKey != null) {
                  state = activeStreamForStreamKey.state;
                }
                return state;
              }
            }
            if (stateFromStores === tmp28.FAILED) {
              class M {
                constructor() {
                  activeStreamForStreamKey = closure_10.getActiveStreamForStreamKey(participantId);
                  state = undefined;
                  if (activeStreamForStreamKey != null) {
                    state = activeStreamForStreamKey.state;
                  }
                  return state;
                }
              }
            } else {
              class M {
                constructor() {
                  activeStreamForStreamKey = closure_10.getActiveStreamForStreamKey(participantId);
                  state = undefined;
                  if (activeStreamForStreamKey != null) {
                    state = activeStreamForStreamKey.state;
                  }
                  return state;
                }
              }
              if (cResult[25] === W) {
                class M {
                  constructor() {
                    activeStreamForStreamKey = closure_10.getActiveStreamForStreamKey(participantId);
                    state = undefined;
                    if (activeStreamForStreamKey != null) {
                      state = activeStreamForStreamKey.state;
                    }
                    return state;
                  }
                }
              }
              class B {
                constructor(arg0) {
                  tmp2 = null == streamId;
                  tmp = streamId;
                  if (!tmp2) {
                    tmp2 = participantId;
                  }
                  if (!tmp2) {
                    tmp3 = mode;
                    tmp4 = VoicePanelPIPModes;
                    tmp2 = mode !== VoicePanelPIPModes.IN_APP;
                  }
                  if (!tmp2) {
                    tmp5 = closure_0;
                    tmp6 = closure_2;
                    obj = closure_0(closure_2[41]);
                    size = { width: null, height: null };
                    tmp7 = closure_6;
                    tmp8 = closure_5;
                    size.width = closure_6.current * closure_5;
                    tmp9 = closure_7;
                    size.height = closure_7.current * closure_5;
                    num = 1;
                    updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
                  }
                  return;
                }
              }
              const obj5 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, style: null, onSize: null, onLayout: null };
              class W {
                constructor(arg0) {
                  if (null != streamId) {
                    tmp11 = participantId;
                    ({ width, height } = participantId.nativeEvent.layout);
                    tmp3 = width === closure_6.current;
                    tmp12 = closure_6;
                    if (tmp3) {
                      tmp2 = closure_7;
                      tmp3 = height === closure_7.current;
                    }
                    if (!tmp3) {
                      tmp12.current = width;
                      tmp4 = closure_7;
                      closure_7.current = height;
                      tmp5 = mode;
                      tmp6 = VoicePanelPIPModes;
                      if (mode === VoicePanelPIPModes.IN_APP) {
                        tmp7 = closure_0;
                        tmp8 = closure_2;
                        obj = closure_0(closure_2[41]);
                        size = { width: null, height: null };
                        tmp9 = closure_5;
                        size.width = width * closure_5;
                        size.height = height * closure_5;
                        num = 1;
                        updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
                      }
                    }
                  }
                  return;
                }
              }
              obj5.onSize = N;
              obj5.onLayout = W;
              const tmp31 = closure_22(closure_26, obj5);
              cResult[25] = W;
              cResult[26] = N;
              cResult[27] = streamId;
              class N {
                constructor(arg0) {
                  nativeEvent = participantId.nativeEvent;
                  setTargetDimensionsResult = layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
                  return;
                }
              }
              cResult[29] = surfaceDirectRendererExperiment;
              cResult[30] = tmp31;
            }
          }
        }
        class B {
          constructor(arg0) {
            tmp2 = null == streamId;
            tmp = streamId;
            if (!tmp2) {
              tmp2 = participantId;
            }
            if (!tmp2) {
              tmp3 = mode;
              tmp4 = VoicePanelPIPModes;
              tmp2 = mode !== VoicePanelPIPModes.IN_APP;
            }
            if (!tmp2) {
              tmp5 = closure_0;
              tmp6 = closure_2;
              obj = closure_0(closure_2[41]);
              size = { width: null, height: null };
              tmp7 = closure_6;
              tmp8 = closure_5;
              size.width = closure_6.current * closure_5;
              tmp9 = closure_7;
              size.height = closure_7.current * closure_5;
              num = 1;
              updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
            }
            return;
          }
        }
        cResult[14] = mode;
        cResult[15] = streamId;
        class W {
          constructor(arg0) {
            if (null != streamId) {
              tmp11 = participantId;
              ({ width, height } = participantId.nativeEvent.layout);
              tmp3 = width === closure_6.current;
              tmp12 = closure_6;
              if (tmp3) {
                tmp2 = closure_7;
                tmp3 = height === closure_7.current;
              }
              if (!tmp3) {
                tmp12.current = width;
                tmp4 = closure_7;
                closure_7.current = height;
                tmp5 = mode;
                tmp6 = VoicePanelPIPModes;
                if (mode === VoicePanelPIPModes.IN_APP) {
                  tmp7 = closure_0;
                  tmp8 = closure_2;
                  obj = closure_0(closure_2[41]);
                  size = { width: null, height: null };
                  tmp9 = closure_5;
                  size.width = width * closure_5;
                  size.height = height * closure_5;
                  num = 1;
                  updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
                }
              }
            }
            return;
          }
        }
        cResult[16] = B;
      }
      class W {
        constructor(arg0) {
          if (null != streamId) {
            tmp11 = participantId;
            ({ width, height } = participantId.nativeEvent.layout);
            tmp3 = width === closure_6.current;
            tmp12 = closure_6;
            if (tmp3) {
              tmp2 = closure_7;
              tmp3 = height === closure_7.current;
            }
            if (!tmp3) {
              tmp12.current = width;
              tmp4 = closure_7;
              closure_7.current = height;
              tmp5 = mode;
              tmp6 = VoicePanelPIPModes;
              if (mode === VoicePanelPIPModes.IN_APP) {
                tmp7 = closure_0;
                tmp8 = closure_2;
                obj = closure_0(closure_2[41]);
                size = { width: null, height: null };
                tmp9 = closure_5;
                size.width = width * closure_5;
                size.height = height * closure_5;
                num = 1;
                updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
              }
            }
          }
          return;
        }
      }
      cResult[11] = mode;
      cResult[12] = streamId;
      cResult[13] = W;
    }
    class N {
      constructor(arg0) {
        nativeEvent = participantId.nativeEvent;
        setTargetDimensionsResult = layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
        return;
      }
    }
    cResult[8] = layoutManager;
    cResult[9] = participantId;
    cResult[10] = N;
    const tmpResult4 = tmp(tmp2[30]);
  }
  const fn = function u() {
    const participant = ChannelRTCStore.getParticipant(channelId, participantId);
    let tmp2 = null != participant;
    if (tmp2) {
      tmp2 = participant.type === constants5.STREAM;
    }
    streamId = undefined;
    if (tmp2) {
      streamId = participant.streamId;
    }
    const obj = { streamId, userId: null };
    let tmp5;
    if (tmp2) {
      const user = participant.user;
      let id;
      if (user != null) {
        id = user.id;
      }
      tmp5 = id;
    }
    obj.userId = tmp5;
    return obj;
  };
  cResult[1] = channelId;
  cResult[2] = participantId;
  cResult[3] = fn;
  tmp9 = fn;
  const obj2 = participantId(channelId[27]);
}) : (function Stream(participantId) {
  participantId = participantId.participantId;
  dependencyMap = undefined;
  layoutManager = undefined;
  let video;
  c5 = undefined;
  let callback2;
  ({ transitionState, transitionCleanUp, layoutTransition } = participantId);
  const tmp = closure_24();
  const mode = participantId(17741).usePIPState().mode;
  let tmp4 = closure_28(tmp, transitionState, transitionCleanUp);
  const context = video.useContext(mode(11969));
  ({ channelId: c2, layoutManager } = context);
  let obj = participantId(17741);
  let tmp2 = participantId;
  const items = [callback2];
  const stateFromStoresObject = participantId(573).useStateFromStoresObject(items, () => {
    const participant = ChannelRTCStore.getParticipant(c2, participantId);
    let tmp2 = null != participant;
    if (tmp2) {
      tmp2 = participant.type === constants5.STREAM;
    }
    let streamId;
    if (tmp2) {
      streamId = participant.streamId;
    }
    const obj = { streamId, userId: null };
    let tmp5;
    if (tmp2) {
      const user = participant.user;
      let id;
      if (user != null) {
        id = user.id;
      }
      tmp5 = id;
    }
    obj.userId = tmp5;
    return obj;
  });
  video = stateFromStoresObject.streamId;
  const obj2 = participantId(573);
  const surfaceDirectRendererExperiment = participantId(5231).useSurfaceDirectRendererExperiment(stateFromStoresObject.userId, { location: "VoicePanelPIPContent.Stream" });
  const obj3 = participantId(5231);
  const items1 = [ApplicationStreamingStore];
  const stateFromStores = participantId(573).useStateFromStores(items1, () => {
    const activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
    let state;
    if (activeStreamForStreamKey != null) {
      state = activeStreamForStreamKey.state;
    }
    return state;
  });
  const items2 = [layoutManager, participantId];
  const callback = video.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items2);
  value = c5.get();
  c5 = value;
  video.useRef(0);
  video.useRef(0);
  const items3 = [video, value, mode];
  const items4 = [video, value, mode];
  const callback1 = video.useCallback((nativeEvent) => {
    if (null != video) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      let tmp3 = width === ref.current;
      if (tmp3) {
        tmp3 = height === ref2.current;
      }
      if (!tmp3) {
        ref.current = width;
        ref2.current = height;
        if (mode === VoicePanelPIPModes.IN_APP) {
          const size = { width: width * c5, height: height * c5 };
          VideoActionCreators.updateVideoSize(tmp, size, 1);
        }
      }
    }
  }, items3);
  callback2 = video.useCallback((arg0) => {
    let tmp2 = null == video;
    if (!tmp2) {
      tmp2 = arg0;
    }
    if (!tmp2) {
      tmp2 = mode !== VoicePanelPIPModes.IN_APP;
    }
    if (!tmp2) {
      const size = { width: ref.current * c5, height: ref2.current * c5 };
      VideoActionCreators.updateVideoSize(video, size, 1);
    }
  }, items4);
  const items5 = [callback2];
  const effect = video.useEffect(() => {
    closure_0 = ExternalPipDefault.addOnPipModeChangedListener(callback2);
    return () => {
      if (closure_0 != null) {
        closure_0.remove();
      }
    };
  }, items5);
  closure_9 = tmp14;
  const items6 = [null != video];
  const effect1 = video.useEffect(() => {
    if (closure_9) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items6);
  if (stateFromStores === constants.ENDED) {
    const obj5 = { style: tmp.streamEmptyImage, resizeMode: "contain" };
    let tmp23 = closure_22(tmp2(10888).StreamEnded, obj5);
  } else {
    tmp23 = null;
    if (stateFromStores !== tmp16.FAILED) {
      if (tmp14) {
        const obj6 = { style: tmp4, participantId, children: null };
        tmp4 = closure_26;
        const obj7 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: video, style: null, onSize: null, onLayout: null };
        video = tmp.video;
        obj7.style = video;
        obj7.onSize = callback;
        obj7.onLayout = callback1;
        participantId = closure_22(closure_26, obj7);
        obj6.children = participantId;
        let tmp17Result = closure_22(closure_46, obj6);
      } else {
        const obj8 = { participantId, layoutTransition };
        tmp17Result = closure_22(closure_43, obj8);
      }
    }
  }
  return tmp23;
});
let c48 = "--voice-panel-pip-empty";
ReactCompilerGating = fn(558);
let closure_49 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyPIP(transitionState) {
  const cResult = transitionState(576).c(6);
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const tmp3 = closure_24();
  if (cResult[0] === transitionCleanUp) {
    if (cResult[1] === transitionState) {
      let tmp4 = cResult[2];
      let tmp5 = cResult[3];
    }
    const effect = noop.useEffect(tmp4, tmp5);
    if (cResult[4] !== tmp3.emptyPip) {
      const obj2 = { style: tmp3.emptyPip };
      const tmp11 = closure_22(transitionCleanUp(6161), obj2);
      cResult[4] = tmp3.emptyPip;
      cResult[5] = tmp11;
      let tmp8 = tmp11;
    } else {
      tmp8 = cResult[5];
    }
    return tmp8;
  }
  const fn = function o() {
    if (transitionState === native.TransitionStates.YEETED) {
      transitionCleanUp();
    }
  };
  const items = [transitionState, transitionCleanUp];
  cResult[0] = transitionCleanUp;
  cResult[1] = transitionState;
  cResult[2] = fn;
  cResult[3] = items;
  tmp5 = items;
  tmp4 = fn;
  const obj = transitionState(576);
}) : (function EmptyPIP(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const effect = noop.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      transitionCleanUp();
    }
  }, items);
  const tmp = closure_24();
  return closure_22(transitionCleanUp(6161), { style: closure_24().emptyPip });
}));
ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPContent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelPIPContent(layoutTransition) {
  const cResult = layoutTransition(id[21]).c(22);
  layoutTransition = layoutTransition.layoutTransition;
  channelId = noop.useContext(channelId(id[22])).channelId;
  let obj = layoutTransition(id[21]);
  const tmp4 = channelId;
  const pIPState = layoutTransition(id[27]).usePIPState();
  id = pIPState.id;
  ({ width, height } = pIPState);
  const tmp6 = closure_24();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const id1 = AuthenticationStore.getId();
    cResult[0] = id1;
    let first = id1;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelRTCStore];
    cResult[1] = items;
    let tmp10 = items;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === channelId) {
    if (cResult[3] === id) {
      let tmp12 = cResult[4];
      let tmp13 = cResult[5];
    }
    const tmpResult = tmp(tmp2[30]);
    const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12, tmp13, areParticipantsEqual);
    if (cResult[6] === height) {
      if (cResult[7] === width) {
        let tmp21 = cResult[8];
      }
      if (cResult[9] !== tmp21) {
        let obj3 = { borderRadius: tmp21 };
        cResult[9] = tmp21;
        cResult[10] = obj3;
        let tmp23 = obj3;
      } else {
        tmp23 = cResult[10];
      }
      if (cResult[11] === tmp6.contentWrapper) {
        if (cResult[12] === tmp23) {
          let tmp24 = cResult[13];
        }
        if (cResult[14] !== layoutTransition) {
          const fn2 = function b(arg0, id, transitionState, transitionCleanUp) {
            if (id.id === c48) {
              const obj2 = { transitionState, transitionCleanUp };
              return closure_2_22(closure_49, obj2, arg0);
            } else {
              const obj3 = { participantId: id.id, transitionState, transitionCleanUp, layoutTransition };
              const type = id.type;
              if (constants5.ACTIVITY === type) {
                const obj4 = {};
                const merged = Object.assign(obj3);
                return closure_2_22(closure_34, obj4, arg0);
              } else if (constants5.STREAM === type) {
                const obj5 = {};
                const merged1 = Object.assign(obj3);
                return closure_2_22(closure_47, obj5, arg0);
              } else {
                if (constants5.USER !== type) {
                  const HIDDEN_STREAM = constants5.HIDDEN_STREAM;
                }
                const obj = {};
                const merged2 = Object.assign(obj3);
                return closure_2_22(closure_43, obj, arg0);
              }
            }
          };
          cResult[14] = layoutTransition;
          cResult[15] = fn2;
          let tmp25 = fn2;
        } else {
          tmp25 = cResult[15];
        }
        if (cResult[16] === stateFromStores) {
          if (cResult[17] === tmp25) {
            let tmp26 = cResult[18];
          }
          if (cResult[19] === tmp26) {
            if (cResult[20] === tmp24) {
              let tmp30 = cResult[21];
            }
            return tmp30;
          }
          let obj4 = { style: tmp24, pointerEvents: "none", children: tmp26 };
          const tmp32 = closure_22(tmp4(tmp2[29]), obj4);
          cResult[19] = tmp26;
          cResult[20] = tmp24;
          cResult[21] = tmp32;
          tmp30 = tmp32;
        }
        let obj5 = { items: stateFromStores, renderItem: tmp25, getItemKey: getFocusedKey };
        const tmp29 = closure_22(tmp(tmp2[26]).TransitionGroup, obj5);
        cResult[16] = stateFromStores;
        cResult[17] = tmp25;
        cResult[18] = tmp29;
        tmp26 = tmp29;
      }
      const items1 = [tmp20, tmp23];
      const items2 = [items1];
      cResult[11] = tmp6.contentWrapper;
      cResult[12] = tmp23;
      cResult[13] = items2;
      tmp24 = items2;
    }
    const voicePanelPIPBorderRadius = tmp(tmp2[28]).getVoicePanelPIPBorderRadius(width, height);
    cResult[6] = height;
    cResult[7] = width;
    cResult[8] = voicePanelPIPBorderRadius;
    tmp21 = voicePanelPIPBorderRadius;
    const tmpResult2 = tmp(tmp2[28]);
  }
  const fn = function y() {
    let tmp = id;
    if (null != id) {
      const participant = ChannelRTCStore.getParticipant(channelId, tmp);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      let USER = type;
    } else {
      USER = constants5.USER;
    }
    if (USER == null) {
      USER = constants5.USER;
    }
    if (tmp == null) {
      tmp = first;
    }
    const items = [{ id: tmp, type: USER }];
    return items;
  };
  const items3 = [id, channelId, first];
  cResult[2] = channelId;
  cResult[3] = id;
  cResult[4] = fn;
  cResult[5] = items3;
  tmp13 = items3;
  tmp12 = fn;
  let obj2 = layoutTransition(id[27]);
}) : (function VoicePanelPIPContent(layoutTransition) {
  layoutTransition = layoutTransition.layoutTransition;
  let channelId;
  let id;
  let height;
  channelId = height.useContext(channelId(id[22])).channelId;
  const size = layoutTransition(id[27]).usePIPState();
  id = size.id;
  const width = size.width;
  height = size.height;
  let tmp = closure_24();
  const id1 = AuthenticationStore.getId();
  let obj = layoutTransition(id[27]);
  let items = [ChannelRTCStore];
  let items1 = [id, channelId, id1];
  const items2 = [width, height, tmp.contentWrapper];
  const stateFromStores = layoutTransition(id[30]).useStateFromStores(items, () => {
    let tmp = id;
    if (null != id) {
      const participant = ChannelRTCStore.getParticipant(channelId, tmp);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      let USER = type;
    } else {
      USER = constants5.USER;
    }
    if (USER == null) {
      USER = constants5.USER;
    }
    if (tmp == null) {
      tmp = id1;
    }
    const items = [{ id: tmp, type: USER }];
    return items;
  }, items1, areParticipantsEqual);
  const items3 = [layoutTransition];
  const memo = height.useMemo(() => {
    const items = [contentWrapper.contentWrapper, ];
    const obj = { borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height) };
    items[1] = obj;
    const items1 = [items];
    return items1;
  }, items2);
  const callback = height.useCallback((arg0, id, transitionState, transitionCleanUp) => {
    if (id.id === c48) {
      const obj2 = { transitionState, transitionCleanUp };
      return closure_2_22(closure_49, obj2, arg0);
    } else {
      const obj3 = { participantId: id.id, transitionState, transitionCleanUp, layoutTransition };
      const type = id.type;
      if (constants5.ACTIVITY === type) {
        const obj4 = {};
        const merged = Object.assign(obj3);
        return closure_2_22(closure_34, obj4, arg0);
      } else if (constants5.STREAM === type) {
        const obj5 = {};
        const merged1 = Object.assign(obj3);
        return closure_2_22(closure_47, obj5, arg0);
      } else {
        if (constants5.USER !== type) {
          const HIDDEN_STREAM = constants5.HIDDEN_STREAM;
        }
        const obj = {};
        const merged2 = Object.assign(obj3);
        return closure_2_22(closure_43, obj, arg0);
      }
    }
  }, items3);
  let obj3 = { style: memo, pointerEvents: "none", children: null };
  let obj2 = layoutTransition(id[30]);
  obj3.children = closure_22(layoutTransition(id[26]).TransitionGroup, { items: stateFromStores, renderItem: callback, getItemKey: getFocusedKey });
  return closure_22(channelId(id[29]), obj3);
}));