// discord_app/modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import spring_spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesPerfLogging from "../utils/CollectiblesPerfLogging.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(1074).CollectiblesMobileShopScreen;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5141);
let obj = { rootContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, border: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.border = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = {
  code: "(function CollectiblesShopViewAllCategoryItemsTsx1(){let[borderOpacity]=this.__closure;return{opacity:borderOpacity.get()};})",
};
let obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default noop.memo(function CollectiblesShopViewAllCategoryItems(category) {
  category = category.category;
  _require = category;
  const analyticsContext = category.analyticsContext;
  let analyticsLocations;
  const tmp = closure_10();
  ({ mobileBgUrl, logoUrl } = category);
  const backgroundColors = analyticsContext(analyticsLocations[7])(category.styles).backgroundColors;
  items = [analyticsContext(analyticsLocations[9]).COLLECTIBLES_SHOP_INDEX_PAGE];
  analyticsLocations = analyticsContext(analyticsLocations[8])(items).analyticsLocations;
  const tmp4 = analyticsContext(analyticsLocations[8]);
  const filteredAndSortedProducts = require("useFilteredAndSortedProducts").useFilteredAndSortedProducts({
    products: category.products,
  });
  let obj = require("useFilteredAndSortedProducts");
  let obj2 = { products: category.products };
  const sharedValue = require("../../../../_runtime/metro/01652__.js").useSharedValue(0);
  const items1 = [sharedValue];
  const callback = sharedValue.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 5) {
      num = 1;
    }
    const result = sharedValue.set(spring_spring.withSpring(num, springPresets.Reanimated3DefaultSpringConfig));
  }, items1);
  let obj3 = require("../../../../_runtime/metro/01652__.js");
  let obj4 = sharedValue;
  const items2 = [closure_11, sharedValue];
  _require = undefined;
  [tmp9, tmp10] = items2;
  class CollectiblesShopViewAllCategoryItemsTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp10];
  CollectiblesShopViewAllCategoryItemsTsx1.__closure = items3;
  CollectiblesShopViewAllCategoryItemsTsx1.__workletHash = 3426078799765;
  CollectiblesShopViewAllCategoryItemsTsx1.__initData = tmp9;
  let sessionId;
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    CollectiblesShopViewAllCategoryItemsTsx1,
  );
  if (analyticsContext != null) {
    sessionId = analyticsContext.sessionId;
  }
  const items4 = [sessionId, analyticsLocations, category.name];
  const effect = obj4.useEffect(() => {
    const obj2 = {
      location_stack: analyticsLocations,
      page_session_id: null,
      source: null,
      page_type: "index",
      category: null,
    };
    let sessionId;
    if (analyticsContext != null) {
      sessionId = analyticsContext.sessionId;
    }
    obj2.page_session_id = sessionId;
    obj2.source = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
    obj2.category = _undefined.name;
    AnalyticsUtilsDefault.track(AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, obj2);
    let sessionId1;
    if (analyticsContext != null) {
      sessionId1 = analyticsContext.sessionId;
    }
    const obj3 = CollectiblesPerfLogging;
    obj3.trackShopPerf({
      sessionId: sessionId1,
      checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
      tab: constants.SHOP_ALL,
      unpublishedCategoriesShown: false,
      cacheDisabled: false,
    });
    const obj4 = {
      sessionId: sessionId1,
      checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
      tab: constants.SHOP_ALL,
      unpublishedCategoriesShown: false,
      cacheDisabled: false,
    };
  }, items4);
  const obj6 = { value: analyticsLocations, children: null };
  const obj7 = { newValue: null, children: null };
  const obj8 = {};
  const merged = Object.assign(analyticsContext);
  obj8.pageCategory = category.name;
  obj7.newValue = obj8;
  const obj9 = { skuIDs: [], activeSubscription: null, children: null };
  const obj10 = { style: tmp.rootContainer, children: null };
  const items5 = [
    closure_8(require("CollectiblesProgressiveImage").CollectiblesProgressiveImage, {
      source: { uri: mobileBgUrl },
      style: absoluteFill.absoluteFill,
    }),
    ,
    ,
  ];
  const obj12 = { logoUrl, buttonColor: null, categoryName: null };
  let toHexStringResult;
  const obj11 = { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill };
  const obj5 = require("../../../../_runtime/metro/01652__.js");
  if (backgroundColors != null) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  obj12.buttonColor = toHexStringResult;
  obj12.categoryName = category.name;
  items5[1] = closure_8(analyticsContext(analyticsLocations[20]), obj12);
  const obj13 = { style: null };
  const items6 = [tmp.border, animatedStyle];
  obj13.style = items6;
  items5[2] = closure_8(analyticsContext(analyticsLocations[12]).View, obj13);
  const obj14 = {
    category,
    products: filteredAndSortedProducts,
    scrollEnabled: true,
    onScroll: callback,
    paddingTop: null,
    paddingBottom: null,
    muteBundleStaticBackground: true,
    accessibilityLabel: null,
  };
  const tmp2Result = analyticsContext(analyticsLocations[20]);
  obj14.paddingTop = analyticsContext(analyticsLocations[6]).space.PX_16;
  obj14.paddingBottom =
    analyticsContext(analyticsLocations[10])().bottom + analyticsContext(analyticsLocations[6]).space.PX_16;
  const intl = tmp5(tmp3[22]).intl;
  obj14.accessibilityLabel = intl.formatToPlainString(require("util").t.FNtLb3, { category: category.name });
  items5[3] = closure_8(analyticsContext(analyticsLocations[21]), obj14);
  obj10.children = items5;
  obj9.children = closure_9(closure_4, obj10);
  obj7.children = closure_8(require("NativePaymentContext").NativePaymentContextProvider, obj9);
  obj6.children = closure_8(require("CollectiblesAnalyticsContext").CollectiblesAnalyticsProvider, obj7);
  return closure_8(require("useAnalyticsLocations").AnalyticsLocationProvider, obj6);
});
