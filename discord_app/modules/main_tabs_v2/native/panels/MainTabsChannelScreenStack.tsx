// === Module 15854: getKey ===

// Module 15854 (getKey)
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "map" /* 8745 */;
import { MIDNIGHT_BORDER_WIDTH } from "MIN_HEADER_HEIGHT" /* 8532 */;
import ME from "ME" /* 676 */;
import FrameLayoutModes from "FrameLayoutModes" /* 8746 */;
import { ThemeTypes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
function getKey(index) {
  return String(index.index);
}
let c4 = importAllResult;
({ NativeModules: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticsObjectTypes: c9, AnalyticsObjects: c10, AnalyticsSections: unpackModuleId } = ME);
({ FrameIntent: closure_12, getChannelIdForSurface: map1 } = FrameLayoutModes);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = createCacheKey.createStyles({ midnightContainerStyles: { marginTop: -MIDNIGHT_BORDER_WIDTH, marginLeft: -MIDNIGHT_BORDER_WIDTH } });
let closure_18 = { code: "function MainTabsChannelScreenStackTsx1(){const{translateX}=this.__closure;return translateX.get()>0;}" };
let closure_19 = { code: "function MainTabsChannelScreenStackTsx2(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}" };
let closure_20 = { code: "function MainTabsChannelScreenStackTsx3(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}" };
let closure_21 = importAllResult.memo(function FirstChannelScreen(cleanup) {
  ({ frame, index, isDragging, translateX, containerWidth, isActive, transitionState } = cleanup);
  index = transitionState;
  cleanup = cleanup.cleanup;
  let highestFullyRenderedScreenIndex = cleanup;
  highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  ({ guildId, channelId, showCreateThread, freeze, maxWidth, focusChatPressableComponent, parentFreezeValue } = cleanup);
  const tmp = highestFullyRenderedScreenIndex;
  const tmp3 = highestFullyRenderedScreenIndex(translateX[13])();
  let obj = index(translateX[14]);
  obj1 = index(translateX[15]);
  let enabled;
  const orientation = obj1.useOrientation();
  let obj2 = highestFullyRenderedScreenIndex(translateX[10]);
  enabled = obj2.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  let obj3 = index(translateX[11]);
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 10608377273080;
  fn.__initData = closure_18;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const value = highestFullyRenderedScreenIndex.get();
      if (arg0) {
        if (value >= tmp2) {
          const result = obj.set(tmp2 - 1);
        }
      } else if (value < tmp2) {
        const result1 = obj.set(tmp2);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 10137919010401;
  fn2.__initData = closure_19;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  const tmp4 = callback();
  const unmountEffect = index(translateX[12]).useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= index) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  });
  const obj5 = index(translateX[12]);
  const fn3 = function o() {
    let tmp = enabled;
    if (enabled) {
      tmp = highestFullyRenderedScreenIndex.get() > index;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 1648562234730;
  fn3.__initData = closure_20;
  const derivedValue = index(translateX[11]).useDerivedValue(fn3);
  const obj6 = index(translateX[11]);
  const items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = index(translateX[16]).useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, derivedValue, parentFreezeValue);
  const effect = importAllResult.useEffect(() => {
    if (index === index(translateX[17]).TransitionStates.YEETED) {
      highestFullyRenderedScreenIndex();
    }
  }, items);
  const items1 = [mainTabsChannelScreenStyles, , ];
  let tmp14 = null;
  const obj7 = index(translateX[16]);
  const tmp12 = closure_16;
  if (null != containerWidth) {
    obj = { width: null };
    obj[0] = containerWidth;
    tmp14 = obj;
  }
  items1[1] = tmp14;
  let prop;
  if (tmp3 === ThemeTypes.MIDNIGHT) {
    if (!obj.useMobileVisualRefreshConfig({ location: "MainTabsChannelScreenStack" }).chatInputFloating) {
      prop = tmp4.midnightContainerStyles;
    }
  }
  obj = { style: items1, children: null };
  items1[2] = prop;
  obj1 = { freeze, children: null };
  obj2 = { collapsable: false, style: absoluteFill.absoluteFill, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  let str = "box-only";
  if (isActive) {
    str = "auto";
  }
  obj2[2] = str;
  obj2[3] = !isActive;
  obj2[4] = "no-hide-descendants";
  obj3 = { guildId, channelId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index };
  obj2[5] = closure_15(tmp(translateX[20]), obj3);
  obj1[1] = closure_15(closure_7, obj2);
  const items2 = [closure_15(index(translateX[19]).Freeze, obj1), focusChatPressableComponent];
  obj[1] = items2;
  return tmp12(highestFullyRenderedScreenIndex(translateX[18]), obj);
});
let closure_22 = { code: "function MainTabsChannelScreenStackTsx4(){const{translateX}=this.__closure;return translateX.get()===0;}" };
let closure_23 = { code: "function MainTabsChannelScreenStackTsx5(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}" };
let closure_24 = importAllResult.memo(function ChannelScreen(transitionState) {
  transitionState = transitionState.transitionState;
  index = transitionState;
  const cleanup = transitionState.cleanup;
  let highestFullyRenderedScreenIndex = cleanup;
  ({ isActive, index } = transitionState);
  translateX = index;
  highestFullyRenderedScreenIndex = transitionState.highestFullyRenderedScreenIndex;
  let enabled;
  importAllResult = undefined;
  translateX = undefined;
  let disallowGesture;
  let obj;
  closure_8 = undefined;
  ({ guildId, channelId, showCreateThread, freeze, parentFreezeValue } = transitionState);
  let tmp = highestFullyRenderedScreenIndex;
  const tmp3 = highestFullyRenderedScreenIndex(translateX[13])();
  obj = index(translateX[14]);
  obj1 = index(translateX[15]);
  const orientation = obj1.useOrientation();
  let obj2 = index(translateX[21]);
  const navigation = obj2.useNavigation();
  enabled = navigation;
  importAllResult = importAllResult.useRef(false);
  const items = [cleanup, navigation];
  const callback = importAllResult.useCallback((arg0) => {
    if (!arg0) {
      if (ref.current) {
        highestFullyRenderedScreenIndex();
      } else {
        tmp.current = true;
        enabled.goBack();
      }
    }
  }, items);
  obj = { canDrag: null, onVisibilityChange: null, onDragStart: null, startShown: false };
  const tmp4 = callback();
  obj[0] = transitionState !== index(translateX[17]).TransitionStates.YEETED;
  obj[1] = callback;
  obj[2] = index(translateX[23]).dismissKeyboard;
  const tmp9Result = highestFullyRenderedScreenIndex(translateX[22])(obj);
  ({ isDragging, translateX } = tmp9Result);
  enabled = undefined;
  ({ gesture, panelGestureContext, movePanel, maxWidth } = tmp9Result);
  let obj4 = highestFullyRenderedScreenIndex(translateX[10]);
  enabled = obj4.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  const tmp9 = highestFullyRenderedScreenIndex(translateX[22]);
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 10608377273080;
  fn.__initData = closure_18;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const value = highestFullyRenderedScreenIndex.get();
      if (arg0) {
        if (value >= tmp2) {
          const result = obj.set(tmp2 - 1);
        }
      } else if (value < tmp2) {
        const result1 = obj.set(tmp2);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 10137919010401;
  fn2.__initData = closure_19;
  const animatedReaction = index(translateX[11]).useAnimatedReaction(fn, fn2);
  const obj6 = index(translateX[11]);
  const unmountEffect = index(translateX[12]).useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= index) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  });
  const obj7 = index(translateX[12]);
  const fn3 = function o() {
    let tmp = enabled;
    if (enabled) {
      tmp = highestFullyRenderedScreenIndex.get() > index;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 1648562234730;
  fn3.__initData = closure_20;
  const derivedValue = index(translateX[11]).useDerivedValue(fn3);
  disallowGesture = importAllResult.useContext(highestFullyRenderedScreenIndex(translateX[24])).disallowGesture;
  const obj8 = index(translateX[11]);
  const fn4 = function y() {
    return 0 === translateX.get();
  };
  fn4.__closure = { translateX };
  fn4.__workletHash = 1803281708382;
  fn4.__initData = closure_22;
  const fn5 = function _(arg0, arg1) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = 1 === translateX;
    }
    if (tmp) {
      const result = disallowGesture.set(arg0);
    }
  };
  fn5.__closure = { index, mainTabsDisallowGesture: disallowGesture };
  fn5.__workletHash = 4369586160197;
  fn5.__initData = closure_23;
  const animatedReaction1 = index(translateX[11]).useAnimatedReaction(fn4, fn5);
  obj = { cleanup, movePanel };
  closure_8 = importAllResult.useRef(obj);
  const effect = importAllResult.useEffect(() => {
    closure_8.current = obj;
  });
  const items1 = [transitionState];
  const effect1 = importAllResult.useEffect(() => {
    const current = ref2.current;
    const movePanel = current.movePanel;
    if (index !== index(translateX[17]).TransitionStates.MOUNTED) {
      if (index !== index(translateX[17]).TransitionStates.ENTERED) {
        if (ref.current) {
          current.cleanup();
        } else {
          tmp5.current = true;
          movePanel(false, false, 0, true);
        }
      }
    }
    movePanel(true, false, 0, false);
  }, items1);
  const obj9 = index(translateX[11]);
  const mainTabsChannelScreenStyles = index(translateX[16]).useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, derivedValue, parentFreezeValue);
  obj1 = { gesture, children: null };
  obj2 = { value: panelGestureContext, children: null };
  const items2 = [mainTabsChannelScreenStyles, ];
  let prop;
  const obj11 = index(translateX[16]);
  if (tmp3 === ThemeTypes.MIDNIGHT) {
    if (!obj.useMobileVisualRefreshConfig({ location: "MainTabsChannelScreenStack" }).chatInputFloating) {
      prop = tmp4.midnightContainerStyles;
    }
  }
  const obj3 = { style: items2, accessibilityElementsHidden: !isActive, importantForAccessibility: "no-hide-descendants", children: null };
  items2[1] = prop;
  obj4 = { freeze, children: tmp18(tmp(tmp2[20]), { guildId, channelId, showCreateThread, isNavigationScreen: true, frame: null, screenIndex: index }) };
  obj3[3] = closure_15(index(translateX[19]).Freeze, obj4);
  obj2[1] = closure_15(highestFullyRenderedScreenIndex(translateX[18]), obj3);
  obj1[1] = closure_15(index(translateX[24]).MainTabsChannelScreenStackContext.Provider, obj2);
  return closure_15(index(translateX[25]).GestureDetector, obj1);
});
let closure_26 = { code: "function MainTabsChannelScreenStackTsx6(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
let closure_27 = { code: "function MainTabsChannelScreenStackTsx7(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}" };
const memoResult = importAllResult.memo(function MainTabsChannelScreenStack(screens) {
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  const highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  closure_9 = undefined;
  let memo;
  let first;
  let sharedValue;
  closure_13 = undefined;
  closure_14 = undefined;
  let obj = maxWidth;
  let tmp3 = isDragging(maxWidth.useState(translateX.get() === maxWidth), 2);
  closure_9 = tmp4;
  obj1 = screens(translateX[11]);
  class M {
    constructor() {
      return translateX.get() === maxWidth;
    }
  }
  M.__closure = { translateX, maxWidth };
  M.__workletHash = 9963940499904;
  M.__initData = closure_26;
  class D {
    constructor(arg0, arg1) {
      if (screens !== arg1) {
        tmp = screens;
        tmp2 = translateX;
        obj = screens(translateX[11]);
        tmp3 = closure_9;
        tmp4 = obj.runOnJS(closure_9)(screens);
      }
      return;
    }
  }
  obj = { runOnJS: screens(translateX[11]).runOnJS, setIsHidden: tmp4 };
  D.__closure = obj;
  D.__workletHash = 10167608718442;
  D.__initData = closure_27;
  const animatedReaction = obj1.useAnimatedReaction(M, D);
  const items = [screens];
  memo = maxWidth.useMemo(() => {
    const atResult = screens.at(-1);
    let type;
    if (atResult != null) {
      type = atResult.type;
    }
    let channelId = null;
    if (type === screens(translateX[27]).ChannelScreenType.DEFAULT) {
      channelId = atResult.channelId;
    }
    return channelId;
  }, items);
  const items1 = [memo];
  const effect = maxWidth.useEffect(() => {
    const MediaPlayerManager = highestFullyRenderedScreenIndex.MediaPlayerManager;
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
  }, items1);
  const items2 = [memo];
  const effect1 = maxWidth.useEffect(() => {
    const allFrames = firstScreenFrame.getAllFrames();
    const iter = allFrames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp4 = sharedValue;
      if (nextResult.intent === sharedValue.INLINE) {
        let tmp5 = ref;
        let tmp6 = nextResult;
        let tmp7 = ref(tmp3.surface);
        let tmp9 = null != tmp7;
        if (tmp9) {
          let tmp10 = tmp7;
          let tmp11 = memo;
          tmp9 = tmp8 !== memo;
        }
        if (tmp9) {
          let tmp12 = screenStackActive;
          let tmp13 = translateX;
          let obj = screenStackActive(translateX[28]);
          let tmp14 = nextResult;
          let leaveFrameResult = obj.leaveFrame(tmp3.id);
        }
      }
      continue;
    }
  }, items2);
  first = screens[0];
  if (shouldFreeze) {
    shouldFreeze = tmp3[0];
  }
  if (shouldFreeze) {
    let tmp12 = null == first;
    if (!tmp12) {
      tmp12 = first.type !== tmp5(tmp[27]).ChannelScreenType.DEFAULT;
    }
    shouldFreeze = tmp12;
  }
  let tmp5Result = tmp5(tmp[11]);
  sharedValue = tmp5Result.useSharedValue(0);
  const items3 = [shouldFreeze, sharedValue];
  const effect2 = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = store.set(store.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items3);
  const items4 = [screens.length, focusChatPressableComponent, isDragging, translateX, firstScreenWidth, firstScreenFrame, maxWidth, sharedValue, screenStackActive, highestFullyRenderedScreenIndex];
  let channelId;
  const callback = obj.useCallback((arg0, arg1, arg2, arg3) => {
    const NumberResult = Number(arg0);
    if (0 === NumberResult) {
      let obj = { guildId: null, channelId: null, showCreateThread: null, focusChatPressableComponent: null, index: null, transitionState: null, cleanup: null, isDragging: null, translateX: null, isActive: null, freeze: null, containerWidth: null, frame: null, parentFreezeValue: null, maxWidth: null, highestFullyRenderedScreenIndex: null };
      ({ guildId: obj[0], channelId: obj[1], showCreateThread: showCreateThread2 } = arg1);
      if (showCreateThread2 == null) {
        showCreateThread2 = false;
      }
      obj[2] = showCreateThread2;
      obj[3] = focusChatPressableComponent;
      obj[4] = NumberResult;
      obj[5] = arg2;
      obj[6] = arg3;
      obj[7] = isDragging;
      obj[8] = translateX;
      let tmp12 = screenStackActive;
      if (screenStackActive) {
        tmp12 = NumberResult === screens.length - 1;
      }
      obj[9] = tmp12;
      obj[10] = NumberResult < screens.length - 2;
      obj[11] = firstScreenWidth;
      obj[12] = firstScreenFrame;
      obj[13] = sharedValue;
      obj[14] = maxWidth;
      obj[15] = highestFullyRenderedScreenIndex;
      let tmp20Result = closure_1_15(closure_1_21, obj, arg0);
      const tmp6 = closure_1_15;
      const tmp7 = closure_1_21;
    } else {
      obj = { guildId: null, channelId: null, showCreateThread: null, index: null, transitionState: null, parentFreezeValue: null, cleanup: null, isActive: null, freeze: null, highestFullyRenderedScreenIndex: null };
      ({ guildId: obj2[0], channelId: obj2[1], showCreateThread } = arg1);
      if (showCreateThread == null) {
        showCreateThread = false;
      }
      obj[2] = showCreateThread;
      obj[3] = NumberResult;
      obj[4] = arg2;
      obj[5] = sharedValue;
      obj[6] = arg3;
      obj[7] = NumberResult === screens.length - 1;
      obj[8] = NumberResult < screens.length - 2;
      obj[9] = highestFullyRenderedScreenIndex;
      tmp20Result = closure_1_15(closure_1_24, obj, arg0);
      const tmp20 = closure_1_15;
      const tmp21 = closure_1_24;
    }
    return tmp20Result;
  }, items4);
  if (first != null) {
    channelId = first.channelId;
  }
  if (channelId == null) {
    channelId = null;
  }
  closure_13 = obj.useRef(channelId);
  closure_14 = obj.useRef(null);
  let type;
  if (first != null) {
    type = first.type;
  }
  const items5 = [type, ];
  let channelId1;
  if (first != null) {
    channelId1 = first.channelId;
  }
  items5[1] = channelId1;
  const effect3 = obj.useEffect(() => {
    let type;
    if (first != null) {
      type = tmp.type;
    }
    let tmp3 = null != type;
    if (tmp3) {
      tmp3 = ref2.current !== tmp.type;
    }
    if (tmp3) {
      ref2.current = tmp.type;
      if (tmp.channelId === ref.current) {
        let isChatLockedOpen = tmp.type !== screens(translateX[27]).ChannelScreenType.DEFAULT;
        if (!isChatLockedOpen) {
          isChatLockedOpen = tmp7(tmp8[29]).getChatLayout().isChatLockedOpen;
          const tmp7Result = tmp7(tmp8[29]);
        }
        if (!isChatLockedOpen) {
          let obj = { type: "TRY_ACK", location: null, channelId: null };
          obj = { section: null, object: null, objectType: null };
          obj[0] = first.CHANNEL;
          obj[1] = memo.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH;
          obj[2] = constants.ACK_AUTOMATIC;
          obj[1] = obj;
          obj[2] = tmp.channelId;
          screenStackActive(tmp8[30]).dispatch(obj);
          const obj2 = screenStackActive(tmp8[30]);
        }
        tmp7 = screens;
      } else {
        tmp6.current = tmp.channelId;
      }
    }
  }, items5);
  tmp5Result = tmp5(tmp[31]);
  tmp5Result.freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    obj = { freeze: null, children: null };
    obj[0] = shouldFreeze;
    obj1 = { collapsable: false, style: null, pointerEvents: "box-none", accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    obj1[1] = focusChatPressableComponent.absoluteFill;
    obj1[3] = !screenStackActive;
    obj1[4] = "no-hide-descendants";
    let obj2 = { gradient: null, children: null };
    obj2[0] = tmp2;
    const obj3 = { items: null, renderItem: null, getItemKey: null };
    obj3[0] = screens;
    obj3[1] = callback;
    obj3[2] = getKey;
    obj2[1] = closure_15(tmp5(tmp[17]).TransitionGroup, obj3);
    obj1[5] = closure_15(tmp5(tmp[17]).ThemeContextProvider, obj2);
    obj[1] = closure_15(firstScreenWidth, obj1);
    let tmp23Result = tmp23(tmp5(tmp[19]).Freeze, obj);
    const tmp24 = firstScreenWidth;
    const tmp26 = !screenStackActive;
  } else {
    let showCreateThread;
    if (first != null) {
      showCreateThread = first.showCreateThread;
    }
    tmp23Result = null;
  }
  return tmp23Result;
});
let obj = { marginTop: -MIDNIGHT_BORDER_WIDTH, marginLeft: -MIDNIGHT_BORDER_WIDTH };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default memoResult;