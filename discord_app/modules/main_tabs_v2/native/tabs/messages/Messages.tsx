// === Module 18066: messages/Messages ===

// Module 18066 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5198 */;
import RootNavigationRef from "RootNavigationRef" /* 5199 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5609 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7654 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6568 */;

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const __initData = { code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/Messages.tsx");

export default noop.memo(function Messages(style) {
  let sharedValue;
  let dataKey;
  let sections;
  let externalScrollEventHandler;
  const tmp3 = dataKey(sections[4]);
  sharedValue = sharedValue(sections[6]).useSharedValue(0);
  let obj = sharedValue(sections[6]);
  const youBarTotalHeight = sharedValue(sections[7]).useYouBarTotalHeight();
  const obj2 = sharedValue(sections[7]);
  const youBarTotalHeight1 = sharedValue(sections[7]).useYouBarTotalHeight(-16);
  const obj3 = sharedValue(sections[7]);
  const doesLandOnHomeDrawer = sharedValue(sections[8]).useDoesLandOnHomeDrawer();
  const obj4 = sharedValue(sections[8]);
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(sections[9])());
  const tmp10 = dataKey(sections[10])();
  dataKey = tmp10.dataKey;
  sections = tmp10.sections;
  const ref = externalScrollEventHandler.useRef(null);
  const ref1 = externalScrollEventHandler.useRef(null);
  const tmp9 = dataKey(sections[9])();
  if (obj6.isAndroid()) {
    let AndroidMessagesListImplExperiment = tmp4(tmp13).AndroidMessagesListImplExperiment;
  } else {
    AndroidMessagesListImplExperiment = tmp(tmp13);
  }
  const config = AndroidMessagesListImplExperiment.useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  dataKey(sections[13])({ listRef: ref, listRefHappeningNow: ref1 });
  dataKey(sections[14])();
  obj6 = sharedValue(sections[11]);
  const commonTriggerPoint = sharedValue(sections[15]).useCommonTriggerPoint(tmp4(tmp2[16]).DmGdmListRenderTriggerPoint);
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
  const tmp4Result = sharedValue(sections[15]);
  externalScrollEventHandler = sharedValue(sections[22]).useExternalScrollEventHandler({ id: "messages" });
  const tmp4Result3 = sharedValue(sections[22]);
  const fn = function w(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    externalScrollEventHandler(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
  };
  fn.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  fn.__workletHash = 5461403437592;
  fn.__initData = __initData;
  let obj7 = { accessibilityLabel: null, data: null, handleScrollAnimated: null, insetEnd: null, listItemHeight: null, listItemSizes: null, listItemSuggestedFriendHeight: null, listLeft: null, listRefHappeningNow: null, listTop: null, recycleItems: null, scrollIndicatorInsetBottom: null, scrollPosition: null };
  const tmp4Result4 = sharedValue(sections[6]);
  const intl = tmp4(tmp2[23]).intl;
  obj7.accessibilityLabel = intl.string(sharedValue(sections[23]).t.OIgYlQ);
  obj7.data = tmp10;
  obj7.handleScrollAnimated = sharedValue(sections[6]).useAnimatedScrollHandler(fn);
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
  const obj8 = { value: tmp3(dataKey(sections[5]).MESSAGES).analyticsLocations, children: null };
  const obj9 = { style: style.style, children: null };
  const animatedScrollHandler = sharedValue(sections[6]).useAnimatedScrollHandler(fn);
  const obj10 = { backgroundColor: dataKey(sections[26]).colors.PANEL_BG, children: null };
  const items1 = [closure_6(dataKey(sections[27]), { height: headerSize, scrollPosition: sharedValue }), , ];
  if (tmp10.showFullscreenEmptyState) {
    let tmp22Result = closure_6(tmp(tmp2[28]), {});
  } else {
    if ("legend" === list) {
      let tmp25 = tmp2[29];
    } else {
      tmp25 = "flash" === list ? tmp2[30] : tmp2[31];
    }
    const obj11 = { ref };
    const merged = Object.assign(obj7);
    tmp22Result = closure_6(tmp(tmp25), obj11);
    const tmpResult2 = tmp(tmp25);
  }
  items1[1] = tmp22Result;
  let tmp22Result2 = null;
  if (!doesLandOnHomeDrawer) {
    tmp22Result2 = closure_6(tmp4(tmp2[32]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items1[2] = tmp22Result2;
  obj10.children = items1;
  obj9.children = closure_7(sharedValue(sections[25]).CutoutBackgroundProvider, obj10);
  obj8.children = closure_6(dataKey(sections[24]), obj9);
  return closure_6(sharedValue(sections[4]).AnalyticsLocationProvider, obj8);
});