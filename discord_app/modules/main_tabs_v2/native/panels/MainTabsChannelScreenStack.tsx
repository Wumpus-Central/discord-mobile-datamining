// discord_app/modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import FramesNativeManagerDefault from "../../../frames/native/FramesNativeManager.tsx";
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import FramesStore from "../../../frames/FramesStore.tsx";

require = fn;
function getKey(index) {
  return String(index.index);
}
get_ActivityIndicator = fn(17);
({ NativeModules: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const MIDNIGHT_BORDER_WIDTH = fn(7864).MIDNIGHT_BORDER_WIDTH;
const Constants = fn(1074);
({ AnalyticsObjectTypes: closure_9, AnalyticsObjects: c10, AnalyticsSections: closure_11 } = Constants);
const FramesConstants = fn(9511);
({ FrameIntent: closure_12, getChannelIdForSurface: map1 } = FramesConstants);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4560);
let closure_17 = createStyles.createStyles({
  midnightContainerStyles: { marginTop: -MIDNIGHT_BORDER_WIDTH, marginLeft: -MIDNIGHT_BORDER_WIDTH },
});
const __initData = {
  code: "function MainTabsChannelScreenStackTsx1(){const{translateX}=this.__closure;return translateX.get()>0;}",
};
const __initData2 = {
  code: "function MainTabsChannelScreenStackTsx2(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}",
};
const __initData3 = {
  code: "function MainTabsChannelScreenStackTsx3(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}",
};
let closure_21 = noop.memo(function FirstChannelScreen(cleanup) {
  ({ index, isDragging, translateX, containerWidth, isActive, transitionState } = cleanup);
  index = transitionState;
  cleanup = cleanup.cleanup;
  const highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  ({ guildId, channelId, showCreateThread, frame, freeze, maxWidth, focusChatPressableComponent, parentFreezeValue } =
    cleanup);
  const tmp = highestFullyRenderedScreenIndex;
  const tmp3 = highestFullyRenderedScreenIndex(translateX[13])();
  let obj = highestFullyRenderedScreenIndex(translateX[10]);
  const enabled = obj.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  let obj1 = index(translateX[11]);
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
  fn2.__initData = __initData2;
  const animatedReaction = obj1.useAnimatedReaction(fn, fn2);
  let obj2 = index(translateX[12]);
  const unmountEffect = obj2.useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= index) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  });
  let obj3 = index(translateX[11]);
  const fn3 = function u() {
    let tmp = enabled;
    if (enabled) {
      tmp = highestFullyRenderedScreenIndex.get() > index;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 1648562234730;
  fn3.__initData = __initData3;
  const derivedValue = obj3.useDerivedValue(fn3);
  const tmp4 = closure_17();
  const tmp5 = index;
  const items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = index(translateX[15]).useMainTabsChannelScreenStyles(
    isDragging,
    translateX,
    maxWidth,
    derivedValue,
    parentFreezeValue,
  );
  const effect = noop.useEffect(() => {
    if (index === native.TransitionStates.YEETED) {
      highestFullyRenderedScreenIndex();
    }
  }, items);
  const items1 = [mainTabsChannelScreenStyles, ,];
  let tmp13 = null;
  const obj5 = index(translateX[15]);
  const tmp11 = closure_16;
  if (null != containerWidth) {
    obj = { width: containerWidth };
    tmp13 = obj;
  }
  items1[1] = tmp13;
  let prop;
  if (tmp3 === ThemeTypes.MIDNIGHT) {
    if (!highestFullyRenderedScreenIndex(translateX[14])().isChatBesideChannelList) {
      prop = tmp4.midnightContainerStyles;
    }
  }
  obj = { style: items1, children: null };
  items1[2] = prop;
  obj1 = { freeze, children: null };
  obj2 = {
    collapsable: false,
    style: absoluteFill.absoluteFill,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  let str = "box-only";
  if (isActive) {
    str = "auto";
  }
  obj2.pointerEvents = str;
  obj2.accessibilityElementsHidden = !isActive;
  obj2.importantForAccessibility = "no-hide-descendants";
  obj3 = {
    guildId,
    channelId,
    showCreateThread,
    isNavigationScreen: null == containerWidth,
    frame,
    screenIndex: index,
  };
  obj2.children = closure_15(tmp(translateX[19]), obj3);
  obj1.children = closure_15(closure_7, obj2);
  const items2 = [closure_15(tmp5(translateX[18]).Freeze, obj1), focusChatPressableComponent];
  obj.children = items2;
  return tmp11(highestFullyRenderedScreenIndex(translateX[17]), obj);
});
const __initData4 = {
  code: "function MainTabsChannelScreenStackTsx4(){const{translateX}=this.__closure;return translateX.get()===0;}",
};
const __initData5 = {
  code: "function MainTabsChannelScreenStackTsx5(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}",
};
let closure_24 = noop.memo(function ChannelScreen(transitionState) {
  transitionState = transitionState.transitionState;
  index = transitionState;
  const cleanup = transitionState.cleanup;
  ({ isActive, index } = transitionState);
  const highestFullyRenderedScreenIndex = transitionState.highestFullyRenderedScreenIndex;
  noop = undefined;
  translateX = undefined;
  ({ guildId, channelId, showCreateThread, freeze, parentFreezeValue } = transitionState);
  let tmp = highestFullyRenderedScreenIndex;
  const tmp3 = highestFullyRenderedScreenIndex(translateX[13])();
  let current = index(translateX[20]);
  const navigation = current.useNavigation();
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
  current = { canDrag: null, onVisibilityChange: null, onDragStart: null, startShown: false };
  const tmp4 = closure_17();
  const tmp5 = index;
  current.canDrag = transitionState !== index(translateX[16]).TransitionStates.YEETED;
  current.onVisibilityChange = callback;
  current.onDragStart = index(translateX[22]).dismissKeyboard;
  const tmp8Result = highestFullyRenderedScreenIndex(translateX[21])(current);
  ({ isDragging, translateX } = tmp8Result);
  ({ gesture, panelGestureContext, movePanel, maxWidth } = tmp8Result);
  let obj2 = highestFullyRenderedScreenIndex(translateX[10]);
  const enabled = obj2.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  let obj3 = index(translateX[11]);
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
  fn2.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  let obj4 = index(translateX[12]);
  const unmountEffect = obj4.useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= index) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  });
  const tmp8 = highestFullyRenderedScreenIndex(translateX[21]);
  const fn3 = function u() {
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
  const fn4 = function y() {
    return 0 === translateX.get();
  };
  fn4.__closure = { translateX };
  fn4.__workletHash = 1803281708382;
  fn4.__initData = __initData4;
  class C {
    constructor(arg0, arg1) {
      tmp = transitionState !== arg1;
      if (tmp) {
        tmp2 = translateX;
        num = 1;
        tmp = 1 === translateX;
      }
      if (tmp) {
        tmp3 = disallowGesture;
        result = disallowGesture.set(transitionState);
      }
      return;
    }
  }
  C.__closure = { index, mainTabsDisallowGesture: disallowGesture };
  C.__workletHash = 4369586160197;
  C.__initData = __initData5;
  const animatedReaction1 = index(translateX[11]).useAnimatedReaction(fn4, C);
  current = { cleanup, movePanel };
  noop.useRef(current);
  const effect = noop.useEffect(() => {
    closure_8.current = current;
  });
  const items1 = [transitionState];
  const effect1 = noop.useEffect(() => {
    current = ref2.current;
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
  const mainTabsChannelScreenStyles = index(translateX[15]).useMainTabsChannelScreenStyles(
    isDragging,
    translateX,
    maxWidth,
    derivedValue,
    parentFreezeValue,
  );
  const obj1 = { gesture, children: null };
  obj2 = { value: panelGestureContext, children: null };
  const items2 = [mainTabsChannelScreenStyles];
  let prop;
  const obj9 = index(translateX[15]);
  if (tmp3 === ThemeTypes.MIDNIGHT) {
    if (!highestFullyRenderedScreenIndex(translateX[14])().isChatBesideChannelList) {
      prop = tmp4.midnightContainerStyles;
    }
  }
  obj3 = {
    style: items2,
    accessibilityElementsHidden: !isActive,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  items2[1] = prop;
  obj4 = {
    freeze,
    children: tmp17(tmp(tmp2[19]), {
      guildId,
      channelId,
      showCreateThread,
      isNavigationScreen: true,
      frame: null,
      screenIndex: index,
    }),
  };
  obj3.children = closure_15(tmp5(translateX[18]).Freeze, obj4);
  obj2.children = closure_15(highestFullyRenderedScreenIndex(translateX[17]), obj3);
  obj1.children = closure_15(index(translateX[23]).MainTabsChannelScreenStackContext.Provider, obj2);
  return closure_15(index(translateX[24]).GestureDetector, obj1);
});
const __initData6 = {
  code: "function MainTabsChannelScreenStackTsx6(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}",
};
const __initData7 = {
  code: "function MainTabsChannelScreenStackTsx7(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}",
};
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
  let obj = maxWidth;
  let tmp3 = isDragging(maxWidth.useState(translateX.get() === maxWidth), 2);
  closure_9 = tmp4;
  let obj1 = screens(translateX[11]);
  class M {
    constructor() {
      return translateX.get() === maxWidth;
    }
  }
  M.__closure = { translateX, maxWidth };
  M.__workletHash = 9963940499904;
  M.__initData = __initData6;
  class A {
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
  obj = { runOnJS: screens(translateX[11]).runOnJS, setIsHidden: tmp4 };
  A.__closure = obj;
  A.__workletHash = 10167608718442;
  A.__initData = __initData7;
  const animatedReaction = obj1.useAnimatedReaction(M, A);
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
  let tmp5Result = tmp5(tmp[11]);
  sharedValue = tmp5Result.useSharedValue(0);
  const items3 = [shouldFreeze, sharedValue];
  const effect2 = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(sharedValue.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items3);
  const items4 = [
    screens.length,
    focusChatPressableComponent,
    isDragging,
    translateX,
    firstScreenWidth,
    firstScreenFrame,
    maxWidth,
    sharedValue,
    screenStackActive,
    highestFullyRenderedScreenIndex,
  ];
  let channelId;
  const callback = obj.useCallback((arg0, arg1, transitionState, cleanup) => {
    const NumberResult = Number(arg0);
    if (0 === NumberResult) {
      let obj = {
        guildId: null,
        channelId: null,
        showCreateThread: null,
        focusChatPressableComponent: null,
        index: null,
        transitionState: null,
        cleanup: null,
        isDragging: null,
        translateX: null,
        isActive: null,
        freeze: null,
        containerWidth: null,
        frame: null,
        parentFreezeValue: null,
        maxWidth: null,
        highestFullyRenderedScreenIndex: null,
      };
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
      obj = {
        guildId: null,
        channelId: null,
        showCreateThread: null,
        index: null,
        transitionState: null,
        parentFreezeValue: null,
        cleanup: null,
        isActive: null,
        freeze: null,
        highestFullyRenderedScreenIndex: null,
      };
      ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = arg1);
      if (showCreateThread == null) {
        showCreateThread = false;
      }
      obj.showCreateThread = showCreateThread;
      obj.index = NumberResult;
      obj.transitionState = transitionState;
      obj.parentFreezeValue = sharedValue;
      obj.cleanup = cleanup;
      obj.isActive = NumberResult === screens.length - 1;
      obj.freeze = NumberResult < screens.length - 2;
      obj.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      tmp20Result = __initData(closure_24, obj, arg0);
    }
    return tmp20Result;
  }, items4);
  if (first != null) {
    channelId = first.channelId;
  }
  if (channelId == null) {
    channelId = null;
  }
  obj.useRef(channelId);
  obj.useRef(null);
  let type;
  if (first != null) {
    type = first.type;
  }
  const items5 = [type];
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
        let isChatLockedOpen = tmp.type !== useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
        if (!isChatLockedOpen) {
          isChatLockedOpen = tmp7(4420).getChatLayout().isChatLockedOpen;
          const tmp7Result = tmp7(4420);
        }
        if (!isChatLockedOpen) {
          let obj = { type: "TRY_ACK", location: null, channelId: null };
          obj = {
            section: constants3.CHANNEL,
            object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH,
            objectType: constants.ACK_AUTOMATIC,
          };
          obj.location = obj;
          obj.channelId = tmp.channelId;
          DispatcherDefault.dispatch(obj);
        }
        tmp7 = require;
      } else {
        tmp6.current = tmp.channelId;
      }
    }
  }, items5);
  tmp5Result = tmp5(tmp[29]);
  tmp5Result.freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    obj = { freeze: shouldFreeze, children: null };
    obj1 = {
      collapsable: false,
      style: focusChatPressableComponent.absoluteFill,
      pointerEvents: "box-none",
      accessibilityElementsHidden: !screenStackActive,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    let obj2 = { gradient: tmp2, children: null };
    const obj3 = { items: screens, renderItem: callback, getItemKey: getKey };
    obj2.children = closure_15(tmp5(tmp[16]).TransitionGroup, obj3);
    obj1.children = closure_15(tmp5(tmp[16]).ThemeContextProvider, obj2);
    obj.children = closure_15(firstScreenWidth, obj1);
    let tmp23Result = tmp23(tmp5(tmp[18]).Freeze, obj);
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
