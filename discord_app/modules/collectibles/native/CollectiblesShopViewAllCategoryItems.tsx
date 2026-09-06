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
fn(4560);
let obj = { rootContainer: null, border: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.rootContainer = obj;
const createStyles = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.border = createStyles;
let closure_10 = createStyles.createStyles(obj);
const __initData = {
  code: "function CollectiblesShopViewAllCategoryItemsTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}",
};
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
  category(analyticsLocations[11]);
  let obj = { products: category.products };
  const filteredAndSortedProducts = obj.useFilteredAndSortedProducts(obj);
  let obj2 = category(analyticsLocations[12]);
  const sharedValue = obj2.useSharedValue(0);
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
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (analyticsContext != null) {
    sessionId = analyticsContext.sessionId;
  }
  const items2 = [sessionId, analyticsLocations, category.name];
  const effect = sharedValue.useEffect(() => {
    let obj = {
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
    obj.page_session_id = sessionId;
    obj.source = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
    obj.category = category.name;
    obj.track(AnalyticEvents.COLLECTIBLES_SHOP_VIEWED, obj);
    let sessionId1;
    if (analyticsContext != null) {
      sessionId1 = analyticsContext.sessionId;
    }
    obj = {
      sessionId: sessionId1,
      checkpoint: CollectiblesPerfLogging.CollectiblesShopPerfCheckpoint.SHOP_MOUNTED,
      tab: constants.SHOP_ALL,
      unpublishedCategoriesShown: false,
      cacheDisabled: false,
    };
    CollectiblesPerfLogging.trackShopPerf(obj);
  }, items2);
  obj = { value: analyticsLocations, children: null };
  const obj1 = { newValue: null, children: null };
  obj2 = {};
  const merged = Object.assign(analyticsContext);
  obj2.pageCategory = category.name;
  obj1.newValue = obj2;
  obj3 = { skuIDs: [], activeSubscription: null, children: null };
  const obj4 = { style: tmp.rootContainer, children: null };
  const items3 = [
    closure_8(category(analyticsLocations[18]).CollectiblesProgressiveImage, {
      source: { uri: mobileBgUrl },
      style: absoluteFill.absoluteFill,
    }),
    ,
    ,
  ];
  const obj6 = { logoUrl, buttonColor: null, categoryName: null };
  let toHexStringResult;
  let tmp2Result = tmp2(tmp3[19]);
  if (backgroundColors != null) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  obj6.buttonColor = toHexStringResult;
  obj6.categoryName = category.name;
  items3[1] = closure_8(tmp2Result, obj6);
  const obj7 = { style: null };
  const items4 = [tmp.border, animatedStyle];
  obj7.style = items4;
  items3[2] = closure_8(analyticsContext(analyticsLocations[12]).View, obj7);
  const obj8 = {
    category,
    products: filteredAndSortedProducts,
    scrollEnabled: true,
    onScroll: callback,
    paddingTop: null,
    paddingBottom: null,
    muteBundleStaticBackground: true,
    accessibilityLabel: null,
  };
  tmp2Result = tmp2(tmp3[20]);
  obj8.paddingTop = analyticsContext(analyticsLocations[6]).space.PX_16;
  obj8.paddingBottom =
    analyticsContext(analyticsLocations[10])().bottom + analyticsContext(analyticsLocations[6]).space.PX_16;
  const intl = tmp5(tmp3[21]).intl;
  obj8.accessibilityLabel = intl.formatToPlainString(category(analyticsLocations[21]).t.FNtLb3, {
    category: category.name,
  });
  items3[3] = closure_8(tmp2Result, obj8);
  obj4.children = items3;
  obj3.children = closure_9(closure_4, obj4);
  obj1.children = closure_8(category(analyticsLocations[17]).NativePaymentContextProvider, obj3);
  obj.children = closure_8(category(analyticsLocations[16]).CollectiblesAnalyticsProvider, obj1);
  return closure_8(category(analyticsLocations[8]).AnalyticsLocationProvider, obj);
});
