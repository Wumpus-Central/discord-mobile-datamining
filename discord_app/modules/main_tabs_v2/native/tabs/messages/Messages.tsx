// discord_app/modules/main_tabs_v2/native/tabs/messages/Messages.tsx
import TTITrackerDefault from "../../../../tti_analytics/TTITracker.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import TTIAnalyticsUtils from "../../../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import GatewayConnectionStore from "../../../../gateway/GatewayConnectionStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const __initData = {
  code: "function MessagesTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}",
};
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
  const tmp3 = dataKey(sections[4]);
  const tmp4 = sharedValue;
  ({ headerSize, listItemHeight, listItemSizes, listItemSuggestedFriendHeight, listLeft, listTop } = dataKey(
    sections[8],
  )());
  const tmp9 = dataKey(sections[9])();
  dataKey = tmp9.dataKey;
  sections = tmp9.sections;
  const ref = externalScrollEventHandler.useRef(null);
  const ref1 = externalScrollEventHandler.useRef(null);
  let obj3 = dataKey(sections[10]);
  const config = obj3.useConfig({ location: "Messages Tab" });
  ({ list, recycleItems } = config);
  dataKey(sections[11])({ listRef: ref, listRefHappeningNow: ref1 });
  dataKey(sections[12])();
  const tmp8 = dataKey(sections[8])();
  const commonTriggerPoint = sharedValue(sections[13]).useCommonTriggerPoint(
    sharedValue(sections[14]).DmGdmListRenderTriggerPoint,
  );
  const items = [dataKey];
  const effect = externalScrollEventHandler.useEffect(() => {
    if (null != dataKey) {
      if (!obj7.isAndroid()) {
        if (!AccessibilityStore.useReducedMotion) {
          let tmp5Result = tmp5(4418);
          const rootNavigationRef = tmp5Result.getRootNavigationRef();
          let tmp2 = null != rootNavigationRef && rootNavigationRef.isReady();
          if (tmp2) {
            tmp5Result = tmp5(4417);
            const rootNavigationRef1 = tmp5(4418).getRootNavigationRef();
            let currentRoute;
            if (rootNavigationRef1 != null) {
              currentRoute = rootNavigationRef1.getCurrentRoute();
            }
            tmp2 = null != tmp5Result.coerceGuildsRoute(currentRoute);
            const tmp5Result1 = tmp5(4418);
          }
          if (tmp2) {
            const result = tmp5(5581).DeprecatedLayoutAnimation();
            const tmp5Result2 = tmp5(5581);
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
  const obj5 = sharedValue(sections[13]);
  externalScrollEventHandler = sharedValue(sections[21]).useExternalScrollEventHandler({ id: "messages" });
  const obj6 = sharedValue(sections[21]);
  class O {
    constructor(arg0) {
      result = closure_0.set(style.contentOffset.y);
      tmp2 = closure_3(style.contentOffset.y, style.contentSize.height, style.layoutMeasurement.height);
      return;
    }
  }
  O.__closure = { scrollPosition: sharedValue, handleGuildsNavigationScroll: externalScrollEventHandler };
  O.__workletHash = 5461403437592;
  O.__initData = __initData;
  obj = {
    accessibilityLabel: null,
    data: null,
    handleScrollAnimated: null,
    insetEnd: null,
    listItemHeight: null,
    listItemSizes: null,
    listItemSuggestedFriendHeight: null,
    listLeft: null,
    listRefHappeningNow: null,
    listTop: null,
    recycleItems: null,
    scrollIndicatorInsetBottom: null,
    scrollPosition: null,
  };
  let obj7 = sharedValue(sections[6]);
  const intl = sharedValue(sections[22]).intl;
  obj.accessibilityLabel = intl.string(sharedValue(sections[22]).t.OIgYlQ);
  obj.data = tmp9;
  obj.handleScrollAnimated = sharedValue(sections[6]).useAnimatedScrollHandler(O);
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
  const animatedScrollHandler = sharedValue(sections[6]).useAnimatedScrollHandler(O);
  obj2 = { backgroundColor: dataKey(sections[25]).colors.PANEL_BG, children: null };
  const items1 = [closure_6(dataKey(sections[26]), { height: headerSize, scrollPosition: sharedValue }), ,];
  if (tmp9.showFullscreenEmptyState) {
    let tmp20Result = tmp20(tmp(tmp2[27]), {});
  } else {
    if ("legend" === list) {
      let tmp23 = tmp2[28];
    } else {
      tmp23 = "flash" === list ? tmp2[29] : tmp2[30];
    }
    obj3 = { ref };
    const merged = Object.assign(obj);
    tmp20Result = tmp20(tmp(tmp23), obj3);
    const tmpResult = tmp(tmp23);
  }
  items1[1] = tmp20Result;
  items1[2] = closure_6(tmp4(sections[31]).TTIFirstContentfulPaint, { label: "messages_tabs" });
  obj2.children = items1;
  obj1.children = closure_7(sharedValue(sections[24]).CutoutBackgroundProvider, obj2);
  obj.children = closure_6(dataKey(sections[23]), obj1);
  return closure_6(sharedValue(sections[4]).AnalyticsLocationProvider, obj);
});
