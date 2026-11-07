// discord_app/modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import useChatLayout from "../../../chat/native/useChatLayout.tsx";
import useBaseAppContainerDimensionsDefault from "../../../screen/native/useBaseAppContainerDimensions.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Suspender from "../../../../../_runtime/06121_Suspender.js";
import MainTabsNavigatorPanelContextDefault from "MainTabsNavigatorPanelContext.tsx";
import ChatViewWidthContextDefault from "../../../chat/native/ChatViewWidthContext.tsx";
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation.tsx";
import MainTabsBackgroundChat from "MainTabsBackgroundChat.tsx";
import useMainTabsPanelsGestureDefault from "useMainTabsPanelsGesture.tsx";
import HideCoveredChannelsExperimentDefault from "../HideCoveredChannelsExperiment.tsx";
import useMainTabsChannelScreenStyles from "useMainTabsChannelScreenStyles.tsx";
import ChannelScreenFrameContainerDefault from "ChannelScreenFrameContainer.tsx";
import StandaloneChannelScreenDefault from "../channel/StandaloneChannelScreen.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const _modDef1652 = _mod1652;
const useChatLayoutDefault = useChatLayout;

require = fn;
function EnabledChannelScreenNavigationTTIVisibility(children) {
  ({ translateX, maxWidth, highestFullyRenderedScreenIndex, index, isStackVisible, alwaysVisible } = children);
  if (alwaysVisible === undefined) {
    alwaysVisible = false;
  }
  c5 = undefined;
  c0 = translateX;
  c1 = maxWidth;
  c2 = highestFullyRenderedScreenIndex;
  c3 = index;
  c4 = isStackVisible;
  if (alwaysVisible === undefined) {
    alwaysVisible = false;
  }
  [tmp2, tmp3] = noop.useState(() => {
    let tmp = c4;
    if (c4) {
      tmp = _undefined3.get() <= c3;
    }
    if (tmp) {
      let tmp4 = c5;
      if (!c5) {
        tmp4 = _undefined.get() < c1;
      }
      tmp = tmp4;
    }
    return tmp;
  });
  let tmp = _slicedToArray(
    noop.useState(() => {
      let tmp = c4;
      if (c4) {
        tmp = _undefined3.get() <= c3;
      }
      if (tmp) {
        let tmp4 = c5;
        if (!c5) {
          tmp4 = _undefined.get() < c1;
        }
        tmp = tmp4;
      }
      return tmp;
    }),
    2,
  );
  items = [closure_16, isStackVisible, highestFullyRenderedScreenIndex, index, alwaysVisible, translateX, maxWidth];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class MainTabsChannelScreenStackTsx1 {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp = closure_1.get() <= closure_2;
      }
      if (tmp) {
        tmp4 = closure_3;
        if (!closure_3) {
          tmp5 = closure_4;
          tmp6 = closure_5;
          tmp4 = closure_4.get() < closure_5;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  MainTabsChannelScreenStackTsx1.__closure = items1;
  MainTabsChannelScreenStackTsx1.__workletHash = 1997617240646;
  MainTabsChannelScreenStackTsx1.__initData = tmp6;
  const items2 = [closure_17, _mod1705.scheduleOnRN, tmp3];
  c0 = undefined;
  c1 = undefined;
  [tmp13, tmp14, tmp15] = items2;
  class MainTabsChannelScreenStackTsx2 {
    constructor(arg0, arg1) {
      if (children !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, children);
      }
      return;
    }
  }
  const items3 = [tmp14, tmp15];
  MainTabsChannelScreenStackTsx2.__closure = items3;
  MainTabsChannelScreenStackTsx2.__workletHash = 2538011711038;
  MainTabsChannelScreenStackTsx2.__initData = tmp13;
  const animatedReaction = _mod1652.useAnimatedReaction(MainTabsChannelScreenStackTsx1, MainTabsChannelScreenStackTsx2);
  return children.children(tmp2);
}
function ChannelScreenNavigationTTIVisibility(children) {
  if (obj.isNavigationTTIEnabled()) {
    const obj2 = {};
    const merged = Object.assign(children);
    let childrenResult = state(EnabledChannelScreenNavigationTTIVisibility, obj2);
  } else {
    childrenResult = children.children(false);
  }
  return childrenResult;
}
function useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX) {
  importDefault = highestFullyRenderedScreenIndex;
  const obj = HideCoveredChannelsExperimentDefault;
  items = [closure_20, translateX];
  _require = undefined;
  [tmp3, tmp4] = items;
  class MainTabsChannelScreenStackTsx3 {
    constructor() {
      return closure_0.get() > 0;
    }
  }
  let items1 = [tmp4];
  MainTabsChannelScreenStackTsx3.__closure = items1;
  MainTabsChannelScreenStackTsx3.__workletHash = 14030664707715;
  MainTabsChannelScreenStackTsx3.__initData = tmp3;
  const items2 = [closure_21, highestFullyRenderedScreenIndex, index];
  _require = undefined;
  importDefault = undefined;
  [tmp5, tmp6, tmp7] = items2;
  class MainTabsChannelScreenStackTsx4 {
    constructor(arg0, arg1) {
      if (index !== highestFullyRenderedScreenIndex) {
        obj = closure_0;
        value = closure_0.get();
        tmp2 = closure_1;
        if (index) {
          if (value >= tmp2) {
            num = 1;
            result = obj.set(tmp2 - 1);
          }
        } else if (value < tmp2) {
          result1 = obj.set(tmp2);
        }
      }
      return;
    }
  }
  const items3 = [tmp6, tmp7];
  MainTabsChannelScreenStackTsx4.__closure = items3;
  MainTabsChannelScreenStackTsx4.__workletHash = 15152975546238;
  MainTabsChannelScreenStackTsx4.__initData = tmp5;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    MainTabsChannelScreenStackTsx3,
    MainTabsChannelScreenStackTsx4,
  );
  const obj2 = require("../../../../../_runtime/metro/01652__.js");
  const unmountEffect = require("useMountEffect").useUnmountEffect(() => {
    items = [closure_22, c1, c0];
    c0 = undefined;
    c1 = undefined;
    [tmp, tmp2, tmp3] = items;
    class MainTabsChannelScreenStackTsx5 {
      constructor() {
        obj = closure_0;
        if (closure_0.get() >= closure_1) {
          num = 1;
          result = obj.set(tmp - 1);
        }
        return;
      }
    }
    const items1 = [tmp2, tmp3];
    MainTabsChannelScreenStackTsx5.__closure = items1;
    MainTabsChannelScreenStackTsx5.__workletHash = 11869296074582;
    MainTabsChannelScreenStackTsx5.__initData = tmp;
    _mod1705.scheduleOnUI(MainTabsChannelScreenStackTsx5);
  });
  const tmp2Result = require("useMountEffect");
  const items4 = [
    closure_23,
    obj.useConfig({ location: "MainTabsChannelScreenStack" }).enabled,
    highestFullyRenderedScreenIndex,
    index,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp10, tmp11, tmp12, tmp13] = items4;
  class MainTabsChannelScreenStackTsx6 {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp = closure_1.get() > closure_2;
      }
      return tmp;
    }
  }
  const items5 = [tmp11, tmp12, tmp13];
  MainTabsChannelScreenStackTsx6.__closure = items5;
  MainTabsChannelScreenStackTsx6.__workletHash = 4301094108950;
  MainTabsChannelScreenStackTsx6.__initData = tmp10;
  return require("../../../../../_runtime/metro/01652__.js").useDerivedValue(MainTabsChannelScreenStackTsx6);
}
function getKey(index) {
  return String(index.index);
}
get_ActivityIndicator = fn(17);
({ NativeModules: hasOwnProperty, StyleSheet: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const setVisibleChannelScreen = fn(18946).setVisibleChannelScreen;
const ONYX_BORDER_WIDTH = fn(9903).ONYX_BORDER_WIDTH;
const Constants = fn(1072);
({ AnalyticsObjectTypes: closure_9, AnalyticsObjects: closure_10, AnalyticsSections: closure_11 } = Constants);
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5140);
let closure_15 = createStyles.createStyles({
  onyxContainerStyles: { marginTop: -ONYX_BORDER_WIDTH, marginLeft: -ONYX_BORDER_WIDTH },
});
let closure_16 = {
  code: "(function MainTabsChannelScreenStackTsx1(){let[isStackVisible,highestFullyRenderedScreenIndex,index,alwaysVisible,translateX,maxWidth]=this.__closure;return isStackVisible&&highestFullyRenderedScreenIndex.get()<=index&&(alwaysVisible||translateX.get()<maxWidth);})",
};
let closure_17 = {
  code: "(function MainTabsChannelScreenStackTsx2(visible,wasVisible){let[scheduleOnRN,setIsVisible]=this.__closure;if(visible===wasVisible)return;scheduleOnRN(setIsVisible,visible);})",
};
let closure_20 = {
  code: "(function MainTabsChannelScreenStackTsx3(){let[translateX]=this.__closure;return translateX.get()>0;})",
};
let closure_21 = {
  code: "(function MainTabsChannelScreenStackTsx4(isVisibleBeneath,wasVisibleBeneath){let[highestFullyRenderedScreenIndex,index]=this.__closure;if(isVisibleBeneath===wasVisibleBeneath)return;if(isVisibleBeneath){if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}return;}if(highestFullyRenderedScreenIndex.get()<index){highestFullyRenderedScreenIndex.set(index);}})",
};
let closure_22 = {
  code: "(function MainTabsChannelScreenStackTsx5(){let[highestFullyRenderedScreenIndex,index]=this.__closure;if(highestFullyRenderedScreenIndex.get()>=index){highestFullyRenderedScreenIndex.set(index-1);}})",
};
let closure_23 = {
  code: "(function MainTabsChannelScreenStackTsx6(){let[enabled,highestFullyRenderedScreenIndex,index]=this.__closure;return enabled&&highestFullyRenderedScreenIndex.get()>index;})",
};
let closure_25 = noop.memo(function FirstChannelScreen(index) {
  ({ guildId: require, channelId: importDefault, showCreateThread: dependencyMap, frame } = index);
  index = index.index;
  ({ isDragging, translateX, containerWidth } = index);
  const isActive = index.isActive;
  ({ maxWidth, transitionState } = index);
  const cleanup = index.cleanup;
  const highestFullyRenderedScreenIndex = index.highestFullyRenderedScreenIndex;
  ({ freeze, isNavigationTTIStackVisible, focusChatPressableComponent, parentFreezeValue } = index);
  const tmp3 = useThemeDefault();
  const width = useBaseAppContainerDimensionsDefault().width;
  const tmp4 = closure_15();
  let tmp5 = useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX);
  items = [cleanup, transitionState];
  const mainTabsChannelScreenStyles = useMainTabsChannelScreenStyles.useMainTabsChannelScreenStyles(
    isDragging,
    translateX,
    maxWidth,
    tmp5,
    parentFreezeValue,
  );
  const effect = index.useEffect(() => {
    if (transitionState === native.TransitionStates.YEETED) {
      cleanup();
    }
  }, items);
  const items1 = [mainTabsChannelScreenStyles, ,];
  let tmp10 = null;
  if (null != containerWidth) {
    const obj2 = { width: containerWidth };
    tmp10 = obj2;
  }
  items1[1] = tmp10;
  let onyxContainerStyles;
  if (tmp3 === ThemeTypes.ONYX) {
    if (!useChatLayoutDefault().isChatBesideChannelList) {
      onyxContainerStyles = tmp4.onyxContainerStyles;
    }
  }
  const obj3 = { style: items1, children: null };
  items1[2] = onyxContainerStyles;
  const obj4 = { freeze, children: null };
  const obj5 = {
    collapsable: false,
    translateX,
    roundCorners: null == frame,
    pointerEvents: null,
    accessibilityElementsHidden: null,
    importantForAccessibility: null,
    children: null,
  };
  let str = "box-only";
  if (isActive) {
    str = "auto";
  }
  obj5.pointerEvents = str;
  obj5.accessibilityElementsHidden = !isActive;
  obj5.importantForAccessibility = "no-hide-descendants";
  obj5.children = closure_13(ChannelScreenNavigationTTIVisibility, {
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
        children: state(StandaloneChannelScreenDefault, {
          guildId,
          channelId,
          isActive,
          isNavigationTTIVisible,
          showCreateThread,
          isNavigationScreen: null == containerWidth,
          frame,
          screenIndex: index,
        }),
      };
      return state(ChatViewWidthContextDefault.Provider, obj);
    },
  });
  obj4.children = closure_13(ChannelScreenFrameContainerDefault, obj5);
  const items2 = [closure_13(Suspender.Freeze, obj4), focusChatPressableComponent];
  obj3.children = items2;
  return closure_14(_modDef1652.View, obj3);
});
let closure_26 = {
  code: "(function MainTabsChannelScreenStackTsx7(){let[translateX]=this.__closure;return translateX.get()===0;})",
};
let closure_27 = {
  code: "(function MainTabsChannelScreenStackTsx8(isFullyOpen,prev){let[index,mainTabsDisallowGesture]=this.__closure;if(isFullyOpen===prev)return;if(index!==1)return;mainTabsDisallowGesture.set(isFullyOpen);})",
};
let closure_28 = noop.memo(function ChannelScreen(cleanup) {
  ({ guildId: c0, channelId: c1, showCreateThread: dependencyMap, transitionState } = cleanup);
  cleanup = cleanup.cleanup;
  const isActive = cleanup.isActive;
  ({ parentFreezeValue, index } = cleanup);
  const highestFullyRenderedScreenIndex = cleanup.highestFullyRenderedScreenIndex;
  let obj5;
  ({ isNavigationTTIStackVisible, freeze } = cleanup);
  const tmp3 = useThemeDefault();
  const tmp4 = closure_15();
  const navigation = require("Link").useNavigation();
  cleanup.useRef(false);
  items = [cleanup, navigation];
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
  const obj3 = { canDrag: null, onVisibilityChange: null, onDragStart: null, startShown: false };
  const obj = require("Link");
  obj3.canDrag = transitionState !== require("native").TransitionStates.YEETED;
  obj3.onVisibilityChange = callback;
  obj3.onDragStart = require("ChatInputUtils").dismissKeyboard;
  const tmp8Result = useMainTabsPanelsGestureDefault(obj3);
  ({ isDragging, translateX, maxWidth } = tmp8Result);
  ({ gesture, panelGestureContext, movePanel } = tmp8Result);
  const tmp10 = useIsCompletelyCovered(index, highestFullyRenderedScreenIndex, translateX);
  const items1 = [closure_26, translateX];
  _require = undefined;
  [tmp11, tmp12] = items1;
  class MainTabsChannelScreenStackTsx7 {
    constructor() {
      return 0 === closure_0.get();
    }
  }
  const items2 = [tmp12];
  MainTabsChannelScreenStackTsx7.__closure = items2;
  MainTabsChannelScreenStackTsx7.__workletHash = 4688173684036;
  MainTabsChannelScreenStackTsx7.__initData = tmp11;
  const items3 = [closure_27, index, cleanup.useContext(MainTabsNavigatorPanelContextDefault).disallowGesture];
  _require = undefined;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items3;
  class MainTabsChannelScreenStackTsx8 {
    constructor(arg0, arg1) {
      tmp = cleanup !== arg1;
      if (tmp) {
        tmp2 = closure_0;
        num = 1;
        tmp = 1 === closure_0;
      }
      if (tmp) {
        tmp3 = closure_1;
        result = closure_1.set(cleanup);
      }
      return;
    }
  }
  const items4 = [tmp14, tmp15];
  MainTabsChannelScreenStackTsx8.__closure = items4;
  MainTabsChannelScreenStackTsx8.__workletHash = 8338407226769;
  MainTabsChannelScreenStackTsx8.__initData = tmp13;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    MainTabsChannelScreenStackTsx7,
    MainTabsChannelScreenStackTsx8,
  );
  obj5 = { cleanup, movePanel };
  cleanup.useRef(obj5);
  const effect = obj2.useEffect(() => {
    closure_10.current = obj5;
  });
  const items5 = [transitionState];
  const effect1 = obj2.useEffect(() => {
    const current = ref2.current;
    const movePanel = current.movePanel;
    if (transitionState !== native.TransitionStates.MOUNTED) {
      if (transitionState !== native.TransitionStates.ENTERED) {
        if (ref.current) {
          current.cleanup();
        } else {
          tmp5.current = true;
          movePanel(false, false, 0, true);
        }
      }
    }
    movePanel(true, false, 0, false);
  }, items5);
  const obj4 = require("../../../../../_runtime/metro/01652__.js");
  const mainTabsChannelScreenStyles = require("useMainTabsChannelScreenStyles").useMainTabsChannelScreenStyles(
    isDragging,
    translateX,
    maxWidth,
    tmp10,
    parentFreezeValue,
  );
  const obj6 = { gesture, children: null };
  const obj7 = { value: panelGestureContext, children: null };
  const items6 = [mainTabsChannelScreenStyles];
  let onyxContainerStyles;
  if (tmp3 === ThemeTypes.ONYX) {
    if (!useChatLayoutDefault().isChatBesideChannelList) {
      onyxContainerStyles = tmp4.onyxContainerStyles;
    }
  }
  const obj8 = {
    style: items6,
    accessibilityElementsHidden: !isActive,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  items6[1] = onyxContainerStyles;
  const obj9 = {
    freeze,
    children: closure_13(ChannelScreenNavigationTTIVisibility, {
      translateX,
      maxWidth,
      highestFullyRenderedScreenIndex,
      index,
      isStackVisible: isNavigationTTIStackVisible,
      children(isNavigationTTIVisible) {
        return state(StandaloneChannelScreenDefault, {
          guildId,
          channelId,
          isActive,
          isNavigationTTIVisible,
          showCreateThread,
          isNavigationScreen: true,
          frame: null,
          screenIndex: index,
        });
      },
    }),
  };
  const items7 = [
    closure_13(require("Suspender").Freeze, obj9),
    closure_13(require("ChannelScreenFrameContainer").ChannelScreenFrameTopBorder, {}),
  ];
  obj8.children = items7;
  obj7.children = closure_14(_modDef1652.View, obj8);
  obj6.children = closure_13(require("MainTabsNavigatorPanelContext").MainTabsChannelScreenStackContext.Provider, obj7);
  return closure_13(require("LegacyBaseButton").GestureDetector, obj6);
});
let closure_30 = {
  code: "(function MainTabsChannelScreenStackTsx9(){let[translateX,maxWidth]=this.__closure;return translateX.get()===maxWidth;})",
};
let closure_31 = {
  code: "(function MainTabsChannelScreenStackTsx10(value,prev){let[scheduleOnRN,setIsHidden]=this.__closure;if(value===prev)return;scheduleOnRN(setIsHidden,value);})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsChannelScreenStack.tsx");

