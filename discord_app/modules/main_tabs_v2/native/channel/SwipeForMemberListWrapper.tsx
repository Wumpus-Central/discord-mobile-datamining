// discord_app/modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx
import timestampDefault from "../../../debug/Logger.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import useChannelDetailsStore from "../sidebar/details/stores/ChannelDetailsStore.tsx";
import { MIDNIGHT_BORDER_WIDTH } from "../shared_components/MainTabsV2Constants.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c4 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
({ getIsChannelDetailsSearchActive: error, setIsChannelDetailsSearchActive: closure_8 } = useChannelDetailsStore);
({ AnalyticEvents: c10, ComponentActions: unpackModuleId, ThemeTypes: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = new timestampDefault("SwipeForMemberListWrapper");
let context = importAllResult.createContext(undefined);
let obj = { memberListPreview: null, content: null, memberListContainer: null, midnightBorder: null, midnightRightOverflow: null };
obj = { flex: 1, justifyContent: "center", alignItems: "flex-start", overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
createCacheKey = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.overflow = "hidden";
obj[1] = createCacheKey;
const tmp6 = new timestampDefault("SwipeForMemberListWrapper");
obj[2] = { flex: 1, overflow: "hidden", backgroundColor: ThemesDefault.colors.MODAL_BACKGROUND };
let obj2 = { flex: 1, overflow: "hidden", backgroundColor: ThemesDefault.colors.MODAL_BACKGROUND };
obj[3] = { borderLeftColor: ThemesDefault.colors.BORDER_STRONG, borderLeftWidth: MIDNIGHT_BORDER_WIDTH };
obj[4] = { right: -MIDNIGHT_BORDER_WIDTH };
let closure_17 = createCacheKey.createStyles(obj);
let closure_18 = { code: "function SwipeForMemberListWrapperTsx1(){const{shownPixels}=this.__closure;return shownPixels.get()>0;}" };
let closure_19 = { code: "function SwipeForMemberListWrapperTsx2(isVisible,wasVisible){const{mainDisallowGesture,stackDisallowGesture,panelDisallowGesture}=this.__closure;var _stackDisallowGesture;if(isVisible===wasVisible)return;mainDisallowGesture.set(isVisible);(_stackDisallowGesture=stackDisallowGesture)===null||_stackDisallowGesture===void 0||_stackDisallowGesture.set(isVisible);if(!isVisible){panelDisallowGesture.set(false);}}" };
let closure_20 = { code: "function SwipeForMemberListWrapperTsx3(){const{isChatLockedOpen,mainTranslateX,stackTranslateX}=this.__closure;return!isChatLockedOpen&&mainTranslateX.get()>0||stackTranslateX!=null&&stackTranslateX.get()>0;}" };
let closure_21 = { code: "function SwipeForMemberListWrapperTsx4(isInactive,wasInactive){const{panelDisallowGesture}=this.__closure;if(isInactive===wasInactive)return;panelDisallowGesture.set(isInactive);}" };
let closure_22 = { code: "function SwipeForMemberListWrapperTsx5(){const{maxWidth,translateX}=this.__closure;return maxWidth-translateX.get();}" };
let closure_23 = { code: "function SwipeForMemberListWrapperTsx6(){const{theme,ThemeTypes,isChatBesideChannelList,translateX,MIDNIGHT_BORDER_WIDTH}=this.__closure;if(theme!==ThemeTypes.MIDNIGHT||isChatBesideChannelList)return translateX.get();return translateX.get()-MIDNIGHT_BORDER_WIDTH;}" };
let closure_24 = { code: "function SwipeForMemberListWrapperTsx7(){const{shownPixels,PEEK_PIXEL_THRESHOLD}=this.__closure;const exceedsPeekThreshold=shownPixels.get()>PEEK_PIXEL_THRESHOLD*2;return{display:exceedsPeekThreshold?'none':'flex',opacity:exceedsPeekThreshold?0:1-shownPixels.get()/PEEK_PIXEL_THRESHOLD};}" };
let obj3 = { borderLeftColor: ThemesDefault.colors.BORDER_STRONG, borderLeftWidth: MIDNIGHT_BORDER_WIDTH };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx");

export default function _default(channelId) {
  channelId = channelId.channelId;
  gesture = channelId;
  const screenIndex = channelId.screenIndex;
  let derivedValue = screenIndex;
  let gesture2 = channelId.isBackEnabled;
  let disallowGesture;
  let translateX2;
  let gesture3;
  let disallowGesture2;
  let translateX3;
  let disallowGesture3;
  let isChatLockedOpen;
  let maxWidth;
  derivedValue = undefined;
  let derivedStateFromSharedValue;
  let callback2;
  let callback3;
  closure_15 = undefined;
  ({ children, style } = channelId);
  let tmp = callback();
  let tmp4 = derivedValue(gesture2[15])();
  disallowGesture = tmp4;
  const isChatBesideChannelList = derivedValue(gesture2[12])().isChatBesideChannelList;
  translateX2 = isChatBesideChannelList;
  let obj = translateX2;
  const tmp5 = disallowGesture(translateX2.useState(channelId), 2);
  gesture3 = tmp5[1];
  const items = [channelId];
  const effect = translateX2.useEffect(() => {
    closure_0 = gesture(gesture2[16]).runAfterInteractions(() => {
      callback(closure_0);
    }, 200);
    return () => {
      closure_0.cancel();
    };
  }, items);
  callback = translateX2.useCallback(() => {
    gesture(gesture2[17]).dismissKeyboard();
  }, []);
  const tmp8 = derivedValue(gesture2[18])(screenIndex);
  disallowGesture2 = tmp8;
  const items1 = [tmp4, tmp8];
  const items2 = [channelId, screenIndex];
  const memo = translateX2.useMemo(() => {
    if (disallowGesture === derivedStateFromSharedValue.MIDNIGHT) {
      let sum = disallowGesture2 + isChatLockedOpen;
    } else {
      sum = disallowGesture2;
    }
    return sum;
  }, items1);
  const callback1 = translateX2.useCallback((arg0) => {
    if (!arg0) {
      disallowGesture3(gesture, false, "initial");
      const ComponentDispatch = gesture(gesture2[19]).ComponentDispatch;
      const obj = { channelId: null, screenIndex: null };
      obj[0] = gesture;
      obj[1] = derivedValue;
      ComponentDispatch.dispatch(derivedValue.CHANNEL_DETAILS_HIDDEN, obj);
    }
  }, items2);
  const tmp11 = derivedValue(gesture2[20])({ canDrag: true, onDragStart: callback, onPreMovement: callback1, startShown: false, cancelOnSwipeRightFromStart: true, openWidth: memo });
  ({ gesture, panelGestureContext } = tmp11);
  translateX3 = panelGestureContext;
  ({ isDragging, translateX } = tmp11);
  disallowGesture3 = translateX;
  const movePanel = tmp11.movePanel;
  isChatLockedOpen = movePanel;
  maxWidth = tmp11.maxWidth;
  obj1 = gesture(gesture2[13]);
  class X {
    constructor() {
      return maxWidth - disallowGesture.get();
    }
  }
  X.__closure = { maxWidth, translateX };
  X.__workletHash = 10842481670591;
  X.__initData = closure_22;
  derivedValue = obj1.useDerivedValue(X);
  let obj2 = gesture(gesture2[21]);
  derivedStateFromSharedValue = obj2.useDerivedStateFromSharedValue(derivedValue, (arg0) => arg0 > 0);
  const items3 = [derivedStateFromSharedValue, channelId, screenIndex];
  const effect1 = translateX2.useEffect(() => {
    if (derivedStateFromSharedValue) {
      const ComponentDispatch = gesture(gesture2[19]).ComponentDispatch;
      const obj = { channelId: null, screenIndex: null };
      obj[0] = gesture;
      obj[1] = derivedValue;
      ComponentDispatch.dispatch(derivedValue.CHANNEL_DETAILS_SHOWN, obj);
    }
  }, items3);
  let obj3 = gesture(gesture2[13]);
  function te() {
    if (disallowGesture === derivedStateFromSharedValue.MIDNIGHT) {
      if (!translateX2) {
        let diff = disallowGesture3.get() - isChatLockedOpen;
      }
      return diff;
    }
    diff = disallowGesture3.get();
  }
  obj = { theme: tmp4, ThemeTypes: derivedStateFromSharedValue, isChatBesideChannelList, translateX, MIDNIGHT_BORDER_WIDTH: isChatLockedOpen };
  te.__closure = obj;
  te.__workletHash = 5498466465211;
  te.__initData = closure_23;
  const derivedValue1 = obj3.useDerivedValue(te);
  const items4 = [channelId, screenIndex, movePanel];
  callback2 = translateX2.useCallback((channelId) => {
    let tmp = channelId.channelId === gesture;
    if (tmp) {
      tmp = channelId.screenIndex === derivedValue;
    }
    if (tmp) {
      gesture(gesture2[17]).dismissKeyboard();
      if (true === channelId.search) {
        disallowGesture3(channelId.channelId, true, "initial");
      }
      isChatLockedOpen(true, false, 0, true);
      const obj = gesture(gesture2[17]);
    }
  }, items4);
  const items5 = [movePanel];
  callback3 = translateX2.useCallback(() => {
    isChatLockedOpen(false, false, 0, true);
  }, items5);
  const items6 = [callback3];
  const effect2 = translateX2.useEffect(() => {
    closure_0 = derivedValue(gesture2[22]).addRouteChangeListener(() => {
      callback2();
    });
    return () => {
      callback();
    };
  }, items6);
  const items7 = [callback2, callback3];
  const effect3 = translateX2.useEffect(() => {
    let ComponentDispatch = gesture(gesture2[19]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(derivedValue.SHOW_CHANNEL_DETAILS, callback2);
    let ComponentDispatch2 = gesture(gesture2[19]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(derivedValue.HIDE_CHANNEL_DETAILS, callback3);
    return () => {
      const ComponentDispatch = closure_1_0(closure_1_2[19]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_1_11.SHOW_CHANNEL_DETAILS, closure_13);
      const ComponentDispatch2 = closure_1_0(closure_1_2[19]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(closure_1_11.HIDE_CHANNEL_DETAILS, closure_14);
    };
  }, items7);
  const items8 = [derivedValue, callback3, channelId];
  const callback4 = translateX2.useCallback(() => {
    let obj = derivedValue;
    if (derivedValue.get() <= 0) {
      obj = { shownPixels: null };
      obj[0] = obj.get();
      navigation.verbose("handleBackPress", "shownPixels <= 0", obj);
      return false;
    } else {
      const rootNavigationRef = gesture(gesture2[23]).getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      let tmp23Result = tmp23(tmp24[12]);
      isChatLockedOpen = tmp23Result.getChatLayout().isChatLockedOpen;
      tmp23Result = tmp23(tmp24[24]);
      let coerceChannelRouteResult = tmp23Result.coerceChannelRoute(currentRoute);
      if (tmp3) {
        coerceChannelRouteResult = tmp23(tmp24[24]).coerceGuildsRoute(currentRoute);
        const tmp23Result1 = tmp23(tmp24[24]);
      }
      obj = { route: null, channelId: null, currentRoute: null, isChatLockedOpen: null, routeParams: null };
      obj[0] = coerceChannelRouteResult;
      obj[1] = gesture;
      obj[2] = currentRoute;
      obj[3] = isChatLockedOpen;
      let params;
      if (coerceChannelRouteResult != null) {
        params = coerceChannelRouteResult.params;
      }
      obj[4] = params;
      navigation.verbose("handleBackPress", obj);
      if (null == coerceChannelRouteResult) {
        obj1 = { currentRoute: null, isChatLockedOpen: null };
        obj1[0] = currentRoute;
        obj1[1] = isChatLockedOpen;
        navigation.verbose("handleBackPress", "route is null", obj1);
        let flag = false;
      } else {
        const params2 = coerceChannelRouteResult.params;
        let channelId;
        if (params2 != null) {
          channelId = params2.channelId;
        }
        if (channelId !== tmp5) {
          params = coerceChannelRouteResult.params;
          let channelId1;
          if (params != null) {
            channelId1 = params.channelId;
          }
          const obj2 = { routeChannelId: null, expectedChannelId: null };
          obj2[0] = channelId1;
          obj2[1] = tmp5;
          navigation.verbose("handleBackPress", "route channelId mismatch", obj2);
          flag = false;
        } else if (translateX3(tmp5)) {
          navigation.verbose("handleBackPress", "cancelling search before closing panel");
          disallowGesture3(tmp5, false, "initial");
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
  closure_15 = obj5.useNavigation();
  gesture = channelId;
  derivedValue = screenIndex;
  gesture2 = isDragging;
  disallowGesture = derivedStateFromSharedValue;
  const items10 = [channelId, screenIndex, derivedStateFromSharedValue];
  const effect5 = translateX2.useEffect(() => {
    let obj = derivedValue(gesture2[10]);
    obj = { channel_id: gesture, screen_index: String(derivedValue), member_list_open: disallowGesture };
    obj.trackWithMetadata(maxWidth.MEMBER_LIST_SWIPE_TOGGLED, obj);
  }, items10);
  const items11 = [derivedStateFromSharedValue, channelId, screenIndex, isDragging];
  const effect6 = translateX2.useEffect(() => {
    let value = disallowGesture;
    if (disallowGesture) {
      value = gesture2.get();
    }
    if (value) {
      let obj = derivedValue(gesture2[10]);
      obj = { channel_id: null, screen_index: null };
      obj[0] = gesture;
      const _String = String;
      obj[1] = String(derivedValue);
      obj.trackWithMetadata(maxWidth.MEMBER_LIST_SWIPE_PEEK, obj);
    }
  }, items11);
  gesture2 = undefined;
  disallowGesture = undefined;
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
  fn.__initData = closure_18;
  const fn2 = function o(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = disallowGesture.set(arg0);
      if (disallowGesture2 != null) {
        const result1 = obj.set(arg0);
      }
      if (!arg0) {
        const result2 = disallowGesture3.set(false);
      }
      obj = disallowGesture2;
    }
  };
  fn2.__closure = { mainDisallowGesture: disallowGesture, stackDisallowGesture: disallowGesture2, panelDisallowGesture: disallowGesture3 };
  fn2.__workletHash = 13681610289748;
  fn2.__initData = closure_19;
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
        tmp4 = obj.get() > 0;
      }
      tmp = tmp4;
      obj = translateX3;
    }
    return tmp;
  };
  fn3.__closure = { isChatLockedOpen, mainTranslateX: translateX2, stackTranslateX: translateX3 };
  fn3.__workletHash = 11938850302839;
  fn3.__initData = closure_20;
  const fn4 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = disallowGesture3.set(arg0);
    }
  };
  fn4.__closure = { panelDisallowGesture: disallowGesture3 };
  fn4.__workletHash = 3362957347102;
  fn4.__initData = closure_21;
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
  function le() {
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
    obj[1] = num;
    return obj;
  }
  le.__closure = { shownPixels: derivedValue, PEEK_PIXEL_THRESHOLD: 150 };
  le.__workletHash = 9468759128012;
  le.__initData = closure_24;
  obj = { value: memo2, children: null };
  const animatedStyle = gesture(gesture2[13]).useAnimatedStyle(le);
  obj1 = { gesture: memo1, children: null };
  obj2 = {
    style,
    onAccessibilityEscape() {
      if (gesture2) {
        navigation.goBack();
      }
    },
    children: null
  };
  obj3 = { style: tmp.content, accessibilityElementsHidden: derivedStateFromSharedValue, importantForAccessibility: null, children: null };
  let str;
  if (derivedStateFromSharedValue) {
    str = "no-hide-descendants";
  }
  obj3[2] = str;
  const items14 = [children, callback2(gesture(gesture2[29]).MainTabsContentScrim, { translateX: derivedValue1, maxWidth })];
  obj3[3] = items14;
  const items15 = [callback3(disallowGesture2, obj3), ];
  const items16 = [mainTabsChannelScreenStyles, tmp.memberListContainer, , ];
  let midnightBorder;
  if (tmp4 === derivedStateFromSharedValue.MIDNIGHT) {
    midnightBorder = tmp.midnightBorder;
  }
  items16[2] = midnightBorder;
  let prop;
  if (!isChatBesideChannelList) {
    if (tmp4 === tmp16.MIDNIGHT) {
      prop = tmp.midnightRightOverflow;
    }
  }
  const obj4 = { style: items16, accessibilityElementsHidden: !derivedStateFromSharedValue, importantForAccessibility: "no-hide-descendants", children: null };
  items16[3] = prop;
  const items17 = [callback2(derivedValue(gesture2[30]), { absolute: true, withOverlay: true, overlayOpacity: 0.5 }), , ];
  obj5 = { children: tmp35(tmp2(tmp3[32]), { isShowing: derivedStateFromSharedValue, channelId: tmp5[0], isSearchLocked: false, onBackPress: callback4, componentWidth: tmp8, onChannelDeleted: callback3 }) };
  items17[1] = callback2(gesture(gesture2[31]).LayerScope, obj5);
  const tmp12Result3 = gesture(gesture2[13]);
  const tmp41 = !derivedStateFromSharedValue;
  const items18 = [gesture3.absoluteFill, animatedStyle];
  items17[2] = callback2(derivedValue(gesture2[13]).View, { style: items18, children: callback2(disallowGesture2, obj7) });
  obj4[3] = items17;
  items15[1] = callback3(derivedValue(gesture2[13]).View, obj4);
  obj2[2] = items15;
  obj1[1] = callback3(disallowGesture2, obj2);
  obj[1] = callback2(gesture(gesture2[28]).GestureDetector, obj1);
  return callback2(context.Provider, obj);
};
export const SwipeForMemberListContext = context;