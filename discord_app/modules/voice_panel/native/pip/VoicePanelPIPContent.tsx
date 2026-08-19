// discord_app/modules/voice_panel/native/pip/VoicePanelPIPContent.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatcher from "../../../../utils/ComponentDispatchUtils.tsx";
import obj132Default from "../../../core/native/ReanimatedNativeView.tsx";
import dismissPanelDefault from "../VoicePanelStateContext.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import participantFromServer from "../../../activities/EmbeddedActivitiesStore.tsx";
import getParticipants from "../../../calls/ChannelRTCStore.tsx";
import initialize from "../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import reset from "../../../../stores/ApplicationStreamingStore.tsx";
import fetchFingerprint from "../../../../stores/AuthenticationStore.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { VoicePanelModes } from "../../VoicePanelConstants.tsx";
import { VoicePanelPIPModes } from "VoicePanelPIPConstants.tsx";
import ME from "../../../../Constants.tsx";
import items3 from "../../../activities/Constants.tsx";
import ParticipantTypes from "../../../calls/CallConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function VideoStream(streamId) {
  streamId = streamId.streamId;
  let obj = streamId(16301);
  setHasActiveVideoOutputSink = obj.useSetHasActiveVideoOutputSink(importAllResult.useContext(setHasActiveVideoOutputSink(11439)).streamOutputSinkStack);
  const items = [setHasActiveVideoOutputSink, streamId];
  const effect = importAllResult.useEffect(() => {
    if (null != streamId) {
      setHasActiveVideoOutputSink(tmp, true);
      return () => {
        callback(closure_0, false);
      };
    }
  }, items);
  obj = {};
  const merged = Object.assign(streamId);
  return callback(setHasActiveVideoOutputSink(12455), obj);
}
function markContentReady() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
}
function InnerStroke(style) {
  style = style.style;
  let height;
  let obj = style(height[23]);
  const size = obj.usePIPState();
  const width = size.width;
  height = size.height;
  const tmp = callback3();
  closure_3 = tmp;
  obj = {
    style: importAllResult.useMemo(() => {
      const items = [innerStroke.innerStroke, , ];
      const obj = { borderRadius: style(height[25]).getVoicePanelPIPBorderRadius(width, height) + 1 };
      items[1] = obj;
      items[2] = style;
      return items;
    }, items)
  };
  items = [width, height, tmp.innerStroke, style];
  return callback(width(height[24]), obj);
}
function ActivityInVoice(participantId) {
  participantId = participantId.participantId;
  transitionState = participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  let layoutManager;
  let first;
  let stateFromStores1;
  let tmp = callback3();
  let channelId = transitionCleanUp;
  let obj = first;
  const items = [transitionState, transitionCleanUp];
  const effect = first.useEffect(() => {
    function handleVideoReady() {
      clearTimeout(closure_0);
      const timerId = setTimeout(() => {
        let tmp;
        if (callback != null) {
          tmp = callback();
        }
        return tmp;
      }, 17);
    }
    if (timeout === transitionState(_undefined[22]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = transitionState(_undefined[21]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(closure_1_16.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = transitionState(table[21]).ComponentDispatch;
        ComponentDispatch.unsubscribe(closure_2_16.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
  }, items);
  let items10 = layoutManager;
  let tmp5 = channelId;
  const context = obj.useContext(channelId(items10[18]));
  channelId = context.channelId;
  layoutManager = context.layoutManager;
  const windowDimensions = context.windowDimensions;
  let tmp3Result = tmp3(items10[26]);
  const items1 = [closure_11];
  let PIP = tmp3Result.useStateFromStores(items1, () => closure_1_11.getChannel(channelId));
  const tmp7 = windowDimensions(obj.useState(transitionState === transitionState(items10[22]).TransitionStates.MOUNTED), 2);
  first = tmp7[0];
  closure_5 = tmp7[1];
  tmp3Result = tmp3(items10[26]);
  const items2 = [stateFromStores1];
  const items3 = [channelId, participantId];
  const stateFromStores = tmp3Result.useStateFromStores(items2, () => {
    const participant = stateFromStores1.getParticipant(channelId, transitionState);
    let applicationId = transitionState;
    if (null != participant) {
      applicationId = transitionState;
      if (participant.type === closure_1_19.ACTIVITY) {
        applicationId = participant.applicationId;
      }
    }
    return applicationId;
  }, items3);
  const tmp4 = transitionState === transitionState(layoutManager[22]).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const items4 = [stateFromStores];
  const items5 = [stateFromStores];
  stateFromStores1 = transitionState(items10[26]).useStateFromStores(items4, () => stateFromStores.getPipOrientationLockStateForApp(stateFromStores), items5);
  const items6 = [layoutManager, stateFromStores1, stateFromStores];
  const callback = obj.useCallback((width) => {
    if (closure_1_18.LANDSCAPE === stateFromStores1) {
      layoutManager.setTargetDimensions(stateFromStores, 16, 9);
    } else if (closure_1_18.PORTRAIT === stateFromStores1) {
      layoutManager.setTargetDimensions(stateFromStores, 9, 16);
    } else if (closure_1_18.UNLOCKED === stateFromStores1) {
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
    let obj = transitionState(layoutManager[27]);
    const size = obj.getWindowDimensions();
    obj = {};
    const merged = Object.assign(size);
    obj.landscape = size.width > size.height;
    callback(obj);
  }, items7);
  const tmp3Result1 = transitionState(items10[26]);
  const fn = function h() {
    return windowDimensions.get();
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 20962628184;
  fn.__initData = closure_27;
  const fn2 = function p(arg0, arg1) {
    if (arg0 !== arg1) {
      transitionState(layoutManager[28]).runOnJS(callback)(arg0);
      const obj = transitionState(layoutManager[28]);
    }
  };
  obj = { runOnJS: tmp3(items10[28]).runOnJS, handleTargetAspectRatioParams: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 10001753822389;
  fn2.__initData = closure_28;
  const animatedReaction = transitionState(items10[28]).useAnimatedReaction(fn, fn2);
  closure_9 = tmp14;
  const items8 = [null != PIP, first];
  const effect1 = obj.useEffect(() => {
    if (!first) {
      if (closure_9) {
        let ComponentDispatch = transitionState(layoutManager[21]).ComponentDispatch;
        ComponentDispatch.dispatch(closure_1_16.VOICE_PANEL_PIP_CONTENT_READY);
      }
    }
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback2(false);
        const ComponentDispatch = callback(layoutManager[21]).ComponentDispatch;
        ComponentDispatch.dispatch(closure_1_16.VOICE_PANEL_PIP_CONTENT_READY);
      }, 500);
      return () => {
        clearTimeout(closure_0);
      };
    }
  }, items8);
  if (first) {
    return null;
  } else if (tmp14) {
    obj = { style: null, children: null };
    const items9 = [tmp.activity, tmp4];
    obj[0] = items9;
    tmp = callback;
    obj1 = { channel: null, layoutMode: null };
    obj1[0] = PIP;
    PIP = constants3.PIP;
    obj1[1] = PIP;
    const tmp5Result = tmp5(items10[24]);
    items10 = [, ];
    items10[0] = callback(tmp5(items10[29]), obj1);
    tmp5 = InnerStroke;
    items10[1] = callback(InnerStroke, {});
    obj[1] = items10;
    let tmp19 = callback2(tmp5Result, obj);
    const tmp23 = callback(tmp5(items10[29]), obj1);
  } else {
    const obj2 = { participantId: null };
    obj2[0] = store.getId();
    tmp19 = callback(User, obj2);
  }
  const tmp3Result2 = transitionState(items10[28]);
}
function User(participantId) {
  participantId = participantId.participantId;
  transitionState = participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  focused = undefined;
  let dominantColorFromImage;
  c8 = undefined;
  let callback;
  let canRenderParticipantVideo;
  const tmp = callback3();
  transitionCleanUp = tmp;
  let obj = focused;
  let items = [transitionState, transitionCleanUp];
  const effect = focused.useEffect(() => {
    function handleVideoReady() {
      clearTimeout(closure_0);
      const timerId = setTimeout(() => {
        let tmp;
        if (callback != null) {
          tmp = callback();
        }
        return tmp;
      }, 17);
    }
    if (timeout === transitionState(_undefined[22]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = transitionState(_undefined[21]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(closure_1_16.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = transitionState(table[21]).ComponentDispatch;
        ComponentDispatch.unsubscribe(closure_2_16.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
  }, items);
  let tmp5 = transitionState === transitionState(4668).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  dependencyMap = tmp5;
  const context = obj.useContext(transitionCleanUp(11439));
  const channelId = context.channelId;
  ({ guildId, focused } = context);
  const mode = context.mode;
  const layoutManager = context.layoutManager;
  let tmp3Result = tmp3(647);
  const items1 = [dominantColorFromImage];
  const stateFromStores = tmp3Result.useStateFromStores(items1, () => {
    const participant = dominantColorFromImage.getParticipant(channelId, transitionState);
    let type;
    if (participant != null) {
      type = participant.type;
    }
    let tmp3;
    if (type === closure_1_19.USER) {
      tmp3 = participant;
    }
    return tmp3;
  });
  let user;
  if (stateFromStores != null) {
    user = stateFromStores.user;
  }
  if (user == null) {
    user = currentUser.getCurrentUser();
  }
  tmp3Result = tmp3(9229);
  let avatarURL;
  if (user != null) {
    avatarURL = user.getAvatarURL(guildId, 80, false);
  }
  dominantColorFromImage = tmp3Result.useDominantColorFromImage(avatarURL);
  const items2 = [tmp, tmp5, dominantColorFromImage];
  const memo = obj.useMemo(() => {
    const items = [transitionCleanUp.user, closure_2, { backgroundColor: dominantColorFromImage }];
    return items;
  }, items2);
  [tmp15, c8] = channelId(obj.useState(false), 2);
  const tmp14 = channelId(obj.useState(false), 2);
  let id;
  if (stateFromStores != null) {
    user = stateFromStores.user;
    if (user != null) {
      id = user.id;
    }
  }
  const items3 = [channelId];
  const surfaceDirectRendererExperiment = transitionState(12446).useSurfaceDirectRendererExperiment(id, { location: "VoicePanelPIPContent" });
  callback = obj.useCallback((arg0, arg1) => {
    let participant;
    if (null != arg0) {
      participant = dominantColorFromImage.getParticipant(channelId, arg0);
    }
    let tmp5 = null != participant;
    if (tmp5) {
      tmp5 = closure_1_20(participant);
    }
    if (tmp5) {
      tmp5 = arg1 === VoicePanelModes.PANEL;
    }
    _undefined(tmp5);
  }, items3);
  const tmp3Result1 = transitionState(12446);
  const fn = function h() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return id;
  };
  fn.__closure = { focused };
  fn.__workletHash = 3980010676581;
  fn.__initData = closure_30;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = transitionState(4115);
      transitionState(4115).runOnJS(callback)(arg0, mode.get());
      const runOnJSResult = transitionState(4115).runOnJS(callback);
    }
  };
  obj = { runOnJS: tmp3(4115).runOnJS, updateIsActivityFocused: callback, mode };
  fn2.__closure = obj;
  fn2.__workletHash = 5971237403457;
  fn2.__initData = closure_31;
  const animatedReaction = transitionState(4115).useAnimatedReaction(fn, fn2);
  const tmp3Result2 = transitionState(4115);
  class I {
    constructor() {
      return mode.get();
    }
  }
  I.__closure = { mode };
  I.__workletHash = 8288240256860;
  I.__initData = closure_32;
  class S {
    constructor(arg0, arg1) {
      if (participantId !== arg1) {
        tmp = transitionState;
        tmp2 = onBottom;
        obj = transitionState(onBottom[28]);
        tmp3 = closure_9;
        tmp5 = focused;
        runOnJSResult = obj.runOnJS(closure_9);
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
  obj = { runOnJS: tmp3(4115).runOnJS, updateIsActivityFocused: callback, focused };
  S.__closure = obj;
  S.__workletHash = 12552370107483;
  S.__initData = closure_33;
  const animatedReaction1 = transitionState(4115).useAnimatedReaction(I, S);
  const tmp3Result3 = transitionState(4115);
  const items4 = [c8];
  const stateFromStoresObject = transitionState(647).useStateFromStoresObject(items4, () => ({ isReactingToThermalState: _undefined.isReactingToThermalState(), consumedRequestToRespondToSeriousThermalState: _undefined.consumedRequestToRespondToSeriousThermalState() }));
  const items5 = [layoutManager, participantId];
  ({ isReactingToThermalState, consumedRequestToRespondToSeriousThermalState } = stateFromStoresObject);
  const callback1 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(transitionState, nativeEvent.width, nativeEvent.height);
  }, items5);
  const tmp3Result4 = transitionState(647);
  canRenderParticipantVideo = transitionState(11444).useCanRenderParticipantVideo(stateFromStores);
  if (canRenderParticipantVideo) {
    let tmp24 = tmp15;
    if (tmp15) {
      tmp24 = isReactingToThermalState;
    }
    canRenderParticipantVideo = !tmp24;
  }
  const items6 = [canRenderParticipantVideo];
  const effect1 = obj.useEffect(() => {
    if (!canRenderParticipantVideo) {
      const ComponentDispatch = transitionState(1231).ComponentDispatch;
      ComponentDispatch.dispatch(closure_1_16.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items6);
  obj1 = { style: null, children: null };
  let tmp6Result = tmp6(7190);
  if (canRenderParticipantVideo) {
    const items7 = [, ];
    ({ blackBackground: arr9[0], user: arr9[1] } = tmp);
    obj1[0] = items7;
    const obj2 = { style: null, participantId: null, children: null };
    obj2[0] = tmp5;
    obj2[1] = participantId;
    const obj3 = { useSurfaceDirectRenderer: null, streamId: null, style: null, onSize: null, onReady: null };
    obj3[0] = surfaceDirectRendererExperiment;
    obj3[1] = stateFromStores.streamId;
    const items8 = [tmp.video, undefined];
    obj3[2] = items8;
    obj3[3] = callback1;
    obj3[4] = markContentReady;
    obj2[2] = callback(VideoStream, obj3);
    const items9 = [callback(AnimatedVideoWrapper, obj2), callback(InnerStroke, {})];
    obj1[1] = items9;
    let tmp35 = obj1;
  } else {
    obj1[0] = memo;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.avatarWrapper;
    let tmp28Result = null;
    tmp6Result = tmp6(7190);
    if (null != user) {
      const obj5 = { source: null, size: null, avatarDecoration: null };
      obj5[0] = tmp3(9229).getCachedSourceFromURI(user.getAvatarURL(guildId, 80, false));
      const AvatarSizes = tmp3(1297).AvatarSizes;
      obj5[1] = tmp15 ? AvatarSizes.LARGE : AvatarSizes.XLARGE;
      let userAvatarDecoration;
      if (stateFromStores != null) {
        userAvatarDecoration = stateFromStores.userAvatarDecoration;
      }
      obj5[2] = userAvatarDecoration;
      tmp28Result = tmp28(tmp3(1297).Avatar, obj5);
      const tmp3Result6 = tmp3(9229);
    }
    obj4[1] = tmp28Result;
    const items10 = [callback(tmp6Result, obj4), , ];
    const obj6 = { style: null };
    obj6[0] = tmp.userOpacity;
    items10[1] = callback(InnerStroke, obj6);
    tmp28Result = null;
    if (tmp15) {
      tmp28Result = null;
      if (consumedRequestToRespondToSeriousThermalState) {
        const obj7 = { style: null, children: null };
        obj7[0] = tmp.thermalAlertIconContainer;
        const obj8 = { style: null, source: null, color: null };
        obj8[0] = tmp.thermalAlertIcon;
        obj8[1] = tmp6(8916);
        obj8[2] = tmp.thermalAlertIcon.color;
        obj7[1] = tmp28(tmp3(1297).Icon, obj8);
        tmp28Result = tmp28(tmp6(7190), obj7);
        const tmp6Result1 = tmp6(7190);
      }
    }
    items10[2] = tmp28Result;
    obj1[1] = items10;
    tmp35 = obj1;
  }
  return callback(tmp6Result, tmp35);
}
function AnimatedVideoWrapper(arg0) {
  let targetDimensionsSubscription;
  ({ participantId, style, children } = arg0);
  targetDimensionsSubscription = targetDimensionsSubscription(11442).useTargetDimensionsSubscription(participantId, importAllResult.useContext(dismissPanelDefault).layoutManager);
  const obj = targetDimensionsSubscription(11442);
  const fn = function u() {
    const value = targetDimensionsSubscription.get();
    ({ width, height } = value);
    let str = "100%";
    let str2 = "auto";
    if (height < width) {
      str = "auto";
      str2 = "100%";
    }
    return { position: "absolute", aspectRatio: width / height, width: str, height: str2 };
  };
  fn.__closure = { targetDimensions: targetDimensionsSubscription };
  fn.__workletHash = 10377220209728;
  fn.__initData = closure_35;
  const animatedStyle = targetDimensionsSubscription(4115).useAnimatedStyle(fn);
  style = [, ];
  style[0] = style;
  style[1] = animatedStyle;
  return callback(obj132Default, { style, children });
}
function Stream(participantId) {
  participantId = participantId.participantId;
  transitionState = participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  dependencyMap = undefined;
  layoutManager = undefined;
  let streamId;
  c5 = undefined;
  closure_7 = undefined;
  closure_9 = undefined;
  let tmp = callback3();
  let obj = transitionState(16311);
  const mode = obj.usePIPState().mode;
  transitionCleanUp = mode;
  obj1 = streamId;
  const items = [transitionState, transitionCleanUp];
  const effect = streamId.useEffect(() => {
    function handleVideoReady() {
      clearTimeout(closure_0);
      const timerId = setTimeout(() => {
        let tmp;
        if (callback != null) {
          tmp = callback();
        }
        return tmp;
      }, 17);
    }
    if (timeout === transitionState(_undefined[22]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = transitionState(_undefined[21]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(closure_1_16.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = transitionState(table[21]).ComponentDispatch;
        ComponentDispatch.unsubscribe(closure_2_16.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
  }, items);
  const context = obj1.useContext(transitionCleanUp(11439));
  ({ channelId: c2, layoutManager } = context);
  let tmp2Result = tmp2(647);
  const items1 = [closure_7];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items1, () => {
    const participant = ref2.getParticipant(c2, transitionState);
    let tmp2 = null != participant;
    if (tmp2) {
      tmp2 = participant.type === closure_1_19.STREAM;
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
    obj[1] = tmp5;
    return obj;
  });
  streamId = stateFromStoresObject.streamId;
  tmp2Result = tmp2(12446);
  const surfaceDirectRendererExperiment = tmp2Result.useSurfaceDirectRendererExperiment(stateFromStoresObject.userId, { location: "VoicePanelPIPContent.Stream" });
  let tmp5 = transitionState === transitionState(4668).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const items2 = [closure_9];
  const stateFromStores = transitionState(647).useStateFromStores(items2, () => {
    activeStreamForStreamKey = activeStreamForStreamKey.getActiveStreamForStreamKey(transitionState);
    let state;
    if (activeStreamForStreamKey != null) {
      state = activeStreamForStreamKey.state;
    }
    return state;
  });
  const items3 = [layoutManager, participantId];
  const callback = obj1.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(transitionState, nativeEvent.width, nativeEvent.height);
  }, items3);
  const value = c5.get();
  c5 = value;
  closure_6 = obj1.useRef(0);
  closure_7 = obj1.useRef(0);
  const items4 = [streamId, value, mode];
  const items5 = [streamId, value, mode];
  const callback1 = obj1.useCallback((nativeEvent) => {
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      let tmp3 = width === ref.current;
      if (tmp3) {
        tmp3 = height === ref2.current;
      }
      if (!tmp3) {
        ref.current = width;
        ref2.current = height;
        if (transitionCleanUp === VoicePanelPIPModes.IN_APP) {
          transitionState(_undefined[37]);
          const obj = { width: null, height: null };
          obj[0] = width * c5;
          obj[1] = height * c5;
          obj.updateVideoSize(tmp, obj, 1);
        }
      }
    }
  }, items4);
  const callback2 = obj1.useCallback((arg0) => {
    let tmp2 = null == streamId;
    if (!tmp2) {
      tmp2 = arg0;
    }
    if (!tmp2) {
      tmp2 = transitionCleanUp !== VoicePanelPIPModes.IN_APP;
    }
    if (!tmp2) {
      transitionState(_undefined[37]);
      const obj = { width: null, height: null };
      obj[0] = ref.current * c5;
      obj[1] = ref2.current * c5;
      obj.updateVideoSize(streamId, obj, 1);
    }
  }, items5);
  const items6 = [callback2];
  const effect1 = obj1.useEffect(() => {
    closure_0 = transitionCleanUp(_undefined[38]).addOnPipModeChangedListener(callback2);
    return () => {
      if (closure_0 != null) {
        closure_0.remove();
      }
    };
  }, items6);
  closure_9 = tmp15;
  const items7 = [null != streamId];
  const effect2 = obj1.useEffect(() => {
    if (closure_9) {
      const ComponentDispatch = transitionState(_undefined[21]).ComponentDispatch;
      ComponentDispatch.dispatch(closure_1_16.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items7);
  if (stateFromStores === constants.ENDED) {
    obj = { style: null, resizeMode: "contain" };
    obj[0] = tmp.streamEmptyImage;
    let tmp18Result = callback(tmp2(12442).StreamEnded, obj);
  } else if (stateFromStores === tmp17.FAILED) {
    obj = { style: null, resizeMode: "contain" };
    obj[0] = tmp.streamEmptyImage;
    tmp18Result = callback(tmp2(12071).StreamFailed, obj);
  } else if (tmp15) {
    obj1 = { style: null, participantId: null, children: null };
    obj1[0] = tmp5;
    obj1[1] = participantId;
    const obj2 = { useSurfaceDirectRenderer: null, streamId: null, style: null, onSize: null, onLayout: null };
    obj2[0] = surfaceDirectRendererExperiment;
    obj2[1] = streamId;
    obj2[2] = tmp.video;
    obj2[3] = callback;
    obj2[4] = callback1;
    obj1[2] = tmp18(VideoStream, obj2);
    tmp18Result = tmp18(AnimatedVideoWrapper, obj1);
  } else {
    const obj3 = { participantId: null };
    obj3[0] = participantId;
    tmp18Result = tmp18(User, obj3);
  }
  return tmp18Result;
}
function getFocusedKey(id) {
  return id.id;
}
function renderFocusedParticipant(arg0, id) {
  if ("--voice-panel-pip-empty" === id.id) {
    let obj = { transitionState: null, transitionCleanUp: null };
    obj[0] = arg2;
    obj[1] = arg3;
    return callback(closure_38, obj, arg0);
  } else {
    obj = { participantId: null, transitionState: null, transitionCleanUp: null };
    obj[0] = id.id;
    obj[1] = arg2;
    obj[2] = arg3;
    const type = id.type;
    if (constants4.ACTIVITY === type) {
      obj1 = {};
      const merged = Object.assign(obj);
      return callback(ActivityInVoice, obj1, arg0);
    } else if (constants4.STREAM === type) {
      const obj2 = {};
      const merged1 = Object.assign(obj);
      return callback(Stream, obj2, arg0);
    } else {
      if (constants4.USER !== type) {
        const HIDDEN_STREAM = constants4.HIDDEN_STREAM;
      }
      obj = {};
      const merged2 = Object.assign(obj);
      return callback(User, obj, arg0);
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
let c4 = importAllResult;
({ PixelRatio: c5, StyleSheet } = get_ActivityIndicator);
({ ApplicationStreamStates: closure_15, ComponentActions: closure_16 } = ME);
({ ActivityLayoutMode: closure_17, OrientationLockState: closure_18 } = items3);
({ ParticipantTypes: closure_19, isActivityParticipant: closure_20 } = ParticipantTypes);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let obj = { width: 22, height: 22, backgroundColor: "rgba(78, 80, 88, 0.48)", borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center", position: "absolute", top: 6, left: 6 };
obj[6] = obj;
const createCacheKey = { width: 14, height: 14, color: ThemesDefault.colors.WHITE };
obj[7] = createCacheKey;
obj[8] = { zIndex: 1 };
obj[9] = { zIndex: 0 };
obj[10] = { width: "50%" };
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundColor = ThemesDefault.colors.BLACK;
obj[11] = obj2;
obj[12] = { position: "absolute", top: -1, left: -1, bottom: -1, right: -1, borderWidth: 2, borderColor: "white", zIndex: 1, opacity: 0.3 };
obj[13] = { backgroundColor: "black" };
let closure_23 = createCacheKey.createStyles(obj);
let closure_27 = { code: "function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_28 = { code: "function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal);}}" };
let closure_30 = { code: "function VoicePanelPIPContentTsx3(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
let closure_31 = { code: "function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId,mode.get());}}" };
let closure_32 = { code: "function VoicePanelPIPContentTsx5(){const{mode}=this.__closure;return mode.get();}" };
let closure_33 = { code: "function VoicePanelPIPContentTsx6(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}" };
let closure_35 = { code: "function VoicePanelPIPContentTsx7(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}" };
let closure_38 = importAllResult.memo(function EmptyPIP(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const effect = importAllResult.useEffect(() => {
    if (transitionState === transitionState(dependencyMap[22]).TransitionStates.YEETED) {
      transitionCleanUp();
    }
  }, items);
  const tmp = callback3();
  return callback(transitionCleanUp(7190), { style: callback3().emptyPip });
});
const memoResult = importAllResult.memo(function VoicePanelPIPContent() {
  const channelId = importAllResult.useContext(id(width[18])).channelId;
  let obj = channelId(width[23]);
  const size = obj.usePIPState();
  width = size.width;
  const height = size.height;
  let tmp = callback3();
  id = store.getId();
  let items = [closure_7];
  let items1 = [id, channelId, id];
  const items2 = [width, height, tmp.contentWrapper];
  const stateFromStores = channelId(width[26]).useStateFromStores(items, () => {
    let tmp = id;
    if (null != id) {
      const participant = closure_1_7.getParticipant(channelId, tmp);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      let USER = type;
    } else {
      USER = closure_1_19.USER;
    }
    if (USER == null) {
      USER = closure_1_19.USER;
    }
    if (tmp == null) {
      tmp = id;
    }
    const items = [{ id: tmp, type: USER }];
    return items;
  }, items1, areParticipantsEqual);
  const memo = importAllResult.useMemo(() => {
    const items = [contentWrapper.contentWrapper, ];
    const obj = { borderRadius: channelId(width[25]).getVoicePanelPIPBorderRadius(width, height) };
    items[1] = obj;
    const items1 = [items];
    return items1;
  }, items2);
  const obj2 = channelId(width[26]);
  obj = { items: stateFromStores, renderItem: renderFocusedParticipant, getItemKey: getFocusedKey };
  obj[2] = callback(channelId(width[22]).TransitionGroup, obj);
  return callback(id(width[24]), obj);
});
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPContent.tsx");

export default memoResult;