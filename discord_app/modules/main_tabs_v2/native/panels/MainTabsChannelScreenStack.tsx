// discord_app/modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import useChatLayout from "../../../chat/native/useChatLayout.tsx";
import ChatViewWidthContextDefault from "../../../chat/native/ChatViewWidthContext.tsx";
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation.tsx";
import StandaloneChannelScreenDefault from "../channel/StandaloneChannelScreen.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function EnabledChannelScreenNavigationTTIVisibility(children) {
  ({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible } = children);
  if (alwaysVisible === undefined) {
    alwaysVisible = false;
  }
  alwaysVisible = undefined;
  if (alwaysVisible === undefined) {
    alwaysVisible = false;
  }
  let tmp = index(
    isStackVisible.useState(() => {
      let tmp = isStackVisible;
      if (isStackVisible) {
        tmp = highestFullyRenderedScreenIndex.get() <= index;
      }
      if (tmp) {
        let tmp4 = alwaysVisible;
        if (!alwaysVisible) {
          tmp4 = translateX.get() < maxWidth;
        }
        tmp = tmp4;
      }
      return tmp;
    }),
    2,
  );
  closure_6 = tmp2;
  const fn = function b() {
    let tmp = isStackVisible;
    if (isStackVisible) {
      tmp = highestFullyRenderedScreenIndex.get() <= index;
    }
    if (tmp) {
      let tmp4 = alwaysVisible;
      if (!alwaysVisible) {
        tmp4 = translateX.get() < maxWidth;
      }
      tmp = tmp4;
    }
    return tmp;
  };
  fn.__closure = { isStackVisible, highestFullyRenderedScreenIndex, index, alwaysVisible, translateX, maxWidth };
  fn.__workletHash = 15384871148575;
  fn.__initData = __initData;
  class S {
    constructor(arg0, arg1) {
      if (children !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[9]);
        tmp3 = closure_6;
        tmp4 = obj.runOnJS(closure_6)(children);
      }
      return;
    }
  }
  let obj = translateX(highestFullyRenderedScreenIndex[9]);
  S.__closure = { runOnJS: translateX(highestFullyRenderedScreenIndex[9]).runOnJS, setIsVisible: tmp[1] };
  S.__workletHash = 9656458788554;
  S.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, S);
  return children.children(tmp[0]);
}
function ChannelScreenNavigationTTIVisibility(children) {
  if (obj.isNavigationTTIEnabled()) {
    const obj2 = {};
    const merged = Object.assign(children);
    let childrenResult = map1(EnabledChannelScreenNavigationTTIVisibility, obj2);
  } else {
    childrenResult = children.children(false);
  }
  return childrenResult;
}
function getKey(index) {
  return String(index.index);
}
get_ActivityIndicator = fn(17);
({ NativeModules: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const setVisibleChannelScreen = fn(18548).setVisibleChannelScreen;
const ONYX_BORDER_WIDTH = fn(9792).ONYX_BORDER_WIDTH;
const Constants = fn(1072);
({ AnalyticsObjectTypes: closure_9, AnalyticsObjects: c10, AnalyticsSections: closure_11 } = Constants);
let ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5009);
let closure_15 = createStyles.createStyles({
  onyxContainerStyles: { marginTop: -ONYX_BORDER_WIDTH, marginLeft: -ONYX_BORDER_WIDTH },
});
const __initData = {
  code: "function MainTabsChannelScreenStackTsx1(){const{isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth}=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);}",
};
const __initData2 = {
  code: "function MainTabsChannelScreenStackTsx2(visible,wasVisible){const{runOnJS,setIsVisible}=this.__closure;if(visible===wasVisible)return;runOnJS(setIsVisible)(visible);}",
};
const __initData3 = {
  code: "function MainTabsChannelScreenStackTsx3(){const{translateX}=this.__closure;return translateX.get()>0;}",
};
const __initData4 = {
  code: "function MainTabsChannelScreenStackTsx4(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}",
};
const __initData5 = {
  code: "function MainTabsChannelScreenStackTsx5(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}",
};
let closure_23 = noop.memo(function FirstChannelScreen(isActive) {
  ({
    guildId: index,
    channelId: highestFullyRenderedScreenIndex,
    showCreateThread: translateX,
    frame: enabled,
    index,
  } = isActive);
  ({ isDragging, translateX, containerWidth } = isActive);
  isActive = isActive.isActive;
  ({ maxWidth, transitionState } = isActive);
  const cleanup = isActive.cleanup;
  highestFullyRenderedScreenIndex = isActive.highestFullyRenderedScreenIndex;
  ({ freeze, isNavigationTTIStackVisible, focusChatPressableComponent, parentFreezeValue } = isActive);
  const tmp2 = highestFullyRenderedScreenIndex(translateX[13])();
  const width = highestFullyRenderedScreenIndex(translateX[15])().width;
  const tmp3 = closure_15();
  enabled = highestFullyRenderedScreenIndex(translateX[11]).useConfig({
    location: "MainTabsChannelScreenStack",
  }).enabled;
  let obj = highestFullyRenderedScreenIndex(translateX[11]);
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 9746145547258;
  fn.__initData = __initData3;
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
  fn2.__workletHash = 4785713026663;
  fn2.__initData = __initData4;
  const animatedReaction = index(translateX[9]).useAnimatedReaction(fn, fn2);
  const obj2 = index(translateX[9]);
  const unmountEffect = index(translateX[12]).useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= index) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  });
  const obj3 = index(translateX[12]);
  const fn3 = function u() {
    let tmp = enabled;
    if (enabled) {
      tmp = highestFullyRenderedScreenIndex.get() > index;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 13408221386604;
  fn3.__initData = __initData5;
  const derivedValue = index(translateX[9]).useDerivedValue(fn3);
  const obj4 = index(translateX[9]);
  const items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = index(translateX[16]).useMainTabsChannelScreenStyles(
    isDragging,
    translateX,
    maxWidth,
    derivedValue,
    parentFreezeValue,
  );
  const effect = index.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      cleanup();
    }
  }, items);
  const items1 = [mainTabsChannelScreenStyles, ,];
  let tmp12 = null;
  const obj5 = index(translateX[16]);
  if (null != containerWidth) {
    const obj6 = { width: containerWidth };
    tmp12 = obj6;
  }
  items1[1] = tmp12;
  let onyxContainerStyles;
  if (tmp2 === ThemeTypes.ONYX) {
    if (!highestFullyRenderedScreenIndex(translateX[14])().isChatBesideChannelList) {
      onyxContainerStyles = tmp3.onyxContainerStyles;
    }
  }
  const obj7 = { style: items1, children: null };
  items1[2] = onyxContainerStyles;
  const obj8 = { freeze, children: null };
  const obj9 = {
    collapsable: false,
    style: isActive.absoluteFill,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  let str = "box-only";
  if (isActive) {
    str = "auto";
  }
  obj9.pointerEvents = str;
  obj9.accessibilityElementsHidden = !isActive;
  obj9.importantForAccessibility = "no-hide-descendants";
  obj9.children = closure_13(ChannelScreenNavigationTTIVisibility, {
    translateX,
    maxWidth,
    highestFullyRenderedScreenIndex,
    index,
    isStackVisible: isNavigationTTIStackVisible,
    alwaysVisible: null != containerWidth,
    children(isNavigationTTIVisible) {
      let tmp5 = containerWidth;
      if (containerWidth == null) {
        tmp5 = width;
      }
      const obj = {
        value: tmp5,
        children: map1(StandaloneChannelScreenDefault, {
          guildId: index,
          channelId: highestFullyRenderedScreenIndex,
          isActive,
          isNavigationTTIVisible,
          showCreateThread: translateX,
          isNavigationScreen: null == containerWidth,
          frame: enabled,
          screenIndex: index,
        }),
      };
      return map1(ChatViewWidthContextDefault.Provider, obj);
    },
  });
  obj8.children = closure_13(transitionState, obj9);
  const items2 = [closure_13(index(translateX[19]).Freeze, obj8), focusChatPressableComponent];
  obj7.children = items2;
  return closure_14(highestFullyRenderedScreenIndex(translateX[18]), obj7);
});
const __initData6 = {
  code: "function MainTabsChannelScreenStackTsx6(){const{translateX}=this.__closure;return translateX.get()===0;}",
};
const __initData7 = {
  code: "function MainTabsChannelScreenStackTsx7(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}",
};
let closure_26 = noop.memo(function ChannelScreen(cleanup) {
  ({
    guildId: index,
    channelId: highestFullyRenderedScreenIndex,
    showCreateThread: translateX,
    transitionState,
  } = cleanup);
  cleanup = cleanup.cleanup;
  const isActive = cleanup.isActive;
  index = cleanup.index;
  highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  translateX = undefined;
  let obj8;
  ThemeTypes = undefined;
  ({ isNavigationTTIStackVisible, freeze, parentFreezeValue } = cleanup);
  let tmp = translateX;
  const tmp2 = highestFullyRenderedScreenIndex(translateX[13])();
  const tmp3 = closure_15();
  const tmp4 = index;
  const navigation = index(translateX[22]).useNavigation();
  cleanup.useRef(false);
  const items = [cleanup, navigation];
  const callback = cleanup.useCallback((arg0) => {
    if (!arg0) {
      if (ref.current) {
        cleanup();
      } else {
        tmp.current = true;
        navigation.goBack();
      }
    }
  }, items);
  const obj2 = { canDrag: null, onVisibilityChange: null, onDragStart: null, startShown: false };
  const obj = index(translateX[22]);
  obj2.canDrag = transitionState !== index(translateX[17]).TransitionStates.YEETED;
  obj2.onVisibilityChange = callback;
  obj2.onDragStart = index(translateX[24]).dismissKeyboard;
  const tmp7Result = highestFullyRenderedScreenIndex(translateX[23])(obj2);
  ({ isDragging, translateX } = tmp7Result);
  const maxWidth = tmp7Result.maxWidth;
  ({ gesture, panelGestureContext, movePanel } = tmp7Result);
  const tmp7 = highestFullyRenderedScreenIndex(translateX[23]);
  const enabled = highestFullyRenderedScreenIndex(translateX[11]).useConfig({
    location: "MainTabsChannelScreenStack",
  }).enabled;
  const obj3 = highestFullyRenderedScreenIndex(translateX[11]);
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 9746145547258;
  fn.__initData = __initData3;
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
  fn2.__workletHash = 4785713026663;
  fn2.__initData = __initData4;
  const animatedReaction = index(translateX[9]).useAnimatedReaction(fn, fn2);
  const obj4 = index(translateX[9]);
  const unmountEffect = index(translateX[12]).useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= index) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  });
  const obj5 = index(translateX[12]);
  const fn3 = function u() {
    let tmp = enabled;
    if (enabled) {
      tmp = highestFullyRenderedScreenIndex.get() > index;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 13408221386604;
  fn3.__initData = __initData5;
  const derivedValue = index(translateX[9]).useDerivedValue(fn3);
  const disallowGesture = cleanup.useContext(highestFullyRenderedScreenIndex(translateX[25])).disallowGesture;
  const obj6 = index(translateX[9]);
  class I {
    constructor() {
      return 0 === translateX.get();
    }
  }
  I.__closure = { translateX };
  I.__workletHash = 16117851266396;
  I.__initData = __initData6;
  const fn4 = function _(arg0, arg1) {
    let tmp = arg0 !== arg1;
    if (tmp) {
      tmp = 1 === index;
    }
    if (tmp) {
      const result = disallowGesture.set(arg0);
    }
  };
  fn4.__closure = { index, mainTabsDisallowGesture: disallowGesture };
  fn4.__workletHash = 959541115719;
  fn4.__initData = __initData7;
  const animatedReaction1 = index(translateX[9]).useAnimatedReaction(I, fn4);
  obj8 = { cleanup, movePanel };
  ThemeTypes = cleanup.useRef(obj8);
  const effect = cleanup.useEffect(() => {
    closure_12.current = obj8;
  });
  const items1 = [transitionState];
  const effect1 = cleanup.useEffect(() => {
    const current = ref2.current;
    const movePanel = current.movePanel;
    if (enabled !== native.TransitionStates.MOUNTED) {
      if (enabled !== native.TransitionStates.ENTERED) {
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
  const obj7 = index(translateX[9]);
  const mainTabsChannelScreenStyles = index(translateX[16]).useMainTabsChannelScreenStyles(
    isDragging,
    translateX,
    maxWidth,
    derivedValue,
    parentFreezeValue,
  );
  const obj10 = { gesture, children: null };
  const obj11 = { value: panelGestureContext, children: null };
  const items2 = [mainTabsChannelScreenStyles];
  let onyxContainerStyles;
  const obj9 = index(translateX[16]);
  if (tmp2 === ThemeTypes.ONYX) {
    if (!highestFullyRenderedScreenIndex(translateX[14])().isChatBesideChannelList) {
      onyxContainerStyles = tmp3.onyxContainerStyles;
    }
  }
  const obj12 = {
    style: items2,
    accessibilityElementsHidden: !isActive,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  items2[1] = onyxContainerStyles;
  const obj13 = {
    freeze,
    children: closure_13(ChannelScreenNavigationTTIVisibility, {
      translateX,
      maxWidth,
      highestFullyRenderedScreenIndex,
      index,
      isStackVisible: isNavigationTTIStackVisible,
      children(isNavigationTTIVisible) {
        return map1(StandaloneChannelScreenDefault, {
          guildId: index,
          channelId: highestFullyRenderedScreenIndex,
          isActive,
          isNavigationTTIVisible,
          showCreateThread: translateX,
          isNavigationScreen: true,
          frame: null,
          screenIndex: index,
        });
      },
    }),
  };
  obj12.children = closure_13(tmp4(tmp[19]).Freeze, obj13);
  obj11.children = closure_13(highestFullyRenderedScreenIndex(translateX[18]), obj12);
  obj10.children = closure_13(index(translateX[25]).MainTabsChannelScreenStackContext.Provider, obj11);
  return closure_13(index(translateX[26]).GestureDetector, obj10);
});
const __initData8 = {
  code: "function MainTabsChannelScreenStackTsx8(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}",
};
const __initData9 = {
  code: "function MainTabsChannelScreenStackTsx9(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default noop.memo(function MainTabsChannelScreenStack(screens) {
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  const screenStackVisible = screens.screenStackVisible;
  const navigationTTIStackVisible = screens.navigationTTIStackVisible;
  const translateX = screens.translateX;
  const isDragging = screens.isDragging;
  const maxWidth = screens.maxWidth;
  const highestFullyRenderedScreenIndex = screens.highestFullyRenderedScreenIndex;
  ({ shouldFreeze, focusChatPressableComponent } = screens);
  const firstScreenWidth = screens.firstScreenWidth;
  const firstScreenFrame = screens.firstScreenFrame;
  let memo;
  closure_13 = undefined;
  let first;
  let sharedValue;
  let tmp3 = navigationTTIStackVisible(translateX.useState(translateX.get() === maxWidth), 2);
  closure_11 = tmp4;
  let tmp2 = screenStackActive(screenStackVisible[27])();
  class R {
    constructor() {
      return translateX.get() === maxWidth;
    }
  }
  R.__closure = { translateX, maxWidth };
  R.__workletHash = 8590655221454;
  R.__initData = __initData8;
  class E {
    constructor(arg0, arg1) {
      if (screens !== arg1) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[9]);
        tmp3 = closure_11;
        tmp4 = obj.runOnJS(closure_11)(screens);
      }
      return;
    }
  }
  let obj2 = screens(screenStackVisible[9]);
  E.__closure = { runOnJS: screens(screenStackVisible[9]).runOnJS, setIsHidden: tmp3[1] };
  E.__workletHash = 2291224972388;
  E.__initData = __initData9;
  const animatedReaction = obj2.useAnimatedReaction(R, E);
  const items = [screens];
  memo = translateX.useMemo(() => {
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
  const items1 = [screenStackVisible, memo];
  const effect = translateX.useEffect(() => {
    let tmp2 = null;
    if (screenStackVisible) {
      tmp2 = memo;
    }
    setVisibleChannelScreen(tmp2);
  }, items1);
  const effect1 = translateX.useEffect(() => () => focusChatPressableComponent(null), []);
  const items2 = [memo];
  const effect2 = translateX.useEffect(() => {
    const MediaPlayerManager = isDragging.MediaPlayerManager;
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
  }, items2);
  const tmp11 = screenStackActive(screenStackVisible[29])();
  closure_13 = tmp11;
  first = screens[0];
  if (shouldFreeze) {
    shouldFreeze = tmp3[0];
  }
  if (shouldFreeze) {
    let tmp14 = null == first;
    if (!tmp14) {
      tmp14 = first.type !== tmp5(tmp[28]).ChannelScreenType.DEFAULT;
    }
    shouldFreeze = tmp14;
  }
  if (shouldFreeze) {
    shouldFreeze = !screens.some((channelId) => closure_13.includes(channelId.channelId));
  }
  let obj3 = { runOnJS: screens(screenStackVisible[9]).runOnJS, setIsHidden: tmp3[1] };
  sharedValue = screens(screenStackVisible[9]).useSharedValue(0);
  const items3 = [shouldFreeze, sharedValue];
  const effect3 = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(sharedValue.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items3);
  const items4 = [
    screens.length,
    tmp11,
    focusChatPressableComponent,
    isDragging,
    translateX,
    firstScreenWidth,
    firstScreenFrame,
    maxWidth,
    sharedValue,
    screenStackActive,
    navigationTTIStackVisible,
    highestFullyRenderedScreenIndex,
  ];
  let channelId;
  const callback = obj.useCallback((arg0, channelId, transitionState, cleanup) => {
    const NumberResult = Number(arg0);
    if (0 === NumberResult) {
      const obj = {
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
        isNavigationTTIStackVisible: null,
        freeze: null,
        containerWidth: null,
        frame: null,
        parentFreezeValue: null,
        maxWidth: null,
        highestFullyRenderedScreenIndex: null,
      };
      ({ guildId: obj.guildId, channelId: obj.channelId, showCreateThread: showCreateThread2 } = channelId);
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
      let tmp15 = screenStackActive;
      if (screenStackActive) {
        tmp15 = NumberResult === screens.length - 1;
      }
      obj.isActive = tmp15;
      obj.isNavigationTTIStackVisible = navigationTTIStackVisible;
      let tmp19 = NumberResult < screens.length - 2;
      if (tmp19) {
        tmp19 = !closure_13.includes(channelId.channelId);
      }
      obj.freeze = tmp19;
      obj.containerWidth = firstScreenWidth;
      obj.frame = firstScreenFrame;
      obj.parentFreezeValue = sharedValue;
      obj.maxWidth = maxWidth;
      obj.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      let tmp26Result = map1(closure_23, obj, arg0);
    } else {
      const obj3 = {
        guildId: null,
        channelId: null,
        showCreateThread: null,
        index: null,
        transitionState: null,
        parentFreezeValue: null,
        cleanup: null,
        isActive: null,
        isNavigationTTIStackVisible: null,
        freeze: null,
        highestFullyRenderedScreenIndex: null,
      };
      ({ guildId: obj2.guildId, channelId: obj2.channelId, showCreateThread } = channelId);
      if (showCreateThread == null) {
        showCreateThread = false;
      }
      obj3.showCreateThread = showCreateThread;
      obj3.index = NumberResult;
      obj3.transitionState = transitionState;
      obj3.parentFreezeValue = sharedValue;
      obj3.cleanup = cleanup;
      obj3.isActive = NumberResult === screens.length - 1;
      obj3.isNavigationTTIStackVisible = navigationTTIStackVisible;
      let tmp5 = NumberResult < screens.length - 2;
      if (tmp5) {
        tmp5 = !closure_13.includes(channelId.channelId);
      }
      obj3.freeze = tmp5;
      obj3.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      tmp26Result = map1(closure_26, obj3, arg0);
    }
    return tmp26Result;
  }, items4);
  if (first != null) {
    channelId = first.channelId;
  }
  if (channelId == null) {
    channelId = null;
  }
  translateX.useRef(channelId);
  translateX.useRef(null);
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
  const effect4 = obj.useEffect(() => {
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
          const obj3 = {
            section: constants3.CHANNEL,
            object: constants2.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH,
            objectType: constants.ACK_AUTOMATIC,
          };
          obj.location = obj3;
          obj.channelId = first.channelId;
          DispatcherDefault.dispatch(obj);
        }
      } else {
        tmp6.current = first.channelId;
      }
    }
  }, items5);
  const tmp5Result = screens(screenStackVisible[9]);
  screens(screenStackVisible[31]).freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    const obj4 = { freeze: shouldFreeze, children: null };
    const obj5 = {
      collapsable: false,
      style: maxWidth.absoluteFill,
      pointerEvents: "box-none",
      accessibilityElementsHidden: !screenStackActive,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    const obj6 = { gradient: tmp2, children: null };
    const obj7 = { items: screens, renderItem: callback, getItemKey: getKey };
    obj6.children = closure_13(tmp5(tmp[17]).TransitionGroup, obj7);
    obj5.children = closure_13(tmp5(tmp[17]).ThemeContextProvider, obj6);
    obj4.children = closure_13(highestFullyRenderedScreenIndex, obj5);
    let tmp25Result = tmp25(tmp5(tmp[19]).Freeze, obj4);
    const tmp28 = !screenStackActive;
  } else {
    let showCreateThread;
    if (first != null) {
      showCreateThread = first.showCreateThread;
    }
    tmp25Result = null;
  }
  return tmp25Result;
});
