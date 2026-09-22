// discord_app/modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesPerfLogging from "../utils/CollectiblesPerfLogging.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(1076).CollectiblesMobileShopScreen;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4757);
let obj = { rootContainer: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, border: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.border = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
const __initData = {
  code: "function CollectiblesShopViewAllCategoryItemsTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}",
};
let obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default noop.memo((category) => {
  category = category.category;
  const analyticsContext = category.analyticsContext;
  let analyticsLocations;
  const tmp = closure_10();
  ({ mobileBgUrl, logoUrl } = category);
  const backgroundColors = analyticsContext(analyticsLocations[7])(category.styles).backgroundColors;
  const items = [analyticsContext(analyticsLocations[9]).COLLECTIBLES_SHOP_INDEX_PAGE];
  analyticsLocations = analyticsContext(analyticsLocations[8])(items).analyticsLocations;
  const tmp4 = analyticsContext(analyticsLocations[8]);
  const filteredAndSortedProducts = category(analyticsLocations[11]).useFilteredAndSortedProducts({
    products: category.products,
  });
  let obj = category(analyticsLocations[11]);
  let obj2 = { products: category.products };
  const sharedValue = category(analyticsLocations[12]).useSharedValue(0);
  const items1 = [sharedValue];
  const callback = sharedValue.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 5) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num));
  }, items1);
  let obj3 = category(analyticsLocations[12]);
  const fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 2446209469388;
  fn.__initData = __initData;
  let sessionId;
  const animatedStyle = category(analyticsLocations[12]).useAnimatedStyle(fn);
  if (analyticsContext != null) {
    sessionId = analyticsContext.sessionId;
  }
  const items2 = [sessionId, analyticsLocations, category.name];
  const effect = sharedValue.useEffect(() => {
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
    obj2.category = category.name;
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
  }, items2);
  const obj5 = { value: analyticsLocations, children: null };
  const obj6 = { newValue: null, children: null };
  const obj7 = {};
  const merged = Object.assign(analyticsContext);
  obj7.pageCategory = category.name;
  obj6.newValue = obj7;
  const obj8 = { skuIDs: [], activeSubscription: null, children: null };
  const obj9 = { style: tmp.rootContainer, children: null };
  const items3 = [
    closure_8(category(analyticsLocations[18]).CollectiblesProgressiveImage, {
      source: { uri: mobileBgUrl },
      style: absoluteFill.absoluteFill,
    }),
    ,
    ,
  ];
  const obj11 = { logoUrl, buttonColor: null, categoryName: null };
  let toHexStringResult;
  const obj10 = { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill };
  let obj4 = category(analyticsLocations[12]);
  if (backgroundColors != null) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  obj11.buttonColor = toHexStringResult;
  obj11.categoryName = category.name;
  items3[1] = closure_8(analyticsContext(analyticsLocations[19]), obj11);
  const obj12 = { style: null };
  const items4 = [tmp.border, animatedStyle];
  obj12.style = items4;
  items3[2] = closure_8(analyticsContext(analyticsLocations[12]).View, obj12);
  const obj13 = {
    category,
    products: filteredAndSortedProducts,
    scrollEnabled: true,
    onScroll: callback,
    paddingTop: null,
    paddingBottom: null,
    muteBundleStaticBackground: true,
    accessibilityLabel: null,
  };
  const tmp2Result = analyticsContext(analyticsLocations[19]);
  obj13.paddingTop = analyticsContext(analyticsLocations[6]).space.PX_16;
  obj13.paddingBottom =
    analyticsContext(analyticsLocations[10])().bottom + analyticsContext(analyticsLocations[6]).space.PX_16;
  const intl = tmp5(tmp3[21]).intl;
  obj13.accessibilityLabel = intl.formatToPlainString(category(analyticsLocations[21]).t.FNtLb3, {
    category: category.name,
  });
  items3[3] = closure_8(analyticsContext(analyticsLocations[20]), obj13);
  obj9.children = items3;
  obj8.children = closure_9(closure_4, obj9);
  obj6.children = closure_8(category(analyticsLocations[17]).NativePaymentContextProvider, obj8);
  obj5.children = closure_8(category(analyticsLocations[16]).CollectiblesAnalyticsProvider, obj6);
  return closure_8(category(analyticsLocations[8]).AnalyticsLocationProvider, obj5);
});
