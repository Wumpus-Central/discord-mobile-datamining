// === Module 16728: SwipeForMemberListWrapper ===

// Module 16728 (SwipeForMemberListWrapper)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4494 */;
import RootNavigationRef from "RootNavigationRef" /* 4495 */;
import useChatLayout from "useChatLayout" /* 4497 */;
import ChatInputUtils from "ChatInputUtils" /* 4502 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4816 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const ChannelDetailsStore = fn(7980);
({ getIsChannelDetailsSearchActive: closure_7, setIsChannelDetailsSearchActive: closure_8 } = ChannelDetailsStore);
const ONYX_BORDER_WIDTH = fn(7967).ONYX_BORDER_WIDTH;
const Constants = fn(1074);
({ AnalyticEvents: c10, ComponentActions: closure_11, ThemeTypes: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = new LoggerDefault("SwipeForMemberListWrapper");
let context = noop.createContext(undefined);
fn(4636);
let obj = { memberListPreview: null, content: null, memberListContainer: null, onyxBorder: null, onyxRightOverflow: null };
obj = { flex: 1, justifyContent: "center", alignItems: "flex-start", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.memberListPreview = obj;
const createStyles = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.overflow = "hidden";
obj.content = createStyles;
const tmp6 = new LoggerDefault("SwipeForMemberListWrapper");
obj.memberListContainer = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MODAL_BACKGROUND };
let obj2 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MODAL_BACKGROUND };
obj.onyxBorder = { borderLeftColor: nativeDefault.colors.BORDER_STRONG, borderLeftWidth: ONYX_BORDER_WIDTH };
obj.onyxRightOverflow = { right: -ONYX_BORDER_WIDTH };
let closure_17 = createStyles.createStyles(obj);
const __initData = { code: "function SwipeForMemberListWrapperTsx1(){const{shownPixels}=this.__closure;return shownPixels.get()>0;}" };
const __initData2 = { code: "function SwipeForMemberListWrapperTsx2(isVisible,wasVisible){const{mainDisallowGesture,stackDisallowGesture,panelDisallowGesture}=this.__closure;var _stackDisallowGesture;if(isVisible===wasVisible)return;mainDisallowGesture.set(isVisible);(_stackDisallowGesture=stackDisallowGesture)===null||_stackDisallowGesture===void 0||_stackDisallowGesture.set(isVisible);if(!isVisible){panelDisallowGesture.set(false);}}" };
const __initData3 = { code: "function SwipeForMemberListWrapperTsx3(){const{isChatLockedOpen,mainTranslateX,stackTranslateX}=this.__closure;return!isChatLockedOpen&&mainTranslateX.get()>0||stackTranslateX!=null&&stackTranslateX.get()>0;}" };
const __initData4 = { code: "function SwipeForMemberListWrapperTsx4(isInactive,wasInactive){const{panelDisallowGesture}=this.__closure;if(isInactive===wasInactive)return;panelDisallowGesture.set(isInactive);}" };
const __initData5 = { code: "function SwipeForMemberListWrapperTsx5(){const{maxWidth,translateX}=this.__closure;return maxWidth-translateX.get();}" };
const __initData6 = { code: "function SwipeForMemberListWrapperTsx6(){const{theme,ThemeTypes,isChatBesideChannelList,translateX,ONYX_BORDER_WIDTH}=this.__closure;if(theme!==ThemeTypes.ONYX||isChatBesideChannelList)return translateX.get();return translateX.get()-ONYX_BORDER_WIDTH;}" };
const __initData7 = { code: "function SwipeForMemberListWrapperTsx7(){const{shownPixels,PEEK_PIXEL_THRESHOLD}=this.__closure;const exceedsPeekThreshold=shownPixels.get()>PEEK_PIXEL_THRESHOLD*2;return{display:exceedsPeekThreshold?'none':'flex',opacity:exceedsPeekThreshold?0:1-shownPixels.get()/PEEK_PIXEL_THRESHOLD};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx");

export default function _default(channelId) {
  channelId = channelId.channelId;
  gesture = channelId;
  const screenIndex = channelId.screenIndex;
  let gesture2 = channelId.isBackEnabled;
  let derivedValue;
  let derivedStateFromSharedValue;
  let callback2;
  let callback3;
  let navigation;
  ({ children, style } = channelId);
  let tmp = closure_17();
  let tmp4 = derivedValue(gesture2[15])();
  let disallowGesture = tmp4;
  const isChatBesideChannelList = derivedValue(gesture2[12])().isChatBesideChannelList;
  let translateX2 = isChatBesideChannelList;
  let obj = translateX2;
  const tmp5 = disallowGesture(translateX2.useState(channelId), 2);
  let gesture3 = tmp5[1];
  const items = [channelId];
  const effect = translateX2.useEffect(() => {
    closure_0 = gesture(gesture2[16]).runAfterInteractions(() => {
      gesture3(closure_0);
    }, 200);
    return () => {
      closure_0.cancel();
    };
  }, items);
  const callback = translateX2.useCallback(() => {
    gesture(gesture2[17]).dismissKeyboard();
  }, []);
  const tmp8 = derivedValue(gesture2[18])(screenIndex);
  let disallowGesture2 = tmp8;
  const items1 = [tmp4, tmp8];
  const items2 = [channelId, screenIndex];
  const memo = translateX2.useMemo(() => {
    if (disallowGesture === constants3.ONYX) {
      let sum = disallowGesture2 + ONYX_BORDER_WIDTH;
    } else {
      sum = disallowGesture2;
    }
    return sum;
  }, items1);
  const callback1 = translateX2.useCallback((arg0) => {
    if (!arg0) {
      React6(gesture, false, "initial");
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId: gesture, screenIndex: derivedValue };
      ComponentDispatch.dispatch(constants2.CHANNEL_DETAILS_HIDDEN, obj);
    }
  }, items2);
  const tmp11 = derivedValue(gesture2[20])({ canDrag: true, onDragStart: callback, onPreMovement: callback1, startShown: false, cancelOnSwipeRightFromStart: true, openWidth: memo });
  ({ gesture, panelGestureContext } = tmp11);
  let translateX3 = panelGestureContext;
  ({ isDragging, translateX } = tmp11);
  let disallowGesture3 = translateX;
  const movePanel = tmp11.movePanel;
  let isChatLockedOpen = movePanel;
  const maxWidth = tmp11.maxWidth;
  let obj1 = gesture(gesture2[13]);
  class B {
    constructor() {
      return maxWidth - disallowGesture.get();
    }
  }
  B.__closure = { maxWidth, translateX };
  B.__workletHash = 10842481670591;
  B.__initData = __initData5;
  derivedValue = obj1.useDerivedValue(B);
  let obj2 = gesture(gesture2[21]);
  derivedStateFromSharedValue = obj2.useDerivedStateFromSharedValue(derivedValue, (arg0) => arg0 > 0);
  const items3 = [derivedStateFromSharedValue, channelId, screenIndex];
  const effect1 = translateX2.useEffect(() => {
    if (derivedStateFromSharedValue) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId: gesture, screenIndex: derivedValue };
      ComponentDispatch.dispatch(constants2.CHANNEL_DETAILS_SHOWN, obj);
    }
  }, items3);
  let obj3 = gesture(gesture2[13]);
  function te() {
    if (disallowGesture === constants3.ONYX) {
      if (!translateX2) {
        let diff = disallowGesture3.get() - ONYX_BORDER_WIDTH;
      }
      return diff;
    }
    diff = disallowGesture3.get();
  }
  obj = { theme: tmp4, ThemeTypes: derivedStateFromSharedValue, isChatBesideChannelList, translateX, ONYX_BORDER_WIDTH: isChatLockedOpen };
  te.__closure = obj;
  te.__workletHash = 2787360249959;
  te.__initData = __initData6;
  const derivedValue1 = obj3.useDerivedValue(te);
  const items4 = [channelId, screenIndex, movePanel];
  callback2 = translateX2.useCallback((channelId) => {
    let tmp = channelId.channelId === gesture;
    if (tmp) {
      tmp = channelId.screenIndex === derivedValue;
    }
    if (tmp) {
      ChatInputUtils.dismissKeyboard();
      if (true === channelId.search) {
        React6(channelId.channelId, true, "initial");
      }
      isChatLockedOpen(true, false, 0, true);
    }
  }, items4);
  const items5 = [movePanel];
  callback3 = translateX2.useCallback(() => {
    isChatLockedOpen(false, false, 0, true);
  }, items5);
  const items6 = [callback3];
  const effect2 = translateX2.useEffect(() => {
    closure_0 = derivedValue(gesture2[22]).addRouteChangeListener(() => {
      callback3();
    });
    return () => {
      closure_0();
    };
  }, items6);
  const items7 = [callback2, callback3];
  const effect3 = translateX2.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants2.SHOW_CHANNEL_DETAILS, callback2);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants2.HIDE_CHANNEL_DETAILS, callback3);
    return () => {
      const ComponentDispatch = gesture(gesture2[19]).ComponentDispatch;
      ComponentDispatch.unsubscribe(derivedValue.SHOW_CHANNEL_DETAILS, callback2);
      const ComponentDispatch2 = gesture(gesture2[19]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(derivedValue.HIDE_CHANNEL_DETAILS, callback3);
    };
  }, items7);
  const items8 = [derivedValue, callback3, channelId];
  const callback4 = translateX2.useCallback(() => {
    let obj = derivedValue;
    if (derivedValue.get() <= 0) {
      obj = { shownPixels: null };
      obj.shownPixels = obj.get();
      navigation.verbose("handleBackPress", "shownPixels <= 0", obj);
      return false;
    } else {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      let tmp23Result = useChatLayout;
      isChatLockedOpen = tmp23Result.getChatLayout().isChatLockedOpen;
      tmp23Result = NavigationRouteUtils;
      let coerceChannelRouteResult = tmp23Result.coerceChannelRoute(currentRoute);
      if (tmp3) {
        coerceChannelRouteResult = NavigationRouteUtils.coerceGuildsRoute(currentRoute);
        const tmp23Result1 = NavigationRouteUtils;
      }
      obj = { route: coerceChannelRouteResult, channelId: gesture, currentRoute, isChatLockedOpen, routeParams: null };
      let params;
      if (coerceChannelRouteResult != null) {
        params = coerceChannelRouteResult.params;
      }
      obj.routeParams = params;
      navigation.verbose("handleBackPress", obj);
      if (null == coerceChannelRouteResult) {
        const obj1 = { currentRoute, isChatLockedOpen };
        navigation.verbose("handleBackPress", "route is null", obj1);
        let flag = false;
      } else {
        const params2 = coerceChannelRouteResult.params;
        let channelId;
        if (params2 != null) {
          channelId = params2.channelId;
        }
        if (channelId !== gesture) {
          params = coerceChannelRouteResult.params;
          let channelId1;
          if (params != null) {
            channelId1 = params.channelId;
          }
          const obj2 = { routeChannelId: channelId1, expectedChannelId: gesture };
          navigation.verbose("handleBackPress", "route channelId mismatch", obj2);
          flag = false;
        } else if (React5(gesture)) {
          navigation.verbose("handleBackPress", "cancelling search before closing panel");
          React6(gesture, false, "initial");
          flag = true;
        } else {
          callback3();
          flag = true;
        }
      }
      return flag;
    }
  }, items8);
  derivedValue(gesture2[25])(callback4, derivedStateFromSharedValue);
  const items9 = [channelId, screenIndex, callback3];
  const effect4 = translateX2.useEffect(() => {
    callback3();
  }, items9);
  let obj5 = gesture(gesture2[26]);
  navigation = obj5.useNavigation();
  closure_129_0 = channelId;
  closure_129_1 = screenIndex;
  closure_129_2 = isDragging;
  closure_129_3 = derivedStateFromSharedValue;
  const items10 = [channelId, screenIndex, derivedStateFromSharedValue];
  const effect5 = translateX2.useEffect(() => {
    const obj = { channel_id: gesture, screen_index: String(derivedValue), member_list_open: disallowGesture };
    obj.trackWithMetadata(constants.MEMBER_LIST_SWIPE_TOGGLED, obj);
  }, items10);
  const items11 = [derivedStateFromSharedValue, channelId, screenIndex, isDragging];
  const effect6 = translateX2.useEffect(() => {
    value = disallowGesture;
    if (disallowGesture) {
      value = gesture2.get();
    }
    if (value) {
      const obj = { channel_id: gesture, screen_index: null };
      const _String = String;
      obj.screen_index = String(derivedValue);
      obj.trackWithMetadata(constants.MEMBER_LIST_SWIPE_PEEK, obj);
    }
  }, items11);
  gesture2 = undefined;
  translateX2 = undefined;
  gesture3 = undefined;
  disallowGesture2 = undefined;
  translateX3 = undefined;
  disallowGesture3 = undefined;
  isChatLockedOpen = undefined;
  context = translateX2.useContext(derivedValue(gesture2[11]));
  gesture2 = context.gesture;
  disallowGesture = context.disallowGesture;
  translateX2 = context.translateX;
  let context1 = translateX2.useContext(gesture(gesture2[11]).MainTabsChannelScreenStackContext);
  if (context1 == null) {
    context1 = {};
  }
  gesture3 = context1.gesture;
  disallowGesture2 = context1.disallowGesture;
  translateX3 = context1.translateX;
  disallowGesture3 = panelGestureContext.disallowGesture;
  isChatLockedOpen = tmp2(tmp3[12])().isChatLockedOpen;
  const items12 = [gesture, gesture2, gesture3];
  const memo1 = obj.useMemo(() => {
    if (null == gesture3) {
      let result = gesture.simultaneousWithExternalGesture(gesture2);
    } else {
      result = gesture.simultaneousWithExternalGesture(gesture2, tmp);
    }
    return result;
  }, items12);
  let tmp12Result = tmp12(tmp3[13]);
  const fn = function c() {
    return derivedValue.get() > 0;
  };
  fn.__closure = { shownPixels: derivedValue };
  fn.__workletHash = 15116046915956;
  fn.__initData = __initData;
  const fn2 = function l(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = disallowGesture.set(arg0);
      if (disallowGesture2 != null) {
        const result1 = disallowGesture2.set(arg0);
      }
      if (!arg0) {
        const result2 = disallowGesture3.set(false);
      }
    }
  };
  fn2.__closure = { mainDisallowGesture: disallowGesture, stackDisallowGesture: disallowGesture2, panelDisallowGesture: disallowGesture3 };
  fn2.__workletHash = 13681610289748;
  fn2.__initData = __initData2;
  const animatedReaction = tmp12Result.useAnimatedReaction(fn, fn2);
  tmp12Result = tmp12(tmp3[13]);
  const fn3 = function h() {
    let tmp = !isChatLockedOpen;
    if (!isChatLockedOpen) {
      tmp = translateX2.get() > 0;
    }
    if (!tmp) {
      let tmp4 = null != translateX3;
      if (tmp4) {
        tmp4 = translateX3.get() > 0;
      }
      tmp = tmp4;
    }
    return tmp;
  };
  fn3.__closure = { isChatLockedOpen, mainTranslateX: translateX2, stackTranslateX: translateX3 };
  fn3.__workletHash = 11938850302839;
  fn3.__initData = __initData3;
  const fn4 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = disallowGesture3.set(arg0);
    }
  };
  fn4.__closure = { panelDisallowGesture: disallowGesture3 };
  fn4.__workletHash = 3362957347102;
  fn4.__initData = __initData4;
  const animatedReaction1 = tmp12Result.useAnimatedReaction(fn3, fn4);
  const unmountEffect = gesture(gesture2[14]).useUnmountEffect(() => {
    const result = disallowGesture3.set(false);
    const result1 = disallowGesture.set(false);
    if (disallowGesture2 != null) {
      const result2 = disallowGesture2.set(false);
    }
  });
  const items13 = [panelGestureContext, channelId, screenIndex, derivedStateFromSharedValue];
  const memo2 = obj.useMemo(() => {
    const obj = {};
    const merged = Object.assign(translateX3);
    obj.channelId = gesture;
    obj.screenIndex = derivedValue;
    obj.isPanelActive = derivedStateFromSharedValue;
    return obj;
  }, items13);
  const tmp12Result1 = gesture(gesture2[14]);
  const mainTabsChannelScreenStyles = gesture(gesture2[27]).useMainTabsChannelScreenStyles(isDragging, derivedValue1, maxWidth);
  const tmp12Result2 = gesture(gesture2[27]);
  function oe() {
    let obj = derivedValue;
    const tmp = derivedValue.get() > 300;
    let str = "flex";
    if (tmp) {
      str = "none";
    }
    obj = { display: str, opacity: null };
    let num = 0;
    if (!tmp) {
      num = 1 - obj.get() / 150;
    }
    obj.opacity = num;
    return obj;
  }
  oe.__closure = { shownPixels: derivedValue, PEEK_PIXEL_THRESHOLD: 150 };
  oe.__workletHash = 9468759128012;
  oe.__initData = __initData7;
  obj = { value: memo2, children: null };
  const animatedStyle = gesture(gesture2[13]).useAnimatedStyle(oe);
  obj1 = { gesture: memo1, children: null };
  obj2 = {
    onAccessibilityEscape() {
      if (gesture2) {
        navigation.goBack();
      }
    },
    style,
    children: null
  };
  obj3 = { navigationKey: channelId, definition: tmp12(tmp3[30]).CHANNEL_NAVIGATION_TTI, accessibilityElementsHidden: derivedStateFromSharedValue || undefined, importantForAccessibility: null, style: null, children: null };
  let str;
  if (derivedStateFromSharedValue) {
    str = "no-hide-descendants";
  }
  obj3.importantForAccessibility = str;
  obj3.style = tmp.content;
  const items14 = [children, callback2(gesture(gesture2[31]).MainTabsContentScrim, { translateX: derivedValue1, maxWidth })];
  obj3.children = items14;
  const items15 = [callback3(gesture(gesture2[29]).NavTTISurfaceProvider, obj3), ];
  const items16 = [mainTabsChannelScreenStyles, tmp.memberListContainer, , ];
  let onyxBorder;
  if (tmp4 === derivedStateFromSharedValue.ONYX) {
    onyxBorder = tmp.onyxBorder;
  }
  items16[2] = onyxBorder;
  let onyxRightOverflow;
  if (!isChatBesideChannelList) {
    if (tmp4 === tmp16.ONYX) {
      onyxRightOverflow = tmp.onyxRightOverflow;
    }
  }
  const obj4 = { style: items16, accessibilityElementsHidden: !derivedStateFromSharedValue, importantForAccessibility: "no-hide-descendants", children: null };
  items16[3] = onyxRightOverflow;
  const items17 = [callback2(derivedValue(gesture2[32]), { absolute: true, withOverlay: true, overlayOpacity: 0.5 }), , ];
  obj5 = { children: tmp35(tmp2(tmp3[34]), { isShowing: derivedStateFromSharedValue, channelId: tmp5[0], isSearchLocked: false, onBackPress: callback4, componentWidth: tmp8, onChannelDeleted: callback3 }) };
  items17[1] = callback2(gesture(gesture2[33]).LayerScope, obj5);
  const obj6 = { style: null, children: callback2(disallowGesture2, { style: tmp.memberListPreview }) };
  const items18 = [gesture3.absoluteFill, animatedStyle];
  obj6.style = items18;
  items17[2] = callback2(derivedValue(gesture2[13]).View, obj6);
  obj4.children = items17;
  items15[1] = callback3(derivedValue(gesture2[13]).View, obj4);
  obj2.children = items15;
  obj1.children = callback3(disallowGesture2, obj2);
  obj.children = callback2(gesture(gesture2[28]).GestureDetector, obj1);
  return callback2(context.Provider, obj);
};
export const SwipeForMemberListContext = context;