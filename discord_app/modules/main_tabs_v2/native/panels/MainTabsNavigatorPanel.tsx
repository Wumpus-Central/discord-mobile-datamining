// === Module 16003: ? ===

// Module 16003
import timestampDefault from "timestamp" /* 3 */;
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let c4 = importAllResult;
({ View: c5, StyleSheet: closure_6, Pressable: error } = get_ActivityIndicator);
({ ComponentActions: closure_8, ME: c9 } = ME);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = new timestampDefault("MainTabsNavigatorPanel");
let obj = { container: { flex: 1 }, containerBackground: null, tabsContainer: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
obj[1] = obj;
obj[2] = { flex: 1 };
let closure_13 = createCacheKey.createStyles(obj);
let closure_14 = { code: "function MainTabsNavigatorPanelTsx1(){const{translateX,highestFullyRenderedScreenIndex}=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};}" };
let tmp5 = new timestampDefault("MainTabsNavigatorPanel");
const memoResult = importAllResult.memo(function MainTabsNavigatorPanel() {
  let tmp = callback2();
  let obj = navigation(drawerWidth[8]);
  navigation = obj.useNavigation();
  let tmp6 = isChatLockedOpen(drawerWidth[9])();
  isChatLockedOpen = tmp6.isChatLockedOpen;
  obj1 = navigation(drawerWidth[10]);
  drawerWidth = obj1.useDrawerWidth();
  let obj2 = importAllResult;
  let callback = importAllResult.useRef(isChatLockedOpen);
  importAllResult = importAllResult.useRef(false);
  const items = [isChatLockedOpen];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (ref.current !== isChatLockedOpen) {
      tmp.current = tmp2;
      obj = navigation;
      let result = drawerWidth;
      if (tmp2) {
        obj = obj(result[12]);
        result = obj.convertPortraitToLandscapeScreens();
      } else {
        obj(result[13]).dismissKeyboard();
        const objResult = obj(result[13]);
        const result1 = navigation(drawerWidth[12]).convertLandscapeToPortraitScreens();
        const obj3 = navigation(drawerWidth[12]);
      }
      closure_4.current = true;
    }
  }, items);
  const arr2 = isChatLockedOpen(drawerWidth[14])(navigation);
  const tmp10 = callback(importAllResult.useState(() => {
    first = arr2[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    return type === navigation(drawerWidth[14]).ChannelScreenType.DEFAULT;
  }), 2);
  let first = tmp10[0];
  closure_7 = tmp10[1];
  const first1 = arr2[0];
  closure_9 = importAllResult.useRef(first1);
  const items1 = [first1];
  const effect = importAllResult.useEffect(() => {
    closure_9.current = first1;
  }, items1);
  const items2 = [navigation];
  callback = importAllResult.useCallback(() => {
    let name1;
    callback(false);
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
        let tmp7 = num;
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
  let tmp15 = callback(importAllResult.useState(() => navigation(drawerWidth[14]).isActiveTabsGuilds(navigation.getState())), 2);
  const first2 = tmp15[0];
  closure_12 = tmp15[1];
  const tmp8 = isChatLockedOpen(drawerWidth[11])();
  [isChatBesideChannelList, closure_13] = callback(importAllResult.useState(() => first2), 2);
  const items3 = [navigation];
  const effect1 = importAllResult.useEffect(() => {
    function handleStateChange(data) {
      callback(handleStateChange(closure_1_2[14]).isActiveTabsGuilds(data.data.state));
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      handleStateChange.removeListener("state", handleStateChange);
    };
  }, items3);
  const items4 = [first2];
  const effect2 = importAllResult.useEffect(() => {
    callback2(first2);
  }, items4);
  if (isChatBesideChannelList) {
    isChatBesideChannelList = tmp6.isChatBesideChannelList;
  }
  closure_15 = obj2.useRef(false);
  const items5 = [navigation, callback];
  const callback1 = obj2.useCallback((arg0) => {
    callback(arg0);
    closure_15.current = false;
    if (arg0) {
      if (null != ref2.current) {
        if ("channel" !== navigation.getState().routes[navigation.getState(navigation).index].name) {
          const rootNavigationRef = navigation(drawerWidth[15]).getRootNavigationRef();
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
            tmp14(tmp15[16]).transitionToChannel(tmp5.current.channelId);
            const tmp14Result = tmp14(tmp15[16]);
          }
          const obj2 = navigation(drawerWidth[15]);
          tmp14 = navigation;
          tmp15 = drawerWidth;
        }
      }
    } else {
      callback();
    }
  }, items5);
  let tmp22 = null != first1;
  callback2 = obj2.useCallback(() => {
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
  obj = { canDrag: tmp25, onVisibilityChange: callback1, onDragStart: callback2, startShown: null, openWidth: null };
  const first3 = arr2[0];
  let type;
  if (first3 != null) {
    type = first3.type;
  }
  obj[3] = type === navigation(drawerWidth[14]).ChannelScreenType.DEFAULT;
  let tmp28;
  if (isChatBesideChannelList) {
    tmp28 = drawerWidth;
  }
  obj[4] = tmp28;
  const tmp5ResultResult = tmp5Result(obj);
  const translateX = tmp5ResultResult.translateX;
  const movePanel = tmp5ResultResult.movePanel;
  const maxWidth = tmp5ResultResult.maxWidth;
  const isDraggingRef = tmp5ResultResult.isDraggingRef;
  const items6 = [isChatBesideChannelList, drawerWidth];
  ({ gesture, panelGestureContext, isDragging } = tmp5ResultResult);
  const effect3 = obj2.useEffect(() => {
    logger.log("Chat Layout Changed", { isNavigatorPanelsBesideChannelList: isChatBesideChannelList, drawerWidth });
  }, items6);
  obj = { handleExit: callback, maxWidth, movePanel, screens: arr2, firstScreen: first1 };
  closure_22 = obj2.useRef(obj);
  const effect4 = obj2.useEffect(() => {
    closure_22.current = obj;
  });
  let type1;
  if (first1 != null) {
    type1 = first1.type;
  }
  const items7 = [type1, translateX, isDraggingRef];
  const effect5 = obj2.useEffect(() => {
    if (!isDraggingRef.current) {
      const current = ref4.current;
      ({ maxWidth, movePanel } = current);
      let type;
      ({ handleExit, screens } = current);
      if (first1 != null) {
        type = first1.type;
      }
      const tmp6 = type === navigation(drawerWidth[14]).ChannelScreenType.DEFAULT;
      if (screens.length >= 2) {
        let num4 = 0;
        if (!tmp6) {
          num4 = maxWidth;
        }
        const result = translateX.set(num4);
        callback(tmp6);
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
        tmp4(tmp5[13]).dismissKeyboard();
        const tmp4Result = tmp4(tmp5[13]);
      }
      tmp4 = navigation;
      tmp5 = drawerWidth;
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
    if (type === navigation(drawerWidth[14]).ChannelScreenType.BACKGROUND_SAVED) {
      let guildId = firstScreen.guildId;
      if (guildId == null) {
        guildId = closure_9;
      }
      isChatLockedOpen(drawerWidth[19]).preload(guildId, firstScreen.channelId);
      obj = isChatLockedOpen(drawerWidth[19]);
    }
  }, items8);
  const items9 = [movePanel, tmp22];
  const callback3 = obj2.useCallback(() => {
    if (closure_16) {
      movePanel(true, false, 0, false);
    }
  }, items9);
  const items10 = [callback3, first, isChatLockedOpen, isChatBesideChannelList];
  if (isChatBesideChannelList) {
    if (isChatLockedOpen) {
      let tmp38 = arr2.length <= 1;
    }
    const items11 = [isChatLockedOpen, isChatBesideChannelList, maxWidth, translateX];
    const memo = obj2.useMemo(() => {
      let tmp = null;
      if (isChatBesideChannelList) {
        obj = { translateX: null, maxWidth: null, isChatLockedOpen: null };
        obj[0] = translateX;
        obj[1] = maxWidth;
        obj[2] = isChatLockedOpen;
        tmp = callback(isChatLockedOpen(drawerWidth[20]), obj);
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
    obj1 = { translateX: null, highestFullyRenderedScreenIndex: null };
    obj1[0] = translateX;
    obj1[1] = sharedValue;
    re.__closure = obj1;
    re.__workletHash = 10839500061449;
    re.__initData = isChatBesideChannelList;
    const animatedStyle = tmp2Result.useAnimatedStyle(re);
    const tmp43 = tmp5(tmp3[22])("channel_list_scrim");
    const isCustomThemeActive = tmp2(tmp3[23]).useIsCustomThemeActive();
    obj2 = { value: null, children: null };
    obj2[0] = panelGestureContext;
    let obj3 = { gesture: null, children: null };
    obj3[0] = gesture;
    const items12 = [tmp.container, ];
    let containerBackground = !isCustomThemeActive;
    if (!isCustomThemeActive) {
      containerBackground = tmp.containerBackground;
    }
    const obj4 = { style: null, collapsable: false, children: null };
    items12[1] = containerBackground;
    obj4[0] = items12;
    const obj5 = { enabled: null, children: null };
    obj5[0] = isChatBesideChannelList;
    const obj6 = { style: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    const items13 = [tmp.tabsContainer, animatedStyle];
    obj6[0] = items13;
    obj6[1] = !tmp38;
    obj6[2] = "no-hide-descendants";
    const items14 = [callback(tmp5(tmp3[27]), {}), ];
    let tmp45Result;
    if (tmp43) {
      const obj7 = { translateX: null, maxWidth: null };
      obj7[0] = translateX;
      obj7[1] = maxWidth;
      tmp45Result = tmp45(tmp2(tmp3[28]).MainTabsContentScrim, obj7);
    }
    items14[1] = tmp45Result;
    obj6[3] = items14;
    const items15 = [first2(tmp5(tmp3[21]).View, obj6), callback(tmp5(tmp3[29]), {}), ];
    if (arr2.length > 0) {
      const obj8 = { screens: null, screenStackActive: null, translateX: null, isDragging: null, maxWidth: null, highestFullyRenderedScreenIndex: null, shouldFreeze: null, focusChatPressableComponent: null, firstScreenWidth: null, firstScreenFrame: null };
      obj8[0] = arr2;
      tmp5Result = tmp5(tmp3[30]);
      if (!first) {
        let tmp52 = isChatBesideChannelList;
        if (isChatBesideChannelList) {
          tmp52 = isChatLockedOpen;
        }
        first = tmp52;
      }
      obj8[1] = first;
      obj8[2] = translateX;
      obj8[3] = isDragging;
      obj8[4] = maxWidth;
      obj8[5] = sharedValue;
      obj8[6] = !isChatBesideChannelList;
      obj8[7] = tmp37;
      let tmp53;
      if (isChatBesideChannelList) {
        if (isChatLockedOpen) {
          tmp53 = tmp8;
        }
      }
      obj8[8] = tmp53;
      obj8[9] = memo;
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
    obj5[1] = items15;
    obj4[2] = first2(tmp2(tmp3[26]).SidebarCoachmarkOverlay, obj5);
    obj3[1] = callback(arr2, obj4);
    obj2[1] = callback(tmp2(tmp3[25]).GestureDetector, obj3);
    return callback(tmp5(tmp3[24]).Provider, obj2);
  }
  tmp38 = !first;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx");

export default memoResult;