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
const Constants = fn(1084);
({ ComponentActions: closure_8, ME: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let closure_12 = new LoggerDefault("MainTabsNavigatorPanel");
const createStyles = fn(5004);
let obj = { container: { flex: 1 }, containerBackground: null, tabsContainer: null };
const tmp5 = new LoggerDefault("MainTabsNavigatorPanel");
obj.containerBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj.tabsContainer = { flex: 1 };
let closure_13 = createStyles.createStyles(obj);
let closure_14 = {
  code: "function MainTabsNavigatorPanelTsx1(){const{translateX,highestFullyRenderedScreenIndex}=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};}",
};
let __initData = {
  code: "function MainTabsNavigatorPanelTsx2(){const{translateX,highestFullyRenderedScreenIndex}=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};}",
};
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MainTabsNavigatorPanel(showHeaderGradient) {
        const cResult = navigation(drawerWidth[9]).c(116);
        showHeaderGradient = showHeaderGradient.showHeaderGradient;
        isNavigatorPanelsBesideChannelList();
        let obj = navigation(drawerWidth[9]);
        navigation = navigation(drawerWidth[10]).useNavigation();
        let tmp6 = isChatLockedOpen;
        const tmpResult = navigation(drawerWidth[10]);
        isChatLockedOpen = isChatLockedOpen(drawerWidth[11])().isChatLockedOpen;
        let tmp7 = isChatLockedOpen(drawerWidth[11])();
        drawerWidth = navigation(drawerWidth[12]).useDrawerWidth();
        isChatLockedOpen(drawerWidth[13])();
        const tmp10 = isChatLockedOpen(drawerWidth[14])();
        let seam;
        if (tmp10 != null) {
          seam = tmp10.seam;
        }
        if (seam == null) {
          seam = null;
        }
        _slicedToArray = noop.useRef(isChatLockedOpen);
        noop = noop.useRef(false);
        if (cResult[0] !== isChatLockedOpen) {
          const fn = function o() {
            if (ref.current !== isChatLockedOpen) {
              tmp.current = isChatLockedOpen;
              let obj = require;
              let result = dependencyMap;
              if (isChatLockedOpen) {
                obj = obj(17701);
                result = obj.convertPortraitToLandscapeScreens();
              } else {
                obj(5195).dismissKeyboard();
                const objResult = obj(5195);
                const result1 = PanelsNavigationUtils.convertLandscapeToPortraitScreens();
              }
              closure_4.current = true;
            }
          };
          const items = [isChatLockedOpen];
          cResult[0] = isChatLockedOpen;
          cResult[1] = fn;
          cResult[2] = items;
          let tmp13 = items;
          let tmp12 = fn;
        } else {
          tmp12 = cResult[1];
          tmp13 = cResult[2];
        }
        const layoutEffect = obj4.useLayoutEffect(tmp12, tmp13);
        const tmp15 = tmp6(drawerWidth[17])(navigation);
        const first = tmp15[0];
        let type;
        if (first != null) {
          type = first.type;
        }
        const tmp18 = type === navigation(drawerWidth[17]).ChannelScreenType.DEFAULT;
        const tmpResult2 = navigation(drawerWidth[12]);
        [r10068, closure_5] = noop.useState(tmp18);
        const tmp20 = _slicedToArray(noop.useState(tmp18), 2);
        closure_6 = _slicedToArray(noop.useState(tmp18), 2)[1];
        const first1 = tmp15[0];
        constants = obj4.useRef(first1);
        if (cResult[3] !== first1) {
          class N {
            constructor() {
              closure_8.current = closure_7;
              return;
            }
          }
          const items1 = [first1];
          cResult[3] = first1;
          cResult[4] = N;
          cResult[5] = items1;
          let tmp24 = items1;
        } else {
          class N {
            constructor() {
              closure_8.current = closure_7;
              return;
            }
          }
          tmp24 = cResult[5];
        }
        const effect = obj4.useEffect(N, tmp24);
        if (cResult[6] !== navigation) {
          class N {
            constructor() {
              closure_8.current = closure_7;
              return;
            }
          }
          cResult[6] = navigation;
          cResult[7] = tmp27;
        } else {
          class N {
            constructor() {
              closure_8.current = closure_7;
              return;
            }
          }
        }
        if (cResult[8] !== navigation) {
          class N {
            constructor() {
              closure_8.current = closure_7;
              return;
            }
          }
          cResult[8] = navigation;
          cResult[9] = tmp29;
        } else {
          class N {
            constructor() {
              closure_8.current = closure_7;
              return;
            }
          }
        }
        [first2, closure_11] = noop.useState(tmp29);
        if (cResult[10] !== first2) {
          class Y {
            constructor() {
              return closure_10;
            }
          }
          cResult[10] = first2;
          cResult[11] = Y;
        } else {
          class Y {
            constructor() {
              return closure_10;
            }
          }
        }
        const tmp21 = _slicedToArray(noop.useState(tmp18), 2);
        [tmp34, closure_12] = noop.useState(Y);
        if (cResult[12] !== navigation) {
          class Y {
            constructor() {
              return closure_10;
            }
          }
          const items2 = [navigation];
          cResult[12] = navigation;
          cResult[13] = items2;
          cResult[14] = tmp37;
          let tmp36 = tmp37;
          const tmp35 = items2;
        } else {
          class Y {
            constructor() {
              return closure_10;
            }
          }
          tmp36 = cResult[14];
        }
        const effect1 = obj4.useEffect(tmp36, tmp35);
        if (cResult[15] !== first2) {
          class Y {
            constructor() {
              return closure_10;
            }
          }
          const items3 = [first2];
          cResult[15] = first2;
          cResult[16] = tmp41;
          cResult[17] = items3;
          let tmp40 = items3;
        } else {
          class Y {
            constructor() {
              return closure_10;
            }
          }
          tmp40 = cResult[17];
        }
        const effect2 = obj4.useEffect(tmp41, tmp40);
        if (tmp34) {
          class Y {
            constructor() {
              return closure_10;
            }
          }
        }
        isNavigatorPanelsBesideChannelList = tmp34;
        noop.useRef(false);
        if (cResult[18] === tmp26) {
          class Y {
            constructor() {
              return closure_10;
            }
          }
          const _Symbol = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            class Y {
              constructor() {
                return closure_10;
              }
            }
            cResult[21] = tmp46;
          } else {
            class Y {
              constructor() {
                return closure_10;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            class Se {
              constructor() {
                ComponentDispatch = closure_0(closure_2[20]).ComponentDispatch;
                dispatchResult = ComponentDispatch.dispatch(closure_8.BOTTOM_CHANNEL_SCREEN_DRAG_START);
                obj = closure_0(closure_2[16]);
                dismissKeyboardResult = obj.dismissKeyboard();
                return;
              }
            }
            cResult[22] = Se;
          } else {
            class Se {
              constructor() {
                ComponentDispatch = closure_0(closure_2[20]).ComponentDispatch;
                dispatchResult = ComponentDispatch.dispatch(closure_8.BOTTOM_CHANNEL_SCREEN_DRAG_START);
                obj = closure_0(closure_2[16]);
                dismissKeyboardResult = obj.dismissKeyboard();
                return;
              }
            }
          }
          let tmp48 = null != first1;
          if (tmp48) {
            class Se {
              constructor() {
                ComponentDispatch = closure_0(closure_2[20]).ComponentDispatch;
                dispatchResult = ComponentDispatch.dispatch(closure_8.BOTTOM_CHANNEL_SCREEN_DRAG_START);
                obj = closure_0(closure_2[16]);
                dismissKeyboardResult = obj.dismissKeyboard();
                return;
              }
            }
            tmp48 = tmp49 !== tmp(tmp2[17]).ChannelScreenType.FALLBACK_RENDERED;
          }
          closure_15 = tmp48;
          if (tmp34) {
            class Se {
              constructor() {
                ComponentDispatch = closure_0(closure_2[20]).ComponentDispatch;
                dispatchResult = ComponentDispatch.dispatch(closure_8.BOTTOM_CHANNEL_SCREEN_DRAG_START);
                obj = closure_0(closure_2[16]);
                dismissKeyboardResult = obj.dismissKeyboard();
                return;
              }
            }
          }
          if (!tmp34) {
            class Se {
              constructor() {
                ComponentDispatch = closure_0(closure_2[20]).ComponentDispatch;
                dispatchResult = ComponentDispatch.dispatch(closure_8.BOTTOM_CHANNEL_SCREEN_DRAG_START);
                obj = closure_0(closure_2[16]);
                dismissKeyboardResult = obj.dismissKeyboard();
                return;
              }
            }
          }
          if (tmp15[0] != null) {
            class Se {
              constructor() {
                ComponentDispatch = closure_0(closure_2[20]).ComponentDispatch;
                dispatchResult = ComponentDispatch.dispatch(closure_8.BOTTOM_CHANNEL_SCREEN_DRAG_START);
                obj = closure_0(closure_2[16]);
                dismissKeyboardResult = obj.dismissKeyboard();
                return;
              }
            }
          }
          if (tmp34) {
            class Se {
              constructor() {
                ComponentDispatch = closure_0(closure_2[20]).ComponentDispatch;
                dispatchResult = ComponentDispatch.dispatch(closure_8.BOTTOM_CHANNEL_SCREEN_DRAG_START);
                obj = closure_0(closure_2[16]);
                dismissKeyboardResult = obj.dismissKeyboard();
                return;
              }
            }
          }
          const tmp54 = undefined === tmp(tmp2[17]).ChannelScreenType.DEFAULT;
          if (cResult[23] === seam) {
            class Se {
              constructor() {
                ComponentDispatch = closure_0(closure_2[20]).ComponentDispatch;
                dispatchResult = ComponentDispatch.dispatch(closure_8.BOTTOM_CHANNEL_SCREEN_DRAG_START);
                obj = closure_0(closure_2[16]);
                dismissKeyboardResult = obj.dismissKeyboard();
                return;
              }
            }
          }
          let obj2 = {
            canDrag: !tmp34,
            onVisibilityChange: tmp43,
            onPreMovement: tmp46,
            onDragStart: Se,
            startShown: tmp54,
            openWidth: undefined,
            foldSeam: seam,
          };
          cResult[23] = seam;
          cResult[24] = tmp43;
          cResult[25] = !tmp34;
          cResult[26] = tmp54;
          cResult[27] = undefined;
          cResult[28] = obj2;
        }
        function de(arg0) {
          closure_1_5(arg0);
          closure_6(arg0);
          closure_14.current = false;
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
            tmp27();
          }
        }
        cResult[18] = tmp26;
        cResult[19] = navigation;
        cResult[20] = de;
        const tmp19Result2 = _slicedToArray(noop.useState(Y), 2);
      }
    : function MainTabsNavigatorPanel(showHeaderGradient) {
        let flag = showHeaderGradient.showHeaderGradient;
        if (flag === undefined) {
          flag = true;
        }
        let navigation;
        let isChatLockedOpen;
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
        isChatBesideChannelList = undefined;
        __initData = undefined;
        closure_16 = undefined;
        let translateX;
        let movePanel;
        let maxWidth;
        let isDraggingRef;
        let obj5;
        let callback4;
        let sharedValue;
        let tmp = c13();
        navigation = navigation(drawerWidth[10]).useNavigation();
        let tmp6 = isChatLockedOpen(drawerWidth[11])();
        isChatLockedOpen = tmp6.isChatLockedOpen;
        let obj = navigation(drawerWidth[10]);
        drawerWidth = navigation(drawerWidth[12]).useDrawerWidth();
        let obj2 = navigation(drawerWidth[12]);
        const tmp9 = isChatLockedOpen(drawerWidth[14])();
        let seam;
        if (tmp9 != null) {
          seam = tmp9.seam;
        }
        if (seam == null) {
          seam = null;
        }
        _slicedToArray = noop.useRef(isChatLockedOpen);
        noop = noop.useRef(false);
        const items = [isChatLockedOpen];
        const layoutEffect = noop.useLayoutEffect(() => {
          if (ref.current !== isChatLockedOpen) {
            tmp.current = isChatLockedOpen;
            let obj = require;
            let result = dependencyMap;
            if (isChatLockedOpen) {
              obj = obj(17701);
              result = obj.convertPortraitToLandscapeScreens();
            } else {
              obj(5195).dismissKeyboard();
              const objResult = obj(5195);
              const result1 = PanelsNavigationUtils.convertLandscapeToPortraitScreens();
            }
            closure_4.current = true;
          }
        }, items);
        const arr2 = isChatLockedOpen(drawerWidth[17])(navigation);
        const first = arr2[0];
        let type;
        if (first != null) {
          type = first.type;
        }
        const tmp14 = type === navigation(drawerWidth[17]).ChannelScreenType.DEFAULT;
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
        [first3, logger] = noop.useState(() =>
          useChannelScreensFromNavigation.isActiveTabsGuilds(navigation.getState()),
        );
        const tmp8 = isChatLockedOpen(drawerWidth[13])();
        [isChatBesideChannelList, c13] = noop.useState(() => first3);
        const items3 = [navigation];
        const effect1 = obj3.useEffect(() => {
          function handleStateChange(data) {
            logger(navigation(drawerWidth[17]).isActiveTabsGuilds(data.data.state));
          }
          handleStateChange.addListener("state", handleStateChange);
          return () => {
            navigation.removeListener("state", handleStateChange);
          };
        }, items3);
        const items4 = [first3];
        const effect2 = obj3.useEffect(() => {
          _undefined(first3);
        }, items4);
        if (isChatBesideChannelList) {
          isChatBesideChannelList = tmp6.isChatBesideChannelList;
        }
        __initData = obj3.useRef(false);
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
        let tmp29 = null != first2;
        const callback3 = obj3.useCallback(() => {
          const ComponentDispatch = navigation(drawerWidth[20]).ComponentDispatch;
          ComponentDispatch.dispatch(first2.BOTTOM_CHANNEL_SCREEN_DRAG_START);
          navigation(drawerWidth[16]).dismissKeyboard();
        }, []);
        if (tmp29) {
          tmp29 = first2.type !== tmp2(tmp3[17]).ChannelScreenType.FALLBACK_RENDERED;
        }
        closure_16 = tmp29;
        let tmp31 = isChatBesideChannelList;
        const tmp23 = _slicedToArray(
          noop.useState(() => first3),
          2,
        );
        if (isChatBesideChannelList) {
          tmp31 = isChatLockedOpen;
        }
        let tmp32 = !tmp31;
        if (!tmp31) {
          tmp32 = tmp29;
        }
        const obj4 = {
          canDrag: tmp32,
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
        obj4.startShown = type1 === navigation(drawerWidth[17]).ChannelScreenType.DEFAULT;
        let tmp35;
        if (isChatBesideChannelList) {
          tmp35 = drawerWidth;
        }
        obj4.openWidth = tmp35;
        obj4.foldSeam = seam;
        const tmp5ResultResult = isChatLockedOpen(drawerWidth[21])(obj4);
        translateX = tmp5ResultResult.translateX;
        movePanel = tmp5ResultResult.movePanel;
        maxWidth = tmp5ResultResult.maxWidth;
        isDraggingRef = tmp5ResultResult.isDraggingRef;
        const items6 = [isChatBesideChannelList, drawerWidth];
        ({ gesture, panelGestureContext, isDragging } = tmp5ResultResult);
        const effect3 = obj3.useEffect(() => {
          logger.log("Chat Layout Changed", {
            isNavigatorPanelsBesideChannelList: isChatBesideChannelList,
            drawerWidth,
          });
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
        const items9 = [movePanel, tmp29];
        callback4 = obj3.useCallback(() => {
          if (closure_16) {
            movePanel(true, false, 0, false);
          }
        }, items9);
        const items10 = [callback4, first1, isChatLockedOpen, isChatBesideChannelList];
        if (isChatBesideChannelList) {
          if (isChatLockedOpen) {
            let tmp45 = arr2.length <= 1;
          }
          if (!first1) {
            let tmp46 = isChatBesideChannelList;
            if (isChatBesideChannelList) {
              tmp46 = isChatLockedOpen;
            }
            first1 = tmp46;
          }
          const items11 = [isChatLockedOpen, isChatBesideChannelList, maxWidth, translateX];
          const memo = obj3.useMemo(() => {
            let tmp = null;
            if (isChatBesideChannelList) {
              const obj = { translateX, maxWidth, isChatLockedOpen };
              tmp = v65535(ChannelScreenAnimatedFrameDefault, obj);
            }
            return tmp;
          }, items11);
          let num3 = 0;
          if (translateX.get() > 0) {
            num3 = -1;
          }
          sharedValue = tmp2(tmp3[24]).useSharedValue(num3);
          const tmp2Result = tmp2(tmp3[24]);
          function he() {
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
          he.__closure = obj6;
          he.__workletHash = 10074964118666;
          he.__initData = __initData;
          const animatedStyle = tmp2(tmp3[24]).useAnimatedStyle(he);
          const tmp2Result4 = tmp2(tmp3[24]);
          const tmp51 = tmp5(tmp3[25])("channel_list_scrim");
          const isCustomThemeActive = tmp2(tmp3[26]).useIsCustomThemeActive();
          const obj7 = { value: panelGestureContext, children: null };
          const tmp2Result5 = tmp2(tmp3[26]);
          let tmp55Result = null;
          if (tmp2Result6.isJankScreenReportingEnabled()) {
            const obj8 = { translateX, maxWidth, channelId: null, showCreateThread: null };
            let channelId1;
            if (first2 != null) {
              channelId1 = first2.channelId;
            }
            obj8.channelId = channelId1;
            let flag2;
            if (first2 != null) {
              flag2 = first2.showCreateThread;
            }
            if (flag2 == null) {
              flag2 = false;
            }
            obj8.showCreateThread = flag2;
            tmp55Result = handleExit(tmp5(tmp3[28]), obj8);
            const tmp5Result3 = tmp5(tmp3[28]);
          }
          const items12 = [tmp55Result];
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
          const obj12 = {
            style: null,
            accessibilityElementsHidden: null,
            importantForAccessibility: null,
            children: null,
          };
          const items14 = [tmp.tabsContainer, animatedStyle];
          obj12.style = items14;
          obj12.accessibilityElementsHidden = !tmp45;
          obj12.importantForAccessibility = "no-hide-descendants";
          const items15 = [handleExit(tmp5(tmp3[29]), {})];
          let tmp58Result;
          if (tmp51) {
            const obj13 = { translateX, maxWidth };
            tmp58Result = tmp58(tmp2(tmp3[30]).MainTabsContentScrim, obj13);
          }
          items15[1] = tmp58Result;
          obj12.children = items15;
          const items16 = [first3(tmp5(tmp3[24]).View, obj12), ,];
          let tmp58Result3 = null;
          if (flag) {
            tmp58Result3 = tmp58(tmp5(tmp3[31]), {});
          }
          items16[1] = tmp58Result3;
          if (arr2.length > 0) {
            const obj14 = {
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
            let tmp65 = first1;
            if (!first1) {
              tmp65 = isChatBesideChannelList;
            }
            obj14.screenStackVisible = tmp65;
            if (!first1) {
              first1 = tmp17[0];
            }
            obj14.navigationTTIStackVisible = first1;
            obj14.translateX = translateX;
            obj14.isDragging = isDragging;
            obj14.maxWidth = maxWidth;
            obj14.highestFullyRenderedScreenIndex = sharedValue;
            obj14.shouldFreeze = !isChatBesideChannelList;
            obj14.focusChatPressableComponent = tmp44;
            let tmp66;
            if (isChatBesideChannelList) {
              if (isChatLockedOpen) {
                tmp66 = tmp8;
              }
            }
            obj14.firstScreenWidth = tmp66;
            obj14.firstScreenFrame = memo;
            let tmp58Result4 = tmp58(tmp5(tmp3[32]), obj14);
            const tmp5Result4 = tmp5(tmp3[32]);
          } else {
            tmp58Result4 = null;
            if (isChatBesideChannelList) {
              tmp58Result4 = null;
              if (isChatLockedOpen) {
                tmp58Result4 = tmp58(tmp5(tmp3[33]), {});
              }
            }
          }
          items16[2] = tmp58Result4;
          obj11.children = items16;
          obj10.children = first3(tmp2(tmp3[34]).SidebarCoachmarkOverlay, obj11);
          obj9.children = handleExit(first1, obj10);
          items12[1] = handleExit(tmp2(tmp3[35]).GestureDetector, obj9);
          obj7.children = items12;
          return first3(tmp5(tmp3[36]).Provider, obj7);
        }
        tmp45 = !first1;
      },
);
