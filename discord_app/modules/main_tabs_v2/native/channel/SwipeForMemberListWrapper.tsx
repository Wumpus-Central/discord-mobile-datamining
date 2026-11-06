// discord_app/modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import NavigationRouteUtils from "../../helpers/NavigationRouteUtils.native.tsx";
import RootNavigationRef from "../../RootNavigationRef.native.tsx";
import useChatLayout from "../../../chat/native/useChatLayout.tsx";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import useBackPressHandlerDefault from "../../../routing/native/useBackPressHandler.tsx";
import ThemedGradientDefault from "../../../client_themes/native/ThemedGradient.tsx";
import useChatWidthDefault from "../../../chat/native/useChatWidth.tsx";
import useMainTabsPanelsGestureDefault from "../panels/useMainTabsPanelsGesture.tsx";
import getJankSurfaceName from "../../../jank_stats/native/getJankSurfaceName.tsx";
import ChannelDetailsDefault from "../sidebar/details/ChannelDetails.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const useChatLayoutDefault = useChatLayout;

require = fn;
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const ChannelDetailsStore = fn(9931);
({ getIsChannelDetailsSearchActive: metroImportDefault, setIsChannelDetailsSearchActive: closure_8 } =
  ChannelDetailsStore);
const ONYX_BORDER_WIDTH = fn(9919).ONYX_BORDER_WIDTH;
const Constants = fn(1072);
({ AnalyticEvents: closure_10, ComponentActions: closure_11, ThemeTypes: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = new LoggerDefault("SwipeForMemberListWrapper");
const createStyles = fn(5170);
let obj2 = {
  memberListPreview: null,
  content: null,
  memberListContainer: null,
  onyxBorder: null,
  onyxRightOverflow: null,
};
const tmp6 = new LoggerDefault("SwipeForMemberListWrapper");
obj2.memberListPreview = {
  flex: 1,
  justifyContent: "center",
  alignItems: "flex-start",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.overflow = "hidden";
obj2.content = obj4;
let obj3 = {
  flex: 1,
  justifyContent: "center",
  alignItems: "flex-start",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.memberListContainer = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MODAL_BACKGROUND };
let obj5 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MODAL_BACKGROUND };
obj2.onyxBorder = { borderLeftColor: nativeDefault.colors.BORDER_STRONG, borderLeftWidth: ONYX_BORDER_WIDTH };
obj2.onyxRightOverflow = { right: -ONYX_BORDER_WIDTH };
let closure_16 = createStyles.createStyles(obj2);
let closure_17 = {
  code: "(function SwipeForMemberListWrapperTsx1(){let[shownPixels]=this.__closure;return shownPixels.get()>0;})",
};
let closure_18 = {
  code: "(function SwipeForMemberListWrapperTsx2(isVisible,wasVisible){let[mainDisallowGesture,stackDisallowGesture,panelDisallowGesture]=this.__closure;var _stackDisallowGesture;if(isVisible===wasVisible)return;mainDisallowGesture.set(isVisible);(_stackDisallowGesture=stackDisallowGesture)===null||_stackDisallowGesture===void 0||_stackDisallowGesture.set(isVisible);if(!isVisible){panelDisallowGesture.set(false);}})",
};
let closure_19 = {
  code: "(function SwipeForMemberListWrapperTsx3(){let[isChatLockedOpen,mainTranslateX,stackTranslateX]=this.__closure;return!isChatLockedOpen&&mainTranslateX.get()>0||stackTranslateX!=null&&stackTranslateX.get()>0;})",
};
let closure_20 = {
  code: "(function SwipeForMemberListWrapperTsx4(isInactive,wasInactive){let[panelDisallowGesture]=this.__closure;if(isInactive===wasInactive)return;panelDisallowGesture.set(isInactive);})",
};
let closure_21 = {
  code: "(function SwipeForMemberListWrapperTsx5(){let[maxWidth,translateX]=this.__closure;return maxWidth-translateX.get();})",
};
let closure_22 = {
  code: "(function SwipeForMemberListWrapperTsx6(){let[theme,ThemeTypes,isChatBesideChannelList,translateX,ONYX_BORDER_WIDTH]=this.__closure;if(theme!==ThemeTypes.ONYX||isChatBesideChannelList)return translateX.get();return translateX.get()-ONYX_BORDER_WIDTH;})",
};
let closure_23 = {
  code: "(function SwipeForMemberListWrapperTsx7(){let[shownPixels,PEEK_PIXEL_THRESHOLD]=this.__closure;const exceedsPeekThreshold=shownPixels.get()>PEEK_PIXEL_THRESHOLD*2;return{display:exceedsPeekThreshold?'none':'flex',opacity:exceedsPeekThreshold?0:1-shownPixels.get()/PEEK_PIXEL_THRESHOLD};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx");

export default function _default(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  dependencyMap = channelId.isBackEnabled;
  let disallowGesture2;
  panelGestureContext = undefined;
  movePanel = undefined;
  let derivedValue;
  let derivedStateFromSharedValue;
  let memo1;
  let callback3;
  let callback4;
  let navigation;
  ({ isNavigationTTIVisible, children, style } = channelId);
  let tmp = closure_16();
  let tmp4 = useThemeDefault();
  let gesture3 = tmp4;
  const isChatBesideChannelList = useChatLayoutDefault().isChatBesideChannelList;
  const tmp5 = gesture3(disallowGesture2.useState(channelId), 2);
  disallowGesture2 = tmp5[1];
  items = [channelId];
  const effect = disallowGesture2.useEffect(() => {
    closure_0 = _undefined(_undefined2[16]).runAfterInteractions(() => {
      disallowGesture2(closure_0);
    }, 200);
    return () => {
      closure_0.cancel();
    };
  }, items);
  const callback = disallowGesture2.useCallback(() => {
    _undefined(_undefined2[17]).dismissKeyboard();
  }, []);
  const tmp8 = useChatWidthDefault(screenIndex);
  let disallowGesture3 = tmp8;
  const items1 = [tmp4, tmp8];
  const items2 = [channelId, screenIndex];
  const memo = disallowGesture2.useMemo(() => {
    if (gesture3 === constants3.ONYX) {
      let sum = disallowGesture3 + ONYX_BORDER_WIDTH;
    } else {
      sum = disallowGesture3;
    }
    return sum;
  }, items1);
  const callback1 = disallowGesture2.useCallback((arg0) => {
    if (!arg0) {
      React5(_undefined, false, "initial");
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId: _undefined, screenIndex };
      ComponentDispatch.dispatch(constants2.CHANNEL_DETAILS_HIDDEN, obj);
    }
  }, items2);
  const tmp11 = useMainTabsPanelsGestureDefault({
    canDrag: true,
    onDragStart: callback,
    onPreMovement: callback1,
    startShown: false,
    cancelOnSwipeRightFromStart: true,
    openWidth: memo,
  });
  ({ gesture, panelGestureContext } = tmp11);
  ({ isDragging, translateX, movePanel } = tmp11);
  const maxWidth = tmp11.maxWidth;
  const items3 = [closure_21, maxWidth, translateX];
  _require = undefined;
  importDefault = undefined;
  [tmp13, tmp14, tmp15] = items3;
  class SwipeForMemberListWrapperTsx5 {
    constructor() {
      return closure_0 - closure_1.get();
    }
  }
  const items4 = [tmp14, tmp15];
  SwipeForMemberListWrapperTsx5.__closure = items4;
  SwipeForMemberListWrapperTsx5.__workletHash = 10636144961030;
  SwipeForMemberListWrapperTsx5.__initData = tmp13;
  derivedValue = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(SwipeForMemberListWrapperTsx5);
  let obj2 = require("../../../../../_runtime/metro/01652__.js");
  derivedStateFromSharedValue = require("useStateFromSharedValue").useDerivedStateFromSharedValue(
    derivedValue,
    (arg0) => arg0 > 0,
  );
  const items5 = [derivedStateFromSharedValue, channelId, screenIndex];
  const effect1 = obj.useEffect(() => {
    if (derivedStateFromSharedValue) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId: _undefined, screenIndex };
      ComponentDispatch.dispatch(constants2.CHANNEL_DETAILS_SHOWN, obj);
    }
  }, items5);
  memo1 = obj.useMemo(() => ({}), []);
  const items6 = [memo1];
  const items7 = [memo1];
  const callback2 = obj.useCallback((arg0) => {
    const result = getJankSurfaceName.recordJankChannelDetailsOpen(memo1, arg0);
  }, items6);
  const effect2 = obj.useEffect(
    () => () => {
      const result = c0(c2[22]).setJankChannelDetailsOpen(memo1, false);
    },
    items7,
  );
  const tmp12Result = require("useStateFromSharedValue");
  const items8 = [closure_22, tmp4, callback4, isChatBesideChannelList, translateX, derivedStateFromSharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  gesture3 = undefined;
  disallowGesture2 = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items8;
  class SwipeForMemberListWrapperTsx6 {
    constructor() {
      if (closure_0 === closure_1.ONYX) {
        tmp = closure_2;
        if (!closure_2) {
          tmp2 = gesture;
          tmp3 = disallowGesture;
          diff = gesture.get() - disallowGesture;
        }
        return diff;
      }
      diff = gesture.get();
      return;
    }
  }
  const items9 = [tmp24, tmp25, tmp26, tmp27, tmp28];
  SwipeForMemberListWrapperTsx6.__closure = items9;
  SwipeForMemberListWrapperTsx6.__workletHash = 5263013881598;
  SwipeForMemberListWrapperTsx6.__initData = tmp23;
  const derivedValue1 = require("../../../../../_runtime/metro/01652__.js").useDerivedValue(
    SwipeForMemberListWrapperTsx6,
  );
  const items10 = [channelId, screenIndex, movePanel];
  callback3 = obj.useCallback((channelId) => {
    let tmp = channelId.channelId === c0;
    if (tmp) {
      tmp = channelId.screenIndex === c1;
    }
    if (tmp) {
      ChatInputUtils.dismissKeyboard();
      if (true === channelId.search) {
        React5(channelId.channelId, true, "initial");
      }
      movePanel(true, false, 0, true);
    }
  }, items10);
  const items11 = [movePanel];
  callback4 = obj.useCallback(() => {
    movePanel(false, false, 0, true);
  }, items11);
  const items12 = [callback4];
  const effect3 = obj.useEffect(() => {
    closure_0 = screenIndex(_undefined2[23]).addRouteChangeListener(() => {
      callback4();
    });
    return () => {
      closure_0();
    };
  }, items12);
  const items13 = [callback3, callback4];
  const effect4 = obj.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(constants2.SHOW_CHANNEL_DETAILS, callback3);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(constants2.HIDE_CHANNEL_DETAILS, callback4);
    return () => {
      const ComponentDispatch = c0(1108).ComponentDispatch;
      ComponentDispatch.unsubscribe(callback3.SHOW_CHANNEL_DETAILS, closure_1_11);
      const ComponentDispatch2 = c0(1108).ComponentDispatch;
      ComponentDispatch2.unsubscribe(callback3.HIDE_CHANNEL_DETAILS, callback4);
    };
  }, items13);
  const items14 = [derivedValue, callback4, channelId];
  const callback5 = obj.useCallback(() => {
    if (derivedValue.get() <= 0) {
      const obj2 = { shownPixels: derivedValue.get() };
      closure_15.verbose("handleBackPress", "shownPixels <= 0", obj2);
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
      const obj3 = {
        route: coerceChannelRouteResult,
        channelId: _undefined,
        currentRoute,
        isChatLockedOpen,
        routeParams: null,
      };
      let params1;
      if (coerceChannelRouteResult != null) {
        params1 = coerceChannelRouteResult.params;
      }
      obj3.routeParams = params1;
      closure_15.verbose("handleBackPress", obj3);
      if (null == coerceChannelRouteResult) {
        const obj4 = { currentRoute, isChatLockedOpen };
        closure_15.verbose("handleBackPress", "route is null", obj4);
        let flag = false;
      } else {
        const params2 = coerceChannelRouteResult.params;
        let channelId;
        if (params2 != null) {
          channelId = params2.channelId;
        }
        if (channelId !== _undefined) {
          const params = coerceChannelRouteResult.params;
          let channelId1;
          if (params != null) {
            channelId1 = params.channelId;
          }
          const obj5 = { routeChannelId: channelId1, expectedChannelId: _undefined };
          closure_15.verbose("handleBackPress", "route channelId mismatch", obj5);
          flag = false;
        } else if (metroImportDefault(_undefined)) {
          closure_15.verbose("handleBackPress", "cancelling search before closing panel");
          React5(_undefined, false, "initial");
          flag = true;
        } else {
          callback4();
          flag = true;
        }
      }
      return flag;
    }
  }, items14);
  useBackPressHandlerDefault(callback5, derivedStateFromSharedValue);
  const items15 = [channelId, screenIndex, callback4];
  const effect5 = obj.useEffect(() => {
    callback4();
  }, items15);
  const tmp12Result9 = require("../../../../../_runtime/metro/01652__.js");
  navigation = require("Link").useNavigation();
  closure_129_0 = channelId;
  closure_129_1 = screenIndex;
  closure_129_2 = isDragging;
  closure_129_3 = derivedStateFromSharedValue;
  const items16 = [channelId, screenIndex, derivedStateFromSharedValue];
  const effect6 = obj.useEffect(() => {
    const obj = AppAnalyticsUtilsDefault;
    obj.trackWithMetadata(constants.MEMBER_LIST_SWIPE_TOGGLED, {
      channel_id: _undefined,
      screen_index: String(c1),
      member_list_open: gesture3,
    });
  }, items16);
  const items17 = [derivedStateFromSharedValue, channelId, screenIndex, isDragging];
  const effect7 = obj.useEffect(() => {
    value = gesture3;
    if (gesture3) {
      value = _undefined2.get();
    }
    if (value) {
      const obj2 = { channel_id: _undefined, screen_index: null };
      const _String = String;
      obj2.screen_index = String(c1);
      AppAnalyticsUtilsDefault.trackWithMetadata(constants.MEMBER_LIST_SWIPE_PEEK, obj2);
    }
  }, items17);
  _require = gesture;
  gesture3 = undefined;
  disallowGesture2 = undefined;
  disallowGesture3 = undefined;
  const context = obj.useContext(tmp2(11401));
  const gesture2 = context.gesture;
  importDefault = gesture2;
  const disallowGesture = context.disallowGesture;
  dependencyMap = disallowGesture;
  let context1 = obj.useContext(tmp12(11401).MainTabsChannelScreenStackContext);
  if (context1 == null) {
    context1 = {};
  }
  gesture3 = context1.gesture;
  disallowGesture2 = context1.disallowGesture;
  disallowGesture3 = panelGestureContext.disallowGesture;
  const items18 = [gesture, gesture2, gesture3];
  const memo2 = obj.useMemo(() => {
    if (null == gesture3) {
      let result = _undefined.simultaneousWithExternalGesture(c1);
    } else {
      result = _undefined.simultaneousWithExternalGesture(c1, tmp);
    }
    return result;
  }, items18);
  const tmp12Result10 = require("Link");
  const items19 = [closure_17, derivedValue];
  _require = undefined;
  [tmp41, tmp42] = items19;
  class SwipeForMemberListWrapperTsx1 {
    constructor() {
      return closure_0.get() > 0;
    }
  }
  const items20 = [tmp42];
  SwipeForMemberListWrapperTsx1.__closure = items20;
  SwipeForMemberListWrapperTsx1.__workletHash = 17478574073517;
  SwipeForMemberListWrapperTsx1.__initData = tmp41;
  const items21 = [closure_18, disallowGesture, disallowGesture2, disallowGesture3];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp43, tmp44, tmp45, tmp46] = items21;
  class SwipeForMemberListWrapperTsx2 {
    constructor(arg0, arg1) {
      if (channelId !== arg1) {
        tmp = closure_0;
        result = closure_0.set(channelId);
        obj = closure_1;
        tmp3 = null;
        if (closure_1 != null) {
          result1 = obj.set(channelId);
        }
        if (!channelId) {
          tmp5 = closure_2;
          flag = false;
          result2 = closure_2.set(false);
        }
      }
      return;
    }
  }
  const items22 = [tmp44, tmp45, tmp46];
  SwipeForMemberListWrapperTsx2.__closure = items22;
  SwipeForMemberListWrapperTsx2.__workletHash = 6834415820461;
  SwipeForMemberListWrapperTsx2.__initData = tmp43;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    SwipeForMemberListWrapperTsx1,
    SwipeForMemberListWrapperTsx2,
  );
  const tmp12Result11 = require("../../../../../_runtime/metro/01652__.js");
  const items23 = [closure_19, useChatLayoutDefault().isChatLockedOpen, context.translateX, context1.translateX];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp48, tmp49, tmp50, tmp51] = items23;
  class SwipeForMemberListWrapperTsx3 {
    constructor() {
      tmp = !closure_0;
      if (!closure_0) {
        tmp2 = closure_1;
        num = 0;
        tmp = closure_1.get() > 0;
      }
      if (!tmp) {
        obj = closure_2;
        tmp3 = null;
        tmp4 = null != closure_2;
        if (tmp4) {
          num2 = 0;
          tmp4 = obj.get() > 0;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  }
  const items24 = [tmp49, tmp50, tmp51];
  SwipeForMemberListWrapperTsx3.__closure = items24;
  SwipeForMemberListWrapperTsx3.__workletHash = 14309871449646;
  SwipeForMemberListWrapperTsx3.__initData = tmp48;
  const items25 = [closure_20, disallowGesture3];
  _require = undefined;
  [tmp52, tmp53] = items25;
  class SwipeForMemberListWrapperTsx4 {
    constructor(arg0, arg1) {
      if (channelId !== arg1) {
        tmp = closure_0;
        result = closure_0.set(channelId);
      }
      return;
    }
  }
  const items26 = [tmp53];
  SwipeForMemberListWrapperTsx4.__closure = items26;
  SwipeForMemberListWrapperTsx4.__workletHash = 10562317341127;
  SwipeForMemberListWrapperTsx4.__initData = tmp52;
  const animatedReaction1 = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    SwipeForMemberListWrapperTsx3,
    SwipeForMemberListWrapperTsx4,
  );
  const tmp12Result12 = require("../../../../../_runtime/metro/01652__.js");
  const unmountEffect = require("useMountEffect").useUnmountEffect(() => {
    const result = disallowGesture3.set(false);
    const result1 = _undefined2.set(false);
    if (disallowGesture2 != null) {
      const result2 = disallowGesture2.set(false);
    }
  });
  const items27 = [panelGestureContext, channelId, screenIndex, derivedStateFromSharedValue];
  const memo3 = obj.useMemo(() => {
    const obj = {};
    const merged = Object.assign(panelGestureContext);
    obj.channelId = _undefined;
    obj.screenIndex = screenIndex;
    obj.isPanelActive = derivedStateFromSharedValue;
    return obj;
  }, items27);
  const tmp12Result13 = require("useMountEffect");
  const mainTabsChannelScreenStyles = require("useMainTabsChannelScreenStyles").useMainTabsChannelScreenStyles(
    isDragging,
    derivedValue1,
    maxWidth,
  );
  const tmp12Result14 = require("useMainTabsChannelScreenStyles");
  const items28 = [closure_23, derivedValue, 150];
  _require = undefined;
  importDefault = undefined;
  [tmp58, tmp59, tmp60] = items28;
  class SwipeForMemberListWrapperTsx7 {
    constructor() {
      obj = closure_0;
      tmp2 = closure_0.get() > 2 * closure_1;
      str = "flex";
      tmp = closure_1;
      if (tmp2) {
        str = "none";
      }
      obj1 = { display: str, opacity: null };
      num = 0;
      if (!tmp2) {
        num2 = 1;
        num = 1 - obj.get() / tmp;
      }
      obj1.opacity = num;
      return obj1;
    }
  }
  const items29 = [tmp59, tmp60];
  SwipeForMemberListWrapperTsx7.__closure = items29;
  SwipeForMemberListWrapperTsx7.__workletHash = 2478251364213;
  SwipeForMemberListWrapperTsx7.__initData = tmp58;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    SwipeForMemberListWrapperTsx7,
  );
  let obj3 = { value: memo3, children: null };
  const tmp12Result15 = require("../../../../../_runtime/metro/01652__.js");
  let tmp63 = null;
  if (tmp12Result16.isJankScreenReportingEnabled()) {
    let obj4 = {
      position: translateX,
      openAt: 0,
      closedAt: maxWidth,
      resolveOpenName: tmp12(18339).getBaseScreenName,
      resolveClosedName: tmp12(18339).getBaseScreenName,
      onCoveringChange: callback2,
    };
    tmp63 = navigation(tmp2(18342), obj4);
    const tmp2Result = tmp2(18342);
  }
  const items30 = [tmp63];
  let obj5 = { gesture: memo2, children: null };
  const obj6 = {
    onAccessibilityEscape() {
      if (c2) {
        navigation.goBack();
      }
    },
    style,
    children: null,
  };
  const obj7 = {
    name: "channel_screen",
    navigationKey: channelId,
    definition: require("NavigationTTIDefinition").CHANNEL_NAVIGATION_TTI,
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
  obj7.importantForAccessibility = str;
  obj7.style = tmp.content;
  const items31 = [
    children,
    navigation(require("MainTabsContentScrim").MainTabsContentScrim, { translateX: derivedValue1, maxWidth }),
  ];
  obj7.children = items31;
  const items32 = [closure_14(require("NavTTISurfaceProvider").NavTTISurfaceProvider, obj7)];
  const items33 = [mainTabsChannelScreenStyles, tmp.memberListContainer, ,];
  let onyxBorder;
  if (tmp4 === callback4.ONYX) {
    onyxBorder = tmp.onyxBorder;
  }
  items33[2] = onyxBorder;
  let onyxRightOverflow;
  if (!isChatBesideChannelList) {
    if (tmp4 === tmp22.ONYX) {
      onyxRightOverflow = tmp.onyxRightOverflow;
    }
  }
  const obj8 = {
    style: items33,
    accessibilityElementsHidden: !derivedStateFromSharedValue,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  items33[3] = onyxRightOverflow;
  const items34 = [navigation(ThemedGradientDefault, { absolute: true, withOverlay: true, overlayOpacity: 0.5 }), ,];
  tmp12Result16 = require("isJankScreenReportingEnabled");
  const tmp70 = !derivedStateFromSharedValue;
  items34[1] = navigation(require("LayerScope").LayerScope, {
    children: navigation(ChannelDetailsDefault, {
      isShowing: derivedStateFromSharedValue,
      channelId: tmp5[0],
      isSearchLocked: false,
      onBackPress: callback5,
      componentWidth: tmp8,
      onChannelDeleted: callback4,
    }),
  });
  const obj10 = { style: null, children: navigation(panelGestureContext, { style: tmp.memberListPreview }) };
  const items35 = [disallowGesture3.absoluteFill, animatedStyle];
  obj10.style = items35;
  items34[2] = navigation(_modDef1652.View, obj10);
  obj8.children = items34;
  items32[1] = closure_14(_modDef1652.View, obj8);
  obj6.children = items32;
  obj5.children = closure_14(panelGestureContext, obj6);
  items30[1] = navigation(require("LegacyBaseButton").GestureDetector, obj5);
  obj3.children = items30;
  return closure_14(require("SwipeForMemberListContext").SwipeForMemberListContext.Provider, obj3);
}
