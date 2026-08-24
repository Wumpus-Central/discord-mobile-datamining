// discord_app/modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { MIDNIGHT_BORDER_WIDTH } from "../shared_components/MainTabsV2Constants.tsx";
import ME from "../../../../Constants.tsx";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function getKey(index) {
  return String(index.index);
}
let c4 = importAllResult;
({ NativeModules: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ AnalyticsObjectTypes: closure_8, AnalyticsObjects: c9, AnalyticsSections: c10 } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = createCacheKey.createStyles({ midnightContainerStyles: { marginTop: -MIDNIGHT_BORDER_WIDTH, marginLeft: -MIDNIGHT_BORDER_WIDTH } });
let closure_15 = { code: "function MainTabsChannelScreenStackTsx1(){const{translateX}=this.__closure;return translateX.get()>0;}" };
let closure_16 = { code: "function MainTabsChannelScreenStackTsx2(isVisibleBeneath,wasVisibleBeneath){const{highestFullyRenderedScreenIndex,index}=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}}" };
let closure_17 = { code: "function MainTabsChannelScreenStackTsx3(){const{enabled,highestFullyRenderedScreenIndex,index}=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;}" };
let closure_18 = importAllResult.memo(function FirstChannelScreen(cleanup) {
  ({ frame, index, isDragging, translateX, containerWidth, isActive, transitionState } = cleanup);
  index = transitionState;
  cleanup = cleanup.cleanup;
  let highestFullyRenderedScreenIndex = cleanup;
  highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  ({ guildId, channelId, showCreateThread, freeze, maxWidth, focusChatPressableComponent, parentFreezeValue } = cleanup);
  const tmp = highestFullyRenderedScreenIndex;
  const tmp3 = highestFullyRenderedScreenIndex(translateX[11])();
  let obj = index(translateX[12]);
  obj1 = index(translateX[13]);
  let enabled;
  const orientation = obj1.useOrientation();
  let obj2 = highestFullyRenderedScreenIndex(translateX[8]);
  enabled = obj2.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  let obj3 = index(translateX[9]);
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 10608377273080;
  fn.__initData = closure_15;
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
  fn2.__initData = closure_16;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  const tmp4 = callback();
  const unmountEffect = index(translateX[10]).useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= index) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  });
  const obj5 = index(translateX[10]);
  const fn3 = function o() {
    let tmp = enabled;
    if (enabled) {
      tmp = highestFullyRenderedScreenIndex.get() > index;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 1648562234730;
  fn3.__initData = closure_17;
  const derivedValue = index(translateX[9]).useDerivedValue(fn3);
  const obj6 = index(translateX[9]);
  const items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = index(translateX[14]).useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, derivedValue, parentFreezeValue);
  const effect = importAllResult.useEffect(() => {
    if (index === index(translateX[15]).TransitionStates.YEETED) {
      highestFullyRenderedScreenIndex();
    }
  }, items);
  const items1 = [mainTabsChannelScreenStyles, , ];
  let tmp14 = null;
  const obj7 = index(translateX[14]);
  const tmp12 = closure_13;
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
  obj2[5] = closure_12(tmp(translateX[18]), obj3);
  obj1[1] = closure_12(closure_7, obj2);
  const items2 = [closure_12(index(translateX[17]).Freeze, obj1), focusChatPressableComponent];
  obj[1] = items2;
  return tmp12(highestFullyRenderedScreenIndex(translateX[16]), obj);
});
let closure_19 = { code: "function MainTabsChannelScreenStackTsx4(){const{translateX}=this.__closure;return translateX.get()===0;}" };
let closure_20 = { code: "function MainTabsChannelScreenStackTsx5(isFullyOpen,prev){const{index,mainTabsDisallowGesture}=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);}" };
let closure_21 = importAllResult.memo(function ChannelScreen(transitionState) {
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
  const tmp3 = highestFullyRenderedScreenIndex(translateX[11])();
  obj = index(translateX[12]);
  obj1 = index(translateX[13]);
  const orientation = obj1.useOrientation();
  let obj2 = index(translateX[19]);
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
  obj[0] = transitionState !== index(translateX[15]).TransitionStates.YEETED;
  obj[1] = callback;
  obj[2] = index(translateX[21]).dismissKeyboard;
  const tmp9Result = highestFullyRenderedScreenIndex(translateX[20])(obj);
  ({ isDragging, translateX } = tmp9Result);
  enabled = undefined;
  ({ gesture, panelGestureContext, movePanel, maxWidth } = tmp9Result);
  let obj4 = highestFullyRenderedScreenIndex(translateX[8]);
  enabled = obj4.useConfig({ location: "MainTabsChannelScreenStack" }).enabled;
  const tmp9 = highestFullyRenderedScreenIndex(translateX[20]);
  const fn = function c() {
    return translateX.get() > 0;
  };
  fn.__closure = { translateX };
  fn.__workletHash = 10608377273080;
  fn.__initData = closure_15;
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
  fn2.__initData = closure_16;
  const animatedReaction = index(translateX[9]).useAnimatedReaction(fn, fn2);
  const obj6 = index(translateX[9]);
  const unmountEffect = index(translateX[10]).useUnmountEffect(() => {
    if (highestFullyRenderedScreenIndex.get() >= index) {
      const result = highestFullyRenderedScreenIndex.set(tmp - 1);
    }
  });
  const obj7 = index(translateX[10]);
  const fn3 = function o() {
    let tmp = enabled;
    if (enabled) {
      tmp = highestFullyRenderedScreenIndex.get() > index;
    }
    return tmp;
  };
  fn3.__closure = { enabled, highestFullyRenderedScreenIndex, index };
  fn3.__workletHash = 1648562234730;
  fn3.__initData = closure_17;
  const derivedValue = index(translateX[9]).useDerivedValue(fn3);
  disallowGesture = importAllResult.useContext(highestFullyRenderedScreenIndex(translateX[22])).disallowGesture;
  const obj8 = index(translateX[9]);
  class I {
    constructor() {
      return 0 === translateX.get();
    }
  }
  I.__closure = { translateX };
  I.__workletHash = 1803281708382;
  I.__initData = closure_19;
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
  fn4.__initData = closure_20;
  const animatedReaction1 = index(translateX[9]).useAnimatedReaction(I, fn4);
  obj = { cleanup, movePanel };
  closure_8 = importAllResult.useRef(obj);
  const effect = importAllResult.useEffect(() => {
    closure_8.current = obj;
  });
  const items1 = [transitionState];
  const effect1 = importAllResult.useEffect(() => {
    const current = ref2.current;
    const movePanel = current.movePanel;
    if (index !== index(translateX[15]).TransitionStates.MOUNTED) {
      if (index !== index(translateX[15]).TransitionStates.ENTERED) {
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
  const obj9 = index(translateX[9]);
  const mainTabsChannelScreenStyles = index(translateX[14]).useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, derivedValue, parentFreezeValue);
  obj1 = { gesture, children: null };
  obj2 = { value: panelGestureContext, children: null };
  const items2 = [mainTabsChannelScreenStyles, ];
  let prop;
  const obj11 = index(translateX[14]);
  if (tmp3 === ThemeTypes.MIDNIGHT) {
    if (!obj.useMobileVisualRefreshConfig({ location: "MainTabsChannelScreenStack" }).chatInputFloating) {
      prop = tmp4.midnightContainerStyles;
    }
  }
  const obj3 = { style: items2, accessibilityElementsHidden: !isActive, importantForAccessibility: "no-hide-descendants", children: null };
  items2[1] = prop;
  obj4 = { freeze, children: tmp18(tmp(tmp2[18]), { guildId, channelId, showCreateThread, isNavigationScreen: true, frame: null, screenIndex: index }) };
  obj3[3] = closure_12(index(translateX[17]).Freeze, obj4);
  obj2[1] = closure_12(highestFullyRenderedScreenIndex(translateX[16]), obj3);
  obj1[1] = closure_12(index(translateX[22]).MainTabsChannelScreenStackContext.Provider, obj2);
  return closure_12(index(translateX[23]).GestureDetector, obj1);
});
let closure_23 = { code: "function MainTabsChannelScreenStackTsx6(){const{translateX,maxWidth}=this.__closure;return translateX.get()===maxWidth;}" };
let closure_24 = { code: "function MainTabsChannelScreenStackTsx7(value,prev){const{runOnJS,setIsHidden}=this.__closure;if(value===prev)return;runOnJS(setIsHidden)(value);}" };
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
  let first;
  let sharedValue;
  closure_12 = undefined;
  closure_13 = undefined;
  let obj = maxWidth;
  let tmp3 = isDragging(maxWidth.useState(translateX.get() === maxWidth), 2);
  closure_9 = tmp4;
  obj1 = screens(translateX[9]);
  class D {
    constructor() {
      return translateX.get() === maxWidth;
    }
  }
  D.__closure = { translateX, maxWidth };
  D.__workletHash = 9963940499904;
  D.__initData = closure_23;
  class E {
    constructor(arg0, arg1) {
      if (screens !== arg1) {
        tmp = screens;
        tmp2 = translateX;
        obj = screens(translateX[9]);
        tmp3 = closure_9;
        tmp4 = obj.runOnJS(closure_9)(screens);
      }
      return;
    }
  }
  obj = { runOnJS: screens(translateX[9]).runOnJS, setIsHidden: tmp4 };
  E.__closure = obj;
  E.__workletHash = 10167608718442;
  E.__initData = closure_24;
  const animatedReaction = obj1.useAnimatedReaction(D, E);
  const items = [screens];
  const items1 = [
    maxWidth.useMemo(() => {
      const atResult = screens.at(-1);
      let type;
      if (atResult != null) {
        type = atResult.type;
      }
      let channelId = null;
      if (type === screens(translateX[25]).ChannelScreenType.DEFAULT) {
        channelId = atResult.channelId;
      }
      return channelId;
    }, items)
  ];
  const effect = maxWidth.useEffect(() => {
    const MediaPlayerManager = highestFullyRenderedScreenIndex.MediaPlayerManager;
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
  }, items1);
  first = screens[0];
  if (shouldFreeze) {
    shouldFreeze = tmp3[0];
  }
  if (shouldFreeze) {
    let tmp10 = null == first;
    if (!tmp10) {
      tmp10 = first.type !== tmp5(tmp[25]).ChannelScreenType.DEFAULT;
    }
    shouldFreeze = tmp10;
  }
  let tmp5Result = tmp5(tmp[9]);
  sharedValue = tmp5Result.useSharedValue(0);
  const items2 = [shouldFreeze, sharedValue];
  const effect1 = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = store.set(store.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items2);
  const items3 = [screens.length, focusChatPressableComponent, isDragging, translateX, firstScreenWidth, firstScreenFrame, maxWidth, sharedValue, screenStackActive, highestFullyRenderedScreenIndex];
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
      let tmp20Result = closure_12(closure_1_18, obj, arg0);
      const tmp6 = closure_12;
      const tmp7 = closure_1_18;
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
      tmp20Result = closure_12(closure_1_21, obj, arg0);
      const tmp20 = closure_12;
      const tmp21 = closure_1_21;
    }
    return tmp20Result;
  }, items3);
  if (first != null) {
    channelId = first.channelId;
  }
  if (channelId == null) {
    channelId = null;
  }
  closure_12 = obj.useRef(channelId);
  closure_13 = obj.useRef(null);
  let type;
  if (first != null) {
    type = first.type;
  }
  const items4 = [type, ];
  let channelId1;
  if (first != null) {
    channelId1 = first.channelId;
  }
  items4[1] = channelId1;
  const effect2 = obj.useEffect(() => {
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
        let isChatLockedOpen = tmp.type !== screens(translateX[25]).ChannelScreenType.DEFAULT;
        if (!isChatLockedOpen) {
          isChatLockedOpen = tmp7(tmp8[26]).getChatLayout().isChatLockedOpen;
          const tmp7Result = tmp7(tmp8[26]);
        }
        if (!isChatLockedOpen) {
          let obj = { type: "TRY_ACK", location: null, channelId: null };
          obj = { section: null, object: null, objectType: null };
          obj[0] = first.CHANNEL;
          obj[1] = constants.ACK_CHANNEL_SELECT_SAME_CHANNEL_DISPATCH;
          obj[2] = firstScreenFrame.ACK_AUTOMATIC;
          obj[1] = obj;
          obj[2] = tmp.channelId;
          screenStackActive(tmp8[27]).dispatch(obj);
          const obj2 = screenStackActive(tmp8[27]);
        }
        tmp7 = screens;
      } else {
        tmp6.current = tmp.channelId;
      }
    }
  }, items4);
  tmp5Result = tmp5(tmp[28]);
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
    obj2[1] = closure_12(tmp5(tmp[15]).TransitionGroup, obj3);
    obj1[5] = closure_12(tmp5(tmp[29]).ThemeContextProvider, obj2);
    obj[1] = closure_12(firstScreenWidth, obj1);
    let tmp21Result = tmp21(tmp5(tmp[17]).Freeze, obj);
    const tmp22 = firstScreenWidth;
    const tmp24 = !screenStackActive;
  } else {
    let showCreateThread;
    if (first != null) {
      showCreateThread = first.showCreateThread;
    }
    tmp21Result = null;
  }
  return tmp21Result;
});
let obj = { marginTop: -MIDNIGHT_BORDER_WIDTH, marginLeft: -MIDNIGHT_BORDER_WIDTH };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default memoResult;