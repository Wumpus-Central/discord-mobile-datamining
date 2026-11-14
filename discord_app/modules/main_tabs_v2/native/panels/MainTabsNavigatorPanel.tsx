// === Module 18714: MainTabsNavigatorPanel ===

// Module 18714 (MainTabsNavigatorPanel)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 575 */;
import RootNavigationRef from "RootNavigationRef" /* 5493 */;
import ChatInputUtils from "ChatInputUtils" /* 5501 */;
import transitionToChannel from "transitionToChannel" /* 6063 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 8134 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 18715 */;
import PanelsNavigationUtils from "PanelsNavigationUtils" /* 18716 */;
import ChannelScreenAnimatedFrameDefault from "ChannelScreenAnimatedFrame" /* 18721 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: closure_6, Pressable: metroImportDefault } = get_ActivityIndicator);
const Constants = fn(1072);
({ ComponentActions: closure_8, ME: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = new LoggerDefault("MainTabsNavigatorPanel");
const createStyles = fn(5306);
let obj = { container: { flex: 1 }, containerBackground: null, tabsContainer: null };
const tmp5 = new LoggerDefault("MainTabsNavigatorPanel");
obj.containerBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.tabsContainer = { flex: 1 };
let closure_13 = createStyles.createStyles(obj);
let closure_14 = { code: "(function MainTabsNavigatorPanelTsx1(){let[translateX,highestFullyRenderedScreenIndex]=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};})" };
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
  c11 = undefined;
  let logger;
  closure_13 = undefined;
  let panelGestureContext;
  let translateX;
  let movePanel;
  let maxWidth;
  let isDraggingRef;
  let obj5;
  let callback4;
  let tmp = closure_13();
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
        obj = obj(18716);
        result = obj.convertPortraitToLandscapeScreens();
      } else {
        obj(5501).dismissKeyboard();
        const objResult = obj(5501);
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
  closure_129_0 = navigation;
  closure_129_2 = undefined;
  closure_129_3 = undefined;
  [first3, closure_129_2] = noop.useState(() => useChannelScreensFromNavigation.isActiveTabsGuilds(_undefined.getState()));
  closure_129_1 = first3;
  const tmp8 = require("useChatWidth")();
  [tmp24, closure_129_3] = noop.useState(() => c1);
  const items3 = [navigation];
  const effect1 = obj3.useEffect(() => {
    const rootNavigationRef = _undefined(drawerWidth[9]).getRootNavigationRef();
    current = undefined;
    if (rootNavigationRef != null) {
      current = rootNavigationRef.current;
    }
    function handleStateChange() {
      addListenerResult1(state(drawerWidth[8]).isActiveTabsGuilds(state.getState()));
    }
    _undefined = _undefined.addListener("state", handleStateChange);
    let addListenerResult;
    if (current != null) {
      addListenerResult = current.addListener("state", handleStateChange);
    }
    c1 = addListenerResult;
    let addListenerResult1;
    if (current != null) {
      addListenerResult1 = current.addListener("ready", handleStateChange);
    }
    const obj = _undefined(drawerWidth[9]);
    const obj2 = _undefined;
    addListenerResult1(_undefined(drawerWidth[8]).isActiveTabsGuilds(obj2.getState()));
    return () => {
      state();
      if (addListenerResult != null) {
        addListenerResult();
      }
      if (addListenerResult1 != null) {
        addListenerResult1();
      }
    };
  }, items3);
  const items4 = [first3];
  const effect2 = obj3.useEffect(() => {
    ref(c1);
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
  c11 = tmp29;
  logger = obj3.useRef(false);
  const items5 = [navigation, handleExit];
  const callback1 = obj3.useCallback((arg0) => {
    closure_6(arg0);
    closure_7(arg0);
    closure_12.current = false;
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
    _undefined(drawerWidth[16]).dismissKeyboard();
  }, []);
  if (tmp34) {
    tmp34 = first2.type !== tmp2(tmp3[8]).ChannelScreenType.FALLBACK_RENDERED;
  }
  closure_13 = tmp34;
  let tmp36 = tmp29;
  const tmp23 = _slicedToArray(noop.useState(() => c1), 2);
  if (tmp29) {
    tmp36 = isChatLockedOpen;
  }
  let tmp37 = !tmp36;
  if (!tmp36) {
    tmp37 = tmp34;
  }
  const obj4 = { canDrag: tmp37, onVisibilityChange: callback1, onPreMovement: callback2, onDragStart: callback3, startShown: null, openWidth: null, foldSeam: null };
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
  panelGestureContext = tmp5ResultResult.panelGestureContext;
  translateX = tmp5ResultResult.translateX;
  movePanel = tmp5ResultResult.movePanel;
  maxWidth = tmp5ResultResult.maxWidth;
  isDraggingRef = tmp5ResultResult.isDraggingRef;
  const items6 = [tmp29, drawerWidth];
  ({ gesture, isDragging } = tmp5ResultResult);
  const effect3 = obj3.useEffect(() => {
    logger.log("Chat Layout Changed", { isNavigatorPanelsBesideChannelList, drawerWidth });
  }, items6);
  const items7 = [panelGestureContext, tmp29];
  obj5 = { handleExit, maxWidth, movePanel, screens: arr2, firstScreen: first2 };
  const memo = obj3.useMemo(() => {
    const obj = {};
    const merged = Object.assign(panelGestureContext);
    obj.isNavigatorPanelsBesideChannelList = isNavigatorPanelsBesideChannelList;
    return obj;
  }, items7);
  noop.useRef(obj5);
  const effect4 = obj3.useEffect(() => {
    closure_20.current = obj5;
  });
  let type2;
  if (first2 != null) {
    type2 = first2.type;
  }
  const items8 = [type2, translateX, isDraggingRef];
  const effect5 = obj3.useEffect(() => {
    if (!isDraggingRef.current) {
      current = ref3.current;
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
        if (logger.current) {
          logger.current = false;
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
  }, items8);
  let channelId;
  if (first2 != null) {
    channelId = first2.channelId;
  }
  const items9 = [channelId];
  const effect6 = obj3.useEffect(() => {
    const firstScreen = ref3.current.firstScreen;
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
  }, items9);
  const items10 = [movePanel, tmp34];
  callback4 = obj3.useCallback(() => {
    if (closure_13) {
      movePanel(true, false, 0, false);
    }
  }, items10);
  const items11 = [callback4, first1, isChatLockedOpen, tmp29];
  if (tmp29) {
    if (isChatLockedOpen) {
      let tmp51 = arr2.length <= 1;
    }
    if (!first1) {
      let tmp52 = isChatBesideChannelList;
      if (isChatBesideChannelList) {
        tmp52 = isChatLockedOpen;
      }
      first1 = tmp52;
    }
    const items12 = [isChatLockedOpen, tmp29, maxWidth, translateX];
    const memo1 = obj3.useMemo(() => {
      let tmp = null;
      if (c11) {
        const obj = { translateX, maxWidth, isChatLockedOpen };
        tmp = refs(ChannelScreenAnimatedFrameDefault, obj);
      }
      return tmp;
    }, items12);
    let num3 = 0;
    if (translateX.get() > 0) {
      num3 = -1;
    }
    const sharedValue = tmp2(tmp3[23]).useSharedValue(num3);
    const tmp2Result5 = tmp2(tmp3[23]);
    const items13 = [panelGestureContext, translateX, sharedValue];
    _require = undefined;
    importDefault = undefined;
    [tmp57, tmp58, tmp59] = items13;
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
    const items14 = [tmp58, tmp59];
    MainTabsNavigatorPanelTsx1.__closure = items14;
    MainTabsNavigatorPanelTsx1.__workletHash = 9133325578128;
    MainTabsNavigatorPanelTsx1.__initData = tmp57;
    const animatedStyle = tmp2(tmp3[23]).useAnimatedStyle(MainTabsNavigatorPanelTsx1);
    const tmp2Result6 = tmp2(tmp3[23]);
    const tmp61 = tmp5(tmp3[24])("channel_list_scrim");
    const isCustomThemeActive = tmp2(tmp3[25]).useIsCustomThemeActive();
    const obj6 = { value: memo, children: null };
    const tmp2Result7 = tmp2(tmp3[25]);
    let tmp65Result = null;
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
      tmp65Result = handleExit(tmp5(tmp3[28]), obj7);
      const tmp5Result3 = tmp5(tmp3[28]);
    }
    const items15 = [tmp65Result, ];
    const obj8 = { gesture, children: null };
    const items16 = [tmp.container, ];
    let containerBackground = !isCustomThemeActive;
    if (!isCustomThemeActive) {
      containerBackground = tmp.containerBackground;
    }
    const obj9 = { style: null, collapsable: false, children: null };
    items16[1] = containerBackground;
    obj9.style = items16;
    const obj10 = { enabled: isChatBesideChannelList, children: null };
    const obj11 = { style: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    const items17 = [tmp.tabsContainer, animatedStyle];
    obj11.style = items17;
    obj11.accessibilityElementsHidden = !tmp51;
    obj11.importantForAccessibility = "no-hide-descendants";
    const items18 = [handleExit(tmp5(tmp3[31]), {}), ];
    let tmp68Result;
    if (tmp61) {
      const obj12 = { translateX, maxWidth };
      tmp68Result = tmp68(tmp2(tmp3[32]).MainTabsContentScrim, obj12);
    }
    items18[1] = tmp68Result;
    obj11.children = items18;
    const items19 = [c11(tmp5(tmp3[23]).View, obj11), , , ];
    let tmp68Result3 = null;
    if (flag) {
      tmp68Result3 = tmp68(tmp5(tmp3[33]), {});
    }
    items19[1] = tmp68Result3;
    if (arr2.length > 0) {
      const obj13 = { screens: arr2, screenStackActive: first1, screenStackVisible: null, navigationTTIStackVisible: null, translateX: null, isDragging: null, maxWidth: null, highestFullyRenderedScreenIndex: null, shouldFreeze: null, focusChatPressableComponent: null, firstScreenWidth: null, firstScreenFrame: null };
      let tmp75 = first1;
      if (!first1) {
        tmp75 = tmp29;
      }
      obj13.screenStackVisible = tmp75;
      if (!first1) {
        first1 = tmp17[0];
      }
      obj13.navigationTTIStackVisible = first1;
      obj13.translateX = translateX;
      obj13.isDragging = isDragging;
      obj13.maxWidth = maxWidth;
      obj13.highestFullyRenderedScreenIndex = sharedValue;
      obj13.shouldFreeze = !tmp29;
      obj13.focusChatPressableComponent = tmp50;
      let tmp76;
      if (tmp29) {
        if (isChatLockedOpen) {
          tmp76 = tmp8;
        }
      }
      obj13.firstScreenWidth = tmp76;
      obj13.firstScreenFrame = memo1;
      let tmp68Result4 = tmp68(tmp5(tmp3[34]), obj13);
      const tmp5Result4 = tmp5(tmp3[34]);
    } else {
      tmp68Result4 = null;
      if (tmp29) {
        tmp68Result4 = null;
        if (isChatLockedOpen) {
          const obj14 = { children: tmp68(tmp5(tmp3[35]), {}) };
          tmp68Result4 = tmp68(tmp2(tmp3[17]).BackgroundChatPortal, obj14);
        }
      }
    }
    items19[2] = tmp68Result4;
    items19[3] = handleExit(tmp5(tmp3[36]), { placement: "main-tabs" });
    obj10.children = items19;
    obj9.children = c11(tmp2(tmp3[30]).SidebarCoachmarkOverlay, obj10);
    obj8.children = handleExit(first1, obj9);
    items15[1] = handleExit(tmp2(tmp3[29]).GestureDetector, obj8);
    obj6.children = items15;
    return c11(tmp5(tmp3[26]).Provider, obj6);
  }
  tmp51 = !first1;
  const tmp5Result = require("useMainTabsPanelsGesture");
});