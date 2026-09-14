// === Module 17276: VoicePanelPIPContent ===

// Module 17276 (VoicePanelPIPContent)
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import useWindowDimensions from "useWindowDimensions" /* 1477 */;
import native from "native" /* 4347 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4373 */;
import LinearGradientDefault from "LinearGradient" /* 5068 */;
import NativeViewDefault from "NativeView" /* 5670 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7176 */;
import useProfileTileGradientDefault from "useProfileTileGradient" /* 8367 */;
import ExternalPipDefault from "ExternalPip" /* 9740 */;
import VideoRendererNativeComponentDefault from "VideoRendererNativeComponent" /* 9747 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12402 */;
import VoicePanelCardLayoutManager from "VoicePanelCardLayoutManager" /* 12405 */;
import VideoActionCreators from "VideoActionCreators" /* 17115 */;
import VoicePanelStreamOutputSinkStack from "VoicePanelStreamOutputSinkStack" /* 17193 */;
import VoicePanelPIPUtils from "VoicePanelPIPUtils" /* 17198 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4652 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9616 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4658 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserStore from "UserStore" /* 1371 */;

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
  return __initData2(VideoRendererNativeComponentDefault, obj2);
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
  const tmp = closure_24();
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
  return closure_22(width(height[26]), obj2);
}
function ActivityInVoice(participantId) {
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  let channelId;
  let layoutManager;
  let first;
  let stateFromStores1;
  let handleTargetAspectRatioParams;
  let tmp = closure_24();
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
      if (participant.type === constants5.ACTIVITY) {
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
  const fn = function h() {
    return windowDimensions.get();
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 20962628184;
  fn.__initData = __initData;
  const fn2 = function p(arg0, arg1) {
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
    tmp = closure_22;
    const obj4 = { channel: PIP, layoutMode: null };
    PIP = constants3.PIP;
    obj4.layoutMode = PIP;
    const tmp5Result = tmp5(items10[26]);
    items10 = [, ];
    items10[0] = closure_22(tmp5(items10[30]), obj4);
    tmp5 = InnerStroke;
    items10[1] = closure_22(InnerStroke, {});
    obj3.children = items10;
    let tmp19 = closure_23(tmp5Result, obj3);
    const tmp23 = closure_22(tmp5(items10[30]), obj4);
  } else {
    const obj5 = { participantId: AuthenticationStore.getId() };
    tmp19 = closure_22(User, obj5);
  }
  let obj2 = { runOnJS: participantId(items10[18]).runOnJS, handleTargetAspectRatioParams };
}
function User(participantId) {
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  focused = undefined;
  let dominantColorFromImage;
  closure_8 = undefined;
  c9 = undefined;
  let updateIsActivityFocused;
  let canRenderParticipantVideo;
  let tmp = closure_24();
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
  let tmp5 = transitionState === participantId(4347).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  dependencyMap = tmp5;
  const context = obj.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ guildId, focused } = context);
  const mode = context.mode;
  const layoutManager = context.layoutManager;
  const items1 = [closure_8];
  const stateFromStores = participantId(563).useStateFromStores(items1, () => {
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
  const tmp3Result = participantId(563);
  let avatarURL;
  if (user1 != null) {
    avatarURL = user1.getAvatarURL(guildId, 80, false);
  }
  dominantColorFromImage = participantId(8953).useDominantColorFromImage(avatarURL);
  let id;
  const tmp3Result8 = participantId(8953);
  if (user1 != null) {
    id = user1.id;
  }
  const tmp6ResultResult = useProfileTileGradientDefault({ userId: id, guildId, location: "VoicePanelPIPContent-native" });
  closure_8 = tmp6ResultResult;
  const items2 = [tmp, tmp5, dominantColorFromImage, tmp6ResultResult];
  const memo = obj.useMemo(() => {
    const items = [user.user, closure_2, ];
    let tmp = null;
    if (null == closure_8) {
      const obj = { backgroundColor: dominantColorFromImage };
      tmp = obj;
    }
    items[2] = tmp;
    return items;
  }, items2);
  const tmp6Result = useProfileTileGradientDefault;
  [tmp18, c9] = channelId(focused.useState(false), 2);
  const tmp17 = channelId(focused.useState(false), 2);
  let id1;
  if (stateFromStores != null) {
    const user = stateFromStores.user;
    if (user != null) {
      id1 = user.id;
    }
  }
  const items3 = [channelId];
  const surfaceDirectRendererExperiment = participantId(9735).useSurfaceDirectRendererExperiment(id1, { location: "VoicePanelPIPContent" });
  updateIsActivityFocused = obj.useCallback((arg0, arg1) => {
    let participant;
    if (null != arg0) {
      participant = ChannelRTCStore.getParticipant(channelId, arg0);
    }
    let tmp5 = null != participant;
    if (tmp5) {
      tmp5 = __initData(participant);
    }
    if (tmp5) {
      tmp5 = arg1 === VoicePanelModes.PANEL;
    }
    _undefined(tmp5);
  }, items3);
  const tmp3Result9 = participantId(9735);
  class S {
    constructor() {
      value = focused.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      return id;
    }
  }
  S.__closure = { focused };
  S.__workletHash = 3980010676581;
  S.__initData = __initData3;
  const fn = function h(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport2.runOnJS(callback)(arg0, mode.get());
      const runOnJSResult = ReanimatedRexport2.runOnJS(callback);
    }
  };
  const tmp3Result10 = participantId(4373);
  fn.__closure = { runOnJS: participantId(4373).runOnJS, updateIsActivityFocused, mode };
  fn.__workletHash = 5971237403457;
  fn.__initData = __initData4;
  const animatedReaction = tmp3Result10.useAnimatedReaction(S, fn);
  const obj2 = { runOnJS: participantId(4373).runOnJS, updateIsActivityFocused, mode };
  const fn2 = function v() {
    return mode.get();
  };
  fn2.__closure = { mode };
  fn2.__workletHash = 8288240256860;
  fn2.__initData = __initData5;
  class I {
    constructor(arg0, arg1) {
      if (participantId !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[18]);
        tmp3 = closure_10;
        tmp5 = focused;
        runOnJSResult = obj.runOnJS(closure_10);
        value = focused.get();
        tmp7 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp4Result = runOnJSResult(id, participantId);
      }
      return;
    }
  }
  const tmp3Result11 = participantId(4373);
  I.__closure = { runOnJS: participantId(4373).runOnJS, updateIsActivityFocused, focused };
  I.__workletHash = 12552370107483;
  I.__initData = __initData6;
  const animatedReaction1 = tmp3Result11.useAnimatedReaction(fn2, I);
  const obj3 = { runOnJS: participantId(4373).runOnJS, updateIsActivityFocused, focused };
  const items4 = [c9];
  const stateFromStoresObject = participantId(563).useStateFromStoresObject(items4, () => ({ isReactingToThermalState: _undefined.isReactingToThermalState(), consumedRequestToRespondToSeriousThermalState: _undefined.consumedRequestToRespondToSeriousThermalState() }));
  const items5 = [layoutManager, participantId];
  ({ isReactingToThermalState, consumedRequestToRespondToSeriousThermalState } = stateFromStoresObject);
  const callback1 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
  }, items5);
  const tmp3Result12 = participantId(563);
  canRenderParticipantVideo = participantId(9752).useCanRenderParticipantVideo(stateFromStores);
  if (canRenderParticipantVideo) {
    let tmp27 = tmp18;
    if (tmp18) {
      tmp27 = isReactingToThermalState;
    }
    canRenderParticipantVideo = !tmp27;
  }
  const items6 = [canRenderParticipantVideo];
  const effect1 = obj.useEffect(() => {
    if (!canRenderParticipantVideo) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items6);
  const obj4 = { style: null, children: null };
  const tmp3Result13 = participantId(9752);
  if (canRenderParticipantVideo) {
    const items7 = [, ];
    ({ blackBackground: arr9[0], user: arr9[1] } = tmp);
    obj4.style = items7;
    const obj5 = { style: tmp5, participantId, children: null };
    const obj6 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId: stateFromStores.streamId, style: null, onSize: null, onReady: null };
    const items8 = [tmp.video, undefined];
    obj6.style = items8;
    obj6.onSize = callback1;
    obj6.onReady = markContentReady;
    obj5.children = closure_22(VideoStream, obj6);
    const items9 = [closure_22(AnimatedVideoWrapper, obj5), closure_22(InnerStroke, {})];
    obj4.children = items9;
    let tmp42 = obj4;
  } else {
    obj4.style = memo;
    let tmp31 = null;
    if (null != tmp6ResultResult) {
      const obj7 = { colors: tmp6ResultResult, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: layoutManager.absoluteFill, layout: tmp3(17198).layoutTransition, pointerEvents: "none" };
      tmp31 = closure_22(LinearGradient, obj7);
    }
    const items10 = [tmp31, , , ];
    const obj8 = { style: tmp.avatarWrapper, children: null };
    let tmp35Result = null;
    if (null != user1) {
      const obj9 = { source: tmp3(8953).getCachedSourceFromURI(user1.getAvatarURL(guildId, 80, false)), size: null, avatarDecoration: null };
      const AvatarSizes = tmp3(1176).AvatarSizes;
      obj9.size = tmp18 ? AvatarSizes.LARGE : AvatarSizes.XLARGE;
      let userAvatarDecoration;
      if (stateFromStores != null) {
        userAvatarDecoration = stateFromStores.userAvatarDecoration;
      }
      obj9.avatarDecoration = userAvatarDecoration;
      tmp35Result = closure_22(tmp3(1176).Avatar, obj9);
      const tmp3Result14 = tmp3(8953);
    }
    obj8.children = tmp35Result;
    items10[1] = closure_22(tmp6(5670), obj8);
    const obj10 = { style: tmp.userOpacity };
    items10[2] = closure_22(InnerStroke, obj10);
    let tmp35Result2 = null;
    if (tmp18) {
      tmp35Result2 = null;
      if (consumedRequestToRespondToSeriousThermalState) {
        const obj11 = { style: tmp.thermalAlertIconContainer, children: null };
        const obj12 = { style: tmp.thermalAlertIcon, source: tmp6(9755), color: tmp.thermalAlertIcon.color };
        obj11.children = closure_22(tmp3(1176).Icon, obj12);
        tmp35Result2 = closure_22(tmp6(5670), obj11);
        const tmp6Result6 = tmp6(5670);
      }
    }
    items10[3] = tmp35Result2;
    obj4.children = items10;
    tmp42 = obj4;
    const tmp6Result5 = tmp6(5670);
  }
  return closure_23(NativeViewDefault, tmp42);
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
  return __initData2(ReanimatedNativeViewDefault, obj3);
}
function Stream(participantId) {
  participantId = participantId.participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  dependencyMap = undefined;
  layoutManager = undefined;
  let streamId;
  c5 = undefined;
  let callback2;
  let tmp = closure_24();
  const mode = participantId(17203).usePIPState().mode;
  closure_129_0 = transitionState;
  closure_129_1 = transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const effect = streamId.useEffect(() => {
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
  let obj = participantId(17203);
  const context = obj2.useContext(mode(12402));
  ({ channelId: c2, layoutManager } = context);
  let tmp5 = transitionState === participantId(4347).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const items1 = [callback2];
  const stateFromStoresObject = participantId(563).useStateFromStoresObject(items1, () => {
    const participant = ChannelRTCStore.getParticipant(c2, participantId);
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
  });
  streamId = stateFromStoresObject.streamId;
  const tmp2Result = participantId(563);
  const surfaceDirectRendererExperiment = participantId(9735).useSurfaceDirectRendererExperiment(stateFromStoresObject.userId, { location: "VoicePanelPIPContent.Stream" });
  const tmp2Result3 = participantId(9735);
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
  streamId.useRef(0);
  streamId.useRef(0);
  const items4 = [streamId, value, mode];
  const items5 = [streamId, value, mode];
  const callback1 = obj2.useCallback((nativeEvent) => {
    if (null != streamId) {
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
    let tmp2 = null == streamId;
    if (!tmp2) {
      tmp2 = arg0;
    }
    if (!tmp2) {
      tmp2 = mode !== VoicePanelPIPModes.IN_APP;
    }
    if (!tmp2) {
      const size = { width: ref.current * c5, height: ref2.current * c5 };
      VideoActionCreators.updateVideoSize(streamId, size, 1);
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
  const items7 = [null != streamId];
  const effect2 = obj2.useEffect(() => {
    if (closure_9) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items7);
  if (stateFromStores === constants.ENDED) {
    const obj3 = { style: tmp.streamEmptyImage, resizeMode: "contain" };
    let tmp18Result = closure_22(tmp2(9728).StreamEnded, obj3);
  } else if (stateFromStores === tmp17.FAILED) {
    const obj4 = { style: tmp.streamEmptyImage, resizeMode: "contain" };
    tmp18Result = closure_22(tmp2(9731).StreamFailed, obj4);
  } else if (tmp15) {
    const obj5 = { style: tmp5, participantId, children: null };
    const obj6 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, streamId, style: tmp.video, onSize: callback, onLayout: callback1 };
    obj5.children = closure_22(VideoStream, obj6);
    tmp18Result = closure_22(AnimatedVideoWrapper, obj5);
  } else {
    const obj7 = { participantId };
    tmp18Result = closure_22(User, obj7);
  }
  return tmp18Result;
}
function getFocusedKey(id) {
  return id.id;
}
function renderFocusedParticipant(arg0, id, transitionState, transitionCleanUp) {
  if ("--voice-panel-pip-empty" === id.id) {
    const obj2 = { transitionState, transitionCleanUp };
    return __initData2(closure_40, obj2, arg0);
  } else {
    const obj3 = { participantId: id.id, transitionState, transitionCleanUp };
    const type = id.type;
    if (constants5.ACTIVITY === type) {
      const obj4 = {};
      const merged = Object.assign(obj3);
      return __initData2(ActivityInVoice, obj4, arg0);
    } else if (constants5.STREAM === type) {
      const obj5 = {};
      const merged1 = Object.assign(obj3);
      return __initData2(Stream, obj5, arg0);
    } else {
      if (constants5.USER !== type) {
        const HIDDEN_STREAM = constants5.HIDDEN_STREAM;
      }
      const obj = {};
      const merged2 = Object.assign(obj3);
      return __initData2(User, obj, arg0);
    }
  }
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
const VoicePanelModes = fn(12403).VoicePanelModes;
const VoicePanelPIPModes = fn(17199).VoicePanelPIPModes;
let Constants = fn(1074);
({ ApplicationStreamStates: closure_16, ComponentActions: closure_17 } = Constants);
Constants = fn(1920);
({ ActivityLayoutMode: closure_18, OrientationLockState: closure_19 } = Constants);
const CallConstants = fn(4657);
({ ParticipantTypes: closure_20, isActivityParticipant: closure_21 } = CallConstants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
const createStyles = fn(4636);
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
const __initData = { code: "function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
const __initData2 = { code: "function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal);}}" };
const __initData3 = { code: "function VoicePanelPIPContentTsx3(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
const __initData4 = { code: "function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId,mode.get());}}" };
const __initData5 = { code: "function VoicePanelPIPContentTsx5(){const{mode}=this.__closure;return mode.get();}" };
const __initData6 = { code: "function VoicePanelPIPContentTsx6(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}" };
const __initData7 = { code: "function VoicePanelPIPContentTsx7(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}" };
let closure_40 = noop.memo(function EmptyPIP(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const effect = noop.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      transitionCleanUp();
    }
  }, items);
  const tmp = closure_24();
  return closure_22(transitionCleanUp(5670), { style: closure_24().emptyPip });
});
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPContent.tsx");

export default noop.memo(function VoicePanelPIPContent() {
  const channelId = noop.useContext(id(width[20])).channelId;
  const size = channelId(width[25]).usePIPState();
  id = size.id;
  width = size.width;
  const height = size.height;
  let tmp = closure_24();
  noop = tmp;
  const id1 = AuthenticationStore.getId();
  let obj = channelId(width[25]);
  let items = [ChannelRTCStore];
  let items1 = [id, channelId, id1];
  const items2 = [width, height, tmp.contentWrapper];
  const stateFromStores = channelId(width[28]).useStateFromStores(items, () => {
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
  const memo = noop.useMemo(() => {
    const items = [contentWrapper.contentWrapper, ];
    const obj = { borderRadius: VoicePanelPIPUtils.getVoicePanelPIPBorderRadius(width, height) };
    items[1] = obj;
    const items1 = [items];
    return items1;
  }, items2);
  const obj3 = { style: memo, pointerEvents: "none", children: null };
  const obj2 = channelId(width[28]);
  obj3.children = closure_22(channelId(width[24]).TransitionGroup, { items: stateFromStores, renderItem: renderFocusedParticipant, getItemKey: getFocusedKey });
  return closure_22(id(width[26]), obj3);
});