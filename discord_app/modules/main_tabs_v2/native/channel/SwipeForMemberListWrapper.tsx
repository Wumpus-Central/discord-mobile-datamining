// === Module 17086: SwipeForMemberListWrapper ===

// Module 17086 (SwipeForMemberListWrapper)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import RootNavigationRef from "RootNavigationRef" /* 4937 */;
import useChatLayout from "useChatLayout" /* 4939 */;
import ChatInputUtils from "ChatInputUtils" /* 4945 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5105 */;
import useMountEffect from "useMountEffect" /* 5392 */;
import getJankSurfaceName from "getJankSurfaceName" /* 16238 */;
import MainTabsNavigatorPanelContext from "MainTabsNavigatorPanelContext" /* 16624 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const useChatLayoutDefault = useChatLayout;
const MainTabsNavigatorPanelContextDefault = MainTabsNavigatorPanelContext;

require = fn;
get_ActivityIndicator = fn(17);
let StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const ChannelDetailsStore = fn(9245);
({ getIsChannelDetailsSearchActive: closure_7, setIsChannelDetailsSearchActive: closure_8 } = ChannelDetailsStore);
const ONYX_BORDER_WIDTH = fn(9233).ONYX_BORDER_WIDTH;
const Constants = fn(1085);
({ AnalyticEvents: c10, ComponentActions: closure_11, ThemeTypes: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = new LoggerDefault("SwipeForMemberListWrapper");
let c16 = 150;
let context = noop.createContext(undefined);
const createStyles = fn(5090);
let obj = { memberListPreview: null, content: null, memberListContainer: null, onyxBorder: null, onyxRightOverflow: null };
let tmp6 = new LoggerDefault("SwipeForMemberListWrapper");
obj.memberListPreview = { flex: 1, justifyContent: "center", alignItems: "flex-start", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.overflow = "hidden";
obj.content = obj4;
let obj3 = { flex: 1, justifyContent: "center", alignItems: "flex-start", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.memberListContainer = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MODAL_BACKGROUND };
let obj5 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MODAL_BACKGROUND };
obj.onyxBorder = { borderLeftColor: nativeDefault.colors.BORDER_STRONG, borderLeftWidth: ONYX_BORDER_WIDTH };
obj.onyxRightOverflow = { right: -ONYX_BORDER_WIDTH };
let closure_18 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAnalyticsEffect(channel_id, arg1, arg2, member_list_open) {
  _require = channel_id;
  closure_1 = arg1;
  dependencyMap = arg2;
  const cResult = require("c").c(11);
  if (cResult[0] === channel_id) {
    if (cResult[1] === member_list_open) {
      if (cResult[2] === arg1) {
        let tmp2 = cResult[3];
        let tmp3 = cResult[4];
      }
      const effect = noop.useEffect(tmp2, tmp3);
      if (cResult[5] === channel_id) {
        if (cResult[6] === arg2) {
          if (cResult[7] === member_list_open) {
            if (cResult[8] === arg1) {
              let tmp5 = cResult[9];
              let tmp6 = cResult[10];
            }
            const effect1 = noop.useEffect(tmp5, tmp6);
          }
        }
      }
      const fn2 = function h() {
        value = closure_3;
        if (closure_3) {
          value = closure_2.get();
        }
        if (value) {
          const obj2 = { channel_id, screen_index: null };
          const _String = String;
          obj2.screen_index = String(closure_1);
          AppAnalyticsUtilsDefault.trackWithMetadata(constants.MEMBER_LIST_SWIPE_PEEK, obj2);
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
    obj.trackWithMetadata(constants.MEMBER_LIST_SWIPE_TOGGLED, { channel_id, screen_index: String(closure_1), member_list_open });
  };
  const items1 = [channel_id, arg1, member_list_open];
  cResult[0] = channel_id;
  cResult[1] = member_list_open;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp3 = items1;
  tmp2 = fn;
  let obj = require("c");
}) : (function useAnalyticsEffect(channel_id, arg1, arg2, member_list_open) {
  closure_1 = arg1;
  closure_2 = arg2;
  const items = [channel_id, arg1, member_list_open];
  const effect = noop.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    obj.trackWithMetadata(constants.MEMBER_LIST_SWIPE_TOGGLED, { channel_id, screen_index: String(closure_1), member_list_open });
  }, items);
  const items1 = [member_list_open, channel_id, arg1, arg2];
  const effect1 = noop.useEffect(() => {
    value = closure_3;
    if (closure_3) {
      value = closure_2.get();
    }
    if (value) {
      const obj2 = { channel_id, screen_index: null };
      const _String = String;
      obj2.screen_index = String(closure_1);
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.MEMBER_LIST_SWIPE_PEEK, obj2);
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
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGestureCompositionEffect(simultaneousWithExternalGesture, shownPixels, disallowGesture) {
  _require = shownPixels;
  const cResult = c.c(11);
  context = noop.useContext(MainTabsNavigatorPanelContextDefault);
  ({ gesture, disallowGesture } = context);
  const translateX = context.translateX;
  let context1 = noop.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  if (context1 == null) {
    context1 = {};
  }
  ({ gesture: gesture2, disallowGesture: disallowGesture2 } = context1);
  const translateX2 = context1.translateX;
  const disallowGesture3 = disallowGesture.disallowGesture;
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  if (null == gesture2) {
    if (cResult[0] === simultaneousWithExternalGesture) {
    }
    let result = simultaneousWithExternalGesture.simultaneousWithExternalGesture(gesture);
    cResult[0] = simultaneousWithExternalGesture;
    cResult[1] = gesture;
    cResult[2] = result;
  } else {
    if (cResult[3] === simultaneousWithExternalGesture) {
      if (cResult[4] === gesture) {
        if (cResult[5] === gesture2) {
          const tmp6 = cResult[6];
        }
        class T {
          constructor() {
            return closure_0.get() > 0;
          }
        }
        const obj2 = { shownPixels };
        T.__closure = obj2;
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
        const obj3 = { mainDisallowGesture: disallowGesture, stackDisallowGesture: disallowGesture2, panelDisallowGesture: disallowGesture3 };
        S.__closure = obj3;
        S.__workletHash = 6486402074354;
        S.__initData = __initData2;
        const animatedReaction = ReanimatedRexport.useAnimatedReaction(T, S);
        const tmpResult = ReanimatedRexport;
        class P {
          constructor() {
            tmp = !isChatLockedOpen;
            if (!isChatLockedOpen) {
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
        const obj4 = { isChatLockedOpen, mainTranslateX: translateX, stackTranslateX: translateX2 };
        P.__closure = obj4;
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
        const obj5 = { panelDisallowGesture: disallowGesture3 };
        I.__closure = obj5;
        I.__workletHash = 10319768602360;
        I.__initData = __initData4;
        const animatedReaction1 = ReanimatedRexport.useAnimatedReaction(P, I);
        if (cResult[7] === disallowGesture) {
          if (cResult[8] === disallowGesture3) {
            useMountEffect;
            class T {
              constructor() {
                return closure_0.get() > 0;
              }
            }
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
        const tmpResult3 = ReanimatedRexport;
      }
    }
    let result1 = simultaneousWithExternalGesture.simultaneousWithExternalGesture(gesture, gesture2);
    cResult[3] = simultaneousWithExternalGesture;
    cResult[4] = gesture;
    cResult[5] = gesture2;
    cResult[6] = result1;
  }
}) : (function useGestureCompositionEffect(arg0, shownPixels, disallowGesture) {
  closure_0 = arg0;
  context = noop.useContext(MainTabsNavigatorPanelContextDefault);
  const gesture = context.gesture;
  disallowGesture = context.disallowGesture;
  const translateX = context.translateX;
  let context1 = noop.useContext(MainTabsNavigatorPanelContext.MainTabsChannelScreenStackContext);
  if (context1 == null) {
    context1 = {};
  }
  const gesture2 = context1.gesture;
  const disallowGesture2 = context1.disallowGesture;
  const translateX2 = context1.translateX;
  const disallowGesture3 = disallowGesture.disallowGesture;
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const items = [arg0, gesture, gesture2];
  const memo = noop.useMemo(() => {
    if (null == gesture2) {
      let result = closure_0.simultaneousWithExternalGesture(gesture);
    } else {
      result = closure_0.simultaneousWithExternalGesture(gesture, tmp);
    }
    return result;
  }, items);
  const fn = function c() {
    return shownPixels.get() > 0;
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
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(fn, fn2);
  const tmp4Result = ReanimatedRexport;
  const fn3 = function h() {
    let tmp = !isChatLockedOpen;
    if (!isChatLockedOpen) {
      tmp = translateX.get() > 0;
    }
    if (!tmp) {
      let tmp4 = null != translateX2;
      if (tmp4) {
        tmp4 = translateX2.get() > 0;
      }
      tmp = tmp4;
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
  const animatedReaction1 = ReanimatedRexport.useAnimatedReaction(fn3, fn4);
  const tmp4Result3 = ReanimatedRexport;
  const unmountEffect = useMountEffect.useUnmountEffect(() => {
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
ReactCompilerGating = fn(558);
let obj6 = { borderLeftColor: nativeDefault.colors.BORDER_STRONG, borderLeftWidth: ONYX_BORDER_WIDTH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(isBackEnabled[11]).c(102);
  channelId = channelId.channelId;
  ({ isNavigationTTIVisible, screenIndex } = channelId);
  isBackEnabled = channelId.isBackEnabled;
  ({ children, style } = channelId);
  closure_18();
  const tmp6 = screenIndex(isBackEnabled[17])();
  _slicedToArray = tmp6;
  const isChatBesideChannelList = screenIndex(isBackEnabled[14])().isChatBesideChannelList;
  let obj = channelId(isBackEnabled[11]);
  let obj2 = isChatBesideChannelList;
  [r10031, StyleSheet] = isChatBesideChannelList.useState(channelId);
  if (cResult[0] !== channelId) {
    const fn = function c() {
      closure_0 = channelId(isBackEnabled[18]).runAfterInteractions(() => {
        closure_1_5(closure_0);
      }, 200);
      return () => {
        closure_0.cancel();
      };
    };
    const items = [channelId];
    cResult[0] = channelId;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp9 = items;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = obj2.useEffect(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function b() {
      channelId(isBackEnabled[19]).dismissKeyboard();
    };
    cResult[3] = fn2;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[3];
  }
  const tmp12 = screenIndex(isBackEnabled[20])(screenIndex);
  let sum = tmp12;
  if (tmp6 === constants3.ONYX) {
    sum = tmp12 + derivedValue;
  }
  if (cResult[4] === channelId) {
    if (cResult[5] === screenIndex) {
      let tmp15 = cResult[6];
    }
    if (cResult[7] === sum) {
      if (cResult[8] === tmp15) {
        const tmp16 = cResult[9];
      }
      const tmp17 = screenIndex(tmp2[22])(tmp16);
      ({ panelGestureContext, isDragging, translateX } = tmp17);
      const movePanel = tmp17.movePanel;
      const maxWidth = tmp17.maxWidth;
      const gesture = tmp17.gesture;
      class Q {
        constructor() {
          return maxWidth - translateX.get();
        }
      }
      let obj3 = { maxWidth, translateX };
      Q.__closure = obj3;
      Q.__workletHash = 10342354997299;
      Q.__initData = __initData9;
      derivedValue = tmp(tmp2[15]).useDerivedValue(Q);
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class Z {
          constructor(arg0) {
            return channelId > 0;
          }
        }
        cResult[10] = Z;
      } else {
        class Z {
          constructor(arg0) {
            return channelId > 0;
          }
        }
      }
      const tmpResult = tmp(tmp2[15]);
      const derivedStateFromSharedValue = tmp(tmp2[23]).useDerivedStateFromSharedValue(derivedValue, Z);
      if (cResult[11] === channelId) {
        class Z {
          constructor(arg0) {
            return channelId > 0;
          }
        }
      }
      function le() {
        if (derivedStateFromSharedValue) {
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          const obj = { channelId, screenIndex };
          ComponentDispatch.dispatch(constants2.CHANNEL_DETAILS_SHOWN, obj);
        }
      }
      const items1 = [derivedStateFromSharedValue, channelId, screenIndex];
      cResult[11] = channelId;
      cResult[12] = derivedStateFromSharedValue;
      cResult[13] = screenIndex;
      class Y {
        constructor(arg0) {
          if (!channelId) {
            tmp = closure_8;
            tmp2 = channelId;
            str = "initial";
            flag = false;
            tmp3 = closure_8(channelId, false, "initial");
            tmp4 = closure_0;
            tmp5 = closure_2;
            ComponentDispatch = closure_0(closure_2[21]).ComponentDispatch;
            tmp6 = ComponentActions;
            obj = { channelId: null, screenIndex: null };
            obj.channelId = channelId;
            tmp7 = screenIndex;
            obj.screenIndex = screenIndex;
            dispatchResult = ComponentDispatch.dispatch(ComponentActions.CHANNEL_DETAILS_HIDDEN, obj);
          }
          return;
        }
      }
      cResult[14] = le;
      cResult[15] = items1;
      const tmpResult2 = tmp(tmp2[23]);
    }
    let obj4 = { canDrag: true, onDragStart: tmp11, onPreMovement: tmp15, startShown: false, cancelOnSwipeRightFromStart: true, openWidth: sum };
    cResult[7] = sum;
    cResult[8] = tmp15;
    cResult[9] = obj4;
  }
  class Y {
    constructor(arg0) {
      if (!channelId) {
        tmp = closure_8;
        tmp2 = channelId;
        str = "initial";
        flag = false;
        tmp3 = closure_8(channelId, false, "initial");
        tmp4 = closure_0;
        tmp5 = closure_2;
        ComponentDispatch = closure_0(closure_2[21]).ComponentDispatch;
        tmp6 = ComponentActions;
        obj = { channelId: null, screenIndex: null };
        obj.channelId = channelId;
        tmp7 = screenIndex;
        obj.screenIndex = screenIndex;
        dispatchResult = ComponentDispatch.dispatch(ComponentActions.CHANNEL_DETAILS_HIDDEN, obj);
      }
      return;
    }
  }
  cResult[4] = channelId;
  cResult[5] = screenIndex;
  cResult[6] = Y;
  tmp15 = Y;
  const tmp7 = _slicedToArray(isChatBesideChannelList.useState(channelId), 2);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const isBackEnabled = channelId.isBackEnabled;
  translateX = undefined;
  let derivedValue;
  let derivedStateFromSharedValue;
  let memo1;
  let callback3;
  let callback4;
  PEEK_PIXEL_THRESHOLD = undefined;
  ({ isNavigationTTIVisible, children, style } = channelId);
  let tmp = closure_18();
  const tmp4 = screenIndex(isBackEnabled[17])();
  _slicedToArray = tmp4;
  const isChatBesideChannelList = screenIndex(isBackEnabled[14])().isChatBesideChannelList;
  const tmp5 = _slicedToArray(isChatBesideChannelList.useState(channelId), 2);
  StyleSheet = tmp5[1];
  const items = [channelId];
  const effect = isChatBesideChannelList.useEffect(() => {
    closure_0 = channelId(isBackEnabled[18]).runAfterInteractions(() => {
      closure_1_5(closure_0);
    }, 200);
    return () => {
      closure_0.cancel();
    };
  }, items);
  const callback = isChatBesideChannelList.useCallback(() => {
    channelId(isBackEnabled[19]).dismissKeyboard();
  }, []);
  const tmp8 = screenIndex(isBackEnabled[20])(screenIndex);
  closure_6 = tmp8;
  const items1 = [tmp4, tmp8];
  const items2 = [channelId, screenIndex];
  const memo = isChatBesideChannelList.useMemo(() => {
    if (closure_3 === constants3.ONYX) {
      let sum = closure_6 + ONYX_BORDER_WIDTH;
    } else {
      sum = closure_6;
    }
    return sum;
  }, items1);
  const callback1 = isChatBesideChannelList.useCallback((arg0) => {
    if (!arg0) {
      closure_2_8(channelId, false, "initial");
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId, screenIndex };
      ComponentDispatch.dispatch(constants2.CHANNEL_DETAILS_HIDDEN, obj);
    }
  }, items2);
  const tmp11 = screenIndex(isBackEnabled[22])({ canDrag: true, onDragStart: callback, onPreMovement: callback1, startShown: false, cancelOnSwipeRightFromStart: true, openWidth: memo });
  const panelGestureContext = tmp11.panelGestureContext;
  ({ isDragging, translateX } = tmp11);
  const movePanel = tmp11.movePanel;
  const maxWidth = tmp11.maxWidth;
  class A {
    constructor() {
      return maxWidth - translateX.get();
    }
  }
  A.__closure = { maxWidth, translateX };
  A.__workletHash = 9011132542505;
  A.__initData = __initData10;
  derivedValue = channelId(isBackEnabled[15]).useDerivedValue(A);
  let obj = channelId(isBackEnabled[15]);
  derivedStateFromSharedValue = channelId(isBackEnabled[23]).useDerivedStateFromSharedValue(derivedValue, (arg0) => arg0 > 0);
  const items3 = [derivedStateFromSharedValue, channelId, screenIndex];
  const effect1 = isChatBesideChannelList.useEffect(() => {
    if (derivedStateFromSharedValue) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId, screenIndex };
      ComponentDispatch.dispatch(constants2.CHANNEL_DETAILS_SHOWN, obj);
    }
  }, items3);
  memo1 = isChatBesideChannelList.useMemo(() => ({}), []);
  const items4 = [memo1];
  const items5 = [memo1];
  const callback2 = isChatBesideChannelList.useCallback((arg0) => {
    const result = getJankSurfaceName.recordJankChannelDetailsOpen(memo1, arg0);
  }, items4);
  const effect2 = isChatBesideChannelList.useEffect(() => () => {
    const result = channelId(isBackEnabled[24]).setJankChannelDetailsOpen(memo1, false);
  }, items5);
  let obj2 = channelId(isBackEnabled[23]);
  function se() {
    if (closure_3 === constants3.ONYX) {
      if (!isChatBesideChannelList) {
        let diff = translateX.get() - ONYX_BORDER_WIDTH;
      }
      return diff;
    }
    diff = translateX.get();
  }
  se.__closure = { theme: tmp4, ThemeTypes: derivedStateFromSharedValue, isChatBesideChannelList, translateX, ONYX_BORDER_WIDTH: movePanel };
  se.__workletHash = 10513387909491;
  se.__initData = __initData11;
  const derivedValue1 = channelId(isBackEnabled[15]).useDerivedValue(se);
  const items6 = [channelId, screenIndex, movePanel];
  callback3 = isChatBesideChannelList.useCallback((channelId) => {
    let tmp = channelId.channelId === channelId;
    if (tmp) {
      tmp = channelId.screenIndex === screenIndex;
    }
    if (tmp) {
      ChatInputUtils.dismissKeyboard();
      if (true === channelId.search) {
        closure_2_8(channelId.channelId, true, "initial");
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
    closure_0 = screenIndex(isBackEnabled[25]).addRouteChangeListener(() => {
      callback4();
    });
    return () => {
      closure_0();
    };
  }, items8);
  const items9 = [callback3, callback4];
  const effect4 = isChatBesideChannelList.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants2.SHOW_CHANNEL_DETAILS, callback3);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants2.HIDE_CHANNEL_DETAILS, callback4);
    return () => {
      const ComponentDispatch = channelId(isBackEnabled[21]).ComponentDispatch;
      ComponentDispatch.unsubscribe(derivedValue.SHOW_CHANNEL_DETAILS, callback3);
      const ComponentDispatch2 = channelId(isBackEnabled[21]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(derivedValue.HIDE_CHANNEL_DETAILS, callback4);
    };
  }, items9);
  const items10 = [derivedValue, callback4, channelId];
  const callback5 = isChatBesideChannelList.useCallback(() => {
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
      const isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
      const tmp23Result = useChatLayout;
      let coerceChannelRouteResult = NavigationRouteUtils.coerceChannelRoute(currentRoute);
      if (tmp3) {
        coerceChannelRouteResult = NavigationRouteUtils.coerceGuildsRoute(currentRoute);
        const tmp23Result4 = NavigationRouteUtils;
      }
      const obj3 = { route: coerceChannelRouteResult, channelId, currentRoute, isChatLockedOpen, routeParams: null };
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
        channelId = undefined;
        if (params2 != null) {
          channelId = params2.channelId;
        }
        if (channelId !== tmp5) {
          const params = coerceChannelRouteResult.params;
          let channelId1;
          if (params != null) {
            channelId1 = params.channelId;
          }
          const obj5 = { routeChannelId: channelId1, expectedChannelId: tmp5 };
          callback4.verbose("handleBackPress", "route channelId mismatch", obj5);
          flag = false;
        } else if (React5(tmp5)) {
          callback4.verbose("handleBackPress", "cancelling search before closing panel");
          closure_2_8(tmp5, false, "initial");
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
  let obj3 = channelId(isBackEnabled[15]);
  let obj4 = { theme: tmp4, ThemeTypes: derivedStateFromSharedValue, isChatBesideChannelList, translateX, ONYX_BORDER_WIDTH: movePanel };
  PEEK_PIXEL_THRESHOLD = channelId(isBackEnabled[29]).useNavigation();
  closure_19(channelId, screenIndex, isDragging, derivedStateFromSharedValue);
  const items12 = [panelGestureContext, channelId, screenIndex, derivedStateFromSharedValue];
  let obj5 = channelId(isBackEnabled[29]);
  const memo2 = isChatBesideChannelList.useMemo(() => {
    const obj = {};
    const merged = Object.assign(panelGestureContext);
    obj.channelId = channelId;
    obj.screenIndex = screenIndex;
    obj.isPanelActive = derivedStateFromSharedValue;
    return obj;
  }, items12);
  const tmp29 = closure_28(tmp11.gesture, derivedValue, panelGestureContext);
  const mainTabsChannelScreenStyles = channelId(isBackEnabled[30]).useMainTabsChannelScreenStyles(isDragging, derivedValue1, maxWidth);
  const obj6 = channelId(isBackEnabled[30]);
  function oe() {
    const tmp = derivedValue.get() > 300;
    let str = "flex";
    if (tmp) {
      str = "none";
    }
    const obj2 = { display: str, opacity: null };
    let num = 0;
    if (!tmp) {
      num = 1 - derivedValue.get() / c16;
    }
    obj2.opacity = num;
    return obj2;
  }
  oe.__closure = { shownPixels: derivedValue, PEEK_PIXEL_THRESHOLD };
  oe.__workletHash = 12503395344894;
  oe.__initData = __initData12;
  let obj9 = { value: memo2, children: null };
  const animatedStyle = channelId(isBackEnabled[15]).useAnimatedStyle(oe);
  const obj7 = channelId(isBackEnabled[15]);
  const obj8 = { shownPixels: derivedValue, PEEK_PIXEL_THRESHOLD };
  let tmp34 = null;
  if (obj10.isJankScreenReportingEnabled()) {
    const obj11 = { position: translateX, openAt: 0, closedAt: maxWidth, resolveOpenName: tmp12(tmp3[33]).getBaseScreenName, resolveClosedName: tmp12(tmp3[33]).getBaseScreenName, onCoveringChange: callback2 };
    tmp34 = memo1(tmp2(tmp3[32]), obj11);
    const tmp2Result = tmp2(tmp3[32]);
  }
  const items13 = [tmp34, ];
  const obj12 = { gesture: tmp29, children: null };
  const obj13 = {
    onAccessibilityEscape() {
      if (isBackEnabled) {
        navigation.goBack();
      }
    },
    style,
    children: null
  };
  const obj14 = { name: "channel_screen", navigationKey: channelId, definition: channelId(isBackEnabled[36]).CHANNEL_NAVIGATION_TTI, visibilityMode: "prerendered", isVisible: isNavigationTTIVisible, descendantTracking: "included", accessibilityElementsHidden: derivedStateFromSharedValue || undefined, importantForAccessibility: null, style: null, children: null };
  let str;
  if (derivedStateFromSharedValue) {
    str = "no-hide-descendants";
  }
  obj14.importantForAccessibility = str;
  obj14.style = tmp.content;
  const items14 = [children, memo1(channelId(isBackEnabled[34]).MainTabsContentScrim, { translateX: derivedValue1, maxWidth })];
  obj14.children = items14;
  const items15 = [callback3(channelId(isBackEnabled[35]).NavTTISurfaceProvider, obj14), ];
  const items16 = [mainTabsChannelScreenStyles, tmp.memberListContainer, , ];
  let onyxBorder;
  if (tmp4 === derivedStateFromSharedValue.ONYX) {
    onyxBorder = tmp.onyxBorder;
  }
  items16[2] = onyxBorder;
  let onyxRightOverflow;
  if (!isChatBesideChannelList) {
    if (tmp4 === tmp19.ONYX) {
      onyxRightOverflow = tmp.onyxRightOverflow;
    }
  }
  const obj15 = { style: items16, accessibilityElementsHidden: !derivedStateFromSharedValue, importantForAccessibility: "no-hide-descendants", children: null };
  items16[3] = onyxRightOverflow;
  const items17 = [memo1(screenIndex(isBackEnabled[37]), { absolute: true, withOverlay: true, overlayOpacity: 0.5 }), , ];
  obj10 = channelId(isBackEnabled[31]);
  const tmp41 = !derivedStateFromSharedValue;
  items17[1] = memo1(channelId(isBackEnabled[38]).LayerScope, { children: memo1(screenIndex(isBackEnabled[39]), { isShowing: derivedStateFromSharedValue, channelId: tmp5[0], isSearchLocked: false, onBackPress: callback5, componentWidth: tmp8, onChannelDeleted: callback4 }) });
  const obj17 = { style: null, children: memo1(closure_6, { style: tmp.memberListPreview }) };
  const items18 = [StyleSheet.absoluteFill, animatedStyle];
  obj17.style = items18;
  items17[2] = memo1(screenIndex(isBackEnabled[15]).View, obj17);
  obj15.children = items17;
  items15[1] = callback3(screenIndex(isBackEnabled[15]).View, obj15);
  obj13.children = items15;
  obj12.children = callback3(closure_6, obj13);
  items13[1] = memo1(channelId(isBackEnabled[40]).GestureDetector, obj12);
  obj9.children = items13;
  return callback3(context.Provider, obj9);
});
export const SwipeForMemberListContext = context;