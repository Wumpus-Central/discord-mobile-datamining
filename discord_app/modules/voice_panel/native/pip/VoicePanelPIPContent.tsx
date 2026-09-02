// === Module 16981: VideoStream ===

// Module 16981 (VideoStream)
import ThemesDefault from "Themes" /* 709 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1228 */;
import LinearGradientDefault from "LinearGradient" /* 4940 */;
import setDefault from "set" /* 7805 */;
import dismissPanelDefault from "dismissPanel" /* 12062 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "participantFromServer" /* 1385 */;
import closure_8 from "getParticipants" /* 4494 */;
import closure_9 from "initialize" /* 9548 */;
import closure_10 from "reset" /* 4500 */;
import closure_11 from "fetchFingerprint" /* 1215 */;
import closure_12 from "ensureGuildLoaded" /* 1386 */;
import closure_13 from "mergeGuildAvatar" /* 1921 */;
import { VoicePanelModes } from "VoicePanelModes" /* 12063 */;
import { VoicePanelPIPModes } from "VoicePanelPIPModes" /* 16904 */;
import ME from "ME" /* 673 */;
import items3 from "items3" /* 4506 */;
import ParticipantTypes from "ParticipantTypes" /* 4499 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "module_4217" /* 4217 */;

require = arg1;
function VideoStream(streamId) {
  streamId = streamId.streamId;
  let obj = streamId(16898);
  setHasActiveVideoOutputSink = obj.useSetHasActiveVideoOutputSink(importAllResult.useContext(setHasActiveVideoOutputSink(12062)).streamOutputSinkStack);
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
  return callback(setHasActiveVideoOutputSink(9599), obj);
}
function markContentReady() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
}
function InnerStroke(style) {
  style = style.style;
  let width;
  let height;
  closure_3 = undefined;
  let obj = style(height[25]);
  const size = obj.usePIPState();
  width = size.width;
  height = size.height;
  const tmp = callback3();
  closure_3 = tmp;
  obj = {
    style: importAllResult.useMemo(() => {
      const items = [innerStroke.innerStroke, , ];
      const obj = { borderRadius: style(height[27]).getVoicePanelPIPBorderRadius(width, height) + 1 };
      items[1] = obj;
      items[2] = style;
      return items;
    }, items)
  };
  items = [width, height, tmp.innerStroke, style];
  return callback(width(height[26]), obj);
}
function ActivityInVoice(participantId) {
  participantId = participantId.participantId;
  transitionState = participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  let channelId;
  let layoutManager;
  let windowDimensions;
  let first;
  closure_5 = undefined;
  let stateFromStores;
  let stateFromStores1;
  let callback;
  closure_9 = undefined;
  let tmp = callback3();
  channelId = transitionCleanUp;
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
    if (timeout === transitionState(_undefined[24]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = tmp(tmp2[23]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(closure_1_17.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = transitionState(table[23]).ComponentDispatch;
        ComponentDispatch.unsubscribe(closure_2_17.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
    tmp = transitionState;
    tmp2 = _undefined;
  }, items);
  let items10 = layoutManager;
  let tmp5 = channelId;
  const context = obj.useContext(channelId(items10[20]));
  channelId = context.channelId;
  layoutManager = context.layoutManager;
  windowDimensions = context.windowDimensions;
  let tmp3Result = tmp3(items10[28]);
  const items1 = [closure_12];
  let PIP = tmp3Result.useStateFromStores(items1, () => closure_1_12.getChannel(channelId));
  const tmp7 = windowDimensions(obj.useState(transitionState === transitionState(items10[24]).TransitionStates.MOUNTED), 2);
  first = tmp7[0];
  closure_5 = tmp7[1];
  tmp3Result = tmp3(items10[28]);
  const items2 = [callback];
  const items3 = [channelId, participantId];
  stateFromStores = tmp3Result.useStateFromStores(items2, () => {
    const participant = callback.getParticipant(channelId, transitionState);
    let applicationId = transitionState;
    if (null != participant) {
      applicationId = transitionState;
      if (participant.type === closure_1_20.ACTIVITY) {
        applicationId = participant.applicationId;
      }
    }
    return applicationId;
  }, items3);
  const tmp4 = transitionState === transitionState(layoutManager[24]).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const items4 = [stateFromStores1];
  const items5 = [stateFromStores];
  stateFromStores1 = transitionState(items10[28]).useStateFromStores(items4, () => stateFromStores1.getPipOrientationLockStateForApp(stateFromStores), items5);
  const items6 = [layoutManager, stateFromStores1, stateFromStores];
  callback = obj.useCallback((width) => {
    if (closure_1_19.LANDSCAPE === stateFromStores1) {
      layoutManager.setTargetDimensions(stateFromStores, 16, 9);
    } else if (tmp3.PORTRAIT === tmp2) {
      layoutManager.setTargetDimensions(stateFromStores, 9, 16);
    } else if (tmp3.UNLOCKED === tmp2) {
      let num2 = 9;
      if (tmp) {
        num2 = 16;
      }
      let num3 = 16;
      if (tmp) {
        num3 = 9;
      }
      layoutManager.setTargetDimensions(stateFromStores, num2, num3);
      const tmp6 = stateFromStores;
    }
  }, items6);
  const items7 = [callback];
  const layoutEffect = obj.useLayoutEffect(() => {
    let obj = transitionState(layoutManager[29]);
    const size = obj.getWindowDimensions();
    obj = {};
    const merged = Object.assign(size);
    obj.landscape = size.width > size.height;
    callback(obj);
  }, items7);
  const tmp3Result1 = transitionState(items10[28]);
  const fn = function h() {
    return windowDimensions.get();
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 20962628184;
  fn.__initData = closure_29;
  const fn2 = function p(arg0, arg1) {
    if (arg0 !== arg1) {
      transitionState(layoutManager[18]).runOnJS(callback)(arg0);
      const obj = transitionState(layoutManager[18]);
    }
  };
  obj = { runOnJS: tmp3(items10[18]).runOnJS, handleTargetAspectRatioParams: callback };
  fn2.__closure = obj;
  fn2.__workletHash = 10001753822389;
  fn2.__initData = closure_30;
  const animatedReaction = transitionState(items10[18]).useAnimatedReaction(fn, fn2);
  closure_9 = tmp14;
  const items8 = [null != PIP, first];
  const effect1 = obj.useEffect(() => {
    if (!first) {
      if (closure_9) {
        let ComponentDispatch = transitionState(layoutManager[23]).ComponentDispatch;
        ComponentDispatch.dispatch(closure_1_17.VOICE_PANEL_PIP_CONTENT_READY);
      }
    }
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        callback2(false);
        const ComponentDispatch = callback(closure_1_2[23]).ComponentDispatch;
        ComponentDispatch.dispatch(closure_1_17.VOICE_PANEL_PIP_CONTENT_READY);
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
    const tmp5Result = tmp5(items10[26]);
    items10 = [, ];
    items10[0] = callback(tmp5(items10[30]), obj1);
    tmp5 = InnerStroke;
    items10[1] = callback(InnerStroke, {});
    obj[1] = items10;
    let tmp19 = callback2(tmp5Result, obj);
    const tmp23 = callback(tmp5(items10[30]), obj1);
  } else {
    const obj2 = { participantId: null };
    obj2[0] = store.getId();
    tmp19 = callback(User, obj2);
  }
}
function User(participantId) {
  participantId = participantId.participantId;
  transitionState = participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  transitionCleanUp = undefined;
  dependencyMap = undefined;
  let channelId;
  focused = undefined;
  let mode;
  let layoutManager;
  let dominantColorFromImage;
  closure_8 = undefined;
  c9 = undefined;
  let callback;
  let canRenderParticipantVideo;
  let tmp = callback3();
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
    if (timeout === transitionState(_undefined[24]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = tmp(tmp2[23]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(closure_1_17.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = transitionState(table[23]).ComponentDispatch;
        ComponentDispatch.unsubscribe(closure_2_17.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
    tmp = transitionState;
    tmp2 = _undefined;
  }, items);
  let tmp5 = transitionState === transitionState(4204).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  dependencyMap = tmp5;
  const context = obj.useContext(transitionCleanUp(12062));
  channelId = context.channelId;
  ({ guildId, focused } = context);
  mode = context.mode;
  layoutManager = context.layoutManager;
  let tmp3Result = tmp3(644);
  const items1 = [closure_8];
  const stateFromStores = tmp3Result.useStateFromStores(items1, () => {
    const participant = store.getParticipant(channelId, transitionState);
    let type;
    if (participant != null) {
      type = participant.type;
    }
    let tmp3;
    if (type === closure_1_20.USER) {
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
  tmp3Result = tmp3(8517);
  let avatarURL;
  if (user != null) {
    avatarURL = user.getAvatarURL(guildId, 80, false);
  }
  dominantColorFromImage = tmp3Result.useDominantColorFromImage(avatarURL);
  let id;
  let tmp6Result = tmp6(8121);
  if (user != null) {
    id = user.id;
  }
  const tmp6ResultResult = tmp6Result({ userId: id, guildId, location: "VoicePanelPIPContent-native" });
  closure_8 = tmp6ResultResult;
  const items2 = [tmp, tmp5, dominantColorFromImage, tmp6ResultResult];
  const memo = obj.useMemo(() => {
    const items = [transitionCleanUp.user, closure_2, ];
    let tmp = null;
    if (null == closure_8) {
      const obj = { backgroundColor: null };
      obj[0] = dominantColorFromImage;
      tmp = obj;
    }
    items[2] = tmp;
    return items;
  }, items2);
  [tmp18, c9] = channelId(obj.useState(false), 2);
  const tmp17 = channelId(obj.useState(false), 2);
  let id1;
  if (stateFromStores != null) {
    user = stateFromStores.user;
    if (user != null) {
      id1 = user.id;
    }
  }
  const items3 = [channelId];
  const surfaceDirectRendererExperiment = transitionState(9587).useSurfaceDirectRendererExperiment(id1, { location: "VoicePanelPIPContent" });
  callback = obj.useCallback((arg0, arg1) => {
    let participant;
    if (null != arg0) {
      participant = store.getParticipant(channelId, arg0);
    }
    let tmp5 = null != participant;
    if (tmp5) {
      tmp5 = closure_1_21(participant);
    }
    if (tmp5) {
      tmp5 = arg1 === closure_1_14.PANEL;
    }
    c9(tmp5);
  }, items3);
  const tmp3Result1 = transitionState(9587);
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
  S.__initData = closure_32;
  const fn = function h(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = transitionState(4217);
      transitionState(4217).runOnJS(callback)(arg0, mode.get());
      const runOnJSResult = transitionState(4217).runOnJS(callback);
    }
  };
  obj = { runOnJS: tmp3(4217).runOnJS, updateIsActivityFocused: callback, mode };
  fn.__closure = obj;
  fn.__workletHash = 5971237403457;
  fn.__initData = closure_33;
  const animatedReaction = transitionState(4217).useAnimatedReaction(S, fn);
  const tmp3Result2 = transitionState(4217);
  const fn2 = function v() {
    return mode.get();
  };
  fn2.__closure = { mode };
  fn2.__workletHash = 8288240256860;
  fn2.__initData = closure_34;
  class I {
    constructor(arg0, arg1) {
      if (participantId !== arg1) {
        tmp = transitionState;
        tmp2 = onBottom;
        obj = transitionState(onBottom[18]);
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
  obj = { runOnJS: tmp3(4217).runOnJS, updateIsActivityFocused: callback, focused };
  I.__closure = obj;
  I.__workletHash = 12552370107483;
  I.__initData = closure_35;
  const animatedReaction1 = transitionState(4217).useAnimatedReaction(fn2, I);
  const tmp3Result3 = transitionState(4217);
  const items4 = [c9];
  const stateFromStoresObject = transitionState(644).useStateFromStoresObject(items4, () => ({ isReactingToThermalState: _undefined.isReactingToThermalState(), consumedRequestToRespondToSeriousThermalState: _undefined.consumedRequestToRespondToSeriousThermalState() }));
  const items5 = [layoutManager, participantId];
  ({ isReactingToThermalState, consumedRequestToRespondToSeriousThermalState } = stateFromStoresObject);
  const callback1 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    layoutManager.setTargetDimensions(transitionState, nativeEvent.width, nativeEvent.height);
  }, items5);
  const tmp3Result4 = transitionState(644);
  canRenderParticipantVideo = transitionState(9604).useCanRenderParticipantVideo(stateFromStores);
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
      const ComponentDispatch = transitionState(1228).ComponentDispatch;
      ComponentDispatch.dispatch(closure_1_17.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items6);
  obj1 = { style: null, children: null };
  tmp6Result = tmp6(6014);
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
    let tmp42 = obj1;
  } else {
    obj1[0] = memo;
    let tmp31 = null;
    if (null != tmp6ResultResult) {
      const obj4 = { colors: null, start: null, end: null, style: null, layout: null, pointerEvents: "none" };
      obj4[0] = tmp6ResultResult;
      obj4[1] = { x: 0, y: 0 };
      obj4[2] = { x: 0, y: 1 };
      obj4[3] = layoutManager.absoluteFill;
      obj4[4] = tmp3(16903).layoutTransition;
      tmp31 = callback(closure_25, obj4);
    }
    const items10 = [tmp31, , , ];
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.avatarWrapper;
    let tmp35Result = null;
    if (null != user) {
      const obj6 = { source: null, size: null, avatarDecoration: null };
      obj6[0] = tmp3(8517).getCachedSourceFromURI(user.getAvatarURL(guildId, 80, false));
      const AvatarSizes = tmp3(1296).AvatarSizes;
      obj6[1] = tmp18 ? AvatarSizes.LARGE : AvatarSizes.XLARGE;
      let userAvatarDecoration;
      if (stateFromStores != null) {
        userAvatarDecoration = stateFromStores.userAvatarDecoration;
      }
      obj6[2] = userAvatarDecoration;
      tmp35Result = tmp35(tmp3(1296).Avatar, obj6);
      const tmp3Result6 = tmp3(8517);
    }
    obj5[1] = tmp35Result;
    items10[1] = callback(tmp6(6014), obj5);
    const obj7 = { style: null };
    obj7[0] = tmp.userOpacity;
    items10[2] = callback(InnerStroke, obj7);
    tmp35Result = null;
    if (tmp18) {
      tmp35Result = null;
      if (consumedRequestToRespondToSeriousThermalState) {
        const obj8 = { style: null, children: null };
        obj8[0] = tmp.thermalAlertIconContainer;
        const obj9 = { style: null, source: null, color: null };
        obj9[0] = tmp.thermalAlertIcon;
        obj9[1] = tmp6(9607);
        obj9[2] = tmp.thermalAlertIcon.color;
        obj8[1] = tmp35(tmp3(1296).Icon, obj9);
        tmp35Result = tmp35(tmp6(6014), obj8);
        const tmp6Result2 = tmp6(6014);
      }
    }
    items10[3] = tmp35Result;
    obj1[1] = items10;
    tmp42 = obj1;
    const tmp6Result1 = tmp6(6014);
  }
  return closure_23(tmp6Result, tmp42);
}
function AnimatedVideoWrapper(arg0) {
  let targetDimensionsSubscription;
  ({ participantId, style, children } = arg0);
  targetDimensionsSubscription = targetDimensionsSubscription(12065).useTargetDimensionsSubscription(participantId, importAllResult.useContext(dismissPanelDefault).layoutManager);
  const obj = targetDimensionsSubscription(12065);
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
  fn.__initData = closure_37;
  const animatedStyle = targetDimensionsSubscription(4217).useAnimatedStyle(fn);
  style = [, ];
  style[0] = style;
  style[1] = animatedStyle;
  return callback(setDefault, { style, children });
}
function Stream(participantId) {
  participantId = participantId.participantId;
  transitionState = participantId;
  ({ transitionState, transitionCleanUp } = participantId);
  transitionCleanUp = undefined;
  dependencyMap = undefined;
  layoutManager = undefined;
  let streamId;
  c5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  let callback2;
  closure_9 = undefined;
  let tmp = callback3();
  let obj = transitionState(16908);
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
    if (timeout === transitionState(_undefined[24]).TransitionStates.YEETED) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        let tmp;
        if (handleVideoReady != null) {
          tmp = handleVideoReady();
        }
        return tmp;
      }, 500);
      let ComponentDispatch = tmp(tmp2[23]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(closure_1_17.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
      return () => {
        const ComponentDispatch = transitionState(table[23]).ComponentDispatch;
        ComponentDispatch.unsubscribe(closure_2_17.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
        clearTimeout(closure_0);
      };
    }
    tmp = transitionState;
    tmp2 = _undefined;
  }, items);
  const context = obj1.useContext(transitionCleanUp(12062));
  ({ channelId: c2, layoutManager } = context);
  let tmp2Result = tmp2(644);
  const items1 = [callback2];
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(items1, () => {
    const participant = callback2.getParticipant(c2, transitionState);
    let tmp2 = null != participant;
    if (tmp2) {
      tmp2 = participant.type === closure_1_20.STREAM;
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
  tmp2Result = tmp2(9587);
  const surfaceDirectRendererExperiment = tmp2Result.useSurfaceDirectRendererExperiment(stateFromStoresObject.userId, { location: "VoicePanelPIPContent.Stream" });
  let tmp5 = transitionState === transitionState(4204).TransitionStates.YEETED ? tmp.onTop : tmp.onBottom;
  const items2 = [closure_10];
  const stateFromStores = transitionState(644).useStateFromStores(items2, () => {
    const activeStreamForStreamKey = closure_1_10.getActiveStreamForStreamKey(transitionState);
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
        tmp12.current = width;
        ref2.current = height;
        if (transitionCleanUp === closure_1_15.IN_APP) {
          let obj = transitionState(_undefined[39]);
          obj = { width: null, height: null };
          obj[0] = width * c5;
          obj[1] = height * c5;
          obj.updateVideoSize(tmp, obj, 1);
        }
      }
      tmp12 = ref;
    }
  }, items4);
  callback2 = obj1.useCallback((arg0) => {
    let tmp2 = null == streamId;
    if (!tmp2) {
      tmp2 = arg0;
    }
    if (!tmp2) {
      tmp2 = transitionCleanUp !== closure_1_15.IN_APP;
    }
    if (!tmp2) {
      let obj = transitionState(_undefined[39]);
      obj = { width: null, height: null };
      obj[0] = ref.current * c5;
      obj[1] = ref2.current * c5;
      obj.updateVideoSize(streamId, obj, 1);
    }
  }, items5);
  const items6 = [callback2];
  const effect1 = obj1.useEffect(() => {
    closure_0 = transitionCleanUp(_undefined[40]).addOnPipModeChangedListener(callback2);
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
      const ComponentDispatch = transitionState(_undefined[23]).ComponentDispatch;
      ComponentDispatch.dispatch(closure_1_17.VOICE_PANEL_PIP_CONTENT_READY);
    }
  }, items7);
  if (stateFromStores === constants.ENDED) {
    obj = { style: null, resizeMode: "contain" };
    obj[0] = tmp.streamEmptyImage;
    let tmp18Result = callback(tmp2(9580).StreamEnded, obj);
  } else if (stateFromStores === tmp17.FAILED) {
    obj = { style: null, resizeMode: "contain" };
    obj[0] = tmp.streamEmptyImage;
    tmp18Result = callback(tmp2(9583).StreamFailed, obj);
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
    return callback(closure_40, obj, arg0);
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
    } else if (tmp18.STREAM === type) {
      const obj2 = {};
      const merged1 = Object.assign(obj);
      return callback(Stream, obj2, arg0);
    } else {
      if (tmp18.USER !== type) {
        const HIDDEN_STREAM = tmp18.HIDDEN_STREAM;
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
      let tmp5 = num2;
      let tmp6 = arg1[num2];
      let id;
      if (tmp6 != null) {
        id = tmp6.id;
      }
      if (iter.next().id !== id) {
        let tmp9 = iter;
        iter.return();
        let flag = false;
        return false;
      } else {
        let tmp8 = num2;
        num2 = num2 + 1;
        continue;
      }
    }
    return true;
  }
}
let c4 = importAllResult;
({ PixelRatio: c5, StyleSheet } = get_ActivityIndicator);
({ ApplicationStreamStates: closure_16, ComponentActions: closure_17 } = ME);
({ ActivityLayoutMode: closure_18, OrientationLockState: closure_19 } = items3);
({ ParticipantTypes: closure_20, isActivityParticipant: closure_21 } = ParticipantTypes);
({ jsx: closure_22, jsxs: closure_23 } = jsxProd);
let obj = { contentWrapper: { position: "absolute", width: "100%", height: "100%", overflow: "hidden", alignItems: "center", justifyContent: "center" }, userOpacity: { opacity: 0.1 }, activity: { position: "absolute", width: "100%", height: "100%" }, user: { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, video: { position: "absolute", width: "100%", height: "100%" }, avatarWrapper: { position: "relative", width: "56%", height: "56%", alignItems: "center", justifyContent: "center" }, thermalAlertIconContainer: null, thermalAlertIcon: null, onTop: null, onBottom: null, streamEmptyImage: null, emptyPip: null, innerStroke: null, blackBackground: null };
obj = { width: 22, height: 22, backgroundColor: "rgba(78, 80, 88, 0.48)", borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center", position: "absolute", top: 6, left: 6 };
obj[6] = obj;
createCacheKey = { width: 14, height: 14, color: ThemesDefault.colors.WHITE };
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
let closure_24 = createCacheKey.createStyles(obj);
let closure_25 = importDefaultResult.createAnimatedComponent(LinearGradientDefault);
let closure_29 = { code: "function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}" };
let closure_30 = { code: "function VoicePanelPIPContentTsx2(windowDimensionsVal,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal);}}" };
let closure_32 = { code: "function VoicePanelPIPContentTsx3(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}" };
let closure_33 = { code: "function VoicePanelPIPContentTsx4(focusedParticipantId,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId,mode.get());}}" };
let closure_34 = { code: "function VoicePanelPIPContentTsx5(){const{mode}=this.__closure;return mode.get();}" };
let closure_35 = { code: "function VoicePanelPIPContentTsx6(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}" };
let closure_37 = { code: "function VoicePanelPIPContentTsx7(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}" };
let closure_40 = importAllResult.memo(function EmptyPIP(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const items = [transitionState, transitionCleanUp];
  const effect = importAllResult.useEffect(() => {
    if (transitionState === transitionState(closure_1_2[24]).TransitionStates.YEETED) {
      transitionCleanUp();
    }
  }, items);
  const tmp = callback3();
  return callback(transitionCleanUp(6014), { style: callback3().emptyPip });
});
const memoResult = importAllResult.memo(function VoicePanelPIPContent() {
  const channelId = importAllResult.useContext(id(width[20])).channelId;
  let obj = channelId(width[25]);
  const size = obj.usePIPState();
  id = size.id;
  width = size.width;
  const height = size.height;
  let tmp = callback3();
  id = store.getId();
  let items = [closure_8];
  let items1 = [id, channelId, id];
  const items2 = [width, height, tmp.contentWrapper];
  const stateFromStores = channelId(width[28]).useStateFromStores(items, () => {
    let tmp = id;
    if (null != id) {
      const participant = closure_1_8.getParticipant(channelId, tmp);
      let type;
      if (participant != null) {
        type = participant.type;
      }
      let USER = type;
    } else {
      USER = closure_1_20.USER;
    }
    if (USER == null) {
      USER = closure_1_20.USER;
    }
    if (tmp == null) {
      tmp = id;
    }
    const items = [{ id: tmp, type: USER }];
    return items;
  }, items1, areParticipantsEqual);
  const memo = importAllResult.useMemo(() => {
    const items = [contentWrapper.contentWrapper, ];
    const obj = { borderRadius: channelId(width[27]).getVoicePanelPIPBorderRadius(width, height) };
    items[1] = obj;
    const items1 = [items];
    return items1;
  }, items2);
  obj = { style: memo, pointerEvents: "none", children: null };
  const obj2 = channelId(width[28]);
  obj = { items: stateFromStores, renderItem: renderFocusedParticipant, getItemKey: getFocusedKey };
  obj[2] = callback(channelId(width[24]).TransitionGroup, obj);
  return callback(id(width[26]), obj);
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPContent.tsx");

export default memoResult;