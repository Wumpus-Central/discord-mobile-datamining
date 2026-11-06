// === Module 19596: VoicePanelPIPContent ===

// Module 19596 (VoicePanelPIPContent)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import useWindowDimensions from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2143 */;
import native from "native" /* 5229 */;
import LinearGradientDefault from "LinearGradient" /* 5745 */;
import ExternalPipDefault from "ExternalPip" /* 6030 */;
import NativeViewDefault from "NativeView" /* 7048 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11380 */;
import VoicePanelCardLayoutManager from "VoicePanelCardLayoutManager" /* 11383 */;
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 11946 */;
import useUserTileBackgroundDefault from "useUserTileBackground" /* 19410 */;
import VideoActionCreators from "VideoActionCreators" /* 19411 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 19413 */;
import VoicePanelStreamOutputSinkStack from "VoicePanelStreamOutputSinkStack" /* 19493 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5018 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6923 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11877 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6794 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import UserStore from "UserStore" /* 1385 */;

const module_1652 = _mod1652;

require = fn;
function VideoStream(streamId) {
  streamId = streamId.streamId;
  const setHasActiveVideoOutputSink = VoicePanelStreamOutputSinkStack.useSetHasActiveVideoOutputSink(noop.useContext(VoicePanelStateContextDefault).streamOutputSinkStack);
  items = [setHasActiveVideoOutputSink, streamId];
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
  return guild(VideoRendererNativeComponentDefault, obj2);
}
function markContentReady() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
}
function InnerStroke(style) {
  style = style.style;
  let height;
  const size = style(height[25]).usePIPState();
  const width = size.width;
  height = size.height;
  const tmp = closure_23();
  const innerStroke = tmp;
  const obj2 = { style: null };
  items = [width, height, tmp.innerStroke, style];
  let obj = style(height[25]);
  obj2.style = noop.useMemo(() => {
    items = [innerStroke.innerStroke, , ];
    const obj = { borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height) + 1 };
    items[1] = obj;
    items[2] = style;
    return items;
  }, items);
  return closure_21(width(height[26]), obj2);
}
function ActivityInVoice(participantId) {
  participantId = participantId.participantId;
  _require = participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  importDefault = undefined;
  let layoutManager;
  let first;
  noop = undefined;
  let callback;
  closure_8 = undefined;
  let tmp = closure_23();
  closure_129_0 = transitionState;
  closure_129_1 = transitionCleanUp;
  items = [transitionState, transitionCleanUp];
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
    if (timeout === participantId(_undefined[24]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = participantId(_undefined[23]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants2.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
  }, items);
  let items14 = layoutManager;
  let tmp5 = importDefault;
  const context = obj.useContext(require("VoicePanelStateContext"));
  const channelId = context.channelId;
  importDefault = channelId;
  layoutManager = context.layoutManager;
  const tmp4 = transitionState === require("native").TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const items1 = [ChannelStore];
  let PIP = require("useStateFromStores").useStateFromStores(items1, () => ChannelStore.getChannel(c1));
  const tmp7 = first(noop.useState(transitionState === require("native").TransitionStates.MOUNTED), 2);
  first = tmp7[0];
  noop = tmp7[1];
  const tmp3Result = require("useStateFromStores");
  const items2 = [closure_8];
  const items3 = [channelId, participantId];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items2, () => {
    const participant = ChannelRTCStore.getParticipant(c1, c0);
    let applicationId = c0;
    if (null != participant) {
      applicationId = c0;
      if (participant.type === constants3.ACTIVITY) {
        applicationId = participant.applicationId;
      }
    }
    return applicationId;
  }, items3);
  const tmp3Result4 = require("useStateFromStores");
  const items4 = [callback];
  const items5 = [stateFromStores];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items4, () => EmbeddedActivitiesStore.getPipOrientationLockStateForApp(stateFromStores), items5);
  const items6 = [layoutManager, stateFromStores1, stateFromStores];
  callback = obj.useCallback((width) => {
    if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.LANDSCAPE === stateFromStores1) {
      layoutManager.setTargetDimensions(stateFromStores, 16, 9);
    } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.PORTRAIT === stateFromStores1) {
      layoutManager.setTargetDimensions(stateFromStores, 9, 16);
    } else if (EmbeddedActivityOrientationLockState.EmbeddedActivityOrientationLockState.UNLOCKED === stateFromStores1) {
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
  }, items6);
  const items7 = [callback];
  const layoutEffect = obj.useLayoutEffect(() => {
    const size = useWindowDimensions.getWindowDimensions();
    const obj2 = {};
    const merged = Object.assign(size);
    obj2.landscape = size.width > size.height;
    callback(obj2);
  }, items7);
  const tmp3Result5 = require("useStateFromStores");
  const items8 = [closure_28, context.windowDimensions];
  _require = undefined;
  [tmp13, tmp14] = items8;
  class VoicePanelPIPContentTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items9 = [tmp14];
  VoicePanelPIPContentTsx1.__closure = items9;
  VoicePanelPIPContentTsx1.__workletHash = 16564210571233;
  VoicePanelPIPContentTsx1.__initData = tmp13;
  const items10 = [closure_29, require("module_1705").scheduleOnRN, callback];
  _require = undefined;
  importDefault = undefined;
  [tmp15, tmp16, tmp17] = items10;
  class VoicePanelPIPContentTsx2 {
    constructor(arg0, arg1) {
      if (participantId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, participantId);
      }
      return;
    }
  }
  const items11 = [tmp16, tmp17];
  VoicePanelPIPContentTsx2.__closure = items11;
  VoicePanelPIPContentTsx2.__workletHash = 16707903249569;
  VoicePanelPIPContentTsx2.__initData = tmp15;
  const animatedReaction = require("module_1652").useAnimatedReaction(VoicePanelPIPContentTsx1, VoicePanelPIPContentTsx2);
  closure_8 = tmp19;
  const items12 = [null != PIP, first];
  const effect1 = obj.useEffect(() => {
    if (!first) {
      if (closure_8) {
        let ComponentDispatch = _undefined(layoutManager[23]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
      }
    }
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_4(false);
        const ComponentDispatch = c0(layoutManager[23]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
      }, 500);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items12);
  if (first) {
    return null;
  } else if (tmp19) {
    let obj2 = { style: null, children: null };
    const items13 = [tmp.activity, tmp4];
    obj2.style = items13;
    tmp = closure_21;
    const obj3 = { channel: PIP, layoutMode: null };
    PIP = ActivityLayoutMode.PIP;
    obj3.layoutMode = PIP;
    const tmp5Result = tmp5(items14[26]);
    items14 = [, ];
    items14[0] = closure_21(tmp5(items14[32]), obj3);
    tmp5 = InnerStroke;
    items14[1] = closure_21(InnerStroke, {});
    obj2.children = items14;
    let tmp24 = closure_22(tmp5Result, obj2);
    const tmp28 = closure_21(tmp5(items14[32]), obj3);
  } else {
    const obj4 = { participantId: AuthenticationStore.getId(), layoutTransition: participantId.layoutTransition };
    tmp24 = closure_21(User, obj4);
  }
  const tmp3Result6 = require("module_1652");
}
function User(participantId) {
  participantId = participantId.participantId;
  _require = participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  layoutManager = undefined;
  backgroundColor = undefined;
  StyleSheet = undefined;
  let canRenderParticipantVideo;
  const tmp = closure_23();
  importDefault = tmp;
  closure_129_0 = transitionState;
  closure_129_1 = transitionCleanUp;
  items = [transitionState, transitionCleanUp];
  const effect = layoutManager.useEffect(() => {
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
    if (timeout === participantId(_undefined[24]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = participantId(_undefined[23]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants2.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
  }, items);
  let tmp5 = transitionState === require("native").TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  dependencyMap = tmp5;
  const context = obj.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ guildId, focused, mode, layoutManager } = context);
  const items1 = [ChannelRTCStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items1, () => {
    const participant = ChannelRTCStore.getParticipant(channelId, c0);
    let type;
    if (participant != null) {
      type = participant.type;
    }
    let tmp3;
    if (type === constants3.USER) {
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
  let id;
  const tmp3Result = require("useStateFromStores");
  if (user1 != null) {
    id = user1.id;
  }
  const obj2 = { userId: id, guildId, avatarURI: null, location: "VoicePanelPIPContent-native" };
  let avatarURL;
  if (user1 != null) {
    avatarURL = user1.getAvatarURL(guildId, 80, false);
  }
  obj2.avatarURI = avatarURL;
  const tmp6Result = useUserTileBackgroundDefault;
  ({ gradientStops, backgroundColor } = useUserTileBackgroundDefault(obj2));
  const items2 = [tmp, tmp5, backgroundColor];
  const memo = obj.useMemo(() => {
    items = [_undefined2.user, c2, { backgroundColor }];
    return items;
  }, items2);
  const tmp6ResultResult = useUserTileBackgroundDefault(obj2);
  [tmp17, c6] = channelId(layoutManager.useState(false), 2);
  const tmp16 = channelId(layoutManager.useState(false), 2);
  let id1;
  if (stateFromStores != null) {
    const user = stateFromStores.user;
    if (user != null) {
      id1 = user.id;
    }
  }
  const items3 = [channelId];
  const surfaceDirectRendererExperiment = require("SurfaceDirectRendererExperiment").useSurfaceDirectRendererExperiment(id1, { location: "VoicePanelPIPContent" });
  const callback = obj.useCallback((arg0, arg1) => {
    let participant;
    if (null != arg0) {
      participant = ChannelRTCStore.getParticipant(channelId, arg0);
    }
    let tmp5 = null != participant;
    if (tmp5) {
      tmp5 = expandedHeight(participant);
    }
    if (tmp5) {
      tmp5 = arg1 === VoicePanelModes.PANEL;
    }
    _undefined2(tmp5);
  }, items3);
  const tmp3Result7 = require("SurfaceDirectRendererExperiment");
  const items4 = [closure_31, focused];
  _require = undefined;
  [tmp21, tmp22] = items4;
  class VoicePanelPIPContentTsx3 {
    constructor() {
      value = closure_0.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  const items5 = [tmp22];
  VoicePanelPIPContentTsx3.__closure = items5;
  VoicePanelPIPContentTsx3.__workletHash = 6441718203964;
  VoicePanelPIPContentTsx3.__initData = tmp21;
  const items6 = [closure_32, require("module_1705").scheduleOnRN, callback, mode];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp23, tmp24, tmp25, tmp26] = items6;
  class VoicePanelPIPContentTsx4 {
    constructor(arg0, arg1) {
      if (participantId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_0(closure_1, participantId, closure_2.get());
      }
      return;
    }
  }
  const items7 = [tmp24, tmp25, tmp26];
  VoicePanelPIPContentTsx4.__closure = items7;
  VoicePanelPIPContentTsx4.__workletHash = 16332434412117;
  VoicePanelPIPContentTsx4.__initData = tmp23;
  const animatedReaction = require("module_1652").useAnimatedReaction(VoicePanelPIPContentTsx3, VoicePanelPIPContentTsx4);
  const tmp3Result8 = require("module_1652");
  const items8 = [closure_33, mode];
  _require = undefined;
  [tmp28, tmp29] = items8;
  class VoicePanelPIPContentTsx5 {
    constructor() {
      return closure_0.get();
    }
  }
  const items9 = [tmp29];
  VoicePanelPIPContentTsx5.__closure = items9;
  VoicePanelPIPContentTsx5.__workletHash = 15346107869093;
  VoicePanelPIPContentTsx5.__initData = tmp28;
  const items10 = [closure_34, require("module_1705").scheduleOnRN, callback, focused];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp30, tmp31, tmp32, tmp33] = items10;
  class VoicePanelPIPContentTsx6 {
    constructor(arg0, arg1) {
      if (participantId !== arg1) {
        tmp3 = closure_2;
        tmp = closure_0;
        tmp2 = closure_1;
        value = closure_2.get();
        tmp5 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmpResult = tmp(tmp2, id, participantId);
      }
      return;
    }
  }
  const items11 = [tmp31, tmp32, tmp33];
  VoicePanelPIPContentTsx6.__closure = items11;
  VoicePanelPIPContentTsx6.__workletHash = 11281785981647;
  VoicePanelPIPContentTsx6.__initData = tmp30;
  const animatedReaction1 = require("module_1652").useAnimatedReaction(VoicePanelPIPContentTsx5, VoicePanelPIPContentTsx6);
  const tmp3Result9 = require("module_1652");
  const items12 = [ChannelCallLifecycleStore];
  const stateFromStoresObject = require("useStateFromStores").useStateFromStoresObject(items12, () => ({ isReactingToThermalState: ChannelCallLifecycleStore.isReactingToThermalState(), consumedRequestToRespondToSeriousThermalState: ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState() }));
  const items13 = [layoutManager, participantId];
  ({ isReactingToThermalState, consumedRequestToRespondToSeriousThermalState } = stateFromStoresObject);
  const callback1 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(c0, nativeEvent.width, nativeEvent.height);
  }, items13);
  const tmp3Result10 = require("useStateFromStores");
  canRenderParticipantVideo = require("participantHasVideo").useCanRenderParticipantVideo(stateFromStores);
  if (canRenderParticipantVideo) {
    let tmp38 = tmp17;
    if (tmp17) {
      tmp38 = isReactingToThermalState;
    }
    canRenderParticipantVideo = !tmp38;
  }
  const items14 = [canRenderParticipantVideo];
  const effect1 = obj.useEffect(() => {
    if (!canRenderParticipantVideo) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items14);
  const obj3 = { style: null, children: null };
  const tmp3Result11 = require("participantHasVideo");
  if (canRenderParticipantVideo) {
    const items15 = [, ];
    ({ blackBackground: arr17[0], user: arr17[1] } = tmp);
    obj3.style = items15;
    const obj4 = { style: tmp5, participantId, children: null };
    const obj5 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: stateFromStores.streamId, style: null, onSize: null, onReady: null };
    const items16 = [tmp.video, undefined];
    obj5.style = items16;
    obj5.onSize = callback1;
    obj5.onReady = markContentReady;
    obj4.children = closure_21(VideoStream, obj5);
    const items17 = [closure_21(AnimatedVideoWrapper, obj4), closure_21(InnerStroke, {})];
    obj3.children = items17;
    let tmp53 = obj3;
  } else {
    obj3.style = memo;
    let tmp42 = null;
    if (null != gradientStops) {
      const obj6 = { colors: gradientStops, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: StyleSheet.absoluteFill, layout: participantId.layoutTransition, pointerEvents: "none" };
      tmp42 = closure_21(LinearGradient, obj6);
    }
    const items18 = [tmp42, , , ];
    const obj7 = { style: tmp.avatarWrapper, children: null };
    let tmp46Result = null;
    if (null != user1) {
      const obj8 = { source: tmp3(9624).getCachedSourceFromURI(user1.getAvatarURL(guildId, 80, false)), size: null, avatarDecoration: null };
      const AvatarSizes = tmp3(1187).AvatarSizes;
      obj8.size = tmp17 ? AvatarSizes.LARGE : AvatarSizes.XLARGE;
      let userAvatarDecoration;
      if (stateFromStores != null) {
        userAvatarDecoration = stateFromStores.userAvatarDecoration;
      }
      obj8.avatarDecoration = userAvatarDecoration;
      tmp46Result = closure_21(tmp3(1187).Avatar, obj8);
      const tmp3Result12 = tmp3(9624);
    }
    obj7.children = tmp46Result;
    items18[1] = closure_21(tmp6(7048), obj7);
    const obj9 = { style: tmp.userOpacity };
    items18[2] = closure_21(InnerStroke, obj9);
    let tmp46Result2 = null;
    if (tmp17) {
      tmp46Result2 = null;
      if (consumedRequestToRespondToSeriousThermalState) {
        const obj10 = { style: tmp.thermalAlertIconContainer, children: null };
        const obj11 = { style: tmp.thermalAlertIcon, source: tmp6(11952), color: tmp.thermalAlertIcon.color };
        obj10.children = closure_21(tmp3(1187).Icon, obj11);
        tmp46Result2 = closure_21(tmp6(7048), obj10);
        const tmp6Result6 = tmp6(7048);
      }
    }
    items18[3] = tmp46Result2;
    obj3.children = items18;
    tmp53 = obj3;
    const tmp6Result5 = tmp6(7048);
  }
  return closure_22(NativeViewDefault, tmp53);
}
function AnimatedVideoWrapper(arg0) {
  ({ participantId, style, children } = arg0);
  const targetDimensionsSubscription = VoicePanelCardLayoutManager.useTargetDimensionsSubscription(participantId, noop.useContext(VoicePanelStateContextDefault).layoutManager);
  items = [closure_36, targetDimensionsSubscription];
  c0 = undefined;
  [tmp4, tmp5] = items;
  class VoicePanelPIPContentTsx7 {
    constructor() {
      value = closure_0.get();
      ({ width, height } = value);
      str = "100%";
      str2 = "auto";
      if (height < width) {
        str = "auto";
        str2 = "100%";
      }
      size = { position: "absolute", aspectRatio: width / height, width: str, height: str2 };
      return size;
    }
  }
  const items1 = [tmp5];
  VoicePanelPIPContentTsx7.__closure = items1;
  VoicePanelPIPContentTsx7.__workletHash = 2684111713049;
  VoicePanelPIPContentTsx7.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelPIPContentTsx7);
  const obj3 = { style: null, children };
  const items2 = [style, animatedStyle];
  obj3.style = items2;
  return guild(module_1652.View, obj3);
}
function Stream(participantId) {
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  dependencyMap = undefined;
  layoutManager = undefined;
  let video;
  c5 = undefined;
  let callback2;
  ({ layoutTransition, onStreamReady } = participantId);
  let tmp = closure_23();
  const mode = participantId(19503).usePIPState().mode;
  closure_129_0 = transitionState;
  closure_129_1 = transitionCleanUp;
  items = [transitionState, transitionCleanUp];
  const effect = video.useEffect(() => {
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
    if (timeout === participantId(_undefined[24]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = participantId(_undefined[23]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(constants2.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
  }, items);
  let tmp5 = transitionState === participantId(5229).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const context = obj2.useContext(mode(11380));
  ({ channelId: c2, layoutManager } = context);
  let obj = participantId(19503);
  const items1 = [callback2];
  const stateFromStoresObject = participantId(563).useStateFromStoresObject(items1, () => {
    const participant = ChannelRTCStore.getParticipant(c2, participantId);
    let tmp2 = null != participant;
    if (tmp2) {
      tmp2 = participant.type === constants3.STREAM;
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
  const tmp2Result = participantId(563);
  const surfaceDirectRendererExperiment = participantId(6046).useSurfaceDirectRendererExperiment(stateFromStoresObject.userId, { location: "VoicePanelPIPContent.Stream" });
  const tmp2Result3 = participantId(6046);
  const items2 = [ApplicationStreamingStore];
  const stateFromStores = participantId(563).useStateFromStores(items2, () => {
    const activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
    state = undefined;
    if (activeStreamForStreamKey != null) {
      state = activeStreamForStreamKey.state;
    }
    return state;
  });
  const items3 = [layoutManager, participantId];
  const callback = obj2.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items3);
  value = c5.get();
  c5 = value;
  video.useRef(0);
  video.useRef(0);
  const items4 = [video, value, mode];
  const items5 = [video, value, mode];
  const callback1 = obj2.useCallback((nativeEvent) => {
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
  }, items4);
  callback2 = obj2.useCallback((arg0) => {
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
  }, items5);
  const items6 = [callback2];
  const effect1 = obj2.useEffect(() => {
    closure_0 = ExternalPipDefault.addOnPipModeChangedListener(callback2);
    return () => {
      if (closure_0 != null) {
        closure_0.remove();
      }
    };
  }, items6);
  closure_9 = tmp15;
  const items7 = [null != video];
  const effect2 = obj2.useEffect(() => {
    if (closure_9) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items7);
  if (stateFromStores === constants.ENDED) {
    const obj3 = { style: tmp.streamEmptyImage, resizeMode: "contain" };
    let tmp23 = closure_21(tmp2(19597).StreamEnded, obj3);
  } else {
    tmp23 = null;
    if (stateFromStores !== tmp17.FAILED) {
      if (tmp15) {
        const obj4 = { style: tmp5, participantId, children: null };
        tmp5 = VideoStream;
        const obj5 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: video, style: null, onSize: null, onLayout: null, onReady: null };
        video = tmp.video;
        obj5.style = video;
        obj5.onSize = callback;
        obj5.onLayout = callback1;
        obj5.onReady = onStreamReady;
        participantId = closure_21(VideoStream, obj5);
        obj4.children = participantId;
        let tmp24Result = closure_21(AnimatedVideoWrapper, obj4);
      } else {
        const obj6 = { participantId, layoutTransition };
        tmp24Result = closure_21(User, obj6);
      }
    }
  }
  return tmp23;
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
const VoicePanelModes = fn(11381).VoicePanelModes;
const VoicePanelPIPModes = fn(19414).VoicePanelPIPModes;
const Constants = fn(1072);
({ ApplicationStreamStates: closure_16, ComponentActions: closure_17 } = Constants);
const CallConstants = fn(5835);
({ ParticipantTypes: closure_18, isActivityParticipant: closure_19 } = CallConstants);
const ActivityLayoutMode = fn(11864).ActivityLayoutMode;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(5170);
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
let closure_23 = createStyles.createStyles(obj);
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
let closure_28 = { code: "(function VoicePanelPIPContentTsx1(){let[windowDimensions]=this.__closure;return windowDimensions.get();})" };
let closure_29 = { code: "(function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){let[scheduleOnRN,handleTargetAspectRatioParams]=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){scheduleOnRN(handleTargetAspectRatioParams,windowDimensionsVal);}})" };
let closure_31 = { code: "(function VoicePanelPIPContentTsx3(){let[focused]=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;})" };
let closure_32 = { code: "(function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){let[scheduleOnRN,updateIsActivityFocused,mode]=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){scheduleOnRN(updateIsActivityFocused,focusedParticipantId,mode.get());}})" };
let closure_33 = { code: "(function VoicePanelPIPContentTsx5(){let[mode]=this.__closure;return mode.get();})" };
let closure_34 = { code: "(function VoicePanelPIPContentTsx6(modeVal,previousModeVal){let[scheduleOnRN,updateIsActivityFocused,focused]=this.__closure;if(modeVal!==previousModeVal){var _focused$get;scheduleOnRN(updateIsActivityFocused,(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}})" };
let closure_36 = { code: "(function VoicePanelPIPContentTsx7(){let[targetDimensions]=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};})" };
let closure_39 = noop.memo(function EmptyPIP(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  items = [transitionState, transitionCleanUp];
  const effect = noop.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      transitionCleanUp();
    }
  }, items);
  const tmp = closure_23();
  return closure_21(transitionCleanUp(7048), { style: closure_23().emptyPip });
});
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPContent.tsx");

export default noop.memo(function VoicePanelPIPContent(layoutTransition) {
  layoutTransition = layoutTransition.layoutTransition;
  const onStreamReady = layoutTransition.onStreamReady;
  let channelId;
  let width;
  channelId = width.useContext(onStreamReady(channelId[20])).channelId;
  const size = layoutTransition(channelId[25]).usePIPState();
  const id = size.id;
  width = size.width;
  const height = size.height;
  let tmp = closure_23();
  const id1 = AuthenticationStore.getId();
  let obj = layoutTransition(channelId[25]);
  items = [ChannelRTCStore];
  let items1 = [id, channelId, id1];
  const stateFromStores = layoutTransition(channelId[28]).useStateFromStores(items, () => {
    let tmp = id;
    if (null != id) {
      const participant = ChannelRTCStore.getParticipant(channelId, tmp);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      let USER = type;
    } else {
      USER = constants3.USER;
    }
    if (USER == null) {
      USER = constants3.USER;
    }
    if (tmp == null) {
      tmp = id1;
    }
    items = [{ id: tmp, type: USER }];
    return items;
  }, items1, areParticipantsEqual);
  const items2 = [width, height, tmp.contentWrapper];
  const items3 = [layoutTransition, onStreamReady];
  const memo = width.useMemo(() => {
    items = [contentWrapper.contentWrapper, ];
    const obj = { borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height) };
    items[1] = obj;
    const items1 = [items];
    return items1;
  }, items2);
  const callback = width.useCallback((arg0, id, transitionState, transitionCleanUp) => {
    if ("--voice-panel-pip-empty" === id.id) {
      const obj2 = { transitionState, transitionCleanUp };
      return guild(closure_39, obj2, arg0);
    } else {
      const obj3 = { participantId: id.id, transitionState, transitionCleanUp, layoutTransition };
      const type = id.type;
      if (constants3.ACTIVITY === type) {
        const obj4 = {};
        const merged = Object.assign(obj3);
        return guild(ActivityInVoice, obj4, arg0);
      } else if (constants3.STREAM === type) {
        const obj5 = {};
        const merged1 = Object.assign(obj3);
        obj5.onStreamReady = onStreamReady;
        return guild(Stream, obj5, arg0);
      } else {
        if (constants3.USER !== type) {
          const HIDDEN_STREAM = constants3.HIDDEN_STREAM;
        }
        const obj = {};
        const merged2 = Object.assign(obj3);
        return guild(User, obj, arg0);
      }
    }
  }, items3);
  let obj3 = { style: memo, pointerEvents: "none", nativeID: null, children: null };
  let obj2 = layoutTransition(channelId[28]);
  const tmp6 = onStreamReady(channelId[26]);
  obj3.nativeID = layoutTransition(channelId[43]).getExternalPipTileNativeId("pip", stateFromStores[0].id);
  obj3.children = closure_21(layoutTransition(channelId[24]).TransitionGroup, { items: stateFromStores, renderItem: callback, getItemKey: getFocusedKey });
  return closure_21(tmp6, obj3);
});