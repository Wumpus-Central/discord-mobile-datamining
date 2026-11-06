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

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: closure_6, Pressable: metroImportDefault } = get_ActivityIndicator);
const Constants = fn(1072);
({ ComponentActions: closure_8, ME: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = new LoggerDefault("MainTabsNavigatorPanel");
const createStyles = fn(5170);
let obj = { container: { flex: 1 }, containerBackground: null, tabsContainer: null };
const tmp5 = new LoggerDefault("MainTabsNavigatorPanel");
obj.containerBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.tabsContainer = { flex: 1 };
let closure_13 = createStyles.createStyles(obj);
let closure_14 = {
  code: "(function MainTabsNavigatorPanelTsx1(){let[translateX,highestFullyRenderedScreenIndex]=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};})",
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx");

export default noop.memo(function MainTabsNavigatorPanel(showHeaderGradient) {
  let flag = showHeaderGradient.showHeaderGradient;
  if (flag === undefined) {
    flag = true;
  }
  _require = undefined;
  importDefault = undefined;
  let drawerWidth;
  _slicedToArray = undefined;
  noop = undefined;
  first1 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  let first2;
  let handleExit;
  first3 = undefined;
  logger = undefined;
  c13 = undefined;
  c14 = undefined;
  closure_16 = undefined;
  let translateX;
  let movePanel;
  let maxWidth;
  let isDraggingRef;
  let obj5;
  let callback4;
  let tmp = c13();
  const navigation = require("Link").useNavigation();
  _require = navigation;
  let obj = require("Link");
  ({ isChatBesideChannelList, isChatLockedOpen } = require("useChatLayout")());
  importDefault = isChatLockedOpen;
  let tmp6 = require("useChatLayout")();
  drawerWidth = require("useDrawerWidth").useDrawerWidth();
  let obj2 = require("useDrawerWidth");
  const tmp9 = require("useFoldSeam")();
  let seam;
  if (tmp9 != null) {
    seam = tmp9.seam;
  }
  if (seam == null) {
    seam = null;
  }
  _slicedToArray = noop.useRef(isChatLockedOpen);
  noop = noop.useRef(false);
  items = [isChatLockedOpen];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (ref.current !== current) {
      tmp.current = current;
      let obj = require;
      let result = dependencyMap;
      if (current) {
        obj = obj(18330);
        result = obj.convertPortraitToLandscapeScreens();
      } else {
        obj(5353).dismissKeyboard();
        const objResult = obj(5353);
        const result1 = PanelsNavigationUtils.convertLandscapeToPortraitScreens();
      }
      closure_4.current = true;
    }
  }, items);
  const arr2 = require("useChannelScreensFromNavigation")(navigation);
  const first = arr2[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const tmp14 = type === require("useChannelScreensFromNavigation").ChannelScreenType.DEFAULT;
  [first1, closure_6] = noop.useState(tmp14);
  const tmp17 = _slicedToArray(noop.useState(tmp14), 2);
  closure_7 = tmp17[1];
  first2 = arr2[0];
  noop.useRef(first2);
  const items1 = [first2];
  const effect = obj3.useEffect(() => {
    closure_9.current = first2;
  }, items1);
  const items2 = [navigation];
  handleExit = obj3.useCallback(() => {
    let name1;
    closure_6(false);
    state = _undefined.getState();
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
      _undefined.pop(num2);
    }
  }, items2);
  [first3, logger] = noop.useState(() => useChannelScreensFromNavigation.isActiveTabsGuilds(_undefined.getState()));
  const tmp8 = require("useChatWidth")();
  [tmp24, c13] = noop.useState(() => first3);
  const items3 = [navigation];
  const effect1 = obj3.useEffect(() => {
    function handleStateChange(data) {
      logger(handleStateChange(drawerWidth[15]).isActiveTabsGuilds(data.data.state));
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      handleStateChange.removeListener("state", handleStateChange);
    };
  }, items3);
  const items4 = [first3];
  const effect2 = obj3.useEffect(() => {
    _undefined2(first3);
  }, items4);
  require("MainTabsBackgroundChat");
  let tmp29 = isChatBesideChannelList;
  if (isChatBesideChannelList) {
    let tmp30 = isChatBesideChannelList;
    if (!isChatBesideChannelList) {
      tmp30 = tmp28;
    }
    tmp29 = tmp30;
  }
  c14 = tmp29;
  noop.useRef(false);
  const items5 = [navigation, handleExit];
  const callback1 = obj3.useCallback((arg0) => {
    closure_6(arg0);
    closure_7(arg0);
    closure_15.current = false;
    if (arg0) {
      if (null != ref2.current) {
        if ("channel" !== _undefined.getState().routes[_undefined.getState(_undefined).index].name) {
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          let name;
          if (rootNavigationRef != null) {
            state = rootNavigationRef.getState();
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
  let tmp34 = null != first2;
  const callback3 = obj3.useCallback(() => {
    const ComponentDispatch = _undefined(drawerWidth[19]).ComponentDispatch;
    ComponentDispatch.dispatch(first2.BOTTOM_CHANNEL_SCREEN_DRAG_START);
    _undefined(drawerWidth[14]).dismissKeyboard();
  }, []);
  if (tmp34) {
    tmp34 = first2.type !== tmp2(tmp3[15]).ChannelScreenType.FALLBACK_RENDERED;
  }
  closure_16 = tmp34;
  let tmp36 = tmp29;
  const tmp23 = _slicedToArray(
    noop.useState(() => first3),
    2,
  );
  if (tmp29) {
    tmp36 = isChatLockedOpen;
  }
  let tmp37 = !tmp36;
  if (!tmp36) {
    tmp37 = tmp34;
  }
  const obj4 = {
    canDrag: tmp37,
    onVisibilityChange: callback1,
    onPreMovement: callback2,
    onDragStart: callback3,
    startShown: null,
    openWidth: null,
    foldSeam: null,
  };
  const first4 = arr2[0];
  let type1;
  if (first4 != null) {
    type1 = first4.type;
  }
  obj4.startShown = type1 === require("useChannelScreensFromNavigation").ChannelScreenType.DEFAULT;
  let tmp40;
  if (tmp29) {
    tmp40 = drawerWidth;
  }
  obj4.openWidth = tmp40;
  obj4.foldSeam = seam;
  const tmp5ResultResult = require("useMainTabsPanelsGesture")(obj4);
  translateX = tmp5ResultResult.translateX;
  movePanel = tmp5ResultResult.movePanel;
  maxWidth = tmp5ResultResult.maxWidth;
  isDraggingRef = tmp5ResultResult.isDraggingRef;
  const items6 = [tmp29, drawerWidth];
  ({ gesture, panelGestureContext, isDragging } = tmp5ResultResult);
  const effect3 = obj3.useEffect(() => {
    logger.log("Chat Layout Changed", { isNavigatorPanelsBesideChannelList, drawerWidth });
  }, items6);
  obj5 = { handleExit, maxWidth, movePanel, screens: arr2, firstScreen: first2 };
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
      current = ref4.current;
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
        guildId = React6;
      }
      ChannelActionCreatorsDefault.preload(guildId, firstScreen.channelId);
    }
  }, items8);
  const items9 = [movePanel, tmp34];
  callback4 = obj3.useCallback(() => {
    if (closure_16) {
      movePanel(true, false, 0, false);
    }
  }, items9);
  const items10 = [callback4, first1, isChatLockedOpen, tmp29];
  if (tmp29) {
    if (isChatLockedOpen) {
      let tmp50 = arr2.length <= 1;
    }
    if (!first1) {
      let tmp51 = isChatBesideChannelList;
      if (isChatBesideChannelList) {
        tmp51 = isChatLockedOpen;
      }
      first1 = tmp51;
    }
    const items11 = [isChatLockedOpen, tmp29, maxWidth, translateX];
    const memo = obj3.useMemo(() => {
      let tmp = null;
      if (c14) {
        const obj = { translateX, maxWidth, isChatLockedOpen };
        tmp = closure_2_10(ChannelScreenAnimatedFrameDefault, obj);
      }
      return tmp;
    }, items11);
    let num3 = 0;
    if (translateX.get() > 0) {
      num3 = -1;
    }
    const sharedValue = tmp2(tmp3[23]).useSharedValue(num3);
    const tmp2Result5 = tmp2(tmp3[23]);
    const items12 = [c14, translateX, sharedValue];
    _require = undefined;
    importDefault = undefined;
    [tmp56, tmp57, tmp58] = items12;
    class MainTabsNavigatorPanelTsx1 {
      constructor() {
        opacity = 0;
        if (closure_0.get() > 0) {
          tmp = closure_1;
          num2 = 1;
          opacity = 0;
          if (closure_1.get() < 1) {
            opacity = 1;
          }
        }
        return { opacity };
      }
    }
    const items13 = [tmp57, tmp58];
    MainTabsNavigatorPanelTsx1.__closure = items13;
    MainTabsNavigatorPanelTsx1.__workletHash = 9133325578128;
    MainTabsNavigatorPanelTsx1.__initData = tmp56;
    const animatedStyle = tmp2(tmp3[23]).useAnimatedStyle(MainTabsNavigatorPanelTsx1);
    const tmp2Result6 = tmp2(tmp3[23]);
    const tmp60 = tmp5(tmp3[24])("channel_list_scrim");
    const isCustomThemeActive = tmp2(tmp3[25]).useIsCustomThemeActive();
    const obj6 = { value: panelGestureContext, children: null };
    const tmp2Result7 = tmp2(tmp3[25]);
    let tmp64Result = null;
    if (tmp2Result8.isJankScreenReportingEnabled()) {
      const obj7 = { translateX, maxWidth, channelId: null, showCreateThread: null };
      let channelId1;
      if (first2 != null) {
        channelId1 = first2.channelId;
      }
      obj7.channelId = channelId1;
      let flag2;
      if (first2 != null) {
        flag2 = first2.showCreateThread;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      obj7.showCreateThread = flag2;
      tmp64Result = handleExit(tmp5(tmp3[28]), obj7);
      const tmp5Result3 = tmp5(tmp3[28]);
    }
    const items14 = [tmp64Result];
    const obj8 = { gesture, children: null };
    const items15 = [tmp.container];
    let containerBackground = !isCustomThemeActive;
    if (!isCustomThemeActive) {
      containerBackground = tmp.containerBackground;
    }
    const obj9 = { style: null, collapsable: false, children: null };
    items15[1] = containerBackground;
    obj9.style = items15;
    const obj10 = { enabled: isChatBesideChannelList, children: null };
    const obj11 = { style: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    const items16 = [tmp.tabsContainer, animatedStyle];
    obj11.style = items16;
    obj11.accessibilityElementsHidden = !tmp50;
    obj11.importantForAccessibility = "no-hide-descendants";
    const items17 = [handleExit(tmp5(tmp3[31]), {})];
    let tmp67Result;
    if (tmp60) {
      const obj12 = { translateX, maxWidth };
      tmp67Result = tmp67(tmp2(tmp3[32]).MainTabsContentScrim, obj12);
    }
    items17[1] = tmp67Result;
    obj11.children = items17;
    const items18 = [first3(tmp5(tmp3[23]).View, obj11), ,];
    let tmp67Result3 = null;
    if (flag) {
      tmp67Result3 = tmp67(tmp5(tmp3[33]), {});
    }
    items18[1] = tmp67Result3;
    if (arr2.length > 0) {
      const obj13 = {
        screens: arr2,
        screenStackActive: first1,
        screenStackVisible: null,
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
      let tmp74 = first1;
      if (!first1) {
        tmp74 = tmp29;
      }
      obj13.screenStackVisible = tmp74;
      if (!first1) {
        first1 = tmp17[0];
      }
      obj13.navigationTTIStackVisible = first1;
      obj13.translateX = translateX;
      obj13.isDragging = isDragging;
      obj13.maxWidth = maxWidth;
      obj13.highestFullyRenderedScreenIndex = sharedValue;
      obj13.shouldFreeze = !tmp29;
      obj13.focusChatPressableComponent = tmp49;
      let tmp75;
      if (tmp29) {
        if (isChatLockedOpen) {
          tmp75 = tmp8;
        }
      }
      obj13.firstScreenWidth = tmp75;
      obj13.firstScreenFrame = memo;
      let tmp67Result4 = tmp67(tmp5(tmp3[34]), obj13);
      const tmp5Result4 = tmp5(tmp3[34]);
    } else {
      tmp67Result4 = null;
      if (tmp29) {
        tmp67Result4 = null;
        if (isChatLockedOpen) {
          const obj14 = { children: tmp67(tmp5(tmp3[35]), {}) };
          tmp67Result4 = tmp67(tmp2(tmp3[16]).BackgroundChatPortal, obj14);
        }
      }
    }
    items18[2] = tmp67Result4;
    obj10.children = items18;
    obj9.children = first3(tmp2(tmp3[30]).SidebarCoachmarkOverlay, obj10);
    obj8.children = handleExit(first1, obj9);
    items14[1] = handleExit(tmp2(tmp3[29]).GestureDetector, obj8);
    obj6.children = items14;
    return first3(tmp5(tmp3[26]).Provider, obj6);
  }
  tmp50 = !first1;
  const tmp5Result = require("useMainTabsPanelsGesture");
});
