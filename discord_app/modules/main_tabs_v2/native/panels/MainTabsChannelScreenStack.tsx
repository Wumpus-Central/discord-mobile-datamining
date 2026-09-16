// === Module 16659: MainTabsChannelScreenStack ===

// Module 16659 (MainTabsChannelScreenStack)
import DispatcherDefault from "Dispatcher" /* 573 */;
import native from "native" /* 4348 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4374 */;
import useChatLayout from "useChatLayout" /* 4498 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 9711 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 16135 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 9653 */;

require = fn;
function getKey(index) {
  return String(index.index);
}
get_ActivityIndicator = fn(17);
({ NativeModules: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const ONYX_BORDER_WIDTH = fn(7979).ONYX_BORDER_WIDTH;
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_9, AnalyticsObjects: c10, AnalyticsSections: closure_11 } = Constants);
const FramesConstants = fn(9654);
({ FrameIntent: closure_12, getChannelIdForSurface: map1 } = FramesConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4638);
let closure_17 = createStyles.createStyles({ onyxContainerStyles: { marginTop: -ONYX_BORDER_WIDTH, marginLeft: -ONYX_BORDER_WIDTH } });
const __initData = { code: "function MainTabsChannelScreenStackTsx1(){const{translateX}=this.__closure;return translateX.get()>0;}" };
const __initData2 = { code: "function MainTabsChannelScreenStackTsx2(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}" };
const __initData3 = { code: "function MainTabsChannelScreenStackTsx3(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}" };
let closure_21 = noop.memo(function FirstChannelScreen(cleanup) {
  ({ index, isDragging, translateX, containerWidth, isActive, transitionState } = cleanup);
  index = transitionState;
  cleanup = cleanup.cleanup;
  const highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  ({ guildId, channelId, showCreateThread, frame, freeze, maxWidth, focusChatPressableComponent, parentFreezeValue } = cleanup);
  const tmp = highestFullyRenderedScreenIndex;
  const tmp3 = highestFullyRenderedScreenIndex(translateX[13])();
  const tmp4 = closure_17();
  const enabled = highestFullyRenderedScreenIndex(translateX[10]).useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  const obj = highestFullyRenderedScreenIndex(translateX[10]);
  const tmp5 = index;
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 10608377273080;
  fn.__initData = __initData;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      value = highestFullyRenderedScreenIndex.get();
      if (arg0) {
        if (value >= index) {
          const result = highestFullyRenderedScreenIndex.set(index - 1);
        }
      } else if (value < index) {
        const result1 = highestFullyRenderedScreenIndex.set(index);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 10137919010401;
  fn2.__initData = __initData2;
  const animatedReaction = index(translateX[11]).useAnimatedReaction(fn, fn2);
  const obj2 = index(translateX[11]);
  const unmountEffect = index(translateX[12]).useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= index) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  });
  const obj3 = index(translateX[12]);
  const fn3 = function o() {
    let tmp = enabled;
    if (enabled) {
      tmp = highestFullyRenderedScreenIndex.get() > index;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 1648562234730;
  fn3.__initData = __initData3;
  const derivedValue = index(translateX[11]).useDerivedValue(fn3);
  const obj4 = index(translateX[11]);
  const items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = index(translateX[15]).useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, derivedValue, parentFreezeValue);
  const effect = noop.useEffect(() => {
    if (index === native.TransitionStates.YEETED) {
      highestFullyRenderedScreenIndex();
    }
  }, items);
  const items1 = [mainTabsChannelScreenStyles, , ];
  let tmp13 = null;
  const obj5 = index(translateX[15]);
  if (null != containerWidth) {
    const obj6 = { width: containerWidth };
    tmp13 = obj6;
  }
  items1[1] = tmp13;
  let onyxContainerStyles;
  if (tmp3 === ThemeTypes.ONYX) {
    if (!highestFullyRenderedScreenIndex(translateX[14])().isChatBesideChannelList) {
      onyxContainerStyles = tmp4.onyxContainerStyles;
    }
  }
  const obj7 = { style: items1, children: null };
  items1[2] = onyxContainerStyles;
  const obj8 = { freeze, children: null };
  const obj9 = { collapsable: false, style: absoluteFill.absoluteFill, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  let str = "box-only";
  if (isActive) {
    str = "auto";
  }
  obj9.pointerEvents = str;
  obj9.accessibilityElementsHidden = !isActive;
  obj9.importantForAccessibility = "no-hide-descendants";
  obj9.children = closure_15(tmp(translateX[19]), { guildId, channelId, showCreateThread, isNavigationScreen: null == containerWidth, frame, screenIndex: index });
  obj8.children = closure_15(closure_7, obj9);
  const items2 = [closure_15(tmp5(translateX[18]).Freeze, obj8), focusChatPressableComponent];
  obj7.children = items2;
  return closure_16(highestFullyRenderedScreenIndex(translateX[17]), obj7);
});
const __initData4 = { code: "function MainTabsChannelScreenStackTsx4(){const{translateX}=this.__closure;return translateX.get()===0;}" };
const __initData5 = { code: "function MainTabsChannelScreenStackTsx5(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}" };
let closure_24 = noop.memo(function ChannelScreen(transitionState) {
  transitionState = transitionState.transitionState;
  index = transitionState;
  const cleanup = transitionState.cleanup;
  ({ isActive, index } = transitionState);
  const highestFullyRenderedScreenIndex = transitionState.highestFullyRenderedScreenIndex;
  noop = undefined;
  translateX = undefined;
  let obj8;
  ({ guildId, channelId, showCreateThread, freeze, parentFreezeValue } = transitionState);
  let tmp = highestFullyRenderedScreenIndex;
  const tmp3 = highestFullyRenderedScreenIndex(translateX[13])();
  const tmp4 = closure_17();
  const tmp5 = index;
  const navigation = index(translateX[20]).useNavigation();
  noop = noop.useRef(false);
  const items = [cleanup, navigation];
  const callback = noop.useCallback((arg0) => {
    if (!arg0) {
      if (ref.current) {
        highestFullyRenderedScreenIndex();
      } else {
        tmp.current = true;
        enabled.goBack();
      }
    }
  }, items);
  const obj2 = { canDrag: null, onVisibilityChange: null, onDragStart: null, startShown: false };
  const obj = index(translateX[20]);
  obj2.canDrag = transitionState !== index(translateX[16]).TransitionStates.YEETED;
  obj2.onVisibilityChange = callback;
  obj2.onDragStart = index(translateX[22]).dismissKeyboard;
  const tmp8Result = highestFullyRenderedScreenIndex(translateX[21])(obj2);
  ({ isDragging, translateX } = tmp8Result);
  ({ gesture, panelGestureContext, movePanel, maxWidth } = tmp8Result);
  const tmp8 = highestFullyRenderedScreenIndex(translateX[21]);
  const enabled = highestFullyRenderedScreenIndex(translateX[10]).useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  const obj3 = highestFullyRenderedScreenIndex(translateX[10]);
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 10608377273080;
  fn.__initData = __initData;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      value = highestFullyRenderedScreenIndex.get();
      if (arg0) {
        if (value >= index) {
          const result = highestFullyRenderedScreenIndex.set(index - 1);
        }
      } else if (value < index) {
        const result1 = highestFullyRenderedScreenIndex.set(index);
      }
    }
  };
  fn2.__closure = { highestFullyRenderedScreenIndex, index };
  fn2.__workletHash = 10137919010401;
  fn2.__initData = __initData2;
  const animatedReaction = index(translateX[11]).useAnimatedReaction(fn, fn2);
  const obj4 = index(translateX[11]);
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
  fn3.__initData = __initData3;
  const derivedValue = index(translateX[11]).useDerivedValue(fn3);
  const disallowGesture = noop.useContext(highestFullyRenderedScreenIndex(translateX[23])).disallowGesture;
  const obj6 = index(translateX[11]);
  class C {
    constructor() {
      return 0 === translateX.get();
    }
  }
  C.__closure = { translateX };
  C.__workletHash = 1803281708382;
  C.__initData = __initData4;
  const fn4 = function y(arg0, arg1) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = 1 === translateX;
    }
    if (tmp) {
      const result = disallowGesture.set(arg0);
    }
  };
  fn4.__closure = { index, mainTabsDisallowGesture: disallowGesture };
  fn4.__workletHash = 4369586160197;
  fn4.__initData = __initData5;
  const animatedReaction1 = index(translateX[11]).useAnimatedReaction(C, fn4);
  obj8 = { cleanup, movePanel };
  noop.useRef(obj8);
  const effect = noop.useEffect(() => {
    closure_8.current = obj8;
  });
  const items1 = [transitionState];
  const effect1 = noop.useEffect(() => {
    const current = ref2.current;
    const movePanel = current.movePanel;
    if (index !== native.TransitionStates.MOUNTED) {
      if (index !== native.TransitionStates.ENTERED) {
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
  const obj7 = index(translateX[11]);
  const mainTabsChannelScreenStyles = index(translateX[15]).useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, derivedValue, parentFreezeValue);
  const obj10 = { gesture, children: null };
  const obj11 = { value: panelGestureContext, children: null };
  const items2 = [mainTabsChannelScreenStyles, ];
  let onyxContainerStyles;
  const obj9 = index(translateX[15]);
  if (tmp3 === ThemeTypes.ONYX) {
    if (!highestFullyRenderedScreenIndex(translateX[14])().isChatBesideChannelList) {
      onyxContainerStyles = tmp4.onyxContainerStyles;
    }
  }
  const obj12 = { style: items2, accessibilityElementsHidden: !isActive, importantForAccessibility: "no-hide-descendants", children: null };
  items2[1] = onyxContainerStyles;
  const tmp18 = highestFullyRenderedScreenIndex(translateX[17]);
  const tmp20 = !isActive;
  obj12.children = closure_15(tmp5(translateX[18]).Freeze, { freeze, children: closure_15(tmp(translateX[19]), { guildId, channelId, showCreateThread, isNavigationScreen: true, frame: null, screenIndex: index }) });
  obj11.children = closure_15(tmp18, obj12);
  obj10.children = closure_15(index(translateX[23]).MainTabsChannelScreenStackContext.Provider, obj11);
  return closure_15(index(translateX[24]).GestureDetector, obj10);
});
const __initData6 = { code: "function MainTabsChannelScreenStackTsx6(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
const __initData7 = { code: "function MainTabsChannelScreenStackTsx7(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default noop.memo(function MainTabsChannelScreenStack(screens) {
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  const highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  let memo;
  let first;
  let sharedValue;
  let tmp3 = isDragging(maxWidth.useState(translateX.get() === maxWidth), 2);
  closure_9 = tmp4;
  const tmp2 = screenStackActive(translateX[25])();
  class R {
    constructor() {
      return translateX.get() === maxWidth;
    }
  }
  R.__closure = { translateX, maxWidth };
  R.__workletHash = 9963940499904;
  R.__initData = __initData6;
  class D {
    constructor(arg0, arg1) {
      if (screens !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[11]);
        tmp3 = closure_9;
        tmp4 = obj.runOnJS(closure_9)(screens);
      }
      return;
    }
  }
  let obj2 = screens(translateX[11]);
  D.__closure = { runOnJS: screens(translateX[11]).runOnJS, setIsHidden: tmp3[1] };
  D.__workletHash = 10167608718442;
  D.__initData = __initData7;
  const animatedReaction = obj2.useAnimatedReaction(R, D);
  const items = [screens];
  memo = maxWidth.useMemo(() => {
    const atResult = screens.at(-1);
    let type;
    if (atResult != null) {
      type = atResult.type;
    }
    let channelId = null;
    if (type === useChannelScreensFromNavigation.ChannelScreenType.DEFAULT) {
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
    const allFrames = FramesStore.getAllFrames();
    const iter = allFrames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (nextResult.intent === constants4.INLINE) {
        let tmp7 = map1(tmp3.surface);
        let tmp9 = null != tmp7;
        if (tmp9) {
          tmp9 = tmp8 !== memo;
        }
        if (tmp9) {
          let obj = FramesNativeManagerDefault;
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
      tmp12 = first.type !== tmp5(tmp[26]).ChannelScreenType.DEFAULT;
    }
    shouldFreeze = tmp12;
  }
  let obj3 = { runOnJS: screens(translateX[11]).runOnJS, setIsHidden: tmp3[1] };
  sharedValue = screens(translateX[11]).useSharedValue(0);
  const items3 = [shouldFreeze, sharedValue];
  const effect2 = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(sharedValue.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items3);
  const items4 = [screens.length, focusChatPressableComponent, isDragging, translateX, firstScreenWidth, firstScreenFrame, maxWidth, sharedValue, screenStackActive, highestFullyRenderedScreenIndex];
  let channelId;
  const callback = obj.useCallback((arg0, arg1, transitionState, cleanup) => {
    const NumberResult = Number(arg0);
    if (0 === NumberResult) {
      const obj = { guildId: null, channelId: null, showCreateThread: null, focusChatPressableComponent: null, index: null, transitionState: null, cleanup: null, isDragging: null, translateX: null, isActive: null, freeze: null, containerWidth: null, frame: null, parentFreezeValue: null, maxWidth: null, highestFullyRenderedScreenIndex: null };
      ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = arg1);
      if (showCreateThread2 == null) {
        showCreateThread2 = false;
      }
      obj.showCreateThread = showCreateThread2;
      obj.focusChatPressableComponent = focusChatPressableComponent;
      obj.index = NumberResult;
      obj.transitionState = transitionState;
      obj.cleanup = cleanup;
      obj.isDragging = isDragging;
      obj.translateX = translateX;
      let tmp12 = screenStackActive;
      if (screenStackActive) {
        tmp12 = NumberResult === screens.length - 1;
      }
      obj.isActive = tmp12;
      obj.freeze = NumberResult < screens.length - 2;
      obj.containerWidth = firstScreenWidth;
      obj.frame = firstScreenFrame;
      obj.parentFreezeValue = sharedValue;
      obj.maxWidth = maxWidth;
      obj.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      let tmp20Result = __initData(closure_21, obj, arg0);
    } else {
      const obj3 = { guildId: null, channelId: null, showCreateThread: null, index: null, transitionState: null, parentFreezeValue: null, cleanup: null, isActive: null, freeze: null, highestFullyRenderedScreenIndex: null };
      ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = arg1);
      if (showCreateThread == null) {
        showCreateThread = false;
      }
      obj3.showCreateThread = showCreateThread;
      obj3.index = NumberResult;
      obj3.transitionState = transitionState;
      obj3.parentFreezeValue = sharedValue;
      obj3.cleanup = cleanup;
      obj3.isActive = NumberResult === screens.length - 1;
      obj3.freeze = NumberResult < screens.length - 2;
      obj3.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      tmp20Result = __initData(closure_24, obj3, arg0);
    }
    return tmp20Result;
  }, items4);
  if (first != null) {
    channelId = first.channelId;
  }
  if (channelId == null) {
    channelId = null;
  }
  maxWidth.useRef(channelId);
  maxWidth.useRef(null);
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
      type = first.type;
    }
    let tmp3 = null != type;
    if (tmp3) {
      tmp3 = ref2.current !== first.type;
    }
    if (tmp3) {
      ref2.current = first.type;
      if (first.channelId === ref.current) {
        let isChatLockedOpen = first.type !== useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
        if (!isChatLockedOpen) {
          isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
          const tmp7Result = useChatLayout;
        }
        if (!isChatLockedOpen) {
          const obj = { type: "TRY_ACK", location: null, channelId: null };
          const obj3 = { section: constants3.CHANNEL, object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH, objectType: constants.ACK_AUTOMATIC };
          obj.location = obj3;
          obj.channelId = first.channelId;
          DispatcherDefault.dispatch(obj);
        }
      } else {
        tmp6.current = first.channelId;
      }
    }
  }, items5);
  const tmp5Result = screens(translateX[11]);
  screens(translateX[29]).freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    const obj4 = { freeze: shouldFreeze, children: null };
    const obj5 = { collapsable: false, style: focusChatPressableComponent.absoluteFill, pointerEvents: "box-none", accessibilityElementsHidden: !screenStackActive, importantForAccessibility: "no-hide-descendants", children: null };
    const obj6 = { gradient: tmp2, children: null };
    const obj7 = { items: screens, renderItem: callback, getItemKey: getKey };
    obj6.children = closure_15(tmp5(tmp[16]).TransitionGroup, obj7);
    obj5.children = closure_15(tmp5(tmp[16]).ThemeContextProvider, obj6);
    obj4.children = closure_15(firstScreenWidth, obj5);
    let tmp23Result = closure_15(tmp5(tmp[18]).Freeze, obj4);
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