// === Module 15925: MainTabsNavigatorPanel ===

// Module 15925 (MainTabsNavigatorPanel)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 587 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import ChatInputUtils from "ChatInputUtils" /* 4745 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import PanelsNavigationUtils from "PanelsNavigationUtils" /* 15926 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 15927 */;
import ChannelScreenAnimatedFrameDefault from "ChannelScreenAnimatedFrame" /* 15931 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let addListenerResult, current, navigation, set;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire, Pressable: metroImportDefault } = react_native);
({ ComponentActions: metroImportAll, ME: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const tmp5 = new LoggerDefault("MainTabsNavigatorPanel");
let closure_12 = tmp5;
let obj = { container: { flex: 1 }, containerBackground: obj2, tabsContainer: { flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_13 = createStyles.createStyles(obj);
let closure_14 = { code: "function MainTabsNavigatorPanelTsx1(){const{translateX,highestFullyRenderedScreenIndex}=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};}" };
let __initData = { code: "function MainTabsNavigatorPanelTsx2(){const{translateX,highestFullyRenderedScreenIndex}=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_11;
  let closure_4;
  let closure_5;
  let drawerWidth;
  let first2;
  let isChatLockedOpen;
  let isNavigatorPanelsBesideChannelList;
  let logger;
  let ref;
  let ref4;
  let ref5;
  let tmp10;
  let tmp11;
  let tmp22;
  let tmp31;
  let tmp33;
  let tmp35;
  let tmp36;
  let tmp = navigation;
  let obj = navigation(drawerWidth[9]);
  const cResult = obj.c(113);
  const tmp4 = isNavigatorPanelsBesideChannelList();
  let obj2 = navigation(drawerWidth[10]);
  navigation = obj2.useNavigation();
  let tmp6 = isChatLockedOpen;
  let tmp7 = isChatLockedOpen(drawerWidth[11])();
  isChatLockedOpen = tmp7.isChatLockedOpen;
  const obj3 = navigation(drawerWidth[12]);
  drawerWidth = obj3.useDrawerWidth();
  isChatLockedOpen(drawerWidth[13])();
  _slicedToArray = react.useRef(isChatLockedOpen);
  react = react.useRef(false);
  if (cResult[0] !== isChatLockedOpen) {
    const fn = function n() {
      if (ref.current !== isChatLockedOpen) {
        ref.current = isChatLockedOpen;
        if (isChatLockedOpen) {
          const tmp2Result = PanelsNavigationUtils;
          const result = tmp2Result.convertPortraitToLandscapeScreens();
        } else {
          const tmp2Result2 = ChatInputUtils;
          tmp2Result2.dismissKeyboard();
          const obj2 = PanelsNavigationUtils;
          const result1 = obj2.convertLandscapeToPortraitScreens();
        }
        closure_4.current = true;
      }
    };
    const items = [isChatLockedOpen];
    let num = 0;
    cResult[0] = isChatLockedOpen;
    let num2 = 1;
    cResult[1] = fn;
    cResult[2] = items;
    tmp11 = items;
    tmp10 = fn;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const layoutEffect = obj4.useLayoutEffect(tmp10, tmp11);
  const tmp13 = tmp6(drawerWidth[16])(navigation);
  const first = tmp13[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const tmp16 = type === tmp(drawerWidth[16]).ChannelScreenType.DEFAULT;
  [r10060, closure_5] = react.useState(tmp16);
  _slicedToArray(react.useState(tmp16), 2);
  let closure_6 = _slicedToArray(react.useState(tmp16), 2)[1];
  const first1 = tmp13[0];
  _slicedToArray(react.useState(tmp16), 2);
  const ref2 = obj4.useRef(first1);
  if (cResult[3] !== first1) {
    class I {
      constructor() {
        ref2.current = first1;
      }
    }
    const items1 = [first1];
    let num4 = 3;
    cResult[3] = first1;
    cResult[4] = I;
    cResult[5] = items1;
    tmp22 = items1;
  } else {
    class I {
      constructor() {
        ref2.current = first1;
      }
    }
    tmp22 = cResult[5];
  }
  const effect = obj4.useEffect(I, tmp22);
  if (cResult[6] !== navigation) {
    class F {
      constructor() {
        let name1;
        closure_5(false);
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
      }
    }
    cResult[6] = navigation;
    cResult[7] = F;
  } else {
    class F {
      constructor() {
        let name1;
        closure_5(false);
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
      }
    }
  }
  F = tmp24;
  if (cResult[8] !== navigation) {
    class H {
      constructor() {
        const obj = useChannelScreensFromNavigation;
        return obj.isActiveTabsGuilds(navigation.getState());
      }
    }
    cResult[8] = navigation;
    cResult[9] = H;
  } else {
    class H {
      constructor() {
        const obj = useChannelScreensFromNavigation;
        return obj.isActiveTabsGuilds(navigation.getState());
      }
    }
  }
  [first2, closure_11] = react.useState(H);
  if (cResult[10] !== first2) {
    class H {
      constructor() {
        const obj = useChannelScreensFromNavigation;
        return obj.isActiveTabsGuilds(navigation.getState());
      }
    }
    cResult[10] = first2;
    cResult[11] = tmp29;
  } else {
    class H {
      constructor() {
        const obj = useChannelScreensFromNavigation;
        return obj.isActiveTabsGuilds(navigation.getState());
      }
    }
  }
  [tmp31, closure_12] = react.useState(tmp29);
  _slicedToArray(react.useState(tmp29), 2);
  if (cResult[12] !== navigation) {
    class Z {
      constructor() {
        handleStateChange = function handleStateChange(data) {
          const obj = navigation(drawerWidth[16]);
          closure_1_11(obj.isActiveTabsGuilds(data.data.state));
        };
        addListenerResult = handleStateChange.addListener("state", handleStateChange);
        return () => {
          navigation.removeListener("state", handleStateChange);
        };
      }
    }
    const items2 = [navigation];
    cResult[12] = navigation;
    cResult[13] = Z;
    cResult[14] = items2;
    tmp33 = items2;
  } else {
    class Z {
      constructor() {
        handleStateChange = function handleStateChange(data) {
          const obj = navigation(drawerWidth[16]);
          closure_1_11(obj.isActiveTabsGuilds(data.data.state));
        };
        addListenerResult = handleStateChange.addListener("state", handleStateChange);
        return () => {
          navigation.removeListener("state", handleStateChange);
        };
      }
    }
    tmp33 = cResult[14];
  }
  const effect1 = obj4.useEffect(Z, tmp33);
  if (cResult[15] !== first2) {
    class Z {
      constructor() {
        handleStateChange = function handleStateChange(data) {
          const obj = navigation(drawerWidth[16]);
          closure_1_11(obj.isActiveTabsGuilds(data.data.state));
        };
        addListenerResult = handleStateChange.addListener("state", handleStateChange);
        return () => {
          navigation.removeListener("state", handleStateChange);
        };
      }
    }
    const items3 = [first2];
    cResult[15] = first2;
    cResult[16] = items3;
    cResult[17] = tmp37;
    tmp36 = tmp37;
    tmp35 = items3;
  } else {
    class Z {
      constructor() {
        handleStateChange = function handleStateChange(data) {
          const obj = navigation(drawerWidth[16]);
          closure_1_11(obj.isActiveTabsGuilds(data.data.state));
        };
        addListenerResult = handleStateChange.addListener("state", handleStateChange);
        return () => {
          navigation.removeListener("state", handleStateChange);
        };
      }
    }
    tmp36 = cResult[17];
  }
  const effect2 = obj4.useEffect(tmp36, tmp35);
  if (tmp31) {
    class Z {
      constructor() {
        handleStateChange = function handleStateChange(data) {
          const obj = navigation(drawerWidth[16]);
          closure_1_11(obj.isActiveTabsGuilds(data.data.state));
        };
        addListenerResult = handleStateChange.addListener("state", handleStateChange);
        return () => {
          navigation.removeListener("state", handleStateChange);
        };
      }
    }
  }
  isNavigatorPanelsBesideChannelList = tmp31;
  const ref3 = obj4.useRef(false);
  if (cResult[18] === tmp24) {
    class Z {
      constructor() {
        handleStateChange = function handleStateChange(data) {
          const obj = navigation(drawerWidth[16]);
          closure_1_11(obj.isActiveTabsGuilds(data.data.state));
        };
        addListenerResult = handleStateChange.addListener("state", handleStateChange);
        return () => {
          navigation.removeListener("state", handleStateChange);
        };
      }
    }
    const _Symbol = Symbol;
    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {
          handleStateChange = function handleStateChange(data) {
            const obj = navigation(drawerWidth[16]);
            closure_1_11(obj.isActiveTabsGuilds(data.data.state));
          };
          addListenerResult = handleStateChange.addListener("state", handleStateChange);
          return () => {
            navigation.removeListener("state", handleStateChange);
          };
        }
      }
      cResult[21] = tmp42;
    } else {
      class Z {
        constructor() {
          handleStateChange = function handleStateChange(data) {
            const obj = navigation(drawerWidth[16]);
            closure_1_11(obj.isActiveTabsGuilds(data.data.state));
          };
          addListenerResult = handleStateChange.addListener("state", handleStateChange);
          return () => {
            navigation.removeListener("state", handleStateChange);
          };
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {
          handleStateChange = function handleStateChange(data) {
            const obj = navigation(drawerWidth[16]);
            closure_1_11(obj.isActiveTabsGuilds(data.data.state));
          };
          addListenerResult = handleStateChange.addListener("state", handleStateChange);
          return () => {
            navigation.removeListener("state", handleStateChange);
          };
        }
      }
      cResult[22] = tmp44;
    } else {
      class Z {
        constructor() {
          handleStateChange = function handleStateChange(data) {
            const obj = navigation(drawerWidth[16]);
            closure_1_11(obj.isActiveTabsGuilds(data.data.state));
          };
          addListenerResult = handleStateChange.addListener("state", handleStateChange);
          return () => {
            navigation.removeListener("state", handleStateChange);
          };
        }
      }
    }
    let tmp45 = null != first1;
    if (tmp45) {
      class Z {
        constructor() {
          handleStateChange = function handleStateChange(data) {
            const obj = navigation(drawerWidth[16]);
            closure_1_11(obj.isActiveTabsGuilds(data.data.state));
          };
          addListenerResult = handleStateChange.addListener("state", handleStateChange);
          return () => {
            navigation.removeListener("state", handleStateChange);
          };
        }
      }
      tmp45 = tmp46 !== tmp(tmp2[16]).ChannelScreenType.FALLBACK_RENDERED;
    }
    let closure_15 = tmp45;
    if (tmp13[0] != null) {
      class Z {
        constructor() {
          handleStateChange = function handleStateChange(data) {
            const obj = navigation(drawerWidth[16]);
            closure_1_11(obj.isActiveTabsGuilds(data.data.state));
          };
          addListenerResult = handleStateChange.addListener("state", handleStateChange);
          return () => {
            navigation.removeListener("state", handleStateChange);
          };
        }
      }
    }
    const DEFAULT = tmp(tmp2[16]).ChannelScreenType.DEFAULT;
    if (tmp31) {
      class Z {
        constructor() {
          handleStateChange = function handleStateChange(data) {
            const obj = navigation(drawerWidth[16]);
            closure_1_11(obj.isActiveTabsGuilds(data.data.state));
          };
          addListenerResult = handleStateChange.addListener("state", handleStateChange);
          return () => {
            navigation.removeListener("state", handleStateChange);
          };
        }
      }
    }
    if (cResult[23] === tmp39) {
      class Z {
        constructor() {
          handleStateChange = function handleStateChange(data) {
            const obj = navigation(drawerWidth[16]);
            closure_1_11(obj.isActiveTabsGuilds(data.data.state));
          };
          addListenerResult = handleStateChange.addListener("state", handleStateChange);
          return () => {
            navigation.removeListener("state", handleStateChange);
          };
        }
      }
    }
    const obj5 = { canDrag: !(tmp31 && isChatLockedOpen) && tmp45, onVisibilityChange: tmp39, onPreMovement: tmp42, onDragStart: tmp44, startShown: undefined === DEFAULT, openWidth: undefined };
    cResult[23] = tmp39;
    cResult[24] = !(tmp31 && isChatLockedOpen) && tmp45;
    cResult[25] = undefined === DEFAULT;
    cResult[26] = undefined;
    cResult[27] = obj5;
  }
  function ie(arg0) {
    closure_5(arg0);
    closure_6(arg0);
    ref3.current = false;
    if (arg0) {
      if (null != ref2.current) {
        if ("channel" !== navigation.getState().routes[navigation.getState(navigation).index].name) {
          const obj2 = RootNavigationRef;
          const rootNavigationRef = obj2.getRootNavigationRef();
          let name;
          if (rootNavigationRef != null) {
            const state = rootNavigationRef.getState();
            if (state != null) {
              let index;
              const routes = state.routes;
              if (rootNavigationRef != null) {
                const state1 = rootNavigationRef.getState();
                if (state1 != null) {
                  index = state1.index;
                }
              }
              if (routes[index] != null) {
                name = tmp12.name;
              }
            }
          }
          if ("modal" !== name) {
            tmp3.current = true;
            const tmp15Result = transitionToChannel;
            tmp15Result.transitionToChannel(tmp6.current.channelId);
          }
        }
      }
    } else {
      F();
    }
  }
  cResult[18] = tmp24;
  cResult[19] = navigation;
  cResult[20] = ie;
}) : (() => {
  let SidebarCoachmarkOverlay;
  let channelId1;
  let closure_4;
  let closure_6;
  let closure_7;
  let drawerWidth;
  let first1;
  let first3;
  let first4;
  let flag;
  let gesture;
  let isChatLockedOpen;
  let isDragging;
  let items12;
  let items14;
  let items15;
  let items16;
  let logger;
  let obj10;
  let obj11;
  let panelGestureContext;
  let ref;
  let ref3;
  let tmp23;
  let tmp35;
  let tmp60;
  let tmp61;
  let tmp65;
  let type1;
  const f122020 = () => first4;
  let tmp = closure_13();
  const tmp3 = drawerWidth;
  let obj = navigation(drawerWidth[10]);
  navigation = obj.useNavigation();
  let tmp6 = isChatLockedOpen(drawerWidth[11])();
  isChatLockedOpen = tmp6.isChatLockedOpen;
  let isChatBesideChannelList = tmp6.isChatBesideChannelList;
  let obj2 = navigation(drawerWidth[12]);
  drawerWidth = obj2.useDrawerWidth();
  const tmp8 = isChatLockedOpen(drawerWidth[13])();
  _slicedToArray = react.useRef(isChatLockedOpen);
  react = react.useRef(false);
  const items = [isChatLockedOpen];
  const layoutEffect = react.useLayoutEffect(() => {
    if (ref.current !== isChatLockedOpen) {
      ref.current = isChatLockedOpen;
      if (isChatLockedOpen) {
        const tmp2Result = PanelsNavigationUtils;
        const result = tmp2Result.convertPortraitToLandscapeScreens();
      } else {
        const tmp2Result2 = ChatInputUtils;
        tmp2Result2.dismissKeyboard();
        const obj2 = PanelsNavigationUtils;
        const result1 = obj2.convertLandscapeToPortraitScreens();
      }
      closure_4.current = true;
    }
  }, items);
  const arr2 = isChatLockedOpen(drawerWidth[16])(navigation);
  const first = arr2[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const tmp12 = type === tmp2(tmp3[16]).ChannelScreenType.DEFAULT;
  [first1, closure_6] = react.useState(tmp12);
  [first3, closure_7] = react.useState(tmp12);
  const first2 = arr2[0];
  const ref2 = obj3.useRef(first2);
  const items1 = [first2];
  const effect = obj3.useEffect(() => {
    ref2.current = first2;
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
  [first4, logger] = react.useState(() => {
    const obj = useChannelScreensFromNavigation;
    return obj.isActiveTabsGuilds(navigation.getState());
  });
  [tmp23, closure_13] = react.useState(f122020);
  const items3 = [navigation];
  _slicedToArray(react.useState(f122020), 2);
  const effect1 = obj3.useEffect(() => {
    function handleStateChange(data) {
      const obj = navigation(drawerWidth[16]);
      logger(obj.isActiveTabsGuilds(data.data.state));
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      navigation.removeListener("state", handleStateChange);
    };
  }, items3);
  const items4 = [first4];
  const effect2 = obj3.useEffect(() => {
    closure_13(first4);
  }, items4);
  isChatBesideChannelList = tmp23;
  __initData = obj3.useRef(false);
  const items5 = [navigation, handleExit];
  const callback1 = obj3.useCallback((arg0) => {
    closure_6(arg0);
    closure_7(arg0);
    ref3.current = false;
    if (arg0) {
      if (null != ref2.current) {
        if ("channel" !== navigation.getState().routes[navigation.getState(navigation).index].name) {
          const obj2 = RootNavigationRef;
          const rootNavigationRef = obj2.getRootNavigationRef();
          let name;
          if (rootNavigationRef != null) {
            const state = rootNavigationRef.getState();
            if (state != null) {
              let index;
              const routes = state.routes;
              if (rootNavigationRef != null) {
                const state1 = rootNavigationRef.getState();
                if (state1 != null) {
                  index = state1.index;
                }
              }
              if (routes[index] != null) {
                name = tmp12.name;
              }
            }
          }
          if ("modal" !== name) {
            tmp3.current = true;
            const tmp15Result = transitionToChannel;
            tmp15Result.transitionToChannel(tmp6.current.channelId);
          }
        }
      }
    } else {
      callback();
    }
  }, items5);
  const callback2 = obj3.useCallback((arg0) => {
    const tmp = arg0;
    if (tmp) {
      closure_7(true);
    }
  }, []);
  let tmp29 = null != first2;
  const callback3 = obj3.useCallback(() => {
    const ComponentDispatch = navigation(drawerWidth[19]).ComponentDispatch;
    ComponentDispatch.dispatch(first2.BOTTOM_CHANNEL_SCREEN_DRAG_START);
    const obj = navigation(drawerWidth[15]);
    obj.dismissKeyboard();
  }, []);
  if (tmp29) {
    tmp29 = first2.type !== tmp2(tmp3[16]).ChannelScreenType.FALLBACK_RENDERED;
  }
  let closure_16 = tmp29;
  let tmp31 = tmp23;
  const tmp5Result = isChatLockedOpen(tmp3[20]);
  if (tmp23) {
    tmp31 = isChatLockedOpen;
  }
  const first5 = arr2[0];
  const obj4 = { canDrag: !tmp31 && tmp29, onVisibilityChange: callback1, onPreMovement: callback2, onDragStart: callback3, startShown: type1 === navigation(tmp3[16]).ChannelScreenType.DEFAULT, openWidth: tmp35 };
  type1 = undefined;
  if (first5 != null) {
    type1 = first5.type;
  }
  tmp35 = undefined;
  if (tmp23) {
    tmp35 = drawerWidth;
  }
  const tmp5ResultResult = tmp5Result(obj4);
  const translateX = tmp5ResultResult.translateX;
  const movePanel = tmp5ResultResult.movePanel;
  const maxWidth = tmp5ResultResult.maxWidth;
  const isDraggingRef = tmp5ResultResult.isDraggingRef;
  const items6 = [tmp23, drawerWidth];
  ({ gesture, panelGestureContext, isDragging } = tmp5ResultResult);
  const effect3 = obj3.useEffect(() => {
    const obj = { isNavigatorPanelsBesideChannelList: isChatBesideChannelList, drawerWidth };
    logger.log("Chat Layout Changed", obj);
  }, items6);
  const obj5 = { handleExit, maxWidth, movePanel, screens: arr2, firstScreen: first2 };
  const ref4 = obj3.useRef(obj5);
  const effect4 = obj3.useEffect(() => {
    ref4.current = obj5;
  });
  let type2;
  const useEffect = obj3.useEffect;
  if (first2 != null) {
    type2 = first2.type;
  }
  const items7 = [type2, translateX, isDraggingRef];
  const effect5 = useEffect(() => {
    let screens;
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
        set = translateX.set;
        if (!tmp6) {
          num4 = maxWidth;
        }
        const result = set(num4);
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
        const tmp4Result = ChatInputUtils;
        tmp4Result.dismissKeyboard();
      }
    }
  }, items7);
  let channelId;
  const useEffect2 = obj3.useEffect;
  if (first2 != null) {
    channelId = first2.channelId;
  }
  const items8 = [channelId];
  const effect21 = useEffect2(() => {
    const firstScreen = ref4.current.firstScreen;
    let type;
    if (firstScreen != null) {
      type = firstScreen.type;
    }
    if (type === useChannelScreensFromNavigation.ChannelScreenType.BACKGROUND_SAVED) {
      let guildId = firstScreen.guildId;
      const preload = ChannelActionCreatorsDefault.preload;
      ChannelActionCreatorsDefault;
      if (guildId == null) {
        guildId = React4;
      }
      preload(guildId, firstScreen.channelId);
    }
  }, items8);
  const items9 = [movePanel, tmp29];
  const callback4 = obj3.useCallback(() => {
    if (closure_16) {
      movePanel(true, false, 0, false);
    }
  }, items9);
  const items10 = [callback4, first1, isChatLockedOpen, tmp23];
  if (tmp23) {
    let tmp45;
    let tmp59Result2;
    if (isChatLockedOpen) {
      let num = 1;
      tmp45 = arr2.length <= 1;
    }
    if (!first1) {
      first1 = tmp23 && isChatLockedOpen;
    }
    const items11 = [isChatLockedOpen, tmp23, maxWidth, translateX];
    const memo = obj3.useMemo(() => {
      let tmp = null;
      if (isChatBesideChannelList) {
        const obj = { translateX, maxWidth, isChatLockedOpen };
        tmp = authStore(ChannelScreenAnimatedFrameDefault, obj);
      }
      return tmp;
    }, items11);
    let tmp2Result = tmp2(tmp3[23]);
    const useSharedValue = tmp2Result.useSharedValue;
    let num2 = 0;
    let num3 = 0;
    if (translateX.get() > 0) {
      num3 = -1;
    }
    const sharedValue = useSharedValue(num3);
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
    let num4 = 10074964118666;
    de.__workletHash = 10074964118666;
    de.__initData = __initData;
    const tmp2Result4 = navigation(tmp3[23]);
    const animatedStyle = tmp2Result4.useAnimatedStyle(de);
    const tmp52 = isChatLockedOpen(tmp3[24])("channel_list_scrim");
    const tmp2Result5 = navigation(tmp3[25]);
    const isCustomThemeActive = tmp2Result5.useIsCustomThemeActive();
    const obj7 = { value: panelGestureContext, children: items12 };
    const Provider = tmp5(tmp3[35]).Provider;
    let tmp56Result = null;
    const tmp2Result6 = navigation(tmp3[26]);
    if (tmp2Result6.isJankScreenReportingEnabled()) {
      const obj8 = { translateX, maxWidth, channelId: channelId1, showCreateThread: flag };
      channelId1 = undefined;
      const tmp56 = handleExit;
      const tmp5Result3 = isChatLockedOpen(tmp3[27]);
      if (first2 != null) {
        channelId1 = first2.channelId;
      }
      flag = undefined;
      if (first2 != null) {
        flag = first2.showCreateThread;
      }
      if (flag == null) {
        flag = false;
      }
      tmp56Result = tmp56(tmp5Result3, obj8);
    }
    items12 = [tmp56Result, ];
    const items13 = [tmp.container, ];
    let containerBackground = !isCustomThemeActive;
    const obj9 = { gesture, children: handleExit(tmp60, obj10) };
    const GestureDetector = tmp2(tmp3[34]).GestureDetector;
    tmp60 = first1;
    if (!isCustomThemeActive) {
      containerBackground = tmp.containerBackground;
    }
    items13[1] = containerBackground;
    obj10 = { style: items13, collapsable: false, children: first4(SidebarCoachmarkOverlay, obj11) };
    obj11 = { enabled: tmp23, children: items16 };
    SidebarCoachmarkOverlay = tmp2(tmp3[33]).SidebarCoachmarkOverlay;
    const obj12 = { style: items14, accessibilityElementsHidden: tmp61, importantForAccessibility: str2, children: items15 };
    items14 = [tmp.tabsContainer, animatedStyle];
    tmp61 = !tmp45;
    const View = tmp5(tmp3[23]).View;
    items15 = [handleExit(tmp5(tmp3[28]), {}), ];
    let tmp59Result;
    if (tmp52) {
      const obj13 = { translateX, maxWidth };
      tmp59Result = tmp59(tmp2(tmp3[29]).MainTabsContentScrim, obj13);
    }
    items15[1] = tmp59Result;
    items16 = [first4(View, obj12), handleExit(tmp5(tmp3[30]), {}), ];
    if (arr2.length > 0) {
      const obj14 = { screens: arr2, screenStackActive: first1, navigationTTIStackVisible: first1, translateX, isDragging, maxWidth, highestFullyRenderedScreenIndex: sharedValue, shouldFreeze: !tmp23, focusChatPressableComponent: tmp44, firstScreenWidth: tmp65, firstScreenFrame: memo };
      const tmp5Result4 = isChatLockedOpen(tmp3[31]);
      if (!first1) {
        first1 = first3;
      }
      tmp65 = undefined;
      if (tmp23) {
        if (isChatLockedOpen) {
          tmp65 = tmp8;
        }
      }
      tmp59Result2 = tmp59(tmp5Result4, obj14);
    } else {
      tmp59Result2 = null;
      if (tmp23) {
        tmp59Result2 = null;
        if (isChatLockedOpen) {
          tmp59Result2 = tmp59(tmp5(tmp3[32]), {});
        }
      }
    }
    items16[2] = tmp59Result2;
    items12[1] = handleExit(GestureDetector, obj9);
    return first4(Provider, obj7);
  }
  tmp45 = !first1;
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx");

export default memoResult;