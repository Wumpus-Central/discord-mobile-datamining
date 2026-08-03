import importAllResult from "CollectiblesShopViewAllCategoryItemsHeader";
import get_ActivityIndicator from "NativePaymentContextProvider";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import { AnalyticEvents } from "ME";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let c9;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ View: c4, StyleSheet: c5 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let obj = { rootContainer: null, border: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
createCacheKey = { height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
obj[1] = createCacheKey;
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function CollectiblesShopViewAllCategoryItemsTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memoResult = importAllResult.memo((category) => {
  let logoUrl;
  let mobileBgUrl;
  category = category.category;
  const analyticsContext = category.analyticsContext;
  let analyticsLocations;
  let sharedValue;
  const tmp = callback2();
  ({ mobileBgUrl, logoUrl } = category);
  const backgroundColors = analyticsContext(analyticsLocations[7])(category.styles).backgroundColors;
  const items = [analyticsContext(analyticsLocations[9]).COLLECTIBLES_SHOP_INDEX_PAGE];
  analyticsLocations = analyticsContext(analyticsLocations[8])(items).analyticsLocations;
  let obj = category(analyticsLocations[11]);
  obj = { products: category.products };
  const filteredAndSortedProducts = obj.useFilteredAndSortedProducts(obj);
  let obj2 = category(analyticsLocations[12]);
  sharedValue = obj2.useSharedValue(0);
  const items1 = [sharedValue];
  const callback = sharedValue.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 5) {
      num = 1;
    }
    const result = sharedValue.set(category(analyticsLocations[13]).withSpring(num));
  }, items1);
  let obj3 = category(analyticsLocations[12]);
  const fn = function _() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 2446209469388;
  fn.__initData = closure_11;
  let sessionId;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (analyticsContext != null) {
    sessionId = analyticsContext.sessionId;
  }
  const items2 = [sessionId, analyticsLocations, category.name];
  const effect = sharedValue.useEffect(() => {
    let obj = analyticsContext(analyticsLocations[14]);
    obj = { location_stack: analyticsLocations, page_session_id: null, source: null, page_type: "index", category: null };
    let sessionId;
    if (analyticsContext != null) {
      sessionId = tmp3.sessionId;
    }
    obj[1] = sessionId;
    obj[2] = analyticsContext(analyticsLocations[9]).COLLECTIBLES_SHOP;
    obj[4] = category.name;
    obj.track(outer1_7.COLLECTIBLES_SHOP_VIEWED, obj);
    let sessionId1;
    if (analyticsContext != null) {
      sessionId1 = tmp3.sessionId;
    }
    obj = { sessionId: sessionId1, checkpoint: category(tmp2[15]).CollectiblesShopPerfCheckpoint.SHOP_MOUNTED, tab: outer1_6.SHOP_ALL, unpublishedCategoriesShown: false, cacheDisabled: false };
    category(analyticsLocations[15]).trackShopPerf(obj);
  }, items2);
  obj = { value: analyticsLocations, children: null };
  const obj1 = { newValue: null, children: null };
  obj2 = {};
  const merged = Object.assign(analyticsContext);
  obj2.pageCategory = category.name;
  obj1[0] = obj2;
  obj3 = { skuIDs: [], activeSubscription: null, children: null };
  const obj4 = { style: tmp.rootContainer, children: null };
  const items3 = [callback(category(analyticsLocations[18]).CollectiblesProgressiveImage, { source: { uri: mobileBgUrl }, style: absoluteFill.absoluteFill }), , , ];
  const obj6 = { logoUrl, buttonColor: null, categoryName: null };
  let toHexStringResult;
  let tmp2Result = tmp2(tmp3[19]);
  if (backgroundColors != null) {
    const label = backgroundColors.label;
    toHexStringResult = label.toHexString();
  }
  obj6[1] = toHexStringResult;
  obj6[2] = category.name;
  items3[1] = callback(tmp2Result, obj6);
  const items4 = [tmp.border, animatedStyle];
  items3[2] = callback(analyticsContext(analyticsLocations[12]).View, { style: items4 });
  const obj7 = { category, products: filteredAndSortedProducts, scrollEnabled: true, onScroll: callback, paddingTop: null, paddingBottom: null, muteBundleStaticBackground: true, accessibilityLabel: null };
  tmp2Result = tmp2(tmp3[20]);
  obj7[4] = analyticsContext(analyticsLocations[6]).space.PX_16;
  obj7[5] = analyticsContext(analyticsLocations[10])().bottom + analyticsContext(analyticsLocations[6]).space.PX_16;
  const intl = tmp5(tmp3[21]).intl;
  obj7[7] = intl.formatToPlainString(category(analyticsLocations[21]).t.FNtLb3, { category: category.name });
  items3[3] = callback(tmp2Result, obj7);
  obj4[1] = items3;
  obj3[2] = closure_9(closure_4, obj4);
  obj1[1] = callback(category(analyticsLocations[17]).NativePaymentContextProvider, obj3);
  obj[1] = callback(category(analyticsLocations[16]).CollectiblesAnalyticsProvider, obj1);
  return callback(category(analyticsLocations[8]).AnalyticsLocationProvider, obj);
});
let result = require("items").fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx");

export default memoResult;