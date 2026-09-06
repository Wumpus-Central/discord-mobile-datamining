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
const createStyles = fn(4560);
let obj = { container: { flex: 1 }, containerBackground: null, tabsContainer: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.containerBackground = obj;
obj.tabsContainer = { flex: 1 };
let closure_13 = createStyles.createStyles(obj);
let closure_14 = {
  code: "function MainTabsNavigatorPanelTsx1(){const{translateX,highestFullyRenderedScreenIndex}=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};}",
};
const tmp5 = new LoggerDefault("MainTabsNavigatorPanel");
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx");

export default noop.memo(function MainTabsNavigatorPanel() {
  let tmp = closure_13();
  let current = navigation(drawerWidth[8]);
  navigation = current.useNavigation();
  let tmp6 = isChatLockedOpen(drawerWidth[9])();
  isChatLockedOpen = tmp6.isChatLockedOpen;
  let obj1 = navigation(drawerWidth[10]);
  drawerWidth = obj1.useDrawerWidth();
  let obj2 = noop;
  _slicedToArray = noop.useRef(isChatLockedOpen);
  noop = noop.useRef(false);
  const items = [isChatLockedOpen];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (ref.current !== isChatLockedOpen) {
      tmp.current = isChatLockedOpen;
      let obj = require;
      let result = dependencyMap;
      if (isChatLockedOpen) {
        obj = obj(16004);
        result = obj.convertPortraitToLandscapeScreens();
      } else {
        obj(4425).dismissKeyboard();
        const objResult = obj(4425);
        const result1 = PanelsNavigationUtils.convertLandscapeToPortraitScreens();
      }
      closure_4.current = true;
    }
  }, items);
  const arr2 = isChatLockedOpen(drawerWidth[14])(navigation);
  const tmp10 = _slicedToArray(
    noop.useState(() => {
      const first = arr2[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      return type === useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
    }),
    2,
  );
  let screenStackActive = tmp10[0];
  closure_7 = tmp10[1];
  const first1 = arr2[0];
  noop.useRef(first1);
  const items1 = [first1];
  const effect = noop.useEffect(() => {
    closure_9.current = first1;
  }, items1);
  const items2 = [navigation];
  const handleExit = noop.useCallback(() => {
    let name1;
    closure_7(false);
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
  const tmp15 = _slicedToArray(
    noop.useState(() => useChannelScreensFromNavigation.isActiveTabsGuilds(navigation.getState())),
    2,
  );
  const first2 = tmp15[0];
  const logger = tmp15[1];
  const tmp8 = isChatLockedOpen(drawerWidth[11])();
  [isChatBesideChannelList, closure_13] = _slicedToArray(
    noop.useState(() => first2),
    2,
  );
  const items3 = [navigation];
  const effect1 = noop.useEffect(() => {
    function handleStateChange(data) {
      logger(navigation(drawerWidth[14]).isActiveTabsGuilds(data.data.state));
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      navigation.removeListener("state", handleStateChange);
    };
  }, items3);
  const items4 = [first2];
  const effect2 = noop.useEffect(() => {
    closure_1_13(first2);
  }, items4);
  if (isChatBesideChannelList) {
    isChatBesideChannelList = tmp6.isChatBesideChannelList;
  }
  obj2.useRef(false);
  const items5 = [navigation, handleExit];
  const callback1 = obj2.useCallback((arg0) => {
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
                name = tmp11.name;
              }
            }
          }
          if ("modal" !== name) {
            tmp2.current = true;
            transitionToChannel.transitionToChannel(tmp5.current.channelId);
            const tmp14Result = transitionToChannel;
          }
        }
      }
    } else {
      callback();
    }
  }, items5);
  let tmp22 = null != first1;
  const callback2 = obj2.useCallback(() => {
    const ComponentDispatch = navigation(drawerWidth[17]).ComponentDispatch;
    ComponentDispatch.dispatch(first1.BOTTOM_CHANNEL_SCREEN_DRAG_START);
    navigation(drawerWidth[13]).dismissKeyboard();
  }, []);
  if (tmp22) {
    tmp22 = first1.type !== tmp2(tmp3[14]).ChannelScreenType.FALLBACK_RENDERED;
  }
  closure_16 = tmp22;
  let tmp24 = isChatBesideChannelList;
  let tmp5Result = tmp5(tmp3[18]);
  if (isChatBesideChannelList) {
    tmp24 = isChatLockedOpen;
  }
  let tmp25 = !tmp24;
  if (!tmp24) {
    tmp25 = tmp22;
  }
  current = {
    canDrag: tmp25,
    onVisibilityChange: callback1,
    onDragStart: callback2,
    startShown: null,
    openWidth: null,
  };
  const first3 = arr2[0];
  let type;
  if (first3 != null) {
    type = first3.type;
  }
  current.startShown = type === navigation(drawerWidth[14]).ChannelScreenType.DEFAULT;
  let tmp28;
  if (isChatBesideChannelList) {
    tmp28 = drawerWidth;
  }
  current.openWidth = tmp28;
  const tmp5ResultResult = tmp5Result(current);
  const translateX = tmp5ResultResult.translateX;
  const movePanel = tmp5ResultResult.movePanel;
  const maxWidth = tmp5ResultResult.maxWidth;
  const isDraggingRef = tmp5ResultResult.isDraggingRef;
  const items6 = [isChatBesideChannelList, drawerWidth];
  ({ gesture, panelGestureContext, isDragging } = tmp5ResultResult);
  const effect3 = obj2.useEffect(() => {
    logger.log("Chat Layout Changed", { isNavigatorPanelsBesideChannelList: isChatBesideChannelList, drawerWidth });
  }, items6);
  current = { handleExit, maxWidth, movePanel, screens: arr2, firstScreen: first1 };
  obj2.useRef(current);
  const effect4 = obj2.useEffect(() => {
    closure_22.current = current;
  });
  let type1;
  if (first1 != null) {
    type1 = first1.type;
  }
  const items7 = [type1, translateX, isDraggingRef];
  const effect5 = obj2.useEffect(() => {
    if (!isDraggingRef.current) {
      current = ref4.current;
      ({ maxWidth, movePanel } = current);
      let type;
      ({ handleExit, screens } = current);
      if (first1 != null) {
        type = first1.type;
      }
      const tmp6 = type === useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
      if (screens.length >= 2) {
        let num4 = 0;
        if (!tmp6) {
          num4 = maxWidth;
        }
        const result = translateX.set(num4);
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
  if (first1 != null) {
    channelId = first1.channelId;
  }
  const items8 = [channelId];
  const effect6 = obj2.useEffect(() => {
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
  const items9 = [movePanel, tmp22];
  const callback3 = obj2.useCallback(() => {
    if (closure_16) {
      movePanel(true, false, 0, false);
    }
  }, items9);
  const items10 = [callback3, screenStackActive, isChatLockedOpen, isChatBesideChannelList];
  if (isChatBesideChannelList) {
    if (isChatLockedOpen) {
      let tmp38 = arr2.length <= 1;
    }
    const items11 = [isChatLockedOpen, isChatBesideChannelList, maxWidth, translateX];
    const memo = obj2.useMemo(() => {
      let tmp = null;
      if (isChatBesideChannelList) {
        const obj = { translateX, maxWidth, isChatLockedOpen };
        tmp = closure_2_10(ChannelScreenAnimatedFrameDefault, obj);
      }
      return tmp;
    }, items11);
    let tmp2Result = tmp2(tmp3[21]);
    let num3 = 0;
    if (translateX.get() > 0) {
      num3 = -1;
    }
    const sharedValue = tmp2Result.useSharedValue(num3);
    tmp2Result = tmp2(tmp3[21]);
    function re() {
      let opacity = 0;
      if (translateX.get() > 0) {
        opacity = 0;
        if (sharedValue.get() < 1) {
          opacity = 1;
        }
      }
      return { opacity };
    }
    obj1 = { translateX, highestFullyRenderedScreenIndex: sharedValue };
    re.__closure = obj1;
    re.__workletHash = 10839500061449;
    re.__initData = isChatBesideChannelList;
    const animatedStyle = tmp2Result.useAnimatedStyle(re);
    const tmp43 = tmp5(tmp3[22])("channel_list_scrim");
    const isCustomThemeActive = tmp2(tmp3[23]).useIsCustomThemeActive();
    obj2 = { value: panelGestureContext, children: null };
    let obj3 = { gesture, children: null };
    const items12 = [tmp.container];
    let containerBackground = !isCustomThemeActive;
    if (!isCustomThemeActive) {
      containerBackground = tmp.containerBackground;
    }
    const obj4 = { style: null, collapsable: false, children: null };
    items12[1] = containerBackground;
    obj4.style = items12;
    const obj5 = { enabled: isChatBesideChannelList, children: null };
    const obj6 = { style: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    const items13 = [tmp.tabsContainer, animatedStyle];
    obj6.style = items13;
    obj6.accessibilityElementsHidden = !tmp38;
    obj6.importantForAccessibility = "no-hide-descendants";
    const items14 = [handleExit(tmp5(tmp3[27]), {})];
    let tmp45Result;
    if (tmp43) {
      const obj7 = { translateX, maxWidth };
      tmp45Result = tmp45(tmp2(tmp3[28]).MainTabsContentScrim, obj7);
    }
    items14[1] = tmp45Result;
    obj6.children = items14;
    const items15 = [first2(tmp5(tmp3[21]).View, obj6), handleExit(tmp5(tmp3[29]), {})];
    if (arr2.length > 0) {
      const obj8 = {
        screens: arr2,
        screenStackActive: null,
        translateX: null,
        isDragging: null,
        maxWidth: null,
        highestFullyRenderedScreenIndex: null,
        shouldFreeze: null,
        focusChatPressableComponent: null,
        firstScreenWidth: null,
        firstScreenFrame: null,
      };
      tmp5Result = tmp5(tmp3[30]);
      if (!screenStackActive) {
        let tmp52 = isChatBesideChannelList;
        if (isChatBesideChannelList) {
          tmp52 = isChatLockedOpen;
        }
        screenStackActive = tmp52;
      }
      obj8.screenStackActive = screenStackActive;
      obj8.translateX = translateX;
      obj8.isDragging = isDragging;
      obj8.maxWidth = maxWidth;
      obj8.highestFullyRenderedScreenIndex = sharedValue;
      obj8.shouldFreeze = !isChatBesideChannelList;
      obj8.focusChatPressableComponent = tmp37;
      let tmp53;
      if (isChatBesideChannelList) {
        if (isChatLockedOpen) {
          tmp53 = tmp8;
        }
      }
      obj8.firstScreenWidth = tmp53;
      obj8.firstScreenFrame = memo;
      tmp45Result = tmp45(tmp5Result, obj8);
    } else {
      tmp45Result = null;
      if (isChatBesideChannelList) {
        tmp45Result = null;
        if (isChatLockedOpen) {
          tmp45Result = tmp45(tmp5(tmp3[31]), {});
        }
      }
    }
    items15[2] = tmp45Result;
    obj5.children = items15;
    obj4.children = first2(tmp2(tmp3[26]).SidebarCoachmarkOverlay, obj5);
    obj3.children = handleExit(arr2, obj4);
    obj2.children = handleExit(tmp2(tmp3[25]).GestureDetector, obj3);
    return handleExit(tmp5(tmp3[24]).Provider, obj2);
  }
  tmp38 = !screenStackActive;
});
