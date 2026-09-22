// discord_app/modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import NavigationRouteUtils from "../../helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import useChatLayout from "../../../chat/native/useChatLayout.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import getJankSurfaceName from "../../../jank_stats/native/getJankSurfaceName.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const ChannelDetailsStore = fn(8123);
({ getIsChannelDetailsSearchActive: closure_7, setIsChannelDetailsSearchActive: closure_8 } = ChannelDetailsStore);
const ONYX_BORDER_WIDTH = fn(8111).ONYX_BORDER_WIDTH;
const Constants = fn(1074);
({ AnalyticEvents: c10, ComponentActions: closure_11, ThemeTypes: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = new LoggerDefault("SwipeForMemberListWrapper");
let context = noop.createContext(undefined);
const createStyles = fn(4757);
let obj = {
  memberListPreview: null,
  content: null,
  memberListContainer: null,
  onyxBorder: null,
  onyxRightOverflow: null,
};
const tmp6 = new LoggerDefault("SwipeForMemberListWrapper");
obj.memberListPreview = {
  flex: 1,
  justifyContent: "center",
  alignItems: "flex-start",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.overflow = "hidden";
obj.content = obj4;
let obj3 = {
  flex: 1,
  justifyContent: "center",
  alignItems: "flex-start",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj.memberListContainer = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MODAL_BACKGROUND };
let obj5 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MODAL_BACKGROUND };
obj.onyxBorder = { borderLeftColor: nativeDefault.colors.BORDER_STRONG, borderLeftWidth: ONYX_BORDER_WIDTH };
obj.onyxRightOverflow = { right: -ONYX_BORDER_WIDTH };
let closure_17 = createStyles.createStyles(obj);
const __initData = {
  code: "function SwipeForMemberListWrapperTsx1(){const{shownPixels}=this.__closure;return shownPixels.get()>0;}",
};
const __initData2 = {
  code: "function SwipeForMemberListWrapperTsx2(isVisible,wasVisible){const{mainDisallowGesture,stackDisallowGesture,panelDisallowGesture}=this.__closure;var _stackDisallowGesture;if(isVisible===wasVisible)return;mainDisallowGesture.set(isVisible);(_stackDisallowGesture=stackDisallowGesture)===null||_stackDisallowGesture===void 0||_stackDisallowGesture.set(isVisible);if(!isVisible){panelDisallowGesture.set(false);}}",
};
const __initData3 = {
  code: "function SwipeForMemberListWrapperTsx3(){const{isChatLockedOpen,mainTranslateX,stackTranslateX}=this.__closure;return!isChatLockedOpen&&mainTranslateX.get()>0||stackTranslateX!=null&&stackTranslateX.get()>0;}",
};
const __initData4 = {
  code: "function SwipeForMemberListWrapperTsx4(isInactive,wasInactive){const{panelDisallowGesture}=this.__closure;if(isInactive===wasInactive)return;panelDisallowGesture.set(isInactive);}",
};
const __initData5 = {
  code: "function SwipeForMemberListWrapperTsx5(){const{maxWidth,translateX}=this.__closure;return maxWidth-translateX.get();}",
};
const __initData6 = {
  code: "function SwipeForMemberListWrapperTsx6(){const{theme,ThemeTypes,isChatBesideChannelList,translateX,ONYX_BORDER_WIDTH}=this.__closure;if(theme!==ThemeTypes.ONYX||isChatBesideChannelList)return translateX.get();return translateX.get()-ONYX_BORDER_WIDTH;}",
};
const __initData7 = {
  code: "function SwipeForMemberListWrapperTsx7(){const{shownPixels,PEEK_PIXEL_THRESHOLD}=this.__closure;const exceedsPeekThreshold=shownPixels.get()>PEEK_PIXEL_THRESHOLD*2;return{display:exceedsPeekThreshold?'none':'flex',opacity:exceedsPeekThreshold?0:1-shownPixels.get()/PEEK_PIXEL_THRESHOLD};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx");

export default function _default(channelId) {
  channelId = channelId.channelId;
  gesture = channelId;
  const screenIndex = channelId.screenIndex;
  let gesture2 = channelId.isBackEnabled;
  let derivedValue;
  let derivedStateFromSharedValue;
  let memo1;
  let callback3;
  let callback4;
  redux = undefined;
  ({ isNavigationTTIVisible, children, style } = channelId);
  let tmp = closure_17();
  let tmp4 = derivedValue(gesture2[15])();
  let disallowGesture = tmp4;
  const isChatBesideChannelList = derivedValue(gesture2[12])().isChatBesideChannelList;
  let translateX2 = isChatBesideChannelList;
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
  const tmp11 = derivedValue(gesture2[20])({
    canDrag: true,
    onDragStart: callback,
    onPreMovement: callback1,
    startShown: false,
    cancelOnSwipeRightFromStart: true,
    openWidth: memo,
  });
  ({ gesture, panelGestureContext } = tmp11);
  let translateX3 = panelGestureContext;
  ({ isDragging, translateX } = tmp11);
  let disallowGesture3 = translateX;
  const movePanel = tmp11.movePanel;
  let isChatLockedOpen = movePanel;
  const maxWidth = tmp11.maxWidth;
  class F {
    constructor() {
      return maxWidth - disallowGesture.get();
    }
  }
  F.__closure = { maxWidth, translateX };
  F.__workletHash = 10842481670591;
  F.__initData = __initData5;
  derivedValue = gesture(gesture2[13]).useDerivedValue(F);
  let obj2 = gesture(gesture2[13]);
  derivedStateFromSharedValue = gesture(gesture2[21]).useDerivedStateFromSharedValue(derivedValue, (arg0) => arg0 > 0);
  const items3 = [derivedStateFromSharedValue, channelId, screenIndex];
  const effect1 = translateX2.useEffect(() => {
    if (derivedStateFromSharedValue) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId: gesture, screenIndex: derivedValue };
      ComponentDispatch.dispatch(constants2.CHANNEL_DETAILS_SHOWN, obj);
    }
  }, items3);
  memo1 = translateX2.useMemo(() => ({}), []);
  const items4 = [memo1];
  const items5 = [memo1];
  const callback2 = translateX2.useCallback((arg0) => {
    const result = getJankSurfaceName.recordJankChannelDetailsOpen(memo1, arg0);
  }, items4);
  const effect2 = translateX2.useEffect(
    () => () => {
      const result = gesture(gesture2[22]).setJankChannelDetailsOpen(memo1, false);
    },
    items5,
  );
  let obj3 = gesture(gesture2[21]);
  function ae() {
    if (disallowGesture === constants3.ONYX) {
      if (!translateX2) {
        let diff = disallowGesture3.get() - ONYX_BORDER_WIDTH;
      }
      return diff;
    }
    diff = disallowGesture3.get();
  }
  ae.__closure = {
    theme: tmp4,
    ThemeTypes: derivedStateFromSharedValue,
    isChatBesideChannelList,
    translateX,
    ONYX_BORDER_WIDTH: isChatLockedOpen,
  };
  ae.__workletHash = 2787360249959;
  ae.__initData = __initData6;
  const derivedValue1 = gesture(gesture2[13]).useDerivedValue(ae);
  const items6 = [channelId, screenIndex, movePanel];
  callback3 = translateX2.useCallback((channelId) => {
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
  }, items6);
  const items7 = [movePanel];
  callback4 = translateX2.useCallback(() => {
    isChatLockedOpen(false, false, 0, true);
  }, items7);
  const items8 = [callback4];
  const effect3 = translateX2.useEffect(() => {
    closure_0 = derivedValue(gesture2[23]).addRouteChangeListener(() => {
      callback4();
    });
    return () => {
      closure_0();
    };
  }, items8);
  const items9 = [callback3, callback4];
  const effect4 = translateX2.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants2.SHOW_CHANNEL_DETAILS, callback3);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants2.HIDE_CHANNEL_DETAILS, callback4);
    return () => {
      const ComponentDispatch = gesture(gesture2[19]).ComponentDispatch;
      ComponentDispatch.unsubscribe(derivedValue.SHOW_CHANNEL_DETAILS, callback3);
      const ComponentDispatch2 = gesture(gesture2[19]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(derivedValue.HIDE_CHANNEL_DETAILS, callback4);
    };
  }, items9);
  const items10 = [derivedValue, callback4, channelId];
  const callback5 = translateX2.useCallback(() => {
    if (derivedValue.get() <= 0) {
      const obj2 = { shownPixels: derivedValue.get() };
      callback4.verbose("handleBackPress", "shownPixels <= 0", obj2);
      return false;
    } else {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
      const tmp23Result = useChatLayout;
      let coerceChannelRouteResult = NavigationRouteUtils.coerceChannelRoute(currentRoute);
      if (tmp3) {
        coerceChannelRouteResult = NavigationRouteUtils.coerceGuildsRoute(currentRoute);
        const tmp23Result4 = NavigationRouteUtils;
      }
      const obj3 = {
        route: coerceChannelRouteResult,
        channelId: gesture,
        currentRoute,
        isChatLockedOpen,
        routeParams: null,
      };
      let params1;
      if (coerceChannelRouteResult != null) {
        params1 = coerceChannelRouteResult.params;
      }
      obj3.routeParams = params1;
      callback4.verbose("handleBackPress", obj3);
      if (null == coerceChannelRouteResult) {
        const obj4 = { currentRoute, isChatLockedOpen };
        callback4.verbose("handleBackPress", "route is null", obj4);
        let flag = false;
      } else {
        const params2 = coerceChannelRouteResult.params;
        let channelId;
        if (params2 != null) {
          channelId = params2.channelId;
        }
        if (channelId !== gesture) {
          const params = coerceChannelRouteResult.params;
          let channelId1;
          if (params != null) {
            channelId1 = params.channelId;
          }
          const obj5 = { routeChannelId: channelId1, expectedChannelId: gesture };
          callback4.verbose("handleBackPress", "route channelId mismatch", obj5);
          flag = false;
        } else if (React5(gesture)) {
          callback4.verbose("handleBackPress", "cancelling search before closing panel");
          React6(gesture, false, "initial");
          flag = true;
        } else {
          callback4();
          flag = true;
        }
      }
      return flag;
    }
  }, items10);
  derivedValue(gesture2[26])(callback5, derivedStateFromSharedValue);
  const items11 = [channelId, screenIndex, callback4];
  const effect5 = translateX2.useEffect(() => {
    callback4();
  }, items11);
  let obj4 = gesture(gesture2[13]);
  let obj5 = {
    theme: tmp4,
    ThemeTypes: derivedStateFromSharedValue,
    isChatBesideChannelList,
    translateX,
    ONYX_BORDER_WIDTH: isChatLockedOpen,
  };
  redux = gesture(gesture2[27]).useNavigation();
  closure_129_0 = channelId;
  closure_129_1 = screenIndex;
  closure_129_2 = isDragging;
  closure_129_3 = derivedStateFromSharedValue;
  const items12 = [channelId, screenIndex, derivedStateFromSharedValue];
  const effect6 = translateX2.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    obj.trackWithMetadata(constants.MEMBER_LIST_SWIPE_TOGGLED, {
      channel_id: gesture,
      screen_index: String(derivedValue),
      member_list_open: disallowGesture,
    });
  }, items12);
  const items13 = [derivedStateFromSharedValue, channelId, screenIndex, isDragging];
  const effect7 = translateX2.useEffect(() => {
    value = disallowGesture;
    if (disallowGesture) {
      value = gesture2.get();
    }
    if (value) {
      const obj2 = { channel_id: gesture, screen_index: null };
      const _String = String;
      obj2.screen_index = String(derivedValue);
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.MEMBER_LIST_SWIPE_PEEK, obj2);
    }
  }, items13);
  gesture2 = undefined;
  translateX2 = undefined;
  gesture3 = undefined;
  disallowGesture2 = undefined;
  translateX3 = undefined;
  disallowGesture3 = undefined;
  isChatLockedOpen = undefined;
  const context = translateX2.useContext(derivedValue(gesture2[11]));
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
  const items14 = [gesture, gesture2, gesture3];
  const memo2 = obj.useMemo(() => {
    if (null == gesture3) {
      let result = gesture.simultaneousWithExternalGesture(gesture2);
    } else {
      result = gesture.simultaneousWithExternalGesture(gesture2, tmp);
    }
    return result;
  }, items14);
  const obj6 = gesture(gesture2[27]);
  const fn = function c() {
    return derivedValue.get() > 0;
  };
  fn.__closure = { shownPixels: derivedValue };
  fn.__workletHash = 15116046915956;
  fn.__initData = __initData;
  const fn2 = function o(arg0, arg1) {
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
  fn2.__closure = {
    mainDisallowGesture: disallowGesture,
    stackDisallowGesture: disallowGesture2,
    panelDisallowGesture: disallowGesture3,
  };
  fn2.__workletHash = 13681610289748;
  fn2.__initData = __initData2;
  const animatedReaction = gesture(gesture2[13]).useAnimatedReaction(fn, fn2);
  const tmp12Result = gesture(gesture2[13]);
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
  const animatedReaction1 = gesture(gesture2[13]).useAnimatedReaction(fn3, fn4);
  const tmp12Result6 = gesture(gesture2[13]);
  const unmountEffect = gesture(gesture2[14]).useUnmountEffect(() => {
    const result = disallowGesture3.set(false);
    const result1 = disallowGesture.set(false);
    if (disallowGesture2 != null) {
      const result2 = disallowGesture2.set(false);
    }
  });
  const items15 = [panelGestureContext, channelId, screenIndex, derivedStateFromSharedValue];
  const memo3 = obj.useMemo(() => {
    const obj = {};
    const merged = Object.assign(translateX3);
    obj.channelId = gesture;
    obj.screenIndex = derivedValue;
    obj.isPanelActive = derivedStateFromSharedValue;
    return obj;
  }, items15);
  const tmp12Result7 = gesture(gesture2[14]);
  const mainTabsChannelScreenStyles = gesture(gesture2[28]).useMainTabsChannelScreenStyles(
    isDragging,
    derivedValue1,
    maxWidth,
  );
  const tmp12Result8 = gesture(gesture2[28]);
  function ue() {
    const tmp = derivedValue.get() > 300;
    let str = "flex";
    if (tmp) {
      str = "none";
    }
    const obj2 = { display: str, opacity: null };
    let num = 0;
    if (!tmp) {
      num = 1 - derivedValue.get() / 150;
    }
    obj2.opacity = num;
    return obj2;
  }
  ue.__closure = { shownPixels: derivedValue, PEEK_PIXEL_THRESHOLD: 150 };
  ue.__workletHash = 9468759128012;
  ue.__initData = __initData7;
  const obj7 = { value: memo3, children: null };
  const animatedStyle = gesture(gesture2[13]).useAnimatedStyle(ue);
  const tmp12Result9 = gesture(gesture2[13]);
  let tmp39 = null;
  if (tmp12Result10.isJankScreenReportingEnabled()) {
    const obj8 = {
      position: translateX,
      openAt: 0,
      closedAt: maxWidth,
      resolveOpenName: tmp12(tmp3[31]).getBaseScreenName,
      resolveClosedName: tmp12(tmp3[31]).getBaseScreenName,
      onCoveringChange: callback2,
    };
    tmp39 = memo1(tmp2(tmp3[30]), obj8);
    const tmp2Result = tmp2(tmp3[30]);
  }
  const items16 = [tmp39];
  let obj9 = { gesture: memo2, children: null };
  const obj10 = {
    onAccessibilityEscape() {
      if (gesture2) {
        navigation.goBack();
      }
    },
    style,
    children: null,
  };
  const obj11 = {
    name: "channel_screen",
    navigationKey: channelId,
    definition: gesture(gesture2[34]).CHANNEL_NAVIGATION_TTI,
    visibilityMode: "prerendered",
    isVisible: isNavigationTTIVisible,
    descendantTracking: "included",
    accessibilityElementsHidden: derivedStateFromSharedValue || undefined,
    importantForAccessibility: null,
    style: null,
    children: null,
  };
  let str;
  if (derivedStateFromSharedValue) {
    str = "no-hide-descendants";
  }
  obj11.importantForAccessibility = str;
  obj11.style = tmp.content;
  const items17 = [
    children,
    memo1(gesture(gesture2[35]).MainTabsContentScrim, { translateX: derivedValue1, maxWidth }),
  ];
  obj11.children = items17;
  const items18 = [callback3(gesture(gesture2[33]).NavTTISurfaceProvider, obj11)];
  const items19 = [mainTabsChannelScreenStyles, tmp.memberListContainer, ,];
  let onyxBorder;
  if (tmp4 === derivedStateFromSharedValue.ONYX) {
    onyxBorder = tmp.onyxBorder;
  }
  items19[2] = onyxBorder;
  let onyxRightOverflow;
  if (!isChatBesideChannelList) {
    if (tmp4 === tmp19.ONYX) {
      onyxRightOverflow = tmp.onyxRightOverflow;
    }
  }
  const obj12 = {
    style: items19,
    accessibilityElementsHidden: !derivedStateFromSharedValue,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  items19[3] = onyxRightOverflow;
  const items20 = [memo1(derivedValue(gesture2[36]), { absolute: true, withOverlay: true, overlayOpacity: 0.5 }), ,];
  tmp12Result10 = gesture(gesture2[29]);
  const tmp46 = !derivedStateFromSharedValue;
  items20[1] = memo1(gesture(gesture2[37]).LayerScope, {
    children: memo1(derivedValue(gesture2[38]), {
      isShowing: derivedStateFromSharedValue,
      channelId: tmp5[0],
      isSearchLocked: false,
      onBackPress: callback5,
      componentWidth: tmp8,
      onChannelDeleted: callback4,
    }),
  });
  const obj14 = { style: null, children: memo1(disallowGesture2, { style: tmp.memberListPreview }) };
  const items21 = [gesture3.absoluteFill, animatedStyle];
  obj14.style = items21;
  items20[2] = memo1(derivedValue(gesture2[13]).View, obj14);
  obj12.children = items20;
  items18[1] = callback3(derivedValue(gesture2[13]).View, obj12);
  obj10.children = items18;
  obj9.children = callback3(disallowGesture2, obj10);
  items16[1] = memo1(gesture(gesture2[32]).GestureDetector, obj9);
  obj7.children = items16;
  return callback3(redux.Provider, obj7);
}
export const SwipeForMemberListContext = context;
