// === Module 16366: messages/Messages ===

// Module 16366 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4937 */;
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 6665 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7190 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5754 */;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const __initData = { code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}" };
const __initData2 = { code: "function MessagesTsx2(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function Messages(arg0) {
  const cResult = sharedValue(sections[5]).c(40);
  let obj = sharedValue(sections[5]);
  const analyticsLocations = dataKey(sections[6])(dataKey(sections[7]).MESSAGES).analyticsLocations;
  const tmp5 = dataKey(sections[6]);
  sharedValue = sharedValue(sections[8]).useSharedValue(0);
  const obj2 = sharedValue(sections[8]);
  const youBarTotalHeight = sharedValue(sections[9]).useYouBarTotalHeight();
  const obj3 = sharedValue(sections[9]);
  const youBarTotalHeight1 = sharedValue(sections[9]).useYouBarTotalHeight(-16);
  const obj4 = sharedValue(sections[9]);
  const doesLandOnHomeDrawer = sharedValue(sections[10]).useDoesLandOnHomeDrawer();
  const obj5 = sharedValue(sections[10]);
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(sections[11])());
  const tmp11 = dataKey(sections[12])();
  dataKey = tmp11.dataKey;
  sections = tmp11.sections;
  const tmp10 = dataKey(sections[11])();
  const ref1 = externalScrollEventHandler.useRef(null);
  const ref = externalScrollEventHandler.useRef(null);
  if (obj7.isAndroid()) {
    let AndroidMessagesListImplExperiment = tmp(tmp14).AndroidMessagesListImplExperiment;
  } else {
    AndroidMessagesListImplExperiment = tmp4(tmp14);
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { location: "Messages Tab" };
    cResult[0] = obj8;
    let first = obj8;
  } else {
    first = cResult[0];
  }
  const config = AndroidMessagesListImplExperiment.useConfig(first);
  ({ list, recycleItems } = config);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { listRef: ref, listRefHappeningNow: ref1 };
    cResult[1] = obj9;
    let tmp17 = obj9;
  } else {
    tmp17 = cResult[1];
  }
  dataKey(sections[15])(tmp17);
  dataKey(sections[16])();
  obj7 = sharedValue(sections[13]);
  const commonTriggerPoint = sharedValue(sections[17]).useCommonTriggerPoint(tmp(tmp2[18]).DmGdmListRenderTriggerPoint);
  if (cResult[2] !== dataKey) {
    const fn = function z() {
      if (null != dataKey) {
        if (!obj7.isAndroid()) {
          if (!AccessibilityStore.useReducedMotion) {
            const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
            let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
            if (tmp2) {
              const tmp5Result4 = NavigationRouteUtils;
              const rootNavigationRef1 = RootNavigationRef.getRootNavigationRef();
              let currentRoute;
              if (rootNavigationRef1 != null) {
                currentRoute = rootNavigationRef1.getCurrentRoute();
              }
              tmp2 = null != tmp5Result4.coerceGuildsRoute(currentRoute);
              const tmp5Result5 = RootNavigationRef;
            }
            if (tmp2) {
              const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
              const tmp5Result6 = DeprecatedLayoutAnimation;
            }
            const tmp5Result = RootNavigationRef;
          }
        }
        obj7 = PlatformUtils;
      }
    };
    const items = [dataKey];
    cResult[2] = dataKey;
    cResult[3] = fn;
    cResult[4] = items;
    let tmp22 = items;
    let tmp21 = fn;
  } else {
    tmp21 = cResult[3];
    tmp22 = cResult[4];
  }
  const effect = obj6.useEffect(tmp21, tmp22);
  if (cResult[5] !== sections) {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        obj2 = closure_1(closure_2[23]);
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
    cResult[5] = sections;
    cResult[6] = D;
  } else {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        obj2 = closure_1(closure_2[23]);
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
  }
  const layoutEffect = obj6.useLayoutEffect(D);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        obj2 = closure_1(closure_2[23]);
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
    cResult[7] = tmp27;
  } else {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        obj2 = closure_1(closure_2[23]);
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
  }
  const tmpResult = sharedValue(sections[17]);
  externalScrollEventHandler = sharedValue(sections[24]).useExternalScrollEventHandler(tmp27);
  const tmpResult3 = sharedValue(sections[24]);
  const fn2 = function j(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    externalScrollEventHandler(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
  };
  fn2.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  fn2.__workletHash = 5461403437592;
  fn2.__initData = __initData;
  const animatedScrollHandler = sharedValue(sections[8]).useAnimatedScrollHandler(fn2);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        obj2 = closure_1(closure_2[23]);
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
    const stringResult = obj13.string(tmp(tmp2[25]).t.OIgYlQ);
    cResult[8] = stringResult;
    const tmp30 = stringResult;
  } else {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        obj2 = closure_1(closure_2[23]);
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
  }
  if (cResult[9] === tmp11) {
    class D {
      constructor() {
        obj = closure_0(closure_2[22]);
        trackAppUIViewedResult = obj.trackAppUIViewed();
        obj2 = closure_1(closure_2[23]);
        reduced = sections.reduce((acc, item) => acc + item, 0);
        recordRenderResult = obj2.recordRender(reduced, closure_5.isConnected());
        return;
      }
    }
  }
  cResult[9] = tmp11;
  cResult[10] = animatedScrollHandler;
  cResult[11] = listItemHeight;
  cResult[12] = listItemSizes;
  cResult[13] = listItemSuggestedFriendHeight;
  cResult[14] = listLeft;
  cResult[15] = listTop;
  cResult[16] = recycleItems;
  cResult[17] = youBarTotalHeight1;
  cResult[18] = sharedValue;
  cResult[19] = youBarTotalHeight;
  cResult[20] = { accessibilityLabel: tmp30, data: tmp11, handleScrollAnimated: animatedScrollHandler, insetEnd: youBarTotalHeight, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listRefHappeningNow: ref1, listTop, recycleItems, scrollIndicatorInsetBottom: youBarTotalHeight1, scrollPosition: sharedValue };
  const obj10 = { accessibilityLabel: tmp30, data: tmp11, handleScrollAnimated: animatedScrollHandler, insetEnd: youBarTotalHeight, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listRefHappeningNow: ref1, listTop, recycleItems, scrollIndicatorInsetBottom: youBarTotalHeight1, scrollPosition: sharedValue };
  const tmpResult4 = sharedValue(sections[8]);
}) : (function Messages(style) {
  let sharedValue;
  let dataKey;
  let sections;
  let externalScrollEventHandler;
  const tmp3 = dataKey(sections[6]);
  sharedValue = sharedValue(sections[8]).useSharedValue(0);
  let obj = sharedValue(sections[8]);
  const youBarTotalHeight = sharedValue(sections[9]).useYouBarTotalHeight();
  const obj2 = sharedValue(sections[9]);
  const youBarTotalHeight1 = sharedValue(sections[9]).useYouBarTotalHeight(-16);
  const obj3 = sharedValue(sections[9]);
  const doesLandOnHomeDrawer = sharedValue(sections[10]).useDoesLandOnHomeDrawer();
  const obj4 = sharedValue(sections[10]);
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(sections[11])());
  const tmp10 = dataKey(sections[12])();
  dataKey = tmp10.dataKey;
  sections = tmp10.sections;
  const ref = externalScrollEventHandler.useRef(null);
  const ref1 = externalScrollEventHandler.useRef(null);
  const tmp9 = dataKey(sections[11])();
  if (obj6.isAndroid()) {
    let AndroidMessagesListImplExperiment = tmp4(tmp13).AndroidMessagesListImplExperiment;
  } else {
    AndroidMessagesListImplExperiment = tmp(tmp13);
  }
  const config = AndroidMessagesListImplExperiment.useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  dataKey(sections[15])({ listRef: ref, listRefHappeningNow: ref1 });
  dataKey(sections[16])();
  obj6 = sharedValue(sections[13]);
  const commonTriggerPoint = sharedValue(sections[17]).useCommonTriggerPoint(tmp4(tmp2[18]).DmGdmListRenderTriggerPoint);
  const items = [dataKey];
  const effect = obj5.useEffect(() => {
    if (null != dataKey) {
      if (!obj7.isAndroid()) {
        if (!AccessibilityStore.useReducedMotion) {
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp2) {
            const tmp5Result4 = NavigationRouteUtils;
            const rootNavigationRef1 = RootNavigationRef.getRootNavigationRef();
            let currentRoute;
            if (rootNavigationRef1 != null) {
              currentRoute = rootNavigationRef1.getCurrentRoute();
            }
            tmp2 = null != tmp5Result4.coerceGuildsRoute(currentRoute);
            const tmp5Result5 = RootNavigationRef;
          }
          if (tmp2) {
            const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
            const tmp5Result6 = DeprecatedLayoutAnimation;
          }
          const tmp5Result = RootNavigationRef;
        }
      }
      obj7 = PlatformUtils;
    }
  }, items);
  const layoutEffect = obj5.useLayoutEffect(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
    const reduced = sections.reduce((acc, item) => acc + item, 0);
    TTITrackerDefault.recordRender(reduced, GatewayConnectionStore.isConnected());
  });
  const tmp4Result = sharedValue(sections[17]);
  externalScrollEventHandler = sharedValue(sections[24]).useExternalScrollEventHandler({ id: "messages" });
  const tmp4Result3 = sharedValue(sections[24]);
  const fn = function w(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    externalScrollEventHandler(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
  };
  fn.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  fn.__workletHash = 17197843851355;
  fn.__initData = __initData2;
  let obj7 = { accessibilityLabel: null, data: null, handleScrollAnimated: null, insetEnd: null, listItemHeight: null, listItemSizes: null, listItemSuggestedFriendHeight: null, listLeft: null, listRefHappeningNow: null, listTop: null, recycleItems: null, scrollIndicatorInsetBottom: null, scrollPosition: null };
  const tmp4Result4 = sharedValue(sections[8]);
  const intl = tmp4(tmp2[25]).intl;
  obj7.accessibilityLabel = intl.string(sharedValue(sections[25]).t.OIgYlQ);
  obj7.data = tmp10;
  obj7.handleScrollAnimated = sharedValue(sections[8]).useAnimatedScrollHandler(fn);
  obj7.insetEnd = youBarTotalHeight;
  obj7.listItemHeight = listItemHeight;
  obj7.listItemSizes = listItemSizes;
  obj7.listItemSuggestedFriendHeight = listItemSuggestedFriendHeight;
  obj7.listLeft = listLeft;
  obj7.listRefHappeningNow = ref1;
  obj7.listTop = listTop;
  obj7.recycleItems = recycleItems;
  obj7.scrollIndicatorInsetBottom = youBarTotalHeight1;
  obj7.scrollPosition = sharedValue;
  const obj8 = { value: tmp3(dataKey(sections[7]).MESSAGES).analyticsLocations, children: null };
  const obj9 = { style: style.style, children: null };
  const animatedScrollHandler = sharedValue(sections[8]).useAnimatedScrollHandler(fn);
  const obj10 = { backgroundColor: dataKey(sections[33]).colors.PANEL_BG, children: null };
  const items1 = [closure_6(dataKey(sections[26]), { height: headerSize, scrollPosition: sharedValue }), , ];
  if (tmp10.showFullscreenEmptyState) {
    let tmp22Result = closure_6(tmp(tmp2[27]), {});
  } else {
    if ("legend" === list) {
      let tmp25 = tmp2[28];
    } else {
      tmp25 = "flash" === list ? tmp2[29] : tmp2[30];
    }
    const obj11 = { ref };
    const merged = Object.assign(obj7);
    tmp22Result = closure_6(tmp(tmp25), obj11);
    const tmpResult2 = tmp(tmp25);
  }
  items1[1] = tmp22Result;
  let tmp22Result2 = null;
  if (!doesLandOnHomeDrawer) {
    tmp22Result2 = closure_6(tmp4(tmp2[31]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items1[2] = tmp22Result2;
  obj10.children = items1;
  obj9.children = closure_7(sharedValue(sections[32]).CutoutBackgroundProvider, obj10);
  obj8.children = closure_6(dataKey(sections[34]), obj9);
  return closure_6(sharedValue(sections[6]).AnalyticsLocationProvider, obj8);
}));