export default noop.memo(function MainTabsChannelScreenStack(screens) {
  screens = screens.screens;
  const screenStackActive = screens.screenStackActive;
  importDefault = screenStackActive;
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
  closure_12 = undefined;
  let first;
  let sharedValue;
  const tmp = importDefault;
  let tmp3 = require("useColorThemeBackground")();
  [tmp5, tmp6] = navigationTTIStackVisible(translateX.useState(translateX.get() === maxWidth), 2);
  const tmp4 = navigationTTIStackVisible(translateX.useState(translateX.get() === maxWidth), 2);
  items = [closure_30, translateX, maxWidth];
  _require = undefined;
  importDefault = undefined;
  [tmp8, tmp9, tmp10] = items;
  class MainTabsChannelScreenStackTsx9 {
    constructor() {
      return closure_0.get() === closure_1;
    }
  }
  const items1 = [tmp9, tmp10];
  MainTabsChannelScreenStackTsx9.__closure = items1;
  MainTabsChannelScreenStackTsx9.__workletHash = 2670211334166;
  MainTabsChannelScreenStackTsx9.__initData = tmp8;
  const items2 = [closure_31, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, tmp6];
  _require = undefined;
  importDefault = undefined;
  [tmp11, tmp12, tmp13] = items2;
  class MainTabsChannelScreenStackTsx10 {
    constructor(arg0, arg1) {
      if (screens !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, screens);
      }
      return;
    }
  }
  const items3 = [tmp12, tmp13];
  MainTabsChannelScreenStackTsx10.__closure = items3;
  MainTabsChannelScreenStackTsx10.__workletHash = 1097722346952;
  MainTabsChannelScreenStackTsx10.__initData = tmp11;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    MainTabsChannelScreenStackTsx9,
    MainTabsChannelScreenStackTsx10,
  );
  const items4 = [screens];
  memo = obj.useMemo(() => {
    const atResult = _undefined.at(-1);
    let type;
    if (atResult != null) {
      type = atResult.type;
    }
    let channelId = null;
    if (type === useChannelScreensFromNavigation.ChannelScreenType.DEFAULT) {
      channelId = atResult.channelId;
    }
    return channelId;
  }, items4);
  const items5 = [screenStackVisible, memo];
  const effect = obj.useEffect(() => {
    let tmp2 = null;
    if (screenStackVisible) {
      tmp2 = memo;
    }
    setVisibleChannelScreen(tmp2);
  }, items5);
  const effect1 = obj.useEffect(() => () => focusChatPressableComponent(null), []);
  const items6 = [memo];
  const effect2 = obj.useEffect(() => {
    const MediaPlayerManager = isDragging.MediaPlayerManager;
    if (MediaPlayerManager != null) {
      const pauseAllMediaPlayers = MediaPlayerManager.pauseAllMediaPlayers;
      if (pauseAllMediaPlayers != null) {
        pauseAllMediaPlayers();
      }
    }
  }, items6);
  const tmp19 = tmp(screenStackVisible[30])();
  closure_12 = tmp19;
  first = screens[0];
  if (shouldFreeze) {
    shouldFreeze = tmp5;
  }
  if (shouldFreeze) {
    let tmp22 = null == first;
    if (!tmp22) {
      tmp22 = first.type !== tmp7(tmp2[29]).ChannelScreenType.DEFAULT;
    }
    shouldFreeze = tmp22;
  }
  if (shouldFreeze) {
    shouldFreeze = !screens.some((channelId) => closure_12.includes(channelId.channelId));
  }
  let obj2 = require("../../../../../_runtime/metro/01652__.js");
  sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const items7 = [shouldFreeze, sharedValue];
  const effect3 = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue.set(sharedValue.get() + 1);
    }, 10);
    return () => clearTimeout(closure_0);
  }, items7);
  const items8 = [
    screens.length,
    tmp19,
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
      let tmp14 = c1;
      if (c1) {
        tmp14 = NumberResult === _undefined.length - 1;
      }
      obj.isActive = tmp14;
      obj.isNavigationTTIStackVisible = navigationTTIStackVisible;
      let tmp18 = NumberResult < _undefined.length - 2;
      if (tmp18) {
        tmp18 = !closure_12.includes(channelId.channelId);
      }
      obj.freeze = tmp18;
      obj.containerWidth = firstScreenWidth;
      obj.frame = firstScreenFrame;
      obj.parentFreezeValue = sharedValue;
      obj.maxWidth = maxWidth;
      obj.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      const obj2 = { screen: channelId, children: state(closure_25, obj, arg0) };
      return state(MainTabsBackgroundChat.BackgroundChatPortal, obj2, arg0);
    } else {
      const obj5 = {
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
      ({ guildId: obj3.guildId, channelId: obj3.channelId, showCreateThread } = channelId);
      if (showCreateThread == null) {
        showCreateThread = false;
      }
      obj5.showCreateThread = showCreateThread;
      obj5.index = NumberResult;
      obj5.transitionState = transitionState;
      obj5.parentFreezeValue = sharedValue;
      obj5.cleanup = cleanup;
      obj5.isActive = NumberResult === _undefined.length - 1;
      obj5.isNavigationTTIStackVisible = navigationTTIStackVisible;
      let tmp5 = NumberResult < _undefined.length - 2;
      if (tmp5) {
        tmp5 = !closure_12.includes(channelId.channelId);
      }
      obj5.freeze = tmp5;
      obj5.highestFullyRenderedScreenIndex = highestFullyRenderedScreenIndex;
      return state(closure_28, obj5, arg0);
    }
  }, items8);
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
  const items9 = [type];
  let channelId1;
  if (first != null) {
    channelId1 = first.channelId;
  }
  items9[1] = channelId1;
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
  }, items9);
  let tmp7Result = require("../../../../../_runtime/metro/01652__.js");
  require("ScreenIndexFrozen").freezeScreenIndex(shouldFreeze, 0);
  if (!shouldFreeze) {
    let obj3 = { freeze: shouldFreeze, children: null };
    const obj4 = {
      collapsable: false,
      style: maxWidth.absoluteFill,
      pointerEvents: "box-none",
      accessibilityElementsHidden: !screenStackActive,
      importantForAccessibility: "no-hide-descendants",
      children: null,
    };
    let obj5 = { gradient: tmp3, children: null };
    const obj6 = { items: screens, renderItem: callback, getItemKey: getKey };
    obj5.children = first(tmp7(tmp2[18]).TransitionGroup, obj6);
    obj4.children = first(tmp7(tmp2[18]).ThemeContextProvider, obj5);
    obj3.children = first(highestFullyRenderedScreenIndex, obj4);
    let tmp33Result = tmp33(tmp7(tmp2[19]).Freeze, obj3);
    const tmp36 = !screenStackActive;
  } else {
    let showCreateThread;
    if (first != null) {
      showCreateThread = first.showCreateThread;
    }
    tmp33Result = null;
  }
  return tmp33Result;
});
