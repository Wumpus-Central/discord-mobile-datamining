// === Module 16360: messages/Messages ===

// Module 16360 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4613 */;
import RootNavigationRef from "RootNavigationRef" /* 4614 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5798 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7717 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5494 */;

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
  const tmp4 = sharedValue;
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
  const config = dataKey(sections[11]).useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  dataKey(sections[12])({ listRef: ref, listRefHappeningNow: ref1 });
  dataKey(sections[13])();
  const obj5 = dataKey(sections[11]);
  const commonTriggerPoint = sharedValue(sections[14]).useCommonTriggerPoint(sharedValue(sections[15]).DmGdmListRenderTriggerPoint);
  const items = [dataKey];
  const effect = externalScrollEventHandler.useEffect(() => {
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
  const layoutEffect = externalScrollEventHandler.useLayoutEffect(() => {
    TTIAnalyticsUtils.trackAppUIViewed();
    const reduced = sections.reduce((acc, item) => acc + item, 0);
    TTITrackerDefault.recordRender(reduced, GatewayConnectionStore.isConnected());
  });
  const obj6 = sharedValue(sections[14]);
  externalScrollEventHandler = sharedValue(sections[22]).useExternalScrollEventHandler({ id: "messages" });
  let obj7 = sharedValue(sections[22]);
  const fn = function w(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
    externalScrollEventHandler(contentOffset.contentOffset.y, contentOffset.contentSize.height, contentOffset.layoutMeasurement.height);
  };
  fn.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  fn.__workletHash = 5461403437592;
  fn.__initData = __initData;
  const obj9 = { accessibilityLabel: null, data: null, handleScrollAnimated: null, insetEnd: null, listItemHeight: null, listItemSizes: null, listItemSuggestedFriendHeight: null, listLeft: null, listRefHappeningNow: null, listTop: null, recycleItems: null, scrollIndicatorInsetBottom: null, scrollPosition: null };
  const obj8 = sharedValue(sections[6]);
  const intl = sharedValue(sections[23]).intl;
  obj9.accessibilityLabel = intl.string(sharedValue(sections[23]).t.OIgYlQ);
  obj9.data = tmp10;
  obj9.handleScrollAnimated = sharedValue(sections[6]).useAnimatedScrollHandler(fn);
  obj9.insetEnd = youBarTotalHeight;
  obj9.listItemHeight = listItemHeight;
  obj9.listItemSizes = listItemSizes;
  obj9.listItemSuggestedFriendHeight = listItemSuggestedFriendHeight;
  obj9.listLeft = listLeft;
  obj9.listRefHappeningNow = ref1;
  obj9.listTop = listTop;
  obj9.recycleItems = recycleItems;
  obj9.scrollIndicatorInsetBottom = youBarTotalHeight1;
  obj9.scrollPosition = sharedValue;
  const obj10 = { value: tmp3(dataKey(sections[5]).MESSAGES).analyticsLocations, children: null };
  const obj11 = { style: style.style, children: null };
  const animatedScrollHandler = sharedValue(sections[6]).useAnimatedScrollHandler(fn);
  const obj12 = { backgroundColor: dataKey(sections[26]).colors.PANEL_BG, children: null };
  const items1 = [closure_6(dataKey(sections[27]), { height: headerSize, scrollPosition: sharedValue }), , ];
  if (tmp10.showFullscreenEmptyState) {
    let tmp21Result = closure_6(tmp(tmp2[28]), {});
  } else {
    if ("legend" === list) {
      let tmp24 = tmp2[29];
    } else {
      tmp24 = "flash" === list ? tmp2[30] : tmp2[31];
    }
    const obj13 = { ref };
    const merged = Object.assign(obj9);
    tmp21Result = closure_6(tmp(tmp24), obj13);
    const tmpResult = tmp(tmp24);
  }
  items1[1] = tmp21Result;
  let tmp21Result2 = null;
  if (!doesLandOnHomeDrawer) {
    tmp21Result2 = closure_6(tmp4(tmp2[32]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items1[2] = tmp21Result2;
  obj12.children = items1;
  obj11.children = closure_7(sharedValue(sections[25]).CutoutBackgroundProvider, obj12);
  obj10.children = closure_6(dataKey(sections[24]), obj11);
  return closure_6(sharedValue(sections[4]).AnalyticsLocationProvider, obj10);
});