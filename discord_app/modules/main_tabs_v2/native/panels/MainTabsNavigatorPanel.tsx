// discord_app/modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import ChannelActionCreatorsDefault from "../../../../actions/ChannelActionCreators.tsx";
import PanelsNavigationUtils from "PanelsNavigationUtils.tsx";
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation.tsx";
import ChannelScreenAnimatedFrameDefault from "ChannelScreenAnimatedFrame.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, Pressable: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ ComponentActions: closure_8, ME: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let closure_12 = new LoggerDefault("MainTabsNavigatorPanel");
const createStyles = fn(4756);
let obj = { container: { flex: 1 }, containerBackground: null, tabsContainer: null };
const tmp5 = new LoggerDefault("MainTabsNavigatorPanel");
obj.containerBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.tabsContainer = { flex: 1 };
let closure_13 = createStyles.createStyles(obj);
let closure_14 = {
  code: "function MainTabsNavigatorPanelTsx1(){const{translateX,highestFullyRenderedScreenIndex}=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};}",
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx");

export default noop.memo(function MainTabsNavigatorPanel() {
  let tmp = closure_13();
  navigation = navigation(drawerWidth[8]).useNavigation();
  let tmp6 = isChatLockedOpen(drawerWidth[9])();
  isChatLockedOpen = tmp6.isChatLockedOpen;
  let obj = navigation(drawerWidth[8]);
  drawerWidth = navigation(drawerWidth[10]).useDrawerWidth();
  let obj2 = navigation(drawerWidth[10]);
  _slicedToArray = noop.useRef(isChatLockedOpen);
  noop = noop.useRef(false);
  const items = [isChatLockedOpen];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (ref.current !== isChatLockedOpen) {
      tmp.current = isChatLockedOpen;
      let obj = require;
      let result = dependencyMap;
      if (isChatLockedOpen) {
        obj = obj(16335);
        result = obj.convertPortraitToLandscapeScreens();
      } else {
        obj(4622).dismissKeyboard();
        const objResult = obj(4622);
        const result1 = PanelsNavigationUtils.convertLandscapeToPortraitScreens();
      }
      closure_4.current = true;
    }
  }, items);
  const arr2 = isChatLockedOpen(drawerWidth[14])(navigation);
  const first = arr2[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const tmp12 = type === navigation(drawerWidth[14]).ChannelScreenType.DEFAULT;
  [first1, closure_6] = noop.useState(tmp12);
  const tmp15 = _slicedToArray(noop.useState(tmp12), 2);
  closure_7 = tmp15[1];
  const first2 = arr2[0];
  noop.useRef(first2);
  const items1 = [first2];
  const effect = obj3.useEffect(() => {
    closure_9.current = first2;
  }, items1);
  const items2 = [navigation];
  const handleExit = obj3.useCallback(() => {
    let name1;
    closure_6(false);
    const state = navigation.getState();
    let index = state.index;
    let name;
    if (state.routes[index] != null) {
      name = tmp3.name;
    }
    let num = 0;
    let num2 = 0;
    if ("channel" === name) {
      do {
        let diff = index - 1;
        let tmp6 = state.routes[diff];
        name1 = undefined;
        if (tmp6 != null) {
          name1 = tmp6.name;
        }
        num = num + 1;
        index = diff;
        num2 = num;
      } while ("channel" === name1);
    }
    if (0 < num2) {
      navigation.pop(num2);
    }
  }, items2);
  [first3, logger] = noop.useState(() => useChannelScreensFromNavigation.isActiveTabsGuilds(navigation.getState()));
  const tmp8 = isChatLockedOpen(drawerWidth[11])();
  [isChatBesideChannelList, closure_13] = noop.useState(() => first3);
  const items3 = [navigation];
  const effect1 = obj3.useEffect(() => {
    function handleStateChange(data) {
      logger(navigation(drawerWidth[14]).isActiveTabsGuilds(data.data.state));
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      navigation.removeListener("state", handleStateChange);
    };
  }, items3);
  const items4 = [first3];
  const effect2 = obj3.useEffect(() => {
    closure_1_13(first3);
  }, items4);
  if (isChatBesideChannelList) {
    isChatBesideChannelList = tmp6.isChatBesideChannelList;
  }
  noop.useRef(false);
  const items5 = [navigation, handleExit];
  const callback1 = obj3.useCallback((arg0) => {
    closure_6(arg0);
    closure_7(arg0);
    closure_15.current = false;
    if (arg0) {
      if (null != ref2.current) {
        if ("channel" !== navigation.getState().routes[navigation.getState(navigation).index].name) {
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          let name;
          if (rootNavigationRef != null) {
            const state = rootNavigationRef.getState();
            if (state != null) {
              let index;
              if (rootNavigationRef != null) {
                const state1 = rootNavigationRef.getState();
                if (state1 != null) {
                  index = state1.index;
                }
              }
              if (state.routes[index] != null) {
                name = tmp12.name;
              }
            }
          }
          if ("modal" !== name) {
            tmp3.current = true;
            transitionToChannel.transitionToChannel(tmp6.current.channelId);
            const tmp15Result = transitionToChannel;
          }
        }
      }
    } else {
      callback();
    }
  }, items5);
  const callback2 = obj3.useCallback((arg0) => {
    if (arg0) {
      closure_7(true);
    }
  }, []);
  let tmp27 = null != first2;
  const callback3 = obj3.useCallback(() => {
    const ComponentDispatch = navigation(drawerWidth[17]).ComponentDispatch;
    ComponentDispatch.dispatch(first2.BOTTOM_CHANNEL_SCREEN_DRAG_START);
    navigation(drawerWidth[13]).dismissKeyboard();
  }, []);
  if (tmp27) {
    tmp27 = first2.type !== tmp2(tmp3[14]).ChannelScreenType.FALLBACK_RENDERED;
  }
  closure_16 = tmp27;
  let tmp29 = isChatBesideChannelList;
  const tmp21 = _slicedToArray(
    noop.useState(() => first3),
    2,
  );
  if (isChatBesideChannelList) {
    tmp29 = isChatLockedOpen;
  }
  let tmp30 = !tmp29;
  if (!tmp29) {
    tmp30 = tmp27;
  }
  const obj4 = {
    canDrag: tmp30,
    onVisibilityChange: callback1,
    onPreMovement: callback2,
    onDragStart: callback3,
    startShown: null,
    openWidth: null,
  };
  const first4 = arr2[0];
  let type1;
  if (first4 != null) {
    type1 = first4.type;
  }
  obj4.startShown = type1 === navigation(drawerWidth[14]).ChannelScreenType.DEFAULT;
  let tmp33;
  if (isChatBesideChannelList) {
    tmp33 = drawerWidth;
  }
  obj4.openWidth = tmp33;
  const tmp5ResultResult = isChatLockedOpen(drawerWidth[18])(obj4);
  const translateX = tmp5ResultResult.translateX;
  const movePanel = tmp5ResultResult.movePanel;
  const maxWidth = tmp5ResultResult.maxWidth;
  const isDraggingRef = tmp5ResultResult.isDraggingRef;
  const items6 = [isChatBesideChannelList, drawerWidth];
  ({ gesture, panelGestureContext, isDragging } = tmp5ResultResult);
  const effect3 = obj3.useEffect(() => {
    logger.log("Chat Layout Changed", { isNavigatorPanelsBesideChannelList: isChatBesideChannelList, drawerWidth });
  }, items6);
  const obj5 = { handleExit, maxWidth, movePanel, screens: arr2, firstScreen: first2 };
  noop.useRef(obj5);
  const effect4 = obj3.useEffect(() => {
    closure_22.current = obj5;
  });
  let type2;
  if (first2 != null) {
    type2 = first2.type;
  }
  const items7 = [type2, translateX, isDraggingRef];
  const effect5 = obj3.useEffect(() => {
    if (!isDraggingRef.current) {
      const current = ref4.current;
      ({ maxWidth, movePanel } = current);
      let type;
      ({ handleExit, screens } = current);
      if (first2 != null) {
        type = first2.type;
      }
      const tmp6 = type === useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
      if (screens.length >= 2) {
        let num4 = 0;
        if (!tmp6) {
          num4 = maxWidth;
        }
        const result = translateX.set(num4);
        closure_6(tmp6);
        closure_7(tmp6);
      } else if (tmp6) {
        if (ref3.current) {
          ref3.current = false;
          if (translateX.get() === maxWidth) {
            handleExit();
          }
        } else {
          movePanel(true, false, 0, true);
        }
      } else if (movePanel(false, false, 0, false)) {
        ChatInputUtils.dismissKeyboard();
        const tmp4Result = ChatInputUtils;
      }
    }
  }, items7);
  let channelId;
  if (first2 != null) {
    channelId = first2.channelId;
  }
  const items8 = [channelId];
  const effect6 = obj3.useEffect(() => {
    const firstScreen = ref4.current.firstScreen;
    let type;
    if (firstScreen != null) {
      type = firstScreen.type;
    }
    if (type === useChannelScreensFromNavigation.ChannelScreenType.BACKGROUND_SAVED) {
      let guildId = firstScreen.guildId;
      if (guildId == null) {
        guildId = React7;
      }
      ChannelActionCreatorsDefault.preload(guildId, firstScreen.channelId);
    }
  }, items8);
  const items9 = [movePanel, tmp27];
  const callback4 = obj3.useCallback(() => {
    if (closure_16) {
      movePanel(true, false, 0, false);
    }
  }, items9);
  const items10 = [callback4, first1, isChatLockedOpen, isChatBesideChannelList];
  if (isChatBesideChannelList) {
    if (isChatLockedOpen) {
      let tmp43 = arr2.length <= 1;
    }
    if (!first1) {
      let tmp44 = isChatBesideChannelList;
      if (isChatBesideChannelList) {
        tmp44 = isChatLockedOpen;
      }
      first1 = tmp44;
    }
    const items11 = [isChatLockedOpen, isChatBesideChannelList, maxWidth, translateX];
    const memo = obj3.useMemo(() => {
      let tmp = null;
      if (isChatBesideChannelList) {
        const obj = { translateX, maxWidth, isChatLockedOpen };
        tmp = closure_2_10(ChannelScreenAnimatedFrameDefault, obj);
      }
      return tmp;
    }, items11);
    let num3 = 0;
    if (translateX.get() > 0) {
      num3 = -1;
    }
    const sharedValue = tmp2(tmp3[21]).useSharedValue(num3);
    const tmp2Result = tmp2(tmp3[21]);
    function de() {
      let opacity = 0;
      if (translateX.get() > 0) {
        opacity = 0;
        if (sharedValue.get() < 1) {
          opacity = 1;
        }
      }
      return { opacity };
    }
    const obj6 = { translateX, highestFullyRenderedScreenIndex: sharedValue };
    de.__closure = obj6;
    de.__workletHash = 10839500061449;
    de.__initData = isChatBesideChannelList;
    const animatedStyle = tmp2(tmp3[21]).useAnimatedStyle(de);
    const tmp2Result4 = tmp2(tmp3[21]);
    const tmp49 = tmp5(tmp3[22])("channel_list_scrim");
    const isCustomThemeActive = tmp2(tmp3[23]).useIsCustomThemeActive();
    const obj7 = { value: panelGestureContext, children: null };
    const tmp2Result5 = tmp2(tmp3[23]);
    let tmp53Result = null;
    if (tmp2Result6.isJankScreenReportingEnabled()) {
      const obj8 = { translateX, maxWidth, channelId: null, showCreateThread: null };
      let channelId1;
      if (first2 != null) {
        channelId1 = first2.channelId;
      }
      obj8.channelId = channelId1;
      let flag;
      if (first2 != null) {
        flag = first2.showCreateThread;
      }
      if (flag == null) {
        flag = false;
      }
      obj8.showCreateThread = flag;
      tmp53Result = handleExit(tmp5(tmp3[26]), obj8);
      const tmp5Result3 = tmp5(tmp3[26]);
    }
    const items12 = [tmp53Result];
    const obj9 = { gesture, children: null };
    const items13 = [tmp.container];
    let containerBackground = !isCustomThemeActive;
    if (!isCustomThemeActive) {
      containerBackground = tmp.containerBackground;
    }
    const obj10 = { style: null, collapsable: false, children: null };
    items13[1] = containerBackground;
    obj10.style = items13;
    const obj11 = { enabled: isChatBesideChannelList, children: null };
    const obj12 = { style: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    const items14 = [tmp.tabsContainer, animatedStyle];
    obj12.style = items14;
    obj12.accessibilityElementsHidden = !tmp43;
    obj12.importantForAccessibility = "no-hide-descendants";
    const items15 = [handleExit(tmp5(tmp3[29]), {})];
    let tmp56Result;
    if (tmp49) {
      const obj13 = { translateX, maxWidth };
      tmp56Result = tmp56(tmp2(tmp3[30]).MainTabsContentScrim, obj13);
    }
    items15[1] = tmp56Result;
    obj12.children = items15;
    const items16 = [first3(tmp5(tmp3[21]).View, obj12), handleExit(tmp5(tmp3[31]), {})];
    if (arr2.length > 0) {
      const obj14 = {
        screens: arr2,
        screenStackActive: first1,
        navigationTTIStackVisible: null,
        translateX: null,
        isDragging: null,
        maxWidth: null,
        highestFullyRenderedScreenIndex: null,
        shouldFreeze: null,
        focusChatPressableComponent: null,
        firstScreenWidth: null,
        firstScreenFrame: null,
      };
      if (!first1) {
        first1 = tmp15[0];
      }
      obj14.navigationTTIStackVisible = first1;
      obj14.translateX = translateX;
      obj14.isDragging = isDragging;
      obj14.maxWidth = maxWidth;
      obj14.highestFullyRenderedScreenIndex = sharedValue;
      obj14.shouldFreeze = !isChatBesideChannelList;
      obj14.focusChatPressableComponent = tmp42;
      let tmp62;
      if (isChatBesideChannelList) {
        if (isChatLockedOpen) {
          tmp62 = tmp8;
        }
      }
      obj14.firstScreenWidth = tmp62;
      obj14.firstScreenFrame = memo;
      let tmp56Result2 = tmp56(tmp5(tmp3[32]), obj14);
      const tmp5Result4 = tmp5(tmp3[32]);
    } else {
      tmp56Result2 = null;
      if (isChatBesideChannelList) {
        tmp56Result2 = null;
        if (isChatLockedOpen) {
          tmp56Result2 = tmp56(tmp5(tmp3[33]), {});
        }
      }
    }
    items16[2] = tmp56Result2;
    obj11.children = items16;
    obj10.children = first3(tmp2(tmp3[28]).SidebarCoachmarkOverlay, obj11);
    obj9.children = handleExit(first1, obj10);
    items12[1] = handleExit(tmp2(tmp3[27]).GestureDetector, obj9);
    obj7.children = items12;
    return first3(tmp5(tmp3[24]).Provider, obj7);
  }
  tmp43 = !first1;
});
