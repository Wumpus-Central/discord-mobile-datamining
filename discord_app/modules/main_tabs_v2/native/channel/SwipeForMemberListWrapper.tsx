// === Module 16785: SwipeForMemberListWrapper ===

// Module 16785 (SwipeForMemberListWrapper)
import LoggerDefault from "Logger" /* 3 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import RootNavigationRef from "RootNavigationRef" /* 4737 */;
import useChatLayout from "useChatLayout" /* 4739 */;
import ChatInputUtils from "ChatInputUtils" /* 4745 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5070 */;
import useMountEffect from "useMountEffect" /* 5590 */;
import react_native from "react-native" /* 7499 */;
import getJankSurfaceName from "getJankSurfaceName" /* 15939 */;
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 16324 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 7511 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useChatLayoutDefault = useChatLayout;
const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;
let _require, channelId, dependencyMap, num2;

let c10;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let StyleSheet = react_native2.StyleSheet;
let View = react_native2.View;
({ getIsChannelDetailsSearchActive: metroImportDefault, setIsChannelDetailsSearchActive: metroImportAll } = ChannelDetailsStore);
const ONYX_BORDER_WIDTH = react_native.ONYX_BORDER_WIDTH;
({ AnalyticEvents: c10, ComponentActions: unpackModuleId, ThemeTypes: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let tmp6 = new LoggerDefault("SwipeForMemberListWrapper");
let closure_15 = tmp6;
let c16 = 150;
let context = react.createContext(undefined);
let createStyles = createStyles_mod;
let obj = { memberListPreview: obj2, content: obj3, memberListContainer: obj4, onyxBorder: obj5, onyxRightOverflow: { right: -ONYX_BORDER_WIDTH } };
obj2 = { flex: 1, justifyContent: "center", alignItems: "flex-start", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { overflow: "hidden" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MODAL_BACKGROUND };
obj5 = { borderLeftColor: nativeDefault.colors.BORDER_STRONG, borderLeftWidth: ONYX_BORDER_WIDTH };
let closure_18 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel_id, arg1, arg2, member_list_open) => {
  let closure_2;
  _require = channel_id;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === channel_id) {
    if (cResult[1] === member_list_open) {
      let tmp2;
      let tmp3;
      if (cResult[2] === arg1) {
        tmp2 = cResult[3];
        tmp3 = cResult[4];
      }
      const effect = react.useEffect(tmp2, tmp3);
      if (cResult[5] === channel_id) {
        if (cResult[6] === arg2) {
          if (cResult[7] === member_list_open) {
            let tmp5;
            let tmp6;
            if (cResult[8] === arg1) {
              tmp5 = cResult[9];
              tmp6 = cResult[10];
            }
            const effect1 = react.useEffect(tmp5, tmp6);
          }
        }
      }
      const fn2 = function h() {
        const value = member_list_open && closure_2.get();
        if (value) {
          const _String = String;
          const obj = { channel_id, screen_index: String(closure_1) };
          const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
          const MEMBER_LIST_SWIPE_PEEK = constants.MEMBER_LIST_SWIPE_PEEK;
          AppAnalyticsUtilsDefault;
          trackWithMetadata(MEMBER_LIST_SWIPE_PEEK, obj);
        }
      };
      const items = [member_list_open, channel_id, arg1, arg2];
      cResult[5] = channel_id;
      cResult[6] = arg2;
      cResult[7] = member_list_open;
      cResult[8] = arg1;
      cResult[9] = fn2;
      cResult[10] = items;
      tmp6 = items;
      tmp5 = fn2;
    }
  }
  const fn = function c() {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { channel_id, screen_index: String(closure_1), member_list_open };
    obj.trackWithMetadata(constants.MEMBER_LIST_SWIPE_TOGGLED, obj2);
  };
  const items1 = [channel_id, arg1, member_list_open];
  cResult[0] = channel_id;
  cResult[1] = member_list_open;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp3 = items1;
  tmp2 = fn;
}) : ((channel_id, arg1, arg2, member_list_open) => {
  let closure_1 = arg1;
  let closure_2 = arg2;
  const items = [channel_id, arg1, member_list_open];
  const effect = react.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { channel_id, screen_index: String(closure_1), member_list_open };
    obj.trackWithMetadata(constants.MEMBER_LIST_SWIPE_TOGGLED, obj2);
  }, items);
  const items1 = [member_list_open, channel_id, arg1, arg2];
  const effect1 = react.useEffect(() => {
    const value = member_list_open && closure_2.get();
    if (value) {
      const _String = String;
      const obj = { channel_id, screen_index: String(closure_1) };
      const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
      const MEMBER_LIST_SWIPE_PEEK = constants.MEMBER_LIST_SWIPE_PEEK;
      AppAnalyticsUtilsDefault;
      trackWithMetadata(MEMBER_LIST_SWIPE_PEEK, obj);
    }
  }, items1);
});
const __initData = { code: "function SwipeForMemberListWrapperTsx1(){const{shownPixels}=this.__closure;return shownPixels.get()>0;}" };
const __initData2 = { code: "function SwipeForMemberListWrapperTsx2(isVisible,wasVisible){const{mainDisallowGesture,stackDisallowGesture,panelDisallowGesture}=this.__closure;var _stackDisallowGesture;if(isVisible===wasVisible){return;}mainDisallowGesture.set(isVisible);(_stackDisallowGesture=stackDisallowGesture)===null||_stackDisallowGesture===void 0||_stackDisallowGesture.set(isVisible);if(!isVisible){panelDisallowGesture.set(false);}}" };
const __initData3 = { code: "function SwipeForMemberListWrapperTsx3(){const{isChatLockedOpen,mainTranslateX,stackTranslateX}=this.__closure;return!isChatLockedOpen&&mainTranslateX.get()>0||stackTranslateX!=null&&stackTranslateX.get()>0;}" };
const __initData4 = { code: "function SwipeForMemberListWrapperTsx4(isInactive,wasInactive){const{panelDisallowGesture}=this.__closure;if(isInactive===wasInactive){return;}panelDisallowGesture.set(isInactive);}" };
const __initData5 = { code: "function SwipeForMemberListWrapperTsx5(){const{shownPixels}=this.__closure;return shownPixels.get()>0;}" };
const __initData6 = { code: "function SwipeForMemberListWrapperTsx6(isVisible,wasVisible){const{mainDisallowGesture,stackDisallowGesture,panelDisallowGesture}=this.__closure;var _stackDisallowGesture;if(isVisible===wasVisible)return;mainDisallowGesture.set(isVisible);(_stackDisallowGesture=stackDisallowGesture)===null||_stackDisallowGesture===void 0||_stackDisallowGesture.set(isVisible);if(!isVisible){panelDisallowGesture.set(false);}}" };
const __initData7 = { code: "function SwipeForMemberListWrapperTsx7(){const{isChatLockedOpen,mainTranslateX,stackTranslateX}=this.__closure;return!isChatLockedOpen&&mainTranslateX.get()>0||stackTranslateX!=null&&stackTranslateX.get()>0;}" };
const __initData8 = { code: "function SwipeForMemberListWrapperTsx8(isInactive,wasInactive){const{panelDisallowGesture}=this.__closure;if(isInactive===wasInactive)return;panelDisallowGesture.set(isInactive);}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((simultaneousWithExternalGesture, shownPixels, disallowGesture) => {
  let disallowGesture2;
  let gesture;
  let gesture2;
  let tmp6;
  _require = shownPixels;
  const obj = react2;
  const cResult = obj.c(11);
  context = react.useContext(MainTabsNavigatorPanelContextDefault);
  ({ gesture, disallowGesture } = context);
  const translateX = context.translateX;
  let context1 = react.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  if (context1 == null) {
    context1 = {};
  }
  ({ gesture: gesture2, disallowGesture: disallowGesture2 } = context1);
  const translateX2 = context1.translateX;
  const disallowGesture3 = disallowGesture.disallowGesture;
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  if (null == gesture2) {
    if (cResult[0] === simultaneousWithExternalGesture) {
      let tmp8;
      if (cResult[1] === gesture) {
        tmp8 = cResult[2];
      }
      tmp6 = tmp8;
    }
    let result = simultaneousWithExternalGesture.simultaneousWithExternalGesture(gesture);
    cResult[0] = simultaneousWithExternalGesture;
    cResult[1] = gesture;
    cResult[2] = result;
    tmp8 = result;
  } else {
    if (cResult[3] === simultaneousWithExternalGesture) {
      if (cResult[4] === gesture) {
        if (cResult[5] === gesture2) {
          tmp6 = cResult[6];
        }
      }
    }
    let result1 = simultaneousWithExternalGesture.simultaneousWithExternalGesture(gesture, gesture2);
    cResult[3] = simultaneousWithExternalGesture;
    cResult[4] = gesture;
    cResult[5] = gesture2;
    cResult[6] = result1;
    tmp6 = result1;
  }
  const tmpResult = ReanimatedRexport;
  class T {
    constructor() {
      return closure_0.get() > 0;
    }
  }
  T.__closure = { shownPixels };
  T.__workletHash = 15116046915956;
  T.__initData = __initData;
  class S {
    constructor(arg0, arg1) {
      if (simultaneousWithExternalGesture !== shownPixels) {
        tmp = disallowGesture;
        result = disallowGesture.set(simultaneousWithExternalGesture);
        obj = disallowGesture;
        tmp3 = null;
        if (disallowGesture != null) {
          result1 = obj.set(simultaneousWithExternalGesture);
        }
        if (!simultaneousWithExternalGesture) {
          tmp5 = disallowGesture;
          flag = false;
          result2 = disallowGesture.set(false);
        }
      }
      return;
    }
  }
  S.__closure = { mainDisallowGesture: disallowGesture, stackDisallowGesture: disallowGesture2, panelDisallowGesture: disallowGesture3 };
  S.__workletHash = 6486402074354;
  S.__initData = __initData2;
  const animatedReaction = tmpResult.useAnimatedReaction(T, S);
  const tmpResult3 = ReanimatedRexport;
  class P {
    constructor() {
      tmp = !isChatLockedOpen;
      if (tmp) {
        tmp2 = translateX;
        num = 0;
        tmp = translateX.get() > 0;
      }
      if (!tmp) {
        obj = translateX;
        tmp3 = null;
        tmp4 = null != translateX;
        if (tmp4) {
          num2 = 0;
          tmp4 = obj.get() > 0;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  }
  P.__closure = { isChatLockedOpen, mainTranslateX: translateX, stackTranslateX: translateX2 };
  P.__workletHash = 11938850302839;
  P.__initData = __initData3;
  class I {
    constructor(arg0, arg1) {
      if (simultaneousWithExternalGesture !== shownPixels) {
        tmp = disallowGesture;
        result = disallowGesture.set(simultaneousWithExternalGesture);
      }
      return;
    }
  }
  I.__closure = { panelDisallowGesture: disallowGesture3 };
  I.__workletHash = 10319768602360;
  I.__initData = __initData4;
  const animatedReaction1 = tmpResult3.useAnimatedReaction(P, I);
  if (cResult[7] === disallowGesture) {
    if (cResult[8] === disallowGesture3) {
      let tmp12;
      if (cResult[9] === disallowGesture2) {
        tmp12 = cResult[10];
      }
      const tmpResult4 = useMountEffect;
      const unmountEffect = tmpResult4.useUnmountEffect(tmp12);
      return tmp6;
    }
  }
  class N {
    constructor() {
      result = disallowGesture.set(false);
      result1 = disallowGesture.set(false);
      obj = disallowGesture;
      if (disallowGesture != null) {
        result2 = obj.set(false);
      }
      return;
    }
  }
  cResult[7] = disallowGesture;
  cResult[8] = disallowGesture3;
  cResult[9] = disallowGesture2;
  cResult[10] = N;
  tmp12 = N;
}) : ((arg0, shownPixels, disallowGesture) => {
  let closure_0 = arg0;
  let closure_1 = shownPixels;
  context = react.useContext(MainTabsNavigatorPanelContextDefault);
  const gesture = context.gesture;
  disallowGesture = context.disallowGesture;
  const translateX = context.translateX;
  let context1 = react.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  if (context1 == null) {
    context1 = {};
  }
  const gesture2 = context1.gesture;
  const disallowGesture2 = context1.disallowGesture;
  const translateX2 = context1.translateX;
  const disallowGesture3 = disallowGesture.disallowGesture;
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const items = [arg0, gesture, gesture2];
  const memo = react.useMemo(() => {
    let result;
    if (null == gesture2) {
      result = closure_0.simultaneousWithExternalGesture(gesture);
    } else {
      result = closure_0.simultaneousWithExternalGesture(gesture, tmp);
    }
    return result;
  }, items);
  const fn = function c() {
    return closure_1.get() > 0;
  };
  fn.__closure = { shownPixels };
  fn.__workletHash = 4626487704816;
  fn.__initData = __initData5;
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
  fn2.__closure = { mainDisallowGesture: disallowGesture, stackDisallowGesture: disallowGesture2, panelDisallowGesture: disallowGesture3 };
  fn2.__workletHash = 3192051078608;
  fn2.__initData = __initData6;
  const tmp4Result = ReanimatedRexport;
  const animatedReaction = tmp4Result.useAnimatedReaction(fn, fn2);
  const fn3 = function h() {
    let tmp = !isChatLockedOpen && translateX.get() > 0;
    if (!tmp) {
      tmp = null != translateX2 && translateX2.get() > 0;
      const tmp4 = null != translateX2 && translateX2.get() > 0;
    }
    return tmp;
  };
  fn3.__closure = { isChatLockedOpen, mainTranslateX: translateX, stackTranslateX: translateX2 };
  fn3.__workletHash = 1449291091699;
  fn3.__initData = __initData7;
  const fn4 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = disallowGesture3.set(arg0);
    }
  };
  fn4.__closure = { panelDisallowGesture: disallowGesture3 };
  fn4.__workletHash = 2862830673810;
  fn4.__initData = __initData8;
  const tmp4Result3 = ReanimatedRexport;
  const animatedReaction1 = tmp4Result3.useAnimatedReaction(fn3, fn4);
  const tmp4Result4 = useMountEffect;
  const unmountEffect = tmp4Result4.useUnmountEffect(() => {
    const result = disallowGesture3.set(false);
    const result1 = disallowGesture.set(false);
    if (disallowGesture2 != null) {
      const result2 = disallowGesture2.set(false);
    }
  });
  return memo;
});
const __initData9 = { code: "function SwipeForMemberListWrapperTsx9(){const{maxWidth,translateX}=this.__closure;return maxWidth-translateX.get();}" };
let closure_30 = { code: "function SwipeForMemberListWrapperTsx10(){const{theme,ThemeTypes,isChatBesideChannelList,translateX,ONYX_BORDER_WIDTH}=this.__closure;if(theme!==ThemeTypes.ONYX||isChatBesideChannelList){return translateX.get();}return translateX.get()-ONYX_BORDER_WIDTH;}" };
let closure_31 = { code: "function SwipeForMemberListWrapperTsx11(){const{shownPixels,PEEK_PIXEL_THRESHOLD}=this.__closure;const exceedsPeekThreshold=shownPixels.get()>PEEK_PIXEL_THRESHOLD*2;return{display:exceedsPeekThreshold?\"none\":\"flex\",opacity:exceedsPeekThreshold?0:1-shownPixels.get()/PEEK_PIXEL_THRESHOLD};}" };
const __initData10 = { code: "function SwipeForMemberListWrapperTsx12(){const{maxWidth,translateX}=this.__closure;return maxWidth-translateX.get();}" };
const __initData11 = { code: "function SwipeForMemberListWrapperTsx13(){const{theme,ThemeTypes,isChatBesideChannelList,translateX,ONYX_BORDER_WIDTH}=this.__closure;if(theme!==ThemeTypes.ONYX||isChatBesideChannelList)return translateX.get();return translateX.get()-ONYX_BORDER_WIDTH;}" };
const __initData12 = { code: "function SwipeForMemberListWrapperTsx14(){const{shownPixels,PEEK_PIXEL_THRESHOLD}=this.__closure;const exceedsPeekThreshold=shownPixels.get()>PEEK_PIXEL_THRESHOLD*2;return{display:exceedsPeekThreshold?'none':'flex',opacity:exceedsPeekThreshold?0:1-shownPixels.get()/PEEK_PIXEL_THRESHOLD};}" };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let children;
  let closure_3;
  let derivedValue;
  let isBackEnabled;
  let isDragging;
  let isNavigationTTIVisible;
  let panelGestureContext;
  let screenIndex;
  let style;
  let tmp11;
  let tmp8;
  let tmp9;
  let translateX;
  let tmp = channelId;
  let obj = channelId(isBackEnabled[11]);
  const cResult = obj.c(102);
  channelId = channelId.channelId;
  ({ isNavigationTTIVisible, screenIndex } = channelId);
  isBackEnabled = channelId.isBackEnabled;
  ({ children, style } = channelId);
  closure_18();
  const tmp6 = screenIndex(isBackEnabled[17])();
  _slicedToArray = tmp6;
  const isChatBesideChannelList = screenIndex(isBackEnabled[14])().isChatBesideChannelList;
  let obj2 = isChatBesideChannelList;
  [r10031, StyleSheet] = _slicedToArray(isChatBesideChannelList.useState(channelId), 2);
  const tmp7 = _slicedToArray(isChatBesideChannelList.useState(channelId), 2);
  if (cResult[0] !== channelId) {
    const fn = function c() {
      const obj = channelId(isBackEnabled[18]);
      let closure_0 = obj.runAfterInteractions(() => {
        closure_1_5(closure_0);
      }, 200);
      return () => {
        closure_0.cancel();
      };
    };
    const items = [channelId];
    let num = 0;
    cResult[0] = channelId;
    cResult[1] = fn;
    cResult[2] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = obj2.useEffect(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b() {
      const obj = channelId(isBackEnabled[19]);
      obj.dismissKeyboard();
    };
    cResult[3] = fn2;
    tmp11 = fn2;
  } else {
    tmp11 = cResult[3];
  }
  const tmp12 = screenIndex(isBackEnabled[20])(screenIndex);
  let sum = tmp12;
  if (tmp6 === constants3.ONYX) {
    sum = tmp12 + derivedValue;
  }
  if (cResult[4] === channelId) {
    let tmp15;
    if (cResult[5] === screenIndex) {
      tmp15 = cResult[6];
    }
    if (cResult[7] === sum) {
      let tmp16;
      if (cResult[8] === tmp15) {
        tmp16 = cResult[9];
      }
      const tmp17 = screenIndex(isBackEnabled[22])(tmp16);
      ({ panelGestureContext, isDragging, translateX } = tmp17);
      const movePanel = tmp17.movePanel;
      const maxWidth = tmp17.maxWidth;
      const gesture = tmp17.gesture;
      const tmpResult = tmp(isBackEnabled[15]);
      class Q {
        constructor() {
          return maxWidth - translateX.get();
        }
      }
      let obj3 = { maxWidth, translateX };
      Q.__closure = obj3;
      Q.__workletHash = 10342354997299;
      Q.__initData = __initData9;
      derivedValue = tmpResult.useDerivedValue(Q);
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class Z {
          constructor(arg0) {
            return arg0 > 0;
          }
        }
        cResult[10] = Z;
      } else {
        class Z {
          constructor(arg0) {
            return arg0 > 0;
          }
        }
      }
      const tmpResult2 = tmp(isBackEnabled[23]);
      const derivedStateFromSharedValue = tmpResult2.useDerivedStateFromSharedValue(derivedValue, Z);
      if (cResult[11] === channelId) {
        class Z {
          constructor(arg0) {
            return arg0 > 0;
          }
        }
      }
      function le() {
        if (derivedStateFromSharedValue) {
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          const obj = { channelId, screenIndex };
          ComponentDispatch.dispatch(unpackModuleId.CHANNEL_DETAILS_SHOWN, obj);
        }
      }
      const items1 = [derivedStateFromSharedValue, channelId, screenIndex];
      cResult[11] = channelId;
      cResult[12] = derivedStateFromSharedValue;
      cResult[13] = screenIndex;
      class Y {
        constructor(arg0) {
          const tmp = arg0;
          if (!tmp) {
            metroImportAll(channelId, false, "initial");
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            const obj = { channelId, screenIndex };
            ComponentDispatch.dispatch(unpackModuleId.CHANNEL_DETAILS_HIDDEN, obj);
          }
        }
      }
      cResult[14] = le;
      cResult[15] = items1;
    }
    let obj4 = { canDrag: true, onDragStart: tmp11, onPreMovement: tmp15, startShown: false, cancelOnSwipeRightFromStart: true, openWidth: sum };
    cResult[7] = sum;
    cResult[8] = tmp15;
    cResult[9] = obj4;
  }
  class Y {
    constructor(arg0) {
      const tmp = arg0;
      if (!tmp) {
        metroImportAll(channelId, false, "initial");
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        const obj = { channelId, screenIndex };
        ComponentDispatch.dispatch(unpackModuleId.CHANNEL_DETAILS_HIDDEN, obj);
      }
    }
  }
  cResult[4] = channelId;
  cResult[5] = screenIndex;
  cResult[6] = Y;
  tmp15 = Y;
}) : ((channelId) => {
  let children;
  let closure_3;
  let closure_5;
  let first;
  let isDragging;
  let isNavigationTTIVisible;
  let items13;
  let items14;
  let items15;
  let items17;
  let items18;
  let obj13;
  let obj18;
  let str;
  let style;
  let tmp42;
  let translateX;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const isBackEnabled = channelId.isBackEnabled;
  StyleSheet = undefined;
  translateX = undefined;
  let derivedValue;
  let derivedStateFromSharedValue;
  let memo1;
  let callback3;
  let callback4;
  PEEK_PIXEL_THRESHOLD = undefined;
  ({ isNavigationTTIVisible, children, style } = channelId);
  let tmp = closure_18();
  let tmp3 = isBackEnabled;
  const tmp4 = screenIndex(isBackEnabled[17])();
  _slicedToArray = tmp4;
  const isChatBesideChannelList = screenIndex(isBackEnabled[14])().isChatBesideChannelList;
  [first, StyleSheet] = isChatBesideChannelList.useState(channelId);
  const items = [channelId];
  const effect = isChatBesideChannelList.useEffect(() => {
    const obj = channelId(isBackEnabled[18]);
    let closure_0 = obj.runAfterInteractions(() => {
      closure_1_5(closure_0);
    }, 200);
    return () => {
      closure_0.cancel();
    };
  }, items);
  const callback = isChatBesideChannelList.useCallback(() => {
    const obj = channelId(isBackEnabled[19]);
    obj.dismissKeyboard();
  }, []);
  const tmp9 = screenIndex(isBackEnabled[20])(screenIndex);
  let closure_6 = tmp9;
  const items1 = [tmp4, tmp9];
  const items2 = [channelId, screenIndex];
  const memo = isChatBesideChannelList.useMemo(() => {
    let sum;
    if (closure_3 === derivedStateFromSharedValue.ONYX) {
      sum = closure_6 + ONYX_BORDER_WIDTH;
    } else {
      sum = closure_6;
    }
    return sum;
  }, items1);
  const callback1 = isChatBesideChannelList.useCallback((arg0) => {
    const tmp = arg0;
    if (!tmp) {
      metroImportAll(channelId, false, "initial");
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId, screenIndex };
      ComponentDispatch.dispatch(unpackModuleId.CHANNEL_DETAILS_HIDDEN, obj);
    }
  }, items2);
  const tmp12 = screenIndex(isBackEnabled[22])({ canDrag: true, onDragStart: callback, onPreMovement: callback1, startShown: false, cancelOnSwipeRightFromStart: true, openWidth: memo });
  const panelGestureContext = tmp12.panelGestureContext;
  ({ isDragging, translateX } = tmp12);
  const movePanel = tmp12.movePanel;
  const maxWidth = tmp12.maxWidth;
  const gesture = tmp12.gesture;
  let obj = channelId(isBackEnabled[15]);
  class A {
    constructor() {
      return maxWidth - translateX.get();
    }
  }
  A.__closure = { maxWidth, translateX };
  A.__workletHash = 9011132542505;
  A.__initData = __initData10;
  derivedValue = obj.useDerivedValue(A);
  let obj2 = channelId(isBackEnabled[23]);
  derivedStateFromSharedValue = obj2.useDerivedStateFromSharedValue(derivedValue, (arg0) => arg0 > 0);
  const items3 = [derivedStateFromSharedValue, channelId, screenIndex];
  const effect1 = isChatBesideChannelList.useEffect(() => {
    if (derivedStateFromSharedValue) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId, screenIndex };
      ComponentDispatch.dispatch(unpackModuleId.CHANNEL_DETAILS_SHOWN, obj);
    }
  }, items3);
  memo1 = isChatBesideChannelList.useMemo(() => ({}), []);
  const items4 = [memo1];
  const items5 = [memo1];
  const callback2 = isChatBesideChannelList.useCallback((arg0) => {
    const obj = getJankSurfaceName;
    const result = obj.recordJankChannelDetailsOpen(memo1, arg0);
  }, items4);
  const effect2 = isChatBesideChannelList.useEffect(() => () => {
    const obj = channelId(isBackEnabled[24]);
    const result = obj.setJankChannelDetailsOpen(memo1, false);
  }, items5);
  let obj3 = channelId(isBackEnabled[15]);
  function se() {
    if (closure_3 === derivedStateFromSharedValue.ONYX) {
      let diff;
      if (!isChatBesideChannelList) {
        diff = translateX.get() - ONYX_BORDER_WIDTH;
      }
      return diff;
    }
    diff = translateX.get();
  }
  let obj4 = { theme: tmp4, ThemeTypes: derivedStateFromSharedValue, isChatBesideChannelList, translateX, ONYX_BORDER_WIDTH: movePanel };
  se.__closure = obj4;
  se.__workletHash = 10513387909491;
  se.__initData = __initData11;
  const derivedValue1 = obj3.useDerivedValue(se);
  const items6 = [channelId, screenIndex, movePanel];
  callback3 = isChatBesideChannelList.useCallback((channelId) => {
    const tmp = channelId.channelId === channelId && channelId.screenIndex === screenIndex;
    if (tmp) {
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
      if (true === channelId.search) {
        metroImportAll(channelId.channelId, true, "initial");
      }
      movePanel(true, false, 0, true);
    }
  }, items6);
  const items7 = [movePanel];
  callback4 = isChatBesideChannelList.useCallback(() => {
    movePanel(false, false, 0, true);
  }, items7);
  const items8 = [callback4];
  const effect3 = isChatBesideChannelList.useEffect(() => {
    const obj = screenIndex(isBackEnabled[25]);
    let closure_0 = obj.addRouteChangeListener(() => {
      callback4();
    });
    return () => {
      closure_0();
    };
  }, items8);
  const items9 = [callback3, callback4];
  const effect4 = isChatBesideChannelList.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(unpackModuleId.SHOW_CHANNEL_DETAILS, callback3);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(unpackModuleId.HIDE_CHANNEL_DETAILS, callback4);
    return () => {
      const ComponentDispatch = channelId(isBackEnabled[21]).ComponentDispatch;
      ComponentDispatch.unsubscribe(derivedValue.SHOW_CHANNEL_DETAILS, callback3);
      const ComponentDispatch2 = channelId(isBackEnabled[21]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(derivedValue.HIDE_CHANNEL_DETAILS, callback4);
    };
  }, items9);
  const items10 = [derivedValue, callback4, channelId];
  const callback5 = isChatBesideChannelList.useCallback(() => {
    let params1;
    if (derivedValue.get() <= 0) {
      const verbose3 = callback4.verbose;
      const obj2 = { shownPixels: derivedValue.get() };
      verbose3("handleBackPress", "shownPixels <= 0", obj2);
      return false;
    } else {
      let flag;
      const obj9 = RootNavigationRef;
      const rootNavigationRef = obj9.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      const tmp23Result = useChatLayout;
      const isChatLockedOpen = tmp23Result.getChatLayout().isChatLockedOpen;
      const tmp23Result3 = NavigationRouteUtils;
      let coerceChannelRouteResult = tmp23Result3.coerceChannelRoute(currentRoute);
      const tmp3 = null == coerceChannelRouteResult && isChatLockedOpen;
      if (tmp3) {
        const tmp23Result4 = NavigationRouteUtils;
        coerceChannelRouteResult = tmp23Result4.coerceGuildsRoute(currentRoute);
      }
      const obj3 = { route: coerceChannelRouteResult, channelId, currentRoute, isChatLockedOpen, routeParams: params1 };
      params1 = undefined;
      const verbose = callback4.verbose;
      if (coerceChannelRouteResult != null) {
        params1 = coerceChannelRouteResult.params;
      }
      verbose("handleBackPress", obj3);
      if (null == coerceChannelRouteResult) {
        const obj4 = { currentRoute, isChatLockedOpen };
        callback4.verbose("handleBackPress", "route is null", obj4);
        flag = false;
      } else {
        const params2 = coerceChannelRouteResult.params;
        channelId = undefined;
        if (params2 != null) {
          channelId = params2.channelId;
        }
        if (channelId !== channelId) {
          const params = coerceChannelRouteResult.params;
          let channelId1;
          const verbose2 = callback4.verbose;
          if (params != null) {
            channelId1 = params.channelId;
          }
          const obj5 = { routeChannelId: channelId1, expectedChannelId: channelId };
          verbose2("handleBackPress", "route channelId mismatch", obj5);
          flag = false;
        } else if (metroImportDefault(channelId)) {
          callback4.verbose("handleBackPress", "cancelling search before closing panel");
          metroImportAll(channelId, false, "initial");
          flag = true;
        } else {
          callback4();
          flag = true;
        }
      }
      return flag;
    }
  }, items10);
  screenIndex(isBackEnabled[28])(callback5, derivedStateFromSharedValue);
  const items11 = [channelId, screenIndex, callback4];
  const effect5 = isChatBesideChannelList.useEffect(() => {
    callback4();
  }, items11);
  let obj5 = channelId(isBackEnabled[29]);
  PEEK_PIXEL_THRESHOLD = obj5.useNavigation();
  closure_19(channelId, screenIndex, isDragging, derivedStateFromSharedValue);
  const items12 = [panelGestureContext, channelId, screenIndex, derivedStateFromSharedValue];
  const tmp30 = closure_28(gesture, derivedValue, panelGestureContext);
  const memo2 = isChatBesideChannelList.useMemo(() => {
    const obj = { channelId, screenIndex, isPanelActive: derivedStateFromSharedValue };
    const merged = Object.assign(panelGestureContext);
    return obj;
  }, items12);
  const obj6 = channelId(isBackEnabled[30]);
  const mainTabsChannelScreenStyles = obj6.useMainTabsChannelScreenStyles(isDragging, derivedValue1, maxWidth);
  function oe() {
    let num;
    const tmp = derivedValue.get() > 300;
    let str = "flex";
    if (tmp) {
      str = "none";
    }
    const obj2 = { display: str, opacity: num };
    num = 0;
    if (!tmp) {
      num = 1 - derivedValue.get() / c16;
    }
    return obj2;
  }
  const obj8 = { shownPixels: derivedValue, PEEK_PIXEL_THRESHOLD };
  oe.__closure = obj8;
  oe.__workletHash = 12503395344894;
  oe.__initData = __initData12;
  let obj9 = { value: memo2, children: items13 };
  const obj7 = channelId(isBackEnabled[15]);
  const animatedStyle = obj7.useAnimatedStyle(oe);
  const Provider = context.Provider;
  let tmp35 = null;
  const obj10 = channelId(isBackEnabled[31]);
  if (obj10.isJankScreenReportingEnabled()) {
    const obj11 = { position: translateX, openAt: 0, closedAt: maxWidth, resolveOpenName: channelId(tmp3[33]).getBaseScreenName, resolveClosedName: channelId(tmp3[33]).getBaseScreenName, onCoveringChange: callback2 };
    const tmp2Result = screenIndex(tmp3[32]);
    tmp35 = memo1(tmp2Result, obj11);
  }
  items13 = [tmp35, ];
  const obj12 = { gesture: tmp30, children: callback3(closure_6, obj13) };
  obj13 = {
    onAccessibilityEscape() {
      if (isBackEnabled) {
        navigation.goBack();
      }
    },
    style,
    children: items15
  };
  const GestureDetector = tmp13(tmp3[40]).GestureDetector;
  const obj14 = { name: "channel_screen", navigationKey: channelId, definition: channelId(tmp3[36]).CHANNEL_NAVIGATION_TTI, visibilityMode: "prerendered", isVisible: isNavigationTTIVisible, descendantTracking: "included", accessibilityElementsHidden: derivedStateFromSharedValue || undefined, importantForAccessibility: str, style: tmp.content, children: items14 };
  const NavTTISurfaceProvider = tmp13(tmp3[35]).NavTTISurfaceProvider;
  str = undefined;
  if (derivedStateFromSharedValue) {
    str = "no-hide-descendants";
  }
  items14 = [children, memo1(channelId(tmp3[34]).MainTabsContentScrim, { translateX: derivedValue1, maxWidth })];
  items15 = [callback3(NavTTISurfaceProvider, obj14), ];
  const items16 = [mainTabsChannelScreenStyles, tmp.memberListContainer, , ];
  let onyxBorder;
  View = tmp2(tmp3[15]).View;
  if (tmp4 === derivedStateFromSharedValue.ONYX) {
    onyxBorder = tmp.onyxBorder;
  }
  items16[2] = onyxBorder;
  let onyxRightOverflow;
  if (!isChatBesideChannelList) {
    if (tmp4 === derivedStateFromSharedValue.ONYX) {
      onyxRightOverflow = tmp.onyxRightOverflow;
    }
  }
  const obj15 = { style: items16, accessibilityElementsHidden: tmp42, importantForAccessibility: str2, children: items17 };
  items16[3] = onyxRightOverflow;
  tmp42 = !derivedStateFromSharedValue;
  items17 = [memo1(screenIndex(tmp3[37]), { absolute: true, withOverlay: true, overlayOpacity: 0.5 }), , ];
  const obj16 = { children: memo1(screenIndex(tmp3[39]), { isShowing: derivedStateFromSharedValue, channelId: first, isSearchLocked: false, onBackPress: callback5, componentWidth: tmp9, onChannelDeleted: callback4 }) };
  const LayerScope = tmp13(tmp3[38]).LayerScope;
  items17[1] = memo1(LayerScope, obj16);
  const obj17 = { style: items18, children: memo1(closure_6, obj18) };
  items18 = [StyleSheet.absoluteFill, animatedStyle];
  obj18 = { style: tmp.memberListPreview };
  const View2 = tmp2(tmp3[15]).View;
  items17[2] = memo1(View2, obj17);
  items15[1] = callback3(View, obj15);
  items13[1] = memo1(GestureDetector, obj12);
  return callback3(Provider, obj9);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx");

export default tmp10;
export const SwipeForMemberListContext = context;