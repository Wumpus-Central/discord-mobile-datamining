// === Module 16114: messages/Messages ===

// Module 16114 (messages/Messages)
import TTITrackerDefault from "TTITracker" /* 9 */;
import PlatformUtils from "PlatformUtils" /* 1150 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4494 */;
import RootNavigationRef from "RootNavigationRef" /* 4495 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5662 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 7578 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5358 */;

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
  let obj = sharedValue(sections[6]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = sharedValue(sections[7]);
  const youBarTotalHeight = obj1.useYouBarTotalHeight();
  let obj2 = sharedValue(sections[7]);
  const youBarTotalHeight1 = obj2.useYouBarTotalHeight(-16);
  let obj3 = sharedValue(sections[8]);
  const doesLandOnHomeDrawer = obj3.useDoesLandOnHomeDrawer();
  const tmp3 = dataKey(sections[4]);
  const tmp4 = sharedValue;
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
          let tmp5Result = RootNavigationRef;
          const rootNavigationRef = tmp5Result.getRootNavigationRef();
          let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp2) {
            tmp5Result = NavigationRouteUtils;
            const rootNavigationRef1 = RootNavigationRef.getRootNavigationRef();
            let currentRoute;
            if (rootNavigationRef1 != null) {
              currentRoute = rootNavigationRef1.getCurrentRoute();
            }
            tmp2 = null != tmp5Result.coerceGuildsRoute(currentRoute);
            const tmp5Result1 = RootNavigationRef;
          }
          if (tmp2) {
            const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
            const tmp5Result2 = DeprecatedLayoutAnimation;
          }
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
  obj = { accessibilityLabel: null, data: null, handleScrollAnimated: null, insetEnd: null, listItemHeight: null, listItemSizes: null, listItemSuggestedFriendHeight: null, listLeft: null, listRefHappeningNow: null, listTop: null, recycleItems: null, scrollIndicatorInsetBottom: null, scrollPosition: null };
  const obj8 = sharedValue(sections[6]);
  const intl = sharedValue(sections[23]).intl;
  obj.accessibilityLabel = intl.string(sharedValue(sections[23]).t.OIgYlQ);
  obj.data = tmp10;
  obj.handleScrollAnimated = sharedValue(sections[6]).useAnimatedScrollHandler(fn);
  obj.insetEnd = youBarTotalHeight;
  obj.listItemHeight = listItemHeight;
  obj.listItemSizes = listItemSizes;
  obj.listItemSuggestedFriendHeight = listItemSuggestedFriendHeight;
  obj.listLeft = listLeft;
  obj.listRefHappeningNow = ref1;
  obj.listTop = listTop;
  obj.recycleItems = recycleItems;
  obj.scrollIndicatorInsetBottom = youBarTotalHeight1;
  obj.scrollPosition = sharedValue;
  obj = { value: tmp3(dataKey(sections[5]).MESSAGES).analyticsLocations, children: null };
  obj1 = { style: style.style, children: null };
  const animatedScrollHandler = sharedValue(sections[6]).useAnimatedScrollHandler(fn);
  obj2 = { backgroundColor: dataKey(sections[26]).colors.PANEL_BG, children: null };
  const items1 = [closure_6(dataKey(sections[27]), { height: headerSize, scrollPosition: sharedValue }), , ];
  if (tmp10.showFullscreenEmptyState) {
    let tmp21Result = closure_6(tmp(tmp2[28]), {});
  } else {
    if ("legend" === list) {
      let tmp24 = tmp2[29];
    } else {
      tmp24 = "flash" === list ? tmp2[30] : tmp2[31];
    }
    obj3 = { ref };
    const merged = Object.assign(obj);
    tmp21Result = closure_6(tmp(tmp24), obj3);
    const tmpResult = tmp(tmp24);
  }
  items1[1] = tmp21Result;
  tmp21Result = null;
  if (!doesLandOnHomeDrawer) {
    tmp21Result = closure_6(tmp4(tmp2[32]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  }
  items1[2] = tmp21Result;
  obj2.children = items1;
  obj1.children = closure_7(sharedValue(sections[25]).CutoutBackgroundProvider, obj2);
  obj.children = closure_6(dataKey(sections[24]), obj1);
  return closure_6(sharedValue(sections[4]).AnalyticsLocationProvider, obj);
});