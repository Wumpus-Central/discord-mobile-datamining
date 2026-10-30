// === Module 19225: VoicePanelPIPContent ===

// Module 19225 (VoicePanelPIPContent)
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import useWindowDimensions from "useWindowDimensions" /* 1492 */;
import EmbeddedActivityOrientationLockState from "EmbeddedActivityOrientationLockState" /* 2021 */;
import native from "native" /* 5075 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5090 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import ExternalPipDefault from "ExternalPip" /* 5869 */;
import NativeViewDefault from "NativeView" /* 6954 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7235 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11203 */;
import VoicePanelCardLayoutManager from "VoicePanelCardLayoutManager" /* 11206 */;
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 11736 */;
import useUserTileBackgroundDefault from "useUserTileBackground" /* 19055 */;
import VideoActionCreators from "VideoActionCreators" /* 19056 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 19058 */;
import VoicePanelStreamOutputSinkStack from "VoicePanelStreamOutputSinkStack" /* 19137 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6837 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 11667 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6708 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import UserStore from "UserStore" /* 1384 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function VideoStream(streamId) {
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
  return __initData(VideoRendererNativeComponentDefault, obj2);
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
  let items = [width, height, tmp.innerStroke, style];
  let obj = style(height[25]);
  obj2.style = noop.useMemo(() => {
    const items = [innerStroke.innerStroke, , ];
    const obj = { borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height) + 1 };
    items[1] = obj;
    items[2] = style;
    return items;
  }, items);
  return closure_21(width(height[26]), obj2);
}
function ActivityInVoice(participantId) {
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  let channelId;
  let layoutManager;
  let first;
  let stateFromStores1;
  let handleTargetAspectRatioParams;
  let tmp = closure_23();
  closure_129_0 = transitionState;
  closure_129_1 = transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const effect = first.useEffect(() => {
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
  let items10 = layoutManager;
  let tmp5 = channelId;
  const context = obj.useContext(channelId(items10[20]));
  channelId = context.channelId;
  layoutManager = context.layoutManager;
  const windowDimensions = context.windowDimensions;
  const tmp4 = transitionState === participantId(layoutManager[24]).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const items1 = [ChannelStore];
  let PIP = participantId(items10[28]).useStateFromStores(items1, () => ChannelStore.getChannel(channelId));
  const tmp7 = windowDimensions(first.useState(transitionState === participantId(items10[24]).TransitionStates.MOUNTED), 2);
  first = tmp7[0];
  closure_5 = tmp7[1];
  const tmp3Result = participantId(items10[28]);
  const items2 = [handleTargetAspectRatioParams];
  const items3 = [channelId, participantId];
  const stateFromStores = participantId(items10[28]).useStateFromStores(items2, () => {
    const participant = ChannelRTCStore.getParticipant(channelId, participantId);
    let applicationId = participantId;
    if (null != participant) {
      applicationId = participantId;
      if (participant.type === constants3.ACTIVITY) {
        applicationId = participant.applicationId;
      }
    }
    return applicationId;
  }, items3);
  const tmp3Result4 = participantId(items10[28]);
  const items4 = [stateFromStores1];
  const items5 = [stateFromStores];
  stateFromStores1 = participantId(items10[28]).useStateFromStores(items4, () => EmbeddedActivitiesStore.getPipOrientationLockStateForApp(stateFromStores), items5);
  const items6 = [layoutManager, stateFromStores1, stateFromStores];
  handleTargetAspectRatioParams = obj.useCallback((width) => {
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
  const items7 = [handleTargetAspectRatioParams];
  const layoutEffect = obj.useLayoutEffect(() => {
    const size = useWindowDimensions.getWindowDimensions();
    const obj2 = {};
    const merged = Object.assign(size);
    obj2.landscape = size.width > size.height;
    callback(obj2);
  }, items7);
  const tmp3Result5 = participantId(items10[28]);
  const fn = function v() {
    return windowDimensions.get();
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 20962628184;
  fn.__initData = __initData;
  const fn2 = function h(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(callback)(arg0);
    }
  };
  const tmp3Result6 = participantId(items10[18]);
  fn2.__closure = { runOnJS: participantId(items10[18]).runOnJS, handleTargetAspectRatioParams };
  fn2.__workletHash = 10001753822389;
  fn2.__initData = __initData2;
  const animatedReaction = tmp3Result6.useAnimatedReaction(fn, fn2);
  closure_9 = tmp14;
  const items8 = [null != PIP, first];
  const effect1 = obj.useEffect(() => {
    if (!first) {
      if (closure_9) {
        let ComponentDispatch = participantId(layoutManager[23]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
      }
    }
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_5(false);
        const ComponentDispatch = participantId(layoutManager[23]).ComponentDispatch;
        ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
      }, 500);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items8);
  if (first) {
    return null;
  } else if (tmp14) {
    const obj3 = { style: null, children: null };
    const items9 = [tmp.activity, tmp4];
    obj3.style = items9;
    tmp = closure_21;
    const obj4 = { channel: PIP, layoutMode: null };
    PIP = ActivityLayoutMode.PIP;
    obj4.layoutMode = PIP;
    const tmp5Result = tmp5(items10[26]);
    items10 = [, ];
    items10[0] = closure_21(tmp5(items10[31]), obj4);
    tmp5 = InnerStroke;
    items10[1] = closure_21(InnerStroke, {});
    obj3.children = items10;
    let tmp19 = closure_22(tmp5Result, obj3);
    const tmp23 = closure_21(tmp5(items10[31]), obj4);
  } else {
    const obj5 = { participantId: AuthenticationStore.getId(), layoutTransition: participantId.layoutTransition };
    tmp19 = closure_21(User, obj5);
  }
  let obj2 = { runOnJS: participantId(items10[18]).runOnJS, handleTargetAspectRatioParams };
}
function User(participantId) {
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  focused = undefined;
  backgroundColor = undefined;
  c8 = undefined;
  let updateIsActivityFocused;
  let canRenderParticipantVideo;
  const tmp = closure_23();
  importDefault = tmp;
  closure_129_0 = transitionState;
  closure_129_1 = transitionCleanUp;
  let items = [transitionState, transitionCleanUp];
  const effect = focused.useEffect(() => {
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
  let tmp5 = transitionState === participantId(5075).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  dependencyMap = tmp5;
  const context = obj.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ guildId, focused } = context);
  const mode = context.mode;
  const layoutManager = context.layoutManager;
  const items1 = [c8];
  const stateFromStores = participantId(563).useStateFromStores(items1, () => {
    const participant = ChannelRTCStore.getParticipant(channelId, participantId);
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
  const tmp3Result = participantId(563);
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
    const items = [user.user, closure_2, { backgroundColor }];
    return items;
  }, items2);
  const tmp6ResultResult = useUserTileBackgroundDefault(obj2);
  [tmp17, c8] = channelId(focused.useState(false), 2);
  const tmp16 = channelId(focused.useState(false), 2);
  let id1;
  if (stateFromStores != null) {
    const user = stateFromStores.user;
    if (user != null) {
      id1 = user.id;
    }
  }
  const items3 = [channelId];
  const surfaceDirectRendererExperiment = participantId(5883).useSurfaceDirectRendererExperiment(id1, { location: "VoicePanelPIPContent" });
  updateIsActivityFocused = obj.useCallback((arg0, arg1) => {
    let participant;
    if (null != arg0) {
      participant = ChannelRTCStore.getParticipant(channelId, arg0);
    }
    let tmp5 = null != participant;
    if (tmp5) {
      tmp5 = dependencyMap(participant);
    }
    if (tmp5) {
      tmp5 = arg1 === VoicePanelModes.PANEL;
    }
    _undefined(tmp5);
  }, items3);
  const tmp3Result7 = participantId(5883);
  class I {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  I.__closure = { focused };
  I.__workletHash = 3980010676581;
  I.__initData = __initData3;
  class S {
    constructor(arg0, arg1) {
      if (participantId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[18]);
        tmp3 = closure_9;
        tmp5 = mode;
        runOnJSResult = obj.runOnJS(closure_9);
        tmp4Result = runOnJSResult(participantId, mode.get());
      }
      return;
    }
  }
  const tmp3Result8 = participantId(5090);
  S.__closure = { runOnJS: participantId(5090).runOnJS, updateIsActivityFocused, mode };
  S.__workletHash = 5971237403457;
  S.__initData = __initData4;
  const animatedReaction = tmp3Result8.useAnimatedReaction(I, S);
  const obj3 = { runOnJS: participantId(5090).runOnJS, updateIsActivityFocused, mode };
  const fn = function f() {
    return mode.get();
  };
  fn.__closure = { mode };
  fn.__workletHash = 8288240256860;
  fn.__initData = __initData5;
  const fn2 = function y(arg0, arg1) {
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
  const tmp3Result9 = participantId(5090);
  fn2.__closure = { runOnJS: participantId(5090).runOnJS, updateIsActivityFocused, focused };
  fn2.__workletHash = 12552370107483;
  fn2.__initData = __initData6;
  const animatedReaction1 = tmp3Result9.useAnimatedReaction(fn, fn2);
  const obj4 = { runOnJS: participantId(5090).runOnJS, updateIsActivityFocused, focused };
  const items4 = [updateIsActivityFocused];
  const stateFromStoresObject = participantId(563).useStateFromStoresObject(items4, () => ({ isReactingToThermalState: callback.isReactingToThermalState(), consumedRequestToRespondToSeriousThermalState: callback.consumedRequestToRespondToSeriousThermalState() }));
  const items5 = [layoutManager, participantId];
  ({ isReactingToThermalState, consumedRequestToRespondToSeriousThermalState } = stateFromStoresObject);
  const callback1 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items5);
  const tmp3Result10 = participantId(563);
  canRenderParticipantVideo = participantId(11209).useCanRenderParticipantVideo(stateFromStores);
  if (canRenderParticipantVideo) {
    let tmp26 = tmp17;
    if (tmp17) {
      tmp26 = isReactingToThermalState;
    }
    canRenderParticipantVideo = !tmp26;
  }
  const items6 = [canRenderParticipantVideo];
  const effect1 = obj.useEffect(() => {
    if (!canRenderParticipantVideo) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items6);
  const obj5 = { style: null, children: null };
  const tmp3Result11 = participantId(11209);
  if (canRenderParticipantVideo) {
    const items7 = [, ];
    ({ blackBackground: arr9[0], user: arr9[1] } = tmp);
    obj5.style = items7;
    const obj6 = { style: tmp5, participantId, children: null };
    const obj7 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: stateFromStores.streamId, style: null, onSize: null, onReady: null };
    const items8 = [tmp.video, undefined];
    obj7.style = items8;
    obj7.onSize = callback1;
    obj7.onReady = markContentReady;
    obj6.children = closure_21(VideoStream, obj7);
    const items9 = [closure_21(AnimatedVideoWrapper, obj6), closure_21(InnerStroke, {})];
    obj5.children = items9;
    let tmp41 = obj5;
  } else {
    obj5.style = memo;
    let tmp30 = null;
    if (null != gradientStops) {
      const obj8 = { colors: gradientStops, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: layoutManager.absoluteFill, layout: participantId.layoutTransition, pointerEvents: "none" };
      tmp30 = closure_21(LinearGradient, obj8);
    }
    const items10 = [tmp30, , , ];
    const obj9 = { style: tmp.avatarWrapper, children: null };
    let tmp34Result = null;
    if (null != user1) {
      const obj10 = { source: tmp3(9500).getCachedSourceFromURI(user1.getAvatarURL(guildId, 80, false)), size: null, avatarDecoration: null };
      const AvatarSizes = tmp3(1188).AvatarSizes;
      obj10.size = tmp17 ? AvatarSizes.LARGE : AvatarSizes.XLARGE;
      let userAvatarDecoration;
      if (stateFromStores != null) {
        userAvatarDecoration = stateFromStores.userAvatarDecoration;
      }
      obj10.avatarDecoration = userAvatarDecoration;
      tmp34Result = closure_21(tmp3(1188).Avatar, obj10);
      const tmp3Result12 = tmp3(9500);
    }
    obj9.children = tmp34Result;
    items10[1] = closure_21(tmp6(6954), obj9);
    const obj11 = { style: tmp.userOpacity };
    items10[2] = closure_21(InnerStroke, obj11);
    let tmp34Result2 = null;
    if (tmp17) {
      tmp34Result2 = null;
      if (consumedRequestToRespondToSeriousThermalState) {
        const obj12 = { style: tmp.thermalAlertIconContainer, children: null };
        const obj13 = { style: tmp.thermalAlertIcon, source: tmp6(11742), color: tmp.thermalAlertIcon.color };
        obj12.children = closure_21(tmp3(1188).Icon, obj13);
        tmp34Result2 = closure_21(tmp6(6954), obj12);
        const tmp6Result6 = tmp6(6954);
      }
    }
    items10[3] = tmp34Result2;
    obj5.children = items10;
    tmp41 = obj5;
    const tmp6Result5 = tmp6(6954);
  }
  return closure_22(NativeViewDefault, tmp41);
}
function AnimatedVideoWrapper(arg0) {
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
  fn.__workletHash = 10377220209728;
  fn.__initData = __initData7;
  const animatedStyle = ReanimatedRexport2.useAnimatedStyle(fn);
  const obj3 = { style: null, children };
  const items = [style, animatedStyle];
  obj3.style = items;
  return __initData(ReanimatedNativeViewDefault, obj3);
}
function Stream(participantId) {
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  dependencyMap = undefined;
  layoutManager = undefined;
  let video;
  c5 = undefined;
  let callback2;
  let tmp = closure_23();
  const mode = participantId(19146).usePIPState().mode;
  closure_129_0 = transitionState;
  closure_129_1 = transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
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
  let tmp5 = transitionState === participantId(5075).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const context = obj2.useContext(mode(11203));
  ({ channelId: c2, layoutManager } = context);
  let obj = participantId(19146);
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
  const surfaceDirectRendererExperiment = participantId(5883).useSurfaceDirectRendererExperiment(stateFromStoresObject.userId, { location: "VoicePanelPIPContent.Stream" });
  const tmp2Result3 = participantId(5883);
  const items2 = [ApplicationStreamingStore];
  const stateFromStores = participantId(563).useStateFromStores(items2, () => {
    const activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
    let state;
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
    let tmp24 = closure_21(tmp2(19226).StreamEnded, obj3);
  } else {
    tmp24 = null;
    if (stateFromStores !== tmp17.FAILED) {
      if (tmp15) {
        const obj4 = { style: tmp5, participantId, children: null };
        tmp5 = VideoStream;
        const obj5 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: video, style: null, onSize: null, onLayout: null };
        video = tmp.video;
        obj5.style = video;
        obj5.onSize = callback;
        obj5.onLayout = callback1;
        participantId = closure_21(VideoStream, obj5);
        obj4.children = participantId;
        let tmp18Result = closure_21(AnimatedVideoWrapper, obj4);
      } else {
        const obj6 = { participantId, layoutTransition: participantId.layoutTransition };
        tmp18Result = closure_21(User, obj6);
      }
    }
  }
  return tmp24;
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
const VoicePanelModes = fn(11204).VoicePanelModes;
const VoicePanelPIPModes = fn(19059).VoicePanelPIPModes;
const Constants = fn(1072);
({ ApplicationStreamStates: closure_16, ComponentActions: closure_17 } = Constants);
const ActivityLayoutMode = fn(2019).ActivityLayoutMode;
const CallConstants = fn(5676);
({ ParticipantTypes: closure_19, isActivityParticipant: closure_20 } = CallConstants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
const createStyles = fn(5009);
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
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
const __initData = { code: "function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
const __initData2 = { code: "function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal);}}" };
const __initData3 = { code: "function VoicePanelPIPContentTsx3(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData4 = { code: "function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId,mode.get());}}" };
const __initData5 = { code: "function VoicePanelPIPContentTsx5(){const{mode}=this.__closure;return mode.get();}" };
const __initData6 = { code: "function VoicePanelPIPContentTsx6(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}" };
const __initData7 = { code: "function VoicePanelPIPContentTsx7(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}" };
let closure_39 = noop.memo(function EmptyPIP(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const effect = noop.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      transitionCleanUp();
    }
  }, items);
  const tmp = closure_23();
  return closure_21(transitionCleanUp(6954), { style: closure_23().emptyPip });
});
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPContent.tsx");

export default noop.memo(function VoicePanelPIPContent(layoutTransition) {
  layoutTransition = layoutTransition.layoutTransition;
  let channelId;
  let id;
  let height;
  channelId = height.useContext(channelId(id[20])).channelId;
  const size = layoutTransition(id[25]).usePIPState();
  id = size.id;
  const width = size.width;
  height = size.height;
  let tmp = closure_23();
  const id1 = AuthenticationStore.getId();
  let obj = layoutTransition(id[25]);
  let items = [ChannelRTCStore];
  let items1 = [id, channelId, id1];
  const stateFromStores = layoutTransition(id[28]).useStateFromStores(items, () => {
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
    const items = [{ id: tmp, type: USER }];
    return items;
  }, items1, areParticipantsEqual);
  const items2 = [width, height, tmp.contentWrapper];
  const items3 = [layoutTransition];
  const memo = height.useMemo(() => {
    const items = [contentWrapper.contentWrapper, ];
    const obj = { borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height) };
    items[1] = obj;
    const items1 = [items];
    return items1;
  }, items2);
  const callback = height.useCallback((arg0, id, transitionState, transitionCleanUp) => {
    if ("--voice-panel-pip-empty" === id.id) {
      const obj2 = { transitionState, transitionCleanUp };
      return __initData(closure_39, obj2, arg0);
    } else {
      const obj3 = { participantId: id.id, transitionState, transitionCleanUp, layoutTransition };
      const type = id.type;
      if (constants3.ACTIVITY === type) {
        const obj4 = {};
        const merged = Object.assign(obj3);
        return __initData(ActivityInVoice, obj4, arg0);
      } else if (constants3.STREAM === type) {
        const obj5 = {};
        const merged1 = Object.assign(obj3);
        return __initData(Stream, obj5, arg0);
      } else {
        if (constants3.USER !== type) {
          const HIDDEN_STREAM = constants3.HIDDEN_STREAM;
        }
        const obj = {};
        const merged2 = Object.assign(obj3);
        return __initData(User, obj, arg0);
      }
    }
  }, items3);
  let obj3 = { style: memo, pointerEvents: "none", nativeID: null, children: null };
  let obj2 = layoutTransition(id[28]);
  const tmp6 = channelId(id[26]);
  obj3.nativeID = layoutTransition(id[43]).getExternalPipTileNativeId("pip", stateFromStores[0].id);
  obj3.children = closure_21(layoutTransition(id[24]).TransitionGroup, { items: stateFromStores, renderItem: callback, getItemKey: getFocusedKey });
  return closure_21(tmp6, obj3);
});